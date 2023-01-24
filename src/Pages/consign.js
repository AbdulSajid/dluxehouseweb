import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


const Contact = (props)=>  {
    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [phone, setphone] = useState("") 
    const [yearpurchase, setyearpurchase] = useState("") 
    const [locationpurchase, setlocationpurchase] = useState("") 
    const [expectedreturn, setexpectedreturn] = useState("") 
    const [iteminclude, setiteminclude] = useState("") 
    const [size, setsize] = useState("") 
    const [color, setcolor] = useState("") 
    const [material, setmaterial] = useState("") 
    const [condition, setcondition] = useState("") 
    const [photo, setphoto] = useState("") 
    const [Message, setMessage] = useState("") 
    const [data, setdata] = useState([]) 
    const [fvalue , setfvalue] = useState([])
    const [data1, setdata1] = useState([]) 
    const [fg , setfg] = useState(true)
    useEffect(() => {
        window.scrollTo(0, 0)
        fetch("https://tapitdabit-backend.vercel.app/FAQ",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res3=>res3.json())
        .then(res4=>{
            let dat1 = []
            res4.map((res55,c)=>{
                dat1.push(0)
            })
            setfvalue(dat1)
               setdata(res4)
               data.map((res,i)=>{
                data1[i] = res.text
               })

            console.log(res4)
          })
    }, []);


    const setChangerItemSize = (e)=>{

        if (fg) setfg(false)
        else setfg(true)
    
        for (let i = 0; i < 45; i++) {
          if(i === e){
            if(fvalue[e] === 0){
                fvalue[e] = 1
                // let f = document.getElementById("changeIcon"+i)
                 document.getElementById("changeIcon1"+i).innerHTML = "-"
                
            }
            else {
                fvalue[e] = 0
                // let v = document.getElementById("changeIcon"+i)
                 document.getElementById("changeIcon1"+i).innerHTML = "+"
                // v.innerHTML= ""
             }
          }
       
        }
      
      setfvalue(fvalue)
        if (fg) setfg(false)
        else setfg(true)
        
    }
        
    const Submitdata = (e)=>{
        e.preventDefault()
        const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "commerce")
        data.append("cloud_name", "freedeveloperss123")
        fetch("https://api.cloudinary.com/v1_1/freedeveloperss123/image/upload",{ 
            method : "POST",
            body : data , 
        })
        .then(res=>res.json())
        .then((res2)=>{
          console.log(res2)
        fetch("https://d-luxe-housebackend.vercel.app/CONSIGNMENT",{
            method: 'POST' , 
            headers :  {
              "Content-Type" : "application/json" , 
            } , 
            body : JSON.stringify({
              name  ,
              lname  ,
              email  ,
              phone  ,
              yearpurchase  ,
              locationpurchase  ,
              expectedreturn  ,
              size  ,
              iteminclude  ,
              color  ,
              material  ,
              condition  ,
              photo : res2.url ? res2.url : "" ,
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
        })
    }



        return (
            <> <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Consign</strong></div>
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
                            <div className="col-md-12">
                            {data.map((res,i)=>{
                                    return (
                                        <div style={{width : "100%"}}>
                                            <div className="border p-3 mb-3"  style={{margin : "0px 14px"}}>
                                                <div style={{display : "flex"}} onClick={()=>setChangerItemSize(i)}  href={"#collapsebankss"+i} aria-controls={"collapsebankss"+i}  data-toggle="collapse" >

                                        <span style={{color : "black" ,marginRight: "20px",marginTop: "-24px",fontSize:"30px"}} id={"changeIcon1"+i} >+</span>   <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href={"#collapsebankss"+i} role="button" aria-expanded="false" aria-controls={"collapsebankss"+i} style={{color : "black"}}> 
                                      {res.main}</a></h3>
                                                </div>

                                        <div className="collapse" id={"collapsebankss"+i}>
                                            <div className="py-2">
                                                <p className="mb-0">{

                                                    res.text.split("\n").map((res4)=>{
                                                            return (
                                                                <>
                                                                {res4} <br/>
                                                                </>
                                                            )
                                                })
                                                    
                                                    
                                                }</p>
                                            </div>
                                        </div>
                                    </div>      
                                        </div>
                            
                                    )
                                    })

                                    }
                                <h2 className="h3 mb-3 text-black">CONSIGNMENT FORM
</h2>
                                <p className="mb-3 text-black">To consign with us, please fill out the form below. We ask that you be as accurate as possible with the condition of your item(s), including all signs of wear and tear.
<br />
Please note, we only accept bags and accessories of at least 7/10 condition rating and 9/10 shoes in box.
<br />

If your image upload doesn’t work, please attach photos in a separate email to consign@jadorecouture.ca
</p>
                            </div>
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
                                            <div className="col-md-6">
                                                <label htmlFor="c_email" className="text-black" style={{fontWeight : "bold"}}>Email <span className="text-danger">*</span></label>
                                                <input type="email" required value={email} onChange={(e)=>setemail(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black" style={{fontWeight : "bold"}}>Phone </label>
                                                <input type="number"  value={phone} onChange={(e)=>setphone(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email" className="text-black" style={{fontWeight : "bold"}}>YEAR OF PURCHASE  <span className="text-danger">*</span></label>
                                                <input type="date" required value={yearpurchase} onChange={(e)=>setyearpurchase(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black" style={{fontWeight : "bold"}}>LOCATION OF PURCHASE    <span className="text-danger">*</span></label>
                                                <input type="text" required value={locationpurchase} onChange={(e)=>setlocationpurchase(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_text" className="text-black" style={{fontWeight : "bold"}}>EXPECTED RETURN ($) <span className="text-danger">*</span></label>
                                                <input type="text" required value={expectedreturn} onChange={(e)=>setexpectedreturn(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black" style={{fontWeight : "bold"}}>SIZE  </label>
                                                <input type="number" required value={size} onChange={(e)=>setsize(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_text" className="text-black" style={{fontWeight : "bold"}}>COLOR <span className="text-danger">*</span></label>
                                                <input type="text" required value={color} onChange={(e)=>setcolor(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black" style={{fontWeight : "bold"}}>MATERIAL   </label>
                                                <input type="text" value={material} onChange={(e)=>setmaterial(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_text" className="text-black" style={{fontWeight : "bold"}}>CONDITION (MENTION ALL FLAWS)  <span className="text-danger">*</span></label>
                                                <input type="text" required value={condition} onChange={(e)=>setcondition(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_subject" className="text-black" style={{fontWeight : "bold"}}>ITEM INCLUDES<span className="text-danger">*</span></label>
                                                <input type="text" required value={iteminclude} onChange={(e)=>setiteminclude(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_email" className="text-black" style={{fontWeight : "bold"}}>File Upload  <span className="text-danger">*</span></label>
                                                <input type="file" onChange={(e)=>setphoto(e.target.files[0])}   className="form-control" placeholder="" />
                                            </div>
                                           
                                        </div>
                                       

                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_message" className="text-black" style={{fontWeight : "bold"}}>Message <span className="text-danger">*</span></label>
                                                <textarea value={Message} required onChange={(e)=>setMessage(e.target.value)}   cols="30" rows="7" className="form-control"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-lg-4">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Submit" style={{background : "black",fontWeight : 600}} />
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