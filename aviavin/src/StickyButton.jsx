import React from 'react';
import whatsapp from './assets/whatsapp.svg';

const StickyButton = () => {
  const imgStyles = {
    position: 'fixed',
    bottom: '50%',
    right: '10px',
    padding: '0',
    color: '#6c7073',
    background: 'none',
    width: '48px',
    height: '48px',
    borderRadius: '0,2px 2px 0',
    cursor: 'pointer',
  };
  return (
    <>
      <img src={whatsapp} style={imgStyles} />
      {/* <button style={btnStyles}> */}
      {/* </button> */}
    </>
  );
};

export default StickyButton;
