const { Schema ,model } = require('mongoose');

const patientSchema = new Schema({

});

const patient = model('patient', patientSchema);

module.exports = patient;