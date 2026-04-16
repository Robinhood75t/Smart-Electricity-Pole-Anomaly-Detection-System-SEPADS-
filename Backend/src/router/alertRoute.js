const express = require("express");
const router = express.Router();

const Alert = require("../models/alert");

// get all alert
router.get("/",async (req, res) => {
  const alerts = await Alert.find().sort({ created_at: -1});
  res.json(alerts);
});

// Get alert for pole
router.get("/:pole_id", async (req, res) => {
  try {
    const alerts = await Alert.find({ pole_id: req.params.pole_id })
      .sort({ created_at: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;