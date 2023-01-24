import React, { useEffect , useState } from 'react';
import swal from 'sweetalert';
// import cloth_1 from '../assets/images/cloth_1.jpg';
// import shoe_1 from '../assets/images/shoe_1.jpg';
// import cloth_2 from '../assets/images/cloth_2.jpg';
// import cloth_3 from '../assets/images/cloth_3.jpg';
// import Ban1 from "../assets/images/banner1.jpg"
// import Ban2 from "../assets/images/banner2.jpg"
// import Ban3 from "../assets/images/banner3.jpg"
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Swal from 'sweetalert2'

import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
// import "./../assets/css/main.css"
// import "./../assets/css/util.css"

// import "./../assets/vendor/css-hamburgers/hamburgers.min.css"

// import "./../assets/fonts/iconic/css/material-design-iconic-font.min.css"
// import "./../assets/vendor/bootstrap/css/bootstrap.min.css"
// import "./../assets/vendor/select2/select2.min.css"
// import "./../assets/vendor/slick/slick.css"
// import "./../assets/vendor/perfect-scrollbar/perfect-scrollbar.css"

// import videologo fro
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Button } from '@material-ui/core';
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


export function SubCategoriesProductDetails(props) {
    const [productDetail , setproductDetail] = useState([])
    const [Price , setPrice] = useState(1)
    const [DataPart2 , setDataPart2] = useState([])
    const [allproduct , setallproduct] = useState([])
    const [allproductReview , setallproductReview] = useState([])
    const [Average , setAverage] = useState(0)


    const [Area1 , setArea1] = useState(true)
    const [Area2 , setArea2] = useState(false)
    const [Area3 , setArea3] = useState(false)

    const [dd1 , setdd1] = useState(true)
    const [dd2 , setdd2] = useState(false)
    

    const [dis , setdis] = useState(false)



    const [NowAvailable , setNowAvailable] = useState([])
    const [bestSeller1 , setbestSeller1] = useState([])
    const [product , setproduct] = useState([])
    const [MainCatogories , setMainCatogories] = useState([])
    const [DataPart21 , setDataPart21] = useState([])
    const [bestkeybaad , setbestkeybaad] = useState([])
    const [youtube123 , setyoutube123] = useState({})
    const [companieswith , setcompanieswith] = useState([])
    // const [fg1 , setfg1] = useState(true)
    // const [fvalue1 , setfvalue1] = useState([])
    // const [data1, setdata1] = useState([]) 



    const [Changer6711 , setChanger671] = useState(true)
    const [Changer6721 , setChanger672] = useState(false)
    const [Changer6731 , setChanger673] = useState(false)











    const [Star1 , setStar1] = useState(0)
    const [Star2 , setStar2] = useState(0)
    const [Star3 , setStar3] = useState(0)
    const [Detail, setDetail] = useState("") 

    
    
    const [Changer , setChanger] = useState(0)
    
    
    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [subject, setsubject] = useState("") 
    const [Message, setMessage] = useState("") 
    
    const [CategoriesName , setCategoriesName] = useState({})
    const [data, setdata] = useState([]) 
    
    const [fg , setfg] = useState(true)
    const [fvalue , setfvalue] = useState([])






    useEffect(() =>{
        window.scrollTo(0, 0)
        carrouselInit();

        let Categoriesname = props.match.params ;
        setCategoriesName(Categoriesname)

        fetch("https://d-luxe-housebackend.vercel.app/AllProduct1/"+Categoriesname.productId,{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     }
    })
    .then(res=>res.json())
    .then(res1=>{
        console.log(res1)
        setproductDetail(res1)
        // console.log(res1.Product_Long_Notes.replace("\n","<br>"));
        setDetail(res1[0].Product_Long_Notes)
        // console.log(res1[0].Product_Long_Notes,Detail,"jk");
    })
    fetch("https://d-luxe-housebackend.vercel.app/AllProduct",{
      method: "GET",
       headers :  {
       "Content-Type" : "application/json" , 
   }
  })
  .then(res5=>res5.json())
  .then(res6=>{
      console.log(res6);
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
   setproduct(pro.slice(0,4))
   setdis(true)
  })
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
  fetch("https://d-luxe-housebackend.vercel.app/NowAvailable1",{
      method: "GET",
       headers :  {
       "Content-Type" : "application/json" , 
   } ,
  })
  .then(res9=>res9.json())
  .then(res11=>{
      console.log(res11);
      setNowAvailable(res11)
  
  })
  fetch("https://d-luxe-housebackend.vercel.app/youtube123",{
      method: "GET",
       headers :  {
       "Content-Type" : "application/json" , 
   } ,
  })
  .then(res99=>res99.json())
  .then(res191=>{
      console.log(res191);
      setyoutube123(res191[0])
  
  })
  fetch("https://d-luxe-housebackend.vercel.app/bestSeller1",{
      method: "GET",
       headers :  {
       "Content-Type" : "application/json" , 
   } ,
  })
  .then(res9=>res9.json())
  .then(res11=>{
      console.log(res11[0]);
      setbestSeller1(res11)
  
  })
  fetch("https://d-luxe-housebackend.vercel.app/bestkeybaad",{
      method: "GET",
       headers :  {
       "Content-Type" : "application/json" , 
   } ,
  })
  .then(res9=>res9.json())
  .then(res11=>{
      console.log(res11[0]);
      setbestkeybaad(res11)
  
  })
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

  // fetch("https://d-luxe-housebackend.vercel.app/BannerPhoto",{
  //     method: "GET",
  //      headers :  {
  //      "Content-Type" : "application/json" , 
  //  } ,
  // })
  // .then(res22=>res22.json())
  // .then(res222=>{
  //     console.log(res222[0]);
  //     setBannerPhoto(res222)
  
  // })

  // fetch("https://d-luxe-housebackend.vercel.app/arrival-photo",{
  //     method: "GET",
  //      headers :  {
  //      "Content-Type" : "application/json" , 
  //  } ,
  // })
  // .then(res2=>res2.json())
  // .then(res3=>{
  //     console.log(res3);
  //     setArrivalPhoto(res3)
  
  // })
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
    fetch("https://d-luxe-housebackend.vercel.app/allReview",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     }
    })
    .then(res3=>res3.json())
    .then(res4=>{
        console.log(res4) 
            var q = 0
            var v = 0
            var p = 0
            var qan = 0
        res4.map((res5)=>{
            // console.log(res5)
           
            if(res5.productId === Categoriesname.productId &&res5.ReviewApproval){
                // console.log(res5.quality,+res5.value,res5.price);
               
                v = res5.value + v
                q =res5.quality + q
                p = res5.price + p
                qan = 15 + qan
            } 
        }) 
                // setq(q)
                // setv(v)
                // setp(p)
                // setqan(qan)
        // const data1 = res4.filter((res5)=>{
        //     return res5.productId === Categoriesname.productId
        // })
        // var q = 0
        // var v = 0
        // var p = 0
        // var qan = 0
        let data2 = res4.filter((res5)=>{
            // q =+ res5.quality
            // v =+ res5.value
            // p =+ res5.price
            // qan =+ 5
            return res5.productId === Categoriesname.productId && res5.ReviewApproval
        })
        
        let total = q+p+v
        console.log(total,q,v,p,qan,"total");
        if((total*100)/qan >= 80){
            document.getElementById("star1").style.color = "rgb(251, 122, 51)"
            document.getElementById("star2").style.color = "rgb(251, 122, 51)"
            document.getElementById("star3").style.color = "rgb(251, 122, 51)"
            document.getElementById("star4").style.color = "rgb(251, 122, 51)"
            document.getElementById("star5").style.color = "rgb(251, 122, 51)"
        }
        else if((total*100)/qan >= 60){
            document.getElementById("star1").style.color = "rgb(251, 122, 51)"
            document.getElementById("star2").style.color = "rgb(251, 122, 51)"
            document.getElementById("star3").style.color = "rgb(251, 122, 51)"
            document.getElementById("star4").style.color = "rgb(251, 122, 51)"
            
        }
        else if((total*100)/qan >= 40){
            document.getElementById("star1").style.color = "rgb(251, 122, 51)"
            document.getElementById("star2").style.color = "rgb(251, 122, 51)"
            document.getElementById("star3").style.color = "rgb(251, 122, 51)"

            
        }
        else if((total*100)/qan >= 20){
            document.getElementById("star1").style.color = "rgb(251, 122, 51)"
            document.getElementById("star2").style.color = "rgb(251, 122, 51)"

            
        }
        else{
            document.getElementById("star1").style.color = "rgb(251, 122, 51)"

        }
        
        
        
        // setAverage((total*100)/qan)
        setallproductReview(data2)
    })
      var data1 =  JSON.parse(localStorage.getItem("Cart")) 
       if (data1) setDataPart2(data1)

    //   const Inte = setInterval(()=>{
    //         fetch("/AllProduct",{
    //     method: "GET",
    //      headers :  {
    //      "Content-Type" : "application/json" , 
    //  }
    // })
    // .then(res5=>res5.json())
    // .then(res6=>{
    //     // console.log(res6);
    //     const vc = []
    //  res6.map((res7,i)=>{
    //         console.log( res7.Product_Catagories , productDetail.Product_Catagories , res7._id , productDetail._id);
    //      if ( res7.Product_Catagories === data.Product_Catagories && res7._id !== data._id) {
    //          //    console.log(res7);
    //          //         // return setproduct1(...product1 , res3)
    //          vc.push(res7)
    //         //  return  res7
    //         }
    //     })
    //     console.log(vc);
        
    //     if(vc.length >= 1 && vc.length < 5){
    //        console.log("yes");
    //     res6.map((res7,i)=>{
    //         // console.log( res7.Product_Catagories , data.Product_Catagories , res7._id , data._id);
    //      if ( res7._id !== data._id) {

    //          vc.push(res7)
    //         }
    //     })
    //     let db = vc.slice(0,7)
    //     setallproduct(db) 
    //     }

    //     else if (vc.length >= 1 ){
    //        console.log("yes");
    //        let db = vc.slice(0,7)
    //        console.log(db);
    //     setallproduct(db)
    //     }

    //     else{
    //         const vb = []
    //         res6.map((res7,i)=>{
    //             if ( i+1 % 4 === 0) {
                    
    //                 vb.push(res7)

    //                }
    //            })
    //            let db = vb.slice(0,7)
    //            console.log(db);
    //             setallproduct(db)
    //     }
 
    //     console.log(allproduct);
    // })
    //    },1000)
    //    return () => clearInterval(Inte);

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
    // swal("Update!", "Your Item Add in Cart!", "success");
  
    // if(productDetail){
        // console.log(typeof(productDetail[0].ProductCreater), typeof("60a3c644e4520a12c80a6f52"));
        Swal.fire({
          title: 'Your Item Add in Cart!',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Coutinue Shopping',
          denyButtonText: `View Cart`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            // Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            props.history.push("/cart")
            // Swal.fire('Changes are not saved', '', 'info')
          }
        })
  
  
        if (productDetail[0].Product_Price_Discounted === null){
            const data =  {...productDetail[0] ,
                Percentage : 0,
                DeliveryStatus : "Pending",
                Pieces : Price ,
                Total_Product_Price  : productDetail[0].Product_Price * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id ){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
            return {...item,
                Pieces : Price + item.Pieces,
                Total_Product_Price  : (productDetail[0].Product_Price * Price )+ item.Total_Product_Price}
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
                Pieces : Price ,
                Total_Product_Price  : productDetail[0].Product_Price_Discounted * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id ){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
            return {...item,
                Pieces : Price + item.Pieces,
                Total_Product_Price  : (productDetail[0].Product_Price_Discounted * Price )+ item.Total_Product_Price}
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
                        Pieces : Price ,
                        Size : productDetail[0].Size[Changer],
                        Product_Price_Discounted : productDetail[0].Size_Discounted[Changer],
                        Total_Product_Price  : productDetail[0].Size_Discounted[Changer] * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id &&  item.Size === productDetail[0].Size[Changer]){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces : Price + item.Pieces,
                    Total_Product_Price  : (productDetail[0].Size_Discounted[Changer] * Price )+ item.Total_Product_Price}
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
                        Pieces : Price ,
                        Size : productDetail[0].Size[Changer],
                        Product_Price_Discounted : productDetail[0].Price[Changer],
                        Total_Product_Price  : productDetail[0].Price[Changer] * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id &&  item.Size === productDetail[0].Size[Changer]){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces : Price + item.Pieces,
                    Total_Product_Price  : (productDetail[0].Price[Changer] * Price )+ item.Total_Product_Price}
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

  const addtocartproduct123 = () =>{
    swal("Update!", "Your Item Add in Cart!", "success");
  
    // if(productDetail){
        // console.log(typeof(productDetail[0].ProductCreater), typeof("60a3c644e4520a12c80a6f52"));
        
  
  
      
        if (productDetail[0].Product_Price_Discounted === null){
            const data =  {...productDetail[0] ,
                Percentage : 0,
                DeliveryStatus : "Pending",
                Pieces : Price ,
                Total_Product_Price  : productDetail[0].Product_Price * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id ){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
            return {...item,
                Pieces : Price + item.Pieces,
                Total_Product_Price  : (productDetail[0].Product_Price * Price )+ item.Total_Product_Price}
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
                Pieces : Price ,
                Total_Product_Price  : productDetail[0].Product_Price_Discounted * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id ){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
            return {...item,
                Pieces : Price + item.Pieces,
                Total_Product_Price  : (productDetail[0].Product_Price_Discounted * Price )+ item.Total_Product_Price}
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
                        Pieces : Price ,
                        Size : productDetail[0].Size[Changer],
                        Product_Price_Discounted : productDetail[0].Size_Discounted[Changer],
                        Total_Product_Price  : productDetail[0].Size_Discounted[Changer] * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id &&  item.Size === productDetail[0].Size[Changer]){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces : Price + item.Pieces,
                    Total_Product_Price  : (productDetail[0].Size_Discounted[Changer] * Price )+ item.Total_Product_Price}
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
                        Pieces : Price ,
                        Size : productDetail[0].Size[Changer],
                        Product_Price_Discounted : productDetail[0].Price[Changer],
                        Total_Product_Price  : productDetail[0].Price[Changer] * Price }
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id &&  item.Size === productDetail[0].Size[Changer]){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces : Price + item.Pieces,
                    Total_Product_Price  : (productDetail[0].Price[Changer] * Price )+ item.Total_Product_Price}
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
          
            props.history.push("/cart")
    
                
}
  
// const savethedetailproduct = (data) =>{
//     localStorage.setItem("Data" , JSON.stringify(data) )
//     console.log(data);
//  }

const  changePhoto = (e)=>{
    document.getElementById("changes-Photo").src = e
}

// const change_detail_area = (e)=>{
//     if (e === 1){
//         setArea1(true)
//         setArea2(false)
//         setArea3(false)
//     }
//     else if (e === 2){
//         setArea1(false)
//         setArea2(true)
//         setArea3(false)
//     }
//     else if (e === 3){
//         setArea1(false)
//         setArea2(false)
//         setArea3(true)
//     }
// }

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
const changePrice = (e)=>{
    setChanger(e)
    // console.log("sdcefelwjfklj");
    // if(document.getElementById("PriceChanger")){
        if(productDetail[0].Size_Discounted[0]){
              document.getElementById("PriceChanger2").innerHTML ="Rs : "+ productDetail[0].Price[e]
        // document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
        // document.getElementById("PriceChanger3").innerHTML =(100 -(productDetail[0].Size_Discounted[e] *100) /  productDetail[0].Price[e]).toFixed(0) +" % off"
        document.getElementById("PriceChanger4").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
    }
    else{
        document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Price[e]
    }
      
        // "Rs : "+ productDetail[0].Size_Discounted[e]
        // let Price = productDetail[0].Price[e]
        // de.innerHTML = Price
    // }

}

const setReviewChange = ()=>{
    // setChanger(e)
    setArea1(false)
    setArea2(false)
    setArea3(true)
        // document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Price[e]
  

}


const submitUserReview = (e)=>{
    e.preventDefault()
    fetch("https://d-luxe-housebackend.vercel.app/createReview",{
        method: "POST",
        headers :  {
            "Content-Type" : "application/json" , 
        } ,
        body : JSON.stringify({
            user:name,
            summary:subject ,
            review_message:Message ,
            quality:Star1 ,
            value:Star2 ,
            price:Star3 ,
            productId:CategoriesName.productId
        }),
    })  
    .then(res=>res.json())
    .then((res2)=>{        
    if(res2.Error){
        swal(res2.Error);
     }
     else{
        swal("Successfully Submit your Review!");
        setsubject("")
        setStar1("")
        setStar2("")
        setStar3("")
        setMessage("")
        setname("")
     }
    })
       
}
// const changePrice1 = (e)=>{
//     setChanger(e)
//     // console.log("sdcefelwjfklj");
//     // if(document.getElementById("PriceChanger")){
//         document.getElementById("PriceChanger2").innerHTML ="Rs : "+ productDetail[0].Price[e]
//         // document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
//         document.getElementById("PriceChanger3").innerHTML =(100 -(productDetail[0].Size_Discounted[e] *100) /  productDetail[0].Price[e]).toFixed(0) +" % off"
//         document.getElementById("PriceChanger4").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
//         // "Rs : "+ productDetail[0].Size_Discounted[e]
//         // let Price = productDetail[0].Price[e]
//         // de.innerHTML = Price
//     // }

// }
// const setShoesSize = (e)=>{
//     document.getElementById("myDiv1234").style.display= "block"
//     let  m = document.getElementById("myDiv23456")
//     m.src = e
// }
// const setMainPhoto = (e)=>{
//     console.log(e);
//     document.getElementById("mainphoto").style.display= "block"
//     let  m = document.getElementById("mainphoto2")
//     m.src = e
// }

// const setChanger1 = (e)=>{
//     document.getElementById("myDiv1234").style.display= "none"
// }
// const setChanger2 = (e)=>{
//     document.getElementById("mainphoto").style.display= "none"
// }

const setChanger6711 = ()=>{
  setChanger671(true)
  setChanger672(false)
  setChanger673(false)
  
}
const setChanger6721 = ()=>{
  setChanger672(true)
  setChanger671(false)
  setChanger673(false)
  
}
const setChanger6731 = ()=>{
  setChanger673(true)
  setChanger672(false)
  setChanger671(false)
  
}

 
        
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
  // setInterval(carrouselAutoChange, 5000);

}

const carrouselAutoChange=()  =>{
  carrouselRight();
}



const carrouselChange=(i) => {

  var carrousel = document.getElementById("carrouselimg" + i);
  carrousel.style.opacity = "1";

}


const carrouselLeft=()  =>{
    
    let nbCarrousel = 6;
    let num = 0;
  
    for (let i = 0; i < nbCarrousel; i++) {
        num = i + 1;
        var carrousel = document.getElementById("carrouselimg" + num);
        if (carrousel.style.opacity == "1") {
            carrousel.style.opacity = "0";
            if (i == 0) {
                return carrouselChange(5);
            }
            return carrouselChange(num - 1);
        }
    }
  }
  
  const carrouselRight=() =>{
  
    let nbCarrousel = 6;
    let num = 0;
  
    for (let i = 0; i < nbCarrousel; i++) {
        num = i + 1;
        var carrousel = document.getElementById("carrouselimg" + num);
        if (carrousel.style.opacity == "1") {
            carrousel.style.opacity = "0";
            if (i == 5) {
                return carrouselChange(1);
            }
            return carrouselChange(num + 1);
        }
    }
  }
    return (
        <>  
                     {/* <a href="https://wa.me/923302757197" target="_blank"><img src={whatapps} alt=""style={{position : "fixed" ,zIndex : "999999", top : "80%" , right : "20px",width:"70px",height : "70px"}}/></a> */}

        {/* <br /><br /><br /> */}
        <div>
        {/* breadcrumb */}
        {/* <div className="container mi2" style={{padding : "50px 0px 0px 0px"}}>
          <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <Link to="/" className="stext-109 cl8 hov-cl1 trans-04">
              Home
              <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
            </Link>
            <a href="" className="stext-109 cl8 hov-cl1 trans-04">
              {CategoriesName.categoriesName}
              <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
            </a>
            <span className="stext-109 cl4">
              {CategoriesName.productname}
            </span>
          </div>
        </div> */}


                                <div className="shop-detail-box-main">
                                    <div className="container">
                                            <div className="row">
                                                <div className="col-md-8 col-lg-6">
                                                    <div className="container-fuild">
                                                        <div className="col-xl-12 col-lg-12 col-md-12" style={{width : "100%", margin  : "0px",padding: "0px"}} >
                                                            


                                                        <section>
                                                                          <div className="container-fuild container-photo-detail" style={{height :  "auto"}}>
                                                                              <div className="col-xl-12 col-lg-12 col-md-12 dfkjdf" style={{width : "107%", margin  : "auto",padding: "0px",height : "300px"}} >
                                                                                          
                                                                                          
                                                                                          
                                                                                                    <div class="center">
                                                                                    <div onClick={()=>carrouselLeft()}  style={{position: "absolute",left: "10px",zIndex: "8"}}>
                                                                                      <KeyboardArrowLeftIcon  style={{color : "grey", width :"30px",fontSize  :"30px"}}/>
                                                                                  
                                                                                </div>
                                                                                <div class="center1">
                                                                                    <div class="carrousel-item carrousel-item-copy" id="carrouselimg1">
                                                                                        <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload} alt="image 1"  style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                                                                                    </div>
                                                                                    <div class="carrousel-item carrousel-item-copy" id="carrouselimg2">
                                                                                        <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload1} alt="image 2" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                                                                                    </div>
                                                                                    <div class="carrousel-item carrousel-item-copy" id="carrouselimg3">
                                                                                        <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload2} alt="image 3" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                                                                                    </div>
                                                                                    <div class="carrousel-item carrousel-item-copy" id="carrouselimg4">
                                                                                        <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload3} alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                                                                                    </div>
                                                                                    <div class="carrousel-item carrousel-item-copy" id="carrouselimg5">
                                                                                        <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload5}  alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                                                                                    </div>
                                                                                    <div class="carrousel-item carrousel-item-copy" id="carrouselimg6">
                                                                                        <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload6}  alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                                                                                    </div>
                                                                                    
                                                                                        {/* <div class="carrousel-item" id="carrouselimg5">
                                                                                            <img class="d-block img-cov" src={productDetail[0] && productDetail[0].Product_Image_Upload} alt="image 5" style={{height:"300px",width: "73%",margin: "auto"}}/>
                                                                                        </div> */}
                                                                                  </div>
                                                                                    <div onClick={()=>carrouselRight()}  style={{position: "absolute",right: "10px",zIndex: "8"}} className="change-arrow1">
                                                                                    <ArrowForwardIosIcon  style={{color : "grey", width :"19px",fontSize  :"30px"}}/>
                                                                                    </div>
                                                                            </div>
                                                                                          
                                                                                          
                                                                                          
                                                                                          
                                                                                          
                                                                              </div>
                                                                          </div>
                                                                      </section>

                                                





                                                            
                                                            
                                                            {/* <div className="container-photo-detail">
                                                                <img id="changes-Photo" src={res.Product_Image_Upload} alt="First slide" onClick={()=>setMainPhoto(res.Product_Image_Upload)}/>
                                                            </div> */}
                                                             <div style={{height : "193px" ,paddingTop  :"50px"}} className="container-photo-detail">
                                                            {/* <div style={{paddingTop : "40px",height : "193px" }} className="container-photo-detail"> */}
                                                            {productDetail[0] && productDetail[0].Product_Image_Upload1
                                                            ?
                                                            <img src={productDetail[0] && productDetail[0].Product_Image_Upload1} className="details-img-size" alt="First slide" onClick={()=>changePhoto(productDetail[0] && productDetail[0].Product_Image_Upload1)}/>
                                                            : ""
                                                            }
                                                            {productDetail[0] && productDetail[0].Product_Image_Upload2
                                                            ?
                                                            <img src={productDetail[0] && productDetail[0].Product_Image_Upload2} className="details-img-size" alt="First slide"  onClick={()=>changePhoto(productDetail[0] && productDetail[0].Product_Image_Upload2)} />
                                                            : ""
                                                            }
                                                            {productDetail[0] && productDetail[0].Product_Image_Upload3
                                                            ?
                                                            <img src={productDetail[0] && productDetail[0].Product_Image_Upload3} className="details-img-size" alt="First slide"  onClick={()=>changePhoto(productDetail[0] && productDetail[0].Product_Image_Upload3)} />
                                                            : ""
                                                            }
                                                             {productDetail[0] && productDetail[0].Product_Image_Upload5
                                                            ?
                                                            <img src={productDetail[0] && productDetail[0].Product_Image_Upload5} className="details-img-size" alt="First slide"  onClick={()=>changePhoto(productDetail[0] && productDetail[0].Product_Image_Upload5)} />
                                                            : ""
                                                            }
                                                               
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-12 col-lg-6" style={{paddingLeft : "30px"}}>
                                                {/* <Link to={"/categories/"+res.Product_Catagories+"/product"}><p>{res.Product_Catagories}</p></Link> */}
                                                {/* <p>
                                                <GradeIcon id="star1"/>
                                                <GradeIcon id="star2"/>
                                                <GradeIcon id="star3"/>
                                                <GradeIcon id="star4"/>
                                                <GradeIcon id="star5"/> 
                                                <b><a onClick={()=>setReviewChange()} href="#review"  onClick={()=>setChanger67(true)}> {allproductReview.length} Reviews</a> <br /><br /> <span style={{padding :  "5px 10px",margin : "10px 0px" , border : "1px solid grey"}} onClick={()=>setChanger67(true)}> <a  href="#revi" > Create a Review</a></span></b></p> */}
                                                {/* <p>Create a Review</p> */}
                                                <h1 className="mtext-105 cl2 js-name-detail">
                                                {/* <h1 className="mtext-105 cl2 js-name-detail p-b-14"> */}
                                                {productDetail[0] &&productDetail[0].Product_Name}                  </h1>
                                                {/* <h2 className="text-black" style={{marginTop :  "30px"}}>{productDetail[0] &&productDetail[0].Product_Name}</h2> */}
                                                {/* <h4 className=" h4">{productDetail[0] &&productDetail[0].Product_Title}</h4> */}
                                                {/* <p className="stext-102 cl3 p-t-23" style={{padding : "0px"}}></p> */}
                                                {/* {productDetail[0] &&productDetail[0].Product_Short_Notes} */}
                  
                                                {/* <p className="mb-4" style={{color : "black"}}>{productDetail[0] &&productDetail[0].Product_Short_Notes}</p> */}
                                                
                                                {productDetail[0] &&productDetail[0].Price[0] ?
                                                    productDetail[0] &&productDetail[0].Size_Discounted[0]?
                                                    <div style={{display : "flex"}}>
                                                    <p><strong  style={{color : "black",fontSize : "31px"}}  className="h2 mtext-106 cl2" id="PriceChanger4" >Rs : {productDetail[0] &&productDetail[0].Size_Discounted[0]} </strong></p>
                                                    <div style={{width: "15px"}} className="mtext-106 cl2"></div>
                                                    <p  className="mtext-106 cl2" style={{color : "grey" , PaddingTop : "60px" , margin:  "0px" ,paddingTop: "8px"}}><strong  className=" h5" > <s  id="PriceChanger2"> Rs : {productDetail[0] &&productDetail[0].Price[0]} </s></strong></p>
                                                    <div style={{width: "10px"}}></div>
                                                    {/* <p style={{color : "red" ,paddingTop: "8px"}}> 
                                                        {productDetail[0] &&productDetail[0].Size_Discounted[0] ?
                                                    <span  className="mtext-106 cl2" id="PriceChanger3">{(100 - ( productDetail[0] &&productDetail[0].Size_Discounted[0]*100) /  productDetail[0] &&productDetail[0].Price[0]).toFixed(2)}  % off</span>
                                                    :""
                                                   
                                                    }
                                                    
                                                     </p> */}
                                                </div>   :  <div style={{display : "flex"}}>
                                                    <p className="mtext-106 cl2"><strong className=" h2" style={{color : "black"}} id="PriceChanger">Rs : {productDetail[0] &&productDetail[0].Price[0]} </strong></p>
                                                    </div>                                                 
                                                : productDetail[0] &&productDetail[0].Product_Price_Discounted ? 
                                                
                                                <div style={{display : "flex"}}>
                                                    <p className="mtext-106 cl2"><strong className=" h2" style={{color : "black"}}>Rs : {productDetail[0] &&productDetail[0].Product_Price_Discounted} </strong></p>
                                                    <div style={{width: "15px"}}></div>
                                                    <p className="mtext-106 cl2" style={{color : "grey" , PaddingTop : "60px" , margin:  "0px" ,paddingTop: "8px"}}><strong  className=" h5" > <s> Rs : {productDetail[0] &&productDetail[0].Product_Price} </s></strong></p>
                                                    <div style={{width: "10px"}}></div>
                                                    <p style={{color : "red" ,paddingTop: "8px"}}><strong  className=" h5" > 
                                                        {productDetail[0] &&productDetail[0].Product_Price_Discounted ?
                                                    <span>{(100 - (productDetail[0] &&productDetail[0].Product_Price_Discounted *100) /  productDetail[0] &&productDetail[0].Product_Price).toFixed(2)}  % off</span>
                                                    : ""
                                                    }
                                                    
                                                     </strong></p>
                                                
                                                </div>
                                                : 
                                                    <p style={{color : "black" , PaddingTop : "60px" , margin:  "0px" ,paddingTop: "8px"}}><strong  className=" h2" >  Rs : {productDetail[0] &&productDetail[0].Product_Price} </strong></p>
                                                
                                                }
                                            
                                            

                            
                                                {/* {
                                                    productDetail[0] &&productDetail[0].Product_Image_Upload4 ? 
                                                    <>
                                                 <p style={{cursor : "pointer"}}  onClick={()=>setShoesSize(productDetail[0] &&productDetail[0].Product_Image_Upload4)}><img src={guides} width="20px" height="20px" alt="" />  Size Guide </p>
                                                </>
                                                :""
                                                }
                                                 */}
                                               
                                               <div className="mb-1">
                                                        <div className="input-group mb-3" style={{ maxWidth: "220px" }} >
                                                        {
                                                            productDetail[0] && ! productDetail[0].Product_Price ? 
                                                            productDetail[0] &&productDetail[0].Size.map((res5,f)=>{
                                                                return (
                                                                    <div className="input-group-prepend Shoes-Size-Button1" style={{ cursor : "pointer"}}>
                                                                        <button onClick={()=>changePrice(f)} style={{ cursor : "pointer"}}>{res5}</button>
                                                                    </div>
                                                                )
                                                            })
                                                        : ""
                                                        }
                                                            
                                                            {/* <div className="input-group-append Shoes-Size-Button1">
                                                            <button>UK-2</button>
                                                            </div>
                                                            <div className="input-group-prepend Shoes-Size-Button1">
                                                            <button>UK-1</button>
                                                            </div>
                                                            <div className="input-group-append Shoes-Size-Button1">
                                                            <button>UK-2</button>
                                                            </div>
                                                            <div className="input-group-append Shoes-Size-Button1">
                                                            <button style={{border : "none"}}><img src={guide} alt=""/> Size Guide</button>
                                                            </div> */}
                                                        </div>

                                                    </div>

                                                    
                                                    <br />
                                                    <h1 style={{fontWeight :"600",fontSize : "18px"}}>Description:</h1>

                                                <b><p style={{fontWeight :"500",fontSize : "18px"}}> {productDetail[0] &&productDetail[0].Product_Short_Notes}</p></b> 
                                                  <br />
                                                <p style={{fontWeight :"500",fontSize : "18px"}}> {productDetail[0] &&productDetail[0].Product_Long_Notes}</p> 
                                                            <br />
                                                
                                                    <div className="mb-2">
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
                                               <br />
                                                {/* <p><div className="buy-now btn btn-sm btn-primary" onClick={() => addtocartproduct12()} style={{borderRadius : '20px', margin : "10px" , background : "black",border  : "1px solid black",fontWeight : "bold"}}>Add To Bag</div></p> */}
                                                <div className="price-box-bar">
                                                <div className="cart-and-bay-btn">
                                                
                                                    {/* <a className="btn hvr-hover" data-fancybox-close href="#">Buy New</a> */}
                                                    <a className="btn hvr-hover" data-fancybox-close href="#" onClick={()=>addtocartproduct(productDetail[0])}  style={{height : "47px",background :"black",padding:"8px 20px 28px 20px" , fontSize : "18px",borderRadius : "2px",margin : "0px 10px"}}>
                                                    {/* <ShoppingCartIcon   style={{padding:"0px 0px" , fontSize : "30px"}} /> */}
                                                    Add to cart</a>
                                                    <a className="btn hvr-hover" data-fancybox-close href="#" onClick={()=>addtocartproduct123(productDetail[0])}  style={{height : "47px",background :"black",padding:"8px 20px 28px 20px" , fontSize : "18px",borderRadius : "2px"}}>
                                                    {/* <ShoppingCartIcon   style={{padding:"0px 0px" , fontSize : "30px"}} /> */}
                                                    Buy Now</a>
                                                </div>
                                                </div>
                                                
                                                

                                            </div>
                                        </div>
                                    </div>
                                </div>
                    


 






                                <div className="products-box">
              <div className="container">
                
                <div className="row special-list">
                  {product.map((res,i)=>{
                    return (


                      <div className="col-lg-4 col-md-6 special-grid best-seller" style={{cursor : "pointer"}}>
                      <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                        <div className="box-img-hover" >
                          
                          <a href={"/categories/"+res.Product_Catagories+"/all-products/"+res.Product_Name+"/"+res._id}>
                          <img src={res.Product_Image_Upload} className="img-fluid" alt="Image" style={{height : "220px"}} />
                          </a>
                           
                        </div>
                        <div className="why-text">
                          <h4> <a href={"/categories/"+res.Product_Catagories+"/all-products/"+res.Product_Name+"/"+res._id}> {res.Product_Name}</a></h4>
                          {res.Product_Price_Discounted ? 
                              <>
                          <p style={{fontWeight: "bold",  color : "black"}}>Rs. {res.Product_Price_Discounted}
                          <span style={{marginLeft:"10px" , color : "red"   , textDecoration: "line-through"}}>Rs.{res.Product_Price}</span>
                          <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
                              </>
  
                              :
                              <p style={{fontWeight: "bold",  color : "black"}}>Rs. {res.Product_Price}
                          <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
  
                          }
                        </div>
                      </div>
                    </div>
                   
                    )
                  })


                  }
                 
                </div>
              </div>
            </div>


    









      </div>
        </>
    )
}

export default SubCategoriesProductDetails;
