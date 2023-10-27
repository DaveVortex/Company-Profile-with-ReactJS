import '../styles/Footer.css'
 
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <div>
                            <p>
                            <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}} />
                            123 Main St, Anytown, CA 12345</p>
                            <p style={{marginLeft: "3.3rem"}}>California, United States</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}} />   
                        Contact Us at:</h4>
                        <p style={{marginLeft: "3rem"}}>(555) 123-4567 (TechGenius Technologies)</p>
                        
                    </div>
                    <div className='email'>
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}} />   
                        info@acme.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About The Company</h4>
                    <p>TechGenius is a leading technology company that specializes in developing cutting-edge software solutions for businesses of all sizes. With a team of experienced developers and engineers, TechGenius is dedicated to providing innovative and customized solutions that help businesses streamline their operations and improve their bottom line.</p>
                    <div className='social'>
                    <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaTwitter size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;