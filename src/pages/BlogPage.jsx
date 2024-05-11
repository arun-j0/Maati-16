import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Topbar from '../components/TopBar';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const blogs = [
  {
    title: "Blog 1",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 2",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 3",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 4",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 5",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 6",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 7",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 8",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 9",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 10",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 11",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 12",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 13",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 14",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 15",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 16",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Kumar",
    date: "2024-04-28",
    link: "#"
  },
  {
    title: "Blog 17",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    link: "#"
  },
  {
    title: "Blog 18",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Kumar",
    date: "2024-04-28",
    link: "#"
  },

  // Add more blog objects here
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12; // Change this to change number of blogs per page

  const filteredBlogs = blogs.filter(blog => {
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.date.includes(searchQuery)
    );
  });

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Topbar/>
    <Navbar/>
    <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8 ">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold text-center text-[#fee57e] mb-8">Blogs</h2>

        {/* Search */}
        <div className="relative mb-8">
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search by blog name, author, or date (YYYY-MM-DD)" className="w-[95%] md:w-full ml-2 md:ml-0 py-3 pl-10 pr-4 border-2 border-[#fee57e] rounded-full text-gray-900 focus:outline-none focus:border-yellow-600" />
          <FiSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4" />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-4">
              <IoMdClose />
            </button>
          )}
        </div>

        {/* Blog Grid */}
        {currentBlogs.length === 0 ? (
          <div className="text-center text-[#fee57e]">
            No Blogs Found
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentBlogs.map((blog, index) => (
              <motion.div 
                key={index} 
                className="p-6 ml-5 md:ml-0 bg-white rounded-lg shadow-md w-[90%] md:w-auto "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-3xl md:text-6xl font-bold text-[#280101] mb-2">{blog.title}</h3>
                <p className="mb-4 text-lg text-gray-600 md:text-2xl">{blog.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <a href={blog.link} className="block mt-4 text-[#280101] font-semibold hover:text-yellow-600">Read More</a>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredBlogs.length > blogsPerPage && (
          <div className="flex justify-center mt-8">
            {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage))].map((_, index) => (
              <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 px-4 py-2 bg-[#fee57e] text-[#280101] rounded-md hover:bg-yellow-600 transition duration-300 ${currentPage === index + 1 ? 'font-bold' : ''}`}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default BlogPage;
