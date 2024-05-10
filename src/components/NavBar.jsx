import React, { useState } from 'react';
import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false); // State to track whether to show the form or not

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    return (
        <nav className="bg-[#280101] text-[#fee57e]">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-4">
                    {/* Hamburger Menu - Mobile */}
                    <div className="right-0 flex-grow text-right md:hidden">
                        <button onClick={toggleMenu} className=" text-white hover:text-[#fee57e]  focus:outline-none">
                            <GiHamburgerMenu className="w-6 h-6" />
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#280101]">
                                <div className="flex flex-col items-center justify-center h-full space-y-4">
                                    <button onClick={toggleMenu} className="absolute text-[#fee57e] top-16 right-4">
                                        <FaTimes className="w-6 h-6" />
                                    </button>
                                    <ul className="flex flex-col items-center space-y-2">
                                        <li>
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiHome4Line /> <span>Home</span>
                                            </a>
                                        </li>
                                        <li className="relative group">
                                            <a href="#" className="flex items-center space-x-2  text-[#fee57e] hover:text-gray-300">
                                                <RiUserLine /> <span>About Us</span> <FaChevronDown className="ml-1 text-[#fee57e] hover:text-gray-300" />
                                            </a>
                                            <div className="absolute left-0 w-48 py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 border-[#fee57e] border-2">
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Personal Details</a>
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Core Members</a>
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Our Motto and Objective</a>
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">FAQs and Policies</a>
                                                {/* Add the FAQs content */}
                                                <div className="hidden group-hover:block px-4 py-2 text-gray-300">
                                                    <p>1. What is the mission of Maati 16 Trust?</p>
                                                    <p>Ans - Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India...</p>
                                                    {/* Add more FAQs here */}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="relative group">
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiBriefcaseLine /> <span>Careers</span> <FaChevronDown className="ml-1" />
                                            </a>
                                            <div className="absolute left-0 w-48 py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 border-[#fee57e] border-2">
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Careers</a>
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Internships</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiGalleryLine /> <span>Gallery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiCalendar2Line /> <span>Our Works</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiArticleLine /> <span>Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiContactsLine /> <span>Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Menu - Desktop */}
                    <div className="hidden w-full md:flex md:items-center md:justify-center md:space-x-4">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="flex items-center space-x-2 text-xl text-[#fee57e] text-center hover:text-gray-300">  <RiHome4Line /> <span>Home</span>
                                </a>
                            </li>
                            <li className="relative group">
                                <a href="#" className="flex items-center text-xl space-x-2 text-[#fee57e] hover:text-gray-300">
                                    <RiUserLine /> <span>About Us</span> <FaChevronDown className="ml-1" />
                                </a>
                                <div className="absolute left-0 w-48 py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 border-[#fee57e] border-2">
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Personal Details</a>
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Core Members</a>
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Our Motto and Objective</a>
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">FAQs and Policies</a>
                                    {/* Add the FAQs content */}
                                    <div className="hidden group-hover:block px-4 py-2 text-gray-300">
                                        <p>1. What is the mission of Maati 16 Trust?</p>
                                        <p>Ans - Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India...</p>
                                        {/* Add more FAQs here */}
                                    </div>
                                </div>
                            </li>
                            <li className="relative group">
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                    <RiBriefcaseLine /> <span>Careers</span> <FaChevronDown className="ml-1" />
                                </a>
                                <div className="absolute left-0 py-2 mt-2 transition-opacity duration-300 bg-[#280101]  rounded-md shadow-lg opacity-0 w-72 top-full group-hover:opacity-100 border-[#fee57e] border-2">
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Careers</a>
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Internships</a>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                    <RiGalleryLine /> <span>Gallery</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                    <RiCalendar2Line /> <span>Our Works</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                    <RiArticleLine /> <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                    <RiContactsLine /> <span>Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Form Modal */}
            {showForm && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-h-[80vh] overflow-auto form-container">
                        <h2 className="text-xl font-semibold mb-4">Membership/Volunteership Form</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            {/* Rest of the form fields */}
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleFormClose}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
