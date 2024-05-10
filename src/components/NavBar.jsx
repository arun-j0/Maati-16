import React, { useState } from 'react';
import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false); // State to track whether to show the form or not
    const [showFAQs, setShowFAQs] = useState(false); // State to track whether to show FAQs or not

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const toggleFAQs = () => {
        setShowFAQs(!showFAQs);
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
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
                                                {showFAQs && (
                                                    <div className="pl-4 mt-2 text-gray-300">
                                                        <p>1. What is the mission of Maati 16 Trust?</p>
                                                        <p>Ans - Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India...</p>
                                                        <p>2. How old is Maati 16 Trust?</p>
                                                        <p>Ans – Maati 16 was established in the year 2016.</p>
                                                        <p>3. Which Areas does Maati 16 Trust work in?</p>
                                                        <p>Ans – Maati 16 has been working in the thematic areas of education, health care, youth employability, and empowerment of women and girls. Education is our priority.</p>
                                                        <p>4. How to become a Volunteer in Maati 16 Trust?</p>
                                                        <p>Ans – You need to fill the Membership/Volunteer form of Maati 16. It will take 24 – 48 hours to verify and then you receive an approval email.</p>
                                                        <p>5. How can I donate to Maati 16 Trust?</p>
                                                        <p>Ans - You can go to the “Donate Now” section of Maati 16 Trust’s Website and donate online. For other donations related queries you can please write to maati16official@gmail.com</p>
                                                        <p>6. What is project Gyan Sagar?</p>
                                                        <p>Ans – Our primary focus is child education. In this project, we help needy children who want to study and make their future bright. We want to reduce the illiteracy rate of India. We are working in Bihar and Delhi. We want to cover all states of India. We also help the orphanages and provide study and stationary materials to them; we are connected with 10 – 15 Orphanages till date. This number will increase soon.</p>
                                                        <p>7. How can I work for Maati 16?</p>
                                                        <p>Ans – Please go to our “Career” page to know more about the current openings.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        {/* Rest of the menu items */}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Menu - Desktop */}
                    <div className="hidden w-full md:flex md:items-center md:justify-center md:space-x-4">
                        <ul className="flex space-x-4">
                            {/* Desktop menu items */}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Form Modal */}
            {/* Rest of the form modal */}
        </nav>
    );
};

export default Navbar;
