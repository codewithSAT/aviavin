import React from 'react';
import './navStyles.css';
import { Link } from 'react-router-dom';
import logo from '../assets/AVIAVIN-logos_transparent.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/home" style={{ marginRight: 'auto', fontSize: '20px' }}>
        AVIAVIN
      </a>
      <a href="/services" id="services">
        services
      </a>
      <a href="/projects" id="projects">
        projects
      </a>
      <a href="/about" id="about">
        about
      </a>

      <button id="contact" onClick={() => (window.location.href = '/contact')}>
        Contact
      </button>
    </div>
  );
};

export default Navbar;
