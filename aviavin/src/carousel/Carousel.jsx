import React, { useState } from 'react';
import img2 from '../assets/new/4g1.jpg';
import img1 from '../assets/new/phone.jpg';
import img3 from '../assets/carasoel3.png';
import './slide.css';
const Carousel = () => {
  const images = [img1, img2, img3];
  const left = '<';
  const right = '>';
  const [count, setcount] = useState(0);
  const [img, setimg] = useState(img1);
  const styles = {
    backgroundImage: `url(${images[count]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1.5,
  };
  return (
    <div class="carousel" style={styles}>
      <a
        id="leftbtn"
        onClick={() => {
          if (count < 3 && count > 0) {
            console.log(count);
            setcount(count - 1);
            setimg(images[count]);
          }
        }}
      >
        {left}
      </a>

      <a
        id="rightbtn"
        onClick={() => {
          if (count < 2 && count > -1) {
            console.log(count);
            setcount(count + 1);
            setimg(images[count]);
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
