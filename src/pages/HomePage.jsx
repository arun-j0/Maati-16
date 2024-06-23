import React,{useEffect} from 'react'
import ContactUsForm from "../components/ContactUs";
import Footer from "../components/Footer";
import HeroSection from "../components/Hero";
import HowYouCanHelp from "../components/HowYouCanHelp";
import Introduction from "../components/Intro";
import BlogSection from "../components/LatestBlogs";
import Navbar from "../components/NavBar";
import RecentWorks from "../components/RecentWorks";
import TopBar from "../components/TopBar";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      <Navbar/>
      <HeroSection/>
      <Introduction/>
      <HowYouCanHelp/>
      <RecentWorks/>
      <BlogSection/>
      <ContactUsForm/>
      <Footer/>
    </>
  )
}

export default HomePage