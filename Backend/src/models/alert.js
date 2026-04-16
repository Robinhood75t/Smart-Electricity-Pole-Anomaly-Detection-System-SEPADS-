const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
    pole_id: {
        type: String,
        required: true,
        index: true
    },
    type: {
        type: String,
        enum: ["HIGH_RISK","MEDIUM_RISK"],
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
    is_resolved: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Alert", alertSchema);
