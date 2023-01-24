import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Contact = (props)=>  {


    useEffect(() => {
        window.scrollTo(0, 0)

    }, []);




        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Privacy Policy</strong></div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{width : "99% " ,padding : "80px 30px"}}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div style={{fontWeight :"bold"}}>
                                    <h1>Privacy Policy</h1>
                                    <p  style={{fontSize :"18px"}}>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.jadorecouture.ca (the “Site”).


</p>
<br />
                                    <h1>PERSONAL INFORMATION WE COLLECT

</h1>
                                    <p  style={{fontSize :"18px"}}>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
<br />
The cookies that we use help us gather information to enhance your experience. The cookies (mentioned below) policy regarding how we process them is explained in this section.
<br />

1) Customer Preference Cookie: The website stores your information like your preference, location that you provide while registering.
<br />

2)Website Functionality Cookies: These cookies let you use the shopping basket, etc.
<br />

3)Advertising Cookies: It helps us process our campaigns on the basis of your information and measure its effectiveness.
<br />
4)Website Analytics Cookies: These cookies help us analyze our customers’ interaction with the website.
<br />
By using our website, you give us permission to record data and send cookies to your device in order to distinguish you from other users on the website and access them the next time you visit the website. You can disable cookies or delete them from time to time. Disabling cookies may hamper access of some features. Please note that a small amount of information will continue being retrieved from your website for basic functionalities.

Server Statistics. We collect general statistics to track user trends on our site. These statistics include hits to our server, the types of browsers used to access our website, page views, and navigational patterns. The information that is collected in this manner does NOT provide us with any personally identifiable information about our users. It helps us track “where” our users are coming from. This allows us to pinpoint high traffic areas and determine the most effective ways to communicate with our users. As part of that ongoing analysis, our Site also uses devices called “web beacons” to help us identify when emails sent to you have been received and read. In order to prevent the introduction of viruses and hackers into the Site we may collect information, such as IP addresses, into a log file to be used to identify potential hackers of the Site.
</p>
   <br />

<h1>HOW WE USE YOUR INFORMATION

</h1>
                                    <p  style={{fontSize :"18px"}}>We may use your data for the following purposes where it is in our interests to do so, in order to provide the Services in accordance with the Terms of Use or where we are legally required:
<br />
1) To provide you with the Services and the products and services you request.
<br />
2) To administer your Jadore Couture Consignment Ltd
<br />
3) To communicate with you about your account or transactions with us and send you information about features of the Services or changes to our policies.
<br />
4) To process payments.
<br />
5) To ensure consistency with local law and choices and controls that may be available to you.
<br />
6) To personalize content and experiences and advertising.
<br />
7) To detect, investigate and prevent activities that may violate our policies or be illegal.
<br />
8) To optimize or improve the content, products, services, and features of the Services.
<br />
9) To personalize and improve the Services and user experiences, to increase the functionality and user friendliness of the Services, to deliver content or features that match user profiles or interests.
<br />
10) To monitor and analyze the Services usage and trends and otherwise measure the effectiveness of the Services.

<br />
We, or third parties with whom we contract or partner, may also send you offers and promotions for our products and services (although where required by applicable law, we will only do so with your consent).

</p>
<br />
<h1>DISCLOSURE OF YOUR PERSONAL INFORMATION


</h1>
                                    <p  style={{fontSize :"18px"}}>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.

</p><br />
                                    <h1>PROTECTION OF YOUR PERSONAL INFORMATION

</h1>
<p  style={{fontSize :"18px"}}>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption.  Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.

</p><br />
                                    <h1>SUMMARY

</h1>
<p  style={{fontSize :"18px"}}>Jadore Couture Consignment Ltd is committed to protecting your privacy. The information collected from our Site helps us better understand our market and consumer interests. This allows us to serve our customers and business associates with the level of satisfaction they deserve.

</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    
}


export default Contact;