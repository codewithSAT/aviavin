import React from 'react';
import Navbar from './navbar/Navbar';
import './index.css';
import Products from './products/Products';
import Footer from './footer/Footer';
import HeroSection from './hero/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './about/About';
import Contactus from './contactus/Contactus';
import Menu from './menuBanner/Menu';
import Projects from './projects/Projects';
import Workshops from './workshops/Workshops';
import Services from './services/Services';
import StickyButton from './StickyButton';
import Videosection from './videosection/Videosection.jsx';
import Surveillance from './surveillance/Surveillance';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar showform={false} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <StickyButton />
                <HeroSection />
                <Menu />
                <Videosection />
                <Products />
                <Footer />
              </>
            }
          />

          <Route path="/surveillance" element={<Surveillance />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/workshops" element={<Workshops />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}
