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
                            <div className="col-md-12 mb-0"><Link to="/">Home</Link> <span className="mx-2 mb-0">/</span> <strong className="text-black">Term & Conditions</strong></div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{width : "99% " ,padding : "80px 30px"}}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div style={{fontWeight :"bold"}}>
                                    <h1>TERMS AND CONDITIONS
</h1>
                                    <p  style={{fontSize :"18px"}}>This website is operated by Jadore Couture Consignment Ltd. Throughout the site, the terms “we”, “us” and “our” refer to Jadore Couture Consignment Ltd. Jadore Couture Consignment Ltd. offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
<br />
By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
<br />

Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.
<br />

Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.
<br />

All prices are in Canadian dollars.


</p>
<br />
                                    <h1>ACCOUNT REGISTRATION


</h1>
                                    <p  style={{fontSize :"18px"}}>To register an account on the Services, you must be able to form legally binding contracts (for example, you cannot use the Services if you are under 18 years old or the age of legal majority in your jurisdiction).
<br />
You do not need to create an account on the Services (a “User Account”) to use the public features of the Services, however, you do need a User Account to receive new item alerts, use account balances towards purchases of goods, manage and make layaway payments, add items to your cart, and manage shipping and tracking information. You may create a User Account by completing the registration process set forth on the Website. You are responsible for providing and maintaining current your accurate contact information, which may include name, email address, shipping address, phone number, payment information, and other account information. Telephone calls and email correspondence with Jadore Couture Consignment Ltd. may be recorded or monitored.
<br />

You are the sole authorized user of your User Account. You are responsible for maintaining the confidentiality of any password and account name/number provided by you or Jadore Couture Consignment Ltd. for accessing the Services. You are solely and fully responsible for all activities that occur under your password or account. Jadore Couture Consignment Ltd. has no control over the use of your or any user’s account and expressly disclaims any liability derived therefrom. Should you suspect that any unauthorized party may be using your password or account or you suspect any other breach of security, you will cease all use and contact Jadore Couture Consignment Ltd. immediately by emailing us at consign@jadorecouture.ca.
</p>
   <br />

<h1>SITE TRANSACTIONS


</h1>
                                    <p  style={{fontSize :"18px"}}>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event we make a change to or cancel an order, we will attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.


</p>
<br />
<h1>RIGHT TO CHANGE SITES



</h1>
                                    <p  style={{fontSize :"18px"}}>We reserve the right, at any time in our sole discretion, to: modify, suspend or discontinue the Site or any service, content, feature or product offered through the Site, with or without notice; charge fees in connection with the use of the Site; modify and/or waive any fees charged in connection with the Site; and/or offer opportunities to some or all users of the Site. You agree that we shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Site, or any service, content, feature or product offered through the Site.
<br />
You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.
</p><br />
                                    <h1>MODIFICATIONS TO THE SERVICE AND PRICES


</h1>
<p  style={{fontSize :"18px"}}>Prices for our products are subject to change without notice.
<br />
We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
<br />

We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
</p><br />
                                    <h1>PRODUCTS OR SERVICES 


</h1>
<p  style={{fontSize :"18px"}}>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor’s display of any color will be accurate.

<br />

We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.
<br />

We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.

</p>
                                    <h1>ACCURACY OF BILLING AND ACCOUNT INFORMATION



</h1>
<p  style={{fontSize :"18px"}}>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.


</p>
<br />
                                    <h1>PERSONAL INFORMATION




</h1>
<p  style={{fontSize :"18px"}}>Your submission of personal information through the store is governed by our Privacy Policy. 


</p>
<br />
                                    <h1>GOVERNING LAW




</h1>
<p  style={{fontSize :"18px"}}>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of British Columbia, Canada.


</p>
<br />
                                    <h1>DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY





</h1>
<p  style={{fontSize :"18px"}}>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
<br />
We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.

<br />
You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
<br />

You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.

<br />
In no case shall Jadore Couture Consignment Ltd., our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such jurisdictions, our liability shall be limited to the maximum extent permitted by law.
</p>
<br />
                                    <h1>SITE CONTENT





</h1>
<p  style={{fontSize :"18px"}}>Jadore Couture Consignment Ltd. and other marks, graphics, typefaces, trade names and logos appearing on the Site are trademarks of Jadore Couture Consignment Ltd. All other trademarks appearing on the Site are the property of their respective owners, including, in some instances, us. Our trademarks may not be used in any manner for any purpose without our express written consent in each instance. Patents used in connection with the Site are the property of their respective owners, which may include us. The Site contains copyrighted material, including, without limitation, text, software, photos, audio and video clips, graphics, illustrations, images, logos, and music and sound (collectively, the “Content”). This Site is protected by copyright as a collective work, pursuant to Canada copyright laws, international conventions, and other copyright laws. Jadore Couture Consignment Ltd. and third party content providers also own copyrights in the content original to it.
<br />
The Site and the Content are intended solely for personal, non-commercial use. You may download or copy the Content and other downloadable materials displayed on the Site for your personal use only. No right, title or interest in any downloaded Content is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or exploit in any way any of the Content or the Site.
<br />

Unless otherwise specified, the Site and the Content are intended to promote Jadore Couture Consignment Ltd.’s products and services available in Canada. The Site is controlled and operated by Jadore Couture Consignment Ltd.

</p>
<br />
                                    <h1>INDEMNIFICATION






</h1>
<p  style={{fontSize :"18px"}}>You agree to indemnify, defend and hold harmless Jadore Couture Consignment Ltd. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.



</p>
<br />
                                    <h1>SEVERABILITY






</h1>
<p  style={{fontSize :"18px"}}>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.


</p>
<br />
                                    <h1>TERMINATION







</h1>
<p  style={{fontSize :"18px"}}>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
<br />
These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.
<br />

If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).

</p>
<br />
                                    <h1>ENTIRE AGREEMENT







</h1>
<p  style={{fontSize :"18px"}}>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.
<br />
These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).
<br />

Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party
</p>
<br />
                                    <h1>CHANGES TO TERMS OF SERVICE








</h1>
<p  style={{fontSize :"18px"}}>You can review the most current version of the Terms of Service at any time at this page.
<br />
We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.
</p>
<br />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    
}


export default Contact;