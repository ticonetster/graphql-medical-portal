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
        "_id": "631e42f136cc835430e2a250",
        "height": "5'8''",
        "weight": "180",
        "allergies": "latex",
        "medications": "birth control",
        "data": "Previous history: Had a cold",
    },
    {
        "_id": "631e42f136cc835430e2a24f",
        "height": "5'3''",
        "weight": "130",
        "allergies": "latex",
        "medications": "Valium",
        "data": "Previous history: Had chicken poxs",
    }]
    const doctorData = [
        {
            "_id": "631e428eba8096686455036f",
            "username": "jakesmith",
            "name": "Jake Smith",
            "gender": "male",
            "email": "jakesmith@hospital.com",
            "password": "j@kesm1th",
            "appointments":["631e42f136cc835430e2a24f"],
        },
        {
            "_id": "631e428eba8096686455036e",
            "username": "robbrown",
            "name": "Rob Brown",
            "gender": "male",
            "email": "robbrown@hospital.com",
            "password": "r0bbr0wn",
            "appointments":["631e42f136cc835430e2a250"],
        },
        {
            "_id": "631e428eba80966864550370",
            "username": "susangartner",
            "name": "Susan Gartner",
            "gender": "female",
            "email": "susangartner@hospital.com",
            "password": "sus@ng@rtn3r"
        }]
    const patientData = []
    const AppointmentData = []
    await History.create(historyData)
    await Doctors.create(doctorData)
    //console.table(doctorData)
    //console.log(doctorData[0])
    patientData.push(
        {
            "_id": "631e424c632b1c3c14bd15f2",
            "username": "Test",
            "name": "Test",
            "gender": "Test",
            "email": "test@test.com",
            "password": "testtest",
            "address": "123 Main St",
            "appointments":["631e42f136cc835430e2a24f"],
            "primarycareteam": [doctorData[0]._id],
            "history": historyData[0]._id
        },
        {
            "_id": "631e428eba80966864550375",
            "username": "princessdisco",
            "name": "Princess Disco",
            "gender": "female",
            "email": "princessdisco@gmail.com",
            "password": "d1sc0b@ll",
            "address": "123 Main St",
            "appointments":["631e42f136cc835430e2a250"],
            "primarycareteam": [doctorData[1]._id],
            "history": historyData[1]._id
        }
    )

    await Patients.create(patientData) //hashes password doesnt insert array keys
    AppointmentData.push(
        {
            "_id": "631e42f136cc835430e2a250",
            "status": "Not Started",
            "dateTime": "2022-10-15T09:00",
            "concern": "I have a migraine",
            "patient": patientData[1]._id,
            "doctor": doctorData[1]._id
        },
        {
            "_id": "631e42f136cc835430e2a24f",
            "status": "Test",
            "dateTime": "2022-10-15T09:00",
            "concern": "Test",
            "patient": patientData[0]._id,
            "doctor": doctorData[0]._id
        })
    //await Appointments.collection.insertMany(AppointmentData)
    await Appointments.create(AppointmentData)
    console.log(patientData)


    // Log out the seed data to indicate what should appear in the database
    console.table(historyData)
    console.table(doctorData)
    console.table(patientData)
    console.table(AppointmentData)
    console.info('Seeding complete! 🌱');
    process.exit(0);
});

