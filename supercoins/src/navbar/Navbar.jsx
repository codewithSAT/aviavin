import React from 'react';
import './navStyles.css';
import logo from '../assets/AVIAVIN-logos_transparent.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <img id="logo" src={logo} />

      <a id="services">services</a>
      <a id="projects">projects</a>
      <a id="about">about</a>

      <button id="contact">Contact</button>
    </div>
  );
};

export default Navbar;
