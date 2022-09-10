// import gql from 'graphql-tag';
import { gql } from '@apollo/client';

export const LOGIN_PATIENTS = gql`
    mutation LoginPatients($email: String!, $password: String!) {
        loginPatients(email: $email, password: $password) {
            token
            patient {
                _id
                username
                name
                email
            }
        }
    }
`;

export const ADD_PATIENTS = gql`
    mutation AddPatients($username:String!, $email:String!, $password: String!) {
        addPatients(username: $username, email:$email, password:$password) {
            token
            patient {
                _id
                username
                name
                email
            }
        }
    }
`;
export const LOGIN_DOCTORS = gql`
    mutation LoginDoctors($email: String!, $password: String!) {
        loginDoctors(email: $email, password: $password) {
            token
            doctor {
                _id
                username
                name
                email
            }
        }
    }
`;

export const ADD_DOCTORS = gql`
    mutation AddDoctors($username:String!, $email:String!, $password: String!){
        addDoctors(username: $username, email:$email, password:$password) {
            token
            doctor {
                _id
                username
                name
                email
            }
        }
    }
`;