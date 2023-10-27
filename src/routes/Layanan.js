import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Actuary2 from '../images/actuary2.jpg'

export default function Layanan() {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="service-page">
                <h2>Our Services</h2>
                <img src={Actuary2} alt="actuary2"/>
            </div>
        </div>
        <Footer />
        </>
    );
}
