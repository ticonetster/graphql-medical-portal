const { Appointments, Doctors, History, Patients, Schedules } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    // Query: {
    //     appointments: async () => {
    //         return Appointments.find({});
    //     },

    //     // users: async () => {
    //     //     return await User.find().select('-__v -password').populate('savedBooks');
    //     // },

    //     // user: async (parent, { username }) => {
    //     //     return await User.findOne({ username }).select('-__v -password').populate('savedBooks');
    //     // }
    // },
    Query: {
        test: async () => {
            return 'test success!';
        },
    },
    Mutation: {
        loginPatients: async (parent, { email, password }) => {
            const patient = await Patients.findOne({ email });

            if (!patient) {
                throw new AuthenticationError(`Incorrect patient login information! [${email}]`);
            }

            const correctPw = await patient.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect patient password information!', 'INCORRECT_PASSWORD');
            }

            const token = signToken(patient);
            return { token, patient };
        },

        addPatients: async (parent, args) => {
            console.log("addPatients: TEST TEST IN BACKEND DEBUG")
            const { email } = args;
            const existingUser = await Patients.findOne({ email });

            if (existingUser) {
                throw new AuthenticationError(`Email already exist! [${email}]`);
            }

            const patient = await Patients.create(args);
            const token = signToken(patient);

            return { token, patient };
        },

        loginDoctors: async (parent, { email, password }) => {
            const doctor = await Doctors.findOne({ email });

            if (!doctor) {
                throw new AuthenticationError(`Incorrect patient login information! [${email}]`);
            }

            const correctPw = await doctor.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect doctor password information!', 'INCORRECT_PASSWORD');
            }

            const token = signToken(doctor);
            return { token, doctor };
        },

        addDoctors: async (parent, args) => {
            console.log("addDoctors: TEST TEST IN BACKEND DEBUG")
            const { email } = args;
            console.log("args: ", args)
            const existingUser = await Doctors.findOne({ email });
            console.log("existingUser: ", existingUser)
            if (existingUser) {
                throw new AuthenticationError(`Email already exist! [${email}]`);
            }
            console.log("it is hitting this!!!!")
            const doctor = await Doctors.create(args);
            console.log("doctor: ", doctor)
            const token = signToken(doctor);
            console.log("token: ", token)

            return { token, doctor };
        }
    }
}

module.exports = resolvers;