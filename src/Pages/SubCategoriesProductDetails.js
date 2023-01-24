import React, { useEffect , useState } from 'react';
import swal from 'sweetalert';

import { Link , Redirect} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import men from '../assets/images/111.png';

// import swal from 'sweetalert';
import Swal from 'sweetalert2'



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

  const [product , setproduct] = useState([])

  const [Area1 , setArea1] = useState(true)
  const [Area2 , setArea2] = useState(false)
  const [Area3 , setArea3] = useState(false)

  const [dd1 , setdd1] = useState(true)
  const [dd2 , setdd2] = useState(false)


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

  const [fvalue , setfvalue] = useState([])
    const [data, setdata] = useState([]) 
    const [fg , setfg] = useState(true)
    const [couponShow , setcouponShow] = useState(false)

    useEffect(() =>{
        window.scrollTo(0, 0)

        let Categoriesname = props.match.params ;
        setCategoriesName(Categoriesname)

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
       setproduct(pro.slice(0,3))
      //  setdis(true)
      })

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
        carrouselInit()
        // addZoom()
        // imageZoom()
        // console.log(res1[0].Product_Long_Notes,Detail,"jk");
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
           
            if(res5.productId === Categoriesname.productid &&res5.ReviewApproval){
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
        //     return res5.productId === Categoriesname.productid
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
            return res5.productId === Categoriesname.productid && res5.ReviewApproval
        })
        
        let total = q+p+v
        console.log(total,q,v,p,qan,"total");
        // if((total*100)/qan >= 80){
        //     document.getElementById("star1").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star2").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star3").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star4").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star5").style.color = "rgb(251, 122, 51)"
        // }
        // else if((total*100)/qan >= 60){
        //     document.getElementById("star1").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star2").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star3").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star4").style.color = "rgb(251, 122, 51)"
            
        // }
        // else if((total*100)/qan >= 40){
        //     document.getElementById("star1").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star2").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star3").style.color = "rgb(251, 122, 51)"

            
        // }
        // else if((total*100)/qan >= 20){
        //     document.getElementById("star1").style.color = "rgb(251, 122, 51)"
        //     document.getElementById("star2").style.color = "rgb(251, 122, 51)"

            
        // }
        // else{
        //     document.getElementById("star1").style.color = "rgb(251, 122, 51)"

        // }
        
        
        
        // setAverage((total*100)/qan)
        setallproductReview(data2)
    })
      var data1 =  JSON.parse(localStorage.getItem("Cart")) 
       if (data1) setDataPart2(data1)

  
    },[])


const setChanger5=(e)=>{
        document.getElementById("change-photo-zoom").src = e
    }




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
          
          
                
    
                          
  props.history.push("/cart")
    }
const savethedetailproduct = (data) =>{
    localStorage.setItem("Data" , JSON.stringify(data) )
    console.log(data);
 }

const  changePhoto = (e)=>{
    document.getElementById("changes-Photo").src = e
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
const changePrice = (e)=>{
    setChanger(e)
    // console.log("sdcefelwjfklj");
    // if(document.getElementById("PriceChanger")){
        if(productDetail[0].Size_Discounted[0]){
              document.getElementById("PriceChanger2").innerHTML ="Rs : "+ productDetail[0].Price[e]
        // document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
        document.getElementById("PriceChanger3").innerHTML =(100 -(productDetail[0].Size_Discounted[e] *100) /  productDetail[0].Price[e]).toFixed(0) +" % off"
        document.getElementById("PriceChanger4").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
    }
    else{
        document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
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
            productId:CategoriesName.productid
        }),
    })
    .then(res=>res.json())
    .then((res2)=>{        
    if(res2.Error){
        swal(res2.Error);
     }
     else{
        swal("Successfully Submit your Review!");
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
const setShoesSize = (e)=>{
    document.getElementById("myDiv1234").style.display= "block"
    let  m = document.getElementById("myDiv23456")
    m.src = e
}
const setMainPhoto = (e)=>{
    console.log(e);
    document.getElementById("mainphoto").style.display= "block"
    let  m = document.getElementById("mainphoto2")
    m.src = e
}

const setChanger1 = (e)=>{
    document.getElementById("myDiv1234").style.display= "none"
}
const setChanger2 = (e)=>{
    document.getElementById("mainphoto").style.display= "none"
}

const setChatNow = ()=>{
    document.getElementById("myDivUmer").style.display= "block"
    // console.log("rtgd")
}
const setChanger22 = (e)=>{
    document.getElementById("myDivUmer").style.display= "none"
  }


  



  const SubmitDataMessage = (e) =>{
    e.preventDefault()
    //   if(message.length >= 1 ){
    //     const msgDetails = {
    //     message : message , 
    //     user_uid_1 : Auth.uid ,
    //     user_uid_2 : specificUserChat.uid ,

    // }
    // // dispatch(sendMessageFromDatabase(msgDetails))
    // setMessage("")
    // if(!Auth.uid ){
    //     console.log("-")
    //     // dispatch(UserKeyUpNoTypingShow(User.uid))
    //     }
    // else{
    //         console.log("-")
    //         // dispatch(UserKeyUpNoTypingShow(Auth.uid))
    //     }
    
    // }
}

const setMess1 = () =>{
    localStorage.setItem("Details Product" , JSON.stringify(productDetail))
    props.history.push("/chat")
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

    // const imageZoom =()=> {
    //   var img, lens, result, cx, cy;
    //   img = document.getElementById("changes-Photo");
    //   result = document.getElementById("changes-Photo");
    //   /*create lens:*/
    //   lens = document.createElement("DIV");
    //   lens.setAttribute("class", "img-zoom-lens");
    //   /*insert lens:*/
    //   img.parentElement.insertBefore(lens, img);
    //   /*calculate the ratio between result DIV and lens:*/
    //   cx = result.offsetWidth / lens.offsetWidth;
    //   cy = result.offsetHeight / lens.offsetHeight;
    //   /*set background properties for the result DIV:*/
    //   result.style.backgroundImage = "url('" + img.src + "')";
    //   result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    //   /*execute a function when someone moves the cursor over the image, or the lens:*/
    //   lens.addEventListener("mousemove", moveLens);
    //   img.addEventListener("mousemove", moveLens);
    //   /*and also for touch screens:*/
    //   lens.addEventListener("touchmove", moveLens);
    //   img.addEventListener("touchmove", moveLens);
    //   function moveLens(e) {
    //     var pos, x, y;
    //     /*prevent any other actions that may occur when moving over the image:*/
    //     e.preventDefault();
    //     /*get the cursor's x and y positions:*/
    //     pos = getCursorPos(e);
    //     /*calculate the position of the lens:*/
    //     x = pos.x - (lens.offsetWidth / 2);
    //     y = pos.y - (lens.offsetHeight / 2);
    //     /*prevent the lens from being positioned outside the image:*/
    //     if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    //     if (x < 0) {x = 0;}
    //     if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    //     if (y < 0) {y = 0;}
    //     /*set the position of the lens:*/
    //     lens.style.left = x + "px";
    //     lens.style.top = y + "px";
    //     /*display what the lens "sees":*/
    //     result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    //   }
    //   const getCursorPos = (e)=> {
    //     var a, x = 0, y = 0;
    //     e = e || window.event;
    //     /*get the x and y positions of the image:*/
    //     a = img.getBoundingClientRect();
    //     /*calculate the cursor's x and y coordinates, relative to the image:*/
    //     x = e.pageX - a.left;
    //     y = e.pageY - a.top;
    //     /*consider any page scrolling:*/
    //     x = x - window.pageXOffset;
    //     y = y - window.pageYOffset;
    //     return {x : x, y : y};
    //   }
    // }



   const handleMouseMove = (e) => {
    console.log(e.target.getBoundingClientRect())
      const { left, top, width, height } = e.target.getBoundingClientRect()
      const x = (e.pageX - left) / width * 100
      const y = (e.pageY - top) / height * 100
      document.getElementById("carrouselimg1").style.backgroundPosition = `${x}% ${y}%`
    }
    return (
        <>  
        <center>
            <div className="pop-up-1 dis-off" id="myDi">
                <h1>Product Updated in Cart</h1>
            </div> 
        </center>
        <div>



        {couponShow ?

<div className="site-section change-padding" style={{position: "fixed", width: "100%",
zIndex:"9999",top  :"25%"}}>

            <div className="container div-size-respon" style={{width : "35%", borderRadius : "20px",background: "white",padding : "0px"}}>
                <div className="row">
                    <div className="col-md-12">
                        <img src={men} alt="" style={{}}/>
                    </div>
                 
                </div>
            </div>
        </div>


:
""

}


        
        {/* End All Title Box */}
        {/* Start Shop Detail  */}

        <div className="shop-detail-box-main">
          <div className="container">
        {
            productDetail ? productDetail.map((res,i)=>{
                return (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">


              <div class="center change-height" style={{height : "392px"}}>
                  <div onClick={()=>carrouselLeft()} style={{position: "absolute",left: "10px",zIndex: "8"}}>
                    <KeyboardArrowLeftIcon  style={{color : "grey", width :"30px",fontSize  :"30px"}}/>
                
              </div>
              <div class="center1 change-height" style={{height : "392px"}}>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg1">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload} onClick={()=>setChanger5(productDetail[0].Product_Image_Upload)} alt="image 1"  style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg2">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload1} onClick={()=>setChanger5(productDetail[0].Product_Image_Upload1)} alt="image 2" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg3">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload2} onClick={()=>setChanger5(productDetail[0].Product_Image_Upload2)} alt="image 3" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg4">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload3} onClick={()=>setChanger5(productDetail[0].Product_Image_Upload3)} alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg5">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload5} onClick={()=>setChanger5(productDetail[0].Product_Image_Upload5)} alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg6">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload6} onClick={()=>setChanger5(productDetail[0].Product_Image_Upload6)} alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  
         
                  
                </div>
              {/* <div class="center1 change-height" style={{height : "392px"}}>
                  <figure class="carrousel-item carrousel-item-copy" id="carrouselimg1"  onMouseMove={(e)=>handleMouseMove(e)} style={{  backgroundImage: `url(${productDetail[0].Product_Image_Upload})`,backgroundPosition: '0% 0%'}}>
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload} alt="image 1"  style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </figure>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg2">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload1} alt="image 2" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg3">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload2} alt="image 3" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  <div class="carrousel-item carrousel-item-copy" id="carrouselimg4">
                      <img class="d-block img-cov img-cov-copy" src={productDetail[0] && productDetail[0].Product_Image_Upload3} alt="image 4" style={{height:"390px",width: "100%",margin: "auto"}} id="changes-Photo"/>
                  </div>
                  
                </div> */}
              
                  <div onClick={()=>carrouselRight()} style={{position: "absolute",right: "10px",zIndex: "8"}} className="change-arrow">
                  <ArrowForwardIosIcon  style={{color : "grey", width :"19px",fontSize  :"30px"}}/>
                  </div>
          </div>
                    <div style={{height : "193px" }} className="container-photo-detail">
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








                {/* <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel" data-interval={1000}>
                  <div className="carousel-inner" role="listbox">
                  {res.Product_Catagories === "AC Series"
                  ? 
                  <div className="carousel-item active"> <img className="d-block w-100 the" src={res.Product_Image_Upload} alt="First slide" style={{objectFit : "none"}}/> </div>
                  :
                  <div className="carousel-item active"> <img className="d-block w-100 the" src={res.Product_Image_Upload} alt="First slide"  style={{objectFit : "cover"}}/> </div>
                  }


                    {res.Product_Image_Upload1
                        ?
                        <div className="carousel-item"> <img className="d-block w-100 the" src={res.Product_Image_Upload1} alt="Second slide" /> </div>
                    : ""
                }
                {res.Product_Image_Upload2
                    ?
                                                        
                    <div className="carousel-item"> <img className="d-block w-100 the" src={res.Product_Image_Upload2} alt="Third slide" /> </div>
                    : ""
                }
                   
                   
                {res.Product_Image_Upload3
                    ?
                    <div className="carousel-item"> <img className="d-block w-100 the" src={res.Product_Image_Upload3} alt="Third slide" /> </div>
                    : ""
                }

                               
                  </div>
                  <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev"> 
                    <i className="fa fa-angle-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span> 
                  </a>
                  <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next"> 
                    <i className="fa fa-angle-right" aria-hidden="true" /> 
                    <span className="sr-only">Next</span> 
                  </a>
                  <ol className="carousel-indicators">
                  {res.Product_Image_Upload
                        ?
                    <li data-target="#carousel-example-1" data-slide-to={0} className="active">
                      <img className="d-block w-100 img-fluid the1" src={res.Product_Image_Upload} alt="" />
                    </li>
                        : ""
                      }
                  {res.Product_Image_Upload1
                        ?
                    <li data-target="#carousel-example-1" data-slide-to={1}>
                      <img className="d-block w-100 img-fluid the1" src={res.Product_Image_Upload1} alt="" />
                    </li>
                        : ""
                      }
                  {res.Product_Image_Upload2
                        ?
                    <li data-target="#carousel-example-1" data-slide-to={2}>
                      <img className="d-block w-100 img-fluid the1" src={res.Product_Image_Upload2} alt="" />
                    </li>
                        : ""
                      }
                  {res.Product_Image_Upload3
                        ?
                    <li data-target="#carousel-example-1" data-slide-to={3}>
                      <img className="d-block w-100 img-fluid the1" src={res.Product_Image_Upload3} alt="" />
                    </li>
                        : ""
                      }
                   
                  </ol>
                </div> */}
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6" style={{paddingLeft : "30px"}}>
                <div className="single-product-details">
                  <h1>{res.Product_Name}</h1>
                  {res.Product_Price_Discounted ?
                    <h5 style={{fontSize : "31px"}}>Rs. {res.Product_Price_Discounted} <del>Rs.{res.Product_Price}</del></h5>
                    :
                    <h5 style={{fontSize : "31px"}}>Rs.{res.Product_Price}</h5>
                  }
                  {/* <p className="available-stock"><span> More than 20 available / <a href="#">8 sold </a></span></p><p>
                  </p> */}
                  <h4>Description:</h4>
                  <b style={{fontWeight :"500"}}><p>{res.Product_Short_Notes} </p></b>
                  {/* <br /> */}
                  <p style={{fontWeight :"500"}}>{res.Product_Long_Notes} </p>
                  <ul>
                    <li>
                        {/* <label className="control-label">Quantity</label> */}
                      <div className="form-group quantity-box">
                        <label className="control-label">.</label>
                            <button className="btn btn-outline-primary js-btn-minus form-control" type="button"  onClick = {()=>minus()} style={{border :"1px solid rgb(78 90 85)" , color : "rgb(78 90 85)",borderRadius   : "0px"}}>&#8722;</button>
                      </div>
                    </li>
                    <li>
                      <div className="form-group quantity-box">
                        <label className="control-label" style={{paddingLeft:"15px"}}>Quantity</label>

                        <input className="form-control"  value={Price} onChange={(e)=>setPrice(e.target.value)}  min="1" max="100" type="number" style={{border :"3px solid rgb(78 90 85)",borderRadius   : "0px" }}/>
                      </div>
                    </li>
                    <li>
                        {/* <label className="control-label">Quantity</label> */}
                      <div className="form-group quantity-box">
                        <label className="control-label">.</label>
                        <button className="btn btn-outline-primary js-btn-plus  form-control" type="button" onClick={()=>plus()}  style={{border :"1px solid rgb(78 90 85)" , color : "rgb(78 90 85)",borderRadius   : "0px"}}>&#43;</button>
                      </div>
                    </li>
                  </ul>
                  <div className="price-box-bar">
                    <div className="cart-and-bay-btn">
                    
                      {/* <a className="btn hvr-hover" data-fancybox-close href="#">Buy New</a> */}
                      <a className="btn hvr-hover" data-fancybox-close href="#" onClick={()=>addtocartproduct(res)}  style={{height : "47px",background :"black",padding:"8px 20px 28px 20px" , fontSize : "18px",borderRadius : "2px",margin : "0px 10px"}}>
                        {/* <ShoppingCartIcon   style={{padding:"0px 0px" , fontSize : "30px"}} /> */}
                      Add to cart</a>
                      <a className="btn hvr-hover" data-fancybox-close href="#" onClick={()=>addtocartproduct123(res)}  style={{height : "47px",background :"black",padding:"8px 20px 28px 20px" , fontSize : "18px",borderRadius : "2px"}}>
                        {/* <ShoppingCartIcon   style={{padding:"0px 0px" , fontSize : "30px"}} /> */}
                      Buy Now</a>
                    </div>
                  </div>
                  <div className="add-to-btn">
                    <div className="add-comp">
                      {/* <a className="btn hvr-hover" href="#" style={{background :"rgb(78 90 85)"}}><i className="fas fa-heart"/> Add to wishlist</a> */}
                      {/* <a className="btn hvr-hover" href="#"><i className="fas fa-sync-alt" /> Add to Compare</a> */}
                    </div>
                    {/* <div className="share-bar">
                      <a className="btn hvr-hover" href="#"><i className="fab fa-facebook" aria-hidden="true" /></a>
                      <a className="btn hvr-hover" href="#"><i className="fab fa-google-plus" aria-hidden="true" /></a>
                      <a className="btn hvr-hover" href="#"><i className="fab fa-twitter" aria-hidden="true" /></a>
                      <a className="btn hvr-hover" href="#"><i className="fab fa-pinterest-p" aria-hidden="true" /></a>
                      <a className="btn hvr-hover" href="#"><i className="fab fa-whatsapp" aria-hidden="true" /></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
       
                                )
                        })
                        : ""
                    } 






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























            {/* <div className="row my-5">
              <div className="card card-outline-secondary my-4">
                <div className="card-header">
                  <h2>Product Reviews</h2>
                </div>
                <div className="card-body">
                  <div className="media mb-3">
                    <div className="mr-2"> 
                      <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                    </div>
                    <div className="media-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                    </div>
                  </div>
                  <hr />
                  <div className="media mb-3">
                    <div className="mr-2"> 
                      <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                    </div>
                    <div className="media-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                    </div>
                  </div>
                  <hr />
                  <div className="media mb-3">
                    <div className="mr-2"> 
                      <img className="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image" />
                    </div>
                    <div className="media-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                      <small className="text-muted">Posted by Anonymous on 3/1/18</small>
                    </div>
                  </div>
                  <hr />
                  <a href="#" className="btn hvr-hover" style={{background :"rgb(78 90 85)"}}>Leave a Review</a>
                </div>
              </div>
            </div> */}
            {/* <div className="row my-5">
              <div className="col-lg-12">
                <div className="title-all text-center">
                  <h1>Featured Products</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                </div>
                <div className="featured-products-box owl-carousel owl-theme">
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-04.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-01.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-02.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-03.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="products-single fix">
                      <div className="box-img-hover">
                        <img src="images/img-pro-04.jpg" className="img-fluid" alt="Image" />
                        <div className="mask-icon">
                          <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt" /></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart" /></a></li>
                          </ul>
                          <a className="cart" href="#">Add to Cart</a>
                        </div>
                      </div>
                      <div className="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* End Cart */}
        {/* Start Instagram Feed  */}
       
            <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>↑</a>
      </div>

        </>
    )
}

export default SubCategoriesProductDetails;
