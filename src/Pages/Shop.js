import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import swal from 'sweetalert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// import categ from '../assets/images/cate.jpeg';

// import women from '../assets/images/women.jpg';
// import u1 from '../assets/images/u1.jfif';
// import whatapps from '../assets/images/what.png';

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

// import { RESIZE } from 'video-react/lib/actions/video';


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
    // const [productDetail , setproductDetail] = useState([])
    const [DataPart2 , setDataPart2] = useState([])
    const [Main , setMain] = useState([])

    // categoriesName subcategories

    useEffect(() =>{

        window.scrollTo(0, 0)
        // console.log( props.match.params);
        // let Categoriesname = props.match.params ;
        // setCategoriesname(Categoriesname)

        // const Inter = setInterval(()=>{
            //  if (!JSON.parse(localStorage.getItem("CateProduct")) ){
            //  var data1 = JSON.parse(localStorage.getItem("Cate")) 

        // var Category =  props.match.url.split("/")
        // setCategoriesUrl(data1)
        // var Category1 =  CategoriesUrl.split("-").join(" ")


        fetch("https://tapitdabit-backend.vercel.app/MainCatogories",{
          method: "GET",
           headers :  {
           "Content-Type" : "application/json" , 
       } ,
      })
      .then(res2=>res2.json())
      .then(res3=>{
          console.log(res3);
          setMain(res3)
      })


        
                    fetch("https://tapitdabit-backend.vercel.app/TagsSort1111",{
                    method: "GET",
                        headers :  {
                        "Content-Type" : "application/json" , 
                    } ,
                })
                .then(res9=>res9.json())
                .then(res8=>{
                    // const dta = res8.filter((res7,i)=>{
                    //     // if(res7.MainCategories ===Categoriesname.categoriesName  ) {
                    //         console.log(res7);
                    //         return res7
                    //     }
                    // })
                    console.log(res8);
                    setSortedData(res8[0])
                })

                    fetch("https://tapitdabit-backend.vercel.app/AllCategories",{
                    method: "GET",
                        headers :  {
                        "Content-Type" : "application/json" , 
                    } ,
                })
                .then(res4=>res4.json())
                .then(res5=>{
                    // let data = res5.filter((res6,i)=>{
                    //     if (res6.MainCategories === Categoriesname.categoriesName) return res6
                    // })
                    setsubCate(res5)
                    // console.log(res5,data);
                })



                fetch("https://tapitdabit-backend.vercel.app/AllProduct",{
                    method: "GET",
                    headers :  {
                    "Content-Type" : "application/json" , 
                } ,
                })
                .then(res7=>res7.json())
                .then(res8=>{
                    setallproduct(res8)
                    console.log(res8)
                    const NonActive = res8.filter((res9,i)=>{
                        // console.log(res9.status , res9.Product_Catagories , Categoriesname.categoriesName );
                        if(res9.status  ){
                            return res9 
                        }
                    })

                    setSubproduct(NonActive)
                })

        

      






        // fetch("/CategoriesShop",{
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
        //     fetch("/AllCategories",{
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
        //         fetch("/AllCategories",{
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
        var data1 =  JSON.parse(localStorage.getItem("Cart")) 
        if (data1) setDataPart2(data1)
        
         const Inter = setInterval(()=>{
           
          fetch("https://tapitdabit-backend.vercel.app/AllProduct",{
            method: "GET",
            headers :  {
            "Content-Type" : "application/json" , 
        } ,
        })
        .then(res7=>res7.json())
        .then(res8=>{
           const NonActive = res8.filter((res9,i)=>{
            //    console.log(props.history.location.pathname.split("/")[2],res9.Product_Catagories ,allproduct)
                 if(res9.status  ){
                     return res9 
                 }
             })
             setSubproduct(NonActive)
             })
 
         },1000)
 
     return () => clearInterval(Inter); 

},[])




    const addtocartproduct = (productDetail) =>{
   
      swal("Update!", "Your Item Add in Cart!", "success");

      // document.getElementById("myDi").style.visibility = "visible"
      // setTimeout(()=>{
      // document.getElementById("myDi").style.visibility = "hidden"
    
      // },1000)
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
          swal("Update!", "Your Item Add in Cart!", "success");

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
                            {/* <a href="https://wa.me/923302757197" target="_blank"><img src={whatapps} alt="" style={{position : "fixed" ,zIndex : "999999", top : "80%" , right : "20px",width:"70px",height : "70px"}}/></a> */}

                     {/* {Subproduct.length === 0?
                        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
        className="loader-1"
        // style={{position : "fixed",    left: "35%",top:"20%",zIndex: "9999"}}
      /> 
      :"" */}
}

        <div>
        {/* Product */}
        {/* <br /><br /><br /> */}
        <div className="bg0 m-t-60 p-b-140 mi2"  style={{paddingTop : "30px"}}>
          <div className="container">
            <div className="flex-w flex-sb-m p-b-52">
              <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                
                {Main.map((res,i)=>{
                  return(
                        <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women" style={{padding  : "5px 10px" ,borderRadius : "5px" , margin : "10px 10px"}}>
                          <Link to={"/categories/"+res.MainCategories+"/all-products"}>{res.MainCategories}</Link>
                        </button>

                  )
                })
                  
                }
                
              </div>
              <br />
              <div className="flex-w flex-c-m m-tb-10">
                {/* <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4" id="ss1" onClick={()=>SetDate()}>
                  <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                  <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                  Filter
                </div> */}
                {/* <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search" id="ss3" onClick={()=>SetDate1()}>
                  <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                  <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                  Search
                </div> */}
              </div>
              {/* <div className="flex-w flex-c-m m-tb-10">
                <div className="" id="ss1" onClick={()=>SetDate()}>
                  Filter
                </div>
                <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search" id="ss3" onClick={()=>SetDate1()}>
                  <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
            <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" /> 
                  Search
                </div>
              </div> */}
              {/* Search product */}
              
              {/* Filter */}
              
    
            </div>
            <div className="row isotope-grid">

                {Subproduct.map((res,i)=>{
                    return (
                      <div className="col-lg-3 col-md-6 special-grid best-seller">
                      <div className="products-single fix" style={{borderRadius :  "10px"}}>
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
                          <span style={{color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
                              </>
  
                              :
                              <p style={{fontWeight: "600",  color : "black",fontSize:"19px"}}>Rs. {res.Product_Price}
                          <span style={{marginLeft:"40px" , color : "black"   , textDecoration: "line-through",position: "absolute",right: "20px"}}  onClick={()=>addtocartproduct(res)}><ShoppingCartIcon   style={{marginTop:"-10px" }} /> </span>
                          </p>
  
                          }
                        </div>
                      </div>
                    </div>
                    )
                  })


                  }
             
            </div>
            {/* Load more */}
              {/* <div className="flex-c-m flex-w w-full p-t-0" style={{marginBottom : "40px"}}>
                <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                  Load More
                </a>
              </div> */}
          </div>
        </div>
        
        {/* Back to top */}
        
        
      </div>
      </div>




        )
    }



export default SubCategoriesProduct;


