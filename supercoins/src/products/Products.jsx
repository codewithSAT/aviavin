import React from 'react';
import { productsData } from '../data';
import './productStyles.css';
const Products = () => {
  return (
    <div className="allProducts">
      {productsData.map((product) => (
        // console.log(product);
        <div className="productCard">
          <h1 id='h1'>{product.name}</h1>
          <p id='p'>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
