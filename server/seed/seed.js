const connection = require('../config/connection');
const { appointments, doctors, history, Patients, schedules} = require('../models');


connection.on('error', (err) => err);


connection.once('open', async () => {
    console.log('connected');
  
  await appointments.deleteMany({});
  await doctors.deleteMany({});
  await history.deleteMany({});
  await Patients.deleteMany({});
  await schedules.deleteMany({});

  
    // Log out the seed data to indicate what should appear in the database
    //console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });