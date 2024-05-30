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
        <nav className={`bg-white text-[#280101] sticky top-0 z-50 ${isSticky ? 'bg-opacity-0 md:bg-opacity-70' : ''}`}>
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between py-4">
                    {/* Hamburger Menu - Mobile */}
                    <div className="right-0 flex-grow text-right lg:hidden">
                        <button onClick={toggleMenu} className={`hover:text-[#fee57e] focus:outline-none ${isSticky ? 'text-[#fee57e]' : 'text-[#280101]'}`}>
                            <GiHamburgerMenu className="w-6 h-6" />
                        </button>
                        {isOpen && (
                            <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#8B4513]">
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
                                                <div onMouseEnter={handleAboutUsHover} onMouseLeave={handleAboutUsLeave} className="absolute left-0 w-[19rem] py-2 mt-2 transition-opacity duration-300 bg-[#D2691E] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2 z-10">
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white" onClick={togglePersonalDetails}>Personal Details</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Core Members</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white" onClick={() => setShowMottoObjectiveButtons(!showMottoObjectiveButtons)}>Our Motto and Objective</a>
                                                    {showMottoObjectiveButtons && (
                                                        <div className="px-4 py-2 text-xl text-gray-300">
                                                            <button onClick={() => setShowObjective(true)} className="block w-full mt-2 text-left">Objective</button>
                                                            <button onClick={() => setShowMotto(true)} className="block w-full mt-2 text-left">Motto</button>
                                                        </div>
                                                    )}
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
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
                                                <div onMouseEnter={handleCareersHover} onMouseLeave={handleCareersLeave} className="absolute left-0 w-[25rem] py-2 mt-2 transition-opacity duration-300 bg-[#A0522D] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2 z-10">
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Careers</a>
                                                    <a href="#" className="block px-4 py-2 text-xl text-left text-gray-300 hover:text-white">Internships</a>
                                                </div>
                                            )}
                                        </li>
                                        <li>
                                            <Link to="/gallery" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:text-[#fee57e]">
                                                <RiGalleryLine /> <span>Gallery</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/works" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:text-[#fee57e]">
                                                <RiCalendar2Line /> <span>Our Works</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/blogs" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:text-[#fee57e]">
                                                <RiArticleLine /> <span>Blog</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#contact" className="flex text-2xl items-center space-x-2 text-[#fee57e] hover:ttext-[#fee57e]">
                                                <RiContactsLine /> <span>Contact Us</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Menu - Desktop */}
                    <div className="hidden w-full lg:flex lg:items-center lg:justify-center lg:space-x-5">
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="flex items-center space-x-2 text-xl text-amber-900 text-center hover:text-[#280101]">
                                    <RiHome4Line size={30} /> <span className='text-3xl'>Home</span>
                                </Link>
                            </li>
                            <li className="relative group">
                                <div
                                    onMouseEnter={handleAboutUsHover}
                                    onMouseLeave={handleAboutUsLeave}
                                    className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]"
                                >
                                    <RiUserLine size={30} /> <span className='text-3xl'>About Us</span> <FaChevronDown className="ml-1" />
                                </div>
                                {aboutUsDropdown && (
                                    <div onMouseEnter={handleAboutUsHover} onMouseLeave={handleAboutUsLeave} className="absolute left-0 w-60 py-2 mt-2 transition-opacity duration-300 bg-[#8B4513] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2">
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white" onClick={togglePersonalDetails}>Personal Details</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Core Members</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white" onClick={() => setShowMottoObjectiveButtons(!showMottoObjectiveButtons)}>Our Motto and Objective</a>
                                        {showMottoObjectiveButtons && (
                                            <div className="px-4 py-2 text-2xl text-gray-300">
                                                <button onClick={() => setShowObjective(true)} className="block w-full mt-2 text-left">Objective</button>
                                                <button onClick={() => setShowMotto(true)} className="block w-full mt-2 text-left">Motto</button>
                                            </div>
                                        )}
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white" onClick={toggleFAQs}>FAQs and Policies</a>
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
                                    <div onMouseEnter={handleCareersHover} onMouseLeave={handleCareersLeave} className="absolute left-0 w-60 py-2 mt-2 transition-opacity duration-300 bg-[#8B4513] rounded-md shadow-lg opacity-100 top-full border-[#fee57e] border-2">
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white" onClick={toggleForm}>Membership/Volunteership Form</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Careers</a>
                                        <a href="#" className="block px-4 py-2 text-2xl text-gray-300 hover:text-white">Internships</a>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link to="/gallery" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiGalleryLine size={30} /> <span className='text-3xl'>Gallery</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/works" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiCalendar2Line size={30} /> <span className='text-3xl'>Our Works</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blogs" className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiArticleLine size={30} /> <span className='text-3xl'>Blog</span>
                                </Link>
                            </li>
                            <li>
                                <a href="#contact" onClick={handleContactClick} className="flex text-xl items-center space-x-2 text-amber-900 hover:text-[#280101]">
                                    <RiContactsLine size={30} /> <span className='text-3xl'>Contact Us</span>
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
            {/* Personal Details Modal */}
           {showPersonalDetails && (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-h-[80vh] overflow-auto form-container">
            <h2 className="text-3xl font-bold text-[#fee57e] mb-4 border-b border-[#fee57e] pb-2">
                <u>Personal Details</u>
            </h2>
            {/* Personal details content */}
            <button onClick={togglePersonalDetails} className="absolute top-4 right-4 text-[#fee57e]">
                <FaTimes className="w-6 h-6" />
            </button>
            <div className="text-lg text-[#fee57e]">
                <p><span className="font-semibold">Founder:</span> Hemanshu Dubey</p>
                <p><span className="font-semibold">Contact Number / WhatsApp:</span> +91 9870112134</p>
                <p><span className="font-semibold">Registered Address:</span> Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi. Zip Code – 110059</p>
                <p><span className="font-semibold">Instagram:</span> <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" className="text-[#fee57e] hover:text-[#fee57e]">maati16</a></p>
                <p><span className="font-semibold">Linkedin:</span> <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" className="text-[#fee57e] hover:text-[#fee57e]">Hemanshu Dubey</a></p>
            </div>
        </div>
    </div>
)}
            {/* FAQs Modal */}
           {showFAQs && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-h-[80vh] overflow-auto form-container">
                        <h2 className="mb-4 text-xl font-semibold">FAQs and Policies</h2>
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
            {/* Objective Modal */}
{showObjective && (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div style={{ backgroundColor: '#6e4019', color: '#fee57e', padding: '2rem', borderRadius: '0.5rem', maxWidth: '40rem', maxHeight: '80vh', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', overflow: 'auto' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Objective</h2>
            <div style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
                <p><strong>The Objectives of Our Trust:</strong></p>
                <p><strong>1. Education and Skill Development:</strong> Our Trust NGO prioritizes and takes initiatives for the education and skill development of needy children. To enhance literacy, we provide books and stationery items to disadvantaged children. We also help them to pay their school fees. We shall establish schools, libraries, and vocational training centers, and conduct scholarship programs to empower individuals through education and equip them with the skills needed to succeed in life.</p>
                <p><strong>2. Healthcare and Sanitation:</strong> Our Trust NGO often works to facilitate access to healthcare services and sanitation facilities, especially in underdeveloped and remote areas. To improve public health, we shall establish health clinics, organize medical camps, and promote hygiene and sanitation practices.</p>
                <p><strong>3. Environmental Conservation:</strong> Our Trust NGO will focus on environmental conservation and sustainability. We shall work to protect natural habitats, promote sustainable development practices, and raise awareness on environmental issues such as climate change, pollution, and biodiversity loss.</p>
                <p><strong>4. Human Rights:</strong> Our Trust NGO shall work to promote and protect human rights, including civil, political, economic, social, and cultural rights. We shall advocate for the rights of specific groups such as women, children, minorities, refugees, and indigenous people.</p>
                <p><strong>5. Social Welfare:</strong> Our Trust NGOs aim to improve the welfare and well-being of underprivileged and marginalized communities. This should include providing education, healthcare, nutrition, housing, and other basic needs to those in need.</p>
                <p><strong>6. Community Development:</strong> Our Trust NGO shall engage in community development projects aimed at empowering communities to become self-reliant and sustainable. This should include initiatives such as microfinance programs, entrepreneurship training, infrastructure development, and capacity-building workshops.</p>
                <p><strong>7. Disaster Relief and Rehabilitation:</strong> Our Trust NGO plays a crucial role in disaster response and recovery efforts. We shall provide emergency relief supplies, shelter, medical assistance, psychosocial support as well as long-term rehabilitation and reconstruction assistance to disaster-affected communities.</p>
                <p><strong>8. Empowerment of Women and Gender Equality:</strong> Our Trust NGO will focus on promoting gender equality and empowering women and girls. We shall work to eliminate discrimination and violence against women, increase women's access to education and economic opportunities, and promote women's participation in decision-making processes.</p>
                <p><strong>9. Promotion of Animal Welfare:</strong> Our Trust NGO shall advocate for the protection and welfare of animals, including companion animals, wildlife, and livestock. We shall support animal shelters, conduct rescue operations, spaying and neutering programs, and run campaigns against animal cruelty and exploitation.</p>
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <button
                    style={{ padding: '0.5rem 1rem', fontSize: '1rem', fontWeight: 700, color: '#333', backgroundColor: '#d4af37', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                    onClick={() => setShowObjective(false)}
                >
                    Close
                </button>
            </div>
        </div>
    </div>
)}
            {/* Motto Modal */}
            {showMotto && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                    <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-w-lg overflow-auto form-container">
                        <h2 className="mb-4 text-xl font-semibold">Motto</h2>
                       OUR MOTTO – 
                  Maati-16 Trust is committed to bridging the gap in educational access for disadvantaged children. 
                  By offering resources, support, and opportunities for learning, they are paving the way for these children to overcome barriers and reach their full potential. 
                  Through their dedication, Maati-16 Trust is not just changing lives but also shaping a better tomorrow for communities in need.
                  Maati-16 Trust is dedicated to providing education to underprivileged children, ensuring they have the opportunity to build a brighter future. 
                  Through their efforts, they aim to break the cycle of poverty by empowering young minds with knowledge and skills. With a focus on education, Maati-16 Trust strives to create a more equitable society where every child has access to quality learning regardless of their background or circumstances.

                        <button
                            className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => setShowMotto(false)}
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
