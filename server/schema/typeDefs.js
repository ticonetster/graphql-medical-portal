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
        user: Patients
    }

    type Doctors {
        _id: ID
        username: String
        name: String
        email: String
    }   

    type AuthDoctors {
        token: ID!
        user: Doctors
    }

    type Query {
        _dummy: String
    }
    
    type Mutation {
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