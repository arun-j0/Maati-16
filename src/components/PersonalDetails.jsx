import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const PersonalDetails = ({ onClose }) => {
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
            <div ref={containerRef} className="relative bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-h-[80vh] overflow-auto form-container">
                <button onClick={onClose} className="absolute top-4 right-4 text-[#fee57e]">
                    <FaTimes className="w-6 h-6" />
                </button>
                <h2 className="text-3xl font-bold text-[#fee57e] mb-4 border-b border-[#fee57e] pb-2">
                    Personal Details
                </h2>
                <div className="text-lg text-[#fee57e]">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="pr-2 font-semibold">Founder:</td>
                                <td>Hemanshu Dubey</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-semibold">Contact Number / WhatsApp:</td>
                                <td>+91 9870112134</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-semibold">Registered Address:</td>
                                <td>Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi. Zip Code – 110059</td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-semibold">Instagram:</td>
                                <td><a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" className="text-[#fee57e] hover:text-[#fee57e]">maati16</a></td>
                            </tr>
                            <tr>
                                <td className="pr-2 font-semibold">LinkedIn:</td>
                                <td><a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" className="text-[#fee57e] hover:text-[#fee57e]">Hemanshu Dubey</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;
