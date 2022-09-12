//import gql from 'graphql-tag';
import { gql } from '@apollo/client';

const getPatient = gql`
{
    me{
        firstName
        lastName
        email
        address
        gender
        appointments{
            status 
            concern 
            dateTime
            doctor
            patient
        }
        primarycareteam{
            name
            gender
            email
        }
        history{
            height
            weight
            allergies
            medications
            data
        }
    }
}`

const getDoctor = gql`
{
    me{
        firstName
        lastName
        email
        gender
        appointments {
            status 
            concern 
            dateTime
            doctor
            patient
        }
    }
}`

const GET_ALL_DOCTORS = gql `
    query GetDoctors{
        getDoctors{
            username
            email
        }
    }
`


export { getPatient, getDoctor, GET_ALL_DOCTORS } 