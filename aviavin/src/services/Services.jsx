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

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .1) 1%, rgba(0, 0, 0, 0)7% ),url(${images[count]})`,
    backgroundColor: 'green',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="services">
      {servicesData.map((service) => (
        <div className="service" style={styles} key={service.id}>
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
