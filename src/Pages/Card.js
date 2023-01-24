import React, { useState , useEffect } from 'react';

import swal from 'sweetalert';

import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const Card = (props)=> {
    // const [price , setPrice] = useState(1)
    const [cart , setCart] = useState([])
    const [total , settotal] = useState(0)
    const [total1 , settotal1] = useState(0)
    const [price , setPrice] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1])
    const [peice , setpeice] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1])
    const [discount , setdiscount] = useState([])
    const [promo , setpromo] = useState("")
    const [dis , setdis] = useState(true)
    const [totalpro , settotalpro] = useState(0)
    const [discount6 , setdiscount6] = useState({})
    const [total2 , settotal2] = useState(0)


    useEffect(() =>{
        window.scrollTo(0, 0)

        setpromo(JSON.parse(localStorage.getItem("discount")) ? JSON.parse(localStorage.getItem("discount")).name : "")

        fetch("https://d-luxe-housebackend.vercel.app/AllCreateDisCountPrice",{
          method: "GET",
          headers :  {
          "Content-Type" : "application/json" , 
      } ,
      })
      .then(res7=>res7.json())
      .then(res8=>{
       setdiscount(res8)
       let data5 =  JSON.parse(localStorage.getItem("CartPrice")) 
       settotal1(data5)
       settotal2(data5)
      })
      if(JSON.parse(localStorage.getItem("discount")) ){
        setdiscount6(JSON.parse(localStorage.getItem("discount")))
      }
      else{
        setdiscount6({fg : "3"})
      }
       const Inter = setInterval(()=>{
            let data =  JSON.parse(localStorage.getItem("Cart")) 
            if(data)
           setCart(data)
           else      setCart(0)

           let data5 =  JSON.parse(localStorage.getItem("CartPrice")) 
           settotal1(data5)
           settotal2(data5)
          


           if(JSON.parse(localStorage.getItem("discount")) ){
             setdiscount6(JSON.parse(localStorage.getItem("discount")))
            // setdiscount(JSON.parse(localStorage.getItem("discount")))
            var d = document.getElementById("discount")
            var d1 = document.getElementById("discount1")
            if(JSON.parse(localStorage.getItem("discount")).discount > 1){
                d.innerHTML = "Rs " +JSON.parse(localStorage.getItem("discount")).discount
                // document.getElementById("ci11").style.visibility = "visible"
                d1.innerHTML = "Coupon Discount : "
                // settotal1( total1 - JSON.parse(localStorage.getItem("discount")).discount)
            }
            else{
                d.innerHTML = " " +JSON.parse(localStorage.getItem("discount")).discount1 +" % Off"
                d1.innerHTML = "Coupon Discount : "
                // settotal1(total1*JSON.parse(localStorage.getItem("discount").discount1)/100)

            }
        }
        else{
          var d = document.getElementById("discount")

          d.innerHTML = "No Discount" 

        }
        },3000)

        let data =  JSON.parse(localStorage.getItem("Cart")) 
        if(data)
       { 
           setCart(data)
           data.map((res,i)=>{
            peice[i] = res.Pieces
               price[i] = res.Pieces
           })
           console.log(price,peice)
        }
        else      setCart(0)

 if (data) {
            var j = 0
            data.map((item,i)=>{
               j = item.Total_Product_Price + j
            })
            settotal1(j)
            localStorage.setItem("CartPrice" ,JSON.stringify(j))
        }
        else{
            settotal1(0)

        }
        // console.log(total,cart,total1)
        // var t = document.getElementById("subtotal")
        // t.innerHTML = "Rs "+j
        // var f = document.getElementById("total")
        // f.innerHTML = "Rs " +j
      

        return () => {
        //   document.getElementById("get1").classList.remove("is-active");
        //   document.getElementById("get2").style.display = "none";
          clearInterval(Inter);
          updateCard1()
        }

  },[])
  
  const removeDatas = (item) =>{
 
    let data1;
    if(!item.Size){
         data1 = cart.filter((res,i)=>{
            return res._id !== item.id
        })
    }
    else{
         data1 = cart.filter((res,i)=>{
            return res.Size !== item.Size
        })
    }
    localStorage.setItem("Cart" ,JSON.stringify(data1))
        var j = 0
    data1.map((res,i)=>{
         j += res.Total_Product_Price
    })
    if ( j !== 0){
        localStorage.setItem("CartPrice",JSON.stringify( j))
        settotal1(j)
    }
    else{
        localStorage.setItem("CartPrice",JSON.stringify( 0))
        settotal1(0)
    }
    
    
  }


  const minus=(e)=>{
    if(peice[e] > 1)
    peice[e] = (peice[e] - 1)
    // console.log(peice[e],peice);
    if(dis)
    setdis(true)
    else setdis(false)}
const plus=(e)=>{
    if(peice[e] < 100)
    peice[e] = (peice[e] + 1)
    // console.log(peice[e],peice);
    if(dis)
    setdis(true)
    else setdis(false)


}










const updateCard = (id) =>{
    localStorage.removeItem("CartPrice")
      let data3 =  JSON.parse(localStorage.getItem("Cart")) 
      let arr = []
      arr = peice
  
      const pro = data3.map((res,i)=>{
        if(res.Size_Discounted.length === 0){
            res.Stock_Quantity.map((res1,j)=>{
                if(res.Size === res1){
                    return {
                        ...res , Pieces : arr[i] , Total_Product_Price : res.Price[j] * arr[i] 
                    }
                }
            })
        }
//         if(res.Size_Discounted.length > 0){
//         res.Stock_Quantity.map((res1,j)=>{
//             if(res.Size === res1){
//           return {
//               ...res , Pieces : arr[i] , Total_Product_Price : res.Size_Discounted * arr[i] 
//           }
//         }
//     })
// }
        if(res.Product_Price_Discounted)
          return {
              ...res , Pieces : arr[i] , Total_Product_Price : res.Product_Price_Discounted * arr[i] 
          }
          else 
          return {
              ...res , Pieces : arr[i] , Total_Product_Price : res.Product_Price * arr[i] 
          }
      })
      console.log(pro)
      setCart(pro)
     localStorage.removeItem("Cart")
      localStorage.setItem("Cart",JSON.stringify(pro))
      var j = 0
      pro.map((item,i)=>{
        console.log(item.Total_Product_Price)
         j = item.Total_Product_Price + j
      })
      settotal1(j)
      localStorage.setItem("CartPrice" ,JSON.stringify(j))
      swal("Update!", "Your Cart is Updated!", "success");
  
      // props.history.push("/card")
          
      // }
      
    }


const updateCard1 = (id) =>{
    localStorage.removeItem("CartPrice")
      let data3 =  JSON.parse(localStorage.getItem("Cart")) 
      let arr = []
      arr = peice
  
      const pro = data3.map((res,i)=>{
        if(res.Size_Discounted.length === 0){
            res.Stock_Quantity.map((res1,j)=>{
                if(res.Size === res1){
                    return {
                        ...res , Pieces : arr[i] , Total_Product_Price : res.Price[j] * arr[i] 
                    }
                }
            })
        }
//         if(res.Size_Discounted.length > 0){
//         res.Stock_Quantity.map((res1,j)=>{
//             if(res.Size === res1){
//           return {
//               ...res , Pieces : arr[i] , Total_Product_Price : res.Size_Discounted * arr[i] 
//           }
//         }
//     })
// }
        if(res.Product_Price_Discounted)
          return {
              ...res , Pieces : arr[i] , Total_Product_Price : res.Product_Price_Discounted * arr[i] 
          }
          else 
          return {
              ...res , Pieces : arr[i] , Total_Product_Price : res.Product_Price * arr[i] 
          }
      })
      console.log(pro)
      setCart(pro)
     localStorage.removeItem("Cart")
      localStorage.setItem("Cart",JSON.stringify(pro))
      var j = 0
      pro.map((item,i)=>{
        console.log(item.Total_Product_Price)
         j = item.Total_Product_Price + j
      })
      settotal1(j)
      localStorage.setItem("CartPrice" ,JSON.stringify(j))
      // swal("Update!", "Your Cart is Updated!", "success");
  
      // props.history.push("/card")
          
      // }
      
    }
  

    const setCouopon = () =>{
     
        var d = document.getElementById("discount")
        var d1 = document.getElementById("discount1")
        const the = discount.filter((res,i)=> res.name === promo)
        console.log(the)
        if(the.length === 0){
          swal("Please enter a correct promo code");
          document.getElementById("grand-total").innerHTML = total1
          localStorage.removeItem("discount")
          return
        }
        if(the[0].discount === null &&the[0].discount1 === null){
          swal("Please enter a correct promo code");
          document.getElementById("grand-total").innerHTML = total1
          localStorage.removeItem("discount")
          return
          
        }
        if(the.length > 0){
      
          setdiscount6(the[0])
          if( the[0].discount > 1){
            settotalpro((total1 -total1 * the[0].discount)/100)
            // settotal1((total1 * the[0].discount1)/100)
            localStorage.setItem("discount",JSON.stringify(the[0]))
            // d.innerHTML = "Rs " +the[0].discount
            d1.innerHTML = "Discount : "
            swal("Update!","Successfully your Promo Applied ", "success");
            
          }
          else{
            
            console.log(total1 -(total1 * the[0].discount1)/100)
            settotalpro((total1 -(total1 * the[0].discount1)/100))
            // settotal1((total1 * the[0].discount1)/100)
            // console.log(total1 , (total1/the[0].discount1))
            localStorage.setItem("discount",JSON.stringify(the[0]))
            // d.innerHTML = " " +the[0].discount1 +" % Off"
            d1.innerHTML = "Discount : "
            swal("Update!","Successfully your Promo Applied ", "success");
      
          }
        }
        else{
          swal("Please enter a correct promo code");
        }
          
        }
  
 
        return (
            <div>
            
            <div className="all-title-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Cart</h2>
                <ul className="breadcrumb" style={{ background : "black",}}>
                  <li className="breadcrumb-item"><a href="#">Shop /</a></li>
                  <li className="breadcrumb-item active" style={{color :"white"}}>Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End All Title Box */}
        {/* Start Cart  */}
        <div className="cart-box-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-main table-responsive">
                  <table className="table">
                    <thead  style={{background :"black"}}>
                      <tr>
                        <th>Images</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                    cart.length >= 1 ? cart.map((item,i)=>{
                            return(
                            <tr key={i} style={{cursor : "pointer"}}>
                                <td className="thumbnail-img" onClick={()=>props.history.push("/categories/"+item.Product_Catagories+"/all-products/"+item.Product_Name+"/"+item._id)}>
                                <a href="#">
                                    <img className="img-fluid" src={item.Product_Image_Upload} alt="" />
                                </a>
                                </td>
                                <td className="name-pr" onClick={()=>props.history.push("/categories/"+item.Product_Catagories+"/all-products/"+item.Product_Name+"/"+item._id)}>
                                <a href="#">
                                  {item.Price[0] ?
                                  <div style={{display  :"flex",flexDirection  :"column"}}>
                                    <span>{item.Product_Name}</span>
                                    <span>{item.Size.length > 2 ? "Color : " :  "Size : "}  {item.Size}</span>
                                  </div>
                                  :
                                   item.Product_Name
                                  }
                              
                                </a>
                                </td>
                                <td className="price-pr">
                                    <b><p>Rs {item.Total_Product_Price /  item.Pieces }</p></b> 
                                </td>

                                <td className="quantity-box" style={{width : "200px"}}>
                                    <button  onClick={()=>minus(i)} style={{
                                        padding: "1px 20px",
                                        margin: "10px",
                                        background: "white",
                                        fontWeight: "bold",
                                        fontSize: "17px",
                                        cursor : "pointer",
                                        color : "black",                                       
                                        border : "1px solid black",
                                        borderRadius   : "0px"
                                      }}>-</button>
                                    <input type="number" value={peice[i]} size={4} defaultValue={1} min={0} step={1} className="c-input-text qty text" style={{width : "80px", border : "3px solid black"
}} />
                                    <button   onClick={()=>plus(i)} style={{
                                        padding: "1px 20px",
                                        margin: "10px",
                                        background: "white",
                                        fontWeight: "bold",
                                        cursor : "pointer",
                                        fontSize: "17px",
                                        borderRadius   : "0px",
                                        color : "black",                                       
                                        border : "1px solid black"
                                    }}>+</button>
                                    
                                    </td>
                                <td className="total-pr">
                                    <b><p>Rs {(item.Total_Product_Price /  item.Pieces)* peice[i]}</p></b>
                                </td>
                                <td className="remove-pr" onClick={()=>removeDatas(item)} >
                                    <DeleteIcon onClick={()=>removeDatas(item)} style={{color  : "red"}}/>
                                </td>
                            </tr>
                            )
                                })
                                : <tr><td colSpan="6"><div className="col-sm-12 col-lg-12 mb-12"><center> <h3> No Product in Cart</h3></center> </div></td></tr> 

                        }
                      {/* <tr>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src="images/img-pro-01.jpg" alt="" />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#">
                            Lorem ipsum dolor sit amet
                          </a>
                        </td>
                        <td className="price-pr">
                          <p>$ 80.0</p>
                        </td>
                        <td className="quantity-box"><input type="number" size={4} defaultValue={1} min={0} step={1} className="c-input-text qty text" /></td>
                        <td className="total-pr">
                          <p>$ 80.0</p>
                        </td>
                        <td className="remove-pr">
                          <a href="#">
                          </a>
                            <i className="fas fa-times" />
                        </td>
                      </tr>



                      <tr>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src="images/img-pro-02.jpg" alt="" />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#">
                            Lorem ipsum dolor sit amet
                          </a>
                        </td>
                        <td className="price-pr">
                          <p>$ 60.0</p>
                        </td>
                        <td className="quantity-box"><input type="number" size={4} defaultValue={1} min={0} step={1} className="c-input-text qty text" /></td>
                        <td className="total-pr">
                          <p>$ 80.0</p>
                        </td>
                        <td className="remove-pr">
                          <a href="#">
                            <i className="fas fa-times" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="thumbnail-img">
                          <a href="#">
                            <img className="img-fluid" src="images/img-pro-03.jpg" alt="" />
                          </a>
                        </td>
                        <td className="name-pr">
                          <a href="#">
                            Lorem ipsum dolor sit amet
                          </a>
                        </td>
                        <td className="price-pr">
                          <p>$ 30.0</p>
                        </td>
                        <td className="quantity-box"><input type="number" size={4} defaultValue={1} min={0} step={1} className="c-input-text qty text" /></td>
                        <td className="total-pr">
                          <p>$ 80.0</p>
                        </td>
                        <td className="remove-pr">
                          <a href="#">
                            <i className="fas fa-times" />
                          </a>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>





            <div className="row my-5">
              <div className="col-lg-6 col-sm-6">
                <div className="coupon-box">
                  <div className="input-group input-group-sm">
                    <input className="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text"  value={promo} onChange={(e)=>setpromo(e.target.value)}/>
                    <div className="input-group-append">
                      <button className="btn btn-theme hr-btn" type="button"  onClick={()=>setCouopon()}  style={{height: "50px",background :"black"}}>Apply Coupon</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 p-t-40">
                <div className="update-box">
                  <input value="Update Cart" className='hr-btn' type="submit" onClick={()=>updateCard()}  style={{background :"black"}}/>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-8 col-sm-12" />
              <div className="col-lg-4 col-sm-12">
                <div className="order-box">
                  <h3>Order summary</h3>
                  <div className="d-flex">
                    <h4>Sub Total</h4>
                    <div className="ml-auto font-weight-bold"> Rs. {total1

} </div>
                  </div>
                  {/* <div className="d-flex">
                    <h4>Discount</h4>
                    <div className="ml-auto font-weight-bold"> $ 40 </div>
                  </div>
                  <hr className="my-1" /> */}
                  <div className="d-flex">
                    <h4 id="discount1" >Coupon Discount</h4>
                    <div className="ml-auto font-weight-bold" id="discount">  </div>
                  </div>
                  {/* <div className="d-flex">
                    <h4>Tax</h4>
                    <div className="ml-auto font-weight-bold"> $ 2 </div>
                  </div> */}
                    {/* <div className="d-flex">
                        <h4>Shipping Cost</h4>
                        <div className="ml-auto font-weight-bold"> Free </div>
                    </div> */}
                    <hr />
                  <div className="d-flex gr-total">
                    <h5 style={{                                        color : "black",                                       
  }}>Grand Total</h5>
                    <div className="ml-auto h5" id="grand-total">                     Rs 
                            
                            {
        discount6.discount ?
        " "+ total2 - discount6.discount
         : ""
       }
     
        { discount6.discount1 ? 
        " "+(total2 -( total2 * discount6.discount1)/100) :
        ""
         }
         {discount6.fg === "3" ? 
         total2 : ""
     
         } </div>
                  </div>
                  <hr /> </div>
              </div>
              <div className="col-12 d-flex shopping-box"><a onClick={()=>props.history.push("/checkout")} style={{ background : "black",color : "white",cursor : "pointer"}} className="ml-auto btn hr-btn">Checkout</a> </div>
            </div>
          </div>
        </div>
        {/* End Cart */}
        {/* Start Instagram Feed  */}
       
            <a href="#" id="back-to-top" title="Back to top" style={{display: 'none'}}>↑</a>
            </div>
        )
    }


export default Card;