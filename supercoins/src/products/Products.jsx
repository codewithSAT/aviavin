import React from 'react';
import { productsData } from '../data';
import './productStyles.css';
import drone2 from '../assets/drone.png';
import hexa from '../assets/hexa.png';
import img1 from '../assets/carasoel1.png';
import img2 from '../assets/carasoel2.png';
import img3 from '../assets/carasoel3.png';
const Products = () => {
  const images = [img1, img2, img3, drone2];
  let c = 0;
  return (
    <div className="allProducts">
      {productsData.map((product, c) =>(
        // console.log(product);
        <article className="productCard">
          <h1 id="name">{product.productname}</h1>
          <img id="image" src={images[c]} />
          <p id="desc">{product.description}</p>
        </article>
      ))}
    </div>
  );
};

export default Products;
