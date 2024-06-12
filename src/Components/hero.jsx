import React from 'react';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <div>
        <div className="relative">
        <img src={hero}  alt="my logo" />
      </div>
    </div>
  )
}

export default Hero