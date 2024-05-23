import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Topbar from '../components/TopBar';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
const placeholderImage = "https://designshack.net/wp-content/uploads/placeholder-image.png";

const projects = [
  { id:1,
    title: "Fundraiser Event",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-10",
    image: placeholderImage
  },
  { id:2,
    title: "Donation",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-09",
    image: placeholderImage
  },
  { id:3,
    title: "Awareness Event",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-08",
    image: placeholderImage
  },
  { id:4,
    title: "Project 4",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-07",
    image: placeholderImage
  },
  { id:5,
    title: "Project 5",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-06",
    image: placeholderImage
  },
  { id:6,
    title: "Project 6",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-05",
    image: placeholderImage
  },
  { id:7,
    title: "Project 7",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-04",
    image: placeholderImage
  },
  { id:8,
    title: "Project 8",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-03",
    image: placeholderImage
  },
  { id:9,
    title: "Project 9",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-02",
    image: placeholderImage
  },
  { id:10,
    title: "Project 10",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-05-01",
    image: placeholderImage
  },
  {  id:11,
    title: "Project 11",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-04-30",
    image: placeholderImage
  },
  { id:12,
    title: "Project 12",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
    date: "2024-04-29",
    image: placeholderImage
  },
];


const WorkPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = projects.filter(project => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.date.includes(searchQuery)
    );
  });

  const sortedProjects = filteredProjects.sort((a, b) => new Date(b.date) - new Date(a.date));

  const pageCount = Math.ceil(sortedProjects.length / projectsPerPage);

  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-[#fee57e] mb-8">Our Works</h2>

          <div className="relative mb-8">
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search by project name or date (YYYY-MM-DD)"
    className="w-full py-3 pl-10 pr-12 border-2 border-[#fee57e] rounded-full text-gray-900 focus:outline-none focus:border-yellow-600"
  />
  <FiSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-4" />
  {searchQuery && (
    <button
      onClick={() => setSearchQuery('')}
      className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 right-4"
    >
      <IoMdClose />
    </button>
  )}
</div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden w-[90%] mx-auto"
                whileHover={{ scale: 1.05 }}
              >
               <Link to={`/works/${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-md shadow-md"
                  />
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center rounded-md justify-center text-center bg-[rgba(0,0,0,0.7)] opacity-0 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                  >
                    <h3 className="mb-2 text-2xl font-bold text-[#fee57e] md:text-4xl">{project.title}</h3>
                    <p className="max-w-md text-xl text-white md:text-2xl">{project.description}</p>
                    <span className="text-white">Click To See More Details</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {sortedProjects.length > projectsPerPage && (
  <div className="flex justify-center mt-8">
    {[...Array(pageCount)].map((_, index) => (
      <button
        key={index}
        onClick={() => {
          paginate(index + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
        }}
        className={`mx-1 px-4 py-2 bg-[#fee57e] text-[#280101] rounded-md hover:bg-yellow-600 transition duration-300 ${currentPage === index + 1 ? 'font-bold' : ''}`}
      >
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

export default WorkPage;
