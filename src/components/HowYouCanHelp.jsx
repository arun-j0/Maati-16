// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Tilt } from 'react-tilt';

const HowYouCanHelp = () => {
  return (
    <Router>
      <section className="py-12 bg-[#280101] border-8 border-b-4 border-[#fee57e]">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-[#fee57e] md:text-6xl">How You Can Help</h2>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            {/* Donate */}
            <Tilt className="flex flex-col items-center flex-1 p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl md:text-4xl font-bold text-[#280101]">Donate</h3>
              <p className="mb-6 text-xl text-center text-black md:text-2xl">Your donation can make a big difference. Support our cause and help those in need.</p>
              <a href="/donate" className="inline-block px-6 py-3 text-[#280101] transition duration-300 bg-[#fee57e] rounded-md hover:bg-yellow-600 text-lg md:text-2xl">Donate Now</a>
            </Tilt>
            {/* Volunteer */}
            <Tilt className="flex flex-col items-center flex-1 p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl md:text-4xl font-bold text-[#280101]">Volunteer</h3>
              <p className="mb-6 text-xl text-center text-black md:text-2xl">Join us in our mission. Volunteer your time and skills to make a positive impact in our community.</p>
              <a href="/volunteer" className="inline-block px-6 py-3 text-[#280101] transition duration-300 bg-[#fee57e] rounded-md hover:bg-yellow-600 text-lg md:text-2xl">Volunteer Now</a>
            </Tilt>
            {/* Get Involved */}
            <Tilt className="flex flex-col items-center flex-1 p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-4 text-2xl md:text-4xl font-bold text-[#280101]">Get Involved</h3>
              <p className="mb-6 text-xl text-center text-black md:text-2xl">There are many ways to get involved. Learn more about our initiatives and join our community.</p>
              <a href="/get-involved" className="inline-block px-6 py-3 text-[#280101] transition duration-300 bg-[#fee57e] rounded-md hover:bg-yellow-600 text-lg md:text-2xl">Get Involved</a>
            </Tilt>
          </div>
        </div>
      </section>

      <Switch>
        <Route path="/donate">
          <DonationForm />
        </Route>
      </Switch>
    </Router>
  );
};

const DonationForm = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Donation Form</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="amount">Donation Amount</label>
          <input className="w-full p-2 border border-gray-300 rounded" type="number" id="amount" name="amount" required />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-[#280101] rounded hover:bg-[#fee57e]">Donate</button>
      </form>
    </div>
  );
};

export default HowYouCanHelp;
