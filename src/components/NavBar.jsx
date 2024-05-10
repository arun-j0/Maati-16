import React, { useState, useEffect } from 'react';
import { RiHome4Line, RiUserLine, RiBriefcaseLine, RiGalleryLine, RiCalendar2Line, RiArticleLine, RiContactsLine } from 'react-icons/ri';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showPersonalDetails, setShowPersonalDetails] = useState(false);
    const [showFAQs, setShowFAQs] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-white text-[#fee57e] sticky top-0 z-50 ${isSticky& !isOpen ? 'bg-opacity-0' : ''} ${isSticky ? 'bg-opacity-70' : ''}`}>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-4">
                    {/* Hamburger Menu - Mobile */}
                    <div className="right-0 flex-grow text-right md:hidden ">
                        <button onClick={toggleMenu} className={` hover:text-[#fee57e]  focus:outline-none ${isSticky ? 'text-[#fee57e]' : 'text-[#280101]'} `}>
                            <GiHamburgerMenu className="w-6 h-6" />
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#280101] ">
                                <div className="flex flex-col items-center justify-center h-full space-y-4">
                                    <button onClick={toggleMenu} className="absolute text-[#fee57e] top-16 right-4">
                                        <FaTimes className="w-6 h-6" />
                                    </button>
                                    <ul className="flex flex-col items-center space-y-6">
                                        <li>
                                            <a href="#" className="flex items-center space-x-2 text-[#fee57e] text-4xl hover:text-gray-300">
                                                <RiHome4Line /> <span>Home</span>
                                            </a>
                                        </li>
                                        <li className="relative group">
                                            <a href="#" className="flex items-center space-x-2  text-[#fee57e] text-4xl hover:text-gray-300">
                                                <RiUserLine /> <span>About Us</span> <FaChevronDown className="ml-1 text-[#fee57e] hover:text-gray-300" />
                                            </a>
                                            <div className="absolute left-0 w-[19rem] py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 border-[#fee57e] border-2 z-10">
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white" >Personal Details</a>
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white">Core Members</a>
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white">Our Motto and Objective</a>
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white">FAQs and Policies</a>
                                            </div>
                                        </li>
                                        <li className="relative group">
                                            <a href="#" className="flex items-center text-4xl space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiBriefcaseLine /> <span>Careers</span> <FaChevronDown className="ml-1" />
                                            </a>
                                            <div className="absolute left-0 w-[25rem] py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 border-[#fee57e] border-2 z-10">
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white">Careers</a>
                                                <a href="#" className="block px-4 py-2 text-2xl text-left text-gray-300 hover:text-white">Internships</a>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-4xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiGalleryLine /> <span>Gallery</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-4xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiCalendar2Line /> <span>Our Works</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-4xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
                                                <RiArticleLine /> <span>Blog</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex text-4xl items-center space-x-2 text-[#fee57e] hover:text-gray-300">
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
                                <a href="#" className="flex items-center space-x-2 text-xl text-[#280101] text-center hover:text-gray-300">  <RiHome4Line size={30}/> <span className='text-3xl'>Home</span>
                                </a>
                            </li>
                            <li className="relative group">
                                <a href="#" className="flex items-center text-xl space-x-2 text-[#280101] hover:text-gray-300">
                                    <RiUserLine size={30} /> <span className='text-3xl'>About Us</span> <FaChevronDown className="ml-1" />
                                </a>
                                <div className="absolute left-0 w-60 py-2 mt-2 transition-opacity duration-300 bg-[#280101] rounded-md shadow-lg opacity-0 top-full group-hover:opacity-100 border-[#fee57e] border-2">
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Personal Details</a>
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Core Members</a>
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Our Motto and Objective</a>
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">FAQs and Policies</a>
                                </div>
                            </li>
                            <li className="relative group">
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#280101] hover:text-gray-300">
                                    <RiBriefcaseLine size={30} /> <span className='text-3xl'>Careers</span> <FaChevronDown className="ml-1" />
                                </a>
                                <div className="absolute left-0 py-2 mt-2 transition-opacity duration-300 bg-[#280101]  rounded-md shadow-lg opacity-0 w-[25rem] top-full group-hover:opacity-100 border-[#fee57e] border-2">
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Careers</a>
                                    <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Internships</a>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#280101] hover:text-gray-300">
                                    <RiGalleryLine size={30}/> <span className='text-3xl'>Gallery</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#280101] hover:text-gray-300">
                                    <RiCalendar2Line  size={30}/> <span className='text-3xl'>Our Works</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#280101] hover:text-gray-300">
                                    <RiArticleLine size={30}/> <span className='text-3xl'>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex text-xl items-center space-x-2 text-[#280101] hover:text-gray-300">
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
                        <h2 className="mb-4 text-xl font-semibold">Personal Details</h2>
                        <div className="mb-4">
                            <p className="text-[#fee57e] mb-2"><strong>Founder:</strong> Hemanshu Dubey</p>
                            <p className="text-[#fee57e] mb-2"><strong>Contact Number / WhatsApp:</strong> +91 9870112134</p>
                            <p className="text-[#fee57e] mb-2"><strong>Registered Address:</strong> Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi. Zip Code – 110059</p>
                            <p className="text-[#fee57e] mb-2"><strong>Instagram:</strong> <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" target="_blank" rel="noopener noreferrer">maati16._</a></p>
                            <p className="text-[#fee57e] mb-2"><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" target="_blank" rel="noopener noreferrer">Hemanshu Dubey</a></p>
                        </div>
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
                        <h2 className="mb-4 text-xl font-semibold">FAQs - Maati 16 Trust</h2>
                        <ol className="ml-6 list-decimal">
                            <li className="text-[#fee57e] mb-4">
                                <strong>What is the mission of Maati 16 Trust?</strong>
                                <p className="ml-6">Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India. We strive to provide accessible and quality education to underserved populations, including children, adults, and marginalized communities. Through innovative programs and partnerships, we aim to equip individuals with the knowledge, skills, and opportunities they need to thrive in today's world. By addressing the root causes of illiteracy and promoting lifelong learning, we envision a future where every person has the chance to reach their full potential and contribute positively to society.</p>
                            </li>
                            <li className="text-[#fee57e] mb-4">
                                <strong>How old is Maati 16 Trust?</strong>
                                <p className="ml-6">Maati 16 was established in the year 2016.</p>
                            </li>
                            <li className="text-[#fee57e] mb-4">
                                <strong>Which Areas does Maati 16 Trust work in?</strong>
                                <p className="ml-6">Maati 16 has been working in the thematic areas of education, health care, youth employability, and empowerment of women and girls. Education is our priority.</p>
                            </li>
                            <li className="text-[#fee57e] mb-4">
                                <strong>How to become a Volunteer in Maati 16 Trust?</strong>
                                <p className="ml-6">You need to fill the Membership/Volunteer form of Maati 16. It will take 24 – 48 hours for verification, and you will get a confirmation email of your volunteer membership. You will be contacted by our team whenever there is any event organized by Maati 16.</p>
                            </li>
                        </ol>
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

