import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Spinner  } from 'react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


import blog_1 from '../assets/images/blog_1.jpg';
import par1 from '../assets/images/par1.jpg';
import par2 from '../assets/images/par2.jpg';
import par3 from '../assets/images/par3.jpg';
import par4 from '../assets/images/par4.jpg';
import par5 from '../assets/images/par5.jpg';
import par6 from '../assets/images/par6.jpg';
import back from '../assets/images/back.jpg';


import b1 from '../assets/images/b1.jpg';
import b2 from '../assets/images/b2.jpg';
import b3 from '../assets/images/b3.jpg';
import b4 from '../assets/images/b4.jpg';


const SubCategories = (props) => {

    const [Categories , setCategories] = useState([])
    const [Categories1 , setCategories1] = useState([])
    const [Homo , setHomo] = useState([])
    const [product , setproduct] = useState([])
    const [product1 , setproduct1] = useState([])
    const [UserDatat , setUserDatat] = useState({})
    const [userHeader , setuserHeader] = useState(false)
    const [SliderPhoto , setSliderPhoto] = useState([])
    const [ArrivalPhoto , setArrivalPhoto] = useState([])
    const [BannerPhoto , setBannerPhoto] = useState([])
    const [MainCatogories , setMainCatogories] = useState([])
    const [CategoriesName , setCategoriesname] = useState("")
    const [SubCategoriesName , setSubCategoriesname] = useState([])
    const [SubCategories , setSubCategories] = useState([])
    const [Heading , setHeading] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const dar = setInterval(() => {
        let Categoriesname = props.history.location.pathname.split("/")[2] ;
        setCategoriesname(props.history.location.pathname.split("/")[2])
        console.log(props.history.location.pathname.split("/")[2]);
        
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
    fetch("https://database-student-1-stop.herokuapp.com/createMainCateLine",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     } ,
    })
    .then(res5=>res5.json())
    .then(res6=>{
        // console.log(res1[0]);
        const data = res6.filter((res56,i)=>{
            // console.log(res56.Product_Catagories , props.history.location.pathname.split("/")[2]);
            return res56.Product_Catagories === props.history.location.pathname.split("/")[2]
        })
        console.log(data);
        setHeading(data)
    
    })
    
    fetch("https://database-student-1-stop.herokuapp.com/AllCategories",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     } ,
    })
    .then(res2=>res2.json())
    .then(res3=>{
        console.log(res3);
        const Data1 = res3.filter((res4,i)=>{
            if (res4.MainCategories === props.history.location.pathname.split("/")[2])
            return res4
        })
        console.log(res3);
        setSubCategories(Data1)
        // setSubCategoriesname(res3)
    let Categoriesname = props.match.params.categoriesName ;
            setCategoriesname(props.history.location.pathname.split("/")[2])
            console.log(123,props.history.location.pathname.split("/")[2])
        // console.log(props.history.location.pathname.split("/")[2]);
        
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
        fetch("https://database-student-1-stop.herokuapp.com/createMainCateLine",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     } ,
    })
    .then(res5=>res5.json())
    .then(res6=>{
        // console.log(res1[0]);
        const data = res6.filter((res56,i)=>{
            // console.log(res56.Product_Catagories , props.history.location.pathname.split("/")[2]);
            return res56.Product_Catagories === props.history.location.pathname.split("/")[2]
        })
        setHeading(data)
    
    })

    
    fetch("https://database-student-1-stop.herokuapp.com/AllCategories",{
        method: "GET",
         headers :  {
         "Content-Type" : "application/json" , 
     } ,
    })
    .then(res2=>res2.json())
    .then(res3=>{
        console.log(res3);
        const Data1 = res3.filter((res4,i)=>{
            if (res4.MainCategories === props.history.location.pathname.split("/")[2])
            return res4
        })
        setSubCategories(Data1)
        // setSubCategoriesname(res3)
    
    }) 
    })
},1000);

    return () => {
        clearInterval(dar)
    }
    }, [])

    
    return (
        <div>
         {/* <div class="spinner-border text-primary" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div> */}
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link>  <span className="mx-2 mb-0">/</span> <strong className="text-black">{CategoriesName}</strong></div>
                        </div>
                    </div>
                </div> 
                {/* <section>
                    <div className="container-fuild">
                        <div className="col-xl-12 col-lg-12 col-md-12" style={{width : "100%", margin  : "0px",padding: "0px"}} >
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000" auto-play="true">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                        </ol>
                                            <div class="carousel-inner">
                                            {
                                                SliderPhoto.length > 0 && SliderPhoto.map((res,i)=>{
                                                    console.log(res)
                                                        return (
                                                             <>
                                                            <div class="carousel-item active" >
                                                                <img class="d-block w-100" src={res.photo1} alt="First slide"  style={{height:"300px"}}/>
                                                            </div>
                                                       
                                                                <div class="carousel-item" >
                                                                    <img class="d-block w-100" src={res.photo2} alt="Second slide"  style={{height:"300px"}}/>
                                                                </div>
                                                                <div class="carousel-item" >
                                                                    <img class="d-block w-100" src={res.photo3} alt="Third slide"  style={{height:"300px"}}/>
                                                                </div>
                                                                <div class="carousel-item" >
                                                                    <img class="d-block w-100" src={res.photo4} alt="Fourth slide"  style={{height:"300px"}}/>
                                                                </div>
                                                            </>
                                                        )
                                                })
                                            }
                                              
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                        </div>
                    </div>
                </section> */}
                  {/* <div class="carousel-item active" >
                                                    <img class="d-block w-100" src={Ban1} alt="First slide"  style={{height:"300px"}}/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={Ban2} alt="Second slide"   style={{height:"300px"}}/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={Ban3} alt="Third slide"   style={{height:"300px"}}/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={blog_1} alt="Fourth slide"   style={{height:"300px"}}/>
                                                </div> */}

{SubCategories.length === 0 && SliderPhoto.length === 0?
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

                <section>
                    <div className="container-fuild" style={{margin : "70px auto" , width : "93%"}}>
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                <h2 style={{color : "black"}} > <b>{Heading.length > 0 ? Heading[0].Main_Heading_Categories : ""}</b> </h2>
                                {/* <h2 style={{color : "black"}} > <b>{Heading.length > 0 ? Heading[0].Main_Heading_Categories : ""}</b> </h2> */}
                                    {/* <br/>
                                    <h4 style={{color : "black"}} > {Heading.length > 0 ? Heading[0].Sub_Heading_Categories : ""} </h4> */}
                                    <center>
                                        <p style={{width : "320px" , border : "0.5px solid grey" }}></p>
                                    </center>
                                </div> 
                                {
                                    SubCategories.map((res,i)=>{
                                        return (
                                            <div className="arrival1">
                                                <Link to={"/main-categories/"+CategoriesName+"/"+res.CategoriesName}><img src={res.photo} alt="" className="arrival-Photo11"/></Link>
                                            </div>
                                        )
                                    })

                                } 
                                        {/* <div className="arrival1">
                                            <Link to="/categories/books"><img src={par1} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                            <Link to="/categories/shoes"><img src={par2} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                            <Link to="/categories/bags"><img src={par3} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                            
                                        <div className="arrival1">
                                            <img src={par4} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={par5} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1" >
                                        <Link to="/categories/uniform"><img src={u5} alt="" className="arrival-Photo11"/></Link>
                                        </div> */}
                            </div>
                               
                            </div>
                </section>



                {SubCategories.length === 0 && SliderPhoto.length === 0?
                          
  <center>
  <span style={{margin:  "auto"}}>
   <h3>No Categories Found !</h3>
</span>
  </center> 
     :  "" 
     
}






                {/* <section>
                    <div className="container-fuild" style={{margin : "70px auto" , width : "93%"}}>
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <h2 style={{color : "black"}} > <b>{CategoriesName} for Boys & Girls</b> </h2>
                                    <br/>
                                    <h4 style={{color : "black"}} > Featured Brands </h4>
                                    <center>
                                        <p style={{width : "320px" , border : "0.5px solid grey" }}></p>
                                    </center>
                                </div> 
                                <div className="arrival1">
                                            <Link to="/categories/bags/product"><img src={b1} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={b2} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={b3} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1">
                                            <img src={b4} alt="" className="arrival-Photo11"/>
                                        </div>
                            </div>
                                
                            </div>
                </section> */}
        </div>
    )
}

export default SubCategories ;