import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Load Tawk.to script (assuming you are using Tawk.to for chatbot)
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
  const navigate = useNavigate();

  useEffect(() => {
    loadChatbotScript(); // Load chatbot script when component mounts
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
    setTimeout(() => navigate('/'), 2000); // Redirect after 2 seconds
  };

  const handleClose = () => {
    navigate('/');
  };

  const openChatbot = () => {
    // Assuming Tawk.to is used, this function will open the chat
    window.Tawk_API?.toggle();
  };

  const displayDonors = () => {
    if (donors.length === 0) {
      toast.info('No donors to display.');
    } else {
      let donorInfo = 'Donor Information:\n\n';
      donors.forEach((donor, index) => {
        donorInfo += `Donor ${index + 1}:\n`;
        donorInfo += `Name: ${donor.name}\n`;
        donorInfo += `Address: ${donor.address}\n`;
        donorInfo += `Email: ${donor.email}\n`;
        donorInfo += `PAN: ${donor.pan}\n`;
        donorInfo += `Amount Donated: ₹${donor.amount}\n`;
        donorInfo += `Payment Method: ${donor.paymentMethod}\n\n`;
      });
      alert(donorInfo); // Display donor information
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#e0c9a1]">
      <div className="relative w-full max-w-md p-8 bg-[#f2e5d2] rounded-md shadow-md">
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
        <h2 className="mb-6 text-3xl font-handwriting text-center text-[#8b5a2b]">
          Donate to Bank of Baroda
        </h2>
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
        <form onSubmit={handleSubmit}>
          {/* Donation form fields */}
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
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="upi">UPI</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>

          {/* Chatbot Button */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={openChatbot}
            >
              Chat with Us
            </button>
            <button
              type="button"
              className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
              onClick={displayDonors}
            >
              Display Information
            </button>
          </div>

          {/* Submit Button */}
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
      <ToastContainer />
    </div>
  );
};

export default Donation;
