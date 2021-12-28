import React from 'react';
import Navbar from './navbar/Navbar';
import './index.css';
import Products from './products/Products';
import Footer from './footer/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Products /> */}
      <Footer />
    </React.Fragment>
  );
}
