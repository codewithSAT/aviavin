import React,{useState} from 'react';
// import Api from './api';
const greet = (props) => {
  return (
    <div>
      <h1>Welcome to $upercoins.</h1>
      {/* <h2>Hey {props.sat}.</h2>
      <Connect color="Green" /> */}
    </div>
  );
};

const Connect = (props) => (
  <h2>
    {props.color} light {props.color} Light STOP
  </h2>
);

let count = 0;


export default greet;
