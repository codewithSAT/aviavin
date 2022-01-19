import React from 'react';
import './navStyles.css';
import menuIcon from '../assets/bars-solid.svg';
const Navbar = () => {
  let x = document.querySelectorAll('.navlinks');
  console.log(x);
  return (
    <div className="navbar">
      <a href="/" id="logo" style={{ marginRight: 'auto', fontSize: '20px' }}>
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
      <a href="/projects" className="navlinks">
        projects
      </a>
      <a href="/workshops" className="navlinks">
        workshops
      </a>
      <a href="/about" className="navlinks">
        about
      </a>
      <a href="/contact" className="navlinks">
        Contact
      </a>
      <a className="navlinks" onClick={() => {}}>
        X
      </a>
    </div>
  );
};

export default Navbar;
