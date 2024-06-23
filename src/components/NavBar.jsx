import React, { useState, useEffect } from 'react';

import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Motto from './Motto'; // Replace with actual import path
import Objectives from './Objectives'; // Replace with actual import path
import FAQs from './FAQs'; // Replace with actual import path
import PersonalDetails from './PersonalDetails'; // Replace with actual import path
import VolunteerForm from './VolunteerForm'; // Replace with actual import path
import logo from '../assets/logo.png'; // Replace with actual logo path

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showPersonalDetails, setShowPersonalDetails] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);
    const [showObjective, setShowObjective] = useState(false);
    const [showMotto, setShowMotto] = useState(false);
    const [showMottoObjectiveButtons, setShowMottoObjectiveButtons] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [aboutUsDropdown, setAboutUsDropdown] = useState(false);
    const [careersDropdown, setCareersDropdown] = useState(false);

    let aboutUsTimer;
    let careersTimer;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleForm = () => {
        setShowForm(!showForm);
        setIsOpen(false); // Close mobile menu on form toggle
    };

    const togglePersonalDetails = () => {
        setShowPersonalDetails(!showPersonalDetails);
        setIsOpen(false); // Close mobile menu on personal details toggle
    };

    const toggleFAQs = () => {
        setShowFAQs(!showFAQs);
        setIsOpen(false); // Close mobile menu on FAQs toggle
    };

    const toggleAboutUsDropdown = () => {
        setAboutUsDropdown(!aboutUsDropdown);
    };

    const toggleCareersDropdown = () => {
        setCareersDropdown(!careersDropdown);
    };

    const handleFormClose = () => {
        setShowForm(false);
    };

    const handleAboutUsHover = () => {
        setAboutUsDropdown(true);
        clearTimeout(aboutUsTimer);
    };

    const handleAboutUsLeave = () => {
        aboutUsTimer = setTimeout(() => {
            setAboutUsDropdown(false);
        }, 500);
    };

    const handleCareersHover = () => {
        setCareersDropdown(true);
        clearTimeout(careersTimer);
    };

    const handleCareersLeave = () => {
        careersTimer = setTimeout(() => {
            setCareersDropdown(false);
        }, 500);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        setIsSticky(offset > 0);
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            const element = document.getElementById('contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-white text-[#fee57e] sticky top-0 z-50 ${isSticky ? 'bg-opacity-0 md:bg-opacity-70' : ''}`}>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-2">
                    {/* Logo and Branding */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="Logo" className="w-auto h-12 mr-2 border-2 border-[#fee57e] rounded-full md:h-20" />
                        <span className="font-serif text-2xl italic font-extrabold text-amber-900 md:text-3xl">MAATI-16</span>
                    </Link>

                    {/* Hamburger Menu - Mobile */}
                    <div className="right-0 flex-grow text-right lg:hidden">
                        <button onClick={toggleMenu} className={`hover:text-[#fee57e] focus:outline-none ${isSticky ? 'text-[#fee57e]' : 'text-[#280101]'}`}>
                            <GiHamburgerMenu className="w-6 h-6" />
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#280101]">
                                <div className="flex flex-col items-center justify-center h-full space-y-4">
                                    <button onClick={toggleMenu} className="absolute text-[#fee57e] top-16 right-4">
                                        <FaTimes className="w-6 h-6" />
                                    </button>
                                    {/* Mobile Menu Items */}
                                    <Link to="/" className="text-[#fee57e] text-xl hover:text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
                                    <div className="relative group">
                                        <button
                                            onClick={toggleAboutUsDropdown}
                                            className="text-[#fee57e] text-xl hover:text-white py-2 flex items-center w-full"
                                        >
                                            About Us <FaChevronDown className={`ml-1 ${aboutUsDropdown ? 'transform rotate-180' : ''}`} />
                                        </button>
                                        {aboutUsDropdown && (
                                            <div className="bg-[#280101] absolute top-full left-0 w-full py-2 rounded-md shadow-lg border-[#fee57e] border-2 z-10">
                                                <button onClick={togglePersonalDetails} className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Personal Details</button>
                                                <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Core Members</a>
                                                <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={() => setShowMottoObjectiveButtons(!showMottoObjectiveButtons)}>Our Motto and Objective</a>
                                                {showMottoObjectiveButtons && (
                                                    <div className="px-4 py-2 text-xl text-gray-300">
                                                        <button onClick={() => setShowObjective(true)} className="block w-full mt-2 text-left">Objective</button>
                                                        <button onClick={() => setShowMotto(true)} className="block w-full mt-2 text-left">Motto</button>
                                                    </div>
                                                )}
                                                <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="relative group">
                                        <button
                                            onClick={toggleCareersDropdown}
                                            className="text-[#fee57e] text-xl hover:text-white py-2 flex items-center w-full"
                                        >
                                            Careers <FaChevronDown className={`ml-1 ${careersDropdown ? 'transform rotate-180' : ''}`} />
                                        </button>
                                        {careersDropdown && (
                                            <div className="bg-[#280101] absolute top-full left-0 w-full py-2 rounded-md shadow-lg border-[#fee57e] border-2 z-10">
                                                <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                                <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Careers</a>
                                                <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Internships</a>
                                            </div>
                                        )}
                                    </div>
                                    <Link to="/gallery" className="text-[#fee57e] text-xl hover:text-white py-2" onClick={() => setIsOpen(false)}>Gallery</Link>
                                    <Link to="/works" className="text-[#fee57e] text-xl hover:text-white py-2" onClick={() => setIsOpen(false)}>Our Works</Link>
                                    <Link to="/blogs" className="text-[#fee57e] text-xl hover:text-white py-2" onClick={() => setIsOpen(false)}>Blog</Link>
                                    <a href="#contact" className="text-[#fee57e] text-xl hover:text-white py-2 flex items-center" onClick={handleContactClick}>Contact Us</a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Main Menu - Desktop */}
                    <div className="items-center hidden space-x-4 lg:flex">
                        <Link to="/" className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`}>
                            <RiHome4Line /> <span>Home</span>
                        </Link>
                        <div className="relative group">
                            <div
                                onMouseEnter={handleAboutUsHover}
                                onMouseLeave={handleAboutUsLeave}
                                className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`}
                            >
                                <RiUserLine /> <span>About Us</span> <FaChevronDown className={`ml-1 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101]'}`} />
                            </div>
                            {aboutUsDropdown && (
                                <div onMouseEnter={handleAboutUsHover} onMouseLeave={handleAboutUsLeave} className="absolute left-0 w-[19rem] py-2 mt-2 bg-[#280101] rounded-md shadow-lg border-[#fee57e] border-2 z-10">
                                    <button className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={togglePersonalDetails}>Personal Details</button>
                                    <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Core Members</a>
                                    <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={() => setShowMottoObjectiveButtons(!showMottoObjectiveButtons)}>Our Motto and Objective</a>
                                    {showMottoObjectiveButtons && (
                                        <div className="px-4 py-2 text-xl text-gray-300">
                                            <button onClick={() => setShowObjective(true)} className="block w-full mt-2 text-left">Objective</button>
                                            <button onClick={() => setShowMotto(true)} className="block w-full mt-2 text-left">Motto</button>
                                        </div>
                                    )}
                                    <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
                                </div>
                            )}
                        </div>
                        <div className="relative group">
                            <div
                                onMouseEnter={handleCareersHover}
                                onMouseLeave={handleCareersLeave}
                                className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`}
                            >
                                <RiBriefcaseLine /> <span>Careers</span> <FaChevronDown className={`ml-1 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101]'}`} />
                            </div>
                            {careersDropdown && (
                                <div onMouseEnter={handleCareersHover} onMouseLeave={handleCareersLeave} className="absolute left-0 w-[25rem] py-2 mt-2 bg-[#280101] rounded-md shadow-lg border-[#fee57e] border-2 z-10">
                                    <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                    <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Careers</a>
                                    <a href="#" className="block px-4 py-2 text-xl text-gray-300 hover:text-white">Internships</a>
                                </div>
                            )}
                        </div>
                        <Link to="/gallery" className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`}>
                            <RiGalleryLine /> <span>Gallery</span>
                        </Link>
                        <Link to="/works" className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`}>
                            <RiCalendar2Line /> <span>Our Works</span>
                        </Link>
                        <Link to="/blogs" className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`}>
                            <RiArticleLine /> <span>Blog</span>
                        </Link>
                        <Link to="/#contact" className={`flex items-center text-2xl space-x-2 ${isSticky ? 'text-[#fee57e]' : 'text-[#280101] hover:text-[#fee57e]'}`} onClick={handleContactClick}>
                            <RiContactsLine /> <span>Contact Us</span>
                        </Link>
                        {/* Donate Now Button */}
                        <Link to="/donation" className={`ml-4 px-4 py-2 bg-[#fee57e] text-[#280101] text-2xl  rounded-md hover:bg-[#ffd369] focus:outline-none ${isSticky ? 'text-[#280101]' : 'text-[#280101]'}`}>
                            Donate Now
                        </Link>
                    </div>
                </div>
            </div>
            {/* Render components based on state */}
            {showForm && <VolunteerForm onClose={handleFormClose} />}
            {showPersonalDetails && <PersonalDetails onClose={togglePersonalDetails} />}
            {showObjective && <Objectives onClose={() => setShowObjective(false)} />}
            {showFAQs && <FAQs onClose={toggleFAQs} />}
            {showMotto && <Motto onClose={() => setShowMotto(false)} />}
        </nav>
    );
};

export default Navbar;

