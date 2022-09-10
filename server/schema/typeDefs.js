const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Patients {
        _id: ID
        username: String
        name: String
        email: String
    }   
    
    type AuthPatients {
        token: ID!
        patient: Patients
    }

    type Doctors {
        _id: ID
        username: String
        name: String
        email: String
    }   

    type AuthDoctors {
        token: ID!
        doctor: Doctors
    }

    type User {
        _id: String
        email: String
    }

    type Query {
        test: String
        testUser: Patients
        currentUser: User
        me: Patients
        patients: [Patients]
        patient(username: String!): Patients
    }

    type Mutation {
        login(email: String!, password: String!): Patients
        signup(email: String!, password: String!): Patients
        loginPatients(email: String!, password: String!): AuthPatients
        addPatients(username: String!, email: String!, password: String!): AuthPatients 
        loginDoctors(email: String!, password: String!): AuthDoctors
        addDoctors(username: String!, email: String!, password: String!): AuthDoctors 
    }

`;

// const typeDefs = gql`
//     type User {
//         _id: ID
//         username: String
//         name: String
//         email: String
//     }   

//     type Auth {
//         token: ID!
//         user: User
//     }

//     type Query {
//         me: User
//         users: [User]
//         user(username: String!): User
//     }


//     type Mutation {
//         login(email: String!, password: String!): Auth
//         addUser(username: String!, email: String!, password: String!): Auth 
//     }

// `;

module.exports = typeDefs;