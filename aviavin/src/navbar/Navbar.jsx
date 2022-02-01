import React from 'react';
import { Link } from 'react-router-dom';
import './navStyles.css';
import menuIcon from '../assets/bars-solid.svg';
const Navbar = () => {
  let x = document.querySelectorAll('.navlinks');
  console.log(x);
  return (
    <div className="navbar">
      <Link to="/" id="logo" style={{ marginRight: 'auto', fontSize: '20px' }}>
        AVIAVIN
      </Link>
      <button
        className="hamburger"
        id="hamburger"
        onClick={() => {
          // console.log(document.getElementsByClassName('navlinks'));
        }}
      >
        <img src={menuIcon}></img>
      </button>

      <Link to="/services" className="navlinks">
        services
      </Link>
      <Link to="/projects" className="navlinks">
        projects
      </Link>
      <Link to="/workshops" className="navlinks">
        workshops
      </Link>
      <Link to="/about" className="navlinks">
        about
      </Link>
    </div>
  );
};

export default Navbar;
