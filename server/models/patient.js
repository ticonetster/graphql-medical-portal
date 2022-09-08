const { Schema ,model } = require('mongoose');
//deleted id will create default in mongooseDB as _id
const patientSchema = new Schema({
    // id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
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
    address:{
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
    primarycareteam:[
        {
        type: Schema.Types.ObjectId,
        ref: 'doctors',
        }
]

});

const patient = model('patient', patientSchema);

module.exports = patient;