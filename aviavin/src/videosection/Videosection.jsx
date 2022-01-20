import React from 'react';
import './videostyles.css';
import Trafic from './Trafic - 53902.mp4';
const Videosection = () => {
  return (
    <div className="videoContainer">
      <div class="videoOverlay">
        <video autoPlay muted loop>
          <source src={Trafic} type="video/mp4" />
        </video>
      </div>
      <div className="videoContent">
        <h1>SURVILLENCE</h1>
        <p1>Analyse the structures using Remote sensing </p1>
        <a href="">learn more</a>
      </div>
    </div>
  );
};

export default Videosection;
