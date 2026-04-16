const cron = require("node-cron");
const updateBaseline = require("../services/BaseLineUpdater");

function startCron(io) {
    cron.schedule("* * * * *", async () => {
        console.log("⏱ Running baseline cron...");

        await updateBaseline(io);   // ✅ NOW io is defined
    });
}

module.exports = startCron;