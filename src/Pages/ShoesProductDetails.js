import React, { useEffect , useState } from 'react';
import swal from 'sweetalert';
import cloth_1 from '../assets/images/cloth_1.jpg';
import shoe_1 from '../assets/images/shoe_1.jpg';
import cloth_2 from '../assets/images/cloth_2.jpg';
import cloth_3 from '../assets/images/cloth_3.jpg';
import Ban1 from "../assets/images/banner1.jpg"
import Ban2 from "../assets/images/banner2.jpg"
import Ban3 from "../assets/images/banner3.jpg"



import z1 from "../assets/images/z1.jpeg"
import c1 from "../assets/images/z2.jpeg"
import guide from "../assets/images/Guide.JPG"


import blog_1 from '../assets/images/blog_1.jpg';


import { Link , Redirect} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


export function ShoesProductDetails(props) {
    const [productDetail , setproductDetail] = useState([])
    const [Price , setPrice] = useState(1)
    const [DataPart2 , setDataPart2] = useState([])
    const [allproduct , setallproduct] = useState([])


    const [Area1 , setArea1] = useState(true)
    const [Area2 , setArea2] = useState(false)
    const [Area3 , setArea3] = useState(false)


    const [Star1 , setStar1] = useState(0)
    const [Star2 , setStar2] = useState(0)
    const [Star3 , setStar3] = useState(0)


    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [subject, setsubject] = useState("") 
    const [Message, setMessage] = useState("") 



    useEffect(() =>{
        window.scrollTo(0, 0)

      const Inte = setInterval(()=>{

      var data =  JSON.parse(localStorage.getItem("Data")) 
      if (data) setproductDetail(data)


      fetch("/AllProduct",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     }
    })
    .then(res5=>res5.json())
    .then(res6=>{
        // console.log(res6);
        const vc = []
     res6.map((res7,i)=>{
            console.log( res7.Product_Catagories , productDetail.Product_Catagories , res7._id , productDetail._id);
         if (  res7._id !== data._id) {
             //    console.log(res7);
             //         // return setproduct1(...product1 , res3)
             vc.push(res7)
            //  return  res7
            }
        })
        console.log(vc);
        
        if(vc.length >= 1 && vc.length < 5){
           console.log("yes");
        res6.map((res7,i)=>{
            // console.log( res7.Product_Catagories , data.Product_Catagories , res7._id , data._id);
         if ( res7._id !== data._id) {
             //    console.log(res7);
             //         // return setproduct1(...product1 , res3)
             vc.push(res7)
            //  return  res7
            }
        })
        for (var i = vc.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = vc[i];
            vc[i] = vc[j];
            vc[j] = temp;
        }
        let db = vc.slice(0,7)
        setallproduct(db) 
        }

        else if (vc.length >= 1 ){
           console.log("yes");
           for (var i = vc.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = vc[i];
            vc[i] = vc[j];
            vc[j] = temp;
        }
           let db = vc.slice(0,7)
           console.log(db);
        setallproduct(db)
        }

        else{
            const vb = []
            res6.map((res7,i)=>{
                //    console.log(res7.Product_Popular );
                if ( i+1 % 4 === 0) {
                    
                    vb.push(res7)
                    //    console.log(res7);
                    //         // return setproduct1(...product1 , res3)
                    // return  res7
                   }
               })
               for (var i = vc.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = vc[i];
                vc[i] = vc[j];
                vc[j] = temp;
            }
               let db = vb.slice(0,7)
               console.log(db);
                setallproduct(db)
        }
 
        console.log(allproduct);
    })

       },8000)
       var data =  JSON.parse(localStorage.getItem("Data")) 
      if (data) setproductDetail(data)
      var data1 =  JSON.parse(localStorage.getItem("Cart")) 
       if (data1) setDataPart2(data1)

    //   const Inte = setInterval(()=>{
            fetch("/AllProduct",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     }
    })
    .then(res5=>res5.json())
    .then(res6=>{
        // console.log(res6);
        const vc = []
     res6.map((res7,i)=>{
            console.log( res7.Product_Catagories , productDetail.Product_Catagories , res7._id , productDetail._id);
         if ( res7.Product_Catagories === data.Product_Catagories && res7._id !== data._id) {
             //    console.log(res7);
             //         // return setproduct1(...product1 , res3)
             vc.push(res7)
            //  return  res7
            }
        })
        console.log(vc);
        
        if(vc.length >= 1 && vc.length < 5){
           console.log("yes");
        res6.map((res7,i)=>{
            // console.log( res7.Product_Catagories , data.Product_Catagories , res7._id , data._id);
         if ( res7._id !== data._id) {

             vc.push(res7)
            }
        })
        let db = vc.slice(0,7)
        setallproduct(db) 
        }

        else if (vc.length >= 1 ){
           console.log("yes");
           let db = vc.slice(0,7)
           console.log(db);
        setallproduct(db)
        }

        else{
            const vb = []
            res6.map((res7,i)=>{
                if ( i+1 % 4 === 0) {
                    
                    vb.push(res7)

                   }
               })
               let db = vb.slice(0,7)
               console.log(db);
                setallproduct(db)
        }
 
        console.log(allproduct);
    })
    //    },1000)
       return () => clearInterval(Inte);

    },[])

const minus=()=>{
        if(Price > 1)
        setPrice(Price - 1)
        console.log(Price);
    }
    const plus=()=>{
        if(Price < 100)
        setPrice(Price + 1)
        console.log(Price);

    }
const addtocartproduct = () =>{
    // if(productDetail){
        document.getElementById("myDi").style.visibility = "visible"
        setTimeout(()=>{
            document.getElementById("myDi").style.visibility = "hidden"

        },1000)
//         const data =  {...productDetail ,
//                          price : Price ,
//                          Product_Price  : productDetail.Product_Price * Price }
//         var data1 = JSON.parse(localStorage.getItem("Cart")) 
//         if (data1){
//             var data3 = data1.map((item) => {
//                 if(item._id === data._id){
//                     console.log("double");
// ;                   localStorage.setItem("double",JSON.stringify(true))
//                     return {...item,
//                          price : Price + item.price,
//                          Product_Price  : (productDetail.Product_Price * Price )+ item.Product_Price}
//                 }
//                 else{
//                     console.log("double not match");
//                     return item
//                 }

//             })
//             var data5 =  JSON.parse(localStorage.getItem("double")) 
//             console.log(DataPart2.length, data3.length,data5);
//             var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//             if(data10.length=== data3.length && data5){
//                 console.log("double remove");
//                 localStorage.removeItem("double")
//                 localStorage.setItem("Cart" , JSON.stringify(data3) )
//                 fetch("/user-cart-add",{
//                                 method: "POST",
//                                 headers :  {
//                                     "Content-Type" : "application/json" , 
//                                 } ,
//                                 body : JSON.stringify({
//                                     cart : data3 ,
//                                     user : JSON.parse(localStorage.getItem("User")) 
//                                 })
//                             })
//                             .then(res=>res.json())
//                             .then((res1)=>{ 
//                                 console.log(res1);
//                             })

//             }
//             else{
//                 console.log("Differet");
//                 var data2 = [...data1 , data]
//                 fetch("/user-cart-add",{
//                                 method: "POST",
//                                 headers :  {
//                                     "Content-Type" : "application/json" , 
//                                 } ,
//                                 body : JSON.stringify({
//                                     cart : data2 ,
//                                     user : JSON.parse(localStorage.getItem("User")) 
//                                 })
//                             })
//                             .then(res=>res.json())
//                             .then((res1)=>{ 
//                                 console.log(res1);
//                             })

//            localStorage.setItem("Cart" , JSON.stringify(data2) )
//             }
//         }
//         else{
//             console.log("1");
//             localStorage.setItem("Cart" , JSON.stringify([data]) )
//             fetch("/user-cart-add",{
//                                 method: "POST",
//                                 headers :  {
//                                     "Content-Type" : "application/json" , 
//                                 } ,
//                                 body : JSON.stringify({
//                                     cart : data ,
//                                     user : JSON.parse(localStorage.getItem("User")) 
//                                 })
//                             })
//                             .then(res=>res.json())
//                             .then((res1)=>{ 
//                                 console.log(res1);
//                             })

//         }

//     }

}
const savethedetailproduct = (data) =>{
    localStorage.setItem("Data" , JSON.stringify(data) )
    console.log(data);
 }

const  changePhoto = ()=>{
    document.getElementById("changes-Photo").src = z1
}

const change_detail_area = (e)=>{
    if (e === 1){
        setArea1(true)
        setArea2(false)
        setArea3(false)
    }
    else if (e === 2){
        setArea1(false)
        setArea2(true)
        setArea3(false)
    }
    else if (e === 3){
        setArea1(false)
        setArea2(false)
        setArea3(true)
    }
}

const RatingProduct1 = (e)=>{
    setStar1(e)
    let a = e-1
    for (let i = 0; i < 5; i++) {
        document.getElementById("Rate").firstChild.children[i].style.color  = "rgba(192, 186, 186, 0.432)"
    }
    for (let i = 0; i < a+1; i++) {
        document.getElementById("Rate").firstChild.children[i].style.color  = "yellow"
    }
}
const RatingProduct2 = (e)=>{
    setStar2(e)
    let a = e-1
    for (let i = 0; i < 5; i++) {
        document.getElementById("Rate").children[1].children[i].style.color  = "rgba(192, 186, 186, 0.432)"
    }
    // document.getElementById("Rate").children[1].children[e-1].style.color  = "yellow"
    for (let i = 0; i < a+1; i++) {
        document.getElementById("Rate").children[1].children[i].style.color  = "yellow"
    }
}
const RatingProduct3 = (e)=>{
    setStar3(e)
    let a = e-1
    for (let i = 0; i < 5; i++) {
        document.getElementById("Rate").children[2].children[i].style.color  = "rgba(192, 186, 186, 0.432)"
    }
    for (let i = 0; i < a+1; i++) {
        document.getElementById("Rate").children[2].children[i].style.color  = "yellow"
    }
}
    // document.getElementById("Rate").children[2].children[e-1].style.color  = "yellow"

// }
    return (
        <>  
        <center>
            <div className="pop-up-1 dis-off" id="myDi">
                <h1>Product Updated in Cart</h1>
            </div> 
        </center>
        
        <div className="desktop-nav" id="desktop-nav1">
            <ul className="desktop-nav-drop">
                       <li>
                            <Link to="/shop"  className="mobile-nav-border">Shoes</Link>
                        </li>
                       <li> 
                            <Link  className="mobile-nav-border">Shoes</Link>    
                        </li>
                       <li>
                            <Link  className="mobile-nav-border">Shoes</Link>
                        </li>
           </ul>
       </div>
    
        <div>
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Shoes</strong><span className="mx-2 mb-0">/</span> <strong className="text-black">{productDetail.Product_Name}</strong></div> 
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="container-fuild">
                        <div className="col-xl-12 col-lg-12 col-md-12" style={{width : "100%", margin  : "0px",padding: "0px"}} >
                                        <div className="container-photo-detail">
                                            <img class="w-100" id="changes-Photo" src={c1} alt="First slide"/>
                                        </div>
                                        <div style={{paddingTop : "20px"}}>
                                            <img class="d-block w-100" src={z1} alt="First slide"  className="details-img-size" onClick={()=>changePhoto()}/>
                                            <img class="d-block w-100" src={z1} alt="First slide"  className="details-img-size"/>
                                            <img class="d-block w-100" src={z1} alt="First slide"  className="details-img-size" />
                                            <img class="d-block w-100" src={z1} alt="First slide"  className="details-img-size" />
                                        </div>
                        </div>
                    </div>


                            {/* <img src={productDetail.Product_Image_Upload} alt="Image" className="img-fluid" /> */}
                        
                        
                        
                        
                        
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-black" style={{marginTop :  "30px"}}>{productDetail.Product_Name}</h2>
                            <h4 className="text-primary h4">{productDetail.Product_Title}</h4>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores iusto! Molestiae expedita veritatis nesciunt doloremque sint asperiores fuga voluptas, distinctio, aperiam, ratione dolore.</p> */}
                            <p className="mb-4">{productDetail.Product_Short_Notes}</p>
                            <p><strong className="text-primary h4">Rs : {productDetail.Product_Price}</strong></p>
                        

        

                            <p>Shoes Size  </p>

                            <div className="mb-2">
                                <div className="input-group mb-3" style={{ maxWidth: "120px" }} >
                                    <div className="input-group-prepend Shoes-Size-Button1">
                                    <button>UK-1</button>
                                    </div>
                                    {/* <input type="text" className="form-control text-center"  value={Price} onChange={(e)=>setPrice(e.target.value)}  min="1" max="100" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" /> */}
                                    <div className="input-group-append Shoes-Size-Button1">
                                    <button>UK-2</button>
                                    </div>
                                    <div className="input-group-append Shoes-Size-Button1">
                                    <button style={{border : "none"}}><img src={guide} alt=""/> Size Guide</button>
                                    </div>
                                </div>

                            </div>

                            
                            <div className="mb-5">
                                <div className="input-group mb-3" style={{ maxWidth: "120px" }} >
                                    <div className="input-group-prepend">
                                        <button className="btn btn-outline-primary js-btn-minus" type="button"  onClick = {()=>minus()}>&#8722;</button>
                                    </div>
                                    <input type="text" className="form-control text-center"  value={Price} onChange={(e)=>setPrice(e.target.value)}  min="1" max="100" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary js-btn-plus" type="button" onClick={()=>plus()}>&#43;</button>
                                    </div>
                                </div>

                            </div>
                            <p><div className="buy-now btn btn-sm btn-primary" onClick={() => addtocartproduct()}>Add To Cart</div></p>

                        </div>
                    </div>
                </div>
            </div>



                <div className="container" style={{width : "99% " ,padding : "0px 10px"}}>
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 product-detail-descr-rating" >
                               <div onClick={()=>change_detail_area(1)}>
                                    <p>
                                        Product Description
                                    </p>
                               </div>
                            
                             </div>
                            <div className="col-xl=3 col-lg=3 col-md=3 col-sm-4 product-detail-descr-rating" >
                               <div onClick={()=>change_detail_area(2)}>
                                    <p>
                                       Shipping Information
                                    </p>
                               </div>
                            
                             </div>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 product-detail-descr-rating" >
                               <div onClick={()=>change_detail_area(3)}>
                                    <p>
                                        Reviews  & Ratings
                                    </p>
                               </div>
                            
                             </div>
                        </div>



                        {!Area1 
                        ?
                        Area1 === false && Area2  && Area3 === false
                        ?
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 product-detail-descr-rating1" >
                               <div>
                                    <p>
                                    All products are typically shipped within 3 working days.</p>
                               </div>
                             </div>
                        </div>
                        : 
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 product-detail-descr-rating3" >
                               <div style={{padding  : "20px 40px"}}>
                                   <p>You're reviewing:</p>
                                    <h3>Sparx School Lace Big Shoes- Black</h3>
                                    <p>Your Rating <span className="text-danger">*</span></p>
                                    <div id="Rate">
                                        <p>Quality <GradeIcon onClick={()=>RatingProduct1(1)} className="Icon-start a1-start"/><GradeIcon onClick={()=>RatingProduct1(2)}  className="Icon-start a2-start"/><GradeIcon onClick={()=>RatingProduct1(3)}  className="Icon-start a3-start"/><GradeIcon onClick={()=>RatingProduct1(4)}  className="Icon-start a4-start"/><GradeIcon onClick={()=>RatingProduct1(5)}  className="Icon-start a5-start"/></p>
                                        <p>Value  <GradeIcon  onClick={()=>RatingProduct2(1)}  className="Icon-start a1-start"/><GradeIcon  onClick={()=>RatingProduct2(2)}   className="Icon-start a2-start"/><GradeIcon  onClick={()=>RatingProduct2(3)}   className="Icon-start a3-start"/><GradeIcon  onClick={()=>RatingProduct2(4)}   className="Icon-start a4-start"/><GradeIcon  onClick={()=>RatingProduct2(5)}   className="Icon-start a5-start"/></p>
                                        <p>Price  <GradeIcon  onClick={()=>RatingProduct3(1)}  className="Icon-start a1-start"/><GradeIcon  onClick={()=>RatingProduct3(2)}   className="Icon-start a2-start"/><GradeIcon  onClick={()=>RatingProduct3(3)}   className="Icon-start a3-start"/><GradeIcon  onClick={()=>RatingProduct3(4)}   className="Icon-start a4-start"/><GradeIcon  onClick={()=>RatingProduct3(5)}   className="Icon-start a5-start"/></p>
                                    </div>
                               </div>
                               
                               <div className="col-md-12">

                                    <form>

                                        <div className="p-3 p-lg-5 border">
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <label htmlFor="c_fname" className="text-black">Nick Name <span className="text-danger">*</span></label>
                                                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}   className="form-control" />
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                                                    <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)}   className="form-control"/>
                                                </div> */}
                                            </div>
                                            {/* <div className="form-group row">
                                                <div className="col-md-12">
                                                    <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}   className="form-control" placeholder="" />
                                                </div>
                                            </div> */}
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <label htmlFor="c_subject" className="text-black">Summary <span className="text-danger">*</span></label>
                                                    <input type="text" value={subject} onChange={(e)=>setsubject(e.target.value)}   className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <label htmlFor="c_message" className="text-black">Review <span className="text-danger">*</span></label>
                                                    <textarea value={Message} onChange={(e)=>setMessage(e.target.value)}   cols="30" rows="7" className="form-control"></textarea>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
                                                    <input type="submit" className="btn btn-primary btn-lg btn-block" value="Send Reviews" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    </div>
                             </div>
                        </div>
                        : 
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 product-detail-descr-rating1" >
                               <div>
                                    <p>
                                    Sparx School Lace Big Shoes- Black                                    </p>
                               </div>
                             </div>
                        </div>
                        }
                        
                </div>












{/* 


                <div className="site-section block-3 site-blocks-2 bg-light">
                    <div className="container-fuild" style={{width : "97%"}}>
                        <div className="row justify-content-center">
                            <div className="col-md-7 site-section-heading text-center pt-4">
                                <h2 style={{marginLeft : "-74px"}} >Featured Products</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 p-5">
                            <Carousel responsive={responsive}>



                                        {
                                            allproduct.map((res,i)=>{
                                                var Cat = res.Product_Catagories.split(" ").join("-")
                                        
                                                var Cat1 = res.Product_Name.split(" ").join("-")
                                                return (
                                                     <div className="item" style={{margin : "5px 5px"}} key={i}>
                                                        <div className="block-4 text-center">
                                                            <figure className="block-3-image">
                                                                <img src={res.Product_Image_Upload} alt="Image placeholder" style={{height : "210px" }}  className="img-fluid"/>
                                                            </figure>
                                                            <div className="block-4-text p-4">
                                                                <h3><Link to='/shop'><div href="#">{res.Product_Name}</div></Link></h3>
                                                                <p className="mb-0">{res.Product_Title}</p>
                                                                <p className="text-primary font-weight-bold">{res.Product_Price}</p>
                                                                <Link to={"/shop/categories/"+Cat+"/"+Cat1} onClick={()=>savethedetailproduct(res)}><div href="#" className="btn btn-sm btn-primary">View</div></Link>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                </Carousel>
                            </div>
                        </div>
                    </div>
                </div> */}



        </div>
        </>
    )
}

export default ShoesProductDetails;