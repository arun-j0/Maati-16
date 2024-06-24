import React, { useState } from 'react';

const Donation = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [pan, setPan] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send data to backend or payment gateway
    console.log({ name, address, email, pan, amount, paymentMethod });
    alert('Thank you for your donation!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-[#e0c9a1]">
      <div className="w-full max-w-md p-8 bg-[#f2e5d2] rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#8b5a2b]">Donate to Bank of Baroda</h2>
        <div className="mb-6 text-[#5d493e]">
          <h3 className="text-lg font-bold">Bank Account Details</h3>
          <p><strong>Account no:</strong> 49918100000881</p>
          <p><strong>Account Holder Name:</strong> Hemanshu</p>
          <p><strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)</p>
          <p><strong>Branch:</strong> Buddha Colony</p>
          <p><strong>Pay Online:</strong> 6205415221@ybl</p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-[#8b5a2b] rounded hover:bg-[#5d493e] focus:outline-none focus:shadow-outline"
            >
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donation;
