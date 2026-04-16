const mongoose = require("mongoose");

const baselineSchema = new mongoose.Schema({
    pole_id: {
        type: String,
        required: true,
        index: true,
    },
    time_slot:{
        type: String,
        required: true,
    },
    avg_current: {
        type: Number,
        required: true,
    },
    avg_voltage: {
        type: Number,
        required:true,
    },
    stdev_current:{
        type: Number,
        required: true,
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})

baselineSchema.index({ pole_id: 1, time_slot: 1 }, { unique: true });

const BaseLine = mongoose.model("BaseLine",baselineSchema);

module.exports = BaseLine;