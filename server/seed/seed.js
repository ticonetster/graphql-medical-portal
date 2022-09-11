const connection = require('../config/connection');
const { Appointments, Doctors, History, Patients, Schedules } = require('../models');


connection.on('error', (err) => err);


connection.once('open', async () => {
    console.log('connected');

    await History.deleteMany({});
    await Doctors.deleteMany({});
    await Patients.deleteMany({});
    await Appointments.deleteMany({});
    //await Schedules.deleteMany({});
    const historyData = [{
        "height": "5'8''",
        "weight": "180",
        "allergies": "latex",
        "medications": "birth control",
        "data": "Previous history: Had a cold",
    },
    {
        "height": "5'3''",
        "weight": "130",
        "allergies": "latex",
        "medications": "Valium",
        "data": "Previous history: Had chicken poxs",
    }]
    const doctorData = [
        {
            "username": "jakesmith",
            "name": "Jake Smith",
            "gender": "male",
            "email": "jakesmith@hospital.com",
            "password": "j@kesm1th",
            "usertype": "doctor"
        },
        {
            "username": "robbrown",
            "name": "Rob Brown",
            "gender": "male",
            "email": "robbrown@hospital.com",
            "password": "r0bbr0wn",
            "usertype": "doctor"
        },
        {
            "username": "susangartner",
            "name": "Susan Gartner",
            "gender": "female",
            "email": "susangartner@hospital.com",
            "password": "sus@ng@rtn3r",
            "usertype": "doctor"
        }]
    const patientData = []
    const AppointmentData = []
    await History.collection.insertMany(historyData)
    await Doctors.collection.insertMany(doctorData)
    //console.table(doctorData)
    //console.log(doctorData[0])
    patientData.push(
        {
            "username": "Test",
            "name": "Test",
            "gender": "Test",
            "email": "test@test.com",
            "password": "testtest",
            "address": "123 Main St",
            "primaycareteam": [doctorData[0]._id],
            "history": historyData[0]._id,
            "usertype": "patient"
        },
        {
            "username": "princessdisco",
            "name": "Princess Disco",
            "gender": "female",
            "email": "princessdisco@gmail.com",
            "password": "d1sc0b@ll",
            "address": "123 Main St",
            "primaycareteam": [doctorData[1]._id],
            "history": historyData[1]._id,
            "usertype": "patient"
        }
    )
    await Patients.collection.insertMany(patientData)
    AppointmentData.push({
        "status": "Not Started",
        "dateTime": "2022-10-15T09:00",
        "concern": "I have a migraine",
        "patient": patientData[1]._id,
        "doctor": doctorData[1]._id
    },
    {
        "status": "Test",
        "dateTime": "2022-10-15T09:00",
        "concern": "Test",
        "patient": patientData[0]._id,
        "doctor": doctorData[0]._id
    })
    await Appointments.collection.insertMany(AppointmentData)
    console.log(patientData)


    // Log out the seed data to indicate what should appear in the database
    console.table(historyData)
    console.table(doctorData)
    console.table(patientData)
    console.table(AppointmentData)
    console.info('Seeding complete! 🌱');
    process.exit(0);
});