import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatRideEase.css';

const WhatRideEase = () => {
  return (
    <div className="rideease__whatrideease section__margin" id="wrideease">
      <div className="rideease__whatrideease-feature">
      <Feature title="What is RideEase" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className="rideease__whatrideease-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="rideease__whatrideease-container">
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default WhatRideEase
