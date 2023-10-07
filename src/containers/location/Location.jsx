import React from 'react';
import locationImage from '../../assets/location.png';
import './location.css';

const Location = () => {
  return (
    <div className="rideease__possibility section__padding" id="location">
      <div className="rideease__location-image">
        <img src={locationImage} alt="location" />
      </div>
      <div className="rideease__possibility-content">
        <h4>Register to Get Started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
        <p>With our presence in every continent of the world, we bring you ease of travels and the possibilities that we offer are numerous.</p>
        <h4>Register to Get Started</h4>
      </div>
    </div>
  )
}

export default Location
