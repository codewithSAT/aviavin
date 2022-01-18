import React, { useState, useEffect } from 'react';
import img3 from '../assets/4g1.jpg';
import img1 from '../assets/phone.jpg';
import img2 from '../assets/blurDrone.jpg';
import './heroStyles.css';
const HeroSection = () => {
  const images = [img1, img2, img3];
  const description = [
    'Pilot the Drone from Any Location 1',
    'Pilot the Drone from Any Location 2',
    'Pilot the Drone from Any Location 3',
  ];
  const messages = [
    '4G LTE Cellular Drone',
    '5G LTE Cellular Drone',
    '6G LTE Cellular Drone',
  ];
  const [count, setcount] = useState(0);

  const [img, setimg] = useState(images[0]);
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
      count < 3 ? setcount(count + 1) : setcount(0);
      setimg(images[count]);
      setmsg(messages[count]);
      setdesc(description[count]);
    }, 5000);
  }, [count]);

  return (
    <div className="carousel" style={styles}>
      <article className="bannerHeading">
        <h1
          style={{ fontSize: '64px', marginBottom: '10vh', color: '#cccccc' }}
        >
          WELCOME TO AVIAVIN
        </h1>
      </article>
      <article className="bannercontent">
        <h2>{msg}</h2>
        <h3>{desc}</h3>
        <a href="">Learn More</a>
      </article>
    </div>
  );
};

export default HeroSection;
