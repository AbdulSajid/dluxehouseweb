import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import aboutBlog from '../assets/images/blog_1.jpg';
// import person1 from '../assets/images/person_1.jpg';
// import person2 from '../assets/images/person_2.jpg';
// import person3 from '../assets/images/person_3.jpg';
// import person4 from '../assets/images/person_4.jpg';

class About extends Component {
    state = {

    }
    componentDidMount(){
        window.scrollTo(0, 0)

    }
    render() {
        return (
            <div>
            
            {/* End Main Top */}
            {/* Start Top Search */}
            
            {/* End Top Search */}
            {/* Start All Title Box */}
            <div className="all-title-box" style={{background : "black"}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>ABOUT US</h2>
                    <ul className="breadcrumb" style={{ background : "black",}}>
                      <li className="breadcrumb-item"><a href="#">Home / </a></li>
                      <li className="breadcrumb-item active" style={{color :"white"}}>ABOUT US</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End All Title Box */}
            {/* Start About Page  */}
            <div className="about-box-main">
              <div className="container">
                <div className="row">
                 
                  <div className="col-lg-12">
                    <p>KM Electronics was established in 2006. We are offering a broad range of Electronic Home Appliances as well as Commercial Appliances. Our product range include all kinds of Refrigerators, Freezers, Air Conditioners, Microwave Ovens, Washing Machines and much more. We are here to facilitate you and to provide you best quality products at the lowest prices.</p>
                    <a className="btn hvr-hover" href="#" style={{background  :"black"}}>Read More</a>
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                      <h3>We are Trusted</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                      <h3>We are Professional</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="service-block-inner">
                      <h3>We are Expert</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            {/* End About Page */}
            {/* Start Instagram Feed  */}
            
          </div>
        )
    }
}

export default About;