import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_white_.png';
import './navbar.css';

// BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="rideease__navbar">
      <div className="rideease__navbar-links">
        <div className="rideease__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="rideease__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wrideease">About Us</a></p>
          <p><a href="#features">Our Vehicles</a></p>
          <p><a href="#location">Location</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className="rideease__navbar-sign">
        <p><button type="button">Hire a car</button></p>
        <p><button type="button">Hire out your car</button></p>
      </div>
      <div className="rideease__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={20} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={20} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="rideease__navbar-menu_container scale-up-center">
          <div className="rideease__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wrideease">About Us</a></p>
            <p><a href="#features">Our Vehicles</a></p>
            <p><a href="#location">Location</a></p>
            <p><a href="#blog">Blog</a></p>
          </div>
          <div className="rideease__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar
