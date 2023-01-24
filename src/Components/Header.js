import React , {useState , useEffect} from 'react';
import { Link  ,useHistory } from 'react-router-dom';
import swal from 'sweetalert';


import logo1 from '../assets/images/logo.png';
// import logo1 from '../assets/images/apple-touch-icon.png';
// import Head1 from "../assets/images/header-bg-rpt.jpg"
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import AddAlertIcon from '@material-ui/icons/AddAlert';
// import AddAlertIcon from '@mui/icons-material/AddAlert';
import SendIcon from '@material-ui/icons/Send';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSelector, useDispatch } from 'react-redux';


const Header =(props)=> {


    const [search , setSearch] = useState("")
    const [DataPart2 , setDataPart2] = useState([])
    const [UserDatat , setUserDatat] = useState({})
    const [userHeader , setuserHeader] = useState(false)
    const [menu1 , setmenu1] = useState(false)
    const [adminHeader , setadminHeader] = useState(false)
    const [displayMenu , setdisplayMenu] = useState(false)
    const [MainLine , setMainLine] = useState("")
    const [MainForum , setMainForum] = useState(false)
    const [MainCategories , setMainCategories] = useState([])
    const [SubCategories , setSubCategories] = useState([])
    const [SubClassCategories , setSubClassCategories] = useState([])
    const [fvalue , setfvalue] = useState([])
    const [fvalue1 , setfvalue1] = useState([])
    const [fg , setfg] = useState(true)
    const [abc , setabc] = useState(false)
    const [DisplaySearch , setDisplaySearch] = useState(false)
    const [DisplayMenu , setDisplayMenu] = useState(false)
    const [bht , setbht] = useState("")
    const [mainUser , setmainUser] = useState({})
    const [couponShow1 , setcouponShow1] = useState(false)
    const [name, setname] = useState("") 
    const [email, setemail] = useState("") 
    const [message, setmessage] = useState("") 
    const [photo, setphoto] = useState("") 
    const [allmessage , setallmessage] = useState([])
    // const [photo, setphoto] = useState("") 

    let history = useHistory();


    useEffect(() =>{
        if( JSON.parse(localStorage.getItem("user main")) ) setmainUser(JSON.parse(localStorage.getItem("user main")))
        
        // fetch("https://d-luxe-housebackend.vercel.app/Forum",{
        //     method: "GET",
        //      headers :  {
        //      "Content-Type" : "application/json" , 
        //  } ,
        // })
        // .then(res=>res.json())
        // .then(res1=>{
        //     console.log(res1[0]);
        //     setMainForum(res1[0].student)
        
        // })
        fetch("https://d-luxe-housebackend.vercel.app/CourseAllSubCategories",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res2=>res2.json())
        .then(res3=>{
            let data = res3.sort((a, b) => {
                return a.sort - b.sort;
            });
            console.log(data);
            setSubClassCategories(data)
        })
        fetch("https://d-luxe-housebackend.vercel.app/AllCategories",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res2=>res2.json())
        .then(res3=>{
            let dat1 = []
            res3.map((res55,c)=>{
                dat1.push(0)
            })
            setfvalue1(dat1)
            let data = res3.sort((a, b) => {
                return a.sort - b.sort;
            });
            setSubCategories(data)        
        }) 

        fetch("https://d-luxe-housebackend.vercel.app/MainCatogories",{
            method: "GET",
             headers :  {
             "Content-Type" : "application/json" , 
         } ,
        })
        .then(res3=>res3.json())
        .then(res4=>{
            let dat = []
            let dat1 = []
            res4.map((res55,c)=>{
                dat.push(res55)
                dat1.push(0)
            })
                        console.log(dat)
            let data = dat.sort((a, b) => {
                return a.sort - b.sort;
            });
            setMainCategories(data)
            setfvalue(dat1)
        })
        fetch("https://d-luxe-housebackend.vercel.app/AllUserShowMessage",{
          method: "GET",
           headers :  {
           "Content-Type" : "application/json" , 
       }
      })
      .then(res=>res.json())
      .then(res1=>{
          setallmessage(res1)
          console.log(res1)
       const Chat1 = res1.filter((user,j)=>{
           if(JSON.parse( localStorage.getItem("Chat User Data"))){
               if(user.user_id === JSON.parse( localStorage.getItem("Chat User Data")).email ){
                  return user
               }
               }
              })
              console.log(Chat1)
          setallmessage(Chat1)
      })
        // if ( JSON.parse(localStorage.getItem("Admin")) ){
        //     setadminHeader(true)
        //     setuserHeader(false)
        //     setUserDatat([])
        // }
        // else if ( JSON.parse(localStorage.getItem("User"))  ){
        //     setuserHeader(true)
        //     setadminHeader(false)
        //     setUserDatat(JSON.parse(localStorage.getItem("User")))
        // }
        // else{
        //     setadminHeader(false)
        //     setUserDatat([])
        //     setuserHeader(false)

        // }
        const inter = setInterval(()=>{
        //     if ( JSON.parse(localStorage.getItem("Admin")) ){
        //     setadminHeader(true)
        //     setuserHeader(false)
        //     setUserDatat([])
        // }
        // else if ( JSON.parse(localStorage.getItem("User"))  ){
        //     setuserHeader(true)
        //     setadminHeader(false)
        //     setUserDatat(JSON.parse(localStorage.getItem("User")))
        // }
        // else{
        //     setadminHeader(false)
        //     setUserDatat([])
        //     setuserHeader(false)

        // }
        fetch("https://d-luxe-housebackend.vercel.app/AllUserShowMessage",{
          method: "GET",
           headers :  {
           "Content-Type" : "application/json" , 
       }
      })
      .then(res=>res.json())
      .then(res1=>{
          setallmessage(res1)
          console.log(res1)
       const Chat1 = res1.filter((user,j)=>{
           if(JSON.parse( localStorage.getItem("Chat User Data"))){
               if(user.user_id === JSON.parse( localStorage.getItem("Chat User Data")).email ){
                  return user
               }
               }
              })
              console.log(Chat1)
          setallmessage(Chat1)
      })
            var data1 =  JSON.parse(localStorage.getItem("Cart")) 
         if (data1) {
             setDataPart2(data1)
            //  const data = DataPart2.length  
            //  setDataPart2(data)
            }
         else setDataPart2(0)

         if( JSON.parse(localStorage.getItem("user main")) ) setmainUser(JSON.parse(localStorage.getItem("user main")))
        
       

        },3000)
        
        return () => clearInterval(inter);
    },[])
  



const headerMenu = () =>{
    if (!menu1){
        localStorage.setItem("head" , JSON.stringify("1000"))
        document.getElementById("my1").classList.remove("offcanvas-menu")
        // const sb = document.getElementById("myDIv")
        // sb.classList.remove("active")
        setmenu1(true)
    }
    else{
        localStorage.removeItem("head")
        document.getElementById("my1").classList.remove("offcanvas-menu")
        // const sb = document.getElementById("myDIv")
        // sb.classList.add("active")
        setmenu1(false) 
    }
    
}




    const SubmitData = (e) =>{
        e.preventDefault()

        fetch("https://d-luxe-housebackend.vercel.app/SearchProduct",{
                                method: "POST",
                                headers :  {
                                    "Content-Type" : "application/json" , 
                                } ,
                                body : JSON.stringify({
                                    search : search.toLowerCase() ,
   
                                })
                            })
                            .then(res=>res.json())
                            .then((res1)=>{ 
                                console.log(res1)    
                                // localStorage.setItem("SearchData" , JSON.stringify(res1) )
                                // props.history.push(`/shop/search/product-item`)

                                const SearchProductItem = []
                                
                                res1.map((res2,i)=>{
                                    // console.log(res2)
                                    var Name = res2.Product_Name.toLowerCase().split(" ")
                                     var Title = res2.Product_Title.toLowerCase().split(" ")
                                    // console.log(Name , Title)
                                    Name.map((res3,i)=>{

                                        if (res3 === search.toLowerCase().trim()){
                                            SearchProductItem.unshift(res2)
                                        }
                                    })
                                    Title.map((res4,i)=>{
                                        if (res4 === search.toLowerCase().trim()){
                                            SearchProductItem.unshift(res2)
                                        }
                                    })
                                })
                                console.log(SearchProductItem,props)
                                let uniq = [...new Set(SearchProductItem)];

                                localStorage.setItem("SearchData" , JSON.stringify(uniq) )
                                
                                setTimeout(()=>{
                                    history.push("/shop/search/product-item");

                                    // return <Redirect push to="/shop/search/product-item" /> 
                                    // props.history.push(`/shop/search/product-item`)
                                },1000)
                        })
                        .catch(err=>{
                            // swal("There is An Error")                  
                            }) 
    }

    // const SubmitData4534 = () =>{

    //     fetch("https://d-luxe-housebackend.vercel.app/SearchProduct",{
    //                             method: "POST",
    //                             headers :  {
    //                                 "Content-Type" : "application/json" , 
    //                             } ,
    //                             body : JSON.stringify({
    //                                 search : search.toLowerCase() ,
   
    //                             })
    //                         })
    //                         .then(res=>res.json())
    //                         .then((res1)=>{ 
    //                             console.log(res1)    
    //                             // localStorage.setItem("SearchData" , JSON.stringify(res1) )
    //                             // props.history.push(`/shop/search/product-item`)

    //                             const SearchProductItem = []
                                
    //                             res1.map((res2,i)=>{
    //                                 // console.log(res2)
    //                                 var Name = res2.Product_Name.toLowerCase().split(" ")
    //                                  var Title = res2.Product_Title.toLowerCase().split(" ")
    //                                 // console.log(Name , Title)
    //                                 Name.map((res3,i)=>{

    //                                     if (res3 === search.toLowerCase().trim()){
    //                                         SearchProductItem.unshift(res2)
    //                                     }
    //                                 })
    //                                 Title.map((res4,i)=>{
    //                                     if (res4 === search.toLowerCase().trim()){
    //                                         SearchProductItem.unshift(res2)
    //                                     }
    //                                 })
    //                             })
    //                             console.log(SearchProductItem,props)
    //                             let uniq = [...new Set(SearchProductItem)];

    //                             localStorage.setItem("SearchData" , JSON.stringify(uniq) )
                                
    //                             setTimeout(()=>{
    //                                 history.push("/shop/search/product-item");

    //                                 // return <Redirect push to="/shop/search/product-item" /> 
    //                                 // props.history.push(`/shop/search/product-item`)
    //                             },1000)
    //                     })
    //                     .catch(err=>{
    //                         // swal("There is An Error")                  
    //                         }) 
    // }

    const clickLogin = ()=>{
        localStorage.removeItem("user main")
        localStorage.removeItem("User")
        localStorage.removeItem("Cart")
        
        history.push("/user/login")
    }


const effectEnter = () =>{
    const c=  document.getElementById("nav-menu-hover-effect1")
    document.getElementById("desktop-nav1").style.display = "block"
    // console.log(c)

}


const effectCancel = () =>{
    const c1=  document.getElementById("nav-menu-hover-effect1")
    const para = document.getElementById("desktop-nav1");
    document.getElementById("desktop-nav1").style.display = "none"

        para.addEventListener('pointerenter', (event) => {
        document.getElementById("desktop-nav1").style.display = "block"

        // console.log('Pointer entered element');
        });
        para.addEventListener('pointerleave', (event) => {
        document.getElementById("desktop-nav1").style.display = "none"

        // console.log('Pointer entered element');
        });
    // document.getElementById("desktop-nav1").onPointerEnter(()=>{
    //     document.getElementById("desktop-nav1").style.display = "block"

    // })

    // console.log(c1,para)
}

const setStateChangeMenu = ()=>{
    if(!displayMenu){
        setdisplayMenu(true)
        document.getElementById("mobile-site-hide-show11").style.display = "block"
    }
    else{
        setdisplayMenu(false)
        document.getElementById("mobile-site-hide-show11").style.display = "none"
    }

    


}

const setChangeInit = ()=>{
    console.log("edfefef");
    document.getElementById("mobile-site-hide-show11").style.display="none"
    
}

const setChangerItemSize = (e)=>{




    if (fg) setfg(false)
    else setfg(true)

    for (let i = 0; i < 45; i++) {
      if(i === e){
        if(fvalue[e] === 0){
            fvalue[e] = 1
            let f = document.getElementById("changeIcon"+i)
             document.getElementById("changeIcon1"+i).style.visibility = "hidden"  
            f.innerHTML = "<span style='position : absolute ; right : 10%; '>^</span>"
            
        }
        else {
            fvalue[e] = 0
            let v = document.getElementById("changeIcon"+i)
             document.getElementById("changeIcon1"+i).style.visibility= "visible"
            v.innerHTML= ""
            // v.innerHTML =  "<KeyboardArrowDownIcon style={{position : 'absolute' , right : '8%'}} id={changeIcon"+e+"}/>"
         }
      }
    //   else{

    //     if(fvalue[e] === 0){
    //       for (let i = 0; i < 45; i++) {
    //         fvalue[i] = 0
            
    //       }
    //       fvalue[e] = 1 
    //     }
    //     else{
    //         fvalue[e] = 0 
    //     }
    //     }
      
    }
  
  setfvalue(fvalue)
    if (fg) setfg(false)
    else setfg(true)
    // console.log(range123)








    // if(fvalue[i] === 0){

    //     fvalue[i] = 1
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     setfvalue(fvalue)
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     setfvalue(fvalue)
    //     console.log(fvalue)
    // }
    // else{
    //     fvalue[i] = 0
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     setfvalue(fvalue)
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     setfvalue(fvalue)
    //     console.log(fvalue)

    // }
}

const setChangerItemSize1 = (e)=>{



    if (fg) setfg(false)
    else setfg(true)

    for (let i = 0; i < 45; i++) {
        if(i === e){
          if(fvalue1[e] === 0)
          fvalue1[e] = 1
          else {
              fvalue1[e] = 0
           }
        }
    //   else{

    //     if(fvalue1[e] === 0){
    //       for (let i = 0; i < 45; i++) {
    //         fvalue1[i] = 0
            
    //       }
    //       fvalue1[e] = 1 
    //     }
    //     else{
    //         fvalue1[e] = 0 
    //     }
    //     }
      
    }
  
  setfvalue1(fvalue1)
    if (fg) setfg(false)
    else setfg(true)



    // let dis = fvalue
    // if(fvalue1[i] === 0){

    //     fvalue1[i] = 1
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     setfvalue1(fvalue1)
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     // setfvalue1(fvalue1)
    //     console.log(fvalue)
    // }
    // else{
    //     fvalue1[i] = 0
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     setfvalue1(fvalue1)
    //     if(fg) setfg(true)
    //     else setfg(false) 
    //     // setfvalue1(fvalue1)
    //     console.log(fvalue)

    // }
    // setfvalue(dis)
}

const setChangerItem1 = (i,j)=>{
    history.push("/categories/"+i+"/"+j)
    setStateChangeMenu()
}
const setChangebuyit = (i)=>{
    setbht(i)
}
const setChanger1 = (e)=>{
    document.getElementById("myDiv1234").style.display= "none"
  }
const setChanger134 = ()=>{
    document.getElementById("myDiv1234").style.display= "block"
  }
const setChanger155= ()=>{
    if(abc)
    setabc(false)
    else
    setabc(true)
  }
  const SubmitData4534 = () =>{
console.log("df")
    fetch("https://d-luxe-housebackend.vercel.app/SearchProduct",{
                            method: "POST",
                            headers :  {
                                "Content-Type" : "application/json" , 
                            } ,
                            body : JSON.stringify({
                                search : search.toLowerCase() ,

                            })
                        })
                        .then(res=>res.json())
                        .then((res1)=>{ 
                            console.log(res1)    
                            // localStorage.setItem("SearchData" , JSON.stringify(res1) )
                            // props.history.push(`/shop/search/product-item`)

                            const SearchProductItem = []
                            
                            res1.map((res2,i)=>{
                                // console.log(res2)
                                var Name = res2.Product_Name.toLowerCase().split(" ")
                                 var Title = res2.Product_Title.toLowerCase().split(" ")
                                // console.log(Name , Title)
                                Name.map((res3,i)=>{

                                    if (res3 === search.toLowerCase().trim()){
                                        SearchProductItem.unshift(res2)
                                    }
                                })
                                Title.map((res4,i)=>{
                                    if (res4 === search.toLowerCase().trim()){
                                        SearchProductItem.unshift(res2)
                                    }
                                })
                            })
                            console.log(SearchProductItem,props)
                            let uniq = [...new Set(SearchProductItem)];

                            localStorage.setItem("SearchData" , JSON.stringify(uniq) )
                            
                            setTimeout(()=>{
                                history.push("/search/product-item");

                                // return <Redirect push to="/shop/search/product-item" /> 
                                // props.history.push(`/shop/search/product-item`)
                            },1000)
                    })
                    .catch(err=>{
                        // swal("There is An Error")                  
                        }) 
}
    const basket = useSelector((state) => state.basket);
    
    
    const setChangerChat = ()=>{
      if(!JSON.parse( localStorage.getItem("Chat User Data")))
      setcouponShow1(!couponShow1)
      console.log(document.getElementById("chat1").style.display)
      
      if(JSON.parse( localStorage.getItem("Chat User Data"))){
      if(JSON.parse( localStorage.getItem("Chat User Data")).name !== "" && JSON.parse( localStorage.getItem("Chat User Data")).email !== "" ){
        if(document.getElementById("chat1").style.display === "none")
        document.getElementById("chat1").style.display= "block"
        else 
        document.getElementById("chat1").style.display = "none"

      }
      }
    
        
    }
    const Submitdata = (e)=>{
      e.preventDefault()
      if(name !== "" && email !== ""){
         localStorage.setItem("Chat User Data", JSON.stringify({
        name ,
        email
      }))

      setcouponShow1(!couponShow1)
      console.log(document.getElementById("chat1").style.display)
      if(document.getElementById("chat1").style.display === "none")
      document.getElementById("chat1").style.display= "block"
      else 
      document.getElementById("chat1").style.display = "none"
    
      }
     
      
  }

    
    const setphoto1 = (e)=>{
      console.log(e)
     setphoto(e.target.files[0]) 
    //  setphoto2(e.target.files[0]) 
      
  }

























  const setMess1 = ( ) =>{
    console.log(message === "")
    if(message === ""){
      if(photo === ""){
        swal("Type a Message");
        return
      }
    }
    if(! JSON.parse( localStorage.getItem("Chat User Data"))){
        swal("Enter a Username");
        return
    }
    if( JSON.parse( localStorage.getItem("Chat User Data")).email === ""){
        swal("Enter a Username");
        return
    }
    const data = new FormData()
        data.append("file", photo)
        data.append("upload_preset", "commerce")
        data.append("cloud_name", "freedeveloperss123")
        fetch("https://api.cloudinary.com/v1_1/freedeveloperss123/image/upload",{ 
            method : "POST",
            body : data , 
        })
        .then(res=>res.json())
        .then((res2)=>{
          console.log(res2)
    const msgDetails = {
        message : message , 
        photo  :res2.url ? res2.url : "", 
        user_id :JSON.parse( localStorage.getItem("Chat User Data")).email ,
        user : true,  
        vendor : false,
    }
    console.log(msgDetails)
    
            fetch("https://d-luxe-housebackend.vercel.app/newvendorchanger",{
    method: "POST",
    headers :  {
        "Content-Type" : "application/json" , 
    } ,
    body : JSON.stringify({
       ...msgDetails ,name : JSON.parse( localStorage.getItem("Chat User Data")).name
    }),
})
.then(res5=>res5.json())
.then((res8)=>{ 
    if(res8.Error){
        console.log("Message")
    }
})
 
   
    fetch("https://d-luxe-housebackend.vercel.app/chatcreateuser",{
    method: "POST",
    headers :  {
        "Content-Type" : "application/json" , 
    } ,
    body : JSON.stringify({
       ...msgDetails
    }),
})
.then(res=>res.json())
.then((res2)=>{ 
    console.log(res2)       
    if(res2){
        // setallshowmessage([...allshowmessage , msgDetails])
        setallmessage([...allmessage , msgDetails])
        setmessage("")
        setphoto("")
    }
    else{
        swal(res2.Error);
    }
    console.log(res2)       
})
})

}
        return (
            <>


<div class="fabs">
<div class="chat" id="chat1">
  <div class="chat_header">
    <div class="chat_option">
   
      <span id="chat_head">Customer Services</span> <br/> <span class="agent">Team</span> <span class="online">(Agent)</span>
     <span id="chat_fullscreen_loader" class="chat_fullscreen_loader"><i class="fullscreen zmdi zmdi-window-maximize"></i></span>

    </div>

  </div>
  
  <div id="chat_converse" class="chat_conversion chat_converse">
          <a id="chat_second_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
    <span class="chat_msg_item chat_msg_item_admin">
    Hi there 👋🏻 Welcome to our D-luxe-House instant chat.
<br />
<br />
We love having you with us. I can help you find the solution you're looking for.</span>
    <span class="chat_msg_item chat_msg_item_admin">
    You need to tell me what brought you here first.
<br />
<br />
If you can't reach us here within a few minutes, you can contact us with your query via the contact form, we'll get back to you as soon as possible or you can visit our <span style={{color : "black" , fontWeight : "bold" ,cursor :"pointer"}}> <a href="/FAQ"> FAQ</a></span> page. There may be relevant information.</span>
    {/* <span class="chat_msg_item chat_msg_item_user">
          Hello!</span>
    <span class="chat_msg_item chat_msg_item_admin">
        Hey! Would you like to talk sales, support, or anyone?</span>
    <span class="chat_msg_item chat_msg_item_user">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> */}
          { allmessage.map((res,i)=>{
                //   if(res.product_id === JSON.parse( localStorage.getItem("Details Product"))[0]._id){
                      if(!res.user){
                        return(
                          <>
                          {res.message ?
                          <span class="chat_msg_item chat_msg_item_admin">{
                            res.message }
                          
                          </span>
                          :
                          <span class="chat_msg_item chat_msg_item_admin">
                            <img src={res.photo} alt=""  style={{width:  "150px" , height :"150px"}}/>
                          </span>
                          }
                          </>
                        )
                      }
                      else{
                        return(
                          <>
                          {res.message ?
                          <span class="chat_msg_item chat_msg_item_user">{
                            res.message }
                          
                          </span>
                          :
                          <span class="chat_msg_item chat_msg_item_user">
                            <img src={res.photo} alt=""  style={{width:  "150px" , height :"150px"}}/>
                          </span>
                          }
                          </>
                        )
                      }
                    })
          }
  </div>
 
  
   
  <div class="fab_field">
    <a id="fab_camera" class="fab"><PhotoCameraIcon for="files"/>  <input type="file" id="files" style={{opacity : 0 ,width: "29px",position: "absolute",zIndex: 1,left: '4px'}}  onChange={(e)=>setphoto1(e)} /></a>
  
    <a id="fab_send" class="fab"  onClick={()=>setMess1()}><SendIcon/></a>
    {photo ? 
<div style={{display : "flex"}}><textarea id="chatSend" name="chat_message" placeholder="Send a message" class="chat_field chat_message" value={photo.name}  style={{width : "90%"}}></textarea><ClearIcon style={{marginTop : "10px"}}  onClick={()=>{
setphoto("")
}}/></div>
:
<textarea id="chatSend" name="chat_message" placeholder="Send a message" class="chat_field chat_message" value={message} onChange={(e)=>setmessage(e.target.value)}  ></textarea>

    }
  </div>
</div>
  <a id="prime" class="fab" onClick={()=>setChangerChat()}><ChatBubbleIcon  style={{marginTop:"16px",color  :  "white"}}/></a>
</div>








{couponShow1 ?

<div className="site-section change-padding" style={{position: "fixed", width: "100%",
zIndex:"9999",top  :"25%"}}>

            <div className="container div-size-respon" style={{width : "35%", borderRadius : "20px",background: "white",padding : "0px"}}>
                <div className="row">
                    <div className="col-md-12">
                        <div >

                            <div className="p-3 p-lg-5" style={{ borderRadius : "20px",boxShadow: "1px 1px 10px grey"}}>
                               <center>
                               
                               <form onSubmit={(e)=>Submitdata(e)}>

                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_fname" className="text-black" style={{fontWeight : "bold"}}>First Name <span className="text-danger">*</span></label>
                                                <input type="text" value={name} onChange={(e)=>setname(e.target.value)}   className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_email" className="text-black" style={{fontWeight : "bold"}}>Email <span className="text-danger">*</span></label>
                                                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)}   className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                       
                                        <div className="form-group row">
                                            <div className="col-lg-12">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Start Chat" style={{background : "rgb(78, 90, 85)"}} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                               </center>
                               
                               <ClearIcon  style={{position: "absolute",top: "1px",right: "4%", color : "black",fontSize : "27px",fontWeight : "400",
                                  border: "2px solid",
                                  borderRadius: "32px",
                                  padding: "3px 3px",
                                  // width: "37px",
                                  // height: "37px",
                                  width: "26px",
                                  height: '26px',
                                  cursor  :"pointer",
                                  background: "rgb(234, 234, 234)"}}
                                  onClick={()=>setcouponShow1(!couponShow1)}
                                  />
                             

 
                      
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>


:
""

}





       
           {/* <div className="main-top">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    
                    <div className="right-phone-box">
                      <p>Call US :- <a href="#"> +92 333 3731804
</a></p>
                    </div>
                    <div className="our-link">
                      <ul>
                        <li><Link to="/contact"><LocationOnIcon/> Our location</Link></li>
                        <li><a href="tel:+923333731804"><PhoneForwardedIcon /> Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                
                    <div className="text-slid-box">
                      <div id="offer-box" className="carouselTicker">
                        <ul className="offer-box">
                          <li style={{textAlign : "center",fontSize:  "16px"}}>
                            <marquee behavior="" direction=""
                            >
                            <AddAlertIcon />    {MainLine}
                            </marquee>
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


            {/* End Main Top */}
            {/* Start Main Top */}
            <header className="main-header">
              {/* Start Navigation */}
              <nav className="navbar navbar-expand-lg navbar-light navbar-default bootsnav">
                <div className="container">
                {/* <div className="container-fuild" style={{width : "95%" , margin : "auto"}}> */}
                  {/* Start Header Navigation */}
                  <div className="navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation"
                     onClick={()=>{
                      if(document.getElementById("navbar-menu").style.display === "none")
                      document.getElementById("navbar-menu").style.display = "block"
                      else 
                      document.getElementById("navbar-menu").style.display = "none"
                     }}>
                      <MenuIcon/>
                    </button>
                    <Link className="navbar-brand" to="/"><img src={logo1} className="logo" alt="" style={{width: "140px",height : "80px",objectFit  :"contain"}} /></Link>
                  </div>
                  {/* End Header Navigation */}
                  {/* Collect the nav links, forms, and other content for toggling */}
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                      <li style={{padding: "1px 0px"}} className="nav-item"><a  className="nav-link" href="/">Home</a></li>
                      <li style={{padding: "1px 0px"}} className="nav-item changer1"><Link  className="nav-link">
                        
                        SHOP      <span className='change-plus' style={{
                          position: "absolute",
                          right: "10%",
                          fontSize: "27px",
                          top: "-2px",
                      
                        }}
                        onClick={()=>{
                          if(document.getElementById("sub-menu5").style.display === "none")
                          document.getElementById("sub-menu5").style.display = "block"
                          else 
                          document.getElementById("sub-menu5").style.display = "none"
                        }}>+</span>
                        </Link>
                        
                        <ul className="sub-menu1">
                          <div style={{display : "flex" , justifyContent  :"center"}}>
                            <div style={{padding  :"0px 40px"}}>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/mains-categories/"+"men"+"/all-products"}><b style={{borderBottom : "1px solid white"}}>Men</b> </a></li>
                            {/* <li><Link to={"/categories/"+""+"/all-products"}><b style={{borderBottom : "1px solid white"}}>Men</b> </Link></li> */}
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"bags"+"/all-products"}>BAGS</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"shoes"+"/all-products"}>SHOES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"accessories"+"/all-products"}>ACCESSORIES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"jewelry"+"/all-products"}>FINE JEWELRY/WATCHES</a></li>
                               
                              </div>
                            <div style={{padding  :"0px 40px"}}>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/mains-categories/"+"women"+"/all-products"}><b style={{borderBottom : "1px solid white"}}>Women</b></a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/women/"+"bags"+"/all-products"}>BAGS</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/women/"+"shoes"+"/all-products"}>SHOES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}}  href={"/main_categories/women/"+"accessories"+"/all-products"}>ACCESSORIES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/women/"+"jewelry"+"/all-products"}>FINE JEWELRY/WATCHES</a></li>
                              </div>
                            <div style={{padding  :"0px 40px"}}>
                                {/* <li><a href={"/mains-categories/"+"sale"+"/all-products"}><b style={{borderBottom : "1px solid white"}}>Sale</b></a></li> */}
                                <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/mains-categories/"+"sale"+"/all-products"}><b style={{borderBottom : "1px solid white"}}>Sale</b></a></li>

                              </div>
                            </div>
                    {/* <li><Link to={"/all-shop"}>All Products</Link></li> */}
              </ul>
                        <ul className="sub-menu3" id="sub-menu5">
                          <div style={{}}>
                            <div style={{padding  :"0px 20px"}}>
                            <li><a href={"/mains-categories/"+"men"+"/all-products"}><b style={{borderBottom : "1px solid white",borderBottom  :"1px solid black" ,fontSize   :"22px"}}>Men</b> </a></li>
                            {/* <li><Link to={"/categories/"+""+"/all-products"}><b style={{borderBottom : "1px solid white"}}>Men</b> </Link></li> */}
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"bags"+"/all-products"}>BAGS</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"shoes"+"/all-products"}>SHOES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"accessories"+"/all-products"}>ACCESSORIES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/main_categories/men/"+"jewelry"+"/all-products"}>FINE JEWELRY/WATCHES</a></li>
                               
                              </div>
                            <div style={{padding  :"0px 20px"}}>
                            <li><a href={"/mains-categories/"+"women"+"/all-products"}><b style={{borderBottom : "1px solid white",borderBottom  :"1px solid black" ,fontSize   :"22px"}}>Women</b></a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}}  href={"/main_categories/women/"+"bags"+"/all-products"}>BAGS</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}}  href={"/main_categories/women/"+"shoes"+"/all-products"}>SHOES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}}  href={"/main_categories/women/"+"accessories"+"/all-products"}>ACCESSORIES</a></li>
                            <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}}  href={"/main_categories/women/"+"jewelry"+"/all-products"}>FINE JEWELRY/WATCHES</a></li>
                              </div>
                            <div style={{padding  :"10px 20px"}}>
                                <li><a href={"/mains-categories/"+"sale"+"/all-products"}><b style={{borderBottom : "1px solid white",borderBottom  :"1px solid black" ,fontSize   :"22px"}}>Sale</b></a></li>
                              </div>
                            </div>
                    {/* <li><Link to={"/all-shop"}>All Products</Link></li> */}
              </ul>
                        
                        
                        
                        </li>
                      <li style={{padding: "1px 0px"}}  className="nav-item changer">
                        <Link  className="nav-link" style={{cursor : "pointer"}}>Designers
                        
                        <span className='change-plus' style={{
                          position: "absolute",
                          right: "10%",
                          fontSize: "27px",
                          top: "-2px",
                      
                        }}
                        onClick={()=>{
                          if(document.getElementById("sub-menu6").style.display === "none")
                          document.getElementById("sub-menu6").style.display = "block"
                          else 
                          document.getElementById("sub-menu6").style.display = "none"
                        }}
                        >+</span>
                        
                        
                        </Link>
                        <ul className="sub-menu">
                          
                {MainCategories.map((res,i)=>{
                  return (
                    <li><a style={{fontWeight : "bold" ,fontSize : "17px",paddingLeft  : "20px",fontFamily: "monospace"}} href={"/categories/"+res.MainCategories+"/all-products"}>{res.MainCategories}</a></li>

                  )
                })

                }
                    {/* <li><Link to={"/all-shop"}>All Products</Link></li> */}
              </ul>
                        <ul className="sub-menu4" id="sub-menu6">
                {MainCategories.map((res,i)=>{
                  return (
                    <li><a style={{fontWeight : "bold" ,padding  :"10px 20px",fontSize   :"18px",paddingLeft  : "20px"}}  href={"/categories/"+res.MainCategories+"/all-products"}>{res.MainCategories}</a></li>

                  )
                })

                }
                    {/* <li><Link to={"/all-shop"}>All Products</Link></li> */}
              </ul>
                        </li>
                      <li  style={{padding: "1px 0px"}} className="nav-item"><a   className="nav-link" style={{cursor : "pointer"}} href="/consign">Consign</a></li>
                      {/* <li className="nav-item"><Link  className="nav-link" style={{cursor : "pointer"}} href="/">Blog</Link></li> */}
                      <li   style={{padding: "1px 0px"}} className="nav-item"><a   className="nav-link" style={{cursor : "pointer"}} href="/FAQ">FAQ</a></li>
                      <li  style={{padding: "1px 0px"}}  className="nav-item"><a   className="nav-link" style={{cursor : "pointer"}} href="/contact">Contact</a></li>
                      <li  style={{padding: "1px 0px"}}  className="nav-item"><a   className="nav-link" style={{cursor : "pointer"}} href="/track">Tracking</a></li>
                      {/* <li className="nav-item"><a className="nav-link"><Link to="/about">About Us</Link></a></li> */}
                      {/* <li className="dropdown">
                        <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                        <ul className="dropdown-menu">
                          <li><a href="shop.html">Sidebar Shop</a></li>
                          <li><a href="shop-detail.html">Shop Detail</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="my-account.html">My Account</a></li>
                          <li><a href="wishlist.html">Wishlist</a></li>
                        </ul>
                      </li> */}
                      {/* <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li> */}
                      {/* <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li> */}
                      <li  className="nav-item" onClick={()=>{
                        setDisplaySearch(!DisplaySearch)
                        if(document.getElementById("navbar-menu").style.display === "none")
                        document.getElementById("navbar-menu").style.display = "block"
                        else 
                        document.getElementById("navbar-menu").style.display = "none"
                        }} style={{cursor : "pointer",padding: "22px 0px"}}><SearchIcon style={{marginTop : "13px"}}/></li>
                    </ul>
                  </div>
                  {/* /.navbar-collapse */}
                  {/* Start Atribute Navigation */}
                 
                  <div className="attr-nav">
                    <ul>
                      {/* <li className="search" onClick={()=>setChanger155()}><a href="#">
                      <SearchIcon  className="icon icon-search2"  style={{height : "auto"}}  onClick={()=>SubmitData4534()}/>
                        </a></li> */}
                      <li className="side-menu">
                        <a href="/cart">
                        <ShoppingCartIcon    /> 
                          <span className="badge">{DataPart2.length}</span>
                          <p>My Cart</p>
                        </a>
                      </li>
                    </ul>
                  </div>









                  <div className="attr-nav display-change-none">
                    <ul>
                    
                      <li className="side-menu">
                        <a>
                        <MenuIcon  style={{fontSize :"30px"}} onClick={()=>setDisplayMenu(!DisplayMenu)} /> 
                        </a>
                      </li>
                    </ul>
                  </div>
                
                      {/* <li className="search" onClick={()=>setChanger155()}><a href="#">
                      <SearchIcon  className="icon icon-search2"  style={{height : "auto"}}  onClick={()=>SubmitData4534()}/>
                        </a></li> */}
                      {/* <li className='display-change-none' style={{marginLeft :"50px",cursor : "pointer"}}>
                        <MenuIcon  style={{fontSize :"30px"}} onClick={()=>setDisplayMenu(!DisplayMenu)} /> 
                      </li> */}
                   
                  {/* End Atribute Navigation */}
                </div>
                {/* Start Side Menu */}
                
                {/* End Side Menu */}
              </nav>
              {/* End Navigation */}
            </header>
            {/* End Main Top */}
            {/* Start Top Search */}
            {DisplayMenu
            ?
              <div style={{padding : "10% 70px",background : "black", width : "30%" , position : "fixed" , right : "0px" , height : "100%" , zIndex : "999999",top : "0px"}}>
                <ClearIcon style={{position : "absolute" ,right: "40px",top: "64px", color : "white"}} onClick={()=>setDisplayMenu(!DisplayMenu)}/> 
                <h2 style={{textAlign  : "center" , color : "white"}}>Contact Us</h2>
                        <ul  style={{color : "white" ,fontSize : "17px",cursor : "pointer"}} >
                          <li>
                            <p className='align-change' style={{color : "white" ,fontSize : "19px"}}><LocationOnIcon />Address: </p>
                          </li>
                          <li>
                            <p className='align-change' style={{color : "white" ,fontSize : "19px"}}><PhoneForwardedIcon/>Phone: <a href="tel:+923333731804" style={{color : "white" ,fontSize : "19px"}}>+49 176 37328006</a></p>
                          </li>
                          <li>
                            <p className='align-change' style={{color : "white" ,fontSize : "19px"}}><SendIcon />Email: <a href="mailto:contactinfo@gmail.com" style={{color : "white" ,fontSize : "19px"}}>info@d-luxe-house.com</a></p>
                          </li>
                        </ul>
                        <br />
                        <br />
                      <center>
                        <ul  style={{color : "white" ,fontSize : "17px"}}>
                        <p>STAY CONNECTED</p>
                        <ul>
                          <li><a href=""><FacebookIcon style={{color : "white"}}/></a></li>
                          <li><a href=""><InstagramIcon  style={{color : "white"}}/></a></li>
                          <li><a href=""><LinkedInIcon  style={{color : "white"}}/></a></li>
                          <li><a href=""><YouTubeIcon style={{color : "white"}}/></a></li>
                          <li><a href=""><TwitterIcon  style={{color : "white"}}/></a></li>
                        
                        </ul>

                        </ul>
                      </center>
              </div>
            : ""

            }
            {DisplaySearch
            ? 
            <div className="top-search" style={{background : "black",position: "fixed",
            width: '100%',
            top: '105px',
            zIndex: "8"}}>
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon" onClick={()=>SubmitData4534()}><SearchIcon /></span>
                  <input type="text" className="form-control" placeholder="Search" style={{background : "black",color : "white"}} value={search} onChange={(e)=>setSearch(e.target.value)}/>
                  <span className="input-group-addon close-search" onClick={()=>setDisplaySearch(!DisplaySearch)}><ClearIcon/></span>
                </div>
              </div>
            </div>
            : ""

            }
            </>
        )
}

export default Header;