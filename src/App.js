import React from 'react'
import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import Artikel from './routes/Artikel';
import ContactUs from './routes/ContactUs';
import Klien from './routes/Klien';
import Layanan from './routes/Layanan';
import TenagaAhli from './routes/TenagaAhli';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';

const App = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/artikel' exact element={<Artikel />} />
      <Route path='/contact-us' exact element={<ContactUs />} />
      <Route path='/klien' exact element={<Klien />} />
      <Route path='/layanan' exact element={<Layanan />} />
      <Route path='/tenaga-ahli' exact element={<TenagaAhli />} />
      <Route path='/about-us' exact element={<AboutUs />} />
    </Routes>

  );
};

export default App;