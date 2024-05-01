import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const BottomBar = () => {
  return (
    <div className="flex items-center justify-between py-2 text-white">
      <div className="flex items-center mx-4 md:mx-20">
        <a href="https://www.facebook.com/MAATI16" target="_blank" rel="noopener noreferrer" className="mx-2"><FaFacebook /></a>
        <a href="https://twitter.com/MAATI16" target="_blank" rel="noopener noreferrer" className="mx-2"><FaTwitter /></a>
        <a href="https://www.instagram.com/MAATI16" target="_blank" rel="noopener noreferrer" className="mx-2"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/MAATI16" target="_blank" rel="noopener noreferrer" className="mx-2"><FaLinkedin /></a>
      </div>
      <div className="items-center hidden mx-4 md:mx-20 md:flex"> 
        <span className="mr-2"><FaEnvelope /></span>
        <span className="mr-4">info@maati16.org</span>
        <span className="mr-2"><FaPhone /></span>
        <span>+1234567890</span>
      </div>
      <div className="items-center block mx-4 md:mx-20 md:hidden"> 
        <span className="mr-2"><FaEnvelope /></span>
        <span className="mr-2"><FaPhone /></span>
      </div>
    </div>
  );
};

export default BottomBar;
