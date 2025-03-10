import React from 'react';
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaSass, FaDatabase, 
  FaGit, FaGithub, FaAws, FaBootstrap, FaCloud 
} from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';

function Portfolio() {
  return (
    <section className="bg-white py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-4 text-4xl font-bold text-black">Our <span className="text-blue-600">Technologies</span></h2>
      <p className="text-center text-xl text-gray-800 mb-6 font-sans">
        <span className="text-blue-600 font-bold font-serif">DevAURA</span> leverages cutting-edge technologies to deliver robust, scalable, and future-oriented custom software solutions to meet the unique needs of its clients.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {[
          { icon: <FaHtml5 className="text-orange-600" />, label: "HTML5" },
          { icon: <FaCss3 className="text-blue-600" />, label: "CSS3" },
          { icon: <FaJs className="text-yellow-500" />, label: "JavaScript" },
          { icon: <FaReact className="text-blue-500" />, label: "React" },
          { icon: <FaDatabase className="text-orange-600" />, label: "Database" },
          { icon: <FaNodeJs className="text-green-600" />, label: "NodeJS" },
          { icon: <FaGit className="text-orange-600" />, label: "Git" },
          { icon: <FaGithub className="text-black" />, label: "GitHub" },
          { icon: <FaSass className="text-pink-600" />, label: "Sass" },
          { icon: <FaAws className="text-orange-500" />, label: "AWS" },
          { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap" },
          { icon: <FaGears className="text-blue-600" />, label: "Testing" }
        ].map((tech, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex justify-center flex-col items-center hover:scale-105 transform transition duration-500 hover:shadow-xl">
            {React.cloneElement(tech.icon, { className: `${tech.icon.props.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 transform transition-transform duration-300 hover:rotate-6` })}
            <span className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">{tech.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
