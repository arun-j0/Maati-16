import React from 'react';
import heroImage from '../assets/hero.png';
import Navbar from './NavBar';
import BottomBar from './BottomBar';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full blur-sm"
      />
      {/* Navbar */}
      <div className="absolute top-0 z-10 w-full">
        <Navbar />
      </div>
    
      {/* BottomBar */}
      <div className="absolute z-10 w-full top-20 md:top-24">
        <BottomBar />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative p-8 m-2 text-center bg-gray-300 top-12 md:top-24 md:w-2/3 lg:w-1/2 rounded-3xl bg-opacity-20 backdrop-blur-sm ">
          <h1 className="mb-8 text-2xl font-bold text-transparent sm:text-4xl md:text-6xl bg-gradient-to-r bg-clip-text from-yellow-500 via-orange-500 to-amber-500 animate-text">MAATI-16: Empowering Dreams</h1>
          <p className="mb-8 text-sm font-semibold text-transparent text-white sm:text-lg md:text-2xl">
            MAATI-16 is dedicated to providing education, mentorship, and resources to underprivileged children, empowering them to realize their dreams and create a better future. Our mission is to break the cycle of poverty through education and holistic support.
          </p>
          <h2 className="mb-8 text-lg italic font-bold text-transparent sm:text-xl md:text-3xl bg-gradient-to-r bg-clip-text from-yellow-500 via-orange-500 to-amber-500 animate-text">"WE BELIEVE IN THE POWER OF EDUCATION TO TRANSFORM LIVES"</h2>
          <button className="px-8 py-3 font-bold text-gray-900 transition duration-300 ease-in-out bg-yellow-400 rounded-full hover:bg-yellow-500">
            Contribute Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
