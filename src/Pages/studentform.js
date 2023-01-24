import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Contact = (props)=>  {
    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [city, setcity] = useState("") 
    const [address, setaddress] = useState("") 
    const [number, setnumber] = useState("") 
    const [subject, setsubject] = useState("") 
    const [class1, setclass1] = useState("") 
    // const [Message, setMessage] = useState("") 
    const [display , setdisplay] = useState(true)


    useEffect(() => {
        document.getElementById("mobile-site-hide-show11").style.display="none"

    window.scrollTo(0, 0)

    }, []);

    const Submitdata = (e)=>{
        e.preventDefault()
        setdisplay(false)

        fetch("https://database-student-1-stop.herokuapp.com/touchInStudent",{
            method: 'POST' , 
            headers :  {
              "Content-Type" : "application/json" , 
            } , 
            body : JSON.stringify({
              name  ,
              lname  ,
              city ,
              number ,
              email  ,
              address ,
              class1 ,
              subject  ,
            //   Message  ,
            })
          })
          .then((res)=>res.json())
          .then((res2)  =>{
              console.log(res2)
              if (res2){
                  swal("SucessFully Send "  )
                  setname ("") 
                  setlname("") 
                    setemail("") 
                    setsubject("") 
                    // setMessage("") 
                    setcity("") 
                    setnumber("") 
                    setaddress("") 
                    setdisplay(true)

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
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Student-Forum</strong></div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">FIND TUTOR</h2>
                            </div>
                            <div className="col-md-12">

                                <form onSubmit={(e)=>Submitdata(e)}>

                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input required type="text" value={name} onChange={(e)=>setname(e.target.value)}   className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input required type="text" value={lname} onChange={(e)=>setlname(e.target.value)}   className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                                <input required type="email" value={email} onChange={(e)=>setemail(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">City <span className="text-danger">*</span></label>
                                                <input required type="text" value={city} onChange={(e)=>setcity(e.target.value)}   className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email" className="text-black">Address <span className="text-danger">*</span></label>
                                                <input required type="text" value={address} onChange={(e)=>setaddress(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">Contact Number <span className="text-danger">*</span></label>
                                                <input required type="text" value={number} onChange={(e)=>setnumber(e.target.value)}   className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black">Subject </label>
                                                <input required type="text" value={subject} onChange={(e)=>setsubject(e.target.value)}   className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black">Class </label>
                                                <input required type="text" value={class1} onChange={(e)=>setclass1(e.target.value)}   className="form-control" />
                                            </div>
                                            
                                        </div>

                                        {/* <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_message" className="text-black">Message </label>
                                                <textarea value={Message} onChange={(e)=>setMessage(e.target.value)}   cols="30" rows="7" className="form-control"></textarea>
                                            </div>
                                        </div> */}
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                            {display ?
                                                <button type="submit" className="btn btn-primary btn-lg btn-block" >Send Message</button>
                                            :
                                            <span className="btn btn-primary btn-lg btn-block" >Send Message</span>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <div className="col-md-5 ml-auto">
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">New York</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">London</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">Canada</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}


export default Contact;