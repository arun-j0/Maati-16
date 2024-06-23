import React, { useState } from 'react';

const VolunteerForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        contact: '',
        address: '',
        aadhar: '',
        whatsapp: '',
        email: '',
        declaration: false,
    });

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here, e.g., send data to server
        console.log('Form submitted with data:', formData);
        // After submission, you might want to close the form or show a success message
        onClose(); // Close the form after successful submission
    };

    const handleFormClose = () => {
        onClose(); // Close the form
    };

    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="bg-[#6e4019] text-[#fee57e] p-8 rounded-md shadow-lg max-h-[80vh] overflow-auto form-container">
                <h2 className="mb-4 text-xl font-semibold">Membership/Volunteership Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-[#fee57e] text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#fee57e] leading-tight focus:outline-none focus:shadow-outline bg-[#42220d]"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
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
                            value={formData.dob}
                            onChange={handleChange}
                            required
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
                            value={formData.contact}
                            onChange={handleChange}
                            required
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
                            value={formData.address}
                            onChange={handleChange}
                            required
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
                            value={formData.aadhar}
                            onChange={handleChange}
                            required
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
                            value={formData.whatsapp}
                            onChange={handleChange}
                            required
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
                            value={formData.email}
                            onChange={handleChange}
                            required
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
                            checked={formData.declaration}
                            onChange={handleChange}
                            required
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
    );
};

export default VolunteerForm;
