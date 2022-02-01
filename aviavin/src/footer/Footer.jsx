import React from 'react';
import './footerstyles.css';
import instagram from '../assets/instagram.svg';
import telegram from '../assets/telegram.svg';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import Contactus from '../contactus/Contactus';

const Footer = () => {
  return (
    <div className="mainfooter">
      <Contactus />

      <div className="bottomline">
        <section id="copyright">
          <a style={{ fontSize: '20px' }}>AVIAVIN </a>
          <a href="./about">Who we are </a>
          <a>Business Information </a>
          <a>Feedback </a>
          <a href="https://github.com/codewithSAT" target="_blank">
            Developer{' '}
          </a>

          <a style={{ fontSize: '16px', color: '#6c7073', marginLeft: 'auto' }}>
            Copyright © 2021 AVIAVIN all Rights Reserved
          </a>
        </section>
        <section id="links">
          <img src={instagram} />
          <img src={telegram} />
          <img src={facebook} />
          <img src={youtube} />
          {/* <img src={whatsapp} /> */}
        </section>
      </div>
    </div>
  );
};

export default Footer;
