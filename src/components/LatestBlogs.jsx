import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogs = [
  {
    title: "Blog 1",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "May 1, 2024",
    id:1
  },
  {
    title: "Blog 2",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "April 28, 2024",
    id:2
  },
  {
    title: "Blog 3",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "April 25, 2024",
    id:2
  },
  {
    title: "Blog 4",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "April 22, 2024",
    id:2
  },
  {
    title: "Blog 5",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "April 19, 2024",
    id:2
  },
  {
    title: "Blog 6",
    content: "Content of the blog..Content of the blog..Content of the blog..Content of the blog..Content of the blog..",
    author: "Arun",
    date: "April 15, 2024",
    id:2
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const BlogSection = () => {
  return (
    <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#fee57e] mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
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
        <div className="mt-8 text-center">
          <Link to="/blogs" onClick={scrollToTop} className="bg-[#fee57e] text-[#280101] px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">More Blogs</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
