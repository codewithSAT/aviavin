import React from 'react';
import { productsData } from '../data';
import './productStyles.css';
import drone2 from '../assets/r.png';
import hexa from '../assets/multi.png';
import img1 from '../assets/rc.png';
import img2 from '../assets/tel.png';
import img3 from '../assets/multi.png';
const Products = () => {
  const images = [img1, img2, img3, drone2];
  let c = 0;
  return (
    <><section class="drones">
      <h1>WELCOME TO AVIAVIN</h1>
      <p>WE PROVIDE</p>
      <div class="row">
        <div class="columbs">
          <div class="D">
          <h3><a href="">SURVILLENCE</a></h3>
        </div>
        </div>
      
      <div class="columbs">
        <div class="b">
        <h3><a href="">WORKSHOP</a></h3>
      </div></div>
      <div class="columbs">
        <div class="c">
        <h3><a href="">SERVICE</a></h3>
      </div>
      </div>
      </div>
    </section>
    <div className="allProducts">
        {productsData.map((product, c) => (
          // console.log(product);
          <article className="productCard">
            <h1 id="name">{product.productname}</h1>
            <img id="image" src={images[c]} />
            <p id="desc">{product.description}</p>
          </article>
        ))}
      </div></>
  );
};

export default Products;
