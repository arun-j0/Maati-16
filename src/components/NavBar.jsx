import React, { useState, useEffect } from 'react';
import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showPersonalDetails, setShowPersonalDetails] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);
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
    };

    const togglePersonalDetails = () => {
        setShowPersonalDetails(!showPersonalDetails);
    };

    const toggleFAQs = () => {
        setShowFAQs(!showFAQs);
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={bg-white text-[#fee57e] sticky top-0 z-50 ${isSticky ? 'bg-opacity-0 md:bg-opacity-70' : ''}}>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-4">
                    {/* Hamburger Menu - Mobile */}
                    <div className="right-0 flex-grow text-right md:hidden">
                        <button onClick={toggleMenu} className={`hover:text-[#fee57e] focus:outline-none ${isSticky ? 'text-[#fee57e]' : 'text-[#280101]'} `}>
                            <GiHamburgerMenu className="w-6 h-6" />
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#280101]">
                                <div className="flex flex-col items-center justify-center h-full space-y-4">
                                    <button onClick={toggleMenu} className="absolute text-[#fee57e] top-16 right-4">
                                        <FaTimes className="w-6 h-6" />
                                    </button>
                                    <ul className="flex flex-col items-center space-y-6">
                                        <li>
                                            <Link to="/" className="flex items-center space-x-2 text-[#fee57e] text-2xl hover:text-[#fee57e]">
                                                <RiHome4Line /> <span>Home</span>
                                            </Link>
                                        </li>
                                        <li className="relative group">
                                            <div
                                                onMouseEnter={handleAboutUsHover}
                                                onMouseLeave={handleAboutUsLeave}
                                                className="flex items-center space-x-2  text-[#fee57e] text-2xl hover:text-[#fee57e]"
                                            >
                                                <RiUserLine /> <span>About Us</span> <FaChevronDown className="ml-1 text-[#fee57e] hover:text-[#fee57e]" />
                                            </div>
                                            {aboutUsDropdown && (
                                                <div onMouseEnter={handleAboutUsHover} onMouseLeave={handleAboutUsLeave} className="absolute left-0 w-[19rem] py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2 z-10">
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Personal Details</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Core Members</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Our Motto and Objective</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">FAQs and Policies</a>
                                                </div>
                                            )}
                                        </li>
                                        <li className="relative group">
                                            <div
                                                onMouseEnter={handleCareersHover}
                                                onMouseLeave={handleCareersLeave}
                                                className="flex items-center text-2xl space-x-2 text-[#fee57e] hover:text-[#fee57e]"
                                            >
                                                <RiBriefcaseLine /> <span>Careers</span> <FaChevronDown className="ml-1" />
                                            </div>
                                            {careersDropdown && (
                                                <div onMouseEnter={handleCareersHover} onMouseLeave={handleCareersLeave} className="absolute left-0 w-[25rem] py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2 z-10">
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Careers</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Internships</a>
                                                </div>
                                            )}
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:text-[#fee57e]">
                                                <RiGalleryLine /> <span>Gallery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:text-[#fee57e]">
                                                <RiCalendar2Line /> <span>Our Works</span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/blogs" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:text-[#fee57e]">
                                                <RiArticleLine /> <span>Blog</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:ttext-[#fee57e]">
                                                <RiContactsLine /> <span>Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Menu - Desktop */}
                    <div className="hidden w-full md:flex md:items-center md:justify-center md:space-x-5">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="flex items-center space-x-2 text-xl text-amber-900 text-center hover:text-[#280101]">  <RiHome4Line size={30}/> <span className='text-3xl'>Home</span>
                                </Link>
                            </li>
                            <li className="relative group">
                                <div
                                    onMouseEnter={handleAboutUsHover}
                                    onMouseLeave={handleAboutUsLeave}
                                    className="flex items-center text-xl space-x-2 text-amber-900 hover:text-[#280101]"
                                >
                                    <RiUserLine size={30} /> <span className='text-3xl'>About Us</span> <FaChevronDown className="ml-1" />
                                </div>
                                {aboutUsDropdown && (
                                    <div onMouseEnter={handleAboutUsHover} onMouseLeave={handleAboutUsLeave} className="absolute left-0 w-60 py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2">
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Personal Details</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Core Members</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Our Motto and Objective</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">FAQs and Policies</a>
                                    </div>
                                )}
                            </li>
                            <li className="relative group">
                                <div
                                    onMouseEnter={handleCareersHover}
                                    onMouseLeave={handleCareersLeave}
                                    className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]"
                                >
                                    <RiBriefcaseLine size={30} /> <span className='text-3xl'>Careers</span> <FaChevronDown className="ml-1" />
                                </div>
                                {careersDropdown && (
                                    <div onMouseEnter={handleCareersHover} onMouseLeave={handleCareersLeave} className="absolute left-0 py-2 mt-2 transition-opacity duration-300 bg-[#280101]  rounded-md shadow-lg opacity-100 w-[25rem] top-full border-[#fee57e] border-2">
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Careers</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Internships</a>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiGalleryLine size={30}/> <span className='text-3xl'>Gallery</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/works" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiCalendar2Line  size={30}/> <span className='text-3xl'>Our Works</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiArticleLine size={30}/> <span className='text-3xl'>Blogs</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiContactsLine size={30}/> <span className='text-3xl'>Contact Us</span>
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
                        <h2 className="mb-4 text-xl font-semibold">Membership/Volunteership Form</h2>
                        <form>
                            <div className="mb-4">
                                {/* Form fields */}
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleFormClose}
                                >
                                    Close
                                </button>
                                <button
                                    className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Personal Details Modal */}
            {showPersonalDetails && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-w-md overflow-auto form-container">
                        {/* Personal Details content */}
                        <button
                            className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={togglePersonalDetails}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            {/* FAQs Modal */}
            {showFAQs && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-w-lg overflow-auto form-container">
                        {/* FAQs content */}
                        <button
                            className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={toggleFAQs}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
