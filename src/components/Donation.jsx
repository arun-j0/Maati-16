import React from 'react';

const DonationForm = () => {
  return (
    <section id="donation" className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#fee57e] mb-8">Donate to Support Us</h2>
        <form className="max-w-5xl mx-10 md:mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mt-8">
            <div className="flex flex-col">
              <label htmlFor="amount" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Donation Amount</label>
              <input type="number" id="amount" name="amount" placeholder="Amount (INR)" className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cause" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Cause</label>
              <select id="cause" name="cause" className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600">
                <option value="" disabled selected>Select a cause</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="environment">Environmental Conservation</option>
                <option value="human-rights">Human Rights</option>
                <option value="social-welfare">Social Welfare</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label htmlFor="message" className="mb-2 text-[#fee57e] text-2xl md:text-3xl">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Any message you'd like to leave" className="px-4 py-2 text-[#280101] border-2 border-[#fee57e] rounded-md focus:outline-none focus:border-yellow-600"></textarea>
          </div>
          <div className="flex justify-center mt-8">
            <button type="submit" className="w-full py-3 text-[#280101] transition duration-300 bg-[#fee57e] rounded-md hover:bg-yellow-600 md:w-auto md:py-2 md:px-8">Donate Now</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonationForm;
