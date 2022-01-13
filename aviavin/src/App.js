import React from 'react';
import Navbar from './navbar/Navbar';
import './index.css';
import Products from './products/Products';
import Footer from './footer/Footer';
import Carousel from './carousel/Carousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Contactus from './contactus/Contactus';
import Menu from './menuBanner/Menu';
import Projects from './projects/Projects';
import Workshops from './workshops/Workshops';
import Services from './services/Services';

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
                <Menu />
                <Products /> <Footer />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={
              <>
                <Contactus /> <Footer />
              </>
            }
          />
        </Routes>
      </React.Fragment>
    </Router>
  );
}
