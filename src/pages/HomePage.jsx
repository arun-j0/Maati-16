import React, { useEffect } from 'react';
import ContactUsForm from "../components/ContactUs";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import HowYouCanHelp from "../components/HowYouCanHelp";
import Introduction from "../components/Intro";
import BlogSection from "../components/LatestBlogs";
import Navbar from "../components/NavBar";
import RecentWorks from "../components/RecentWorks";
import TopBar from "../components/TopBar";

// Function to load Tawk.to script
const loadChatbotScript = () => {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default'; // Replace YOUR_PROPERTY_ID with your Tawk.to property ID
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);
};

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load chatbot script on component mount
    loadChatbotScript();
  }, []);

  // Function to open chatbot
  const openChatbot = () => {
    window.Tawk_API?.toggle(); // Toggle the chat widget
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <Introduction />
      <HowYouCanHelp />
      <RecentWorks />
      <BlogSection />
      <ContactUsForm />
      <Footer />

      {/* Chatbot Button */}
      <div className="fixed bottom-5 right-5">
        <button
          onClick={openChatbot}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Chat with Us
        </button>
      </div>
    </>
  );
}

export default HomePage;
