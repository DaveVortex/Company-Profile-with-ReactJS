import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/Carousel.css'
import { Carousel } from 'react-responsive-carousel';
import JarOfCoinImg from '../images/aktuaria-SKM.jpg'
import ActuaryScienceImg from '../images/Aktuaria-science.jpg'
import InsuranceImg from '../images/Insurance.jpg'

export default function HomeCarousel() {
  return (
    <Carousel className="carousel" infiniteLoop swipeable showThumbs={false}>
      <div className="carousel-card">
        <img className="carousel-image" src={JarOfCoinImg} height={"320px"} alt="itsAJarOfCoin" />
        <div className="carousel-text">
          <h2>Perhitungan Valuasi Aktuaria Dana Pensiun</h2>
          <p>Kami memberikan jasa valuasi aktuaria untuk tujuan pendanaan Dana Pensiun dengan menetapkan besar kewajiban dengan iuran-iuran yang diperlukan, baik untuk keperluan pembentukan Dana Pesiun baru, pelaporan aktuaris berkala.</p>
          <div className="carousel-button">
            <button id="download-btn">Download</button>
            <button id="services-btn" href="">Services</button>
          </div>
        </div>
      </div>
      <div className="carousel-card">
        <img className="carousel-image" src={ActuaryScienceImg} height={"320px"} alt="paperFullOfNumbers" />
        <div className="carousel-text">
          <h2>Valuasi Aktuaria Imbalan Kerja</h2>
          <p>Our platform provides accurate and up-to-date salary information for actuaries across various industries and experience levels. With ActuaryPay, you can easily compare your salary to others in your field and make informed decisions about your career. Our data is sourced from reputable industry surveys and is regularly updated to reflect the latest trends and changes in the job market.</p>
        </div>
      </div> 
      <div className="carousel-card">
        <img className="carousel-image" src={InsuranceImg} height={"320px"} alt="spendMoneyToSaveLives" />
        <div className="carousel-text">
          <h2>Valuasi Aktuaria Asuransi</h2>
          <p> Our platform provides accurate and reliable actuarial analysis to help insurance companies make informed decisions about their risk management strategies. With ActuaryInsure, insurance companies can leverage our expertise to develop customized insurance products that meet the unique needs of their customers. Our team of experienced actuaries uses advanced statistical models to analyze data and predict future trends, enabling insurance companies to price their products accurately and manage risk effectively.</p>
        </div>
      </div>
    </Carousel>
  );
}


