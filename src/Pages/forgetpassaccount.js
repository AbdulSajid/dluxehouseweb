// import React,{useState , useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import swal from 'sweetalert'


// const Signup = (props) => {
//     const [pass ,  setpass ] = useState("")
//     const [code ,  setcode ] = useState("")
//     const [code1 ,  setcode1 ] = useState("")
//     const [email ,  setemail ] = useState("")





//     // useEffect(() => {
//     //   if ( JSON.parse(localStorage.getItem("Admin")) )
//     //     props.history.push("/admin")
      
//     //        }, [])
  
// const setCodeChanger =  () =>{
//     if(email.length === 0){
//         swal("Enter The Email  !"  )
//            return
//          }
//          else{
//             fetch("https://database-student-1-stop.herokuapp.com/user-send-code",{
//                 method: 'POST' , 
//                 headers :  {
//                   "Content-Type" : "application/json" , 
//                 } , 
//                 body : JSON.stringify({
//                 //   pass  ,
//                   email ,
//                 })
//               })
//               .then((res)=>res.json())
//               .then((res2)  =>{
//                   console.log(res2)
//                     setcode1(res2.Ma)
//               })
//          }
// }
// const postData = (e) =>{
//     e.preventDefault()
//     if(pass.length === 0){
//         swal("Enter The Password !"  )
//            return
//          }
  
     
//          console.log(code , code1 , typeof(code), typeof(code1))
//     if(parseInt(code) === code1){
//          fetch("https://database-student-1-stop.herokuapp.com/new-pass-recover",{
//         method: 'POST' , 
//         headers :  {
//           "Content-Type" : "application/json" , 
//         } , 
//         body : JSON.stringify({
//           pass  ,
//           email ,
//         })
//       })
//       .then((res)=>res.json())
//       .then((res2)  =>{
//           console.log(res2)
//           if (res2 !== null && !res2.Error  ){
//             // swal("SucessFully Login"  )
//             // localStorage.setItem("User" , JSON.stringify("Yes") )
//                 props.history.push("/")
//           }
//           else if (res2.Error){
//             swal(res2.Error )
//           }
//           else{
//             swal("Email & Password are Incorrect Plz Try Again !"  )
//           }
//         // console.log(res2)
//       })
//       .catch((err)=>console.log(err))
//     }
//     else{
//         swal("Enter The Correct Code !"  )
//     }
    
//   }











//   return (
//        <div className="container-fuild rgjrgou1" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
//             <form  onSubmit={(e)=>postData(e)}>
//                 {/* <center> */}

//                 <div style={{width: "90%",margin: "auto"}}>
//                     <h4 style={{color : "rgb(61, 61, 61)"}}>Recover Now</h4>
//                 </div>
//                 {/* <br /> */}
//                 {/* </center> */}

//                 <div className="form-group" style={{width: "90%",margin: "auto"}}>
//                     <label>Email address</label>
//                     <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)}  className="form-control" placeholder="Enter email" />
//                 </div>
//                 <br />
//                 <div className="form-group" style={{width: "90%",margin: "auto"}}>
//                     <label>Send Code      <span style={{color : "blue" , paddingLeft : "50px" , fontWeight : "bold"}} onClick={()=>setCodeChanger()} >Click here</span> </label>
//                     <input type="number"  value={code} onChange={(e)=>setcode(e.target.value)}  className="form-control" placeholder="Check Your Email to Proceed" />
//                 </div>
//                 <br />
//                 <div className="form-group" style={{width: "90%",margin: "auto"}}>
//                     <label>Password</label>
//                     <input type="password"   value={pass} onChange={(e)=>setpass(e.target.value)}  className="form-control" placeholder="Enter password" />
//                 </div>
//             <br/>

//                 <button type="submit" className="btn btn-primary btn-block" style={{width: "90%",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}}>Sign Up</button>
//                 {/* <p className="forgot-password text-right">
//                     Forgot <Link to="/forget-pass-admin">password?</Link>
//                 </p> */}
//                 {/* <p className=" text-center">
//                     <Link to="/login">Already Have an Account </Link>

//                 </p> */}
//             </form>
          
//         </div>
//   )
// }
// export default Signup















































import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import firebase from './firebase'
import  "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";


const Signup = (props) => {
    const [pass ,  setpass ] = useState("")
    const [code ,  setcode ] = useState("")
    const [code1 ,  setcode1 ] = useState("")
    const [email ,  setemail ] = useState("")
    const [gy ,  setgy ] = useState(true)
    const [phone ,  setphone ] = useState("+92")



    // useEffect(() => {
    //   if (JSON.parse(localStorage.getItem("set user value"))){
    //         setpass(JSON.parse(localStorage.getItem("set user value")).pass)
    //         setphone(JSON.parse(localStorage.getItem("set user value")).phone)
    //   }
        
      
    //        }, [])
  


    // useEffect(() => {
    //   if ( JSON.parse(localStorage.getItem("Admin")) )
    //     props.history.push("/admin")
      
    //        }, [])
  

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
      // const auth = getAuth();
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

          // localStorage.removeItem("set user value")

          // setgy(true)
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log("SMS not sent");
        });
     
    };



const postData = (e) =>{
    e.preventDefault()
    if(pass.length === 0){
        swal("Enter The Password !"  )
           return
         }
         if(phone.length !== 13){
          swal("Enter The Phone Number !"  )
             return
           }
         window.confirmationResult
         .confirm(code)
         .then((result) => {
           // User signed in successfully.
           const user = result.user;
           console.log(JSON.stringify(user));
          //  alert("User is verified");
         fetch("https://database-student-1-stop.herokuapp.com/new-pass-recover",{
        method: 'POST' , 
        headers :  {
          "Content-Type" : "application/json" , 
        } , 
        body : JSON.stringify({
          pass  ,
          phone ,
        })
      })
      .then((res)=>res.json())
      .then((res2)  =>{
          console.log(res2)
          if (res2 !== null && !res2.Error  ){
          
                props.history.push("/user/login")
          }
          else if (res2.Error){
            swal(res2.Error )
          }
          else{
            swal("Email & Password are Incorrect Plz Try Again !"  )
          }
      })
      .catch((err)=>console.log(err))
    })
    .catch((error) => {
     swal("Enter Correct Otp"  )


    });
  }








  const postData1 = () =>{
    setgy(false)
            setTimeout(()=>{
              onSignInSubmit()
            },2000)
    }





  return (
    <>
    { gy ?
       <div className="container-fuild rgjrgou1" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
            {/* <form  onSubmit={(e)=>postData(e)}> */}
                {/* <center> */}

                <div style={{width: "90%",margin: "auto"}}>
                    <h4 style={{color : "rgb(61, 61, 61)"}}>Forget Password</h4>
                    <p style={{color : "grey"}}>Please enter your phone number. You will receive a Pin Code on your registered phone number to reset the password</p>
                </div>
                {/* <br /> */}
                {/* </center> */}
                <div id="sign-in-button"></div>

                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Phone </label>
                    {/* <label>Phone <span style={{color : "blue" , paddingLeft : "50px" , fontWeight : "bold"}} onClick={()=>onSignInSubmit()} >Click for OTP</span></label> */}
                    <input type="text"  value={phone} onChange={(e)=>setphone(e.target.value)}  className="form-control" placeholder="Enter phone" />
                </div>
                <br />
                {/* <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label> Code </label>
                    <input type="number"  value={code} onChange={(e)=>setcode(e.target.value)}  className="form-control" placeholder="Check Your Phone" />
                </div>
                <br /> */}
                {/* <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>New Password</label>
                    <input type="password"   value={pass} onChange={(e)=>setpass(e.target.value)}  className="form-control" placeholder="Enter password" />
                </div>
            <br/> */}

                <button onClick={()=>postData1()} className="btn btn-primary btn-block" style={{width: "90%",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}}>Request Send</button>
                {/* <p className="forgot-password text-right">
                    Forgot <Link to="/forget-pass-admin">password?</Link>
                </p> */}
                {/* <p className=" text-center">
                    <Link to="/login">Already Have an Account </Link>

                </p> */}
            {/* </form> */}
          
        </div>

        :
       <div className="container-fuild rgjrgou1" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
            <form  onSubmit={(e)=>postData(e)}>
                {/* <center> */}

                <div style={{width: "90%",margin: "auto"}}>
                    <h4 style={{color : "rgb(61, 61, 61)"}}>Forget Password</h4>
                    <p style={{color : "grey"}}>Reset Password Token has been sent to you successfully.</p>
                </div>
                {/* <br /> */}
                {/* </center> */}
                <div id="sign-in-button"></div>
                <div id="recaptcha-container"></div>

                <br /> 
                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label> Code </label>
                    <input type="number"  value={code} onChange={(e)=>setcode(e.target.value)}  className="form-control" placeholder="Check Your Phone" />
                </div>
                <br />
                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>New Password</label>
                    <input type="password"   value={pass} onChange={(e)=>setpass(e.target.value)}  className="form-control" placeholder="Enter password" />
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
          
        </div>
              }
              </>
  )
}
export default Signup