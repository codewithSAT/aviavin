import React, { useState } from 'react';
import img3 from '../assets/new/4g1.jpg';
import img1 from '../assets/new/phone.jpg';
import img2 from '../assets/new/blurDrone.jpg';
import './slide.css';
const Carousel = () => {
  const images = [img1, img2, img3];
  const left = '<';
  const right = '>';
  const messages = [
    'Pilot the Drone from Any Location',
    'Pilot the Drone from Any Location 2',
    'Pilot the Drone from Any Location 3',
  ];
  const [count, setcount] = useState(0);

  const [img, setimg] = useState(images[0]);
  const [msg, setmsg] = useState(messages[0]);

  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .9) 5%,rgba(0, 0, 0, 0)),url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="carousel" style={styles}>
      <a
        id="leftbtn"
        onClick={() => {
          if (count > 0 && count < 3) {
            setcount(count - 1);
            console.log(count);
            setimg(images[count]);
            setmsg(messages[count]);
          }
        }}
      >
        {left}
      </a>
      <article className="herocontent">
        <h1
          style={{ fontSize: '64px', marginBottom: '10vh', color: '#cccccc' }}
        >
          WELCOME TO AVIAVIN
        </h1>
        <br />
        <br />
        <h2>4G LTE Cellular Drone</h2>
        <h3>{msg}</h3>
        <a href="">Learn More</a>
      </article>
      <a
        id="rightbtn"
        onClick={() => {
          if (count > -1 && count < 2) {
            setcount(count + 1);
            console.log(count);
            setimg(images[count]);
            setmsg(messages[count]);
          }
        }}
      >
        {right}
      </a>

      {/* <img src={images[count]} /> */}
    </div>
  );
};

export default Carousel;
