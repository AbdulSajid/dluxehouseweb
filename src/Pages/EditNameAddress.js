import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import categ from '../assets/images/cate.jpeg';

import women from '../assets/images/women.jpg';
import u1 from '../assets/images/u1.jfif';

const SubCategoriesProduct = (props)=> {
    const [CategoriesUrl , setCategoriesUrl] = useState("")
    const [Product , setProduct] = useState([])
    const [Product1 , setProduct1] = useState([])
    const [Product2 , setProduct2] = useState([])
    const [Categories , setCategories] = useState([])
    const [fal , setFal] = useState(false)
    const [fal1 , setFal1] = useState(false)
    const [CategoriesName , setCategoriesname] = useState({})
    const [subCate , setsubCate] = useState([])
    const [allproduct , setallproduct] = useState([])
    const [Subproduct , setSubproduct] = useState([])
    const [SortedData , setSortedData] = useState([])
    const [SortedName , setSortedName] = useState([])
    const [SliderPhoto , setSliderPhoto] = useState([])
    const [mainUser , setmainUser] = useState({})
    const [email ,  setemail ] = useState("")
    const [address ,  setaddress ] = useState("")
    const [user ,  setuser ] = useState("")
    // categoriesName subcategories

    useEffect(() =>{

        window.scrollTo(0, 0)

        if( JSON.parse(localStorage.getItem("user main")) )
        {
            setmainUser(JSON.parse(localStorage.getItem("user main")))
        setuser(JSON.parse(localStorage.getItem("user main")).user)
        setaddress(JSON.parse(localStorage.getItem("user main")).address)
        setemail(JSON.parse(localStorage.getItem("user main")).email)
        } 
        // console.log( props.match.params);
        // let Categoriesname = props.match.params ;
        // setCategoriesname(Categoriesname)

        // const Inter = setInterval(()=>{
            //  if (!JSON.parse(localStorage.getItem("CateProduct")) ){
            //  var data1 = JSON.parse(localStorage.getItem("Cate")) 

        // var Category =  props.match.url.split("/")
        // setCategoriesUrl(data1)
        // var Category1 =  CategoriesUrl.split("-").join(" ")


        fetch("https://database-student-1-stop.herokuapp.com/slider-photo",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res=>res.json())
        .then(res1=>{
            // console.log(res1[0]);
            setSliderPhoto(res1)
        
        })



},[])













    
    
    const setProfile = ()=>{
        fetch("https://database-student-1-stop.herokuapp.com/new-profile-update",{
            method: 'POST' , 
            headers :  {
              "Content-Type" : "application/json" , 
            } , 
            body : JSON.stringify({
                id : JSON.parse(localStorage.getItem("user main"))._id,
              user  ,
              email ,
              address
            })
          })
          .then((res)=>res.json())
          .then((res2)  =>{
            let data = {
                ...JSON.parse(localStorage.getItem("user main")) ,
                user  ,
              email ,
              address
            }
            localStorage.setItem("user main" , JSON.stringify(data))
            setmainUser(data)
            props.history.push("/user/dashboard")
        })
    }



        return (
            <div>
                     {Subproduct.length === 0&& SliderPhoto.length === 0?
                        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} 
        className="loader-1"
      /> 
      :""
}
<center>
            <div className="pop-up-1 dis-off" id="myDi">
                <h1>Product Updated in Cart</h1>
            </div> 
        </center>
               

                <div className="site-section">
                    <div className="container-fuild" style={{width : "92%" , margin : "0px auto"}}>

                        <div className="row mb-5">
                            <div className="col-md-9 order-2">

                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5">Manange My Account</h2></div>
                                     </div>
                                </div>
                                <div className="row mb-5">
                                 
                                   
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" >
                                            <div className="block-4  hover-product-card p-3">
                                                <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                    <span>Name  :  {mainUser ? mainUser.user  : ""}</span>
                                                </span>
                                              
                                            </div>
                                    </div> 
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" >
                                            <div className="block-4  hover-product-card p-3">
                                                <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                    <span>Email : {mainUser ? mainUser.email  : ""} </span>
                                                </span>
                                            </div>
                                    </div> 
                                    <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" >
                                            <div className="block-4  hover-product-card p-3">
                                                <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                    <span>Address : {mainUser ? mainUser.address  : ""} </span>
                                                </span>
                                            </div>
                                    </div> 


                                </div>
                                <div className="row mb-5">
                                 
                                   
                                    <div className="col-sm-12 col-lg-9 mb-9" data-aos="fade-up" >
                                        <div className="block-4  hover-product-card p-3">
                                            <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                <span> <span style={{paddingRight : "20px"}}>Name  : </span>  <input type="text"  value={user} onChange={(e)=>setuser(e.target.value)} placeholder="Enter New Username"   style={{width: "80%"}} /></span>
                                            </span>
                                            
                                        </div>
                                    </div> 
                                    <div className="col-sm-12 col-lg-9 mb-9" data-aos="fade-up" >
                                        <div className="block-4  hover-product-card p-3">
                                            <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                <span> <span style={{paddingRight : "20px"}}> Email : </span>  <input type="text"  value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter New Email"   style={{width: "80%"}} /> </span>
                                            </span>
                                        </div>
                                    </div> 
                                    <div className="col-sm-12 col-lg-9 mb-9" data-aos="fade-up" >
                                        <div className="block-4  hover-product-card p-3">
                                            <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                <span> <span style={{paddingRight : "20px"}}>  Address : </span>   <input type="text"  value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="Enter New Address"   style={{width: "80%"}} /> </span>
                                            </span>
                                        </div>
                                    </div> 


                                </div>
                                {/* <div className="row mb-5"> */}
                                 
                                   <center>
                                    <button className="btn btn-primary btn-block" style={{width: "200px",margin: "auto",background : "rgb(227, 77, 92)" , border : "1px solid rgb(227, 77, 92)"}} onClick={()=>setProfile()}>Update Profile </button>
                                   </center>


                                {/* </div> */}
                              
                            </div>

                            <div className="col-md-3 order-1 mb-5 mb-md-0">
                                <div className=" p-4 rounded mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Hello , {mainUser ? mainUser.user  : ""}</h3>
                                    {/* <ul className="list-unstyled mb-0">
                                    {
                                        subCate.map((res,i)=>{
                                                return( <li className="mb-1" key={i}>
                                                            <Link  className="d-flex">
                                                                <span>{res.CategoriesName}</span> 
                                                            </Link>
                                                        </li>

                                                )

                                            })
                                        }
                                    </ul> */}
                                </div>


                               
                                <div className="dispaly-block1">

                                <div className="p-4 rounded mb-4">
                                    <div className="mb-4">
                                        <div className="border p-4 rounded mb-4">
                                            <div className="mb-4">
                                            <h3 className="mb-3 h5 text-black d-block">Manage My Profile  </h3>
                                                
                                            </div>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h6 text-grey d-block" onClick={()=>props.history.push("/user/dashboard/edit")}>My Profile</h3>
                                                <h3 className="mb-3 h6 text-grey d-block" onClick={()=>props.history.push("/user/dashboard/edit")}>Address Book</h3>
                                            
                                                {/* <input type="checkbox" name="" id="" onChange={()=>setSortPrice("Low")}/> Low to High <br/>
                                                <input type="checkbox" name="" id="" onChange={()=>setSortPrice("A")}/> A to Z <br/> */}
                                            
                                            </div>
                                            <hr/>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h5 text-black d-block">My Reviews  </h3>
                                                
                                            </div>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h6 text-grey d-block">My Profile</h3>
                                                <h3 className="mb-3 h6 text-grey d-block">Address Book</h3>
                                            
                                                {/* <input type="checkbox" name="" id="" onChange={()=>setSortPrice("Low")}/> Low to High <br/>
                                                <input type="checkbox" name="" id="" onChange={()=>setSortPrice("A")}/> A to Z <br/> */}
                                            
                                            </div>
                                            <hr/>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h5 text-black d-block">My Orders  </h3>
                                                
                                            </div>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h6 text-grey d-block">All</h3>
                                                {/* <h3 className="mb-3 h6 text-grey d-block">Address Book</h3> */}
                                            
                                                {/* <input type="checkbox" name="" id="" onChange={()=>setSortPrice("Low")}/> Low to High <br/>
                                                <input type="checkbox" name="" id="" onChange={()=>setSortPrice("A")}/> A to Z <br/> */}
                                            
                                            </div>
                                            <hr/>
                                        
                                                        
                                        </div> 
                                      
                                    </div>
                                   
                                </div>
                            
                            </div>
                            </div>
                        </div>







                        

                    </div>
                </div>
            </div>
        )
    }



export default SubCategoriesProduct;