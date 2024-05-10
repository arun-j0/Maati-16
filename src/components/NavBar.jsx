import React, { useState } from 'react';
import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

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
                                        {/* Menu items */}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="hidden w-full md:flex md:items-center md:justify-center md:space-x-4">
                        <ul className="flex space-x-4">
                            {/* Menu items */}
                        </ul>
                    </div>
                </div>
            </div>
            {showForm && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#280101] p-8 rounded-md shadow-lg max-w-md text-white">
                        <h2 className="text-xl font-semibold mb-4">Membership/Volunteership Form</h2>
                        <form className="space-y-4">
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="dob">
                                    Date of Birth
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="dob"
                                    type="date"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="contact">
                                    Contact Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="contact"
                                    type="tel"
                                    placeholder="Enter your contact number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="address"
                                    rows="3"
                                    placeholder="Enter your address"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="aadhar">
                                    Aadhar Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="aadhar"
                                    type="text"
                                    placeholder="Enter your Aadhar number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="whatsapp">
                                    Whatsapp Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="whatsapp"
                                    type="tel"
                                    placeholder="Enter your Whatsapp number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="declaration">
                                    I hereby, declare that being the member of MAATI-16 will abide by all the rules and regulations and always follow the ethical code of conduct. (Acceptance Required)
                                </label>
                                <input
                                    className="mr-2 leading-tight"
                                    id="declaration"
                                    type="checkbox"
                                />
                                <label className="text-sm text-gray-300" htmlFor="declaration">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleFormClose}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
