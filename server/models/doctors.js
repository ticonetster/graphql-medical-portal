const { Schema ,model } = require('mongoose');
//deleted id will create default in mongooseDB as _id
const doctorsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments',
        }
    ],
});

const doctors = model('doctors', doctorsSchema);

module.exports = doctors;