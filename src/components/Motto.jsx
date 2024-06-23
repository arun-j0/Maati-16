import React from 'react';

const Motto = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-lg p-8 bg-[#6e4019] rounded-md shadow-lg">
                <button
                    className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-2xl font-bold text-center">Our Motto</h2>
                <p className="mt-4 text-lg text-center">
                    "To serve the community and make the world a better place."
                </p>
            </div>
        </div>
    );
};

export default Motto;
