import "../css/style.css";

import loginpatient from "../assets/login_patient.png";

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

const Login = (props) => {
  return (
    <div style={styles.container}>
      <div class="row" style={styles.row}>
        <div class="col-md-6 offset-md-3">
          <div class="card my-5" style={styles.card}>
            <form
              id="login-form"
              class="card-body cardbody-color p-lg-5"
              style={styles.cardbody}
            >
              <div class="text-center">
                <img
                  src={loginpatient}
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="150px"
                  alt="profile"
                />
              </div>
              <div class="mb-3" style={styles.epbutton}>
                <input
                  type="text"
                  class="form-control"
                  id="email-login"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3" style={styles.epbutton}>
                <input
                  type="password"
                  class="form-control"
                  id="password-login"
                  placeholder="Password"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <div id="emailHelp" class="form-text text-center mb-5 text-dark">
                Not Registered?{" "}
                <a href="/signup" class="login-link text-dark fw-bold">
                  Sign up instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

<script src="/js/login.js"></script>;

export default Login;
