import React from 'react';
import Navbar from './navbar/Navbar';
import './index.css';
import Products from './products/Products';
import Footer from './footer/Footer';
import Carousel from './carousel/Carousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Contactus from './contactus/Contactus';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Carousel />
                <Products />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}
