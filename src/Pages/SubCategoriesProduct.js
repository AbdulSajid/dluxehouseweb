import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import swal from 'sweetalert';


import logo from '../assets/images/logo.png';
import ban1 from '../assets/images/banner-01.jpg';
import ban2 from '../assets/images/banner-02.jpg';
import ban3 from '../assets/images/banner-03.jpg';
import cat1 from '../assets/images/categories_img_01.jpg';
import cat2 from '../assets/images/categories_img_02.jpg';
import cat3 from '../assets/images/categories_img_03.jpg';
import add1 from '../assets/images/add-img-01.jpg';
import add2 from '../assets/images/add-img-02.jpg';
import par1 from '../assets/images/img-pro-01.jpg';
import par2 from '../assets/images/img-pro-02.jpg';
import par3 from '../assets/images/img-pro-03.jpg';
import par4 from '../assets/images/img-pro-04.jpg';



import pro1 from '../assets/images/img-pro-01.jpg';
import pro2 from '../assets/images/img-pro-02.jpg';
import pro3 from '../assets/images/img-pro-03.jpg';

import in1 from '../assets/images/instagram-img-01.jpg';
import in2 from '../assets/images/instagram-img-02.jpg';
import in3 from '../assets/images/instagram-img-03.jpg';
import in4 from '../assets/images/instagram-img-04.jpg';


// import pro4 from '../assets/images/img-pro-01.jpg';
// import pro5 from '../assets/images/img-pro-01.jpg';
// import pro6 from '../assets/images/img-pro-01.jpg';
// import pro7 from '../assets/images/img-pro-01.jpg';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    const [Subproduct1 , setSubproduct1] = useState([])
    const [SortedData , setSortedData] = useState([])
    const [SortedName , setSortedName] = useState([])
    const [SliderPhoto , setSliderPhoto] = useState([])
    const [DataPart2 , setDataPart2] = useState([])
    const [MainCatogories , setMainCatogories] = useState([])
    const [dispaluy53 , setdispaluy53] = useState(true)

    // categoriesName subcategories

    useEffect(() =>{

        window.scrollTo(0, 0)
        // console.log( props.match.params);
        let Categoriesname = props.match.params ;
        setCategoriesname(Categoriesname)

        // const Inter = setInterval(()=>{
            //  if (!JSON.parse(localStorage.getItem("CateProduct")) ){
            //  var data1 = JSON.parse(localStorage.getItem("Cate")) 

        // var Category =  props.match.url.split("/")
        // setCategoriesUrl(data1)
        // var Category1 =  CategoriesUrl.split("-").join(" ")


        fetch("https://d-luxe-housebackend.vercel.app/slider-photo",{
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


        
                    fetch("https://d-luxe-housebackend.vercel.app/TagsSort1111",{
                    method: "GET",
                        headers :  {
                        "Content-Type" : "application/json" , 
                    } ,
                })
                .then(res9=>res9.json())
                .then(res8=>{
                    const dta = res8.filter((res7,i)=>{
                        if(res7.MainCategories ===Categoriesname.categoriesName  && res7.New_Sub_Categories === Categoriesname.subcategories) {
                            console.log(res7);
                            return res7
                        }
                    })
                    // console.log(dta);
                    setSortedData(dta)
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
                    fetch("https://d-luxe-housebackend.vercel.app/AllCategories",{
                    method: "GET",
                        headers :  {
                        "Content-Type" : "application/json" , 
                    } ,
                })
                .then(res4=>res4.json())
                .then(res5=>{
                    let data = res5.filter((res6,i)=>{
                        if (res6.MainCategories === Categoriesname.categoriesName) return res6
                    })
                    setsubCate(data)
                    // console.log(res5,data);
                })



                fetch("https://d-luxe-housebackend.vercel.app/AllProduct",{
                    method: "GET",
                    headers :  {
                    "Content-Type" : "application/json" , 
                } ,
                })
                .then(res7=>res7.json())
                .then(res8=>{
                    setallproduct(res8)
                    const NonActive = res8.filter((res9,i)=>{
                        console.log(res9.status , res9.Product_Catagories , Categoriesname.categoriesName  , res9.Product_Sub_Catagories , Categoriesname.subCate );
                        if(res9.status && res9.Product_Catagories === Categoriesname.categoriesName &&  res9.Product_Sub_Catagories === Categoriesname.subCate ){
                            return res9 
                        }
                    })

                    setSubproduct(NonActive)
                    console.log(NonActive)
                })

        

      






        // fetch("https://d-luxe-housebackend.vercel.app/CategoriesShop",{
        //                         method: "GET",
        //                         headers :  {
        //                             "Content-Type" : "application/json" , 
        //                         }
        //                     })
        //                     .then(res=>res.json())
        //                     .then(res1=>{
        //                         const Pro = res1.filter((res2,i)=>{
        //                             // console.log(res2.Product_Catagories=== Category1,res2.Product_Catagories , " yyy  ", Category1);
        //                             return res2.Product_Catagories === data1
        //                         })
        //                         setProduct(Pro)
        //                         console.log(Pro);
        //                     })
        // // console.log(Catego/ry1);
        //     fetch("https://d-luxe-housebackend.vercel.app/AllCategories",{
        //         method: "GET",
        //             headers :  {
        //             "Content-Type" : "application/json" , 
        //         } ,
        //     })
        //     .then(res4=>res4.json())
        //     .then(res5=>{
        //         setsubCate(res5)
        //         console.log(res5);
        //     })

        // }
        // else{
        //     var data1 = JSON.parse(localStorage.getItem("Cate")) 

        //     setCategoriesUrl(data1)
            
        //     const Pro = JSON.parse(localStorage.getItem("CateProduct"))
        //                             setProduct(Pro)
        //                             console.log(Pro);
        //         fetch("https://d-luxe-housebackend.vercel.app/AllCategories",{
        //             method: "GET",
        //                 headers :  {
        //                 "Content-Type" : "application/json" , 
        //             } ,
        //         })
        //         .then(res4=>res4.json())
        //         .then(res5=>{
        //             setCategories(res5)
        //             // console.log(res1);
        //         })
        // }
       
        // },1000)
       
    // return () => clearInterval(Inter);

},[])


const savethedetailproduct = (data) =>{
    localStorage.setItem("Data" , JSON.stringify(data) )
    console.log(data);
 }
// useEffect(() => {
  
//     return () => {
//         clearInterval()
//     }
//   }, [])



const SortData1 = (a ,b) =>{
            setFal1(false)

          const Pro6 = Product.sort((a, b)=> {
                return parseFloat(a.Product_Price) - parseFloat(b.Product_Price)  
                
            });
            setProduct1(Pro6)
            setFal(true)
            console.log(Product1);



            
}
const SortData2 = (a ,b) =>{
    setFal(false)
          const Pro6 = Product.sort((a, b)=> {
            var nameA = a.Product_Name.toUpperCase(); 
            var nameB = b.Product_Name.toUpperCase(); 
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
            });
            setProduct2(Pro6)
            setFal1(true)
            console.log(Product2);



            
}


const ViewAtDetails = ()=>{
    // console.log("fddddddddddddddddd")
   let data1 =  document.getElementById("view-at-hover")
   data1.setAttribute("class" , "hover-at-view")
}

const NoViewAtDetails = ()=>{
    // console.log("fddddddddddddddddd")
   let data1 =  document.getElementById("view-at-hover")
   data1.removeAttribute("class")
}

// const setSortPrice = (e)=>{
//     SortedName.push(e)
//     console.log(e);
//     if (e === "Low"){
//         const Pro6 = Subproduct.sort((a, b)=> {
//                 return parseFloat(a.Product_Price) - parseFloat(b.Product_Price)  
                
//             });
//             setSubproduct(Pro6)

//     }
//     if (e === "A"){
//         const Pro6 = Subproduct.sort((a, b)=> {
//             var nameA = a.Product_Name.toUpperCase(); 
//             var nameB = b.Product_Name.toUpperCase(); 
//             if (nameA < nameB) {
//                 return -1;
//             }
//             if (nameA > nameB) {
//                 return 1;
//             }

//             return 0;
//             });
//             console.log(Pro6);
//             setSubproduct(Pro6)

//     }
//     if (fal)
//     setFal(true)
//     else
//     setFal(false)
// }




const sortedAlgo = (e)=>{
    let d = false
    let da = 0
    SortedName.map((res9,a)=>{
        if(res9 === e){
            d = true
            da = a
        }
    })
    if(d){
        SortedName.splice(da,1)
    }
    else{
        SortedName.push(e)
    }
    fetch("https://d-luxe-housebackend.vercel.app/AllProduct",{
                    method: "GET",
                    headers :  {
                    "Content-Type" : "application/json" , 
                } ,
                })
                .then(res7=>res7.json())
                .then(res8=>{
                    setallproduct(res8)
                    const NonActive = res8.filter((res9,i)=>{
                        // console.log(res9.status , res9.Product_Catagories , CategoriesName.categoriesName  ,res9.Product_Sub_Catagories , Categoriesname.subcategories);
                        if(res9.status && res9.Product_Catagories === CategoriesName.categoriesName){
                            return res9 
                        }
                    })
                
    if(SortedName.length > 0){
        let Coa = []
        SortedName.map((res22,x)=>{
      console.log(res22,SortedName)
//    console.log(Subproduct)
   const Sort = NonActive.filter((res,i)=>{
        res.Product_Name.split(" ").map((res1,i)=>{
            // console.log(res1)
            if (res1 === res22){
                Coa.push(res)
            }
        })
        res.Product_Title.split(" ").map((res1,i)=>{
            // console.log(res1)
            if (res1 === res22){
                Coa.push(res)
            }
        })
        
            res.tags.map((res1,i)=>{
                if (res1 === res22){
                    // console.log("true")
                    Coa.push(res)
                }
            })
        // }
   })  
    })
     let uniq = [...new Set(Coa)];

   console.log(uniq);
   setSubproduct(uniq)
}
else{
        setSubproduct(NonActive)
    }
   
  })
}














// const addtocartproduct = (...data111) =>{
//     //    localStorage.setItem("Data" , JSON.stringify(data) )
//        console.log(data111);


       




  
//                 document.getElementById("myDi").style.visibility = "visible"
//                 setTimeout(()=>{
//                 document.getElementById("myDi").style.visibility = "hidden"

//                 },1000)
//                 if (data111[0].Product_Price_Discounted === null){
//                   const data =  {...data111[0] ,
//                       Percentage : 0,
//                       DeliveryStatus : "Pending",
//                       Pieces :1 ,
//                       Total_Product_Price  : data111[0].Product_Price *1 }
//                   var data1 = JSON.parse(localStorage.getItem("Cart")) 
//                   if (data1){
//                   var data3 = data1.map((item) => {
//                       if(item._id === data._id ){
//                           console.log("double");
//                   ;                   localStorage.setItem("double",JSON.stringify(true))
//                   return {...item,
//                       Pieces :1 + item.Pieces,
//                       Total_Product_Price  : (data111[0].Product_Price *1 )+ item.Total_Product_Price}
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
//                   else if (data111[0].Product_Price_Discounted){
//                   const data =  {...data111[0] ,
//                       Percentage : 0,
//                       DeliveryStatus : "Pending",
//                       Pieces :1 ,
//                       Total_Product_Price  : data111[0].Product_Price_Discounted *1 }
//                   var data1 = JSON.parse(localStorage.getItem("Cart")) 
//                   if (data1){
//                   var data3 = data1.map((item) => {
//                       if(item._id === data._id ){
//                           console.log("double");
//                   ;                   localStorage.setItem("double",JSON.stringify(true))
//                   return {...item,
//                       Pieces :1 + item.Pieces,
//                       Total_Product_Price  : (data111[0].Product_Price_Discounted *1 )+ item.Total_Product_Price}
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
//                   else{

//                   }
                  
//                   }
                  













    
    
    const setDisplayBlock = ()=>{
        // console.log("fddddddddddddddddd")
       let data1 =  document.getElementById("dispaly-block")
       if(data1.style.display === "none"){
        data1.style.display = "block"
       }
       else{
        data1.style.display = "none"
       }
    }


    const setSortPrice1 = (e)=>{
      setdispaluy53(!dispaluy53)
      if(Subproduct.length !== 0){

        SortedName.push(e)
        console.log(e,Subproduct);
        if (e === "Low"){
            const Pro6 = Subproduct.sort(function (a, b) {
                    return parseFloat(a.Product_Price) - parseFloat(b.Product_Price)  
                  });
                  console.log(Pro6);
                  let reversed_array = [];
                  Pro6.forEach((element) => {
                    reversed_array.unshift(element);
                });
                  console.log(Pro6,reversed_array)
                  setSubproduct(reversed_array)
                  setSubproduct(Pro6)
                  setdispaluy53(!dispaluy53)
                  setdispaluy53(!dispaluy53)
    
        }
        if (e === "High"){
            const Pro6 = Subproduct.sort((a, b)=> {
                    return parseFloat(b.Product_Price) - parseFloat(a.Product_Price)  
                    
                });
              //   let reversed_array = [];
              //   Pro6.forEach((element) => {
              //     reversed_array.unshift(element);
              // });
              //   console.log(Pro6,reversed_array)
                setSubproduct(Pro6)
                setdispaluy53(!dispaluy53)
                setdispaluy53(!dispaluy53)

        }
        if (e === "A"){
            const Pro6 = Subproduct.sort((a, b)=> {
                var nameA = a.Product_Name.toUpperCase(); 
                var nameB = b.Product_Name.toUpperCase(); 
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
    
                return 0;
                });
                console.log(Pro6);
                setSubproduct(Pro6)
                
              }
              
              setSubproduct1([])
              setdispaluy53(!dispaluy53)

            }
            else{
        
                SortedName.push(e)
                console.log(e);
                if (e === "Low"){
                    const Pro6 = Subproduct.sort((a, b)=> {
                            return parseFloat(b.Product_Price) - parseFloat(a.Product_Price)  
                            
                        });
                        setSubproduct1(Pro6)
            
                }
                if (e === "High"){
                    const Pro6 = Subproduct.sort((a, b)=> {
                            return parseFloat(b.Product_Price) - parseFloat(a.Product_Price)  
                            
                        });
                        setSubproduct1(Pro6.reverse())
            
                }
                if (e === "A"){
                    const Pro6 = Subproduct.sort((a, b)=> {
                        var nameA = a.Product_Name.toUpperCase(); 
                        var nameB = b.Product_Name.toUpperCase(); 
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
            
                        return 0;
                        });
                        console.log(Pro6);
                        setSubproduct1(Pro6)
                        
                      }
                      
                      
                      setSubproduct([])
                    }
                    setdispaluy53(!dispaluy53)

                  }
  

  
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

        return (
            <div>
                     {/* {Subproduct.length === 0&& SliderPhoto.length === 0?
                        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
        className="loader-1"
        // style={{position : "fixed",    left: "35%",top:"20%",zIndex: "9999"}}
      /> 
      :""
} */}


<center>
            <div className="pop-up-1 dis-off" id="myDi">
                <h1>Product Updated in Cart</h1>
            </div> 
        </center>
        <div>


        {/* End Top Search */}
        {/* Start All Title Box */}
        <div className="all-title-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 style={{textTransform  : "uppercase"}}>{CategoriesName.categoriesName}</h2>
                <ul className="breadcrumb" style={{background :"black"}}>
                  <li className="breadcrumb-item"><a href="#">Home /</a></li>
                  <li className="breadcrumb-item active" style={{color :"white"}}>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End All Title Box */}
        {/* Start Shop Page  */}
        <div className="shop-box-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                <div className="right-product-box">
                  <div className="product-item-filter row">
                    <div className="col-12 col-sm-8 text-center text-sm-left">
                      <div className="toolbar-sorter-right">
                        <span>Sort by </span>
                        <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD" style={{width : "110px"}} onChange={(e)=>setSortPrice1(e.target.value)}>
                          <option data-display="Select">Nothing</option>
                          {/* <option value={1}>Popularity</option> */}
                          <option value="Low" onClick={()=>setSortPrice1("Low")}>Low → High</option>
                          <option value="High" onClick={()=>setSortPrice1("High")}>High → Low</option>
                          <option value="A" onClick={()=>setSortPrice1("A")}>A → Z</option>
                          {/* <option value={4}>Best Selling</option> */}
                        </select>
                      </div>
                      <p>Showing {Subproduct.length} results</p>
                    </div>
                    
                  </div>
                  <div className="product-categorie-box">
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                        <div className="row">
                        {Subproduct.length !== 0 ? Subproduct.map((res,i)=>{
                          if(res.Price[0]){
                            return (
                              <div className="col-lg-4 col-md-6 special-grid best-seller" style={{cursor : "pointer"}}>
                            <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                              <div className="box-img-hover" >
                                
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
                            <div className="col-lg-4 col-md-6 special-grid best-seller" style={{cursor : "pointer"}}>
                            <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                              <div className="box-img-hover" >
                                <div className="type-lb">
                                  <p className="sale" style={{background :"rgb(78 90 85)"}}>Sale
        
                                  {res.Product_Price_Discounted ?
                                                            <span> {(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % </span>
                                                            : ""
                                                        }
                                  </p>
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
                    // return (

                    //   <div className="col-lg-4 col-md-6 special-grid best-seller">
                    //   <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                    //     <div className="box-img-hover" >
                    //       <div className="type-lb">
                    //         <p className="sale" style={{background :"rgb(78 90 85)"}}>Sale
  
                    //         {res.Product_Price_Discounted ?
                    //                                   <span> {(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % </span>
                    //                                   : ""
                    //                               }
                    //         </p>
                    //       </div>
                    //       <img src={res.Product_Image_Upload} className="img-fluid" alt="Image" style={{maxWidth: "100%",maxHeight: "300px",minHeight: "250px",objectFit: "contain"}} onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}/>
                    //       <div className="mask-icon"   onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/all-products/"+res.Product_Name+"/"+res._id)}>
                           
                    //         <a className="cart" style={{background :"rgb(78 90 85)"}}>Read more</a>
  
                    //       </div>
                    //     </div>
                    //     <div className="why-text">
                    //       <h4 onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}>{res.Product_Name}</h4>
                    //       {res.Product_Price_Discounted ? 
                    //           <>
                    //       <p style={{fontWeight: "bold",  color : "black"}}>Rs. {res.Product_Price_Discounted}
                    //       <span style={{marginLeft:"10px" , color : "red"   , textDecoration: "line-through"}}>Rs.{res.Product_Price}</span>
                    //       <span style={{color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                    //       </p>
                    //           </>
  
                    //           :
                    //           <p style={{fontWeight: "bold",  color : "black"}}>Rs. {res.Product_Price}
                    //       <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                    //       </p>
  
                    //       }
                    //     </div>
                    //   </div>
                    // </div>
                    // )
                  })

                  : ""
                  }
                        {Subproduct1.length !== 0 ? Subproduct1.map((res,i)=>{
                    return (
                      <div className="col-lg-4 col-md-6 special-grid best-seller">
                      <div className="products-single fix" style={{borderRadius :  "10px",border: "2px solid"}}>
                        <div className="box-img-hover" >
                          <div className="type-lb">
                            <p className="sale" style={{background :"rgb(78 90 85)"}}>Sale
  
                            {res.Product_Price_Discounted ?
                                                      <span> {(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % </span>
                                                      : ""
                                                  }
                            </p>
                          </div>
                          <img src={res.Product_Image_Upload} className="img-fluid" alt="Image" style={{maxWidth: "100%",maxHeight: "300px",minHeight: "250px",objectFit: "contain"}} onClick={()=>props.history.push("/categories/"+res.Product_Catagories+"/"+"all-products/"+res.Product_Name+"/"+res._id)}/>
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
                          <p style={{fontWeight: "bold",  color : "black"}}>Rs. {res.Product_Price_Discounted}
                          <span style={{marginLeft:"10px" , color : "red"   , textDecoration: "line-through"}}>Rs.{res.Product_Price}</span>
                          <span style={{color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
                              </>
  
                              :
                              <p style={{fontWeight: "bold",  color : "black"}}>Rs. {res.Product_Price}
                          <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
  
                          }
                        </div>
                      </div>
                    </div>
                    )
                  })

                  : ""
                  }
                    
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                <div className="product-categori">
                  <div className="search-product">
                    <form action="#">
                      <input className="form-control" placeholder="Search here..." type="text" />
                      <button type="submit"> <i className="fa fa-search" /> </button>
                    </form>
                  </div>
                  <div className="filter-sidebar-left">
                    <div className="title-left">
                      <h3>Categories</h3>
                    </div>
                    {MainCatogories.map((res,i)=>{
                      return (

                            <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                              <div className="list-group-collapse sub-men">
                                <a className="list-group-item list-group-item-action" a href={"/categories/"+res.MainCategories+"/all-products"} data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">{res.MainCategories} 
                                </a>
                                <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                                  <div className="list-group">
                                    {
                                      subCate.map((res1,j)=>{
                                        if(res1.MainCategories === res.MainCategories){
                                          return (
                                            <a href={"/categories/"+res.MainCategories+"/all-products"} target='_blank' className="list-group-item list-group-item-action active">{res.CategoriesName}</a>
                                          )
                                        }
                                      })


                                    }
                                    {/* <a href="#" className="list-group-item list-group-item-action">Fruits 2 <small className="text-muted">(10)</small></a>
                                    <a href="#" className="list-group-item list-group-item-action">Fruits 3 <small className="text-muted">(10)</small></a>
                                    <a href="#" className="list-group-item list-group-item-action">Fruits 4 <small className="text-muted">(10)</small></a>
                                    <a href="#" className="list-group-item list-group-item-action">Fruits 5 <small className="text-muted">(20)</small></a> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                      )
                    })

                    }

                  </div>
                  {/* <div className="filter-price-left">
                    <div className="title-left">
                      <h3>Price</h3>
                    </div>
                    <div className="price-box-slider">
                        <input type="range"  min="0" max="10000"  />
                      <p>
                        <button className="btn hvr-hover" type="submit">Filter</button>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Shop Page */}
        {/* Start Instagram Feed  */}
        {/* <div className="instagram-box">
          <div className="main-instagram owl-carousel owl-theme">
            <div className="item">
              <div className="ins-inner-box">
                <img src={in1} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in2} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in3} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in4} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in1} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in2} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in3} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src={in4} alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-09.jpg" alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="ins-inner-box">
                <img src="images/instagram-img-05.jpg" alt="" />
                <div className="hov-in">
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Instagram Feed  */}
      </div>
     
            <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>↑</a>
       
      </div>
        )
    }



export default SubCategoriesProduct;