
const BaseLine = require("../models/baseline");
const History = require("../models/pole_reading_history");
const triggerAlert = require("./alertService");

// In-memory cache -> just for calculation purposes.
const recentCache = {};

function getMovingAverage(arr) {  // this is for calculation moving average.
    if (!arr || arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

// This function is for updating the recentCache 
function updateCache(pole_id, current) {
    if (!recentCache[pole_id]) {
        recentCache[pole_id] = [];
    }

    recentCache[pole_id].push(current);

    if (recentCache[pole_id].length > 10) {
        recentCache[pole_id].shift();
    }
}

// Here we are building baseline if not available in the database.
// The time is also variying here for testing & production purposes.
async function buildBaseline(pole_id, time_slot) {

    //const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);

    const readings = await History.find({
        pole_id,
        time_stamp: { $gte: oneMinuteAgo } // here OneMinuteAgo
    });

    if (readings.length < 5) { // < 5
        return null;
    }

    const values = readings.map(r => r.current);

    const avg = values.reduce((a, b) => a + b, 0) / values.length;

    const variance = values.reduce((sum, val) => {
        return sum + Math.pow(val - avg, 2);
    }, 0) / values.length;

    const stdev = Math.sqrt(variance);

    return await BaseLine.findOneAndUpdate(
        { pole_id, time_slot },
        {
            avg_current: avg,
            stdev_current: stdev,
            updated_at: new Date()
        },
        { upsert: true, returnDocument: "after" }
    );
}

// Detection function to calculate anomaly and send alert.
// here also minute & hour changes based on Production & testing.
async function detect(reading,io) {
    const { pole_id, current, voltage } = reading;

    updateCache(pole_id, current);
    const history = recentCache[pole_id];
    const movingAverage = getMovingAverage(history);

    //const hour = new Date().getHours().toString().padStart(2, "0") + ":00";

    //testing minute code
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const minuteSlot = istTime.getHours().toString().padStart(2,"0") + ":" + istTime.getMinutes().toString().padStart(2,"0");

    let baseline = await BaseLine.findOne({ pole_id, time_slot: minuteSlot });  // <--- minute slot

    if (!baseline) {
        baseline = await buildBaseline(pole_id, minuteSlot); // <-- minute slot

        if (!baseline) {
            return { status: "collecting data" };
        }
    }
    io.emit("baseline-update", {
        pole_id,
        time_slot: baseline.time_slot,
        expected_current: baseline.avg_current,
        expected_voltage: baseline.avg_voltage,
        stdev_current: baseline.stdev_current
    });

    const expected = baseline.avg_current;
    const stdev = baseline.stdev_current || 1;

    // ----------------------
    // Improved Logic
    // ----------------------

    const z_score = (current - expected) / stdev;
    const threshold = expected + (2 * stdev);

    const prev = history[history.length - 2] || current;

    const high_current = current > threshold;
    const high_z = z_score > 2.5;
    const spike_flag = Math.abs(current - prev) > (2 * stdev);
    const above_movingAverage = current > movingAverage * 1.2;

    let score = 0;

    score += Math.min(40, Math.max(0, z_score * 10));
    if (high_current) score += 20;
    if (spike_flag) score += 20;
    if (above_movingAverage) score += 10;

    let status = "NORMAL";

    if (score > 70) status = "HIGH RISK";
    else if (score > 40) status = "MEDIUM RISK";

    await triggerAlert({ pole_id, status, score });

    return {
        status,
        score,
        metrics: {
            expected,
            current,
            movingAverage,
            z_score
        }
    };
}

module.exports = detect;