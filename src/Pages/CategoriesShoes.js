import React from 'react'

import { Link } from 'react-router-dom'


import blog_1 from '../assets/images/blog_1.jpg';
import sho1 from '../assets/images/sho1.png';
import sho2 from '../assets/images/sho2.jpg';
import sho3 from '../assets/images/sho3.jpg';
import sho4 from '../assets/images/sho4.jpg';
import sho5 from '../assets/images/sho5.jpg';
import sho6 from '../assets/images/sho6.jpg';


import shoTy1 from '../assets/images/shoT1.jpg';
import shoTy2 from '../assets/images/shoT2.jpg';




const CategoriesShoes = () => {
    return (
        <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link>  <span className="mx-2 mb-0">/</span> <strong className="text-black">Footwear</strong></div>
                        </div>
                    </div>
                </div> 
                <section>
                    <div className="container-fuild">
                        <div className="col-xl-12 col-lg-12 col-md-12" style={{width : "100%", margin  : "0px",padding: "0px"}} >
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="1000">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                        </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active" >
                                                    <img class="d-block w-100" src={blog_1} alt="First slide"  style={{height:"300px"}}/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={blog_1} alt="Second slide"   style={{height:"300px"}}/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={blog_1} alt="Third slide"   style={{height:"300px"}}/>
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="d-block w-100" src={blog_1} alt="Fourth slide"   style={{height:"300px"}}/>
                                                </div>
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
                </section>
                
                <section>
                    <div className="container-fuild" style={{margin : "70px auto" , width : "93%"}}>
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <h2 style={{color : "black"}} > <b>Girls & Boys Footwear Shopping</b> </h2>
                                    <br/>
                                    <h4 style={{color : "black"}} >Featured Brands </h4>
                                    <center>
                                        <p style={{width : "320px" , border : "0.5px solid grey" }}></p>
                                    </center>
                                </div>
                                        <div className="arrival1">
                                            <Link to="/categories/books"><img src={sho1} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={sho2} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={sho3} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1">
                                            <img src={sho4} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={sho5} alt="" className="arrival-Photo11"/>
                                        </div>
                                        <div className="arrival1" >
                                            <img src={sho6} alt="" className="arrival-Photo11"/>
                                        </div>
                            </div>
                              
                            </div>
                </section>

                <section>
                    <div className="container-fuild" style={{margin : "70px 20px" , width : "93%"}}>
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 style={{color : "black"}} > <b>Shoes Types</b> </h2>
                                    {/* <br/> */}
                                    {/* <h4 style={{color : "black"}} >Featured Brands </h4> */}
                                    <center>
                                        <p style={{width : "220px" , border : "0.5px solid grey" }}></p>
                                    </center>
                                </div>
                            </div>
                                <div className="row justify-content-center">

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <Link to="/categories/shoes/products"><img src={shoTy1} alt="" className="shoes-type-Photo11"/></Link>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6" >
                                            <img src={shoTy2} alt="" className="shoes-type-Photo11"/>
                                        </div>
                                       
                                </div>
                            </div>
                </section>
        </div>
    )
}

export default CategoriesShoes