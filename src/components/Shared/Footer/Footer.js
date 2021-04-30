import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    // const noNamed = [
    //     { name: "Emergency Laptop Service" },
    //     { name: "Check for Repairs" },
    //     { name: "Data Recovery" },
    //     { name: "Check Up" },
    // ]
    // const ourAddress = [
    //     { name: "Science Lab - 1210 Dhaka" },
    //     { name: "Yards", link: "//google.com/map" },

    // ]
    // const oralHealth = [
    //     { name: "Emergency Dental Care", link: "/emergency" },
    //     { name: "Check Up", link: "/checkup" },
    //     { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    //     { name: "Tooth Extraction", link: "/tooth-extract" },
    //     { name: "Check Up", link: "/checkup" },
    //     { name: "Check Up", link: "/checkup" },
    //     { name: "Check Up", link: "/checkup" }
    // ]
    // const services = [
    //     { name: "Emergency Dental Care", link: "/emergency" },
    //     { name: "Check Up", link: "/checkup" },
    //     { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    //     { name: "Tooth Extraction", link: "/tooth-extract" },
    //     { name: "Check Up", link: "/checkup" },
    //     { name: "Check Up", link: "/checkup" },
    //     { name: "Check Up", link: "/checkup" }
    // ]
    return (
        // <footer className="footer-area clear-both">
        //     <div className="container pt-5">
        //         <div className="row py-5">
        //             <FooterInfo key={1} menuTitle={"."} menuItems={noNamed}/>
        //             <FooterInfo key={2} menuTitle="Services" menuItems={services}/>
        //             <FooterInfo key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
        //             <FooterInfo key={4} menuTitle="Our Address" menuItems={ourAddress}> 
        //                 <ul className="social-media list-inline">
        //                     <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
        //                     <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
        //                     <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
        //                 </ul>
        //                 <div className="mt-5">
        //                     <h6>Call now</h6>
        //                     <button className="btn btn-brand">+15816485295</button>
        //                 </div>
        //             </FooterInfo>
        //         </div>
        //         <div className="copyRight text-center">
        //             <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        //         </div>
        //     </div>
        // </footer>
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <p class="about">
                    <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
                <div class="icons">
                    <Link><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link>
                    <Link>  <FontAwesomeIcon className="icon" icon={faGooglePlusG} /></Link>
                    <Link><FontAwesomeIcon className="icon" icon={faInstagram} /></Link>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div>

                    <p><span> Science Lab,Dhanmondi,</span> Dhaka 1210, Bangladesh</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p> (+88) 01945-254-352</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="#"> office@regal-repairs.com</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h2> Regal  <span>Repairs</span></h2>
                <p class="menu">
                    <Link to='/home'>Home</Link>  |
                    <Link>Services |</Link>
                    <Link>Our Team |</Link>
                    <Link>Admin |</Link>
                    <Link>Contact</Link>
                </p>
                <p className='text-white'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                <small className='text-white'>Developed With Pure ♥ Love By <a href="https://web.facebook.com/parvezhasanrubel42/"> Parvez Hasan Rubel.</a></small>
            </div>
        </footer>

    );
};

export default Footer;