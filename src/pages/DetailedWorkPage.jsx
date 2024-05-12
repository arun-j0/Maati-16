import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Topbar from '../components/TopBar';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const placeholderImage = "https://designshack.net/wp-content/uploads/placeholder-image.png";

const projects = [
  {
    id: 1,
    title: "Fundraiser Event",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    detailedDescription: "Detailed description of the project...",
    date: "2024-05-10",
    images: [placeholderImage, placeholderImage, placeholderImage]
  },
  {
    id: 2,
    title: "Unity in Giving: Community Donation Drive",
    description: "Join us for our 'Unity in Giving' donation drive, where we're coming together as a community to provide essential items and support to those in need.",
    detailedDescription: "In response to the ongoing need within our community, we are organizing a special event titled 'Unity in Giving: Community Donation Drive.' This event aims to bring together individuals, businesses, and organizations to support those in need and foster a sense of solidarity and generosity within our community. The donation drive will encompass various initiatives, including collecting essential items such as non-perishable food, clothing, hygiene products, and school supplies. Additionally, we will be accepting monetary contributions to provide assistance to local shelters, food banks, and families facing financial hardship. Our goal is not only to provide immediate relief but also to address the long-term needs of our community. Through partnerships with local charities and social service organizations, we will ensure that donations are distributed equitably and effectively to those who need them most. This event will not only benefit individuals and families facing adversity but also serve as a platform for our community to come together, demonstrate compassion, and make a tangible difference in the lives of others. Together, we can create positive change and build a stronger, more supportive community for everyone. Join us in making a meaningful impact through the power of giving!",
    date: "2024-05-09",
    images: [placeholderImage]
  },
  // Add other projects with dates
];

const DetailedProjectPage = () => {
  const { id } = useParams();
  const project = projects.find(project => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <div className="p-6 mx-auto bg-white rounded-lg shadow-md md:w-2/3 lg:w-[80%]">
            <h1 className="text-3xl md:text-5xl font-bold text-[#280101] mb-8">{project.title}</h1>
            {project.images.length === 1 ? (
              <div className="flex justify-center mb-8">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover w-full h-auto rounded-lg" // Set height to auto to maintain aspect ratio
                />
              </div>
            ) : (
              <div className="flex justify-center mb-4"> {/* Centering slider horizontally */}
                <Slider {...settings} className='max-w-3xl'> {/* Set maximum width for slider */}
                  {project.images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-auto rounded-lg" // Set height to auto to maintain aspect ratio
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            <p className="mb-4 text-xl font-bold text-gray-600">{project.description}</p>
            <p className="mb-4 text-lg text-gray-600">{project.detailedDescription}</p>
            <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
              
              <span>{project.date}</span>
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/works" className="bg-[#fee57e] text-[#280101] py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailedProjectPage;
