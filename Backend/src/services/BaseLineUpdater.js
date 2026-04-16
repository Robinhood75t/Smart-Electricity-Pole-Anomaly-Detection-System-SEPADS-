
const History = require("../models/pole_reading_history");
const BaseLine = require("../models/baseline");

async function updateBaseline(io) {
    try {
        // As you can see there are 2 things - OneHourAgo & OneMinuteAgo -
        // the minute variable is just for testing purpose & 
        // for production we do oneHourAgothe minute variable is just for testing purpose & for production we do oneHourAgo
        //const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);   
        const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
        const result = await History.aggregate([
            {
                $match: {
                    time_stamp: { $gte: oneMinuteAgo }
                }
            },
            {
                $addFields: {
                    time_slot: {
                        $dateToString: {
                            format: "%Y-%m-%d %H:%M",   // "%Y-%m-%d %H:%M"  here change
                            date: "$time_stamp"
                        }
                    }
                }
            },
            {
                $group: {
                    _id: {
                        pole_id: "$pole_id",
                        time_slot: "$time_slot"
                    },
                    avg_current: { $avg: "$current" },
                    avg_voltage: { $avg: "$voltage"},
                    stdev_current: { $stdDevPop: "$current" }
                }
            }
        ]);

        for (let item of result) {

            if (!item || !item._id) continue;
        
            const updated = await BaseLine.findOneAndUpdate(
                {
                    pole_id: item._id.pole_id,
                    time_slot: item._id.time_slot
                },
                {
                    $set: {
                        avg_current: item.avg_current,
                        avg_voltage: item.avg_voltage,
                        stdev_current: item.stdev_current,
                        updated_at: new Date()
                    }
                },
                { upsert: true, new: true }
            );
        
            // SAFETY CHECK 
            if (!updated) {
                console.log("⚠️ Updated is null for:", item._id);
                continue;
            }
        
            console.log("📤 Emitting baseline:", updated.pole_id);
        
            if (io) {
                io.emit("baseline-update", {
                    pole_id: updated.pole_id,
                    expected_current: updated.avg_current,
                    expected_voltage: updated.avg_voltage
                });
            }
        }
        console.log("✅ Baseline updated successfully");

    } catch (error) {
        console.error("❌ Baseline update failed:", error);
    }
}

module.exports = updateBaseline;