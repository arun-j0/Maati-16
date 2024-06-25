import React, { useRef, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const PrivacyPolicy = ({ onClose }) => {
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
                <h2 className="mb-4 text-xl font-semibold text-[#fee57e]">Privacy Policy</h2>
                <div className="space-y-4 text-white">
                    <p>Maati 16 is an independent, Not for Profit Organization founded in 2016, having its office at Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi – 110059, which has its online portal at https://  (the “Website”) By using (browsing or making a donation or shopping on) our Website or by subscribing to or using any of our services (“Services”), you agree to comply with and be bound by the following terms of the Privacy Policy (The “Privacy Policy”)</p>
                    <p>Please review the following provisions carefully. If you do not agree to any of these provisions, please do not use this Website.</p>
                    <p>The term “Maati 16” or “us”, “our” or “we” refers to the owner of the Website, i.e. Maati 16. The term “you” refers to you, the user or viewer of our Website or any of the Services.</p>
                    <p>Maati 16 takes your privacy seriously and does not compromise on taking stringent measures in protecting your information including user, payment and order data. We do not share your information with any third party systems.</p>
                    <h3 className="font-bold">Personal Data Privacy</h3>
                    <ul className="list-disc list-inside">
                        <li>Maati 16 does not collect any personal information about users, except that which is knowingly and specifically supplied to us by the user.</li>
                        <li>Maati 16 is committed to ensuring the privacy of your personal information.</li>
                        <li>We will not sell or pass on your information to any other organization outside of Maati 16 unless you specifically and expressly give us permission to do so.</li>
                        <li>We always give you the option to unsubscribe from our mailing lists.</li>
                        <li>If you are under 18 years old, we suggest that you ask your parents or guardian before signing up on this site.</li>
                    </ul>
                    <p>We do not collect/store your banking information like credit/debit card/net banking information on our server. Our Payment gateway processes the transaction through the respective banking system.</p>
                    <h3 className="font-bold">What information do we collect?</h3>
                    <p>I. Personal information such as name, address, telephone numbers, e-mail addresses, and date of birth (where appropriate). We collect this information only in connection with specific activities, such as donations asks, campaigns, feedback, surveys, email newsletter subscriptions, etc. You don’t have to disclose any of this information if you do not wish to.</p>
                    <p>II. Non-personal information: Maati 16 collects data such as IP address (the location of the computer on the internet), pages accessed and files downloaded. This helps us to determine how many individuals use our site, how many people visit on a regular basis, which pages are most popular, and which pages are least popular. This information doesn’t tell us anything about who you are, it simply allows us to monitor and improve our service.</p>
                    <h3 className="font-bold">Where will the information be held?</h3>
                    <p>Personal information submitted through the forms on this site is held only in a Maati 16 database. We confirm that Maati 16 will not share the information you give to us on this website with any other organization outside of Maati 16 unless you have specifically given us permission to do so.</p>
                    <h3 className="font-bold">Information from under 18s</h3>
                    <p>If you are under 18, be sure to obtain your parent’s or guardian’s permission before you send any information about yourself (your name, address, e-mail address, etc.) to us or anyone else over the internet. We encourage parents to get involved with their children’s use of the internet and to be aware of the activities in which they are participating.</p>
                    <h3 className="font-bold">Your Right to access the information</h3>
                    <p>At any time, you can ask us for a copy of the personal information that we hold about you or request a correction or deletion of information.</p>
                    <h3 className="font-bold">External links</h3>
                    <p>There are links on this Website that take you to other websites outside of our service. Any links provided to third-party websites outside of this site are provided solely for your convenience. The operation and content of such third-party websites is beyond our control, and we do not endorse in any manner whatsoever or accept any responsibility for the content or other material that may be contained on such websites, the use of such websites, or any products or services advertised on or sold through any such web sites. We will not be liable under any circumstances for any damages whatsoever, direct or indirect, resulting from any use of this website or any other third party website linked to this website, whether or not we are advised of the possibility of such damages.</p>
                    <p>Emails are sent only to Maati 16 supporters/ users who have chosen to receive them (opted-in) or who have made a purchase or made a donation on our website. At any time, you can notify us that you wish to stop receiving these emails. In addition, we keep a record of your past donations, purchases, returns, and credits. We may also ask you for information regarding your personal preferences and demographics to help us better meet your needs.</p>
                    <p>If we are required to intercept, disclose, monitor and/or store your personal information:</p>
                    <ul className="list-disc list-inside">
                        <li>(a) by law;</li>
                        <li>(b) to conduct our business;</li>
                        <li>(c) to secure our systems, or</li>
                        <li>(d) to enforce our own rights, we will do so in the manner as prescribed by law.</li>
                    </ul>
                    <p>Such interception, disclosure, monitoring and storage may take place without your knowledge. In that case, we will not be liable to you or any third party for any damages howsoever arising from such interception, disclosure, monitoring and storage. In order to ensure that all our Users comply with the Terms of Use, we may monitor your personal information to the extent that this may be required to determine compliance and/or to identify instances of non-compliance. To ensure that the security and integrity of our Site/ products/ services are safeguarded, we may monitor your personal information. This monitoring may include (without limitation) the filtering of incoming and outgoing electronic data messages to identify, limit and/or prevent the transmission of spam, viruses and/or unlawful, defamatory, obscene or otherwise undesirable material or content.</p>
                    <p>You acknowledge that this Privacy Policy is part of the Terms of Use and you unconditionally agree that using Maati 16 Site signifies your assent to Maati 16’s Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Site. Your visit and any dispute over privacy are subject to this Privacy Policy and our Terms of Use, including limitations on damages. Maati 16 reserves the right to modify the Terms of Use and this Privacy Policy, at any time.</p>
                    <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us at maati16official@gmail.com. We will promptly correct any information found to be incorrect. You can also speak to us at +91 9870112134</p>
                </div>
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

const FAQs = ({ onClose }) => {
    const containerRef = useRef(null);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

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

    const handleOpenPrivacyPolicy = () => {
        setShowPrivacyPolicy(true);
    };

    const handleClosePrivacyPolicy = () => {
        setShowPrivacyPolicy(false);
    };

    return (
        <>
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
                    <div className="flex justify-center mt-4 space-x-4">
                        <button
                            onClick={onClose}
                            className="bg-[#fee57e] hover:bg-[#e09528] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleOpenPrivacyPolicy}
                            className="bg-[#fee57e] hover:bg-[#e09528] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </div>
            {showPrivacyPolicy && <PrivacyPolicy onClose={handleClosePrivacyPolicy} />}
        </>
    );
};

export default FAQs;
