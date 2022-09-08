const { Schema ,model } = require('mongoose');

const appointmentsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Not Started'
    },
    concern: {
        type: String
    },
    dateTime: {
        type: Date
    },
    patient_id: {
        type: Number

    },
    doctor_id: {
        type: Number
    }
});

const appointments = model('appointments', appointmentsSchema);

module.exports = appointments;