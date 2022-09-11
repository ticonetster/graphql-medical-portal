import gql from 'graphql-tag';

 const getPatient = gql`
{
    me{
        name
        email
        address
        gender
        appointments[{
            status 
            concern 
            dateTime
            doctor
            patient
        }]
        primarycareteam[{
            name
            gender
            email
        }]
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
        appointments[{
            status 
            concern 
            dateTime
            doctor
            patient
        }]
    }
}`

export {getDoctor, getPatient} 