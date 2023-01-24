import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Contact = (props)=>  {
    const [name, setname] = useState("") 
    const [data, setdata] = useState("") 
    // const [email, setemail] = useState("") 
    // const [subject, setsubject] = useState("") 
    // const [Message, setMessage] = useState("") 

    useEffect(() =>{
        window.scrollTo(0, 0)

    },[])
    const Submitdata = (e)=>{
        e.preventDefault()
        fetch("https://d-luxe-housebackend.vercel.app/checkInTrack",{
            method: 'POST' , 
            headers :  {
              "Content-Type" : "application/json" , 
            } , 
            body : JSON.stringify({
              name  ,
            })
          })
          .then((res)=>res.json())
          .then((res2)  =>{
              console.log(res2)
              if (res2){
                setdata(res2.DeliveredStatus)
                // swal("SucessFully Send "  )
            //  setname ("") 
            
                // localStorage.setItem("User" , JSON.stringify("Yes") )
                    // props.history.push("/login")
              }
              else if (res2.Error){
                swal(res2.Error )
              }
              else{
                swal("Plz Try Again !"  )
              }
            // console.log(res2)
          })
          .catch((err)=>console.log(err))
        
    }



        return (
            <> <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Tracking</strong></div>
                        </div>
                    </div>
                </div>
                
                
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form onSubmit={(e)=>Submitdata(e)}>
                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_fname" className="text-black">Tracking ID <span className="text-danger">*</span></label>
                                                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}   className="form-control" />
                                            </div>
                                           
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block"  style={{background : "black",fontWeight : 600}} value="Track" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12">
                            <br />
                            <br />
                               
                                <div style={{display : "flex" , justifyContent : "center"}}>
                                    <h1 style={{padding : "0px 40px"}}>Status         :   </h1>
                                    <h1><b> {data}</b></h1>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            </>
           
        )
    
}


export default Contact;