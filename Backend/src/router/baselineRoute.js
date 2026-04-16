const express = require("express");
const router = express.Router();

const Baseline = require("../models/baseline");

// Get baseline
router.get("/:pole_id/:time_slot", async (req, res) => {
  try {
    const { pole_id, time_slot } = req.params;

    const baseline = await Baseline.findOne({
      pole_id,
      time_slot
    });

    res.json(baseline);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;