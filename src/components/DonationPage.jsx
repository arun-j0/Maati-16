// src/components/DonationPage.js
import React, { useState } from 'react';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Donation Details:', {
      donationAmount,
      donorName,
      email,
      message,
    });
    // Reset the form fields
    setDonationAmount('');
    setDonorName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#280101', border: '8px solid #fee57e', borderBottomWidth: '4px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', color: '#fee57e' }}>Donate</h2>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="donationAmount" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#280101' }}>Donation Amount</label>
            <input
              type="number"
              id="donationAmount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '1rem', color: 'black' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="donorName" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#280101' }}>Name</label>
            <input
              type="text"
              id="donorName"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '1rem', color: 'black' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#280101' }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '1rem', color: 'black' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#280101' }}>Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '0.25rem', fontSize: '1rem', color: 'black' }}
              rows="4"
            />
          </div>
          <button
            type="submit"
            style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'white', backgroundColor: '#280101', border: 'none', borderRadius: '0.25rem', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#fee57e'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#280101'}
          >
            Donate
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonationPage;
