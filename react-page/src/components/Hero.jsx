import React from 'react';
import "./Hero.css";
import "./Navbar.jsx";
import heroImg from '../components/Assets/New_Years_Eve.jpeg';  

function Hero() {
  return (
    <div className='heros'>
       <img src={heroImg} className='hero_img' alt="New Year's Eve" />
      <h1>Every Night sparkles With Alibi</h1>
      <p>Alibi night shine with excitement! Join us for vibrant events and live
        entertainment, making every night sparkle at our lounge.
      </p>
    </div>
  );
}

export default Hero;

