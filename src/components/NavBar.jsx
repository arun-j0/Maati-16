import React, { useState } from 'react';
import { FaHome, FaInfoCircle, FaImages, FaCalendarAlt, FaBlog, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { MdContactSupport } from "react-icons/md";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

 

  return (
    <div className="flex items-center justify-between py-2 text-white">
      {/* Logo */}
      <div className="mx-4 md:mx-20">
        <img src={Logo} alt="Logo" className="w-auto h-8" />
      </div>

      {/* Mobile navigation toggle */}
      <div className="mr-4 md:hidden ">
        {!isMobileMenuOpen ? (
          <FaBars onClick={toggleMobileMenu} className="text-white cursor-pointer" />
        ) : (
          <FaTimes onClick={toggleMobileMenu} className="text-white cursor-pointer" />
        )}
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen px-2 py-4 font-bold text-white bg-gray-800 md:hidden opacity-80">
          <FaTimes onClick={closeMobileMenu} className="absolute text-white cursor-pointer top-4 right-4" />
          <div className="flex flex-col items-center space-y-4">
            <a href="/" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}><FaHome className="mr-1" />Home</a>
            <a href="/about" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}><FaInfoCircle className="mr-1" />About Us</a>
            <a href="/gallery" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}><FaImages className="mr-1" />Gallery</a>
            <a href="/events" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}><FaCalendarAlt className="mr-1" />Events</a>
            <a href="/blog" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}><FaBlog className="mr-1" />Blog</a>
            <a href="/contact" className="flex items-center hover:text-gray-300" onClick={closeMobileMenu}><MdContactSupport className="mr-1" />Contact Us</a>
            <button className="bg-white text-[#991b1b] py-2 px-4 rounded-lg hover:bg-gray-300" onClick={(e) => { handleDonateClick(e); closeMobileMenu(); }}>
              Donate Now
            </button>
          </div>
        </div>
      )}

      {/* Normal navigation for larger devices */}
      <div className="justify-end flex-grow hidden mx-4 md:flex md:mx-20">
        <nav className="flex items-center space-x-4">
          <a href="/" className="flex items-center hover:text-gray-300"><FaHome className="mr-1" /> Home</a>
          <a href="/about" className="flex items-center hover:text-gray-300"><FaInfoCircle className="mr-1" /> About Us</a>
          <a href="/gallery" className="flex items-center hover:text-gray-300"><FaImages className="mr-1" /> Gallery</a>
          <a href="/events" className="flex items-center hover:text-gray-300"><FaCalendarAlt className="mr-1" /> Events</a>
          <a href="/blog" className="flex items-center hover:text-gray-300"><FaBlog className="mr-1" /> Blog</a>
          <a href="/contact" className="flex items-center hover:text-gray-300"><MdContactSupport className="mr-1" /> Contact Us</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
