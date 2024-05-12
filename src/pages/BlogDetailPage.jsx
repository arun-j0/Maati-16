import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Topbar from '../components/TopBar';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const blogs = [
  {
    title: "Blog 1",
    content: "Content of the blog 1..Content of the blog 1..Content of the blog 1..Content of the blog 1..Content of the blog 1..",
    detailedDescription: "This is a detailed description of Blog 1. It provides more information about the content and context of the blog.",
    author: "Arun",
    date: "2024-05-01",
    id: 1,
    image: "blog1.jpg"
  },
  {
    title: "Blog 2",
    content: "Content of the blog 2..Content of the blog 2..Content of the blog 2..Content of the blog 2..Content of the blog 2..",
    detailedDescription: "This is a detailed description of Blog 2. It provides more information about the content and context of the blog.",
    author: "Arun",
    date: "2024-04-28",
    id: 2,
    image: "blog2.jpg"
  },
  // Other blogs
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <div className="p-6 mx-auto bg-white rounded-lg shadow-md md:w-2/3 lg:w-1/2">
            <h1 className="text-3xl md:text-6xl font-bold text-[#280101] mb-4">{blog.title}</h1>
            {blog.image && (
              <img src={blog.image} alt={blog.title} className="mb-4 rounded-lg" />
            )}
            <p className="mb-4 text-lg text-gray-600">{blog.content}</p>
            <p className="mb-4 text-lg text-gray-600">{blog.detailedDescription}</p>
            <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
              <span>By {blog.author}</span>
              <span>{blog.date}</span>
            </div>
            {/* Button to go back to BlogPage */}
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