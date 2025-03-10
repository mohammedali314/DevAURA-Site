import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaCloud } from 'react-icons/fa';

function Services() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Our <span className="text-blue-600">Services</span></h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Transform your business with cutting-edge digital solutions tailored for performance and efficiency in today's technology-driven world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 flex flex-col items-center hover:scale-110 hover:shadow-2xl hover:bg-blue-50"
            >
              <div className="relative group mb-6">
                <service.icon className="text-blue-600 text-6xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: FaLaptopCode,
    title: "Web Development",
    description: "DevAURA builds exceptional digital experiences using the latest web technologies to deliver innovative solutions."
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description: "Our UI/UX experts create intuitive and visually stunning interfaces that enhance user engagement and satisfaction."
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    description: "Develop robust mobile applications with our cutting-edge technology and expert development team."
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Reliable 24/7 premium cloud hosting services with dedicated support to ensure smooth operation."
  }
];

export default Services;
