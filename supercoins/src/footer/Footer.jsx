import React from 'react';
import './footerstyles.css';
import emailIcon from '../assets/envelope-square-solid.svg';
const Footer = () => {
  return (
    <div className="footer">
      <section className="products">
        <h4>products</h4>
        <ul>
          <li>Consumer</li>
          <li>Professional</li>
          <li>Enterprise</li>
          <li>Components</li>
        </ul>
      </section>
      <section className="projects">
        <h4>projects</h4>
        <ul>
          <li>STEAM Education</li>
          <li>Mini Drones</li>
          <li>DJI Camera Drones</li>
          <li>TALON</li>
        </ul>
      </section>
      <section className="workshops">
        <h4>workshops</h4>
        <ul>
          <li>Fly Safe</li>
          <li>DJI Flying Tips</li>
          <li>Agricultural Drone</li>
          <li>Surveillance</li>
        </ul>
      </section>
      <section className="explore">
        <h4>Explore</h4>
        <ul>
          <li>Events</li>
          <li>Buying Guides</li>
          <li>Product Support</li>
          <li>Repair Services</li>
        </ul>
      </section>
      <section id="email">
        <input type="email" placeholder="your email address" />
        <img src={emailIcon} />
      </section>
    </div>
  );
};

export default Footer;
