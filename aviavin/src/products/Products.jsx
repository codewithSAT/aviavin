import React from 'react';
import { servicesData, projectsData, workshopsData } from '../data';

import simg1 from '../assets/fighter-jet-solid.svg';
import simg2 from '../assets/graduation-cap-solid.svg';
import simg3 from '../assets/tools-solid.svg';

import './productStyles.css';

const Products = () => {
  let c = 0;

  const servicesImages = [simg1, simg2, simg3];

  const services = servicesData.slice(0, 3);
  const projects = projectsData.slice(0, 3);
  const workshops = workshopsData.slice(0, 3);

  return (
    <div className="contentSection">
      <div className="heading">The services that we provide</div>
      <div className="products">
        {services.map((product, c) => (
          <article className="productCard" key={product.id}>
            <h1 id="name">{product.servicename}</h1>
            <img id="image" src={servicesImages[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div>
      <div className="heading">The workshops that we have conducted</div>
      <div className="workshopSection">
        <div className="workshopImageSection">
          <h2 style={{ color: 'white', fontWeight: 'normal' }}>
            MALLAREDDY UNIVERSITY
          </h2>
        </div>
        <div className="workshopContentSection">
          <h4>
            The focus of this training is to give students a hands-on experience
            on Drone construction and flying that are used in industries
            involved in Drones, Augmented Reality and Virtual Reality.
            Understanding the need of the students to start from basics, the
            training will start from introduction to concept of drone and go up
            to building your own drone.{' '}
          </h4>
          <a href="">Learn More</a>
        </div>
      </div>
      {/* <div className="heading">The Projects that we make</div>
      <div className="products">
        {projects.map((product, c) => (
          // console.log(product);
          <article className="productCard" key={c}>
            <h1 id="name">{product.projectname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description.substr(0, 40) + '...'}</p>
          </article>
        ))}
      </div> */}
    </div>
  );
};

export default Products;
