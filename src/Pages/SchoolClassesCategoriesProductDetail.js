import React, { useEffect , useState } from 'react';
import swal from 'sweetalert';
import cloth_1 from '../assets/images/cloth_1.jpg';
import shoe_1 from '../assets/images/shoe_1.jpg';
import cloth_2 from '../assets/images/cloth_2.jpg';
import cloth_3 from '../assets/images/cloth_3.jpg';
import Ban1 from "../assets/images/banner1.jpg"
import Ban2 from "../assets/images/banner2.jpg"
import Ban3 from "../assets/images/banner3.jpg"

import guides from "../assets/images/111.JPG"
import ChatIcon from '@material-ui/icons/Chat';



import z1 from "../assets/images/z1.jpeg"
import c1 from "../assets/images/z2.jpeg"
import guide from "../assets/images/Guide.JPG"

import ClearIcon from '@material-ui/icons/Clear';



import u1 from '../assets/images/u1.jfif';
import u2 from '../assets/images/u2.jfif';
import u3 from '../assets/images/u3.jfif';
// import u4 from '../assets/images/u4.jfif';





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


 const SchoolClassesCategoriesProductDetail =(props)=> {
    const [productDetail , setproductDetail] = useState([])
    const [Price , setPrice] = useState(1)
    const [DataPart2 , setDataPart2] = useState([])
    const [allproduct , setallproduct] = useState([])
    const [allproductReview , setallproductReview] = useState([])


    const [Area1 , setArea1] = useState(true)
    const [Area2 , setArea2] = useState(false)
    const [Area3 , setArea3] = useState(false)


    const [Star1 , setStar1] = useState(0)
    const [Star2 , setStar2] = useState(0)
    const [Star3 , setStar3] = useState(0)



    const [Changer , setChanger] = useState(0)


    const [name, setname] = useState("") 
    const [lname, setlname] = useState("") 
    const [email, setemail] = useState("") 
    const [subject, setsubject] = useState("") 
    const [Message, setMessage] = useState("") 
    const [Detail, setDetail] = useState("") 

    const [CategoriesName , setCategoriesName] = useState({})
    const [Average , setAverage] = useState(0)
    // const [q , setq] = useState(0)
    // const [p , setp] = useState(0)
    // const [v , setv] = useState(0)
    // const [qan , setqan] = useState(0)


    useEffect(() =>{
        window.scrollTo(0, 0)

        let Categoriesname = props.match.params ;
        setCategoriesName(Categoriesname)
        console.log("effe");
        fetch("https://database-student-1-stop.herokuapp.com/AllProduct1/"+Categoriesname.productid,{
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
    })


        fetch("https://database-student-1-stop.herokuapp.com/allReview",{
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
           
            if(res5.productId === Categoriesname.productid && res5.ReviewApproval){
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
        console.log( "60a3c644e4520a12c80a6f52");

            if(productDetail[0].ProductCreater !== "60a3c644e4520a12c80a6f52"){
            console.log("yes ");
            fetch("https://database-student-1-stop.herokuapp.com/ChangePercentageInOrder/"+productDetail[0].ProductCreater,{
                                method: "POST",
                                headers :  {
                                    "Content-Type" : "application/json" , 
                                }
                            })
                            .then(res=>res.json())
                            .then((res1)=>{ 
                                console.log(res1);
                                // if(!res1 === null){
   document.getElementById("myDi").style.visibility = "visible"
        setTimeout(()=>{
            document.getElementById("myDi").style.visibility = "hidden"

        },1000)
        if (productDetail[0].Product_Price_Discounted === null){
            const data =  {...productDetail[0] ,
                        
                        Percentage : productDetail[0].Percentage,
                        DeliveryStatus : "Pending",
                         Pieces : Price ,
                         Total_Product_Price  : productDetail[0].Product_Price * Price }
        var data1 = JSON.parse(localStorage.getItem("Cart")) 
        if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id){
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
                        
                        Percentage : productDetail[0].Percentage,
                        DeliveryStatus : "Pending",
                         Pieces : Price ,
                         Total_Product_Price  : productDetail[0].Product_Price_Discounted * Price }
        var data1 = JSON.parse(localStorage.getItem("Cart")) 
        if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data._id){
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
                Percentage : productDetail[0].Percentage,
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
                                Percentage : productDetail[0].Percentage,
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


      })
        

    }













    else{
      
                    document.getElementById("myDi").style.visibility = "visible"
                    setTimeout(()=>{
                    document.getElementById("myDi").style.visibility = "hidden"

                    },1000)
                    console.log(productDetail);
                    if (productDetail[0].Product_Price_Discounted === null){
                    const data =  {...productDetail[0] ,
                        Percentage : 0,
                        DeliveryStatus : "Pending",
                        Pieces : Price ,
                        Total_Product_Price  : productDetail[0].Product_Price * Price }
                    var data1 = JSON.parse(localStorage.getItem("Cart")) 
                    console.log(  data1);
                    if (data1){
                        console.log(  data._id);
                    var data3 = data1.map((item) => {
                        console.log(item._id , data._id);
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
                    console.log(  data1);
                    if (data1){
                        console.log(  data._id);
                    var data3 = data1.map((item) => {
                        console.log(item._id , data._id);
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
    if(productDetail[0].Size_Discounted[0]){
        document.getElementById("PriceChanger2").innerHTML ="Rs : "+ productDetail[0].Price[e]
  // document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
  document.getElementById("PriceChanger3").innerHTML =(100 -(productDetail[0].Size_Discounted[e] *100) /  productDetail[0].Price[e]).toFixed(0) +" % off"
  document.getElementById("PriceChanger4").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
}
else{
  document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Size_Discounted[e]
}
    // console.log("sdcefelwjfklj");
    // if(document.getElementById("PriceChanger")){
        // document.getElementById("PriceChanger").innerHTML ="Rs : "+ productDetail[0].Price[e]
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
    fetch("https://database-student-1-stop.herokuapp.com/createReview",{
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

const setMess1 = () =>{
    localStorage.setItem("Details Product" , JSON.stringify(productDetail))
    props.history.push("/chat")
}

    return (
        <>  
        <center>
            <div className="pop-up-1 dis-off" id="myDi">
                <h1>Product Updated in Cart</h1>
            </div> 
        </center>
        <div id="myDiv1234">
                <img src={guides} alt=""  id="myDiv23456"/>
                <ClearIcon id="myDiv34567"  style={{color : "black",fontSize : "30px",position : "absolute" , right: "10%",top : "50%" , zIndex: "2"}} onClick={()=>setChanger1()}/>
            </div> 
      
    <div id="mainphoto">
                <img src={guides} alt=""  id="mainphoto2"/>
                <ClearIcon id="photo33"  style={{color : "black",fontSize : "30px",position : "absolute" , right: "10%",top : "50%" , zIndex: "2"}} onClick={()=>setChanger2()}/>
            </div> 
        <div>
        
      
    

            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">{CategoriesName.SchoolCoursecategoriesName}</strong><span className="mx-2 mb-0">/</span> <strong className="text-black">{CategoriesName.Classsessubcategories}</strong><span className="mx-2 mb-0">/</span> <strong className="text-black">{CategoriesName.productname}</strong><span className="mx-2 mb-0">/</span> <strong className="text-black">{CategoriesName.ClasssessubcategoriesProduct}</strong></div> 
                    </div>
                </div>
            </div>






                {
                    productDetail ? productDetail.map((res,i)=>{
                        return (
                                <div className="site-section">
                                    <div className="container">
                                            <div className="row">
                                                <div className="col-md-8 col-lg-6">
                                                    <div className="container-fuild">
                                                        <div className="col-xl-6 col-lg-6 col-md-8" style={{width : "100%", margin  : "0px",padding: "0px"}} >
                                                            <div className="container-photo-detail">
                                                                <img id="changes-Photo" src={res.Product_Image_Upload} alt="First slide" onClick={()=>setMainPhoto(res.Product_Image_Upload)}/>
                                                            </div>
                                                            <div style={{paddingTop : "40px",height : "140px" }} className="container-photo-detail">
                                                            {res.Product_Image_Upload1
                                                            ?
                                                            <img src={res.Product_Image_Upload1} className="details-img-size" alt="First slide" onClick={()=>changePhoto(res.Product_Image_Upload1)}/>
                                                            : ""
                                                            }
                                                            {res.Product_Image_Upload2
                                                            ?
                                                            <img src={res.Product_Image_Upload2} className="details-img-size" alt="First slide"  onClick={()=>changePhoto(res.Product_Image_Upload2)} />
                                                            : ""
                                                            }
                                                            {res.Product_Image_Upload3
                                                            ?
                                                            <img src={res.Product_Image_Upload3} className="details-img-size" alt="First slide"  onClick={()=>changePhoto(res.Product_Image_Upload3)} />
                                                            : ""
                                                            }
                                                               
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12 col-lg-6">
                                                <Link to={"/main-categories/"+CategoriesName.SchoolCoursecategoriesName+"/"+CategoriesName.Classsessubcategories}><p>{CategoriesName.Classsessubcategories}</p></Link>
                                                <p>
                                                <GradeIcon id="star1"/>
                                                <GradeIcon id="star2"/>
                                                <GradeIcon id="star3"/>
                                                <GradeIcon id="star4"/>
                                                <GradeIcon id="star5"/> 
                                                <b><a onClick={()=>setReviewChange()} href="#review"> {allproductReview.length} Reviews</a></b></p>

                                                <h2 className="text-black" style={{marginTop :  "30px"}}>{res.Product_Name}</h2>
                                                <h4 className=" h4">{res.Product_Title}</h4>
                                                <p className="mb-4" style={{color : "black"}}>{res.Product_Short_Notes}</p>
                                                {res.Price[0] ?
                                                    res.Size_Discounted[0]?
                                                    <div style={{display : "flex"}}>
                                                    <p><strong className=" h2" style={{color : "black"}} id="PriceChanger4">Rs : {res.Size_Discounted[0]} </strong></p>
                                                    <div style={{width: "15px"}}></div>
                                                    <p style={{color : "grey" , PaddingTop : "60px" , margin:  "0px" ,paddingTop: "8px"}}><strong  className=" h5" > <s  id="PriceChanger2"> Rs : {res.Price[0]} </s></strong></p>
                                                    <div style={{width: "10px"}}></div>
                                                    <p style={{color : "red" ,paddingTop: "8px"}}><strong  className=" h5" > 
                                                        {res.Size_Discounted[0] ?
                                                    <span  id="PriceChanger3">{(100 - ( res.Size_Discounted[0]*100) /  res.Price[0]).toFixed(2)}  % off</span>
                                                    :""
                                                   
                                                    }
                                                    
                                                     </strong></p>
                                                </div>   :  <div style={{display : "flex"}}>
                                                    <p><strong className=" h2" style={{color : "black"}} id="PriceChanger">Rs : {res.Price[0]} </strong></p>
                                                    </div>                                                 
                                                : res.Product_Price_Discounted ? 
                                                
                                                <div style={{display : "flex"}}>
                                                    <p><strong className=" h2" style={{color : "black"}}>Rs : {res.Product_Price_Discounted} </strong></p>
                                                    <div style={{width: "15px"}}></div>
                                                    <p style={{color : "grey" , PaddingTop : "60px" , margin:  "0px" ,paddingTop: "8px"}}><strong  className=" h5" > <s> Rs : {res.Product_Price} </s></strong></p>
                                                    <div style={{width: "10px"}}></div>
                                                    <p style={{color : "red" ,paddingTop: "8px"}}><strong  className=" h5" > 
                                                        {res.Product_Price_Discounted ?
                                                    <span>{(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % off</span>
                                                    : ""
                                                    }
                                                    
                                                     </strong></p>
                                                
                                                </div>
                                                : 
                                                    <p style={{color : "black" , PaddingTop : "60px" , margin:  "0px" ,paddingTop: "8px"}}><strong  className=" h2" >  Rs : {res.Product_Price} </strong></p>
                                                
                                                }
                                            
                                            

                            
                                                {
                                                    res.Product_Image_Upload4 ? 
                                                    <>
                                                 <p style={{cursor : "pointer"}}  onClick={()=>setShoesSize(res.Product_Image_Upload4)}><img src={guides} width="20px" height="20px" alt="" />  Size Guide </p>
                                                </>
                                                :""
                                                }
                                                
                                               

                                                <div className="mb-1">
                                                    <div className="input-group mb-3" style={{ maxWidth: "220px" }} >
                                                    {
                                                        !res.Product_Price ? 
                                                        res.Size.map((res5,f)=>{
                                                            return (
                                                                <div className="input-group-prepend Shoes-Size-Button1">
                                                                    <button onClick={()=>changePrice(f)}>{res5}</button>
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
                                                {res.isStock && res.isStock !== undefined 
                                                ?
                                                <h2 style={{color : "red"}}>Out Of Stock</h2>
                                                :
                                                <p><div className="buy-now btn btn-sm btn-primary" onClick={() => addtocartproduct()}>Add To Bag</div></p>

                                                }
                                                {/* <p><div className="buy-now btn btn-sm btn-primary" onClick={() => addtocartproduct()}>Add To Bag</div></p> */}
                                                <div className="mb-1">
                                                    <div className="input-group mb-3" style={{color : "black"}} >
                                                        <div className="input-group-prepend Shoes-Size-Button1" >
                                                        <p> <b>All products are sold by "Student 1 Stop Start-up MVP model"</b> </p>
                                                        </div>
                                                        <div className="input-group-append Shoes-Size-Button1">
                                                        <p> <b> Overview</b> <br />
                                                            Country Of Origin - Pakistan
                                                                <br />
                                                            Disclaimer: Accessories shown may not be a part of original product</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="mb-1">
                                                    <div className="input-group mb-3" style={{color : "black"}} >
                                                       <button style={{background : "transparent"  , border  : "none" , color  : "rgb(25, 168, 207)"}}
 onClick={()=>setMess1()}                                                    //    onClick={()=>setChatNow()}
                                                       ><ChatIcon />Chat Now</button>
                                                       {/* <button style={{background : "transparent"  , border  : "2px solid rgb(25, 168, 207)" , color  : "rgb(25, 168, 207)"}}><ChatIcon />Chat Now</button> */}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })

                    : <center><h2>Loading ...</h2></center>
                }








            {/* <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="container-fuild">
                        <div className="col-xl-12 col-lg-12 col-md-12" style={{width : "100%", margin  : "0px",padding: "0px"}} >
                                        <div className="container-photo-detail">
                                            <img class="w-100" id="changes-Photo" src={u1} alt="First slide"/>
                                        </div>
                                        <div style={{paddingTop : "20px"}}>
                                            <img class="d-block w-100" src={u2} alt="First slide"  className="details-img-size" onClick={()=>changePhoto()}/>
                                            <img class="d-block w-100" src={u3} alt="First slide"  className="details-img-size"/>
                                            <img class="d-block w-100" src={u3} alt="First slide"  className="details-img-size" />
                                            <img class="d-block w-100" src={u3} alt="First slide"  className="details-img-size" />
                                        </div>
                        </div>
                    </div>

                        </div>
                        <div className="col-md-6">
                            <h2 className="text-black" style={{marginTop :  "30px"}}>{productDetail.Product_Name}</h2>
                            <h4 className="text-primary h4">{productDetail.Product_Title}</h4>
                            <p className="mb-4">{productDetail.Product_Short_Notes}</p>
                            <p><strong className="text-primary h4">Rs : {productDetail.Product_Price}</strong></p>
                        

        

                            <p>Shoes Size  </p>

                            <div className="mb-2">
                                <div className="input-group mb-3" style={{ maxWidth: "120px" }} >
                                    <div className="input-group-prepend Shoes-Size-Button1">
                                    <button>UK-1</button>
                                    </div>
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
            </div> */}



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
                            <div id="review" className="col-xl-3 col-lg-3 col-md-3 col-sm-4 product-detail-descr-rating" >
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
                            <div style={{padding  : "20px 20px"}}>
                                   <h2> Customer Reviews</h2>
                                   <br />

                                   {allproductReview.map((res3)=>{
                                       return (
                                           <>
                                           <hr />
                                           <hr />
                                        <div style={{padding  : "20px 40px"}}>
                                        <h4>{res3.summary}</h4>

                                        <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <p>Quality : 
                                        {res3.quality === 5 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.quality === 4 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        
                                        </>
                                        : ""
                                        }

                                        {res3.quality === 3 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.quality === 2 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.quality === 1 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }
                                        </p>


                                        <p>Value : 
                                        {res3.value === 5 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.value === 4 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        
                                        </>
                                        : ""
                                        }

                                        {res3.value === 3 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.value === 2 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.value === 1 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }
                                        </p>




                                        <p>Price : 
                                        {res3.price === 5 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.price === 4 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        
                                        </>
                                        : ""
                                        }

                                        {res3.price === 3 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.price === 2 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }

                                        {res3.price === 1 ?
                                        <>
                                        <GradeIcon style={{marginLeft:"10px" , color : "rgb(251, 122, 51)"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        <GradeIcon style={{ color : "grey"}}/>
                                        </>
                                        : ""
                                        }
                                        </p>

                                        {/* <p>Value :  <GradeIcon style={{marginLeft:"10px"}} /><GradeIcon   /><GradeIcon  /><GradeIcon   /><GradeIcon  /></p>
                                        <p>Price :  <GradeIcon style={{marginLeft:"10px"}} /><GradeIcon   /><GradeIcon  /><GradeIcon   /><GradeIcon  /></p> */}
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" style={{padding:"10px 10%"}}>
                                            <h5>{res3.review_message}</h5>
                                            <p style={{color:"grey"}}>Publish by : {res3.user}</p>
                                        </div>
                                        </div>
                                        
                                        </div>
                                        <hr />
                                        <hr />
                                        </>
                                       )
                                   })

                                   }
                                    
                               </div>

                               <div style={{padding  : "20px 40px"}}>
                                   <p>You're reviewing:</p>
                                    <h3>
                                    {
                                            productDetail[0] ? 
                                            productDetail[0].Product_Title
                                            : " "
                                        }                                        </h3>
                                    <p>Your Rating <span className="text-danger">*</span></p>
                                    <div id="Rate">
                                        <p>Quality <GradeIcon onClick={()=>RatingProduct1(1)} className="Icon-start a1-start"/><GradeIcon onClick={()=>RatingProduct1(2)}  className="Icon-start a2-start"/><GradeIcon onClick={()=>RatingProduct1(3)}  className="Icon-start a3-start"/><GradeIcon onClick={()=>RatingProduct1(4)}  className="Icon-start a4-start"/><GradeIcon onClick={()=>RatingProduct1(5)}  className="Icon-start a5-start"/></p>
                                        <p>Value  <GradeIcon  onClick={()=>RatingProduct2(1)}  className="Icon-start a1-start"/><GradeIcon  onClick={()=>RatingProduct2(2)}   className="Icon-start a2-start"/><GradeIcon  onClick={()=>RatingProduct2(3)}   className="Icon-start a3-start"/><GradeIcon  onClick={()=>RatingProduct2(4)}   className="Icon-start a4-start"/><GradeIcon  onClick={()=>RatingProduct2(5)}   className="Icon-start a5-start"/></p>
                                        <p>Price  <GradeIcon  onClick={()=>RatingProduct3(1)}  className="Icon-start a1-start"/><GradeIcon  onClick={()=>RatingProduct3(2)}   className="Icon-start a2-start"/><GradeIcon  onClick={()=>RatingProduct3(3)}   className="Icon-start a3-start"/><GradeIcon  onClick={()=>RatingProduct3(4)}   className="Icon-start a4-start"/><GradeIcon  onClick={()=>RatingProduct3(5)}   className="Icon-start a5-start"/></p>
                                    </div>
                               </div>
                               
                               <div className="col-md-12">

                                    <form onSubmit={(e)=>submitUserReview(e)}>

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
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 product-detail-descr-rating1">
                               <div>
                                    <p>

                                    {
                                        Detail.split("\n").map((res4)=>{
                                            return (
                                                <>
                                                {res4} <br/>
                                                </>
                                            )
                                        })
                                    }                                 
                                    
                                                                     </p>
                               </div>
                                                                     {/* <br /><br /><br /><br /> */}
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

export default SchoolClassesCategoriesProductDetail;
