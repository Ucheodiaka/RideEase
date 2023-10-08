import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
import './header.css';
// import { LoremIpsum } from 'react-lorem-ipsum';
import people from '../../assets/people.png';
import cars from '../../assets/cars.png';

// function Datepickertofrom()

const Header = () => {
  return (
    <div className='rideease__header section__padding' id='home'>
      <div className='rideease__header-content'>
        <h1 className='gradient__text'>
          Choose from our <br /> fleets of insured vehicles.
        </h1>
        <p>Unlock cars 24/7 with your phone, and go!</p>

        <div className='rideease__header-content__input'>
          <input type='date' placeholder='Select your date here' />
        </div>
        <div className='rideease__header-content__input'>
          <input type='location' placeholder='Your location' />
        </div>
        <div className='rideease__header-content__input'>
          <button type='button'>Check Availability</button>
        </div>

        <div className='rideease__header-content__people'>
          <img src={people} alt='people' />
          <p>1,600 people used our service in the last 24 hours</p>
        </div>
      </div>
      <div className='rideease__header-image'>
        <img src={cars} alt='cars' />
      </div>
    </div>
  );
};

export default Header;
