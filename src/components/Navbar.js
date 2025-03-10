import React, { useState } from "react";
import Logo from "../assest/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center relative">
      <div className="w-48">
        <img src={Logo} alt="Logo" className="w-80" />
      </div>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 focus:outline-none transition-transform duration-300 transform hover:scale-110"
        >
          {/* Hamburger Icon */}
          <div className="w-8 h-6 flex flex-col justify-between">
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : "Home"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : "About"
              }`}
            ></span>
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>
      <ul
        className={`relative md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:space-x-6 transition-all duration-500 ease-in-out ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        {["Home", "About Us", "Services", "Contact"].map((item, index) => (
          <li key={index} className="text-center md:text-left w-full md:w-auto">
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-0 md:py-0 text-black text-xl no-underline hover:text-blue-600 relative group transition duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <div className="hidden md:flex space-x-4">
        <a href="#contact">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-black transition-all duration-300">
            Get Started
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
