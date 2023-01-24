import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import categ from '../assets/images/cate.jpeg';

import women from '../assets/images/women.jpg';
import u1 from '../assets/images/u1.jfif';

import e1 from './images/1.jpeg';
import e2 from './images/2.jpeg';
import e3 from './images/3.jpeg';
import e4 from './images/4.jpeg';
import e5 from './images/5.jpeg';




import ff from './images/ff.jpeg';
import fn from './images/fn.jpeg';
import mf from './images/mf.jpeg';
import fl from './images/fl.jpeg';

import ff1 from './images/ff1.jpeg';
import ff12 from './images/ff12.jpeg';
import fn1 from './images/fn1.jpeg';
import mf1 from './images/mf1.jpeg';
import mf12 from './images/mf12.jpeg';
import fl1 from './images/fl1.jpeg';
import nn1 from './images/nn1.jpeg';
import fnn1 from './images/fnn1.jpeg';

const SubCategoriesProduct = (props)=> {
    // const [CategoriesUrl , setCategoriesUrl] = useState("")
    // const [Product , setProduct] = useState([])
    // const [Product1 , setProduct1] = useState([])
    // const [Product2 , setProduct2] = useState([])
    // const [Categories , setCategories] = useState([])
    // const [fal , setFal] = useState(false)
    // const [fal1 , setFal1] = useState(false)
    const [CategoriesName , setCategoriesname] = useState({})
    const [subCate , setsubCate] = useState([])
    const [allproduct , setallproduct] = useState([])
    const [Subproduct , setSubproduct] = useState([])
    // const [SortedData , setSortedData] = useState([])
    // const [SortedName , setSortedName] = useState([])
    const [SliderPhoto , setSliderPhoto] = useState([])
    const [mainUser , setmainUser] = useState({})
    const [piece , setpiece] = useState(0)
    const [p4 , setp4] = useState(0)
    const [total , settotal] = useState([])
    // categoriesName subcategories
    const [order , setorder] = useState([])
    const [accept , setaccept] = useState()
    const [num , setnum] = useState([])

    useEffect(() =>{

        window.scrollTo(0, 0)

        if( JSON.parse(localStorage.getItem("user main")) ) setmainUser(JSON.parse(localStorage.getItem("user main")))
        setorder([JSON.parse(localStorage.getItem("User Order Details"))]) 

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
            // res191.map((res11,i)=>{
            //     if(res11.UserId){
            //         if(res11.UserId === JSON.parse(localStorage.getItem("user main"))._id){
            //             g.push(res11)
            //         }
            //     }
            // })
            // console.log(g)
            
            g = [JSON.parse(localStorage.getItem("User Order Details"))]
            g.map((res5,j)=>{
                let a = []
                let ab = [0,0,0,0,0]
                let p = 0
                let p45 = 0
                let t = res5.DeliveryCharges
                res5.Order.map((res15,i)=>{
                    p +=res15.Pieces  
                    p45 +=1  
                    t +=res15.Total_Product_Price
                    a.push(res15.DeliveryStatus)
                    console.log(res15)
                    if(res15.DeliveryStatus === "Pending") ab[0] = ab[0] + 1
                    else if(res15.DeliveryStatus === "Accept") ab[1] = ab[1] + 1
                    else if(res15.DeliveryStatus === "Sorting Area") ab[2] = ab[2] + 1
                    else if(res15.DeliveryStatus === "Dispatch") ab[3] = ab[3] + 1
                    else if(res15.DeliveryStatus === "Delivered") ab[4] = ab[4] + 1
                    else {

                    }
                })
                p1[j] = p
                t1[j] = t
                setp4(p45)
                const vv = a.filter((res7,b)=>res7 === a[0])
                console.log(vv , res5.Order.length , a )
                setaccept(vv.length)
                console.log(p45 ,ab)
                setnum(ab)
            })
            console.log(p1,t1,order)
            setpiece(p1)
            settotal(t1)
            // setorder(g)
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

const setMangeOrder = () =>{

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

                                
                                

                                <div className="row mb-5">
                                
                                <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5"> Orders Details</h2></div>
                                     </div>

                                     <div className="col-sm-12 col-lg-12 mb-12" data-aos="fade-up" style={{overflow : "auto"}}>
                                        <table class="table">
                                            {/* <thead>
                                                <tr >
                                                <th scope="col">Order #</th>
                                                <th scope="col">Placed On</th>
                                                <th scope="col">Items</th>
                                                <th scope="col">Total</th>
                                                <th scope="col"></th>
                                                </tr>
                                            </thead> */}
                                            <tbody>
                                            {order.map((res,i)=>{
                                                    return (
                                                            <tr style={{background : "#bbbbbb" , color : "white"}}>
                                                                <th scope="row">
                                                                    <div style={{display : "flex" , flexDirection : "column"}}>
                                                                        <span> Order # {res.Date + res.OrderNum}</span>
                                                                        <span style={{fontWeight : "lighter"}}>  Placed On {res.Date[0]}{res.Date[1]}/{res.Date[2]}{res.Date[3]}/{res.Date[4]}{res.Date[5]}{res.Date[6]}{res.Date[7]}</span>
                                                                    </div>
                                                                   
                                                                </th>
                                                                {/* <td>{res.Date[0]}{res.Date[1]}/{res.Date[2]}{res.Date[3]}/{res.Date[4]}{res.Date[5]}{res.Date[6]}{res.Date[7]}</td> */}
                                                                {/* <th> { piece[i]}</th> */}
                                                                {/* <td> <img src={res.Product_Image_Upload} alt="" width="50px" height="50px"/> </td> */}
                                                                <th>Total: Rs. {total[i]}</th>
                                                            </tr>

                                                    )
                                                })

                                                }
                                                <br />
                                            {order.map((res,i)=>{
                                                    return (
                                                            <tr >
                                                                <th scope="row">
                                                                    <div style={{display : "flex" , flexDirection : "column"}}>
                                                                        <span> Packages</span>
                                                                        <span style={{fontWeight : "lighter"}}> Sold By Student 1 Stop</span>
                                                                    </div>
                                                                   
                                                                </th>
                                                                {/* <td>{res.Date[0]}{res.Date[1]}/{res.Date[2]}{res.Date[3]}/{res.Date[4]}{res.Date[5]}{res.Date[6]}{res.Date[7]}</td> */}
                                                                {/* <th> { piece[i]}</th> */}
                                                                {/* <td> <img src={res.Product_Image_Upload} alt="" width="50px" height="50px"/> </td> */}
                                                                <th>Rs : {total[i]}</th>
                                                            </tr>

                                                    )
                                                })

                                                }
                                               
                                               <br />
                      
                                              
                                                {/* {piece !== 0  && accept === order[0].Order.length || accept !== order[0].Order.length && order[0].Order[0].DeliveryStatus === "Accept" ?  */}
                                            
                                            <tr className="wsduhu">
                                                        {p4 !== 0  && accept === p4  && num[4] !== 0  ? 

                                                    <tr  style={{border :  "none" , textAlign : ""}} >
                                                        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                        <img src={e5} alt="" />  
                                                    </th>
                                                    </tr>
                                                    : ""
                                                    }
                                                     {p4 !== 0  && accept === p4  && num[3] !== 0  ? 

                                                    <tr  style={{border :  "none" , textAlign : ""}} >
                                                        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                        <img src={e4} alt="" />  
                                                    </th>
                                                    </tr>
                                                    : ""
                                                    }
                                                    {p4 !== 0  && accept === p4  && num[2] !== 0 ? 

                                                    <tr  style={{border :  "none" , textAlign : ""}} >
                                                        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                        <img src={e3} alt="" />  
                                                    </th>
                                                    </tr>
                                                    : ""
                                                    }
                                                   {/* {p4 !== 0  && accept === order[0].Order.length || accept !== order[0].Order.length && order[0].Order[0].DeliveryStatus === "Accept" ?  */}
                                                   {p4 !== 0  && accept === p4  && num[1] !== 0 ? 

                                                        <tr  style={{border :  "none" , textAlign : ""}} >
                                                            <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                            <img src={e2} alt="" />  
                                                        </th>
                                                        </tr>
                                                        : ""
                                                        }
                                                 {p4 !== 0  && accept === p4  && num[0] !== 0  ? 

                                                        <tr  style={{border :  "none" , textAlign : ""}} >
                                                            <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                            <img src={e1} alt="" />  
                                                        </th>
                                                        </tr>
                                                        : ""
                                                        }
                                            </tr>




                 



                                                <tr className = "dffkl">
                                                {p4 !== 0  && accept === p4  && num[4] !== 0  ? 

<tr>
<div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff12} alt="" style={{height : "120px"}} className="erfklkl"/>
 <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
 
  </th> 

</div>


</tr>
: ""
}
     {p4 !== 0  && accept === p4  && num[3] !== 0  ? 

<tr>
<div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={fnn1} alt="" style={{height : "120px"}} className="erfklkl"/>
 <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
 
  </th> 
  

</div>


</tr>
: ""
}
{p4 !== 0  && accept === p4 && num[2] !== 0 ? 

                         
<tr>
<div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
 <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
 
  </th> 

</div>


</tr>

: ""
}
   {/* {p4 !== 0  && accept === order[0].Order.length || accept !== order[0].Order.length && order[0].Order[0].DeliveryStatus === "Accept" ?  */}
   {p4 !== 0  && accept === p4 && num[1] !== 0 ? 
    
                                       
    <tr>
    <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
    <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
         <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
    <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
         <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
    <img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
         <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
    <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
         <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
        <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
    <img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
     
      </th> 
   
 </div>

  
</tr>
: ""
}
 {p4 !== 0  && accept === p4  && num[0] !== 0  ? 

<tr>
<div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
     <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
<img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
 <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
 
  </th> 

</div>

</tr>
: ""
}
                                                </tr>
                                              

<br />
<br />



                                                <div className="col-sm-12 col-lg-9 mb-9" data-aos="fade-up" >
                                        <table class="table">
                                            {/* <thead>
                                                <tr  style={{background : "#bbbbbb" , color : "white"}}>
                                                    <th scope="col">Order #</th>
                                                    <th scope="col">Placed On</th>
                                                    <th scope="col">Items</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead> */}
                                            <tbody>
                                                {order[0] && order[0].Order.map((res,i)=>{
                                                    return (
                                                            <tr>
                                                                <th scope="row"> <img src={res.Product_Image_Upload} alt="" style={{width :  "100px" , height  : "100px" }}/> </th>
                                                                <th>
                                                                   <div>
                                                                       <p>{res.Product_Name}</p>
                                                                       <p>{res.Product_Short_Notes}</p>
                                                                       </div> 
                                                                </th>
                                                                <th>Rs : {res.Total_Product_Price}</th>
                                                                <th>QTy : { res.Pieces}</th>
                                                                {/* <td> <img src={res.Product_Image_Upload} alt="" width="50px" height="50px"/> </td> */}
                                                                {/* <td  style={{color : "skyblue" , fontWeight : "bold"}} onClick={()=>setMangeOrder(res,i)}>Manage</td> */}
                                                            </tr>

                                                    )
                                                })

                                                }
                                               
                                            </tbody>
                                        </table>
                                    </div> 
                                    

















































                                                {/* {order[0] !== undefined &&  accept !== order[0].Order.length && order[0].Order[0].DeliveryStatus === "Accept" ? 

                                                <tr  style={{border :  "none" , textAlign : ""}} >
                                                    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={e1} alt="" />  
                                                   </th>
                                                </tr>
                                                : ""
                                                } */}

















                                               <br />
                                               {/* <tr  style={{border :  "none" , textAlign : ""}} >
                                                    <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                        <span style={{padding: "0px 49px 0px 0px"}}>Processing Start</span>  
                                                        <span style={{padding: "0px 44px 0px 0px"}}>Order Confirmed</span> 
                                                        <span style={{padding: "0px 49px 0px 0px"}}>Arrived At Sorting</span>  
                                                        <span style={{padding: "0px 69px 0px 0px"}}>Out of Delivery</span>  
                                                        <span style={{padding: "0px 0px 0px 0px"}}>Delivered</span>  
                                                   </th>
                                                </tr>
                                               <tr style={{border :  "none" ,textAlign : "center"}}>
                                                 
                                                    <th style={{border :  "none" }}> 
                                                    <img src={ff} alt="" style={{width : "130px"}} className="erfklkl"/>
                                                     <img src={ff} alt="" style={{width : "130px"}} className="erfklkl"/>
                                                     <img src={ff} alt="" style={{width : "130px"}} className="erfklkl"/>
                                                     <img src={ff} alt="" style={{width : "130px"}} className="erfklkl"/>
                                                     <img src={fl} alt="" />
                                                     </th>
                                                </tr> */}



                                               {/* <br />
                                               <tr>
                                                       <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff12} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                        <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
                                                        
                                                         </th> 
                                                      
                                                    </div>

                                                     
                                               </tr> */}
{/*                                                
                                               <br />

                                               <tr>
                                                       <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                        <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
                                                        
                                                         </th> 
                                                      
                                                    </div>

                                                     
                                               </tr>
                                               <br />
                                               <tr>
                                                       <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                        <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
                                                        
                                                         </th> 
                                                      
                                                    </div>

                                                     
                                               </tr>
                                               <br />
                                               <tr>
                                                       <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                        <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
                                                        
                                                         </th> 
                                                      
                                                    </div>

                                                     
                                               </tr>
                                               <br />
                                               <tr>
                                                       <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={mf12} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                        <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
                                                        
                                                         </th> 
                                                      
                                                    </div>

                                                     
                                               </tr>
                                               <br />
                                               <tr>
                                                       <div style={{display : "flex"  , flexDirection : "column",position : "relative", left: "30%"}}>
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Processing Start</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Order Confirmed</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Arrived At Sorting</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={ff1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                            <span style={{padding: "0px 0px 0px 30px"}}>Out of Delivery</span> </th> 
                                                           <th className="efeff" style={{border :  "none" , paddingTop : "0px" , paddingBottom : "0px",fontSize : "14px"}}>
                                                       <img src={fn1} alt="" style={{height : "120px"}} className="erfklkl"/>
                                                        <span style={{padding: "0px 0px 0px 30px"}}>Delivered</span>
                                                        
                                                         </th> 
                                                      
                                                    </div>

                                                     
                                               </tr> */}
                                             







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
                                            
                                            </div>
                                            <hr/>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h5 text-black d-block">My Reviews  </h3>
                                                
                                            </div>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h6 text-grey d-block">My Profile</h3>
                                                {/* <h3 className="mb-3 h6 text-grey d-block">Address Book</h3> */}
                                            
                                              
                                            </div>
                                            <hr/>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h5 text-black d-block">My Orders  </h3>
                                                
                                            </div>
                                            <div className="mb-4">
                                                <h3 className="mb-3 h6 text-grey d-block">All</h3>
                                                {/* <h3 className="mb-3 h6 text-grey d-block">Address Book</h3> */}
                                            
                                               
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