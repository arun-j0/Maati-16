import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#280101] text-[#fee57e]  border-[#fee57e] border-8">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 mr-14 md:mr-0 md:mb-0">
            <h3 className="mb-2 text-lg font-bold">Connect with us</h3>
            <div className="flex ml-3 space-x-4 md:ml-0">
              <a href="#" className="text-[#fee57e] hover:text-yellow-600">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#fee57e] hover:text-yellow-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#fee57e] hover:text-yellow-600">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#fee57e] hover:text-yellow-600">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Contact Us</h3>
            <p className="text-[#fee57e]">123 Street, City</p>
            <p className="text-[#fee57e]">contact@example.com</p>
            <p className="text-[#fee57e]">123-456-7890</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-[#fee57e]">&copy; {currentYear} MAATI-16. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
