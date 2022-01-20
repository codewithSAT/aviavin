import React from 'react';

import { servicesData } from '../data';
import img1 from '../assets/cyberdrone.jpg';
import img2 from '../assets/service1.jpg';
import img3 from '../assets/droneassembly.jpg';
import img4 from '../assets/droneCam.jpg';

import './serviceStyles.css';

const Services = () => {
  const images = [img1, img2, img3, img4];
  let count = 0;

  console.log(servicesData);
  return (
    <div className="services">
      {servicesData.map((service) => (
        <div className="service" key={service.id}>
          <img
            src={images[count]}
            alt="Smiley face"
            className="serviceImage"
          ></img>

          <div className="serviceContent">
            <h2>{service.servicename}</h2>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
