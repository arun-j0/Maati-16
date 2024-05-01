import React, { useState, useRef } from 'react';
import { FaHome, FaInfoCircle, FaImages, FaCalendarAlt, FaBlog, FaPhone, FaBars, FaTimes, FaAngleDown, FaUserPlus } from 'react-icons/fa';
import { MdContactSupport } from "react-icons/md";
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const aboutTimeout = useRef(null);
  const careersTimeout = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsCareersOpen(false);
  };

  const toggleCareersMenu = () => {
    setIsCareersOpen(!isCareersOpen);
    setIsAboutOpen(false);
  };

  const closeMenus = () => {
    setIsAboutOpen(false);
    setIsCareersOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleAboutMouseEnter = () => {
    clearTimeout(aboutTimeout.current);
    setIsAboutOpen(true);
  };

  const handleAboutMouseLeave = () => {
    aboutTimeout.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 1000); // Delay time in milliseconds
  };

  const handleCareersMouseEnter = () => {
    clearTimeout(careersTimeout.current);
    setIsCareersOpen(true);
  };

  const handleCareersMouseLeave = () => {
    careersTimeout.current = setTimeout(() => {
      setIsCareersOpen(false);
    }, 1000); // Delay time in milliseconds
  };

  return (
    <div className="flex items-center justify-between py-2 text-white">
      {/* Logo */}
      <div className="mx-4 mt-3 md:mt-auto md:mx-20">
        <img src={Logo} alt="Logo" className="w-auto h-14 md:h-20" />
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
          <FaTimes onClick={closeMenus} className="absolute text-white cursor-pointer top-8 right-4" />
          <div className="flex flex-col items-center space-y-4">
            <a href="/" className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black" onClick={closeMenus}><FaHome className="mr-1" />Home</a>
            <div className="relative group" onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
              <button onClick={toggleAboutMenu} className="flex items-center hover:text-gray-300">
                <FaInfoCircle className="mr-1" /> About Us <FaAngleDown className="ml-1" />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 z-10 p-4 mt-2 bg-gray-800 rounded-lg top-full">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="/personal-details" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> Personal Details</a>
                    <a href="/core-members" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> Core Members</a>
                    <a href="/motto-and-objective" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> Our Motto and Objective</a>
                    <a href="/faqs-policies" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> FAQs and Policies</a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group" onMouseEnter={handleCareersMouseEnter} onMouseLeave={handleCareersMouseLeave}>
              <button onClick={toggleCareersMenu} className="flex items-center hover:text-gray-300">
                <MdContactSupport className="mr-1" /> Careers <FaAngleDown className="ml-1" />
              </button>
              {isCareersOpen && (
                <div className="absolute left-0 z-10 p-4 mt-2 bg-gray-800 rounded-lg top-full">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <a href="/membership-form" className="flex items-center text-white hover:text-[#991b1b]"><MdContactSupport className="mr-2" /> Membership/Volunteer Form</a>
                    <a href="/jobs-internships" className="flex items-center text-white hover:text-[#991b1b]"><MdContactSupport className="mr-2" /> Jobs/Internships</a>
                  </div>
                </div>
              )}
            </div>
            <a href="/gallery" className="flex items-center hover:text-[#991b1b]" onClick={closeMenus}><FaImages className="mr-1" /> Gallery</a>
            <a href="/events" className="flex items-center hover:text-[#991b1b]" onClick={closeMenus}><FaCalendarAlt className="mr-1" /> Events</a>
            <a href="/blog" className="flex items-center hover:text-[#991b1b]" onClick={closeMenus}><FaBlog className="mr-1" /> Blog</a>
            <a href="/contact" className="flex items-center hover:ttext-[#991b1b]" onClick={closeMenus}><MdContactSupport className="mr-1" /> Contact Us</a>
            <button className="bg-white text-[#991b1b] py-2 px-4 rounded-lg hover:bg-gray-300" onClick={closeMenus}>
              Become a Member
            </button>
          </div>
        </div>
      )}

      {/* Normal navigation for larger devices */}
      <div className="justify-end flex-grow hidden mx-4 md:flex md:mx-20">
        <nav className="flex items-center space-x-4 text-lg">
          <a href="/" className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black"><FaHome className="mr-1" /> Home</a>
          <div className="relative group" onMouseEnter={handleAboutMouseEnter} onMouseLeave={handleAboutMouseLeave}>
            <button onClick={toggleAboutMenu} className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black">
              <FaInfoCircle className="mr-1" /> About Us <FaAngleDown className="ml-1" />
            </button>
            {isAboutOpen && (
              <div className="absolute z-10 w-64 p-4 mt-2 bg-gray-800 rounded-lg top-full opacity-80">
                <a href="/personal-details" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> Personal Details</a>
                <a href="/core-members" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> Core Members</a>
                <a href="/motto-and-objective" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> Our Motto and Objective</a>
                <a href="/faqs-policies" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><FaUserPlus className="mr-2" /> FAQs and Policies</a>
              </div>
            )}
          </div>
          <div className="relative group" onMouseEnter={handleCareersMouseEnter} onMouseLeave={handleCareersMouseLeave}>
            <button onClick={toggleCareersMenu} className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black">
              <MdContactSupport className="mr-1" /> Careers <FaAngleDown className="ml-1" />
            </button>
            {isCareersOpen && (
              <div className="absolute z-10 p-4 mt-2 bg-gray-800 rounded-lg top-full opacity-80 w-[300px]">
                <a href="/membership-form" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><MdContactSupport className="mr-2" /> Membership/Volunteer Form</a>
                <a href="/jobs-internships" className="flex items-center text-white hover:text-[#991b1b] link link-underline link-underline-black"><MdContactSupport className="mr-2" /> Jobs/Internships</a>
              </div>
            )}
          </div>
          <a href="/gallery" className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black"><FaImages className="mr-1" /> Gallery</a>
          <a href="/events" className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black"><FaCalendarAlt className="mr-1" /> Events</a>
          <a href="/blog" className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black"><FaBlog className="mr-1" /> Blog</a>
          <a href="/contact" className="flex items-center hover:text-[#991b1b] link link-underline link-underline-black"><MdContactSupport className="mr-1" /> Contact Us</a>
          <button className="bg-white text-[#991b1b] py-2 px-4 rounded-lg hover:bg-gray-300 link link-underline link-underline-black">
            Become a Member
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
