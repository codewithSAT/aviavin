import React, { useState, useEffect } from 'react';
import img1 from '../assets/phone.jpg';
import img2 from '../assets/4g1.jpg';
import img3 from '../assets/droneSpray.jpg';
import './heroStyles.css';
const HeroSection = () => {
  const images = [img1, img2, img3];
  const headings = ['WELCOME TO AVIAVIN', 'STAY CONNECTED ', 'MODERN FARMING'];
  const messages = [
    'Aviavin builts all  rc models from personal use to the industrial use',
    'Our new 4G technology',
    'Agricultural drones',
  ];
  const description = [
    'we provide training, conduct workshops and repair ',
    'Control manually or give missions to drones from any part of the world',
    'drones to spray pesticides over a large area in less time',
  ];
  const [count, setcount] = useState(0);

  const [img, setimg] = useState(images[0]);
  const [heading, setheading] = useState(headings[0]);
  const [msg, setmsg] = useState(messages[0]);
  const [desc, setdesc] = useState(description[0]);

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .9) 5%,rgba(0, 0, 0, 0)),url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };

  useEffect(() => {
    setTimeout(() => {
      count < 2 ? setcount(count + 1) : setcount(0);
      setimg(images[count]);
      setmsg(messages[count]);
      setdesc(description[count]);
      setheading(headings[count]);
    }, 4000);
  }, [count]);

  return (
    <div className="carousel" style={styles}>
      <article className="bannerHeading">
        <h1
          style={{ fontSize: '48px', marginBottom: '10vh', color: '#cccccc' }}
        >
          {heading}
        </h1>
      </article>
      <article className="bannercontent">
        <h2>{msg}</h2>
        <h3>{desc}</h3>
        {/* <a href="">Learn More</a> */}
      </article>
    </div>
  );
};

export default HeroSection;
