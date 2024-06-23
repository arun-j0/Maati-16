import React, { useState, useEffect } from 'react';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';

const HeroSection = () => {
  const images = [Image1, Image2];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[725px]  border-b-4 border-[#fee57e] border-8 -z-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1s]  ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          alt={`Slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroSection;
