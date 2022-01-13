import React from 'react';
import { productsData } from '../data';
import './productStyles.css';

import img1 from '../assets/new/greenDrone.jpg';
import img2 from '../assets/new/greenDrone.jpg';
import img3 from '../assets/new/greenDrone.jpg';
const Products = () => {
  const images = [img1, img2, img3];
  let c = 0;
  return (
    <div className="contentSection">
      <div className="heading">The Projects that we make</div>
      <div className="products">
        {productsData.map((product, c) => (
          // console.log(product);
          <article className="productCard">
            <h1 id="name">{product.productname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div>
      <div className="heading">The services that we provide</div>
      <div className="products">
        {productsData.map((product, c) => (
          // console.log(product);
          <article className="productCard">
            <h1 id="name">{product.productname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div>
      <div className="heading">The workshops that we have conducted</div>
      <div className="products">
        {productsData.map((product, c) => (
          // console.log(product);
          <article className="productCard">
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
