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
                    "Maati-16 Trust is committed to bridging the gap in educational access for disadvantaged children. By offering resources, support, and opportunities for learning, they are paving the way for these children to overcome barriers and reach their full potential. Through their dedication, Maati-16 Trust is not just changing lives but also shaping a better tomorrow for communities in need.
Maati-16 Trust is dedicated to providing education to underprivileged children, ensuring they have the opportunity to build a brighter future. Through their efforts, they aim to break the cycle of poverty by empowering young minds with knowledge and skills. With a focus on education, Maati-16 Trust strives to create a more equitable society where every child has access to quality learning regardless of their background or circumstances."
                </p>
            </div>
        </div>
    );
};

export default Motto;
