//import gql from 'graphql-tag';
import { gql } from '@apollo/client';

/* const getPatient = gql`
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
 */
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
            _id
            firstName
            lastName
            email
        }
    }
`
const GET_PATIENT = gql `
    query GetPatient($_id: String!){
        getPatient(_id: $_id){
            _id
            username
            email
            firstName
            lastName
        }
    }
`


export { getDoctor, GET_ALL_DOCTORS, GET_PATIENT } 