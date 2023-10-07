import React from 'react';

import { Blog, Features, Footer, Header, Location, WhatRideEase } from './containers';
import { Brand, CTA, Contact, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand/>
      <WhatRideEase />
      <Features />
      <Location />
      {/* <Possibility /> */}
      <CTA />
      <Blog />
      <Contact />
      {/* <Home /> */}
      <Footer />
    </div>
  )
}

export default App
