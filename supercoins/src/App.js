import React from 'react';
import Navbar from './navbar/Navbar';
import './index.css';
import Products from './products/Products';
import Footer from './footer/Footer';
import Carousel from './carousel/Carousel';

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Carousel />
      <Products />
      <Products />
      <Footer />
    </React.Fragment>
  );
}
