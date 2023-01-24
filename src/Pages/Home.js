import React ,{useEffect , useState} from 'react'
import {Link} from "react-router-dom"

import swal from 'sweetalert';
import Loader from "react-loader-spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, Row, Col } from "react-bootstrap";

// import blockCover from '../assets/images/hero_1.jpg';
// import categ from '../assets/images/cate.jpeg';
// import women from '../assets/images/women.jpg';
// import children from '../assets/images/children.jpg';
// import men from '../assets/images/men.jpg';

// import cloth_1 from '../assets/images/cloth_1.jpg';
// import shoe_1 from '../assets/images/shoe_1.jpg';
// import cloth_2 from '../assets/images/cloth_2.jpg';
// import cloth_3 from '../assets/images/cloth_3.jpg';
// import blog_1 from '../assets/images/blog_1.jpg';
// import part_1 from '../assets/images/part1.jpg';
// import part_2 from '../assets/images/part2.jpg';
import ClearIcon from '@material-ui/icons/Clear';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ReplayIcon from '@material-ui/icons/Replay';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PaymentIcon from '@material-ui/icons/Payment';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// import ContactSupportIcon from '@mui/icons-material/ContactSupport';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-bootstrap/Carousel';
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






const Home = ( props ) => {
    const [Categories , setCategories] = useState([])
    const [Categories1 , setCategories1] = useState([])
    const [Homo , setHomo] = useState([])
    const [product , setproduct] = useState([])
    const [dis , setdis] = useState(false)

    const [product1 , setproduct1] = useState([])
    const [UserDatat , setUserDatat] = useState({})
    const [userHeader , setuserHeader] = useState(false)
    const [SliderPhoto , setSliderPhoto] = useState([])
    const [ArrivalPhoto , setArrivalPhoto] = useState([])
    const [BannerPhoto , setBannerPhoto] = useState([])
    const [MainCatogories , setMainCatogories] = useState([])
    const [DataPart2 , setDataPart2] = useState([])
    const [fvalue , setfvalue] = useState([])
    const [data, setdata] = useState([]) 
    const [companieswith , setcompanieswith] = useState([])
    const [couponShow , setcouponShow] = useState(true)

    const [fg , setfg] = useState(true)
    var settings = {
      infinite: true,
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
    autoplaySpeed: 2000,
    };
    useEffect(() =>{

        window.scrollTo(0, 0)
        setInterval(() => {
          if( document.getElementsByClassName("carousel-indicators")[0])
          document.getElementsByClassName("carousel-indicators")[0].remove()
        }, 1000);
        
      // document.getElementsByClassName("carousel-indicators")
      // document.getElementsByClassName("visually-hidden")[0].remove()
      // document.getElementsByClassName("visually-hidden")[0].remove()
      // document.getElementsByClassName("visually-hidden")[1].remove()
      console.log(    document.getElementsByClassName("carousel-indicators")[0]
      )
        fetch("https://d-luxe-housebackend.vercel.app/slider-photo",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res=>res.json())
        .then(res1=>{
            console.log(res1[0]);
            setSliderPhoto(res1)
          })
          carrouselInit()
        fetch("https://d-luxe-housebackend.vercel.app/companieswith",{
          method: "GET",
           headers :  {
           "Content-Type" : "application/json" , 
       } ,
      })
      .then(res9=>res9.json())
      .then(res11=>{
          console.log(res11[0]);
          setcompanieswith(res11)
      
      })
        fetch("https://d-luxe-housebackend.vercel.app/BannerPhoto",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res22=>res22.json())
        .then(res222=>{
            console.log(res222[0]);
            setBannerPhoto(res222)
        
        })

        fetch("https://d-luxe-housebackend.vercel.app/arrival-photo",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res2=>res2.json())
        .then(res3=>{
            console.log(res3);
            setArrivalPhoto(res3)
        
        })
        fetch("https://d-luxe-housebackend.vercel.app/MainCatogories",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res2=>res2.json())
        .then(res3=>{
            console.log(res3);
            // setMainCatogories(res3)
            

            let dat = []
            res3.map((res55,c)=>{
                dat.push(res55)
            })
            // console.log(SubClassCategories,asse)
            console.log(dat)
            let data = dat.sort((a, b) => {
                return a.sort - b.sort;
            });
            setMainCatogories(data)
            
        })
        




        localStorage.removeItem("SearchData")
        localStorage.removeItem("Data")
        localStorage.removeItem("CartPrice")
        localStorage.removeItem("CateProduct")

        // if ( JSON.parse(localStorage.getItem("User"))  ){
        //     setuserHeader(true)
        //     setUserDatat(JSON.parse(localStorage.getItem("User")))
        //     const cartUser1 = JSON.parse(localStorage.getItem("Cart"))
        //     if (cartUser1 ){
        // fetch("https://d-luxe-housebackend.vercel.app/user-cart-add",{
        //                         method: "POST",
        //                         headers :  {
        //                             "Content-Type" : "application/json" , 
        //                         } ,
        //                         body : JSON.stringify({
        //                             cart : cartUser1 ,
        //                             user : JSON.parse(localStorage.getItem("User")) 
        //                         })
        //                     })
        //                     .then(res=>res.json())
        //                     .then((res1)=>{ 
        //                         console.log(res1);
        //                     })

        //     }
        // }
        var data1 =  JSON.parse(localStorage.getItem("Cart")) 
        fetch("https://d-luxe-housebackend.vercel.app/FAQ1",{
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
        fetch("https://d-luxe-housebackend.vercel.app/AllProduct",{
       method: "GET",
        headers :  {
        "Content-Type" : "application/json" , 
    }
   })
   .then(res5=>res5.json())
   .then(res6=>{
    //    console.log(res6);
    const pro = []
    res6.map((res7,i)=>{
        //    console.log(res7.Product_Popular );
        if ( res7.Arrival){
            //    console.log(res7);
            //         // return setproduct1(...product1 , res3)
            pro.push(res7)
        }
    })
    // setproduct(pro.reverse())
    setproduct(pro.slice(0,5))
    setdis(true)
   })
    
//     fetch("/AllCategories",{
//        method: "GET",
//         headers :  {
//         "Content-Type" : "application/json" , 
//     } ,
//    })
//    .then(res=>res.json())
//    .then(res1=>{
//     setCategories(res1)
   
//    })

    
//     fetch("/AllHomomethtic",{
//        method: "GET",
//         headers :  {
//         "Content-Type" : "application/json" , 
//     } ,
//    })
//    .then(res3=>res3.json())
//    .then(res4=>{
//     setHomo(res4)
//     // console.log(res4);
//    })

 },[])

 const savethedetailproduct = (data) =>{
    localStorage.setItem("Data" , JSON.stringify(data) )
    console.log(data);
 }
 
 
 const cate =(Categories) =>{
     var Cat1 = Categories.split(" ").join("-")
     
     localStorage.setItem("Cate" , JSON.stringify(Categories) )
     
     setTimeout(()=>{
            props.history.push(`/shop/categories/${Cat1}`)
        },1500)
    }
    
    
//     const addtocartproduct = (data111) =>{
//     //    localStorage.setItem("Data" , JSON.stringify(data) )
//        console.log(data111);


//        if(data111.ProductCreater !== "60a3c644e4520a12c80a6f52"){
//         console.log("yes ");
//         fetch("https://d-luxe-housebackend.vercel.app/ChangePercentageInOrder/"+data111.ProductCreater,{
//                             method: "POST",
//                             headers :  {
//                                 "Content-Type" : "application/json" , 
//                             }
//                         })
//                         .then(res=>res.json())
//                         .then((res1)=>{ 
//                             console.log(res1);
//                             // if(!res1 === null){
// document.getElementById("myDi").style.visibility = "visible"
//     setTimeout(()=>{
//         document.getElementById("myDi").style.visibility = "hidden"

//     },1000)
//     if (data111.Product_Price_Discounted === null){
//         const data =  {...data111 ,
                    
//                     Percentage : data111.Percentage,
//                     DeliveryStatus : "Pending",
//                      Pieces :1,
//                      Total_Product_Price  : data111.Product_Price *1}
//     var data1 = JSON.parse(localStorage.getItem("Cart")) 
//     if (data1){
//         var data3 = data1.map((item) => {
//             if(item._id === data111._id){
//                 console.log("double");
// ;                   localStorage.setItem("double",JSON.stringify(true))
//                 return {...item,
//                     Pieces :1+ item.Pieces,
//                     Total_Product_Price  : (data111.Product_Price *1)+ item.Total_Product_Price}
//             }
//             else{
//                 console.log("double not match");
//                 return item
//             }

//         })
//         var data5 =  JSON.parse(localStorage.getItem("double")) 
//         // console.log(DataPart2.length, data3.length,data5);
//         var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//         if(data10.length=== data3.length && data5){
//             console.log("double remove");
//             localStorage.removeItem("double")
//             localStorage.setItem("Cart" , JSON.stringify(data3) )
         
//         }
//         else{
//             console.log("Differet");
//             var data2 = [...data1 , data]
        
//        localStorage.setItem("Cart" , JSON.stringify(data2) )
//         }
//     }
//     else{
//         console.log("1");
//         localStorage.setItem("Cart" , JSON.stringify([data]) )
      
//     }

//     }
//     else if (data111.Product_Price_Discounted){
//         const data =  {...data111 ,
                    
//                     Percentage : data111.Percentage,
//                     DeliveryStatus : "Pending",
//                      Pieces :1,
//                      Total_Product_Price  : data111.Product_Price_Discounted *1}
//     var data1 = JSON.parse(localStorage.getItem("Cart")) 
//     if (data1){
//         var data3 = data1.map((item) => {
//             if(item._id === data111._id){
//                 console.log("double");
// ;                   localStorage.setItem("double",JSON.stringify(true))
//                 return {...item,
//                     Pieces :1+ item.Pieces,
//                     Total_Product_Price  : (data111.Product_Price_Discounted *1)+ item.Total_Product_Price}
//             }
//             else{
//                 console.log("double not match");
//                 return item
//             }

//         })
//         var data5 =  JSON.parse(localStorage.getItem("double")) 
//         // console.log(DataPart2.length, data3.length,data5);
//         var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//         if(data10.length=== data3.length && data5){
//             console.log("double remove");
//             localStorage.removeItem("double")
//             localStorage.setItem("Cart" , JSON.stringify(data3) )
         
//         }
//         else{
//             console.log("Differet");
//             var data2 = [...data1 , data]
        
//        localStorage.setItem("Cart" , JSON.stringify(data2) )
//         }
//     }
//     else{
//         console.log("1");
//         localStorage.setItem("Cart" , JSON.stringify([data]) )
      
//     }

//     }
//     else if (data111.Size_Discounted[0]){
//         const data =  {...data111 ,
//             Percentage : data111.Percentage,
//             DeliveryStatus : "Pending",
//             Pieces :1,
//             Size : data111.Size[0],
//             Product_Price_Discounted : data111.Size_Discounted[0],
//             Total_Product_Price  : data111.Size_Discounted[0] *1}
//             var data1 = JSON.parse(localStorage.getItem("Cart")) 
//             if (data1){
//             var data3 = data1.map((item) => {
//                 if(item._id === data111._id &&  item.Size === data111.Size[0]){
//                     console.log("double");
//             ;                   localStorage.setItem("double",JSON.stringify(true))
//                     return {...item,
//                         Pieces :1+ item.Pieces,
//                         Total_Product_Price  : (data111.Size_Discounted[0] *1)+ item.Total_Product_Price}
//                 }
//                 else{
//                     console.log("double not match");
//                     return item
//                 }

//             })
//             var data5 =  JSON.parse(localStorage.getItem("double")) 
//             // console.log(DataPart2.length, data3.length,data5);
//             var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//             if(data10.length=== data3.length && data5){
//                 console.log("double remove");
//                 localStorage.removeItem("double")
//                 localStorage.setItem("Cart" , JSON.stringify(data3) )
            
//             }
//             else{
//                 console.log("Differet");
//                 var data2 = [...data1 , data]
            
//             localStorage.setItem("Cart" , JSON.stringify(data2) )
//             }
//             }
//             else{
//             console.log("1");
//             localStorage.setItem("Cart" , JSON.stringify([data]) )

//             }
//     }


//     else{




//                         const data =  {...data111 ,
//                             Percentage : data111.Percentage,
//                             DeliveryStatus : "Pending",
//                             Pieces :1,
//                             Size : data111.Size[0],
//                             Product_Price_Discounted : data111.Price[0],
//                             Total_Product_Price  : data111.Price[0] *1}
//             var data1 = JSON.parse(localStorage.getItem("Cart")) 
//             if (data1){
//             var data3 = data1.map((item) => {
//                 if(item._id === data111._id &&  item.Size === data111.Size[0]){
//                     console.log("double");
//             ;                   localStorage.setItem("double",JSON.stringify(true))
//                     return {...item,
//                         Pieces :1+ item.Pieces,
//                         Total_Product_Price  : (data111.Price[0] *1)+ item.Total_Product_Price}
//                 }
//                 else{
//                     console.log("double not match");
//                     return item
//                 }

//             })
//             var data5 =  JSON.parse(localStorage.getItem("double")) 
//             // console.log(DataPart2.length, data3.length,data5);
//             var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//             if(data10.length=== data3.length && data5){
//                 console.log("double remove");
//                 localStorage.removeItem("double")
//                 localStorage.setItem("Cart" , JSON.stringify(data3) )
              
//             }
//             else{
//                 console.log("Differet");
//                 var data2 = [...data1 , data111]
             
//             localStorage.setItem("Cart" , JSON.stringify(data2) )
//             }
//             }
//             else{
//             console.log("1");
//             localStorage.setItem("Cart" , JSON.stringify([data]) )
      
//             }


//     }


//   })
    

// }













// else{
  
//                 document.getElementById("myDi").style.visibility = "visible"
//                 setTimeout(()=>{
//                 document.getElementById("myDi").style.visibility = "hidden"

//                 },1000)
//                 // console.log(productDetail);
//                 if (data111.Product_Price_Discounted === null){
//                 const data =  {...data111 ,
//                     Percentage : 0,
//                     DeliveryStatus : "Pending",
//                     Pieces :1,
//                     Total_Product_Price  : data111.Product_Price *1}
//                 var data1 = JSON.parse(localStorage.getItem("Cart")) 
//                 console.log(  data1);
//                 if (data1){
//                     console.log(  data111._id);
//                 var data3 = data1.map((item) => {
//                     console.log(item._id , data111._id);
//                     if(item._id === data111._id ){
//                         console.log("double");
//                 ;                   localStorage.setItem("double",JSON.stringify(true))
//                 return {...item,
//                     Pieces :1+ item.Pieces,
//                     Total_Product_Price  : (data111.Product_Price *1)+ item.Total_Product_Price}
//                 }
//                 else{
//                 console.log("double not match");
//                 return item
//                 }

//                 })
//                 var data5 =  JSON.parse(localStorage.getItem("double")) 
//                 // console.log(DataPart2.length, data3.length,data5);
//                 var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//                 if(data10.length=== data3.length && data5){
//                 console.log("double remove");
//                 localStorage.removeItem("double")
//                 localStorage.setItem("Cart" , JSON.stringify(data3) )

//                 }
//                 else{
//                 console.log("Differet");
//                 var data2 = [...data1 , data111]

//                 localStorage.setItem("Cart" , JSON.stringify(data2) )
//                 }
//                 }
//                 else{
//                 console.log("1");
//                 localStorage.setItem("Cart" , JSON.stringify([data]) )

//                 }

//                 }
//                 else if (data111.Product_Price_Discounted){
//                 const data =  {...data111 ,
//                     Percentage : 0,
//                     DeliveryStatus : "Pending",
//                     Pieces :1,
//                     Total_Product_Price  : data111.Product_Price_Discounted *1}
//                 var data1 = JSON.parse(localStorage.getItem("Cart")) 
//                 console.log(  data1);
//                 if (data1){
//                     console.log(  data111._id);
//                 var data3 = data1.map((item) => {
//                     console.log(item._id , data111._id);
//                     if(item._id === data111._id ){
//                         console.log("double");
//                 ;                   localStorage.setItem("double",JSON.stringify(true))
//                 return {...item,
//                     Pieces :1+ item.Pieces,
//                     Total_Product_Price  : (data111.Product_Price_Discounted *1)+ item.Total_Product_Price}
//                 }
//                 else{
//                 console.log("double not match");
//                 return item
//                 }

//                 })
//                 var data5 =  JSON.parse(localStorage.getItem("double")) 
//                 // console.log(DataPart2.length, data3.length,data5);
//                 var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//                 if(data10.length=== data3.length && data5){
//                 console.log("double remove");
//                 localStorage.removeItem("double")
//                 localStorage.setItem("Cart" , JSON.stringify(data3) )

//                 }
//                 else{
//                 console.log("Differet");
//                 var data2 = [...data1 , data111]

//                 localStorage.setItem("Cart" , JSON.stringify(data2) )
//                 }
//                 }
//                 else{
//                 console.log("1");
//                 localStorage.setItem("Cart" , JSON.stringify([data]) )

//                 }

//                 }
//                 else if (data111.Size_Discounted[0]){
//                     const data =  {...data111 ,
//                         Percentage : 0,
//                         DeliveryStatus : "Pending",
//                         Pieces :1,
//                         Size : data111.Size[0],
//                         Product_Price_Discounted : data111.Size_Discounted[0],
//                         Total_Product_Price  : data111.Size_Discounted[0] *1}
//             var data1 = JSON.parse(localStorage.getItem("Cart")) 
//             if (data1){
//             var data3 = data1.map((item) => {
//                 if(item._id === data111._id &&  item.Size === data111.Size[0]){
//                     console.log("double");
//             ;                   localStorage.setItem("double",JSON.stringify(true))
//                 return {...item,
//                     Pieces :1+ item.Pieces,
//                     Total_Product_Price  : (data111.Size_Discounted[0] *1)+ item.Total_Product_Price}
//             }
//             else{
//                 console.log("double not match");
//                 return item
//             }

//             })
//             var data5 =  JSON.parse(localStorage.getItem("double")) 
//             // console.log(DataPart2.length, data3.length,data5);
//             var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//             if(data10.length=== data3.length && data5){
//             console.log("double remove");
//             localStorage.removeItem("double")
//             localStorage.setItem("Cart" , JSON.stringify(data3) )

//             }
//             else{
//             console.log("Differet");
//             var data2 = [...data1 , data111]

//             localStorage.setItem("Cart" , JSON.stringify(data2) )
//             }
//             }
//             else{
//             console.log("1");
//             localStorage.setItem("Cart" , JSON.stringify([data]) )

//             }

//                 }
//                 else{




//                         const data =  {...data111 ,
//                             Percentage : 0,
//                             DeliveryStatus : "Pending",
//                             Pieces :1,
//                             Size : data111.Size[0],
//                             Product_Price_Discounted : data111.Price[0],
//                             Total_Product_Price  : data111.Price[0] *1}
//                 var data1 = JSON.parse(localStorage.getItem("Cart")) 
//                 if (data1){
//                 var data3 = data1.map((item) => {
//                     if(item._id === data111._id &&  item.Size === data111.Size[0]){
//                         console.log("double");
//                 ;                   localStorage.setItem("double",JSON.stringify(true))
//                     return {...item,
//                         Pieces :1+ item.Pieces,
//                         Total_Product_Price  : (data111.Price[0] *1)+ item.Total_Product_Price}
//                 }
//                 else{
//                     console.log("double not match");
//                     return item
//                 }

//                 })
//                 var data5 =  JSON.parse(localStorage.getItem("double")) 
//                 // console.log(DataPart2.length, data3.length,data5);
//                 var data10 =  JSON.parse(localStorage.getItem("Cart")) 

//                 if(data10.length=== data3.length && data5){
//                 console.log("double remove");
//                 localStorage.removeItem("double")
//                 localStorage.setItem("Cart" , JSON.stringify(data3) )

//                 }
//                 else{
//                 console.log("Differet");
//                 var data2 = [...data1 , data111]

//                 localStorage.setItem("Cart" , JSON.stringify(data2) )
//                 }
//                 }
//                 else{
//                 console.log("1");
//                 localStorage.setItem("Cart" , JSON.stringify([data]) )

//                 }


//                 }


//                     }






































//     }

    
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
    const carrouselInit =() => {

      var carrousel = document.getElementById("carrouselimg1");
      carrousel.style.opacity = "1";
      setInterval(carrouselAutoChange, 3500);
    
    }
    
    const carrouselAutoChange=()  =>{
      carrouselRight();
    }
    
    
    
    const carrouselChange=(i) => {
    
      var carrousel = document.getElementById("carrouselimg" + i);
      carrousel.style.opacity = "1";
    
    }
    
    
    const carrouselLeft=()  =>{
    
      let nbCarrousel = 4;
      let num = 0;
    
      for (let i = 0; i < nbCarrousel; i++) {
          num = i + 1;
          var carrousel = document.getElementById("carrouselimg" + num);
          if (carrousel.style.opacity == "1") {
              carrousel.style.opacity = "0";
              if (i == 0) {
                  return carrouselChange(4);
              }
              return carrouselChange(num - 1);
          }
      }
    }
    
    const carrouselRight=() =>{
    
      let nbCarrousel = 4;
      let num = 0;
    
      for (let i = 0; i < nbCarrousel; i++) {
          num = i + 1;
          var carrousel = document.getElementById("carrouselimg" + num);
          if (carrousel.style.opacity == "1") {
              carrousel.style.opacity = "0";
              if (i == 3) {
                  return carrouselChange(1);
              }
              return carrouselChange(num + 1);
          }
      }
    }
    
    
    // const addtocartproduct = (productDetail) =>{
    //   swal("Update!", "Your Item Add in Cart!", "success");
    
    //   // if(productDetail){
    //       // console.log(typeof(productDetail[0].ProductCreater), typeof("60a3c644e4520a12c80a6f52"));
          
    
    
        
    //                   if (productDetail[0].Product_Price_Discounted === null){
    //                   const data =  {...productDetail[0] ,
    //                       Percentage : 0,
    //                       DeliveryStatus : "Pending",
    //                       Pieces :1,
    //                       Total_Product_Price  : productDetail[0].Product_Price *1}
    //                   var data1 = JSON.parse(localStorage.getItem("Cart")) 
    //                   if (data1){
    //                   var data3 = data1.map((item) => {
    //                       if(item._id === data._id ){
    //                           console.log("double");
    //                   ;                   localStorage.setItem("double",JSON.stringify(true))
    //                   return {...item,
    //                       Pieces :1+ item.Pieces,
    //                       Total_Product_Price  : (productDetail[0].Product_Price *1)+ item.Total_Product_Price}
    //                   }
    //                   else{
    //                   console.log("double not match");
    //                   return item
    //                   }
    
    //                   })
    //                   var data5 =  JSON.parse(localStorage.getItem("double")) 
    //                   console.log(DataPart2.length, data3.length,data5);
    //                   var data10 =  JSON.parse(localStorage.getItem("Cart")) 
    
    //                   if(data10.length=== data3.length && data5){
    //                   console.log("double remove");
    //                   localStorage.removeItem("double")
    //                   localStorage.setItem("Cart" , JSON.stringify(data3) )
    
    //                   }
    //                   else{
    //                   console.log("Differet");
    //                   var data2 = [...data1 , data]
    
    //                   localStorage.setItem("Cart" , JSON.stringify(data2) )
    //                   }
    //                   }
    //                   else{
    //                   console.log("1");
    //                   localStorage.setItem("Cart" , JSON.stringify([data]) )
    
    //                   }
    
    //                   }
    //                   else if (productDetail[0].Product_Price_Discounted){
    //                   const data =  {...productDetail[0] ,
    //                       Percentage : 0,
    //                       DeliveryStatus : "Pending",
    //                       Pieces :1,
    //                       Total_Product_Price  : productDetail[0].Product_Price_Discounted *1}
    //                   var data1 = JSON.parse(localStorage.getItem("Cart")) 
    //                   if (data1){
    //                   var data3 = data1.map((item) => {
    //                       if(item._id === data._id ){
    //                           console.log("double");
    //                   ;                   localStorage.setItem("double",JSON.stringify(true))
    //                   return {...item,
    //                       Pieces :1+ item.Pieces,
    //                       Total_Product_Price  : (productDetail[0].Product_Price_Discounted *1)+ item.Total_Product_Price}
    //                   }
    //                   else{
    //                   console.log("double not match");
    //                   return item
    //                   }
    
    //                   })
    //                   var data5 =  JSON.parse(localStorage.getItem("double")) 
    //                   console.log(DataPart2.length, data3.length,data5);
    //                   var data10 =  JSON.parse(localStorage.getItem("Cart")) 
    
    //                   if(data10.length=== data3.length && data5){
    //                   console.log("double remove");
    //                   localStorage.removeItem("double")
    //                   localStorage.setItem("Cart" , JSON.stringify(data3) )
    
    //                   }
    //                   else{
    //                   console.log("Differet");
    //                   var data2 = [...data1 , data]
    
    //                   localStorage.setItem("Cart" , JSON.stringify(data2) )
    //                   }
    //                   }
    //                   else{
    //                   console.log("1");
    //                   localStorage.setItem("Cart" , JSON.stringify([data]) )
    
    //                   }
    
    //                   }
    
    
                          
    
    // }
    
    


const addtocartproduct = (productDetail) =>{
  swal("Update!", "Your Item Add in Cart!", "success");

      
  // document.getElementById("myDi").style.visibility = "visible"
  // setTimeout(()=>{
  // document.getElementById("myDi").style.visibility = "hidden"

  // },1000)
  console.log(productDetail)
  if (productDetail[0].Product_Price_Discounted === null){
  const data =  {...productDetail[0] ,
      Percentage : 0,
      DeliveryStatus : "Pending",
      Pieces : 1 ,
      Total_Product_Price  : productDetail[0].Product_Price * 1 }
  var data1 = JSON.parse(localStorage.getItem("Cart")) 
  if (data1){
  var data3 = data1.map((item) => {
      if(item._id === data._id ){
          console.log("double");
  ;                   localStorage.setItem("double",JSON.stringify(true))
  return {...item,
      Pieces : 1 + item.Pieces,
      Total_Product_Price  : (productDetail[0].Product_Price * 1 )+ item.Total_Product_Price}
  }
  else{
  console.log("double not match");
  return item
  }

  })
  var data5 =  JSON.parse(localStorage.getItem("double")) 
  console.log(DataPart2.length, data3.length,data5);
  var data10 =  JSON.parse(localStorage.getItem("Cart")) 

  if(data10.length=== data3.length && data5){
  console.log("double remove");
  localStorage.removeItem("double")
  localStorage.setItem("Cart" , JSON.stringify(data3) )

  }
  else{
  console.log("Differet");
  var data2 = [...data1 , data]

  localStorage.setItem("Cart" , JSON.stringify(data2) )
  }
  }
  else{
  console.log("1");
  localStorage.setItem("Cart" , JSON.stringify([data]) )

  }

  }
  else if (productDetail[0].Product_Price_Discounted){
  const data =  {...productDetail[0] ,
      Percentage : 0,
      DeliveryStatus : "Pending",
      Pieces : 1 ,
      Total_Product_Price  : productDetail[0].Product_Price_Discounted * 1 }
  var data1 = JSON.parse(localStorage.getItem("Cart")) 
  if (data1){
  var data3 = data1.map((item) => {
      if(item._id === data._id ){
          console.log("double");
  ;                   localStorage.setItem("double",JSON.stringify(true))
  return {...item,
      Pieces : 1 + item.Pieces,
      Total_Product_Price  : (productDetail[0].Product_Price_Discounted * 1 )+ item.Total_Product_Price}
  }
  else{
  console.log("double not match");
  return item
  }

  })
  var data5 =  JSON.parse(localStorage.getItem("double")) 
  console.log(DataPart2.length, data3.length,data5);
  var data10 =  JSON.parse(localStorage.getItem("Cart")) 

  if(data10.length=== data3.length && data5){
  console.log("double remove");
  localStorage.removeItem("double")
  localStorage.setItem("Cart" , JSON.stringify(data3) )

  }
  else{
  console.log("Differet");
  var data2 = [...data1 , data]

  localStorage.setItem("Cart" , JSON.stringify(data2) )
  }
  }
  else{
  console.log("1");
  localStorage.setItem("Cart" , JSON.stringify([data]) )

  }

  }
  else if (productDetail[0].Size_Discounted[0]){
      
          const data =  {...productDetail[0] ,
              Percentage : 0,
              DeliveryStatus : "Pending",
              Pieces : 1 ,
              Size : productDetail[0].Size[0],
              Product_Price_Discounted : productDetail[0].Size_Discounted[0],
              Total_Product_Price  : productDetail[0].Size_Discounted[0] * 1 }
  var data1 = JSON.parse(localStorage.getItem("Cart")) 
  if (data1){
  var data3 = data1.map((item) => {
      if(item._id === data._id &&  item.Size === productDetail[0].Size[0]){
          console.log("double");
  ;                   localStorage.setItem("double",JSON.stringify(true))
      return {...item,
          Pieces : 1 + item.Pieces,
          Total_Product_Price  : (productDetail[0].Size_Discounted[0] * 1 )+ item.Total_Product_Price}
  }
  else{
      console.log("double not match");
      return item
  }

  })
  var data5 =  JSON.parse(localStorage.getItem("double")) 
  console.log(DataPart2.length, data3.length,data5);
  var data10 =  JSON.parse(localStorage.getItem("Cart")) 

  if(data10.length=== data3.length && data5){
  console.log("double remove");
  localStorage.removeItem("double")
  localStorage.setItem("Cart" , JSON.stringify(data3) )

  }
  else{
  console.log("Differet");
  var data2 = [...data1 , data]

  localStorage.setItem("Cart" , JSON.stringify(data2) )
  }
  }
  else{
  console.log("1");
  localStorage.setItem("Cart" , JSON.stringify([data]) )

  }

  }
  else{




          const data =  {...productDetail[0] ,
              Percentage : 0,
              DeliveryStatus : "Pending",
              Pieces : 1 ,
              Size : productDetail[0].Size[0],
              Product_Price_Discounted : productDetail[0].Price[0],
              Total_Product_Price  : productDetail[0].Price[0] * 1 }
  var data1 = JSON.parse(localStorage.getItem("Cart")) 
  if (data1){
  var data3 = data1.map((item) => {
      if(item._id === data._id &&  item.Size === productDetail[0].Size[0]){
          console.log("double");
  ;                   localStorage.setItem("double",JSON.stringify(true))
      return {...item,
          Pieces : 1 + item.Pieces,
          Total_Product_Price  : (productDetail[0].Price[0] * 1 )+ item.Total_Product_Price}
  }
  else{
      console.log("double not match");
      return item
  }

  })
  var data5 =  JSON.parse(localStorage.getItem("double")) 
  console.log(DataPart2.length, data3.length,data5);
  var data10 =  JSON.parse(localStorage.getItem("Cart")) 

  if(data10.length=== data3.length && data5){
  console.log("double remove");
  localStorage.removeItem("double")
  localStorage.setItem("Cart" , JSON.stringify(data3) )

  }
  else{
  console.log("Differet");
  var data2 = [...data1 , data]

  localStorage.setItem("Cart" , JSON.stringify(data2) )
  }
  }
  else{
  console.log("1");
  localStorage.setItem("Cart" , JSON.stringify([data]) )

  }


  }


      

}

    
    const addtocartproduct12 = (productDetail) =>{
  
      if (productDetail[0].Product_Price_Discounted === null){
        const data =  {...productDetail[0] ,
            Percentage : 0,
            DeliveryStatus : "Pending",
            Pieces : 1 ,
            Total_Product_Price  : productDetail[0].Product_Price * 1 }
        var data1 = JSON.parse(localStorage.getItem("Cart")) 
        if (data1){
        var data3 = data1.map((item) => {
            if(item._id === data._id ){
                console.log("double");
        ;                   localStorage.setItem("double",JSON.stringify(true))
        return {...item,
            Pieces : 1 + item.Pieces,
            Total_Product_Price  : (productDetail[0].Product_Price * 1 )+ item.Total_Product_Price}
        }
        else{
        console.log("double not match");
        return item
        }
    
        })
        var data5 =  JSON.parse(localStorage.getItem("double")) 
        console.log(DataPart2.length, data3.length,data5);
        var data10 =  JSON.parse(localStorage.getItem("Cart")) 
    
        if(data10.length=== data3.length && data5){
        console.log("double remove");
        localStorage.removeItem("double")
        localStorage.setItem("Cart" , JSON.stringify(data3) )
    
        }
        else{
        console.log("Differet");
        var data2 = [...data1 , data]
    
        localStorage.setItem("Cart" , JSON.stringify(data2) )
        }
        }
        else{
        console.log("1");
        localStorage.setItem("Cart" , JSON.stringify([data]) )
    
        }
    
        }
        else if (productDetail[0].Product_Price_Discounted){
        const data =  {...productDetail[0] ,
            Percentage : 0,
            DeliveryStatus : "Pending",
            Pieces : 1 ,
            Total_Product_Price  : productDetail[0].Product_Price_Discounted * 1 }
        var data1 = JSON.parse(localStorage.getItem("Cart")) 
        if (data1){
        var data3 = data1.map((item) => {
            if(item._id === data._id ){
                console.log("double");
        ;                   localStorage.setItem("double",JSON.stringify(true))
        return {...item,
            Pieces : 1 + item.Pieces,
            Total_Product_Price  : (productDetail[0].Product_Price_Discounted * 1 )+ item.Total_Product_Price}
        }
        else{
        console.log("double not match");
        return item
        }
    
        })
        var data5 =  JSON.parse(localStorage.getItem("double")) 
        console.log(DataPart2.length, data3.length,data5);
        var data10 =  JSON.parse(localStorage.getItem("Cart")) 
    
        if(data10.length=== data3.length && data5){
        console.log("double remove");
        localStorage.removeItem("double")
        localStorage.setItem("Cart" , JSON.stringify(data3) )
    
        }
        else{
        console.log("Differet");
        var data2 = [...data1 , data]
    
        localStorage.setItem("Cart" , JSON.stringify(data2) )
        }
        }
        else{
        console.log("1");
        localStorage.setItem("Cart" , JSON.stringify([data]) )
    
        }
    
        }
    
    
      props.history.push("/custom-product/photo-upload")
    }
    
    
        return (
            
            <div>
            











            {couponShow ?

<div className="site-section change-padding" style={{position: "fixed", width: "100%",
zIndex:"9999",top  :"25%"}}>

            <div className="container div-size-respon" style={{width : "35%", borderRadius : "20px",background: "white",padding : "0px"}}>
                <div className="row">
                    <div className="col-md-12">
                        <div >

                            <div className="p-3 p-lg-5" style={{ borderRadius : "20px",boxShadow: "1px 1px 10px grey"}}>
                               <center>
                                <h5 className='change-texts' style={{color : "black"}}>
                             
                             <span style={{fontWeight : "bold",fontSize  :"30px",color : "red"}}>  SALE</span> <br /><br />
                            
                             <span style={{fontWeight : "bold",fontSize  :"20px"}}>  WE HAVE A <br /> SPECIAL GIFT FOR YOU</span> 
                                <br />
                                <br />
                              <b>

                                <span  style={{color : "grey",fontSize  :"20px"}}>
                               Upto 50% off on
                                <br /> 
                                 all travels bags
                                </span>
                                  
                              </b>
                                </h5>
                                {/* <p  style={{fontSize : "13px"}}>Code expires after 01 hour</p> */}
                        
                                {/* <p  style={{fontSize : "17px",color : "grey",fontWeight : "800",margin : "0px"}}>Coupon Code</p> */}
                              
                               </center>
                               
                               <ClearIcon  style={{position: "absolute",top: "1px",right: "4%", color : "black",fontSize : "27px",fontWeight : "400",
                                  border: "2px solid",
                                  borderRadius: "32px",
                                  padding: "3px 3px",
                                  // width: "37px",
                                  cursor  :"pointer",
                                  width: "26px",
                                  height: '26px',
                                  // height: "37px",
                                  background: "rgb(234, 234, 234)"}}
                                  onClick={()=>setcouponShow(!couponShow)}
                                  />
                             

 
                      

                      <div className="form-row">
                                  <div className="form-group col-md-12">
                                    <center>
                                 
<br />
<button  style={{width : "170px", padding : "8px 0px", color : "black",  background : "rgb(234, 234, 234)" ,   borderRadius :  "30px" ,fontSize : "19px",fontWeight : "bold",border : "1px solid black"}} onClick={()=>props.history.push("/mains-categories/sale/all-products")}>  Get Yours!</button>
                                    
                                    </center>
                        </div>
                        </div>
                             
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>


:
""

}




























            {/* End Top Search */}
            {/* Start Slider */}
            <section>
                  <div className="" style={{height :  "auto"}}>
                  {/* <div className="container-fuild" style={{height :  "auto"}}> */}
                      <div className="col-xl-12 col-lg-12 col-md-12 dfkjdf"   style={{width : "100%", margin  : "auto",padding: "0px",height : "503px"}} >
                                  
                                  
                                  
                                            <div class="center">
                            <div onClick={()=>carrouselLeft()} style={{position: "absolute",left: "10px",zIndex: "99",top:"50%",border: "2px solid black"}}>
                              <KeyboardArrowLeftIcon  style={{color : "grey", width :"30px",fontSize  :"30px"}}/>
                          
                        </div>
                        <div class="center1">
                            <div class="carrousel-item" id="carrouselimg1">
                                <img class="d-block img-cov" src={SliderPhoto[0] && SliderPhoto[0].photo1} alt="image 1"  style={{height:"510px",width: "100%"}} id="changes-Photo"/>
                                <p className="m-b-40 change-text-size the456" style={{fontSize : "30px", fontWeight :"500" ,  textAlign: "left", marginBottom : "-40px" , padding  :"0px 40px", position : "absolute" , zIndex : "1" , top  :"40%" , left : "10%", color : "white",textAlign : "center"}}>Unmask your CastOfMind

</p> 

                            </div>
                            <div class="carrousel-item" id="carrouselimg2">
                                <img class="d-block img-cov" src={SliderPhoto[0] && SliderPhoto[0].photo2} alt="image 2" style={{height:"510px",width: "100%"}} id="changes-Photo"/>
                                <p className="m-b-40 change-text-size the456" style={{fontSize : "30px", fontWeight :"500" ,  textAlign: "left", marginBottom : "-40px" , padding  :"0px 40px", position : "absolute" , zIndex : "1" , top  :"40%" , left : "10%", color : "white",textAlign : "center"}}>Unmask your CastOfMind

</p> 
                            </div>
                            <div class="carrousel-item" id="carrouselimg3">
                                <img class="d-block img-cov" src={SliderPhoto[0] && SliderPhoto[0].photo3} alt="image 3" style={{height:"510px",width: "100%"}} id="changes-Photo"/>
                                <p className="m-b-40 change-text-size the456" style={{fontSize : "30px", fontWeight :"500" ,  textAlign: "left", marginBottom : "-40px" , padding  :"0px 40px", position : "absolute" , zIndex : "1" , top  :"40%" , left : "10%", color : "white",textAlign : "center"}}>Unmask your CastOfMind

</p> 
                            </div>
                            <div class="carrousel-item" id="carrouselimg4">
                                <img class="d-block img-cov" src={SliderPhoto[0] && SliderPhoto[0].photo4} alt="image 4" style={{height:"510px",width: "100%"}} id="changes-Photo"/>
                                <p className="m-b-40 change-text-size the456" style={{fontSize : "30px", fontWeight :"500" ,  textAlign: "left", marginBottom : "-40px" , padding  :"0px 40px", position : "absolute" , zIndex : "1" , top  :"40%" , left : "10%", color : "white",textAlign : "center"}}>Unmask your CastOfMind

</p> 
                            </div>
                                {/* <div class="carrousel-item" id="carrouselimg5">
                                    <img class="d-block img-cov" src={productDetail[0] && productDetail[0].Product_Image_Upload} alt="image 5" style={{height:"300px",width: "73%",margin: "auto"}}/>
                                </div> */}
                          </div>
                            <div onClick={()=>carrouselRight()} style={{position: "absolute",right: "10px",zIndex: "99",top:"50%",border: "2px solid black", padding: "0px 5px 0px 5px"}}>
                            <ArrowForwardIosIcon  style={{color : "grey", width :"19px",fontSize  :"30px"}}/>
                            </div>
                    </div>
                      </div>
                  </div>
              </section>
<br />
              <div className="categories-shop">
              <div className="container-fuild"  style={{width : "90%", margin : "auto"}}>
                <div className="row">
                {
                  MainCatogories.map((res,i)=>{
                          return (
                  // <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" onClick={()=>props.history.push("/categories/"+res.MainCategories+"/all-products")}>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" onClick={()=>props.history.push("/categories/"+res.MainCategories+"/all-products")} style={{cursor : "pointer"}}>
                    <div className="shop-cat-box">
                      <img className="img-fluid img123" src={res.photo} alt=""  />
                      <a className="btn hr-btn" style={{height : "37px",background :"rgb(78 90 85)"}} href="#">{res.MainCategories}</a>
                    </div>
                  </div>
                          )
                      })
                }
                 
                </div>
              </div>
            </div>

              <br />




              <div className="products-box">
              <div className="container" style={{width : "94%" , margin : "auto"}}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="title-all text-center">
                      <h1>NEW ARRIVALS
</h1>
                    </div>
                  </div>
                </div>
              
                <div className="row special-list" style={{height : "auto"}}>
                  {product.map((res,i)=>{
                    if(res.Price[0]){
                      return (
                        <div className="col-lg-3 col-md-6 special-grid best-seller" style={{cursor : "pointer"}}>
                      <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                        <div className="box-img-hover" >
                          <div className="type-lb">
                            {/* <p className="sale" style={{background :"rgb(78 90 85)"}}>Sale
  
                            {res.Product_Price_Discounted ?
                                                      <span> {(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % </span>
                                                      : ""
                                                  }
                            </p> */}
                          </div>
                          <img src={res.Product_Image_Upload} className="img-fluid" alt="Image" style={{maxWidth: "100%",maxHeight: "300px",objectFit: "contain"}} onClick={()=>props.history.push("/main-categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}/>
                          <div className="mask-icon"   onClick={()=>props.history.push("/main-categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}>
                            {/* <ul>
                              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                            </ul> */}
                            <a className="cart" style={{background :"rgb(78 90 85)"}}>Read more</a>
  
                          </div>
                        </div>
                        <div className="why-text">
                          <h4 onClick={()=>props.history.push("/main-categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}>{res.Product_Name}</h4>
                          {res.Size_Discounted[0] ? 
                                                                  <div style={{display : "flex",fontWeight: "600",  color : "black",fontSize:"17px"}}>
                                                                      <p  style={{color  : "black"  }}>Rs : {res.Size_Discounted[0]}</p>
                                                                      <div style={{width : "8px"}}></div>
                                                                      <p style={{color  : "red"  }}> <b><s>Rs : {res.Price[0]}</s></b>  </p>
                                                                      {/* <div style={{width : "8px"}}></div>
                                                                      <p style={{color  : "black"  }}> <b>Size : {res.Size[0]}</b>  </p> */}
                                                                      <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct([res])}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>

                                                                  </div>
                                                                  : 
                                                                  <div style={{display : "flex",fontWeight: "600",  color : "black",fontSize:"17px"}}>
                                                                  <p style={{color  : "black"  ,fontSize : "21px"}}>Rs : {res.Price[0]}</p>
                                                                    <div style={{width : "8px"}}></div>
                                                                    <p style={{color  : "black"  }}> <b>Size : {res.Size[0]}</b>  </p>
                                                                    <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct([res])}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>

                                                                </div>
          
                                                                  }    
                                                                  
                        </div>
                      </div>
                    </div>
                        )
                      }
                      else{
                        return (
                      <div className="col-lg-3 col-md-6 special-grid best-seller" style={{cursor : "pointer"}}>
                      <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                        <div className="box-img-hover" >
                          <div className="type-lb">
                            {/* <p className="sale" style={{background :"rgb(78 90 85)"}}>Sale
  
                            {res.Product_Price_Discounted ?
                                                      <span> {(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % </span>
                                                      : ""
                                                  }
                            </p> */}
                          </div>
                          <img src={res.Product_Image_Upload} className="img-fluid" alt="Image" style={{maxWidth: "100%",maxHeight: "300px",objectFit: "contain"}} onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}/>
                          <div className="mask-icon"   onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}>
                            {/* <ul>
                              <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                              <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                            </ul> */}
                            <a className="cart" style={{background :"rgb(78 90 85)"}}>Read more</a>
  
                          </div>
                        </div>
                        <div className="why-text">
                          <h4 onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}>{res.Product_Name}</h4>
                          {res.Product_Price_Discounted ? 
                              <>
                          <p style={{fontWeight: "600",  color : "black",fontSize:"19px"}}>Rs. {res.Product_Price_Discounted}
                          <span style={{marginLeft:"10px" , color : "red"   , textDecoration: "line-through"}}>Rs.{res.Product_Price}</span>
                          <span style={{color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct([res])}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
                              </>
  
                              :
                              <p style={{fontWeight: "600",  color : "black",fontSize:"19px"}}>Rs. {res.Product_Price}
                          <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct([res])}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
  
                          }
                        </div>
                      </div>
                    </div>
                    )
                      }
                    
                  })


                  }
              
                </div>
              </div>
            </div>













 {/*     <center>

 <section className="bg0 p-t-0">
          <div className="container">
            <div className="p-b-10">
              <h2  style={{color : "black",fontWeight : "bold"}}>

              Best Sellers
              </h2>
            </div>
            
           
            <div className="row isotope-grid">
               {product.map((res,i)=>{
                if(res.Price[0]){
                  return (
                    <div className="col-sm-6 col-md-4 col3 p-b-35 isotope-item women" style={{padding :  "10px 30px"}}>
                    <div className="block2">
                      <div className="block2-pic hov-img0">
                      <Link  to={"/main-categories/"+res.Product_Catagories+"/product/"+res._id+"/"+res.Product_Name} ><img src={res.Product_Image_Upload} alt="IMG-PRODUCT"  style={{height : "300px", objectFit  :"cover",height: "fitContent"}}/></Link>
                        <Link to={"/main-categories/"+res.Product_Catagories+"/product/"+res._id+"/"+res.Product_Name} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                          Quick View
                        </Link>
                      </div>
                      <div className="block2-txt flex-w flex-t p-t-14" style={{padding :  "10px 13px"}}>
                        <div className="block2-txt-child1 flex-col-l ">
                          <Link to={"/main-categories/"+res.Product_Catagories+"/"+"product/"+res._id+"/"+res.Product_Name} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                          <b>{
                              res.Product_Name
                            }
                              </b>                       </Link>
    
    
    
                          <span className="stext-105 cl3">
                              <i>
                                 {res.Size_Discounted[0] ? 
                                                            <div style={{display : "flex",justifyContent : 'center',fontSize : "19px"}}>
                                                                <p  style={{color  : "black"  }}>Rs : {res.Size_Discounted[0]}</p>
                                                                <div style={{width : "8px"}}></div>
                                                                <p style={{color  : "grey"  }}> <b><s>Rs : {res.Price[0]}</s></b>  </p>
                                                                <div style={{width : "8px"}}></div>
                                                                <p style={{color  : "black"  }}> <b>Size : {res.Size[0]}</b>  </p>
                                                            </div>
                                                            : 
                                                            <div style={{display : "flex",justifyContent : 'center',fontSize : "19px"}}>
                                                            <p style={{color  : "black"  ,fontSize : "21px"}}>Rs : {res.Price[0]}</p>
                                                              <div style={{width : "8px"}}></div>
                                                              <p style={{color  : "black"  }}> <b>Size : {res.Size[0]}</b>  </p>
                                                          </div>
    
                                                            }    
                              </i>
                          
    
                                                                                  </span>
                        </div>
                       <div className="block2-txt-child2 flex-r p-t-3">
                          <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                          <i className="zmdi zmdi-shopping-cart dis-block trans-04"  style={{fontSize : "24px",color:"black" ,background :"rgb(238, 238, 238)",padding: "10px 13px 10px 12px",borderRadius: "39px"}}  onClick={() =>res.Product_Catagories !==  "Custom Products" ? addtocartproduct([res]) : addtocartproduct12([res])  }/>
    
                           
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                    )
                  }else{
                    if(res.Product_Name === "Executive Black Metal Hybrid Card "                    ){
                      return (
                      <div className="col-sm-6 col-md-4 col-lg-4 p-b-35 isotope-item women" style={{padding :  "10px 30px"}}>
                      <div className="block2">
                        <div className="block2-pic hov-img0">
                        <Link  to={"/main-category/"+res.Product_Catagories+"/product/"+res._id+"/"+res.Product_Name} ><img src={res.Product_Image_Upload} alt="IMG-PRODUCT"  style={{height : "300px", objectFit  :"cover",height: "fitContent"}}/></Link>
                          <Link to={"/main-category/"+res.Product_Catagories+"/product/"+res._id+"/"+res.Product_Name} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            Quick View
                          </Link>
                        </div>
                        <div className="block2-txt flex-w flex-t p-t-14" style={{padding :  "10px 13px"}}>
                          <div className="block2-txt-child1 flex-col-l ">
                            <Link to={"/main-category/"+res.Product_Catagories+"/"+"product/"+res._id+"/"+res.Product_Name} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                            <b>{
                                res.Product_Name
                              }
                                </b>                       </Link>
      
      
      
                            <span className="stext-105 cl3">
                                <i>
                                   {res.Product_Price_Discounted ? 
                                                              <div style={{display : "flex",justifyContent : 'center',fontSize : "21px"}}>
                                                                  <p  style={{color  : "black"  }}>Rs : {res.Product_Price_Discounted}</p>
                                                                  <div style={{width : "10px"}}></div>
                                                                  <p style={{color  : "grey"  }}> <b><s>Rs : {res.Product_Price}</s></b>  </p>
                                                              </div>
                                                              : 
                                                              <p style={{color  : "black"  ,fontSize : "21px"}}>Rs : {res.Product_Price}</p>
      
                                                              }    
                                </i>
                            
      
                                                                                    </span>
                          </div>
                         <div className="block2-txt-child2 flex-r p-t-3">
                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                            <i className="zmdi zmdi-shopping-cart dis-block trans-04"  style={{fontSize : "24px",color:"black" ,background :"rgb(238, 238, 238)",padding: "10px 13px 10px 12px",borderRadius: "39px"}}  onClick={() =>res.Product_Catagories !==  "Custom Products" ? addtocartproduct([res]) : addtocartproduct12([res])  }/>
      
                             
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> 
                      )
                    }
                    else{
                      return (
                        <div className="col-sm-6 col-md-4 col-lg-4 p-b-35 isotope-item women" style={{padding :  "10px 30px"}}>
                        <div className="block2">
                          <div className="block2-pic hov-img0">
                          <Link  to={"/categories/"+res.Product_Catagories+"/product/"+res._id+"/"+res.Product_Name} ><img src={res.Product_Image_Upload} alt="IMG-PRODUCT"  style={{height : "300px", objectFit  :"cover",height: "fitContent"}}/></Link>
                            <Link to={"/categories/"+res.Product_Catagories+"/product/"+res._id+"/"+res.Product_Name} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                              Quick View
                            </Link>
                          </div>
                          <div className="block2-txt flex-w flex-t p-t-14" style={{padding :  "10px 13px"}}>
                            <div className="block2-txt-child1 flex-col-l ">
                              <Link to={"/categories/"+res.Product_Catagories+"/"+"product/"+res._id+"/"+res.Product_Name} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                              <b>{
                                  res.Product_Name
                                }
                                  </b>                       </Link>
        
        
        
                              <span className="stext-105 cl3">
                                  <i>
                                     {res.Product_Price_Discounted ? 
                                                                <div style={{display : "flex",justifyContent : 'center',fontSize : "21px"}}>
                                                                    <p  style={{color  : "black"  }}>Rs : {res.Product_Price_Discounted}</p>
                                                                    <div style={{width : "10px"}}></div>
                                                                    <p style={{color  : "grey"  }}> <b><s>Rs : {res.Product_Price}</s></b>  </p>
                                                                </div>
                                                                : 
                                                                <p style={{color  : "black"  ,fontSize : "21px"}}>Rs : {res.Product_Price}</p>
        
                                                                }    
                                  </i>
                              
        
                                                                                      </span>
                            </div>
                           <div className="block2-txt-child2 flex-r p-t-3">
                              <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                              <i className="zmdi zmdi-shopping-cart dis-block trans-04"  style={{fontSize : "24px",color:"black" ,background :"rgb(238, 238, 238)",padding: "10px 13px 10px 12px",borderRadius: "39px"}}  onClick={() =>res.Product_Catagories !==  "Custom Products" ? addtocartproduct([res]) : addtocartproduct12([res])  }/>
        
                                
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> 
                        )
                    }
                    
                    
                }
                
            })
          
          }
             
            </div>

          </div>
        </section>
      </center>
      <center>

<div className="p-b-4 trans-05" style={{ background: "black",width   :"200px",padding: "15px 10px",borderRadius: "20px", marginBottom : "30px"}}>
<div className="stext-101 cl0 trans-09">
<Link to={"/all-shop"} style={{color : "white"}}>See All Products  </Link>
</div>
</div>
</center>



 */}




            {/* <Carousel>
              
                        <Carousel.Item interval={3000}>
                                <img src={SliderPhoto[0] && SliderPhoto[0].photo1} alt="" className='efeeee'/>

                                  <Carousel.Caption>
                                  <div className="container ther"  style={{top : "-420px", position : "absolute"}}>
                                            <div className="row">
                                             
                                            </div>
                                          </div>
                                  </Carousel.Caption>
                                </Carousel.Item>
                        <Carousel.Item interval={3000}>
                                <img src={SliderPhoto[0] && SliderPhoto[0].photo2} alt="" className='efeeee'/>

                                  <Carousel.Caption>
                                  <div className="container ther"  style={{top : "-420px", position : "absolute"}}>
                                            <div className="row">
                                         
                                            </div>
                                          </div>
                                  </Carousel.Caption>
                                </Carousel.Item>
                        <Carousel.Item interval={3000}>
                                <img src={SliderPhoto[0] && SliderPhoto[0].photo3} alt="" className='efeeee'/>

                                  <Carousel.Caption>
                                  <div className="container ther"  style={{top : "-420px", position : "absolute"}}>
                                            <div className="row">
                                         
                                            </div>
                                          </div>
                                  </Carousel.Caption>
                                </Carousel.Item>
                        <Carousel.Item interval={3000}>
                                <img src={SliderPhoto[0] && SliderPhoto[0].photo4} alt="" className='efeeee'/>

                                  <Carousel.Caption>
                                  <div className="container ther"  style={{top : "-420px", position : "absolute"}}>
                                            <div className="row">
                                              
                                            </div>
                                          </div>
                                  </Carousel.Caption>
                                </Carousel.Item>
                     
       
      </Carousel> */}
            {/* <div id="slides-shop" className="cover-slides ther4" style={{maxHeight : "700px"}} >
              <ul className="slides-container ther4"  style={{maxHeight : "700px"}}  >
                <li className="text-center">
                  <img src={ban1} alt=""  style={{maxHeight : "700px", width : "100%"}}  className='ther3 ther4'/>
                  <div className="container ther"  style={{top : "-650px", position : "relative"}}>
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="ther1 m-b-20"><strong>Welcome To <br /> Freshshop</strong></h1>
                        <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                        <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                      </div>
                    </div>
                  </div>
                </li>
                 <li className="text-center">
                <img src={ban2} alt="" />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="m-b-20"><strong>Welcome To <br /> Freshshop</strong></h1>
                        <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                        <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="text-center">
                <img src={ban3} alt="" />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="m-b-20"><strong>Welcome To <br /> Freshshop</strong></h1>
                        <p className="m-b-40">See how your users experience your website in realtime or view <br /> trends to see any changes in performance over time.</p>
                        <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                      </div>
                    </div>
                  </div>
                </li> 
              </ul>
              <div className="slides-navigation">
                <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true" /></a>
                <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true" /></a>
              </div>
            </div> */}
            {/* End Slider */}
            {/* Start Categories  */}
            {/* <div className="categories-shop">
              <div className="container-fuild"  style={{width : "90%", margin : "auto"}}>
                <div className="row">
                {
                  MainCatogories.map((res,i)=>{
                          return (
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" onClick={()=>props.history.push("/categories/"+res.MainCategories)}>
                    <div className="shop-cat-box">
                      <img className="img-fluid img123" src={res.photo} alt=""  />
                      <a className="btn hr-btn" style={{height : "37px",background :"rgb(175, 220, 200)"}} href="#">{res.MainCategories}</a>
                    </div>
                  </div>
                          )
                      })
                }
                 
                </div>
              </div>
            </div> */}
            {/* End Categories */}















            {/* <div className="box-add-products">
              <div className="container-fuild">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid dfkj" src={add5} alt="" style={{    minWidth: "100%"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-add-products">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid dfkj1" src={add6} alt="" style={{    minWidth: "100%",objectFit: "cover"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
















            {/* <div className="box-add-products">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid" src={add1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid" src={add2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Start Products  */}
            

            <div className="site-section site-section-sm site-blocks-1 backk" >
                    <div className="container-fuild" style={{width : "90%" , margin : "auto"}}>
                        <div className="row">
                            <div className="col-md-6 col-lg-3 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="" style={{cursor : "pointer"}}>
                                <div className="icon mr-4 align-self-start">
                                    {/* <span className="icon-truck"></span> */}
                                    <span><AirportShuttleIcon  className="icon-truck" style={{fontSize : "65px", color : "rgb(78 90 85)"}}/></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase" style={{color :  "black"}}>FAST SHIPPING
</h2>
                                    <p>On All Orders

</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100" style={{cursor : "pointer"}}>
                                <div className="icon mr-4 align-self-start">
                                    {/* <span className="icon-refresh2"></span> */}
                                    <span><ReplayIcon    style={{fontSize : "65px", color : "rgb(78 90 85)"}}  /></span>
                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase" style={{color :  "black"}}>EASY RETURNS</h2>
                                    <p>Return Policy

</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200"style={{cursor : "pointer"}}>
                                <div className="icon mr-4 align-self-start">
                                    {/* <span className="icon-help"></span> */}
                                    <span><PaymentIcon    style={{fontSize : "65px", color : "rgb(78 90 85)"}}  /></span>

                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase" style={{color :  "black"}}>SECURE PAYMENT</h2>
                                    <p>100% Secure Payment

</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200" onClick={()=>props.history.push("/contact")} style={{cursor : "pointer"}}>
                                <div className="icon mr-4 align-self-start">
                                    {/* <span className="icon-help"></span> */}
                                    <span><ContactSupportIcon    style={{fontSize : "65px", color : "rgb(78 90 85)"}}  /></span>

                                </div>
                                <div className="text">
                                    <h2 className="text-uppercase" style={{color :  "black",cursor : "pointer"}}>24/7 SUPPORT</h2>
                                    <p>Dedicated Support

</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
              
                
      <div className="imgslider" style={{width: "85%",
    margin: "auto",
}}>
        <Slider {...settings}>
          {companieswith.map((item,i) => (
            <div key={i}>
              {/* if(i === 0){
                <>
                <a href="djklljk" style={{cursor:"pointer"}}>
                <img src={item.photo}  alt="jk" />
                 </a>
                </>
                

              } */}
              <img src={item.photo}  alt="jk" />
            </div>
          ))}
        </Slider>
      </div>
                {/* <div className="site-section" style={{padding : "20px 0px",margin : "10px 0px"}}>
                    <div className="container">
                          <div className="p-b-10">
                    <h2  style={{color : "black",fontWeight : "bold"}}>

                      <center>
                      Frequently Asked Questions

                      </center>
                    </h2>
                  </div>
                        <div className="row">
                            
                                {data.map((res2,a)=>{
                                    return (
                                        <div style={{width : "100%"}}>
                                            <div className="border p-3 mb-3"  style={{margin : "0px 14px"}}>
                                            <div style={{display : "flex"}} onClick={()=>setChangerItemSize(a)}  href={"#collapsebank"+a} aria-controls={"collapsebank"+a}  data-toggle="collapse" >

<KeyboardArrowDownIcon style={{color : "black" ,marginRight: "20px",marginTop: "-4px"}} id={"changeIcon1"+a} href={"#collapsebank"+a} aria-controls={"collapsebank"+a}  data-toggle="collapse"   />   <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href={"#collapsebank"+a} role="button" aria-expanded="false" aria-controls={"collapsebank"+a} style={{color : "black"}}> 
{res2.main}</a></h3>
        </div>
                                        <div className="collapse" id={"collapsebank"+a}>
                                            <div className="py-2">
                                                <p className="mb-0">{

                                                    res2.text.split("\n").map((res4)=>{
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
          </div>
          </div>
          </div> */}
                                       


            {/* <div className="box-add-products">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid" src={add1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid" src={add2} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="box-add-products">
              <div className="container-fuild">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid dfkj" src={add3} alt="" style={{    minWidth: "100%"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-add-products">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="offer-box-products">
                      <img className="img-fluid dfkj1" src={add4} alt="" style={{    minWidth: "100%",objectFit: "cover"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}










            {/* Start Blog  */}
            {/* <div className="latest-blog">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="title-all text-center">
                      <h1>latest blog</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                      <div className="blog-img">
                        <img className="img-fluid" src="images/blog-img.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <div className="title-blog">
                          <h3>Fusce in augue non nisi fringilla</h3>
                          <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                        </div>
                        <ul className="option-blog">
                          <li><a href="#"><i className="far fa-heart" /></a></li>
                          <li><a href="#"><i className="fas fa-eye" /></a></li>
                          <li><a href="#"><i className="far fa-comments" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                      <div className="blog-img">
                        <img className="img-fluid" src="images/blog-img-01.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <div className="title-blog">
                          <h3>Fusce in augue non nisi fringilla</h3>
                          <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                        </div>
                        <ul className="option-blog">
                          <li><a href="#"><i className="far fa-heart" /></a></li>
                          <li><a href="#"><i className="fas fa-eye" /></a></li>
                          <li><a href="#"><i className="far fa-comments" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                      <div className="blog-img">
                        <img className="img-fluid" src="images/blog-img-02.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <div className="title-blog">
                          <h3>Fusce in augue non nisi fringilla</h3>
                          <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                        </div>
                        <ul className="option-blog">
                          <li><a href="#"><i className="far fa-heart" /></a></li>
                          <li><a href="#"><i className="fas fa-eye" /></a></li>
                          <li><a href="#"><i className="far fa-comments" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* End Blog  */}
            {/* Start Instagram Feed  */}
            
            {/* End Instagram Feed  */}
            {/* Start Footer  */}
            
            {/* End copyright  */}
            <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>↑</a>
          </div>
        )
    
}

export default Home;