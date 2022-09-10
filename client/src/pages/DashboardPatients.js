import React from "react";

import "../css/style.css";

import appointments from "../assets/appointments.png";
import addappointments from "../assets/add_appointments.png";
import history from "../assets/history.png";
import edit from "../assets/edit.png";

const styles = {
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
    backgroundColor: "#9fafdf",
    backgroundClip: "border-box",
    borderRadius: ".25rem",
  },
  cardbody: {
    backgroundColor: "#9fafdf",
    padding: "15px 15px 15px 15px",
  },
  img: {
    height: "20px",
    width: "20px",
  },
};

const DashboardPatients = (props) => {
  return (
    <div style={styles.container}>
      {/* HELP WITH THE GRAPHQL </div> */}
      <h2>
        Welcome <strong>PATIENT NAME</strong>
      </h2>
      !
      <p>
        This is a secure medical portal to help connect and provide you with
        access and tools to assist you with your medical needs
      </p>
      <div style={styles.row}>
        <div class="col-sm col-xs-12">
          <div style={styles.card}>
            <img
              src={appointments}
              alt="Image of appointments"
              class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
              width="200px"
            />
            <h5 class="card-title">
              Upcoming Appointments
              <a href="/appointments/signup" class="edit-history-link-text">
                <img
                  style={styles.img}
                  class="edit-history-link"
                  src={addappointments}
                ></img>
                Add{" "}
              </a>
            </h5>

            {/* Appointments  */}
            <strong>FOR EACH APPOINTMENT</strong>
            <div class="col-sm col-xs-12 appointmentcard" style={styles.card}>
              <p class="card-text">
                Dr. <strong>DOCTOR NAME</strong> <br></br> at{" "}
                <strong>APPOINTMENT DATE/TIME</strong>
              </p>
              <p class="card-text">
                Reason for visit: <strong>APPOINTMENT CONCERN</strong>
              </p>
              <p class="card-text">
                <strong>APPOINTMENT STATUS</strong>
              </p>
            </div>

            {/* Patient History */}
            <div class="col-sm col-xs-12">
              <div class="card" style={styles.card}>
                <img
                  src={history}
                  alt="history alt"
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                ></img>
                <h5 class="card-title">
                  Patient History{" "}
                  <a href="/history" class="edit-history-link-text">
                    <img style={styles.img} src={edit} alt="edit img" />
                  </a>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Height: <strong>PATIENT HISTORY HEIGHT</strong>
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">
                  Weight: <strong>PATIENT HISTORY WEIGHT</strong>
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">
                  Allergies: <strong>PATIENT HISTORY ALLERGIES</strong>
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">
                  Current Medications:{" "}
                  <strong>PATIENT HISTORY MEDICATIONS</strong>
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">
                  Prior History Data: <strong>PATIENT HISTORY DATA</strong>
                </h6>
              </div>
            </div>
            <break></break>
            <div style={styles.row} class="row">
              <div class="col-sm col-xs-12">
                <div class="card" style={styles.card}>
                  <h5 class="card-title">Chat Here!</h5>
                  <div class="col-sm col-xs-12">
                    <p class="card-text">
                      <strong>CHAT LOGIN</strong>
                    </p>
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
