import React, { useState } from 'react';
import { Tilt } from 'react-tilt';

const projects = [
  {
    title: "Fundraiser Event",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
  },
  {
    title: "Donation",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
  },
  {
    title: "Awarness Event",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
  },
  {
    title: "Project 4",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
  },
  {
    title: "Project 5",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
  },
  {
    title: "Project 6",
    description: "Content of the project..Content of the project..Content of the project..Content of the project..Content of the project..",
  },
];

const RecentWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-12 bg-[#280101] border-b-4 border-[#fee57e] border-8">
      <div className="container mx-auto">
        <h2 className="text-6xl md:text-8xl font-bold text-center text-[#fee57e] mb-8">Recent Works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="relative" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
              <Tilt className="tilt-effect">
                <img
                  src="https://designshack.net/wp-content/uploads/placeholder-image.png"
                  alt={project.title}
                  className="w-[90%] h-auto mx-auto rounded-md shadow-md md:w-full"
                />
                <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="mb-2 text-2xl font-bold text-[#fee57e] md:text-4xl">{project.title}</h3>
                  <p className="text-xl text-white md:text-2xl max-w-80 md:max-w-96">{project.description}</p>
                  <a className='pt-3 text-white '>Click To See More Details</a>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-[#fee57e] text-[#280101] px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300">See More</button>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
