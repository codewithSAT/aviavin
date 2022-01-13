import React from 'react';
import { servicesData, projectsData, workshopsData } from '../data';
import img1 from '../assets/greenDrone.jpg';
import img2 from '../assets/robot.jpg';
import img3 from '../assets/drone3.jpg';
import './productStyles.css';

const Products = () => {
  let c = 0;
  const images = [img1, img2, img3];

  const services = servicesData.slice(0, 3);
  const projects = projectsData.slice(0, 3);
  const workshops = workshopsData.slice(0, 3);

  return (
    <div className="contentSection">
      <div className="heading">The services that we provide</div>
      <div className="products">
        {services.map((product, c) => (
          <article className="productCard" key={product.id}>
            <h1 id="name">{product.productname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div>
      <div className="heading">The Projects that we make</div>
      <div className="products">
        {projects.map((product, c) => (
          // console.log(product);
          <article className="productCard" key={c}>
            <h1 id="name">{product.productname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div>
      <div className="heading">The workshops that we have conducted so far</div>
      <div className="products">
        {workshops.map((product, c) => (
          // console.log(product);
          <article className="productCard" key={c}>
            <h1 id="name">{product.productname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Products;
