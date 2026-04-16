const mongoose = require("mongoose");

const poleReadingSchema = new mongoose.Schema({
    pole_id: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    current:{
        type: Number,
        required: true,
    },
    voltage: {
        type: Number,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },
    time_stamp: {
        type: Date,
        required: true,
        default: Date.now,
    }
})

const PoleReading = mongoose.model("PoleReading",poleReadingSchema);

module.exports = PoleReading;