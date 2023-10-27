import React from 'react';
import HomeVideo from '../videos/counting-money-pexels.mp4'
import '../styles/HeroVideo.css'

class HomeVideoComponent extends React.Component {
    render() {
        return (
        <div className='hero'>
            <div className='mask'>
                <video className='intro-video' src={HomeVideo} autoPlay loop muted />
            </div>                                         
            <div className='content'>
                <h1>PT. Abadi Makmur Jaya</h1>
                <p>Kami Memberikan Pelayanan Terbaik & Terpercaya</p>
                <div className="button" id="button-2">
                    <div id="slide"></div>
                    <a href="/contact-us">Contact Us</a>
                </div>
                <div className="button" id="button-2">
                    <div id="slide"></div>
                    <a href="/about-us">About Us</a>
                </div>
            </div>                                                       
        </div>
        );
      }
    }
    
export default HomeVideoComponent;