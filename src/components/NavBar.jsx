import React, { useState } from 'react';
import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false); 
    const [showFAQs, setShowFAQs] = useState(false); 

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
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white">Our Motto and Objective</a>
                                                <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
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
    
                                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
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
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="dob">
                                    Date of Birth
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="dob"
                                    type="date"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="contact">
                                    Contact Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="contact"
                                    type="tel"
                                    placeholder="Enter your contact number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="address">
                                    Address
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="address"
                                    rows="3"
                                    placeholder="Enter your address"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="aadhar">
                                    Aadhar Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="aadhar"
                                    type="text"
                                    placeholder="Enter your Aadhar number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="whatsapp">
                                    Whatsapp Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="whatsapp"
                                    type="tel"
                                    placeholder="Enter your Whatsapp number"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="declaration">
                                    I hereby, declare that being the member of MAATI-16 will abide by all the rules and regulations and always follow the ethical code of conduct. (Acceptance Required)
                                </label>
                                <input
                                    className="mr-2 leading-tight"
                                    id="declaration"
                                    type="checkbox"
                                />
                                <label className="text-sm text-[#fee57e]" htmlFor="declaration">
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
                                    className="bg-[#fee57e] hover:bg-[#e09528] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {showFAQs && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-h-[80vh] overflow-auto form-container">
                        <h2 className="text-xl font-semibold mb-4">FAQs and Policies</h2>
                        <dl>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">What is the mission of Maati 16 Trust?</dt>
                                <dd className="text-[#fee57e] mb-4">Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India. We strive to provide accessible and quality education to underserved populations, including children, adults, and marginalized communities. Through innovative programs and partnerships, we aim to equip individuals with the knowledge, skills, and opportunities they need to thrive in today's world. By addressing the root causes of illiteracy and promoting lifelong learning, we envision a future where every person has the chance to reach their full potential and contribute positively to society.</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">How old is Maati 16 Trust?</dt>
                                <dd className="text-[#fee57e] mb-4">Maati 16 was established in the year 2016.</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">Which Areas does Maati 16 Trust works in?</dt>
                                <dd className="text-[#fee57e] mb-4">Maati 16 has been working in the thematic areas of education, health care, youth employability and empowerment of women and girls. Education is our priority.</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">How to become a Volunteer in Maati 16 Trust?</dt>
                                <dd className="text-[#fee57e] mb-4">You need to fill the Membership/Volunteer form of Maati 16. It will take 24 – 48 hours to verify and then you receive an approval email.</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">How can I donate to Maati 16 Trust?</dt>
                                <dd className="text-[#fee57e] mb-4">You can go to “Donate Now” section of Maati 16 Trust’s Website and donate online. For other donations related queries you can please write to maati16officail@gmail.com</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">What is project Gyan Sagar?</dt>
                                <dd className="text-[#fee57e] mb-4">Our primary focus is child education. In this project we help the needy children who want to study and make their future bright. We want to reduce the illiteracy rate of India. We are working in Bihar and Delhi. We want to cover all states of India. We also help the orphanages and provide study and stationary materials to them, we are connected with 10 – 15 Orphanages till date. This number will increase soon.</dd>
                            </div>
                            <div className="mb-4">
                                <dt className="text-2xl font-bold mb-2 text-[#fee57e]">How can I work form Maati 16?</dt>
                                <dd className="text-[#fee57e]">Please go to our “Carrer” page to know more about the current openings.</dd>
                            </div>
                        </dl>
                        <button
                            className="mt-4 bg-[#fee57e] hover:bg-[#e09528] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={toggleFAQs}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
             <div className="personal-details">
                <p>Founder – Hemanshu Dubey</p>
                <p>Contact Number / WhatsApp – +91 9870112134</p>
                <p>Registered Address – Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi. Zip Code – 110059</p>
                <p>Instagram – <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" target="_blank" rel="noopener noreferrer">maati16._</a></p>
                <p>Linkedin – <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" target="_blank" rel="noopener noreferrer">Hemanshu Dubey</a></p>
            </div>
        </nav>
    );
};

export default Navbar;
