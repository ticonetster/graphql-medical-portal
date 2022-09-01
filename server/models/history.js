const { Schema ,model } = require('mongoose');

const historySchema = new Schema({
    height: {
        type: Number,
        default: '0',
        required: true
    },
    weight: {
        type: Number,
        default: '0',
        required: true
    },
    allergies: {
        type: String,
        required: true
    },
    medications: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    patient_id: {
        type: Number,
        required: true
    }
});

const history = model('history', historySchema);

module.exports = history;