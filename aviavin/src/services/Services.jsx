import React from 'react';
import { servicesData } from '../data';
import img from '../assets/droneShot.jpg';
import './serviceStyles.css';

const Services = () => {
  console.log(servicesData);
  return (
    <div className="services">
      {servicesData.map((service) => (
        <div className="service" key={service.id}>
          <img src={img} alt="Smiley face" className="serviceImage"></img>
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
