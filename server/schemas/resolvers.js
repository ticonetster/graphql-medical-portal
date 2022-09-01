const { appointments, doctors, history, patient, schedules } = require('../models');

const resolvers= {
    Query: {
        appointments: async () => {
            return appointments.find({});
        },
    },
    Mutation: {
        createPatient: async (parent, args) => {

        }
    }
}



module.exports = resolvers;