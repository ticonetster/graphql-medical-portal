import "../css/style.css";

import singuppatient from "../assets/signup_patient.png";

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

const SignUp = (props) => {
  return (
    <div class="container" style={styles.container}>
      <div class="row" style={styles.row}>
        <div class="col-md-6 offset-md-3">
          <div class="card my-5">
            <form
              id="signup-form"
              class="card-body cardbody-color p-lg-5"
              style={styles.cardbody}
            >
              <div class="text-center">
                <img
                  src={singuppatient}
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>
              <div class="mb-3" style={styles.epbutton}>
                <input
                  type="text"
                  class="form-control"
                  id="name-signup"
                  aria-describedby="nameHelp"
                  placeholder="Name"
                />
              </div>
              <div class="mb-3" style={styles.epbutton}>
                <input
                  type="text"
                  class="form-control"
                  id="email-signup"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3" style={styles.epbutton}>
                <input
                  type="password"
                  class="form-control"
                  id="password-signup"
                  placeholder="Password"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                  Sign up
                </button>
              </div>
              <div class="form-text text-center mb-5 text-dark">
                <a href="/login" class="login-link text-dark fw-bold">
                  Log in instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

<script src="js/signup.js"></script>;

export default SignUp;
