import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return(
    <div className="header">
      <Link to="/" style={{textDecoration:"none"}}>
        <h1>PT. Abadi Makmur Jaya</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li class>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/layanan">Layanan</NavLink>
        </li>
        <li>
          <NavLink to="/tenaga-ahli">Tenaga Ahli</NavLink>
        </li>
        <li>
          <NavLink to="/klien">Klien</NavLink>
        </li>
        <li>
          <NavLink to="/artikel">Artikel</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ?
        (<FaTimes size={24} style={{color:"#ADD8E6"}}/>) :(<FaBars size={24} style={{color:"#ADD8E6"}}/>)}
      </div>
    </div>
  )
}

export default Navbar;