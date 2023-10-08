import React from 'react';
import locationImage from '../../assets/location.png';
import './location.css';

const Location = () => {
  return (
    <div className='rideease__possibility section__padding' id='location'>
      <div className='rideease__location-image'>
        <img src={locationImage} alt='location' />
      </div>
      <div className='rideease__possibility-content'>
        {/* <h4>Register to Get Started</h4> */}
        <h1 className='gradient__text'>
          Unlock the Future of Navigation: Discover the Power of Our
          Cutting-Edge GPS Satellite Technology!
        </h1>
        <p>
          Join the countless satisfied travelers who have embraced the future of
          navigation with RideEase. Say goodbye to travel stress, and hello to a
          world of convenience and confidence. Your journey begins with us.
        </p>
        <h4>Let every trip be a seamless adventure!</h4>
      </div>
    </div>
  );
};

export default Location;
