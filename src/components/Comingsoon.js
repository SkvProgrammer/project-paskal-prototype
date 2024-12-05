import React, { useEffect, useState } from 'react';
import './Comingsoon.css';

const Comingsoon = () => {
  return (
    <div className="coming-soon-container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center text-white coming-soon-content">
        <h1 className="display-3 fw-bold fade-in">We're Coming Soon!</h1>
        <p className="lead fade-in delay-1">Our web app is under construction. Stay tuned!</p>
        <div className="bubble-animation"></div>
      </div>
    </div>
  );
};

export default Comingsoon;
