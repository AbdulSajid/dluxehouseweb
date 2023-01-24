import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import categ from '../assets/images/cate.jpeg';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import women from '../assets/images/women.jpg';
import u1 from '../assets/images/u1.jfif';

const SchoolClassesCategoriesProduct = (props)=> {
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

    // categoriesName subcategories

    useEffect(() =>{

        window.scrollTo(0, 0)
        console.log( props.match.params);
        let Categoriesname = props.match.params ;
        setCategoriesname(Categoriesname)

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

        
                    fetch("https://database-student-1-stop.herokuapp.com/TagsSort1111",{
                    method: "GET",
                        headers :  {
                        "Content-Type" : "application/json" , 
                    } ,
                })
                .then(res9=>res9.json())
                .then(res8=>{
                    const dta = res8.filter((res7,i)=>{
                        if(res7.MainCategories ===Categoriesname.categoriesName  && res7.New_Sub_Categories === Categoriesname.Classsessubcategories) {
                            console.log(res7);
                            return res7
                        }
                    })
                    console.log(dta);
                    setSortedData(dta)
                })

                    fetch("https://database-student-1-stop.herokuapp.com/AllCategories",{
                    method: "GET",
                        headers :  {
                        "Content-Type" : "application/json" , 
                    } ,
                })
                .then(res4=>res4.json())
                .then(res5=>{
                    let data = res5.filter((res6,i)=>{
                        if (res6.MainCategories === Categoriesname.SchoolCoursecategoriesName) return res6
                    })
                    setsubCate(data)
                    console.log(res5,data);
                })



                fetch("https://database-student-1-stop.herokuapp.com/AllProduct",{
                    method: "GET",
                    headers :  {
                    "Content-Type" : "application/json" , 
                } ,
                })
                .then(res7=>res7.json())
                .then(res8=>{
                    setallproduct(res8)
                    const NonActive = res8.filter((res9,i)=>{
                        
                        console.log(res9.status , res9.Product_Catagories , Categoriesname.SchoolCoursecategoriesName  ,res9.Product_Sub_Catagories , Categoriesname.Classsessubcategories,res9.Course_Sub_Catagories , Categoriesname.ClasssessubcategoriesProduct);
                        if(res9.status && res9.Product_Catagories === Categoriesname.SchoolCoursecategoriesName  && res9.Product_Sub_Catagories === Categoriesname.Classsessubcategories && res9.Course_Sub_Catagories === Categoriesname.ClasssessubcategoriesProduct){
                            return res9 
                        }
                    })

                    setSubproduct(NonActive)
                    console.log(res8)
                })

        

      






        // fetch("https://database-student-1-stop.herokuapp.com/CategoriesShop",{
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
        //     fetch("https://database-student-1-stop.herokuapp.com/AllCategories",{
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
        //         fetch("https://database-student-1-stop.herokuapp.com/AllCategories",{
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

const setSortPrice = (e)=>{
    SortedName.push(e)
    console.log(e);
    if (e === "Low"){
        const Pro6 = Subproduct.sort((a, b)=> {
            return parseFloat(a.Product_Price) - parseFloat(b.Product_Price)  
                
            });
            setSubproduct(Pro6)
            
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
    setFal(true)
}




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
    fetch("https://database-student-1-stop.herokuapp.com/AllProduct",{
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
                        if(res9.status && res9.Product_Catagories === CategoriesName.categoriesName  && res9.Product_Sub_Catagories === CategoriesName.Classsessubcategories&& res9.Course_Sub_Catagories === CategoriesName.ClasssessubcategoriesProduct){
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















const settoBags = (data111) =>{
    //    localStorage.setItem("Data" , JSON.stringify(data) )
       console.log(data111);


       if(data111.ProductCreater !== "60a3c644e4520a12c80a6f52"){
        console.log("yes ");
        fetch("https://database-student-1-stop.herokuapp.com/ChangePercentageInOrder/"+data111.ProductCreater,{
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
    if (data111.Product_Price_Discounted === null){
        const data =  {...data111 ,
                    
                    Percentage : data111.Percentage,
                    DeliveryStatus : "Pending",
                     Pieces :1,
                     Total_Product_Price  : data111.Product_Price *1}
    var data1 = JSON.parse(localStorage.getItem("Cart")) 
    if (data1){
        var data3 = data1.map((item) => {
            if(item._id === data111._id){
                console.log("double");
;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces :1+ item.Pieces,
                    Total_Product_Price  : (data111.Product_Price *1)+ item.Total_Product_Price}
            }
            else{
                console.log("double not match");
                return item
            }

        })
        var data5 =  JSON.parse(localStorage.getItem("double")) 
        // console.log(DataPart2.length, data3.length,data5);
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
    else if (data111.Product_Price_Discounted){
        const data =  {...data111 ,
                    
                    Percentage : data111.Percentage,
                    DeliveryStatus : "Pending",
                     Pieces :1,
                     Total_Product_Price  : data111.Product_Price_Discounted *1}
    var data1 = JSON.parse(localStorage.getItem("Cart")) 
    if (data1){
        var data3 = data1.map((item) => {
            if(item._id === data111._id){
                console.log("double");
;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces :1+ item.Pieces,
                    Total_Product_Price  : (data111.Product_Price_Discounted *1)+ item.Total_Product_Price}
            }
            else{
                console.log("double not match");
                return item
            }

        })
        var data5 =  JSON.parse(localStorage.getItem("double")) 
        // console.log(DataPart2.length, data3.length,data5);
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
    else if (data111.Size_Discounted[0]){
        const data =  {...data111 ,
            Percentage : data111.Percentage,
            DeliveryStatus : "Pending",
            Pieces :1,
            Size : data111.Size[0],
            Product_Price_Discounted : data111.Size_Discounted[0],
            Total_Product_Price  : data111.Size_Discounted[0] *1}
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data111._id &&  item.Size === data111.Size[0]){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
                    return {...item,
                        Pieces :1+ item.Pieces,
                        Total_Product_Price  : (data111.Size_Discounted[0] *1)+ item.Total_Product_Price}
                }
                else{
                    console.log("double not match");
                    return item
                }

            })
            var data5 =  JSON.parse(localStorage.getItem("double")) 
            // console.log(DataPart2.length, data3.length,data5);
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



        
                        const data =  {...data111 ,
                            Percentage : data111.Percentage,
                            DeliveryStatus : "Pending",
                            Pieces :1,
                            Size : data111.Size[0],
                            Product_Price_Discounted : data111.Price[0],
                            Total_Product_Price  : data111.Price[0] *1}
            var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data111._id &&  item.Size === data111.Size[0]){
                    console.log("double");
            ;                   localStorage.setItem("double",JSON.stringify(true))
                    return {...item,
                        Pieces :1+ item.Pieces,
                        Total_Product_Price  : (data111.Price[0] *1)+ item.Total_Product_Price}
                }
                else{
                    console.log("double not match");
                    return item
                }

            })
            var data5 =  JSON.parse(localStorage.getItem("double")) 
            // console.log(DataPart2.length, data3.length,data5);
            var data10 =  JSON.parse(localStorage.getItem("Cart")) 

            if(data10.length=== data3.length && data5){
                console.log("double remove");
                localStorage.removeItem("double")
                localStorage.setItem("Cart" , JSON.stringify(data3) )
              
            }
            else{
                console.log("Differet");
                var data2 = [...data1 , data111]
             
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
                // console.log(data111);
                if (data111.Product_Price_Discounted === null){
                const data =  {...data111 ,
                    Percentage : 0,
                    DeliveryStatus : "Pending",
                    Pieces :1,
                    Total_Product_Price  : data111.Product_Price *1}
                var data1 = JSON.parse(localStorage.getItem("Cart")) 
                console.log(  data1);
                if (data1){
                    console.log(  data111._id);
                var data3 = data1.map((item) => {
                    console.log(item._id , data111._id);
                    if(item._id === data111._id ){
                        console.log("double");
                        ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces :1+ item.Pieces,
                    Total_Product_Price  : (data111.Product_Price *1)+ item.Total_Product_Price}
                }
                else{
                console.log("double not match");
                return item
                }

            })
                var data5 =  JSON.parse(localStorage.getItem("double")) 
                // console.log(DataPart2.length, data3.length,data5);
                var data10 =  JSON.parse(localStorage.getItem("Cart")) 

                if(data10.length=== data3.length && data5){
                console.log("double remove");
                localStorage.removeItem("double")
                localStorage.setItem("Cart" , JSON.stringify(data3) )

                }
                else{
                console.log("Differet");
                var data2 = [...data1 , data111]

                localStorage.setItem("Cart" , JSON.stringify(data2) )
                }
            }
                else{
                console.log("1");
                localStorage.setItem("Cart" , JSON.stringify([data]) )

                }

                }
                else if (data111.Product_Price_Discounted){
                const data =  {...data111 ,
                    Percentage : 0,
                    DeliveryStatus : "Pending",
                    Pieces :1,
                    Total_Product_Price  : data111.Product_Price_Discounted *1}
                    var data1 = JSON.parse(localStorage.getItem("Cart")) 
                console.log(  data1);
                if (data1){
                    console.log(  data111._id);
                var data3 = data1.map((item) => {
                    console.log(item._id , data111._id);
                    if(item._id === data111._id ){
                        console.log("double");
                ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces :1+ item.Pieces,
                    Total_Product_Price  : (data111.Product_Price_Discounted *1)+ item.Total_Product_Price}
                }
                else{
                console.log("double not match");
                return item
                }
                
                })
                var data5 =  JSON.parse(localStorage.getItem("double")) 
                // console.log(DataPart2.length, data3.length,data5);
                var data10 =  JSON.parse(localStorage.getItem("Cart")) 

                if(data10.length=== data3.length && data5){
                console.log("double remove");
                localStorage.removeItem("double")
                localStorage.setItem("Cart" , JSON.stringify(data3) )

            }
                else{
                console.log("Differet");
                var data2 = [...data1 , data111]

                localStorage.setItem("Cart" , JSON.stringify(data2) )
            }
                }
                else{
                console.log("1");
                localStorage.setItem("Cart" , JSON.stringify([data]) )

            }

        }
                else if (data111.Size_Discounted[0]){
                    const data =  {...data111 ,
                        Percentage : 0,
                        DeliveryStatus : "Pending",
                        Pieces :1,
                        Size : data111.Size[0],
                        Product_Price_Discounted : data111.Size_Discounted[0],
                        Total_Product_Price  : data111.Size_Discounted[0] *1}
                        var data1 = JSON.parse(localStorage.getItem("Cart")) 
            if (data1){
            var data3 = data1.map((item) => {
                if(item._id === data111._id &&  item.Size === data111.Size[0]){
                    console.log("double");
                    ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                    Pieces :1+ item.Pieces,
                    Total_Product_Price  : (data111.Size_Discounted[0] *1)+ item.Total_Product_Price}
            }
            else{
                console.log("double not match");
                return item
            }

        })
            var data5 =  JSON.parse(localStorage.getItem("double")) 
            // console.log(DataPart2.length, data3.length,data5);
            var data10 =  JSON.parse(localStorage.getItem("Cart")) 

            if(data10.length=== data3.length && data5){
            console.log("double remove");
            localStorage.removeItem("double")
            localStorage.setItem("Cart" , JSON.stringify(data3) )

            }
            else{
            console.log("Differet");
            var data2 = [...data1 , data111]

            localStorage.setItem("Cart" , JSON.stringify(data2) )
        }
            }
            else{
            console.log("1");
            localStorage.setItem("Cart" , JSON.stringify([data]) )

            }
            
                }
                else{
                    

                    

                    const data =  {...data111 ,
                            Percentage : 0,
                            DeliveryStatus : "Pending",
                            Pieces :1,
                            Size : data111.Size[0],
                            Product_Price_Discounted : data111.Price[0],
                            Total_Product_Price  : data111.Price[0] *1}
                var data1 = JSON.parse(localStorage.getItem("Cart")) 
                if (data1){
                var data3 = data1.map((item) => {
                    if(item._id === data111._id &&  item.Size === data111.Size[0]){
                        console.log("double");
                ;                   localStorage.setItem("double",JSON.stringify(true))
                return {...item,
                        Pieces :1+ item.Pieces,
                        Total_Product_Price  : (data111.Price[0] *1)+ item.Total_Product_Price}
                }
                else{
                    console.log("double not match");
                    return item
                }

            })
                var data5 =  JSON.parse(localStorage.getItem("double")) 
                // console.log(DataPart2.length, data3.length,data5);
                var data10 =  JSON.parse(localStorage.getItem("Cart")) 
                
                if(data10.length=== data3.length && data5){
                console.log("double remove");
                localStorage.removeItem("double")
                localStorage.setItem("Cart" , JSON.stringify(data3) )

                }
                else{
                console.log("Differet");
                var data2 = [...data1 , data111]

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









        return (
            <div>
             {Subproduct.length === 0 && SliderPhoto.length === 0?
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
}
<center>
            <div className="pop-up-1 dis-off" id="myDi">
                <h1>Product Updated in Cart</h1>
            </div> 
           
        </center>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">{CategoriesName.SchoolCoursecategoriesName}</strong> <span className="mx-2 mb-0">/</span><strong>{CategoriesName.Classsessubcategories}</strong><span className="mx-2 mb-0">/</span><strong>Products</strong> </div>
                        </div>
                    </div>
                </div>

                <div className="site-section">
                    <div className="container-fuild" style={{width : "94%" , margin : "0px auto"}}>

                        <div className="row mb-5">
                            <div className="col-md-9 order-2">

                                <div className="row">
                                    <div className="col-md-12 mb-5">
                                        <div className="float-md-left mb-4"><h2 className="text-black h5">Shop All</h2></div>
                                     </div>
                                </div>
                                <div className="row mb-5">
                                   {
                                    Subproduct.length > 0 ?
                                    Subproduct.map((res,i)=>{
                                        return (
                                            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                                <div className="block-4 text-center hover-product-card">
                                                <span style={{margin : "10px 4px" , color : "red", fontSize : "20px" , fontWeight : "bold",textAlign : "left"}}>
                                                {res.Size_Discounted[0] ?
                                                    <span>{(100 - ( res.Size_Discounted[0]*100) /  res.Price[0]).toFixed(2)}  % off</span>
                                                    : 
                                                res.Product_Price_Discounted ?
                                                    <span>{(100 - (res.Product_Price_Discounted *100) /  res.Product_Price).toFixed(2)}  % off</span>
                                                    : ""
                                                }
                                                </span>
                                                    <figure className="block-4-image">
                                                    {/* <Link to='/detail'> */}
                                                    <Link to={"/main-categories/"+CategoriesName.SchoolCoursecategoriesName+"/"+CategoriesName.Classsessubcategories+"/"+CategoriesName.ClasssessubcategoriesProduct+"/"+res._id+"/"+res.Product_Name}><img src={res.Product_Image_Upload}  style={{height : "210px" , width : "200px" }}  alt="Image placeholder" className="img-fluid" /></Link>
                                                    {/* </Link> */}
                                                    </figure>
                                                    {/* <div className="block-4-text p-4" onMouseEnter={()=>ViewAtDetails()} onMouseLeave={()=>NoViewAtDetails()} > */}
                                                    <div className="block-4-text p-4">
                                                        <h3><Link to={"/main-categories/"+CategoriesName.SchoolCoursecategoriesName+"/"+CategoriesName.Classsessubcategories+"/"+CategoriesName.ClasssessubcategoriesProduct+"/"+res._id+"/"+res.Product_Name}> {res.Product_Name}</Link></h3>
                                                        <p className="mb-0">{res.Product_Title}</p>
                                                        {
                                                            res.Size_Discounted[0] ?
                                                            <div style={{display : "flex",justifyContent : 'center',fontSize : "21px"}}>
                                                            <p  style={{color  : "black"  }}>Rs: {res.Size_Discounted[0]}</p>
                                                            <div style={{width : "10px"}}></div>
                                                            <p style={{color  : "grey"  }}> <b><s>Rs: {res.Price[0]}</s></b>  </p>
                                                            <div style={{width : "10px"}}></div>
                                                            <p  style={{color  : "black"  }}>Size: {res.Size[0]}</p>
                                                            </div>
                                                            :
                                                            
                                                            !res.Product_Price_Discounted ?
                                                                <>
                                                            <p style={{color  : "grey"  }}> <b>Rs : {res.Product_Price}</b>  </p>
                                                            <div style={{width : "10px"}}></div>
                                                            </>
                                                                                                                  
                                                        :
                                                            res.Product_Price_Discounted ? 
                                                        <div style={{display : "flex",justifyContent : 'center',fontSize : "21px"}}>
                                                            <p  style={{color  : "black"  }}>Rs: {res.Product_Price_Discounted}</p>
                                                            <div style={{width : "10px"}}></div>
                                                            <p style={{color  : "grey"  }}> <b><s>Rs: {res.Product_Price}</s></b>  </p>
                                                        </div>
                                                        : 
                                                        <p style={{color  : "black"  }}>{res.Product_Price}</p>

                                                        }
                                                        {res.isStock && res.isStock !== undefined 
                                                ?
                                                <h2 style={{color : "red"}}>Out Of Stock</h2>
                                                :
                                                        <div onClick={()=>settoBags(res)} className="btn btn-dark btn-group-lg view-btn-detail">Add To Bag</div>
                                                        }
                                                        {/* <Link to={"/main-categories/"+CategoriesName.SchoolCoursecategoriesName+"/"+CategoriesName.Classsessubcategories+"/"+CategoriesName.ClasssessubcategoriesProduct+"/"+res._id+"/"+res.Product_Name} ><div className="btn btn-dark btn-group-lg view-btn-detail">View</div></Link> */}
                                                        {/* <Link to={"/categories/"+CategoriesName.categoriesName+"/"+CategoriesName.subcategories+"/"+res._id+"/"+res.Product_Name} onClick={()=>savethedetailproduct(res)} id="view-at-hover" ><div className="btn btn-dark btn-group-lg view-btn-detail">View</div></Link> */}

                                                    </div>
                                                </div>
                                            </div> 
                                        )
                                    }) 
                                    :
                                     <span style={{margin:  "auto"}}>
                                        <h3>No Any Product</h3>
                                    </span>
                                   }
                                    
                                   
                                   
                                   
                                   
                                   
                                    {/* {!fal ? !fal1 ? Product.length >= 1 ? Product.map((res,i)=>{
                                        var Cat = res.Product_Catagories.split(" ").join("-")
                                        var Cat1 = res.Product_Name.split(" ").join("-")
                                        return(
                                            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                                <div className="block-4 text-center border">
                                                    <figure className="block-4-image">
                                                    <Link to='/detail'>
                                                    <img src={u1}  style={{height : "210px" , width : "200px" }}  alt="Image placeholder" className="img-fluid" />
                                                    </Link>
                                                    </figure>
                                                    <div className="block-4-text p-4">
                                                        <h3><Link to='/shop'>{res.Product_Name}</Link></h3>
                                                        <p className="mb-0">{res.Product_Title}</p>
                                                        <p className="text-primary font-weight-bold">{res.Product_Price}</p>
                                                        <Link to="/categories/uniform/Albadar/class1"    onClick={()=>savethedetailproduct(res)}><div className="btn btn-sm btn-primary">View</div></Link>

                                                    </div>
                                                </div>
                                            </div> 

                                        )
                                    }) :        <div className="col-sm-12 col-lg-12 mb-12"><center> <h3> No Search Product</h3></center> </div>

                                      : Product2.map((res,i)=>{
                                        var Cat = res.Product_Catagories.split(" ").join("-")
                                        var Cat1 = res.Product_Name.split(" ").join("-")
                                        return(
                                            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                                <div className="block-4 text-center border">
                                                    <figure className="block-4-image">
                                                    <Link to='/detail'><img src={res.Product_Image_Upload}  style={{height : "210px" , width : "200px" }}  alt="Image placeholder" className="img-fluid" /></Link>
                                                    </figure>
                                                    <div className="block-4-text p-4">
                                                        <h3><Link to='/shop'>{res.Product_Name}</Link></h3>
                                                        <p className="mb-0">{res.Product_Title}</p>
                                                        <p className="text-primary font-weight-bold">{res.Product_Price}</p>
                                                        <Link to="/categories/shoes/products/123"   onClick={()=>savethedetailproduct(res)}><div className="btn btn-sm btn-primary">View</div></Link>

                                                    </div>
                                                </div>
                                            </div> 

                                        )
                                    })            : Product1.map((res,i)=>{
                                        var Cat = res.Product_Catagories.split(" ").join("-")
                                        var Cat1 = res.Product_Name.split(" ").join("-")
                                        return(
                                            <div className="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                                                <div className="block-4 text-center border">
                                                    <figure className="block-4-image">
                                                    <Link to='/detail'><img src={res.Product_Image_Upload}  style={{height : "210px" , width : "200px" }}  alt="Image placeholder" className="img-fluid" /></Link>
                                                    </figure>
                                                    <div className="block-4-text p-4">
                                                        <h3><Link to='/shop'>{res.Product_Name}</Link></h3>
                                                        <p className="mb-0">{res.Product_Title}</p>
                                                        <p className="text-primary font-weight-bold">{res.Product_Price}</p>
                                                        <Link to="/categories/shoes/products/123"   onClick={()=>savethedetailproduct(res)}><div className="btn btn-sm btn-primary">View</div></Link>

                                                    </div>
                                                </div>
                                            </div> 

                                        )
                                    })                                    
                                                                         } */}
                                    


                                </div>
                                {/* <div className="row" data-aos="fade-up">
                                    <div className="col-md-12 text-center">
                                        <div className="site-block-27">
                                            <ul>
                                                <li><a onClick={()=>SortData()}>&lt;</a></li>
                                                <li className="active"><span>1</span></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">&gt;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col-md-3 order-1 mb-5 mb-md-0">
                                <div className="border p-4 rounded mb-4">
                                    <h3 className="mb-3 h6 text-uppercase text-black d-block">Sub Categories</h3>
                                    <ul className="list-unstyled mb-0">
                                    {
                                        subCate.map((res,i)=>{
                                                return( <li className="mb-1" key={i}>
                                                            <Link  className="d-flex">
                                                            {/* <Link  onClick={()=>cate(res.Categories)} className="d-flex"> */}
                                                                <span>{res.CategoriesName}</span> 
                                                                {/* <span className="text-black ml-auto">(2,220)</span> */}
                                                            </Link>
                                                        </li>

                                                )

                                            })
                                        }
                                    </ul>
                                </div>
                                <center>
                                    <h3 className="mb-3 h6 text-uppercase text-black display-6" id="display-6" onClick={()=>setDisplayBlock()}>Sort by Default</h3>
                                </center>
                                <div className="dispaly-block" id="dispaly-block">
                                <div className="border p-4 rounded mb-4">
                                    <div className="mb-4">
                                    <div className="border p-4 rounded mb-4">
                                    <div className="mb-4">
                                        <h3 className="mb-3 h6 text-uppercase text-black d-block">Sort Filter by </h3>
                                        
                                    </div>




                                       <div className="mb-4">
                                        <h3 className="mb-3 h5 text-uppercase text-black d-block">Price & ALPH</h3>
                                        <input type="checkbox" name="" id="" onChange={()=>setSortPrice(
                                            "Low")}/> Low to High <br/>
                                        <input type="checkbox" name="" id="" onChange={()=>setSortPrice("A")}/> A to Z <br/>
                                    </div>
                                    <hr/>
                                    {SortedData.length > 0 ? 
                                        SortedData[0].tagsName.map((res1,h)=>{
                                            if(res1 !== ""){
                                                console.log(res1)
                                             return (
                                                <div className="mb-4">
                                                    <h3 className="mb-3 h5 text-uppercase text-black d-block">{res1}</h3>
                                                    {
                                        SortedData.length > 0 ?
                                                        SortedData[0].tagsCategories[h].map((res3,r)=>{
                                                                console.log(r , h)
                                                                return (
                                                                    <div>
                                                                    <label><input type="checkbox" onChange={()=>sortedAlgo(res3)}/> {res3} </label>
                                                                    </div>


                                                                        )
                                                        
                                                    })
                                                    :""
                                                    }
                                                   
                                                
                                                </div>
                                            )
                                            }
                                            
                                        })
                                       

                                    : ""
                                       
                                    } 
                                    </div>
                                    
                                                         
                                            </div> 
                                      
                                    </div>
                                    
                                </div>
                            
                            </div>
                        </div>



                        {/* <div className="container">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="site-section site-blocks-2">
                                    <div className="row justify-content-center text-center mb-5">
                                        <div className="col-md-7 site-section-heading pt-4">
                                            <h2>Categories</h2>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {Categories && Categories.map((res,i)=>{
                                            var Cat1 = res.Categories.split(" ").join("-")

                                            return(
                                                <div className="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" style={{margin: "10px 0px"}} data-aos="fade" data-aos-delay="">
                                                    <Link className="block-2-item" to={"/shop/categories/"+Cat1} >
                                                        <figure className="image">
                                                            <img src={categ} alt="" className="img-fluid" />
                                                        </figure>
                                                        <div className="text">
                                                            <span className="text-uppercase">Collections</span>
                                                            <h3>{res.Categories}</h3>
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })
                                            
                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
 */}






                        

                    </div>
                </div>
            </div>
        )
    }



export default SchoolClassesCategoriesProduct;