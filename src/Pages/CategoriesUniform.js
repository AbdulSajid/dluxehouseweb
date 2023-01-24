import React from 'react'
import { Link } from 'react-router-dom'


import blog_1 from '../assets/images/blog_1.jpg';
import par1 from '../assets/images/par1.jpg';
import par2 from '../assets/images/par2.jpg';
import par3 from '../assets/images/par3.jpg';
import par4 from '../assets/images/par4.jpg';
import par5 from '../assets/images/par5.jpg';
import par6 from '../assets/images/par6.jpg';
import back from '../assets/images/back.jpg';


import s1 from '../assets/images/al-badar logo 01.png';
import s2 from '../assets/images/al-badar logo 02.png';
import s3 from '../assets/images/happy home school logo.jfif';
import s4 from '../assets/images/islamic institute for education logo1.jfif';
import u5 from '../assets/images/u5.jfif';


const CategoriesUniform = () => {
    return (
        <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link>  <span className="mx-2 mb-0">/</span> <strong className="text-black">Uniform</strong></div>
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
                                    <h2 style={{color : "black"}} > <b>Uniform for School Kids</b> </h2>
                                    <br/>
                                    <h4 style={{color : "black"}} > uniforms Categories </h4>
                                    <center>
                                        <p style={{width : "320px" , border : "0.5px solid grey" }}></p>
                                    </center>
                                </div>
                                <div className="arrival1" >
                                        <Link to="/categories/uniform/Al-bader"><img src={s1} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                        <Link to="/categories/uniform/badar"><img src={s2} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1">
                                        <Link to="/categories/uniform/hhs"><img src={s3} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                        <Link to="/categories/uniform/iife"><img src={s4} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1" >
                                        <Link to="/categories/uniform/tips"><img src={u5} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                                        <div className="arrival1">
                                            <Link to="/categories/uniform"><img src={par1} alt="" className="arrival-Photo11"/></Link>
                                        </div>
                            </div>
                               
                            </div>
                </section>
        </div>

    )
}

export default CategoriesUniform