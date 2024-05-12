import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Topbar from '../components/TopBar';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const blogs = [
  {
    title: "Blog 1",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "2024-05-01",
    id: 1,
  },
  {
    title: "Blog 2",
    content: "Content of the blog 2..Content of the blog 2..Content of the blog 2..Content of the blog 2..Content of the blog 2..",
    author: "Arun",
    date: "2024-05-09",
    id: 2,
  },
  // Add other blogs
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const filteredBlogs = blogs.filter(blog => {
    return (
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.date.includes(searchQuery)
    );
  });

  const sortedBlogs = filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort blogs by date

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-[#fee57e] mb-8">Blogs</h2>

          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by blog name, author, or date (YYYY-MM-DD)"
              className="w-[95%] md:w-full ml-2 md:ml-0 py-3 pl-10 pr-4 border-2 border-[#fee57e] rounded-full text-gray-900 focus:outline-none focus:border-yellow-600"
            />
            <FiSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-4">
                <IoMdClose />
              </button>
            )}
          </div>

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
                  <h3 className="text-3xl md:text-4xl font-bold text-[#280101] mb-2">{blog.title}</h3>
                  <p className="mb-4 text-lg text-gray-600 md:text-xl">{blog.content}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                  <Link to={`/blogs/${blog.id}`} className="block mt-4 text-[#280101] font-semibold hover:text-yellow-600">Read More</Link>
                </motion.div>
              ))}
            </div>
          )}

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
      <Footer />
    </>
  );
};

export default BlogPage;
