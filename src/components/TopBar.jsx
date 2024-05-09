import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Topbar = () => {
  return (
    <div className="pt-2 bg-[#280101]">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center ml-2">
          <img src={logo} alt="Logo" className="w-auto h-12 mr-2 border border-white rounded-full md:h-16" />
          <span className="text-xl italic font-semibold text-white md:text-3xl">MAATI-16</span>
        </div>

        <div className="flex items-center pr-2">
          <a href="#" className="mr-4 text-gray-300 hover:text-white">
            <FaFacebook className="w-6 h-6 fill-current" />
          </a>
          <a href="#" className="mr-4 text-gray-300 hover:text-white">
            <FaInstagram className="w-6 h-6 fill-current" />
          </a>
          <a href="#" className="mr-4 text-gray-300 hover:text-white">
            <FaTwitter className="w-6 h-6 fill-current" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
