import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Topbar = () => {
  return (
    <div className="pt-2 bg-white">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center ml-2">
          <img src={logo} alt="Logo" className="w-auto h-12 mr-2 border-2 border-[#fee57e] rounded-full md:h-16" />
          <span className="text-xl italic font-semibold text-[#280101] md:text-4xl">MAATI-16</span>
        </div>

        <div className="flex items-center pr-2">
          <a href="#" className="mr-4 text-[#280101] hover:text-white">
            <FaFacebook className="w-6 h-6 fill-current" />
          </a>
          <a href="#" className="mr-4 text-[#280101] hover:text-white">
            <FaInstagram className="w-6 h-6 fill-current" />
          </a>
          <a href="#" className="mr-4 text-[#280101] hover:text-white">
            <FaTwitter className="w-6 h-6 fill-current" />
          </a>
          <a href="#" className="text-[#280101] hover:text-white">
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
