const express = require("express");
const router = express.Router();
const PoleReading = require("../models/pole_reading");

// get latest reading of each pole
router.get("/", async (req, res) => {
  try {
    const poles = await PoleReading.find().sort({ time_stamp: -1 });

    res.json(poles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;