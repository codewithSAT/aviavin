import React from 'react';
import './footerstyles.css';
import instagram from '../assets/instagram.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import whatsapp from '../assets/whatsapp.svg';
const Footer = () => {
  return (
    <div className="mainfooter">
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
      </div>
      <div className="bottomline">
        <section id="copyright">
          <h5 style={{ fontSize: '20px' }}>AVIAVIN </h5>
          <h5>Who we are </h5>
          <h5>Contact US </h5>
          <h5>Developer </h5>
          <h5>Business Information </h5>
          <h5>Feedback </h5>

          <a style={{ fontSize: '16px', color: '#6c7073', marginLeft: 'auto' }}>
            Copyright © 2021 AVIAVIN all Rights Reserved
          </a>
        </section>

        <section id="links">
          <img src={instagram} />
          <img src={telegram} />
          <img src={facebook} />
          <img src={youtube} />
          <img src={whatsapp} />
        </section>
      </div>
    </div>
  );
};

export default Footer;
