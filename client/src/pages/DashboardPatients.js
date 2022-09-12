import React, { useState, useEffect } from 'react';
import { useQuery } from "react-query";
import { GET_PATIENT_EMAIL_BY_ID } from '../utils/queries';
import Auth from '../utils/auth';
import ChatLogin from "./Chat/ChatLogin";
import "../css/style.css";

import { dashboard, appointments, addappointments, history, edit, chatlogin } from './styles';


const DashboardPatients = (props) => {

  // set initial form state
  const [userData, setUserData] = useState({ username: '', usertype: '' });

  useEffect(() => {
    try {
      const loggedIn = Auth.loggedIn();
      if (loggedIn) {
        let currentUser = Auth.getProfile();
        let userType = Auth.getEntity();
        console.log("currentUser:: ", currentUser)
        setUserData({
          username: currentUser.data.username,
          usertype: userType,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []) // <-- empty dependency array

  // // Get user by id
  // const id = "631ea28824d2fe092c413d9a"
  // const { loading, error, data } = useQuery(GET_PATIENT_EMAIL_BY_ID, {
  //   variables: id,
  // });

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // console.log("this is the data from fetch::: ", data);



  return (
    <div style={dashboard.container}>
      {/* HELP WITH THE GRAPHQL </div> */}
      <header style={dashboard.header}>
        <h1>
          Welcome <strong>{userData.username}</strong>!
        </h1>
        <p>
          This is a secure medical portal to help connect and provide you with
          access and tools to assist you with your medical needs
        </p>
      </header>
      <div style={dashboard.row}>
        <div className="col-sm col-xs-12">
          <div style={dashboard.card}>
            <div style={dashboard.alignment}>
              <img
                src={appointments}
                alt="image_of_appointments"
                className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px"
              />
              <br></br>
              <br></br>
              <h5 className="card-title">
                Upcoming Appointments
                <a
                  href="/appointments/signup"
                  className="edit-history-link-text"
                >
                  <img
                    style={dashboard.img}
                    alt="upcoming_appointments"
                    className="edit-history-link"
                    src={addappointments}
                  ></img>
                  Add{" "}
                </a>
              </h5>
              {/* Appointments  */}
              <strong>FOR EACH APPOINTMENT</strong>
              <div
                className="col-sm col-xs-12 appointmentcard"
                style={dashboard.card}
              >
                <p className="card-text">
                  Dr. <strong>DOCTOR NAME</strong> <br></br> at{" "}
                  <strong>APPOINTMENT DATE/TIME</strong>
                </p>
                <p className="card-text">
                  Reason for visit: <strong>APPOINTMENT CONCERN</strong>
                </p>
                <p className="card-text">
                  <strong>APPOINTMENT STATUS</strong>
                </p>
              </div>
            </div>

            {/* Patient History */}
            <div className="col-sm col-xs-12">
              <div className="card" style={dashboard.card}>
                <div style={dashboard.alignment}>
                  <img
                    src={history}
                    alt="history alt"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  ></img>
                  <h5 className="card-title">
                    Patient History{" "}
                    <a href="/history" className="edit-history-link-text">
                      <img style={dashboard.img} src={edit} alt="edit img" />
                    </a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Height: <strong>PATIENT HISTORY HEIGHT</strong>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Weight: <strong>PATIENT HISTORY WEIGHT</strong>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Allergies: <strong>PATIENT HISTORY ALLERGIES</strong>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Current Medications:{" "}
                    <strong>PATIENT HISTORY MEDICATIONS</strong>
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Prior History Data: <strong>PATIENT HISTORY DATA</strong>
                  </h6>
                </div>
              </div>
            </div>
            <div style={dashboard.row} className="row">
              <div className="card" style={dashboard.card}>
                <div style={dashboard.alignment}>
                  <img
                    src={chatlogin}
                    alt="image_of_appointments"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                  />
                  {/* <h5 className="card-title">Chat Here!</h5> */}

                  <div className="col-sm col-xs-12">
                    <ChatLogin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPatients;
