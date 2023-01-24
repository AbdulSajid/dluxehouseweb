import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import firebase from './firebase'
import  "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";


const Signup = (props) => {
    const [email ,  setemail ] = useState("")
    const [pass ,  setpass ] = useState("")
    const [user ,  setuser ] = useState("")
    const [phone ,  setphone ] = useState("+92")
    const [code ,  setcode ] = useState("")
    const [gy ,  setgy ] = useState(false)





    useEffect(() => {
      if (JSON.parse(localStorage.getItem("set user value"))){
            setuser(JSON.parse(localStorage.getItem("set user value")).user)
            setemail(JSON.parse(localStorage.getItem("set user value")).email)
            setpass(JSON.parse(localStorage.getItem("set user value")).pass)
            setphone(JSON.parse(localStorage.getItem("set user value")).phone)
      }
        
      
           }, [])
  
   const configureCaptcha = () => {
      const auth = getAuth();
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisble',
        'callback': (response) => {
          onSignInSubmit()
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
        'expired-callback': () => {
          onSignInSubmit()

          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth);

      // window.recaptchaVerifier = new RecaptchaVerifier(
      //   "sign-in-button",
      //   {
      //     size: "invisible",
      //     callback: (response) => {
      //       // reCAPTCHA solved, allow signInWithPhoneNumber.
      //       onSignInSubmit();
      //     },
      //   },
      //   auth
      // );
    };
    const onSignInSubmit = () => {
      // e.preventDefault();
      if (!gy){
configureCaptcha();
      const phoneNumber =  phone;
      console.log(phoneNumber);
      const appVerifier = window.recaptchaVerifier;
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent");
          swal("Check your Otp")

          localStorage.removeItem("set user value")
          setgy(true)
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent",error);
          // grecaptcha.reset(window.recaptchaWidgetId);

          // window.recaptchaVerifier.render().then(function(widgetId) {
          //   grecaptcha.reset(widgetId);
          // })
          // swal("Connection Problem Reload This Page")
          // window.href = "https://studentlocal.netlify.app/user/signup"
        });
      }
      else{
        window.location.reload();
        localStorage.setItem("set user value" , JSON.stringify({
          user  ,
            email  ,
            pass  ,
            phone 
        }))
      }
      
    };
const postData1 = (e) =>{
    e.preventDefault()
    // CONSOLE.LOG("EFSEF")
    if(email.length === 0){
        // if (email === "projectpharma874@gmail.com")
        swal("Enter Your Correct Email !" )
          //  return
        }
    if(pass.length === 0){
        swal("Enter The Password !"  )
           return
         }
         console.log(phone.length , 13)
         if(phone.length !== 13){
          swal("Enter The Phone Number !"  )
             return
           }
         window.confirmationResult
         .confirm(code)
         .then((result) => {
           // User signed in successfully.
           const user1 = result.user;
           console.log(JSON.stringify(user1));
          //  alert("User is verified");
          console.log(user  ,
            email  ,
            pass  ,
            phone )
            fetch("https://database-student-1-stop.herokuapp.com/main-signup-user",{
                    method: 'POST' , 
                    headers :  {
                      "Content-Type" : "application/json" , 
                    } , 
                    body : JSON.stringify({
                      user  ,
                      email  ,
                      pass  ,
                      phone ,
                    })
                  })
                  .then((res)=>res.json())
                  .then((res2)  =>{
                      console.log(res2)
                      if (res2 !== null && !res2.Error  ){
                        swal("SucessFully Create your Account"  )
                        // localStorage.setItem("User" , JSON.stringify("Yes") )
                            props.history.push("/user/login")
                      }
                      else if (res2.Error){
                        swal(res2.Error )
                      }
                      else{
                        swal("Email & Password are Incorrect Plz Try Again !"  )
                      }
                    // console.log(res2)
                  })
                  .catch((err)=>console.log(err))

           // ...
         })
         .catch((error) => {
          swal("Enter Correct Otp"  )


           // User couldn't sign in (bad verification code?)
           // ...
         });
      
    }












  return (
       <div className="container-fuild rgjrgou" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
            <form  onSubmit={(e)=>postData1(e)}>
                {/* <center> */}
                <div id="sign-in-button"></div>

                <div style={{width: "90%",margin: "auto"}}>
                    <h4 style={{color : "rgb(61, 61, 61)"}}>Create your S1S Account</h4>
                    <h6 style={{color : "rgb(122, 122, 122)"}}>Already have an Account?  <span style={{textDecoration: "underline",color : "rgb(225, 80, 94)"}}> <Link to="/user/login" style={{color : "rgb(225, 80, 94)"}}> Login Now</Link></span></h6>
                </div>
                <br />
                {/* </center> */}
                <div id="recaptcha-container"></div>
               
                  
                  <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Code</label>
                    <input type="number"  value={code} onChange={(e)=>setcode(e.target.value)}  className="form-control" placeholder="Enter 6 digit Code" />
                </div>
                <br />
              
               
                {gy ?
                    <button type="submit" className="btn btn-primary btn-block" style={{width: "90%",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}}>Sign Up</button>
                    : 
                    <span  className="btn btn-primary btn-block" style={{width: "90%",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}}>Sign Up</span>
                }
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
export default Signup