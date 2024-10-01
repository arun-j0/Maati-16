import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Chatbot from './Chatbot'; // Import Chatbot component

const Donation = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showChatbot, setShowChatbot] = useState(false); // Add state for chatbot visibility
  const navigate = useNavigate();

  const generateBill = () => {
    const doc = new jsPDF();
    doc.text('Donation Receipt', 14, 16);
    doc.text(`Name: ${name}`, 14, 30);
    doc.text(`Address: ${address}`, 14, 40);
    doc.text(`Email: ${email}`, 14, 50);
    doc.text(`PAN: ${pan}`, 14, 60);
    doc.text(`Amount Donated: ₹${amount}`, 14, 70);
    doc.text(`Payment Method: ${paymentMethod}`, 14, 80);
    doc.text('Thank you for your donation!', 14, 100);
    doc.save('DonationReceipt.pdf');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, address, email, pan, amount, paymentMethod });
    toast.success('Thank you for your donation!');
    generateBill();
    setName('');
    setAddress('');
    setEmail('');
    setPan('');
    setAmount('');
    setPaymentMethod('');
    setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
  };

  const handleClose = () => {
    navigate('/');
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle chatbot visibility
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#e0c9a1]">
      <div className="relative w-full max-w-md p-8 bg-[#f2e5d2] rounded-md shadow-md">
        <button
          className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
          onClick={handleClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="mb-6 text-3xl font-handwriting text-center text-[#8b5a2b]">Donate to Bank of Baroda</h2>
        <div className="mb-6 text-[#5d493e]">
          <h3 className="text-lg font-handwriting">Bank Account Details</h3>
          <p><strong>Account no:</strong> 49918100000881</p>
          <p><strong>Account Holder Name:</strong> Hemanshu</p>
          <p><strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)</p>
          <p><strong>Branch:</strong> Buddha Colony</p>
          <p><strong>Pay Online:</strong> 6205415221@ybl</p>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Form Fields Here */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-[#8b5a2b] rounded hover:bg-[#5d493e] focus:outline-none focus:shadow-outline"
            >
              Donate
            </button>
            <button
              type="button"
              className="px-4 py-2 font-bold text-white bg-[#8b5a2b] rounded hover:bg-[#5d493e] focus:outline-none focus:shadow-outline"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
        <ToastContainer />
        <button
          className="fixed bottom-4 right-4 px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700"
          onClick={toggleChatbot}
        >
          {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
        </button>
        {showChatbot && <Chatbot />} {/* Show Chatbot when showChatbot is true */}
      </div>
    </div>
  );
};

export default Donation;
