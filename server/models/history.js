const { Schema ,model } = require('mongoose');
//removed patient id as history belongs to the patient
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
    // patient_id: {
    //     type: String,
    //     required: true
    // }
});

const History = model('history', historySchema);

module.exports = History;