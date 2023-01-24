import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Contact = (props)=>  {
    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [subject, setsubject] = useState("") 
    const [Message, setMessage] = useState("") 
    useEffect(() =>{
        window.scrollTo(0, 0)

    },[])

    const Submitdata = (e)=>{
        e.preventDefault()

        fetch("https://d-luxe-housebackend.vercel.app/touchIn",{
            method: 'POST' , 
            headers :  {
              "Content-Type" : "application/json" , 
            } , 
            body : JSON.stringify({
              name  ,
              lname  ,
              email  ,
              subject  ,
              Message  ,
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
                    setMessage("") 
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
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
                        </div>
                    </div>
                </div>
                {/* <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Get In Touch</h2>
                            </div>
                            <div className="col-md-7">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7240.168706326494!2d67.0011266751226!3d24.860968436214574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e1a8f20229f%3A0xe990fa5a0155bff7!2sMS%20Office%20Building%2C%20Chand%20Bibi%20Rd%2C%20New%20Labour%20Colony%20Nanakwara%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1651939023191!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="col-md-5 ml-auto">
                                <div className="p-4 border mb-3">
                                    <span className="d-block  h6 text-uppercase">Location</span>
                                    <p className="mb-0">
ABDULLAH HAROON ROAD. SADDAR KARACHI Karachi, Sindh, Pakistan-75300</p>
                                </div>
                                <div className="p-4 border mb-3">
                                    <span className="d-block  h6 text-uppercase">Timimg</span>
                                    <p className="mb-0">12:00 PM - 11:00 AM . Mon to Sat</p>
                                </div>
                               

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div> */}
                
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Get In Touch</h2>
                            </div> */}
                            <div className="col-md-9">

                                <form onSubmit={(e)=>Submitdata(e)}>

                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_fname" className="text-black" style={{fontWeight : "bold"}}>First Name <span className="text-danger">*</span></label>
                                                <input type="text" required value={name} onChange={(e)=>setname(e.target.value)}   className="form-control" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black" style={{fontWeight : "bold"}}>Last Name <span className="text-danger">*</span></label>
                                                <input type="text" required value={lname} onChange={(e)=>setlname(e.target.value)}   className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_email" className="text-black" style={{fontWeight : "bold"}}>Email <span className="text-danger">*</span></label>
                                                <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_subject" className="text-black" style={{fontWeight : "bold"}}>Phone </label>
                                                <input type="number" value={subject} onChange={(e)=>setsubject(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_message" className="text-black" style={{fontWeight : "bold"}}>Message  <span className="text-danger">*</span></label>
                                                <textarea value={Message} required onChange={(e)=>setMessage(e.target.value)}   cols="30" rows="7" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Message" style={{background : "black",fontWeight : 600}} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3 ml-auto">
                                <div className="p-1">
                                    <p className="mb-0"><b>
                                        @jadorecouture.ca
                                    </b>
 </p>
                                </div>
                                <div className="p-1">
                                    <p className="mb-0">
                                        <b>  1-800-606-9706</b>
                                  
                                    </p>
                                </div>
                                <div className="p-1">
                                    <p className="mb-0">
                                        <b>
                                             @jadorecouture.ca
                                        </b>
</p>
                                </div>
                                {/* <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">London</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                                <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">Canada</span>
                                    <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
           
        )
    
}


export default Contact;