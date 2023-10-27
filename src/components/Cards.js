import React from "react";
import '../styles/Cards.css'
import RetirementPlan from '../images/retirement-plan.jpeg' 
import PensionFund from '../images/pension-fund.jpeg'
import ProductInsurance from '../images/product-insurance.png'

export default function Cards() {
    return (
        <div className="container">
            <h1>Layanan Kami</h1>
            <h4>Keunggulan dalam Pelayanan Jasa Aktuaria</h4>
            <div className="card-container">
                <div className="cards">
                    <img className="card-image" src={RetirementPlan} />
                    <h2>Title</h2>
                    <p>Description</p>  
                </div>
                <div className="cards">
                    <img className="card-image" src={PensionFund} />
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
                <div className="cards">
                    <img className="card-image" src={ProductInsurance} />
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}