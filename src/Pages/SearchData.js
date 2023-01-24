import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import swal from 'sweetalert';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const SearchData = (props) =>{
    const [Product , setProduct] = useState([])
    const [Product1 , setProduct1] = useState([])
    const [Product2 , setProduct2] = useState([])
    const [Categories , setCategories] = useState([])
    const [fal , setFal] = useState(false)
    const [fal1 , setFal1] = useState(false)
    const [SortedData , setSortedData] = useState([])
    const [SortedName , setSortedName] = useState([])
    const [MainCatogories , setMainCatogories] = useState([])
    const [DataPart2 , setDataPart2] = useState([])
    const [Subproduct , setSubproduct] = useState([])
    const [Subproduct1 , setSubproduct1] = useState([])
    const [dispaluy53 , setdispaluy53] = useState(true)

    useEffect(() =>{
        window.scrollTo(0, 0)

        var data2 = JSON.parse(localStorage.getItem("SearchData")) 
        
            setProduct(data2)
                    
            fetch("https://d-luxe-housebackend.vercel.app/MainCatogories",{
                method: "GET",
                    headers :  {
                    "Content-Type" : "application/json" , 
                } ,
            })
            .then(res4=>res4.json())
            .then(res5=>{
                setCategories(res5)
                setMainCatogories(res5)
                // console.log(res1);
            })


            fetch("https://d-luxe-housebackend.vercel.app/TagsSortArrival1111",{
                method: "GET",
                    headers :  {
                    "Content-Type" : "application/json" , 
                } ,
            })
            .then(res9=>res9.json())
            .then(res8=>{
                // const dta = res8.filter((res7,i)=>{
                //     if(res7.MainCategories ===Categoriesname.categoriesName  && res7.New_Sub_Categories === Categoriesname.subcategories) {
                //         console.log(res7);
                //         return res7
                //     }
                // })
                // console.log(dta);
                setSortedData(res8)
            })
 const da = setInterval(()=>{
             var data2 = JSON.parse(localStorage.getItem("SearchData")) 
            setProduct(data2)
        },3000)
    return () => clearInterval(da);


},[])






const savethedetailproduct = (data) =>{
    localStorage.setItem("Data" , JSON.stringify(data) )
    console.log(data);
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


// const cate =(Categories) =>{
//     var Cat1 = Categories.split(" ").join("-")

//     localStorage.setItem("Cate" , JSON.stringify(Categories) )
    
//     setTimeout(()=>{
//         props.history.push(`/shop/categories/${Cat1}`)
//     },1500)
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
                    // setallproduct(res8)
                    const NonActive = res8.filter((res9,i)=>{
                        // console.log(res9.status , res9.Product_Catagories , CategoriesName.categoriesName  ,res9.Product_Sub_Catagories , Categoriesname.subcategories);
                        if(res9.status && res9.Arrival){
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
   setProduct(uniq)
   localStorage.setItem("SearchData",JSON.stringify(uniq))

}
else{
    setProduct(NonActive)
    localStorage.setItem("SearchData",JSON.stringify(NonActive))

    }
   
  })
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
  
    const setSortPrice = (e)=>{
        // setFal(false)
        SortedName.push(e)
        console.log(e);
        if (e === "Low"){
            const Pro6 = Product.sort((a, b)=> {
                    return parseFloat(a.Product_Price) - parseFloat(b.Product_Price)  
                    
                });
                setProduct(Pro6)

        }
        if (e === "A"){
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
                console.log(Pro6);
                setProduct(Pro6)

        }
        setFal(true)
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






        {/* End Top Search */}
        {/* Start All Title Box */}
        <div className="all-title-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Search Product</h2>
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
                          <option value="A" onClick={()=>setSortPrice1("A")}>A → Z</option>
                          {/* <option value={4}>Best Selling</option> */}
                        </select>
                      </div>
                      <p>Showing {Product.length} results</p>
                    </div>
                    
                  </div>
                  <div className="product-categorie-box">
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                        <div className="row">
                        {Product.length !== 0 ? Product.map((res,i)=>{
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
                                  
                                    
                                  </div>
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
          </div>
        </div>

            </div>
        )
    }

export default SearchData
