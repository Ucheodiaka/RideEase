import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Enjoy 30% lower rates than an agency',
    text: 'Compare offers. With RideEase, you reduce your car rental expenses. Find a van for a move, a comfortable car or a prestige vehicle. Booking and renting a car is economical. Car rental prices are on average 30% lower than those charged by traditional car rental agencies..',
  },
  {
    title: 'Benefiting from comprehensive insurance',
    text: 'Car rental car sharing is a very secure service. RideEase guarantees comprehensive insurance from the moment you pick up the vehicle, without any additional charge. We provide a breakdown and towing service for the vehicle in case of breakdown during the rental, 24/7.',
  },
  {
    title: 'Take advantage of the many vehicles available',
    text: 'You have access to thousands of vehicles available for rental. In major cities in the UK, our rental cars are waiting for you in different locations: the airport, city centre, train station. The cars available for hire at RideEase are of high quality..',
  },
  {
    title: 'Use an innovative car rental app',
    text: 'RideEase offers an innovative online car rental system. Our application allows you to rent your vehicle at any time of the day or night, anywhere in the UK. The vehicle is opened with your smartphone. Thanks to this device, you book, rent and return the vehicle even faster. ',
  },
];

const Features = () => {
  return (
    <div className='rideease__features section__padding' id='features'>
      <div className='rideease__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need to Realize It. Step into Future
          Today.
          <br /> & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='rideease__features-container'>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
