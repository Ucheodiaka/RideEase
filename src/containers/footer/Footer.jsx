import React from 'react';
import rideeaseLogo from '../../assets/logo_white_.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="rideease__footer section__padding">
      <div className="rideease__footer-heading">
        <h1 className="gradient__text">Do you desire a safe and secure means of travelling around?</h1>
      </div>

      <div className="rideease__footer-btn">
        <p>Request a Ride Now</p>
      </div>

      <div className="rideease__footer-links">
        <div className="rideease__footer-links_logo">
          <img src={rideeaseLogo} alt="rideease_logo" />
          <p>Rosewood R1 1WD Ritchnon, <br /> All Rights Reserved</p>
        </div>
        <div className="rideease__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="rideease__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="rideease__footer-links_div">
          <h4>Get in touch</h4>
          <p>Rosewood R1 1WD Ritchnon</p>
          <p>07-48117453</p>
          <p>info@paymnt.net</p>
        </div>
      </div>

      <div className="rideease__footer-copyright">
        <p>&copy;2023 RideEase. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
