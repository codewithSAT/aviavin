import React from 'react';
import { servicesData, projectsData, workshopsData } from '../data';

import simg1 from '../assets/fighter-jet-solid.svg';
import simg2 from '../assets/graduation-cap-solid.svg';
import simg3 from '../assets/WORKSHOP.svg';
import simg4 from '../assets/tools-solid.svg';
import simg5 from '../assets/CUSTOMIZE.svg';
import simg6 from '../assets/FABRICATE.svg';
import workImg from '../assets/work.jpg';

import './productStyles.css';

const Products = () => {
  let c = 0;

  const servicesImages = [simg1, simg2, simg3, simg4, simg5, simg6];

  const services = servicesData.slice(0, 6);

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .1) 5%,rgba(0, 0, 0, 0)),url(${workImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="contentSection">
      <div className="heading">The workshops that we have conducted</div>
      <div className="workshopSection">
        <div className="workshopContentSection">
          <h4 style={{ fontWeight: 'normal' }}>
            The focus of this training is to give students a hands-on experience
            on Drone construction and flying that are used in industries
            involved in Drones, Augmented Reality and Virtual Reality.
          </h4>
        </div>
        <div className="workshopImageSection" style={styles}></div>
      </div>
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
