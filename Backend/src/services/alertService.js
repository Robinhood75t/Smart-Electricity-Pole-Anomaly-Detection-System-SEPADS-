let io;

const Alert = require("../models/alert");
const lastAlertTime = {};

async function triggerAlert({ pole_id, status , score}){
    if(status === "NORMAL") return;

    const now = Date.now();

    // cooldown time ( 1 min )
    if(lastAlertTime[pole_id] && now - lastAlertTime[pole_id] < 60 * 1000){
        return ;
    }
    lastAlertTime[pole_id] = now;

    let message = "";

    if(status === "HIGH_RISK"){
        message = "possible electricity theft detected";
    }else{
        message = "suspicious activity detected";
    }

    const alert = await Alert.create({
        pole_id,
        type: status === "HIGH_RISK" ? "HIGH_RISK" : "MEDIUM_RISK",
        score,
        message
    });

    if (io) {
        io.emit("alert", {
          pole_id,
          status,
          score
        });
    }

    console.log("ALERT STORED", alert);

    return alert;
}

module.exports = triggerAlert;