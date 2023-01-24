import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';




const Contact = (props)=>  {
    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [subject, setsubject] = useState("") 
    const [Message, setMessage] = useState("") 
    const [data, setdata] = useState([]) 
    const [data1, setdata1] = useState([]) 
    const [fg , setfg] = useState(true)
    const [fvalue , setfvalue] = useState([])


   useEffect(()=>{
    window.scrollTo(0, 0)

    fetch("https://d-luxe-housebackend.vercel.app/FAQ",{
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
          return () => {
            document.getElementById("get1").classList.remove("is-active");
            document.getElementById("get2").style.display = "none";
          }
        },[])

      
        
const setChangerItemSize = (e)=>{

    if (fg) setfg(false)
    else setfg(true)

    for (let i = 0; i < 45; i++) {
      if(i === e){
        if(fvalue[e] === 0){
            fvalue[e] = 1
            // let f = document.getElementById("changeIcon"+i)
             document.getElementById("changeIcon1"+i).style.transform = "rotate(180deg)"
            
        }
        else {
            fvalue[e] = 0
            // let v = document.getElementById("changeIcon"+i)
             document.getElementById("changeIcon1"+i).style.transform = "rotate(0deg)"
            // v.innerHTML= ""
         }
      }
   
    }
  
  setfvalue(fvalue)
    if (fg) setfg(false)
    else setfg(true)
    
}
    



        return (
            <div>
                {/* <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Contact</strong></div>
                        </div>
                    </div>
                </div> */}

                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <center>
                                <h2 className="h3 mb-5 mt-5 text-black">HOW WE CAN HELP YOU ?</h2>

                                </center>
                            </div>
                            {/* <div className="col-md-12"> */}

                            {/* <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                                </div>
                                </nav>
                                <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...1</div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...2</div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...3</div>
                                </div>
*/}
                                {data.map((res,i)=>{
                                    return (
                                        <div style={{width : "100%"}}>
                                            <div className="border p-3 mb-3"  style={{margin : "0px 14px"}}>
                                                <div style={{display : "flex"}} onClick={()=>setChangerItemSize(i)}  href={"#collapsebankss"+i} aria-controls={"collapsebankss"+i}  data-toggle="collapse" >

                                        <KeyboardArrowDownIcon style={{color : "black" ,marginRight: "20px",marginTop: "-4px"}} id={"changeIcon1"+i} />   <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href={"#collapsebankss"+i} role="button" aria-expanded="false" aria-controls={"collapsebankss"+i} style={{color : "black"}}> 
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

                            {/* <div className="col-md-12 ml-auto">
                                {data.map((res,i)=>{
                                    return (
                                        <div className="p-4 border mb-3">
                                    <span className="d-block text-primary h6 text-uppercase">{res.main}</span>
                                    <p className="mb-0">
                                        {
         
                                              res.text.split("\n").map((res4)=>{
                                                    return (
                                                        <>
                                                        {res4} <br/>
                                                        </>
                                                    )
                                        })
                                              
                                            
                                        }
                                    </p>
                                </div>
                                    )
                                })

                                }
                               
                            </div> */}

                            </div> 



                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    
}


export default Contact;