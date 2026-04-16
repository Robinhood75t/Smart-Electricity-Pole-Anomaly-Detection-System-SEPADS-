const express = require("express");
const router = express.Router();

const PoleReading = require("../models/pole_reading");
const history = require("../models/pole_reading_history");
const detect = require("../services/detectionEngine");

const { getIO } = require("../socket"); // we will create this

router.post("/", async (req, res) => {
    console.log("router called with body: " , req.body);
  try {
    const { pole_id, current, voltage } = req.body;

    const power = voltage * current;

    const updateReading = await PoleReading.findOneAndUpdate(
      { pole_id : pole_id},
      {
        current,
        voltage,
        power,
        time_stamp: new Date()
      },
      {upsert: true, new:true}
    );

    const io = req.app.get("io");

    if (io) {
      io.to(pole_id).emit("reading", {
        pole_id,
        current,
        voltage,
        power
      });
    }
    // save to history
    await history.create({
      pole_id,
      current,
      voltage,
      power,
      time_stamp: new Date()
    })
    const result = await detect({ pole_id, current, voltage });

    res.json({
      success: true,
      data: result
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;