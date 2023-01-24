import React, { Component } from 'react';
import {Link} from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SendIcon from '@material-ui/icons/Send';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import { Flare } from '@material-ui/icons';
// import FacebookIcon from '@mui/icons-material/Facebook';
class Footer extends Component {

    render() {
        return (
            <>
            <footer>
              <div className="footer-main">
                <div className="container">
                  {/* <div className="row">
                    
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="footer-top-box">
                        <h3>Social Media</h3>
                        <p>STAY CONNECTED</p>
                        <ul>
                          <li><a href="https://www.facebook.com/kmelectronics/"><FacebookIcon/></a></li>
                          <li><a href="https://www.instagram.com/kmelectronics/"><InstagramIcon /></a></li>
                          <li><a href="https://www.linkedin.com/in/kmelectronics/"><LinkedInIcon /></a></li>
                          <li><a href="https://www.youtube.com/channel/UCUNCCx2Cvz0zajt3r-mat_w"><YouTubeIcon/></a></li>
                          <li><a href="https://twitter.com/kmelectronics/"><TwitterIcon /></a></li>
                        
                        </ul>
                      </div>
                    </div>
                  </div>
                  <hr /> */}
                  <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="footer-top-box">
                        <h3 className='align-change' style={{fontSize : "16px",fontWeight: "700",color: "#fff",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    position: "relative",
    fontWeight: 700}}>Social Media</h3>
                        <p>STAY CONNECTED</p>
                        <ul>
                          <li><a href=""style={{cursor : "pointer"}}><FacebookIcon/></a></li>
                          <li><a href=""style={{cursor : "pointer"}}><InstagramIcon /></a></li>
                          <li><a href=""style={{cursor : "pointer"}}><LinkedInIcon /></a></li>
                          <li><a href=""style={{cursor : "pointer"}}><YouTubeIcon/></a></li>
                          <li><a href=""style={{cursor : "pointer"}}><TwitterIcon /></a></li>
                        
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="footer-widget">
                        <h4>About Freshshop</h4>
                        <p style={{color : "white" ,fontSize : "15px"}}>KM Electronics was established in 2006. We are offering a broad range of Electronic Home Appliances as well as Commercial Appliances. Our product range include all kinds of Refrigerators, Freezers, Air Conditioners, Microwave Ovens, Washing Machines and much more. We are here to facilitate you and to provide you best quality products at the lowest prices.</p> 
                      </div>
                    </div> */}
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <div className="footer-link">
                        <h4 className='align-change'>Information</h4>
                        <div className='change-align-flex' style={{display:'flex'}}>
                        <ul >
                          <li><Link to="/about" style={{cursor : "pointer"}}>     About Us</Link></li>
                          <li><Link to="/contact"style={{cursor : "pointer"}}>     Contact Us</Link></li>
                          {/* <li><Link to="/shop">     Shop</Link></li> */}
                          <li><Link to="/track"style={{cursor : "pointer"}}>     Tracking</Link></li>
                          <li><Link to="/FAQ"style={{cursor : "pointer"}}>     FAQ</Link></li>
                          </ul>
                        <ul >
                          <li><Link to="/cart"style={{cursor : "pointer"}}>     Cart</Link></li>
                          <li><Link to="/term-policy"style={{cursor : "pointer"}}>     Terms &amp; Conditions</Link></li>
                          <li><Link to="/privacy"style={{cursor : "pointer"}}>     Privacy Policy</Link></li>
                          {/* <li><Link to="/">Delivery Information</a></li> */}
                        </ul>
                        </div>
                      </div>    
                    </div>
                    {/* <div className="col-lg-4 col-md-12 col-sm-12">
                      <div className="footer-link-contact">
                        <h4 className='align-change'>Contact Us</h4>
                        <ul  style={{color : "white" ,fontSize : "17px"}}>
                          <li>
                            <p className='align-change' style={{color : "white" ,fontSize : "15px"}}><LocationOnIcon />Address: ABDULLAH . SADDAR KARACHI <br/> Karachi, Sindh, Pakistan-75300 </p>
                          </li>
                          <li>
                            <p className='align-change' style={{color : "white" ,fontSize : "15px"}}><PhoneForwardedIcon/>Phone: <a href="tel:+923333731804" style={{color : "white" ,fontSize : "15px"}}>+92 333 3731804</a></p>
                          </li>
                          <li>
                            <p className='align-change' style={{color : "white" ,fontSize : "15px"}}><SendIcon />Email: <a href="mailto:contactinfo@gmail.com" style={{color : "white" ,fontSize : "15px"}}>contactinfo@gmail.com</a></p>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </footer>
            {/* End Footer  */}
            {/* Start copyright  */}
            <div className="footer-copyright">
              <p className="footer-company">All Rights Reserved. © 2022 </p>
                {/* <a href="https://webocreators.com">Webo Creator</a> */}
            </div>
            </>
        )
    }
}

export default Footer;