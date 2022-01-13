import React from 'react';
import { workshopsData } from '../data';
import img from '../assets/new/droneShot.jpg';
import './workshopStyles.css';

const Workshops = () => {
  console.log(workshopsData);
  return (
    <div className="workshops">
      {workshopsData.map((workshop) => (
        <div className="workshop" key={workshop.id}>
          <img src={img} className="workshopImage"></img>
          <div className="workshopContent">
            <h2>{workshop.workshopname}</h2>
            <p>{workshop.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshops;
