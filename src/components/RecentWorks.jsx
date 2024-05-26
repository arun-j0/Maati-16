import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const placeholderImage = "https://designshack.net/wp-content/uploads/placeholder-image.png";

const projects = [
  { id: 1, title: "Fundraiser Event", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-10", image: placeholderImage },
  { id: 2, title: "Donation", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-09", image: placeholderImage },
  { id: 3, title: "Awareness Event", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-08", image: placeholderImage },
  { id: 4, title: "Project 4", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-07", image: placeholderImage },
  { id: 5, title: "Project 5", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-06", image: placeholderImage },
  { id: 6, title: "Project 6", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-05", image: placeholderImage },
  { id: 7, title: "Project 7", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-04", image: placeholderImage },
  { id: 8, title: "Project 8", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-03", image: placeholderImage },
  { id: 9, title: "Project 9", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-02", image: placeholderImage },
  { id: 10, title: "Project 10", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-05-01", image: placeholderImage },
  { id: 11, title: "Project 11", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-04-30", image: placeholderImage },
  { id: 12, title: "Project 12", description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..", date: "2024-04-29", image: placeholderImage },
];

const RecentWorks = () => {
  const latestProjects = projects.slice(0, 6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#fee57e] mb-8">Recent Works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {latestProjects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden w-[90%] mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/works/${project.id}`}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md shadow-md"
                />
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-md text-center bg-[rgba(0,0,0,0.7)] opacity-0 transition-opacity duration-300"
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
        <div className="mt-8 text-center">
          <Link to="/works">
            <button className="bg-[#fee57e] text-[#280101] px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">See More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
