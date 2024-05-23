import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Topbar from '../components/TopBar';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const placeholderImage = "https://designshack.net/wp-content/uploads/placeholder-image.png";

const blogs = [
  {
    title: "Blog 1",
    content: "Content of the blog 1..Content of the blog 1..Content of the blog 1..Content of the blog 1..Content of the blog 1..",
    detailedDescription: "This is a detailed description of Blog 1. It provides more information about the content and context of the blog.",
    author: "Arun",
    date: "2024-05-01",
    id: 1,
    images: [placeholderImage, placeholderImage, placeholderImage]
  },
  {
    title: "Blog 2",
    content: "Content of the blog 2..Content of the blog 2..Content of the blog 2..Content of the blog 2..Content of the blog 2..",
    detailedDescription: "This is a detailed description of Blog 2. It provides more information about the content and context of the blog.",
    author: "Arun",
    date: "2024-04-28",
    id: 2,
    images: [placeholderImage]
  },
  // Other blogs
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <div className="p-6 mx-auto bg-white rounded-lg shadow-md w-[90%]">
            <h1 className="text-3xl md:text-5xl font-bold text-[#280101] mb-8">{blog.title}</h1>
            {blog.images.length === 1 ? (
              <div className="flex justify-center mb-8">
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="object-cover  md:w-[60%] h-auto rounded-lg"
                />
              </div>
            ) : (
              <div className="flex justify-center mb-4">
                <Slider {...settings} className='max-w-3xl'>
                  {blog.images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            <p className="mb-4 text-xl font-bold text-gray-600">{blog.content}</p>
            <p className="mb-4 text-lg text-gray-600">{blog.detailedDescription}</p>
            <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
              <span>By {blog.author}</span>
              <span>{blog.date}</span>
            </div>
            <div className="flex justify-center mt-8">
              <Link to="/blogs" className="bg-[#fee57e] text-[#280101] py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
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

export default BlogDetailPage;
