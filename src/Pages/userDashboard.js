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
    const [order , setorder] = useState([])
    const [piece , setpiece] = useState([])
    const [total , settotal] = useState([])
    const [mainUser , setmainUser] = useState({})

    // categoriesName subcategories

    useEffect(() =>{

        window.scrollTo(0, 0)

        if( JSON.parse(localStorage.getItem("user main")) ) setmainUser(JSON.parse(localStorage.getItem("user main")))

        console.log( props.match.params);
        let Categoriesname = props.match.params ;
        setCategoriesname(Categoriesname)

        fetch("https://database-student-1-stop.herokuapp.com/AllUserCheckoutData",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res181=>res181.json())
        .then(res191=>{
            let g = []
            let p1 = []
            let t1 = []
            res191.map((res11,i)=>{
                if(res11.UserId){
                    if(res11.UserId === JSON.parse(localStorage.getItem("user main"))._id){
                        g.push(res11)
                    }
                }
            })
            console.log(g)

            g.map((res5,j)=>{
                let p = 0
                let t = res5.DeliveryCharges
                res5.Order.map((res15,i)=>{
                    p +=res15.Pieces  
                    t +=res15.Total_Product_Price  
                })
                p1[j] = p
                t1[j] = t
            })
            console.log(p1,t1,order)
            setpiece(p1)
            settotal(t1)
            setorder(g)
            })

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

const setMangeOrder = (data , i) =>{
    localStorage.setItem("User Order Details", JSON.stringify(data))
    props.history.push("/user/dashboard/order-detail")
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
                                        {/* <div className="float-md-left mb-4"><h2 className="text-black h5">My Profile</h2></div> */}
                                     </div>
                                </div>
                                <div className="row mb-5">
                                
                                    
                                   
                                    <div className="col-sm-6 col-lg-6 mb-6" data-aos="fade-up" >
                                            <div className="block-4  hover-product-card p-3">
                                                <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                    <span>Personal Profile | <span style={{color : "skyblue"}} onClick={()=>props.history.push("/user/dashboard/edit")}>Edit</span> </span>
                                                </span>
                                                <div className="block-4-text p-3">
                                                    <h3> { mainUser.user ? mainUser.user : "Umer"} </h3>
                                                    <h3 className="block-4-text pt-2"> { mainUser.email ? mainUser.email : "" }</h3>
                                                </div>
                                            </div>
                                    </div> 
                                    <div className="col-sm-6 col-lg-6 mb-6" data-aos="fade-up" >
                                            <div className="block-4  hover-product-card p-3">
                                                <span style={{margin : "10px 4px" , color : "grey", fontSize : "18px" , fontWeight : "bold",textAlign : "left"}}>
                                                    <span>Address Book | <span style={{color : "skyblue"}} onClick={()=>props.history.push("/user/dashboard/edit")}>Edit</span> </span>
                                                </span>
                                                <div className="block-4-text p-3">
                                                    <h3 style={{textTransform : "uppercase" , fontWeight : "bold"}}> Default Shipping Address </h3>
                                                    {/* <h3 className="block-4-text pt-2"> { mainUser.user ? mainUser.user : "umer" }</h3> */}
                                                    <p className="block-4-text pt-2" style={{ fontWeight : "500"}}> { mainUser.address ? mainUser.address : "No any Address Update now" }</p>
                                                </div>
                                            </div>
                                    </div> 
                                   


                                </div>




                                <div className="row mb-5">
                                
                                <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5">All Orders</h2></div>
                                     </div>

                                     <div className="col-sm-12 col-lg-12 mb-12" data-aos="fade-up" >
                                        <table class="table">
                                            <thead>
                                                <tr  style={{background : "#bbbbbb" , color : "white"}}>
                                                    <th scope="col">Order #</th>
                                                    <th scope="col">Placed On</th>
                                                    <th scope="col">Items</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {order.length !== 0 ? order.map((res,i)=>{
                                                    return (
                                                            <tr>
                                                                <th scope="row">{res.Date + res.OrderNum}</th>
                                                                <td>{res.Date[0]}{res.Date[1]}/{res.Date[2]}{res.Date[3]}/{res.Date[4]}{res.Date[5]}{res.Date[6]}{res.Date[7]}</td>
                                                                <th> { piece[i]}</th>
                                                                {/* <td> <img src={res.Product_Image_Upload} alt="" width="50px" height="50px"/> </td> */}
                                                                <th>Rs : {total[i]}</th>
                                                                <td  style={{color : "skyblue" , fontWeight : "bold"}} onClick={()=>setMangeOrder(res,i)}>Manage</td>
                                                            </tr>

                                                    )
                                                })
                                                : 
                                                <center>
                                                    No Any Order
                                                </center>
                                                }
                                               
                                            </tbody>
                                        </table>
                                    </div> 
                                    




                                   


                                </div>
                              
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


                               

                                <div className="dispaly-block1" >

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
                                                {/* <h3 className="mb-3 h6 text-grey d-block">Address Book</h3> */}
                                            
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