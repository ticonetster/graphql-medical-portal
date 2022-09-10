import gql from 'graphql-tag';

export const LOGIN_PATIENTS = gql`
    mutation loginPatients($email: String!, $password: String!) {
        loginPatients(email: $email, password: $password) {
            token
            patients {
                _id
                username
                name
                email
            }
        }
    }
`;

export const ADD_PATIENTS = gql`
    mutation addPatients($username:String!, $email:String!, $password: String!){
        addPatients(username: $username, email:$email, password:$password) {
            token
            user {
                _id
                username
                name
                email
            }
        }
    }
`;
export const LOGIN_DOCTORS = gql`
    mutation loginDoctors($email: String!, $password: String!) {
        loginDoctors(email: $email, password: $password) {
            token
            doctors {
                _id
                username
                name
                email
            }
        }
    }
`;

export const ADD_DOCTORS = gql`
    mutation addDoctors($username:String!, $email:String!, $password: String!){
        addDoctors(username: $username, email:$email, password:$password) {
            token
            doctors {
                _id
                username
                name
                email
            }
        }
    }
`;