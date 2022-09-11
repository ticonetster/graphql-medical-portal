import LoginPatientImage from "../assets/login_patient.png";
import SignupPatientImage from "../assets/signup_patient.png";
import LoginDoctorImage from "../assets/login_doctor.png";
import SignupDoctorImage from "../assets/signup_doctor.png";

export const loginpatient = LoginPatientImage;
export const singuppatient = SignupPatientImage;
export const logindoctor = LoginDoctorImage;
export const singupdoctor = SignupDoctorImage;

export const main = {
    login: {
        display: 'flex',
        margin: '5rem 0 5rem 0 !important',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // container: {
    //     paddingRight: "15px",
    //     paddingLeft: "15px",
    //     marginRight: "auto",
    //     marginLeft: "auto",
    //     width: "100%",
    //     color: "black",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    // },
    row: {
        display: "flex",
        flexWrap: "wrap",
        // marginRight: "-15px",
        // marginLeft: "-15px",
        justifyContent: "center",
        marginTop: "5rem",
        marginBottom: "5rem",
    },
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        backgroundColor: "#9fafdf",
        backgroundClip: "border-box",
        borderRadius: ".25rem",
    },
    cardbody: {
        backgroundColor: "#9fafdf",
        padding: "15px 15px 15px 15px",
    },
    form: {
        padding: "2rem"
    },
    epbutton: {
        display: "block",
        width: "100%",
        height: "calc(1.5em + .75rem + 2px)",
        padding: "0.375rem .75rem",
        fontsize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        backgroundClip: "padding-box",
        borderRadius: ".25rem",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        marginTop: "1rem"
    },
};

export const SignupStyles = {
    container: {
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    row: {
        display: "flex",
        flexWrap: "wrap",
        marginRight: "-15px",
        marginLeft: "-15px",
        justifyContent: "center",
        marginTop: "200px",
        marginBottom: "200px",
    },
    card: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        borderRadius: ".25rem",
    },
    cardbody: {
        backgroundColor: "#9fafdf",
        padding: "15px 15px 15px 15px",
    },
    epbutton: {
        display: "block",
        width: "100%",
        height: "calc(1.5em + .75rem + 2px)",
        padding: "0.375rem .75rem",
        fontsize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5",
        backgroundClip: "padding-box",
        borderRadius: ".25rem",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
};