import React from 'react'
import './videostyles.css'
const Videosection = () => {
    return (
        <div class="container">
      <video src="My Video.mp4" type="video/mp4" autoplay muted loop id="avideo">
        {/* < src="My Video.mp4" type="video/mp4"> */}
      </video>
      <div class="overlay">
          <h1>SURVILLENCE</h1>
          <p1>survillance is all about</p1>
         <a href="https://www.google.com/" class="button">learn more</a>
      </div>
         </div>
    
    )
}

export default Videosection
