import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'


const Signup = (props) => {
    const [pass ,  setpass ] = useState("")
    const [phone ,  setphone ] = useState("+92")





    // useEffect(() => {
    //   if ( JSON.parse(localStorage.getItem("Admin")) )
    //     props.history.push("/admin")
      
    //        }, [])
  

const postData = (e) =>{
    e.preventDefault()
   
    if(pass.length === 0){
        swal("Enter The Password !"  )
           return
         }
    if(phone.length === 0){
        swal("Enter The Phone Number !"  )
           return
         }
         if(phone.length !== 13){
          swal("Enter The Phone Number !"  )
             return
           }
      fetch("https://database-student-1-stop.herokuapp.com/main-login-user",{
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
            // swal("SucessFully Login"  )
            localStorage.setItem("user main" , JSON.stringify(res2) )
                props.history.push("/")
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
    }












  return (
       <div className="container-fuild rgjrgou1" style={{width : "30%" , margin : "50px auto",padding: "40px 41px",boxShadow: "0px 2px 6px red"}}>
            <form  onSubmit={(e)=>postData(e)}>
                {/* <center> */}

                <div style={{width: "90%",margin: "auto"}}>
                    <h4 style={{color : "rgb(61, 61, 61)"}}>Welcome Back</h4>
                    <h6 style={{color : "rgb(122, 122, 122)"}}>Don’t have an Account?  <span style={{textDecoration: "underline",color : "rgb(225, 80, 94)"}}> <Link to="/user/signup" style={{color : "rgb(225, 80, 94)"}}> Signup Now</Link></span></h6>
                </div>
                <br />
                {/* </center> */}

                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Phone</label>
                    <input type="text"  value={phone} onChange={(e)=>setphone(e.target.value)}  className="form-control" placeholder="Enter phone" />
                </div>
               
                
                <div className="form-group" style={{width: "90%",margin: "auto"}}>
                    <label>Password</label>
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
            <center>
                    <span style={{textDecoration: "underline",}}> <Link to="/user/forget-password-account-recovery" >Forgot Password </Link> </span>
            </center>
        </div>
  )
}
export default Signup