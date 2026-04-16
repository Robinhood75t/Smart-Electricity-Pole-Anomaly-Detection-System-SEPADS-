const mongoose = require("mongoose");

const poleReadingHistorySchema = new mongoose.Schema({
  pole_id: {
    type: String,
    required: true,
    index: true   
  },

  current: {
    type: Number,
    required: true
  },

  voltage: {
    type: Number,
    required: true
  },

  power: {
    type: Number,
    required: true
  },

  time_stamp: {
    type: Date,
    default: Date.now,
    index: true  
  }

}, {
  versionKey: false
});

poleReadingHistorySchema.index({ pole_id: 1, time_stamp: -1 });

module.exports = mongoose.model(
  "PoleReadingHistory",
  poleReadingHistorySchema
);