import singuppatient  from '../assets/signup_patient.png';

const styles = {
    container: {
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      color: "pink",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      marginRight: "-15px",
      marginLeft: "-15px",
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
  };




const SignUp =(props) => {
    return (
 <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="card my-5">
              <form id="signup-form" class="card-body cardbody-color p-lg-5">
                <div class="text-center">
                  <img src={singuppatient} alt="cartoon of sickly man"
                    class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="200px" alt="profile"/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="name-signup" aria-describedby="nameHelp" placeholder="Name"/>
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="email-signup" aria-describedby="emailHelp" placeholder="Email"/>
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password-signup" placeholder="Password"/>
                </div>
                <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Sign up</button></div>
                <div class="form-text text-center mb-5 text-dark">
                  <a href="/login" class="login-link text-dark fw-bold">Log in instead</a>
                </div>
              </form>
            </div>
      
          </div>
        </div>
      </div>
    
    ),
    };

<script src="js/signup.js"></script>

export default SignUp;



