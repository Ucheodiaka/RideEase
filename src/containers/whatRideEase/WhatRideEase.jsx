import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatRideEase.css';

const WhatRideEase = () => {
  return (
    <div className='rideease__whatrideease section__margin' id='wrideease'>
      <div className='rideease__whatrideease-feature'>
        <Feature
          title='About'
          text='As the largest carsharing service in Europe, we’re on a mission to bring fresh air to big cities with convenient 24/7 access to shared cars nearby. With RideEase, simply book a car, unlock it with your phone, and get going.'
        />
      </div>
      <div className='rideease__whatrideease-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className='rideease__whatrideease-container'>
        <Feature
          title='Choose an available vehicle'
          text='You can choose between several categories of vehicles: van, city, family, SUV, minibus, classic, etc. Compare the photos of the vehicles and the prices for the chosen car rental duration.'
        />
        <Feature
          title='Register your profile'
          text='For a first car rental, you need to register your profile. All you have to do is take a picture of your ID and driving licence with your smartphone,then you can rent the vehicle.'
        />
        <Feature
          title='Reserve your vehicle'
          text='Click on the vehicle you wish to book. The details of the rental offer are displayed (rental company reviews, vehicle quality and comfort level). Click on the "book" button. '
        />
        <Feature
          title='Return the vehicle'
          text='The price of car hire on RideEase includes a 200km per day package. Optional mileage packages are available. At the end of the rental, you return the vehicle to the pickup location, with the same level of fuel.'
        />
      </div>
    </div>
  );
};

export default WhatRideEase;
