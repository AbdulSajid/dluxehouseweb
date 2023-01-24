// import React, {useState , useEffect} from 'react';
// import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

// const Checkout = (props) => {
//     const [fname , setfName ] = useState("")
//     const [Lname , setLName ] = useState("")
//     const [Address , setAddress ] = useState("")
//     const [Address1 , setAddress1 ] = useState("")
//     // const [ZipPostal , setZipPostal ] = useState("")
//     const [Email , setEmail ] = useState("")
//     const [Phone , setPhone ] = useState("")
//     const [admindataall , setadmindataall ] = useState(0)
//     const [Order_Notes , setOrder_Notes ] = useState("")
//     const [cart , setCart] = useState([])
//     const [tot , setot] = useState(0)
//     const [total , settotal] = useState(0)
//     const [doctor , setdoctor] = useState(0)
//     const [Num1111 , setNum1111] = useState(0)
//     const [discount , setdiscount ] = useState({})

//     const [range1,setRange1] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
//     const [range,setRange] = useState([])
//     const [range2,setRange2] = useState([])

//     const [display , setdisplay] = useState(true)
//     const [play , setplay] = useState(false)
//     // const [Product_Image_Upload , setProduct_Image_Upload] = useState("")




//     useEffect(() =>{
//         window.scrollTo(0, 0)
//         var data =  JSON.parse(localStorage.getItem("Cart")) 
//         // var data1 =  JSON.parse(localStorage.getItem("CartPrice")) 
//         if (data) {
//             setCart(data)
//             // setot(JSON.parse(localStorage.getItem("CartPrice")) )
//             // if(JSON.parse(localStorage.getItem("Custom Img")) )
//             // setcustomPhotojson(true )

//             // data.map((res,i)=>{
//             //     if(res.Product_Catagories === "Custom Products"){
//             //         setplay(true)
//             //     }
//             // })
//             fetch("https://tapitdabit-backend.vercel.app/AllUserCheckoutData",{
//                 method: "GET",
//                  headers :  {
//                  "Content-Type" : "application/json" , 
//              } ,
//             })
//             .then(res181=>res181.json())
//             .then(res191=>{
//                 setNum1111(res191.length)
//             })
//   fetch("https://tapitdabit-backend.vercel.app/admindata",{
//     method: "GET",
//      headers :  {
//      "Content-Type" : "application/json" , 
//  } ,
// })
// .then(res18=>res18.json())
// .then(res19=>{
//     setdoctor(res19[0].condition)
//     console.log(res19[0].DeliveryCharges,JSON.parse(localStorage.getItem("CartPrice")));
//   setadmindataall(res19[0].DeliveryCharges)

//   let j = 0
//   data.map((item,i)=>{
//       j = item.Total_Product_Price + j
//       //    if (item.doctor_prescription){
//           //     localStorage.setItem("doctor",JSON.stringify(true))
//           //    }
//         })
//         // var doc =  JSON.parse(localStorage.getItem("doctor")) 
//         // setdoctor(doc)
//         var t = document.getElementById("subtotal")
//         t.innerHTML = "Rs "+ j

//         if(JSON.parse(localStorage.getItem("CartPrice")) < res19[0].condition){
//                       j = j+ res19[0].DeliveryCharges
//                   }
//                 //   else{
//                 //       j = 0
//                 //   }
//             if(JSON.parse(localStorage.getItem("discount")) ){
//                 setdiscount(JSON.parse(localStorage.getItem("discount")))
//                 var d = document.getElementById("discount")
//                 if(JSON.parse(localStorage.getItem("discount")).discount > 1){
//                     d.innerHTML = "Rs " +JSON.parse(localStorage.getItem("discount")).discount
//                     document.getElementById("ci11").style.visibility = "visible"
//                     j = j - JSON.parse(localStorage.getItem("discount")).discount
//                 }
//                 else{
//                     d.innerHTML = " " +JSON.parse(localStorage.getItem("discount")).discount1 +" % Off"
//                     j =j - (j*(JSON.parse(localStorage.getItem("discount")).discount1)/100)

//                 }
//             }else{
//                 var d = document.getElementById("discount")
//                 d.innerHTML = "No discount"

//             }

//             setot(j)
//             // var t = document.getElementById("subtotal")
//             // t.innerHTML = "Rs "+ j
//             var f = document.getElementById("total")
//             f.innerHTML = "Rs " +j

//         })

//         }
//         // console.log(total,cart,j)
//    else{
//             var t = document.getElementById("subtotal")
//             t.innerHTML = "Rs "+0
//             var f = document.getElementById("total")
//             f.innerHTML = "Rs " +0
//    }
//   },[])
  
  

// //   useEffect(() => {
  
// //     return () => {
// //         localStorage.removeItem("doctor")
// //     }
// //   }, [])


//     const SubmitDataMessage = () =>{
//         // e.preventDefault()
//         console.log(cart)
//         // fetch("https://database-student-1-stop.herokuapp.com/admindata",{
//         //                         method: "POST",
//         //                         headers :  {
//         //                             "Content-Type" : "application/json" , 
//         //                         }
//         //                     })
//         //                     .then(res=>res.json())
//         //                     .then((res1)=>{ 
//         // if ( JSON.parse(localStorage.getItem("User"))  ){
//             if (cart.length  >= 1 ){
//                 setdisplay(false)
//         console.log("wddde");
//                let j
//         if(JSON.parse(localStorage.getItem("CartPrice")) < doctor){
//                  j = admindataall
//             }
//             else{
//                  j = 0
//             }
//             console.log(j,tot)
//             let date = new Date()
//             let f= date.getDate() +" "+(date.getUTCMonth()+1)+ " "+date.getUTCFullYear()
//             let day= date.getDate() 
//             let month= (date.getUTCMonth()+1)
//             let year= date.getUTCFullYear()
//             year = year - 2000

//             if(date.getDate() < 10) day = "0"+ date.getDate()
//             if(date.getUTCMonth()+1 < 10) month = "0"+ (date.getUTCMonth()+1)

//             let c = day +""+month+ ""+year

//             console.log(day , month , year,c, )
//                 // fetch("https://tapitdabit-backend.vercel.app/UsergetDatafromclient",{
//                 //         method: "POST",
//                 //         headers :  {
//                 //             "Content-Type" : "application/json" , 
//                 //         } ,
//                 //         body : JSON.stringify({
//                 //             fname,
//                 //             Lname,
//                 //             Address ,
//                 //             Address1 ,
//                 //             // UserId : JSON.parse(localStorage.getItem("user main"))._id ,
//                 //             // ZipPostal ,
//                 //             Email ,
//                 //             Phone ,
//                 //             // Order_Notes,
//                 //             discount ,
//                 //             DeliveryCharges:j,
//                 //             Order : cart,
//                 //             Num123 : Num1111,
//                 //             Date1 : c ,

//                 //         }),
//                 //     })
//                 //     .then(res=>res.json())
//                 //     .then((res2)=>{        
//                 //     if(res2.Error){
//                 //         swal("Plz Refresh And try Again the Order");
//                 //      }
//                 //      else{
//                 //         setdisplay(true)
//                 //         swal("Successfully Submit your Order!");
//                 //         // fetch("https://database-student-1-stop.herokuapp.com/user-cart-order",{
//                 //         //     method: "POST",
//                 //         //     headers :  {
//                 //         //         "Content-Type" : "application/json" , 
//                 //         //     } ,
//                 //         //     body : JSON.stringify({
//                 //         //         Order : cart ,
//                 //         //         user : JSON.parse(localStorage.getItem("User")) 
//                 //         //     })
//                 //         // })
//                 //         // .then(res10=>res10.json())
//                 //         // .then((res11)=>{ 
//                 //         //     console.log(res11);
//                 //         // })
//                 //         // fetch("https://database-student-1-stop.herokuapp.com/user-cart-detail",{
//                 //         //     method: "POST",
//                 //         //     headers :  {
//                 //         //         "Content-Type" : "application/json" , 
//                 //         //     } ,
//                 //         //     body : JSON.stringify({
//                 //         //         Details : {
//                 //         //             fname,
//                 //         //             Lname ,
//                 //         //             CName, 
//                 //         //             Address ,
//                 //         //             Address1 ,
//                 //         //             StateCountry  ,
//                 //         //             ZipPostal ,
//                 //         //             Email ,
//                 //         //             Phone ,
//                 //         //             Date : c ,
//                 //         //             Order_Notes,
//                 //         //             Select_Country,
//                 //         //         },
//                 //         //         user : JSON.parse(localStorage.getItem("User")) 
//                 //         //     })
//                 //         // })
//                 //         // .then(res6=>res6.json())
//                 //         // .then((res7)=>{ 
//                 //         //     console.log(res7);
//                 //         // })

//                 //             setfName ("")
//                 //             // setLName ("" )
//                 //             setAddress  ("")
//                 //             setAddress1 ("" )
//                 //             // setZipPostal ("" )
//                 //             setEmail ("" )
//                 //             setPhone ("" )
//                 //             setOrder_Notes ("")
//                 //         localStorage.removeItem("Cart")
//                 //         localStorage.removeItem("doctor")
//                 //         localStorage.removeItem("SearchData")
//                 //         localStorage.removeItem("Data")
//                 //         localStorage.removeItem("CartPrice")
//                 //         localStorage.removeItem("CateProduct")
//                 //         props.history.push(`/`)

//                 //      }
//                 //   })
//                 //   .catch(err=>{
//                 //     swal("There is an Error");
//                 // })
//             }
//             else{
//                 swal("There is No Any Product in Your Cart");
//                 setTimeout(()=>{
                    
//                     props.history.push(`/`)
//                 },2000)
//             }
//         // })
//     }
//         return (
//             <div>
//               <div className="all-title-box">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <h2>Checkout</h2>
//                 <ul className="breadcrumb" style={{background :"rgb(175, 220, 200)"}}>
//                   <li className="breadcrumb-item"><a href="#">Shop</a></li>
//                   <li className="breadcrumb-item active">Checkout</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* End All Title Box */}
//         {/* Start Cart  */}
//         <div className="cart-box-main">
//           <div className="container">
            
//             <div className="row">
//               <div className="col-sm-6 col-lg-6 mb-3">
//                 <div className="checkout-address">
//                   <div className="title-left">
//                     <h3>Billing address</h3>
//                   </div>
//                   <form className="needs-validation" noValidate>
//                     <div className="row">
//                       <div className="col-md-6 mb-3">
//                         <label htmlFor="firstName">First name *</label>
//                         <input type="text" className="form-control" id="firstName" placeholder defaultValue required value={fname} onChange={(e)=>setfName(e.target.value)}/>
//                         <div className="invalid-feedback"> Valid first name is required. </div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <label htmlFor="lastName">Last name *</label>
//                         <input type="text" className="form-control" id="lastName" placeholder defaultValue required value={Lname} onChange={(e)=>setLName(e.target.value)}/>
//                         <div className="invalid-feedback"> Valid last name is required. </div>
//                       </div>
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="email">Email Address *</label>
//                       <input type="email" className="form-control" id="email" placeholder value={Email} onChange={(e)=>setEmail(e.target.value)}/>
//                       <div className="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="number">Phone *</label>
//                       <input type="number" className="form-control" id="number" placeholder value={Phone} onChange={(e)=>setPhone(e.target.value)}/>
//                       <div className="invalid-feedback"> Please enter a valid Phone. </div>
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="address">Address *</label>
//                       <input type="text" className="form-control" id="address" placeholder required value={Address} onChange={(e)=>setAddress(e.target.value)}/>
//                       <div className="invalid-feedback"> Please enter your shipping address. </div>
//                     </div>
//                     <div className="mb-3">
//                       <label htmlFor="address2">Address 2 *</label>
//                       <input type="text" className="form-control" id="address2" placeholder value={Address1} onChange={(e)=>setAddress1(e.target.value)}/> </div>
                    
//                     <hr className="mb-4" />
//                     {/* <div className="custom-control custom-checkbox">
//                       <input type="checkbox" className="custom-control-input" id="same-address" />
//                       <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
//                     </div>
//                     <div className="custom-control custom-checkbox">
//                       <input type="checkbox" className="custom-control-input" id="save-info" />
//                       <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
//                     </div> */}
//                     {/* <hr className="mb-4" /> */}
//                     <div className="title"> <span>Payment</span> </div>
//                     <div className="d-block my-3">
//                       <div className="custom-control custom-radio">
//                         <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
//                         <label className="custom-control-label" htmlFor="credit">Cash On Delivery</label>
//                       </div>
//                       {/* <div className="custom-control custom-radio">
//                         <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
//                         <label className="custom-control-label" htmlFor="debit">Debit card</label>
//                       </div>
//                       <div className="custom-control custom-radio">
//                         <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
//                         <label className="custom-control-label" htmlFor="paypal">Paypal</label>
//                       </div> */}
//                     </div>
                    
//                     {/* <div className="row">
//                       <div className="col-md-3 mb-3">
//                         <label htmlFor="cc-expiration">Expiration</label>
//                         <input type="text" className="form-control" id="cc-expiration" placeholder required />
//                         <div className="invalid-feedback"> Expiration date required </div>
//                       </div>
//                       <div className="col-md-3 mb-3">
//                         <label htmlFor="cc-expiration">CVV</label>
//                         <input type="text" className="form-control" id="cc-cvv" placeholder required />
//                         <div className="invalid-feedback"> Security code required </div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <div className="payment-icon">
//                           <ul>
//                             <li><img className="img-fluid" src="images/payment-icon/1.png" alt="" /></li>
//                             <li><img className="img-fluid" src="images/payment-icon/2.png" alt="" /></li>
//                             <li><img className="img-fluid" src="images/payment-icon/3.png" alt="" /></li>
//                             <li><img className="img-fluid" src="images/payment-icon/5.png" alt="" /></li>
//                             <li><img className="img-fluid" src="images/payment-icon/7.png" alt="" /></li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div> */}
//                     <hr className="mb-1" /> </form>
//                 </div>
//               </div>
//               <div className="col-sm-6 col-lg-6 mb-3">
//                 <div className="row">
                  
//                   <div className="col-md-12 col-lg-12">
//                     <div className="odr-box">
//                       <div className="title-left">
//                         <h3>Shopping cart</h3>
//                       </div>
//                       <div className="rounded p-2 bg-light">
//                         { cart && cart.map((item,i)=>{
//                             return(
//                         <div className="media mb-2 border-bottom">
//                           <div className="media-body"> <a href="detail.html"> {item.Product_Name}</a>
//                             <div className="small text-muted">Price: { item.Total_Product_Price / item.Pieces} <span className="mx-2">|</span> Qty: {item.Pieces} <span className="mx-2">|</span> Subtotal:  {item.Total_Product_Price}</div>
//                           </div>
//                         </div>

//                             )
//                         })
//                         }
                        
                        
//                         {/* <div className="media mb-2 border-bottom">
//                           <div className="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
//                             <div className="small text-muted">Price: $80.00 <span className="mx-2">|</span> Qty: 1 <span className="mx-2">|</span> Subtotal: $80.00</div>
//                           </div>
//                         </div>


//                         <div className="media mb-2 border-bottom">
//                           <div className="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
//                             <div className="small text-muted">Price: $60.00 <span className="mx-2">|</span> Qty: 1 <span className="mx-2">|</span> Subtotal: $60.00</div>
//                           </div>
//                         </div>
//                         <div className="media mb-2">
//                           <div className="media-body"> <a href="detail.html"> Lorem ipsum dolor sit amet</a>
//                             <div className="small text-muted">Price: $40.00 <span className="mx-2">|</span> Qty: 1 <span className="mx-2">|</span> Subtotal: $40.00</div>
//                           </div>
//                         </div> */}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-md-12 col-lg-12">
//                     <div className="order-box">
//                       <div className="title-left">
//                         <h3>Your order</h3>
//                       </div>
//                       <div className="d-flex">
//                         <div className="font-weight-bold">Product</div>
//                         <div className="ml-auto font-weight-bold">Total</div>
//                       </div>
//                       <hr className="my-1" />
//                       <div className="d-flex">
//                         <h4>Sub Total</h4>
//                         <div className="ml-auto font-weight-bold" id="subtotal"> </div>
//                       </div>
//                       {/* <div className="d-flex">
//                         <h4>Discount</h4>
//                         <div className="ml-auto font-weight-bold"> $ 40 </div>
//                       </div> */}
//                       <hr className="my-1" />
//                       <div className="d-flex">
//                         <h4>Coupon Discount</h4>
//                         <div className="ml-auto font-weight-bold" id="discount">  </div>
//                       </div>
//                       {/* <div className="d-flex">
//                         <h4>Tax</h4>
//                         <div className="ml-auto font-weight-bold"> $ 2 </div>
//                       </div> */}
//                       <div className="d-flex">
//                         <h4>Shipping Cost</h4>
//                         <div className="ml-auto font-weight-bold"> { doctor !== 0 ?  tot < doctor ?
//                                                             "Rs : "+admindataall
//                                                             : 
//                                                             <b>Free</b>
//                                                             : "" } </div>
//                       </div>
//                       <hr />
//                       <div className="d-flex gr-total">
//                         <h5  style={{color :"rgb(175, 220, 200)"}}>Grand Total</h5>
//                         <div className="ml-auto h5" id="total"> </div>
//                       </div>
//                       <hr /> </div>
//                   </div>
//                   <div className="col-12 d-flex shopping-box"> <a onClick={()=>SubmitDataMessage()} className="ml-auto btn hvr-hover"  style={{background :"rgb(175, 220, 200)"}}>Place Order</a> </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//             </div>
//         )
    
// }

// export default Checkout;























import React, {useState , useEffect} from 'react';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import p1 from '../assets/images/payment-icon/1.png';
import p2 from '../assets/images/payment-icon/2.png';
import p3 from '../assets/images/payment-icon/3.png';
import p4 from '../assets/images/payment-icon/4.png';
import p5 from '../assets/images/payment-icon/5.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Checkout = (props) => {
    const [fname , setfName ] = useState("")
    const [Lname , setLName ] = useState("")
    const [Address , setAddress ] = useState("")
    const [Address1 , setAddress1 ] = useState("")
    const [ZipPostal , setZipPostal ] = useState("")
    const [Email , setEmail ] = useState("")
    const [Phone , setPhone ] = useState("")
    const [DIFFERENTfname , setDIFFERENTfName ] = useState("")
    const [DIFFERENTLname , setDIFFERENTLName ] = useState("")
    const [DIFFERENTAddress , setDIFFERENTAddress ] = useState("")
    const [DIFFERENTAddress1 , setDIFFERENTAddress1 ] = useState("")
    const [DIFFERENTZipPostal , setDIFFERENTZipPostal ] = useState("")
    const [DIFFERENTEmail , setDIFFERENTEmail ] = useState("")
    const [DIFFERENTPhone , setDIFFERENTPhone ] = useState("")
    const [admindataall , setadmindataall ] = useState(0)

    const [photo1 , setphoto1 ] = useState("")
    const [discount , setdiscount ] = useState({})
    const [photo2 , setphoto2 ] = useState("")

    const [Order_Notes , setOrder_Notes ] = useState("")
    const [City , setCity ] = useState("")
    const [DIFFERENTOrder_Notes , setDIFFERENTOrder_Notes ] = useState("")
    const [DIFFERENTCity , setDIFFERENTCity ] = useState("")
    const [cart , setCart] = useState([])
    const [tot , setot] = useState(0)
    const [total , settotal] = useState(0)
    const [doctor , setdoctor] = useState(0)

    const [display , setdisplay] = useState(true)
    const [play , setplay] = useState(false)
    const [customPhotojson , setcustomPhotojson] = useState(false)
    const [Num1111 , setNum1111] = useState(0)
    const [Num11 , setNum11] = useState(0)
    const [chack, setchack] = useState(false) 
    const [chack1, setchack1] = useState(false) 

    // const [Product_Image_Upload , setProduct_Image_Upload] = useState("")




    useEffect(() =>{
        window.scrollTo(0, 0)
        // document.getElementById("c").style.display = "none"
        var data =  JSON.parse(localStorage.getItem("Cart")) 
        // var data1 =  JSON.parse(localStorage.getItem("CartPrice")) 
        if (data) {
            setCart(data)




            fetch("https://d-luxe-housebackend.vercel.app/AllUserCheckoutData",{
                method: "GET",
                 headers :  {
                 "Content-Type" : "application/json" , 
             } ,
            })
            .then(res181=>res181.json())
            .then(res191=>{
                // setNum1111(res191.length)
                let date = new Date()
                let day= date.getDate() 
                let month= (date.getUTCMonth()+1)
                let year= date.getUTCFullYear()
                if(date.getDate() < 10) day = "0"+ date.getDate()
                if(date.getUTCMonth()+1 < 10) month = "0"+ (date.getUTCMonth()+1)
                
                let c = day +""+month+ ""+(year -2000)
                const f = res191.filter((res,i)=>res.Date === c)
                console.log(f.length+1,c)
                setNum1111(f.length+2)
                setNum11(c)
            
            })
            // setot(JSON.parse(localStorage.getItem("CartPrice")) )
            // if(JSON.parse(localStorage.getItem("Custom Img")) )
            // setcustomPhotojson(true )

            // data.map((res,i)=>{
            //     if(res.Product_Catagories === "Custom Products"){
            //         setplay(true)
            //     }
            // })
            fetch("https://d-luxe-housebackend.vercel.app/AllUserCheckoutData",{
                method: "GET",
                 headers :  {
                 "Content-Type" : "application/json" , 
             } ,
            })
            .then(res181=>res181.json())
            .then(res191=>{
                setNum1111(res191.length)
            })
  fetch("https://d-luxe-housebackend.vercel.app/admindata",{
    method: "GET",
     headers :  {
     "Content-Type" : "application/json" , 
 } ,
})
.then(res18=>res18.json())
.then(res19=>{
    setdoctor(res19[0].condition)
    console.log(res19[0].DeliveryCharges,JSON.parse(localStorage.getItem("CartPrice")));
  setadmindataall(res19[0].DeliveryCharges)

  let j = 0
//   if(JSON.parse(localStorage.getItem("CartPrice")) < res19[0].condition){
                // j = res19[0].DeliveryCharges
            // }
            // else{
            //     j = 0
            // }
            data.map((item,i)=>{
               j = item.Total_Product_Price + j
            //    if (item.doctor_prescription){
            //     localStorage.setItem("doctor",JSON.stringify(true))
            //    }
            })
            // var doc =  JSON.parse(localStorage.getItem("doctor")) 
            // setdoctor(doc)

            if(JSON.parse(localStorage.getItem("discount")) && !JSON.parse(localStorage.getItem("discount")).discount2 ){
                setdiscount(JSON.parse(localStorage.getItem("discount")))
                var d = document.getElementById("discount")
                if(JSON.parse(localStorage.getItem("discount")).discount > 1){
                    d.innerHTML = " Rs : <b style='font-size:20px'></b>" +JSON.parse(localStorage.getItem("discount")).discount
                    document.getElementById("ci11").style.visibility = "visible"
                    j = j - JSON.parse(localStorage.getItem("discount")).discount
                }
                else{
                    d.innerHTML = " " +JSON.parse(localStorage.getItem("discount")).discount1 +" % Off"
                    j =j - (j*(JSON.parse(localStorage.getItem("discount")).discount1)/100)
                    
                }
            }else{
                var d = document.getElementById("discount")
                d.innerHTML = "No discount"
                
            }
            
            
            if(JSON.parse(localStorage.getItem("discount")) && JSON.parse(localStorage.getItem("discount")).discount2 ){
                setdiscount(JSON.parse(localStorage.getItem("discount")))
            var d = document.getElementById("discount")
           
            d.innerHTML = " " +JSON.parse(localStorage.getItem("discount")).discount2 +" % Off"
            j =j - (j*(JSON.parse(localStorage.getItem("discount")).discount2)/100)
            


                }

              j =  j+  res19[0].DeliveryCharges



            setot(j)
            // var t = document.getElementById("subtotal")
            // t.innerHTML = "Rs "+j
            var f = document.getElementById("total")
            f.innerHTML = "Rs : " +j

        })

        }
        // console.log(total,cart,j)
   else{
            // var t = document.getElementById("subtotal")
            // t.innerHTML = "Rs "+0
            var f = document.getElementById("total")
            f.innerHTML = "Rs " +0
   }
  },[])
  

//   useEffect(() => {
  
//     return () => {
//         localStorage.removeItem("doctor")
//     }
//   }, [])


    const SubmitDataMessage1 = (e) =>{
        e.preventDefault()
        if(chack1){
             console.log(cart,6787 ,customPhotojson, play,tot ,JSON.parse(localStorage.getItem("CartPrice"))-tot , JSON.parse(localStorage.getItem("CartPrice")))
        // fetch("https://d-luxe-housebackend.vercel.app/admindata",{
        //                         method: "POST",
        //                         headers :  {
        //                             "Content-Type" : "application/json" , 
        //                         }
        //                     })
        //                     .then(res=>res.json())
        //                     .then((res1)=>{ 
        // if ( JSON.parse(localStorage.getItem("User"))  ){
            if (cart.length  >= 1 ){
                // console.log(play , customPhotojson,JSON.parse(localStorage.getItem("Custom Img")) ,  play)

                // if(play){
                    // if(!JSON.parse(localStorage.getItem("Custom Img"))){

                        // swal("There is No Photo in Your Custom Card");
                        // return


                        // setTimeout(()=>{ 
                        //     props.history.push(`/custom-product/photo-upload`)
                        // },1000)
                    // }
                // }
                setdisplay(false)
        // console.log("wddde");
               let j
        if(admindataall > 0){
                 j = admindataall
            }
            else{
                 j = 0
            }
            // console.log(j,tot)

            // let h
            // if(JSON.parse(localStorage.getItem("Custom Img")) ){
            //     h = JSON.parse(localStorage.getItem("Custom Img"))
            // }
            // else h = []
            // let bh = {fg :"3"}
            // if(JSON.parse(localStorage.getItem("discount"))){
            //     bh = discount
            // }
            

            let differnet = {
                DIFFERENTfname,
                DIFFERENTLname ,
                DIFFERENTAddress ,
                DIFFERENTAddress1 ,
                DIFFERENTZipPostal : 1111 ,
                DIFFERENTCity,
                DIFFERENTEmail ,
                DIFFERENTPhone ,
                DIFFERENTOrder_Notes,
            }
                
                console.log(differnet,                Num11," tfgrtg  ",Num1111,
                )





// payment method here 





                    
                                fetch("https://d-luxe-housebackend.vercel.app/UsergetDatafromclient",{
                        method: "POST",
                        headers :  {
                            "Content-Type" : "application/json" , 
                        } ,
                        body : JSON.stringify({
                            fname,
                            Lname ,
                            Address ,
                            Address1 ,
                            ZipPostal : 1111 ,
                            City,
                            Email ,
                            Phone ,
                            differnet ,
                            Order_Notes,
                            DeliveryCharges:j,
                            discount ,
                               AfterDiscount :  tot ,
                               LessAmount :  JSON.parse(localStorage.getItem("CartPrice"))-tot ,
                               TotalAmount  : JSON.parse(localStorage.getItem("CartPrice")) ,
                            
                            Order : cart,
                            Num123 : Num11+""+Num1111+1,
                        }),
                    })
                    .then(res=>res.json())
                    .then((res2)=>{        
                    if(!res2.Error){
                       
                        setdisplay(true)
                        swal("Order placed Successfully");
                       

                            setfName ("")
                            setLName ("" )
                            setAddress  ("")
                            setAddress1 ("" )
                            setZipPostal ("" )
                            setEmail ("" )
                            setCity ("" )
                            setPhone ("" )
                            setOrder_Notes ("")
                        localStorage.removeItem("Cart")
                        localStorage.removeItem("doctor")
                        localStorage.removeItem("SearchData")
                        localStorage.removeItem("Data")
                        localStorage.removeItem("CartPrice")
                        localStorage.removeItem("CateProduct")
                        localStorage.removeItem("discount")
                        localStorage.removeItem("Custom Img")
                        props.history.push(`/thankyou`)

                     }
                     else{
                        setdisplay(true)
                        swal("Plz Refresh And try Again the Order");
                     }
                  })
                  .catch(err=>{
                    setdisplay(true)
                    swal("There is an Error");
                })
            }
           
            else{
                swal("There is No Any Product in Your Cart");
                setTimeout(()=>{
                    
                    props.history.push(`/`)
                },2000)
            }
        // })
        }
       
    }
    const detailcard = (cardtype)=>{
        //line no.  1150
    //     if(cardtype === "stripe"){

    //     }
    //     else if(cardtype === "paypal")

    // }
    // else{

    // }
        //api here

        // .then(res=>res.json())
        // .then((res2)=>{      
        //         if()
        // })
    }
        return (
            <div>
                              {/* <a href="https://wa.me/923302757197" target="_blank"><img src={whatapps} alt=""  style={{position : "fixed" ,zIndex : "999999", top : "80%" , right : "20px",width:"70px",height : "70px"}}/></a> */}

                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <Link to="/cart">Cart</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Checkout</strong></div>
                        </div>
                    </div>
                </div>
            <form onSubmit={(e)=>SubmitDataMessage1(e)}>
                <div className="site-section">
                    <div className="container">
                        {/* <div className="row mb-5">
                            <div className="col-md-12">
                                <div className="border p-4 rounded" role="alert">
                                    Returning customer? <Link to="/login">Click here</Link> to login
                                </div>
                            </div> */}
                        {/* </div> */}
                        <div className="row">
                            <div className="col-md-6 mb-5 mb-md-0">
                                <h2 className="h3 mb-3 text-black">Billing Details</h2>
                                <div className="p-3 p-lg-5">
                                    
                                    <div className="form-group row">
                                        <div className="col-md-6">
                                            <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                            <input type="text" required value={fname} onChange={(e)=>setfName(e.target.value)}  className="form-control" id="c_fname" name="c_fname" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                            <input type="text" required value={Lname} onChange={(e)=>setLName(e.target.value)}  className="form-control" id="c_lname" name="c_lname" />
                                        </div>
                                    </div>

                                    

                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_city" className="text-black">City <span className="text-danger">*</span></label>
                                            <input type="text" required value={City} onChange={(e)=>setCity(e.target.value)} className="form-control" id="c_city" name="c_city" />
                                        </div>
                                       
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                            <input type="text" required value={Address} onChange={(e)=>setAddress(e.target.value)}   className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" value={Address1} onChange={(e)=>setAddress1(e.target.value)}  className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>

                                    {/* <div className="form-group row">
                                        
                                        <div className="col-md-12">
                                            <label htmlFor="c_postal_zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
                                            <input type="text" required value={ZipPostal} onChange={(e)=>setZipPostal(e.target.value)}  className="form-control" id="c_postal_zip" name="c_postal_zip" />
                                        </div>
                                    </div> */}

                                    <div className="form-group row mb-5">
                                        <div className="col-md-6">
                                            <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                            <input type="email" required value={Email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="c_email_address" name="c_email_address" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                            <input type="number" required value={Phone} onChange={(e)=>setPhone(e.target.value)}   className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    {/* {play ?
                                    <div className="form-group row mb-5">
                                        <div className="col-md-6">
                                            <label htmlFor="c_email_address" className="text-black">Front Photo <span className="text-danger">*</span></label>
                                            <input type="file" required  onChange={(e)=>setphoto1(e.target.files[0])} className="form-control" id="c_email_address" name="c_email_address" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="c_phone" className="text-black">Back Photo <span className="text-danger">*</span></label>
                                            <input type="file" required  onChange={(e)=>setphoto2(e.target.files[0])}   className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    : ""

                                    } */}

                                    <div className="form-group">
                                        <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                                        <textarea name="c_order_notes"  value={Order_Notes} onChange={(e)=>setOrder_Notes(e.target.value)} id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..."></textarea>
                                    </div>


                                    <br />
                                    <div className="form-group">
                                        <h1 htmlFor="c_order_notes" className="text-black"><input type="checkbox"  id="" value={chack} onChange={()=>setchack(!chack)}/> SHIP TO A DIFFERENT ADDRESS?</h1>
                                    </div>
                                    {
                                    chack
                                    ?
                                    <>
                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                                                <input type="text" required value={DIFFERENTfname} onChange={(e)=>setDIFFERENTfName(e.target.value)}  className="form-control" id="c_fname" name="c_fname" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                <input type="text" required value={DIFFERENTLname} onChange={(e)=>setDIFFERENTLName(e.target.value)}  className="form-control" id="c_lname" name="c_lname" />
                                            </div>
                                        </div>

                                        

                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_city" className="text-black">City <span className="text-danger">*</span></label>
                                                <input type="text" required value={DIFFERENTCity} onChange={(e)=>setDIFFERENTCity(e.target.value)} className="form-control" id="c_city" name="c_city" />
                                            </div>
                                        
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                                <input type="text" required value={DIFFERENTAddress} onChange={(e)=>setDIFFERENTAddress(e.target.value)}   className="form-control" id="c_address" name="c_address" placeholder="Street address" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" value={DIFFERENTAddress1} onChange={(e)=>setDIFFERENTAddress1(e.target.value)}  className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                                        </div>

                                        {/* <div className="form-group row">
                                            
                                            <div className="col-md-12">
                                                <label htmlFor="c_postal_zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
                                                <input type="text" required value={ZipPostal} onChange={(e)=>setZipPostal(e.target.value)}  className="form-control" id="c_postal_zip" name="c_postal_zip" />
                                            </div>
                                        </div> */}

                                        <div className="form-group row mb-5">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                                                <input type="email" required value={DIFFERENTEmail} onChange={(e)=>setDIFFERENTEmail(e.target.value)} className="form-control" id="c_email_address" name="c_email_address" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                                                <input type="number" required value={DIFFERENTPhone} onChange={(e)=>setDIFFERENTPhone(e.target.value)}   className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        {/* {play ?
                                        <div className="form-group row mb-5">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email_address" className="text-black">Front Photo <span className="text-danger">*</span></label>
                                                <input type="file" required  onChange={(e)=>setphoto1(e.target.files[0])} className="form-control" id="c_email_address" name="c_email_address" />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_phone" className="text-black">Back Photo <span className="text-danger">*</span></label>
                                                <input type="file" required  onChange={(e)=>setphoto2(e.target.files[0])}   className="form-control" id="c_phone" name="c_phone" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        : ""

                                        } */}

                                        <div className="form-group">
                                            <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                                            <textarea name="c_order_notes"  value={DIFFERENTOrder_Notes} onChange={(e)=>setDIFFERENTOrder_Notes(e.target.value)} id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Write your notes here..."></textarea>
                                        </div>
                                        
                                    </>
                                    : ""  
                                    }
                                    
                                </div>
                                
                            </div>
                            <div className="col-md-6" style={{background :  "#efefef",padding : "10px 10px" , borderRadius :  "10px"}}>

                                

                                <div className="row mb-5">
                                    <div className="col-md-12">
                                        <h2 className="h3 mb-3 text-black">Your Order</h2>
                                        <div className="p-3 p-lg-5 ">
                                            <table className="table site-block-order-table mb-5">
                                                <thead>
                                                    <th>Product</th>
                                                    <th>Qty</th>
                                                    <th>Total</th>
                                                </thead>
                                                <tbody>
                                                {
                                                    cart && cart.map((item,i)=>{
                                                        return(<tr>
                                                        <th>
                                                        {item.Price[0] ?
                                  <div>
                                    <span>{item.Product_Name}</span>
                                    <span style={{paddingLeft  :"30px"}}>{item.Size.length > 2 ? "Color : " :  "Size : "}  {item.Size}</span>
                                  </div>
                                  :
                                   item.Product_Name
                                  } 
                                                            
                                                            {/* {item.Product_Name} */}
                                                        
                                                        </th>
                                                        <td>x {item.Pieces}</td>
                                                        <td>Rs {item.Total_Product_Price}</td>
                                                    </tr>)
                                                    })
                                                }
                                                <tr>
                                                        <td className="text-black font-weight-bold"><strong>Shipping Charges</strong></td>
                                                        <td className="text-black font-weight-bold"></td>
                                                        <td className="text-black"> 
                                                       
                                                       
                                                       { admindataall > 0 ?
                                                            "Rs : "+admindataall
                                                            : 
                                                            <b>Free</b>
                                                         }
                                                        </td>
                                                    </tr>
                                                    <tr id="ci11">
                                                        <td className="text-black font-weight-bold"><strong>Discount</strong></td>
                                                        <td className="text-black font-weight-bold"></td>
                                                        <td className="text-black font-weight-bold" id="discount"></td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                        <td className="text-black font-weight-bold"></td>
                                                        <td className="text-black" id="subtotal"></td>
                                                    </tr> */}
                                                    <tr>
                                                        <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                        <td className="text-black font-weight-bold"></td>
                                                        <td className="text-black font-weight-bold" id="total"><strong></strong></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            {/* <div className="border p-3 mb-3">
                                                <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Cash on Delivery</a></h3>

                                                <div className="collapse" id="collapsebank">
                                                    <div className="py-2">
                                                        <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div> */}

                                            {/* <div className="border p-3 mb-3">
                                                <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Cheque Payment</a></h3>

                                                <div className="collapse" id="collapsecheque">
                                                    <div className="py-2">
                                                        <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border p-3 mb-5">
                                                <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

                                                <div className="collapse" id="collapsepaypal">
                                                    <div className="py-2">
                                                        <p className="mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                                <h2 style={{color  :"black", fontWeight : "bold" }}>Payment</h2>
                                              <div class="col-50">
                                                <label  style={{color  :"black", fontWeight : "bold" }} for="fname">Accepted Cards</label>
                                                <div class="icon-container">
                                                  <input type="radio" name="ga" onClick={()=>detailcard("stripe")}/>
                                                  {/* <br /> */}
                                                  <img src={p1} alt="" style={{width: "68px", height :"50px"}} />
                                                  <br />
                                                  <input type="radio" name="ga" onClick={()=>detailcard("stripe")}/>
                                                  <img src={p2} alt="" style={{width: "68px", height :"50px"}} />
                                                  <br />
                                                  {/* <input type="radio" name="ga"  onClick={()=>detailcard("paypal")}/> */}
                                                  <input type="radio" name="ga" onClick={()=>detailcard("stripe")}/>
                                                  <img src={p3} alt="" style={{width: "68px", height :"50px"}} />
                                                  <br />
                                                  <input type="radio" name="ga" onClick={()=>detailcard("stripe")}/>
                                                  <img src={p4} alt="" style={{width: "68px", height :"50px"}} />
                                                  <br />
                                                  <input type="radio" name="ga" onClick={()=>detailcard("stripe")}/>
                                                  <img src={p5} alt="" style={{width: "68px", height :"50px"}} />
                                                  {/* <i class="fa fa-cc-visa" style={{color:"navy"}}></i>
                                                  <i class="fa fa-cc-amex" style={{color:"blue"}}></i>
                                                  <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>
                                                  <i class="fa fa-cc-discover" style={{color:"orange"}}></i> */}
                                                </div>
                                                <label  style={{color  :"black", fontWeight : "bold" }} for="cname">Name on Card</label>
                                                <input type="text" id="cname" name="cardname" className='inputAll' placeholder="John More Doe"/>
                                                <label  style={{color  :"black", fontWeight : "bold" }}  for="ccnum">Credit card number</label>
                                                <input type="text" id="ccnum" name="cardnumber" className='inputAll' placeholder="1111-2222-3333-4444"/>
                                                <label style={{color  :"black", fontWeight : "bold" }}  for="expmonth">Exp Month</label>
                                                <input type="text" id="expmonth" name="expmonth" className='inputAll' placeholder="September"/>

                                                <div class="row">
                                                  <div class="col-50-payment">
                                                    <label  style={{color  :"black", fontWeight : "bold" }}  for="expyear">Exp Year</label>
                                                    <input type="text" id="expyear" name="expyear" className='inputAll' placeholder="2018"/>
                                                  </div>
                                                  <div class="col-50-payment">
                                                    <label  style={{color  :"black", fontWeight : "bold" }}  for="cvv">CVV</label>
                                                    <input type="text" id="cvv" name="cvv" className='inputAll' placeholder="352"/>
                                                  </div>
                                                </div>
                                              </div>


                                              <div style={{display : "flex"}} onClick={()=>
                                                document.getElementById("changeIcon111").style.transform = "rotate(180deg)"

                                            }  href={"#collapsebankssa1"} aria-controls={"collapsebankssa1"}  data-toggle="collapse" >
 <input type="checkbox" name="vehicle3" value={chack1} onChange={()=>setchack1(!chack1)} style={{marginTop: "-10px"}}/> 
                                                <span style={{color : "black" ,marginRight: "20px",marginTop: "-4px"}} id={"changeIcon111"} ></span>   <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href={"#collapsebankssa1"} role="button" aria-expanded="false" aria-controls={"collapsebankssa1"} style={{color : "black"}}> 
                                              I have read and agree to the website terms and conditions *</a></h3>
                                                        </div>

                                                <div className="collapse" id={"collapsebankssa1"}>
                                                    <div className="py-2">
                                                        <p className="mb-0" style={{maxHeight: "300px",overflow: "scroll"}}>

                                                            
                                                     <h1>OVERVIEW</h1>   
                                                     <br />
This website is operated by dluxehouse Consignment Ltd. Throughout the site, the terms “we”, “us” and “our” refer to Jadore Couture Consignment Ltd. Jadore Couture Consignment Ltd. offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                                                     <br />

By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
                                                     <br />

Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
                                                     <br />

Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
                                                     <br />

All prices are in Canadian dollars.
                                                     <br />

ACCOUNT REGISTRATION
                                                     <br />
To register an account on the Services, you must be able to form legally binding contracts (for example, you cannot use the Services if you are under 18 years old or the age of legal majority in your jurisdiction).
                                                     <br />

You do not need to create an account on the Services (a “User Account”) to use the public features of the Services, however, you do need a User Account to receive new item alerts, use account balances towards purchases of goods, manage and make layaway payments, add items to your cart, and manage shipping and tracking information. You may create a User Account by completing the registration process set forth on the Website. You are responsible for providing and maintaining current your accurate contact information, which may include name, email address, shipping address, phone number, payment information, and other account information. Telephone calls and email correspondence with Jadore Couture Consignment Ltd. may be recorded or monitored.
                                                     <br />

You are the sole authorized user of your User Account. You are responsible for maintaining the confidentiality of any password and account name/number provided by you or Jadore Couture Consignment Ltd. for accessing the Services. You are solely and fully responsible for all activities that occur under your password or account. Jadore Couture Consignment Ltd. has no control over the use of your or any user’s account and expressly disclaims any liability derived therefrom. Should you suspect that any unauthorized party may be using your password or account or you suspect any other breach of security, you will cease all use and contact Jadore Couture Consignment Ltd. immediately by emailing us at consign@jadorecouture.ca.
                                                     <br />

SITE TRANSACTIONS
                                                     <br />
We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event we make a change to or cancel an order, we will attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
                                                     <br />

RIGHT TO CHANGE SITES
                                                     <br />
We reserve the right, at any time in our sole discretion, to: modify, suspend or discontinue the Site or any service, content, feature or product offered through the Site, with or without notice; charge fees in connection with the use of the Site; modify and/or waive any fees charged in connection with the Site; and/or offer opportunities to some or all users of the Site. You agree that we shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Site, or any service, content, feature or product offered through the Site.
                                                     <br />

You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.
                                                     <br />

MODIFICATIONS TO THE SERVICE AND PRICES
                                                     <br />
Prices for our products are subject to change without notice.
                                                     <br />

We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                                                     <br />

We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                                                     <br />

PRODUCTS OR SERVICES 
                                                     <br />
We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor’s display of any color will be accurate.
                                                     <br />

We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
                                                     <br />

We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.
                                                     <br />

ACCURACY OF BILLING AND ACCOUNT INFORMATION
                                                     <br />
We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.
                                                     <br />

PERSONAL INFORMATION
                                                     <br />
Your submission of personal information through the store is governed by our Privacy Policy. 
                                                     <br />

GOVERNING LAW
                                                     <br />
These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of British Columbia, Canada.
                                                     <br />

DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
                                                     <br />
We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
                                                     <br />

We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
                                                     <br />

You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
                                                     <br />

You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
                                                     <br />

In no case shall Jadore Couture Consignment Ltd., our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
                                                     <br />

SITE CONTENT
                                                     <br />
Jadore Couture Consignment Ltd. and other marks, graphics, typefaces, trade names and logos appearing on the Site are trademarks of Jadore Couture Consignment Ltd. All other trademarks appearing on the Site are the property of their respective owners, including, in some instances, us. Our trademarks may not be used in any manner for any purpose without our express written consent in each instance. Patents used in connection with the Site are the property of their respective owners, which may include us. The Site contains copyrighted material, including, without limitation, text, software, photos, audio and video clips, graphics, illustrations, images, logos, and music and sound (collectively, the “Content”). This Site is protected by copyright as a collective work, pursuant to Canada copyright laws, international conventions, and other copyright laws. Jadore Couture Consignment Ltd. and third party content providers also own copyrights in the content original to it.
                                                     <br />

The Site and the Content are intended solely for personal, non-commercial use. You may download or copy the Content and other downloadable materials displayed on the Site for your personal use only. No right, title or interest in any downloaded Content is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or exploit in any way any of the Content or the Site.
                                                     <br />

Unless otherwise specified, the Site and the Content are intended to promote Jadore Couture Consignment Ltd.’s products and services available in Canada. The Site is controlled and operated by Jadore Couture Consignment Ltd.
                                                     <br />

INDEMNIFICATION
                                                     <br />
You agree to indemnify, defend and hold harmless Jadore Couture Consignment Ltd. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
                                                     <br />

SEVERABILITY
                                                     <br />
In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.
                                                     <br />

TERMINATION
                                                     <br />
The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
                                                     <br />

These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
                                                     <br />

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).
                                                     <br />

ENTIRE AGREEMENT
                                                     <br />
The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
                                                     <br />

These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
                                                     <br />

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.
                                                     <br />

CHANGES TO TERMS OF SERVICE
                                                     <br />
You can review the most current version of the Terms of Service at any time at this page.
                                                     <br />

We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
                                                                   
                                                       
                                                            
                                                        </p>
                                                    </div>
                                                </div>



                                            <div className="form-group">

                                               {/* <Link to='thankyou'> */}
                                               {display ?
                                                <button type="submit" className="btn btn-dark btn-lg py-3 btn-block"style={{cursor : "pointer"}}>Place Order</button>
                                                :
                                                <span  className="btn btn-dark btn-lg py-3 btn-block"style={{cursor : "pointer"}}>Place Order</span>


                                               }
                                                {/* </Link> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </form>

            </div>
        )
    
}

export default Checkout;