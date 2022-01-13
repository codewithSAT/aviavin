import React from 'react';
import './menuStyles.css';

const Menu = () => {
  return (
    <div className="menu">
      <section className="heading">
        <p>" Pilots take no special joy in walking. Pilots like flying."</p>
        <h5>Niel Armstrong</h5>
      </section>
      <section className="options">
        <a href="">SURVILLENCE</a>
        <a href="">WORKSHOP</a>
        <a href="">SERVICES</a>
        <a href="">PROJECTS</a>
      </section>
    </div>
  );
};

export default Menu;
