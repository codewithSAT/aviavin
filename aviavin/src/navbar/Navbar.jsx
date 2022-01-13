import React from 'react';
import './navStyles.css';
import menuIcon from '../assets/bars-solid.svg';
const Navbar = () => {
  let x = document.querySelector('.navlinks');
  console.log(x);
  return (
    <div className="navbar">
      <a
        href="/home"
        id="logo"
        style={{ marginRight: 'auto', fontSize: '20px' }}
      >
        AVIAVIN
      </a>
      <button
        className="hamburger"
        id="hamburger"
        onClick={() => {
          // console.log(document.getElementsByClassName('navlinks'));
        }}
      >
        <img src={menuIcon}></img>
      </button>

      <a href="/services" className="navlinks">
        services
      </a>
      <a href="/projects">projects</a>
      <a href="/workshops">workshops</a>
      <a href="/about">about</a>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
