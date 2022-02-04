import React from 'react';
import './SurveillanceStyles.css';
import img1 from '../assets/position.svg';
import img2 from '../assets/duration.svg';
import img3 from '../assets/automate.svg';
import img4 from '../assets/range.svg';

const Surveillance = () => {
  return (
    <>
      <div className="sContainer">
        {/* <div className="sImage">
          <img src="../assets/topview.jpg" alt="" />
        </div> */}
        <div className="sHeading">
          Surveillance of Agricultural Lands, Buldings, Structures...
        </div>
        <div className="sFeatures">
          <div className="item">
            <div className="iName">GPS</div>
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="iDesc">Get Accurate Position</div>
          </div>
          <div className="item">
            <div className="iName">DURATION</div>
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="iDesc">12 Hours</div>
          </div>
          <div className="item">
            <div className="iName">AUTOMATION</div>
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="iDesc">Handsfree Survey</div>
          </div>
          <div className="item">
            <div className="iName">DISTANCE</div>
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="iDesc">20 KMS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Surveillance;
