import React, { useEffect , useState } from 'react';
import swal from 'sweetalert';
import  "../../src/style23.css"

import "react-multi-carousel/lib/styles.css";

import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SendIcon from '@material-ui/icons/Send';
import logo from './images/img1.jpg'
import x1 from './images/x1.jpg'







export function SubCategoriesProductDetails(props) {
    const [UserM , setUserM] = useState({})
    const [message , setmessage] = useState("")
    const [allmessage , setallmessage] = useState([])
    const [allshowmessage , setallshowmessage] = useState([])
    const [allvendor , setallvendor] = useState([])
    const [onevendor , setonevendor] = useState([])
    const [dis123 , setdis123] = useState(false)
    const [dis1 , setdis1] = useState(true)


//     useEffect(() =>{
// if(JSON.parse( localStorage.getItem("user main"))){
//     fetch("https://asad-backend.vercel.app/allUser/"+JSON.parse(localStorage.getItem("user main"))._id,{
//     method: "GET",
//      headers :  {
//      "Content-Type" : "application/json" , 
//  } ,
// })
// .then(res5=>res5.json())
// .then(res6=>{
//     console.log(res6)
//     setUserM(res6)
//     localStorage.setItem("user main" , JSON.stringify(res6))
 
//     fetch("https://asad-backend.vercel.app/allUserVender34534",{
//     method: "GET",
//      headers :  {
//      "Content-Type" : "application/json" , 
//  } ,
// })
// .then(res15=>res15.json())
// .then(res16=>{
//     const A = []
//     const A1 = []
//         res6.Chat.map((res8,i)=>{
//             res16.map((res9,j)=>{
//                 if(res8.vendor_id === res9._id){
//                  A.push(res9)
//                 }
//             })
//           })
          
//           console.log(A)
//           setallvendor(A)
//           // if(A.length > 0)
//           // setonevendor([A[0]])
//           if(A.length === 0){
//             if(JSON.parse( localStorage.getItem("Details Product"))[0].ProductCreater ){
//               console.log(JSON.parse( localStorage.getItem("Details Product"))[0].ProductCreater )
//               res16.map((res9,j)=>{
//                 if(JSON.parse( localStorage.getItem("Details Product"))[0].ProductCreater === res9._id){
//                   A.push(res9)
//                 }
//               })
//               setallvendor(A)
//               // setonevendor([A[0]])
//               console.log(A)
//             }
//         }
// })
// fetch("https://asad-backend.vercel.app/allUserVender34534",{
//   method: "GET",
//    headers :  {
//    "Content-Type" : "application/json" , 
// } ,
// })
// .then(res151=>res151.json())
// .then(res161=>{
//   res161.map((res9,j)=>{
// if(JSON.parse( localStorage.getItem("Details Product"))[0].ProductCreater === res9._id)
// setonevendor([res9])
// })
// })
//       fetch("https://asad-backend.vercel.app/AllUserShowMessage",{
//             method: "GET",
//              headers :  {
//              "Content-Type" : "application/json" , 
//          }
//         })
//         .then(res=>res.json())
//         .then(res1=>{
//             setallmessage(res1)
//             console.log(res1)
//          const Chat1 = res1.filter((user,j)=>{
//              if(JSON.parse( localStorage.getItem("Details Product"))[0]._id){
//                  if(user.user_id === JSON.parse( localStorage.getItem("user main"))._id && user.product_id === JSON.parse( localStorage.getItem("Details Product"))[0]._id){
//                     return user
//                  }
//              }
//              else{
//                  if( user.user_id === JSON.parse( localStorage.getItem("user main"))._id)  {
                    
//                     return user
//                 }
//              }
                
//                 })
//                 console.log(Chat1)
//             setallshowmessage(Chat1)
//         })
// })

//         // document.getElementById("fgjkln").style.display = "none"
//         // document.getElementById("eefjksefjksf").style.display = "none"
        
        
//       }
//       else{
//         props.history.push("user/login")
//       }
      
      
      
      
      
// //       return ()=>{
        
// //         document.getElementById("fgjkln").style.display = "block"
// //         document.getElementById("eefjksefjksf").style.display = "block"
// // }


//     },[]) 

//     const setMess1 = ( ) =>{
//         console.log(message === "")
//         if(message === ""){
//             swal("Type a Message");
//             return
//         }
//         const msgDetails = {
//             message : message , 
//             user_id :JSON.parse( localStorage.getItem("user main"))._id ,
//             vendor_id :JSON.parse( localStorage.getItem("Details Product"))[0].ProductCreater ,
//             product_id :JSON.parse( localStorage.getItem("Details Product"))[0]._id ,
//             user : true,
//             vendor : false,
//         }
//         console.log(msgDetails)
//         let v = 0

//         UserM.Chat.map((res,i)=>{
//             if(res.product_id === msgDetails.product_id  && onevendor[0]._id ===  msgDetails.vendor_id ){
//                 v = v + 0
//               }
//               else{
//                 v = v + 1
//               }
//             })

//         let m = 0

//         onevendor[0].ChatName && onevendor[0].ChatName.map((res,i)=>{
//           console.log(res.product_id , msgDetails.product_id  , res.user_id ,  msgDetails.user_id)
//             if(res.product_id === msgDetails.product_id  && res.user_id ===  msgDetails.user_id){
//                console.log("0")
//                m = m + 0
//               }
//               else{
//                 console.log("1")
//                 m = m + 1
//               }
//             })
//             console.log(m , onevendor[0].ChatName.length)
//         if(onevendor[0].ChatName.length){
//             if(m === onevendor[0].ChatName.length){

//                 fetch("https://asad-backend.vercel.app/newvendorchanger",{
//         method: "POST",
//         headers :  {
//             "Content-Type" : "application/json" , 
//         } ,
//         body : JSON.stringify({
//            ...msgDetails
//         }),
//     })
//     .then(res5=>res5.json())
//     .then((res8)=>{ 
//         if(res8.Error){
//             console.log("Message")
//         }
//     })
//   }
//   else{
          
//                           fetch("https://asad-backend.vercel.app/newvendorchanger1",{
//                   method: "POST",
//                   headers :  {
//                       "Content-Type" : "application/json" , 
//                   } ,
//                   body : JSON.stringify({
//                      ...msgDetails
//                   }),
//               })
//               .then(res5=>res5.json())
//               .then((res8)=>{ 
//                   if(res8.Error){
//                       console.log("Message")
//                   }
//               })

//         }
        
// }   
//         if(onevendor[0].ChatName){
//         if(onevendor[0].ChatName.length === 0){
//             fetch("https://asad-backend.vercel.app/newvendorchanger",{
//         method: "POST",
//         headers :  {
//             "Content-Type" : "application/json" , 
//         } ,
//         body : JSON.stringify({
//            ...msgDetails
//         }),
//     })
//     .then(res5=>res5.json())
//     .then((res8)=>{ 
//         if(res8.Error){
//             console.log("Message")

//         }
//     })
//         }
//         }



//         if(v === UserM.Chat.length  && UserM.Chat.length !== 0){

//                 fetch("https://asad-backend.vercel.app/newuservendorchanger",{
//         method: "POST",
//         headers :  {
//             "Content-Type" : "application/json" , 
//         } ,
//         body : JSON.stringify({
//            ...msgDetails
//         }),
//     })
//     .then(res5=>res5.json())
//     .then((res8)=>{ 
//       console.log(res8)
//         if(res8.Error){
//             console.log("Message")
//         }
//         else{
//           const fg = res8.message.map((res78,y)=>{
//             if(y = 0 ) return {
//               ...res78 , new : false
//             }
//             else return res78
//           })
//             setUserM({
//               ...UserM ,
//               Chat : fg
//             })
//             localStorage.setItem("user main" , JSON.stringify({
//               ...UserM ,
//               Chat : fg
//             }))

//             fetch("https://asad-backend.vercel.app/allUserVender34534",{
//     method: "GET",
//      headers :  {
//      "Content-Type" : "application/json" , 
//  } ,
// })
// .then(res15=>res15.json())
// .then(res16=>{
//     const A = []
//             res16.map((res9,j)=>{
//                 if(msgDetails.vendor_id === res9._id){
//                   A.push(res9)
//                 }
//             })
//      setallvendor([...A,...allvendor])
//      if(!dis123)  setdis123(true)
//      else setdis123(false)
// })
//         }
//     })
// } 



































// else{
//         if(UserM.Chat.length > 1)  {
//       fetch("https://asad-backend.vercel.app/newvendorchanger2",{
//         method: "POST",
//         headers :  {
//         "Content-Type" : "application/json" , 
//       } ,
//       body : JSON.stringify({
//         ...msgDetails
//         }),
//       })
//       .then(res5=>res5.json())
//       .then((res8)=>{ 
//         if(res8.message){
//           const fg = res8.message.map((res78,y)=>{
//             if(y = 0 ) return {
//               ...res78 , new : false
//             }
//             else return res78
//           })
// let D = []
// let S = []
//           UserM.Chat.map((res9,c)=>{
//   if(res9.vendor_id !== msgDetails.vendor_id || res9.product_id !== msgDetails.product_id ||  JSON.parse( localStorage.getItem("user main"))._id !== msgDetails.user_id ){
//     D.push(res9)
//   }
//   else{
//     S.push({...res9 , new : false})
//   }
// })
// console.log(D)
// const f = [...S , ...D]
// fetch("https://asad-backend.vercel.app/allUserVender34534",{
//   method: "GET",
//    headers :  {
//    "Content-Type" : "application/json" , 
// } ,
// })
// .then(res15=>res15.json())
// .then(res16=>{
//   const A = []
//   f.map((res56, h)=>{
//     res16.map((res9,j)=>{
//       if(res56.vendor_id === res9._id){
//        A.push(res9)
//       }
//   })
//   })
//   console.log(allvendor,A ,onevendor ,A[0],f)
//   setallvendor(A)
//   setonevendor([A[0]])
  
  

  
//   setUserM({
//     ...UserM ,
//     Chat : f
//   // }

// })
//   localStorage.setItem("user main" , JSON.stringify({
//     ...UserM ,
//     Chat : f
//   // }

// }))
  
  
//   console.log(f,S,A)
//   const fas = [...allmessage , msgDetails]
//   const Chat1 = fas.filter((user,j)=>{
//     if( user.user_id === JSON.parse( localStorage.getItem("user main"))._id && user.product_id === S[0].product_id)  {
//         return user
//     }
//     })
//     console.log(Chat1)
//     fetch("https://asad-backend.vercel.app/AllProduct1/"+ S[0].product_id,{
//         method: "GET",
//         headers :  {
//             "Content-Type" : "application/json" , 
//         }
//     })
//     .then(res=>res.json())
//     .then((res2)=>{ 
//         localStorage.setItem("Details Product" , JSON.stringify(res2))
//     })
// // setallshowmessage(Chat1)

// setallshowmessage(Chat1)












// })

//           fetch("https://asad-backend.vercel.app/allUserVender34534",{
//     method: "GET",
//      headers :  {
//      "Content-Type" : "application/json" , 
//  } ,
// })
// .then(res15=>res15.json())
// .then(res16=>{


// })
//         }
//       })

//     }
//     }




































//         if(UserM.Chat.length === 0){
//             fetch("https://asad-backend.vercel.app/newuservendorchanger",{
//         method: "POST",
//         headers :  {
//             "Content-Type" : "application/json" , 
//         } ,
//         body : JSON.stringify({
//            ...msgDetails
//         }),
//     })
//     .then(res5=>res5.json())
//     .then((res8)=>{ 
//         // localStorage.setItem("user main" , JSON.stringify(
//         //   {
//         //     ...JSON.parse( localStorage.getItem("user main")) ,
//             setUserM({
//               ...UserM ,
//               Chat : [{  product_id :JSON.parse( localStorage.getItem("Details Product"))[0]._id ,
//                 vendor_id :JSON.parse( localStorage.getItem("Details Product"))[0].ProductCreater ,        
//                 }]
//             // }

//           })
//         // setallshowmessage([...allshowmessage , msgDetails])

//         // ))
//     //     fetch("https://asad-backend.vercel.app/allUserVender34534",{
//     //       method: "GET",
//     //        headers :  {
//     //        "Content-Type" : "application/json" , 
//     //    } ,
//     //   })
//     //   .then(res15=>res15.json())
//     //   .then(res16=>{
//     //     setonevendor(res16)
//     //   })
//     //     if(res8.Error){
//     //         console.log("Message")
//     //     }
//     })
//         }
       
//         fetch("https://asad-backend.vercel.app/chatcreateuser",{
//         method: "POST",
//         headers :  {
//             "Content-Type" : "application/json" , 
//         } ,
//         body : JSON.stringify({
//            ...msgDetails
//         }),
//     })
//     .then(res=>res.json())
//     .then((res2)=>{ 
//         console.log(res2)       
//         if(res2){
//             setallshowmessage([...allshowmessage , msgDetails])
//             setallmessage([...allmessage , msgDetails])
//             setmessage("")
//             // swal("Successfully Submit your Review!");
//         }
//         else{
//             swal(res2.Error);
//         }
//         console.log(res2)       
//     })
//     .catch(err=>console.log(err))

//     }
// const setallchanger = (onevenderdetail,i)=>{
//     console.log(allmessage,UserM , i, onevenderdetail)
//     setonevendor([onevenderdetail])
//     const Chat1 = allmessage.filter((user,j)=>{
//         if( user.user_id === JSON.parse( localStorage.getItem("user main"))._id && user.product_id === UserM.Chat[i].product_id)  {
//             return user
//         }
//         })

//         console.log(Chat1)
//         fetch("https://asad-backend.vercel.app/AllProduct1/"+ UserM.Chat[i].product_id,{
  //             method: "GET",
  //             headers :  {
//                 "Content-Type" : "application/json" , 
//             }
//         })
//         .then(res=>res.json())
//         .then((res2)=>{ 
  //             localStorage.setItem("Details Product" , JSON.stringify(res2))
  //         })
//     setallshowmessage(Chat1)
// }
const setChangerChat = ()=>{
  if(document.getElementById("chat1").style.opacity === "0")
  document.getElementById("chat1").style.opacity= "1"
  else 
  document.getElementById("chat1").style.opacity = "0"

    
}
return (
  <>
       {/* <h3>Click on Arrow button to see next screen</h3> */}

<div class="fabs">
<div class="chat" id="chat1">
  <div class="chat_header">
    <div class="chat_option">
   
      <span id="chat_head">dluxehouse</span> <br/> <span class="agent">Agent</span> <span class="online">(Online)</span>
     <span id="chat_fullscreen_loader" class="chat_fullscreen_loader"><i class="fullscreen zmdi zmdi-window-maximize"></i></span>

    </div>

  </div>
  
  <div id="chat_converse" class="chat_conversion chat_converse">
          <a id="chat_second_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
    <span class="chat_msg_item chat_msg_item_admin">
         Hey there! Any question?</span>
    <span class="chat_msg_item chat_msg_item_user">
          Hello!</span>
    <span class="chat_msg_item chat_msg_item_admin">
        Hey! Would you like to talk sales, support, or anyone?</span>
    <span class="chat_msg_item chat_msg_item_user">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
  </div>
 
  
   
  <div class="fab_field">
    <a id="fab_camera" class="fab"><PhotoCameraIcon/></a>
    <a id="fab_send" class="fab"><SendIcon/></a>
    <textarea id="chatSend" name="chat_message" placeholder="Send a message" class="chat_field chat_message"></textarea>
  </div>
</div>
  <a id="prime" class="fab" onClick={()=>setChangerChat()}><ChatBubbleIcon  style={{marginTop:"16px"}}/></a>
</div>
       </>
       
    )
}

export default SubCategoriesProductDetails;
