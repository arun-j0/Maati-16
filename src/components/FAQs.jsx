import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const FAQs = ({ onClose }) => {
    const containerRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div ref={containerRef} className="bg-[#6e4019] text-white p-8 rounded-md shadow-lg max-h-[80vh] w-[90%] overflow-auto form-container relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-[#fee57e]">
                    <FaTimes className="w-6 h-6" />
                </button>
                <h2 className="mb-4 text-xl font-semibold text-[#fee57e]">FAQs and Policies</h2>
                <dl className="space-y-6">
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">1. What is the mission of Maati 16 Trust?</dt>
                        <dd className="mb-4 text-white">Maati 16 is an organization dedicated to providing education and reducing the illiteracy rate. The mission of Maati 16 is to empower individuals through education, with a focus on reducing the illiteracy rate in India. We strive to provide accessible and quality education to underserved populations, including children, adults, and marginalized communities. Through innovative programs and partnerships, we aim to equip individuals with the knowledge, skills, and opportunities they need to thrive in today's world. By addressing the root causes of illiteracy and promoting lifelong learning, we envision a future where every person has the chance to reach their full potential and contribute positively to society.</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">2. How old is Maati 16 Trust?</dt>
                        <dd className="mb-4 text-white">Maati 16 was established in the year 2016.</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">3. Which Areas does Maati 16 Trust works in?</dt>
                        <dd className="mb-4 text-white">Maati 16 has been working in the thematic areas of education, health care, youth employability and empowerment of women and girls. Education is our priority.</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">4. How to become a Volunteer in Maati 16 Trust?</dt>
                        <dd className="mb-4 text-white">You need to fill the Membership/Volunteer form of Maati 16. It will take 24 – 48 hours to verify and then you receive an approval email.</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">5. How can I donate to Maati 16 Trust?</dt>
                        <dd className="mb-4 text-white">You can go to “Donate Now” section of Maati 16 Trust’s Website and donate online. For other donations related queries you can please write to maati16officail@gmail.com</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">6. What is project Gyan Sagar?</dt>
                        <dd className="mb-4 text-white">Our primary focus is child education. In this project we help the needy children who want to study and make their future bright. We want to reduce the illiteracy rate of India. We are working in Bihar and Delhi. We want to cover all states of India. We also help the orphanages and provide study and stationary materials to them, we are connected with 10 – 15 Orphanages till date. This number will increase soon.</dd>
                    </div>
                    <div className="mb-4">
                        <dt className="text-2xl font-bold mb-2 text-[#fee57e]">7. How can I work for Maati 16?</dt>
                        <dd className="text-white">Please go to our “Career” page to know more about the current openings.</dd>
                    </div>
                </dl>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={onClose}
                        className="bg-[#fee57e] hover:bg-[#e09528] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
