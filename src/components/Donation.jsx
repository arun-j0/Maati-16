import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Load Tawk.to script
const loadChatbotScript = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);
};

const Donation = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [donors, setDonors] = useState([]); // State to store donor information
  const [showDonors, setShowDonors] = useState(false); // State to toggle donor view
  const navigate = useNavigate();

  useEffect(() => {
    loadChatbotScript();
  }, []);

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
    const newDonor = { name, address, email, pan, amount, paymentMethod };
    setDonors([...donors, newDonor]); // Add new donor to the list
    toast.success('Thank you for your donation!');
    generateBill();
    setName('');
    setAddress('');
    setEmail('');
    setPan('');
    setAmount('');
    setPaymentMethod('');
    setTimeout(() => navigate('/'), 2000);
  };

  const handleClose = () => {
    navigate('/');
  };

  const openChatbot = () => {
    window.Tawk_API?.toggle();
  };

  const toggleDonors = () => {
    setShowDonors(!showDonors); // Toggle the donor visibility
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-[#e0c9a1]">
      {/* Donation Form Container */}
      <div className="relative w-full max-w-md p-8 bg-[#f2e5d2] rounded-md shadow-md">
        {/* Close Button */}
        <button
          className="absolute text-gray-600 top-2 right-2 hover:text-gray-900"
          onClick={handleClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-handwriting text-center text-[#8b5a2b]">
          Donate to Bank of Baroda
        </h2>

        {/* Bank Account Details */}
        <div className="mb-6 text-[#5d493e]">
          <h3 className="text-lg font-handwriting">Bank Account Details</h3>
          <p>
            <strong>Account no:</strong> 49918100000881
          </p>
          <p>
            <strong>Account Holder Name:</strong> Hemanshu
          </p>
          <p>
            <strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)
          </p>
          <p>
            <strong>Branch:</strong> Buddha Colony
          </p>
          <p>
            <strong>Pay Online:</strong> 6205415221@ybl
          </p>
        </div>

        {/* Donation Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#5d493e]" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Address Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#5d493e]" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#5d493e]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PAN Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#5d493e]" htmlFor="pan">
              PAN
            </label>
            <input
              type="text"
              id="pan"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              required
            />
          </div>

          {/* Amount Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#5d493e]" htmlFor="amount">
              Amount Donated
            </label>
            <input
              type="number"
              id="amount"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          {/* Payment Method Field */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-[#5d493e]" htmlFor="paymentMethod">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="UPI">UPI</option>
              <option value="PayPal">PayPal</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Donate Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Donate
            </button>
          </div>
        </form>
      </div>

      {/* View Donors Button Outside the Donation Form */}
      <div className="mt-6 w-full max-w-md">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          onClick={toggleDonors}
        >
          {showDonors ? 'Hide Donors' : 'View Donors'}
        </button>
      </div>

      {/* Conditionally Render Donor List */}
      {showDonors && (
        <div className="mt-6 w-full max-w-md p-4 bg-[#f2e5d2] rounded-md shadow-md">
          <h3 className="mb-2 text-xl font-bold text-gray-700">List of Donors</h3>
          {donors.length > 0 ? (
            <ul className="list-disc pl-6">
              {donors.map((donor, index) => (
                <li key={index} className="text-gray-600">
                  {donor.name} - ₹{donor.amount} ({donor.paymentMethod})
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No donors yet.</p>
          )}
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default Donation;
