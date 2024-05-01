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
      <div className="absolute z-10 w-full top-12">
        <BottomBar />
      </div>

      
      {/* Content */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center text-white ">
        <h1 className="mb-8 text-4xl font-bold md:text-6xl font-outline-2 ">MAATI-16: Empowering Dreams</h1>
        <p className="max-w-lg px-4 mb-8 text-lg font-bold md:text-2xl font-outline-1 ">
          MAATI-16 is dedicated to providing education, mentorship, and resources to underprivileged children, empowering them to realize their dreams and create a better future. Our mission is to break the cycle of poverty through education and holistic support.
        </p>
        <p className="mb-8 text-xl italic font-bold md:text-3xl font-outline-1 ">"WE BELIEVE IN THE POWER OF EDUCATION TO TRANSFORM LIVES"</p>
        <button className="px-8 py-3 font-bold text-gray-900 transition duration-300 ease-in-out bg-yellow-400 rounded-full hover:bg-yellow-500">
          Contribute Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
