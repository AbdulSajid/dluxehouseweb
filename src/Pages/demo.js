import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import firebase from './firebase'
import  "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";


class App extends React.Component {
    // const [email ,  setemail ] = useState("")
    // const [pass ,  setpass ] = useState("")
    // const [user ,  setuser ] = useState("")
    // const [phone ,  setphone ] = useState("")
    // const [code ,  setcode ] = useState("")

    state = {
        email : "",
        pass : "",
        user : "",
        phone : "",
        code : "",
    }



  
        configureCaptcha = () => {
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            this.onSignInSubmit();
          },
        },
        auth
      );
    };
    onSignInSubmit = (e) => {
      e.preventDefault();
      this.configureCaptcha();
      const phoneNumber = "+92" + this.state.phone;
      console.log(phoneNumber);
      const appVerifier = window.recaptchaVerifier;
  
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent");
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent");
        });
    };
    onSubmitOTP = (e) => {
      e.preventDefault();
      const code = this.state.code;
      console.log(code);
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          alert("User is verified");
          // ...
        })
        .catch((error) => {
            alert("Enter Correct Otp")
          // User couldn't sign in (bad verification code?)
          // ...
        });
    };



//  postData = (e) =>{
//     e.preventDefault()
//     // CONSOLE.LOG("EFSEF")
//     if(this.state.email.length === 0){
//         // if (email === "projectpharma874@gmail.com")
//         swal("Enter Your Correct Email !" )
//           //  return
//         }
//     if(this.state.pass.length === 0){
//         swal("Enter The Password !"  )
//            return
//          }
//     if(this.state.phone.length === 0){
//         swal("Enter The Phone Number !"  )
//            return
//          }
//          window.confirmationResult.confirm(this.state.code)
//          .then((result) => {
//            // User signed in successfully.
//            const user = result.user;
//            console.log(JSON.stringify(user));
//            alert("User is verified");

//             fetch("https://database-student-1-stop.herokuapp.com/main-signup-user",{
//                     method: 'POST' , 
//                     headers :  {
//                       "Content-Type" : "application/json" , 
//                     } , 
//                     body : JSON.stringify({
//                       user:  this.state.user,
//                       email: this.state.email ,
//                       pass : this.state.pass,
//                       phone: this.state.phone ,
//                     })
//                   })
//                   .then((res)=>res.json())
//                   .then((res2)  =>{
//                       console.log(res2)
//                       if (res2 !== null && !res2.Error  ){
//                         swal("SucessFully Create your Account"  )
//                         // localStorage.setItem("User" , JSON.stringify("Yes") )
//                             this.props.history.push("/user/login")
//                       }
//                       else if (res2.Error){
//                         swal(res2.Error )
//                       }
//                       else{
//                         swal("Email & Password are Incorrect Plz Try Again !"  )
//                       }
//                     // console.log(res2)
//                   })
//                   .catch((err)=>console.log(err))

//            // ...
//          })
//          .catch((error) => {
//           swal("Enter Correct Otp"  )


//            // User couldn't sign in (bad verification code?)
//            // ...
//          });
      
//     }









render(){

  return (
       <div className="container-fuild rgjrgou" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
            <form  onSubmit={this.onSubmitOTP}>
                {/* <center> */}

                <div style={{width: "90%",margin: "auto"}}>
                    <h4 style={{color : "rgb(61, 61, 61)"}}>Create your S1S Account</h4>
                    <h6 style={{color : "rgb(122, 122, 122)"}}>Already have an Account?  <span style={{textDecoration: "underline",color : "rgb(225, 80, 94)"}}> <Link to="/user/login" style={{color : "rgb(225, 80, 94)"}}> Login Now</Link></span></h6>
                </div>
                <br />
                {/* </center> */}

                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>User name</label>
                    <input type="text"  value={this.state.user} onChange={(e)=>this.setState({user:e.target.value})}  className="form-control" placeholder="Enter Username" />
                </div>
                <br />
                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Email address</label>
                    <input type="email"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}  className="form-control" placeholder="Enter email" />
                </div>
                <br />
                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Phone <span style={{color : "blue" , paddingLeft : "50px" , fontWeight : "bold"}} onClick={()=>this.onSignInSubmit()} >Click for OTP</span></label>
                    <input type="text"  value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})}  className="form-control" placeholder="Enter phone" />
                </div>
                <br />
                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Password</label>
                    <input type="password"   value={this.state.pass} onChange={(e)=>this.setState({pass:e.target.value})}  className="form-control" placeholder="Enter password" />
                </div>
            <br/>

                <button type="submit" className="btn btn-primary btn-block" style={{width: "90%",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}}>Sign Up</button>
                {/* <p className="forgot-password text-right">
                    Forgot <Link to="/forget-pass-admin">password?</Link>
                </p> */}
                {/* <p className=" text-center">
                    <Link to="/login">Already Have an Account </Link>
                </p> */}
            </form>
            <form  onSubmit={this.onSignInSubmit}>
                {/* <center> */}

                <div id="sign-in-button"></div>

                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Phone </label>
                    <input type="number"  value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})}  className="form-control" placeholder="Enter phone" />
                </div>
                <br />
               

                <button type="submit" className="btn btn-primary btn-block" style={{width: "90%",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}}>Sign Up</button>
                {/* <p className="forgot-password text-right">
                    Forgot <Link to="/forget-pass-admin">password?</Link>
                </p> */}
                {/* <p className=" text-center">
                    <Link to="/login">Already Have an Account </Link>
                </p> */}
            </form>
        </div>
  )
}


}
  export default App;















// import React from 'react'
// import firebase from './firebase'
// import  "firebase/auth";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";
// import { signInWithPhoneNumber } from "firebase/auth";
// import { Link } from 'react-router-dom'

// class App extends React.Component {
//     handleChange = (e) => {
//       const { name, value } = e.target;
//       this.setState({
//         [name]: value,
//       });
//     };
//     configureCaptcha = () => {
//       const auth = getAuth();
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "sign-in-button",
//         {
//           size: "invisible",
//           callback: (response) => {
//             // reCAPTCHA solved, allow signInWithPhoneNumber.
//             this.onSignInSubmit();
//           },
//         },
//         auth
//       );
//     };
//     onSignInSubmit = (e) => {
//       e.preventDefault();
//       this.configureCaptcha();
//       const phoneNumber = "+92" + this.state.mobile;
//       console.log(phoneNumber);
//       const appVerifier = window.recaptchaVerifier;
  
//       const auth = getAuth();
//       signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           // SMS sent. Prompt user to type the code from the message, then sign the
//           // user in with confirmationResult.confirm(code).
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent");
//           // ...
//         })
//         .catch((error) => {
//           // Error; SMS not sent
//           // ...
//           console.log("SMS not sent");
//         });
//     };
//     onSubmitOTP = (e) => {
//       e.preventDefault();
//       const code = this.state.otp;
//       console.log(code);
//       window.confirmationResult
//         .confirm(code)
//         .then((result) => {
//           // User signed in successfully.
//           const user = result.user;
//           console.log(JSON.stringify(user));
//           alert("User is verified");
//           // ...
//         })
//         .catch((error) => {
//             alert("Enter Correct Otp")
//           // User couldn't sign in (bad verification code?)
//           // ...
//         });
//     };
//     render() {
//       return (
//        <div className="container-fuild rgjrgou" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
//  <div style={{width: "90%",margin: "auto"}}>
//                     <h4 style={{color : "rgb(61, 61, 61)"}}>Create your S1S Account</h4>
//                     <h6 style={{color : "rgb(122, 122, 122)"}}>Already have an Account?  <span style={{textDecoration: "underline",color : "rgb(225, 80, 94)"}}> <Link to="/user/login" style={{color : "rgb(225, 80, 94)"}}> Login Now</Link></span></h6>
//                 </div>                
//                  <br />    
//                       <form onSubmit={this.onSignInSubmit}>
//             <div id="sign-in-button"></div>
//             <input
//               type="number"
//               name="mobile"
//               placeholder="Mobile number"
//               required
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
  
//           <h2>Enter OTP</h2>
//           <form onSubmit={this.onSubmitOTP}>
//             <input
//               type="number"
//               name="otp"
//               placeholder="OTP Number"
//               required
//               onChange={this.handleChange}
//             />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       );
//     }
//   }
//   export default App;








