import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import OfficeImage from "../assest/Office.jpg";
import ProgramImage from "../assest/Programming.jpg";
import LaptopImage from "../assest/laptop.jpg";

function Hero() {
  const contactRedirect = () => {
    window.location.href = "#contact";
  }
  const aboutRedirect = () => {
    window.location.href = "#about-us";
  }
  const servicesRedirect = () => {
    window.location.href = "#services";
  }
  return (
    <CCarousel controls className="w-full">
      {/* Slide 1 */}
      <CCarouselItem>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CImage 
            className="d-block w-full h-full"
            style={{ objectFit: 'cover' }} 
            src={OfficeImage} 
            alt="Office" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">INSTINCTIVE & DISTINCTIVE</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-2">Next Level Design</p>
            <button onClick={contactRedirect} className="mt-4 bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-600 animate-bounce">
              Contact Us
            </button>
          </div>
        </div>
      </CCarouselItem>

      {/* Slide 2 */}
      <CCarouselItem>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CImage 
            className="d-block w-full h-full"
            style={{ objectFit: 'cover' }} 
            src={ProgramImage} 
            alt="Programming" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Innovate with Code</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-2">Building the Future with Technology</p>
            <button onClick={aboutRedirect} className="mt-4 bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-600 animate-bounce">
              Learn More
            </button>
          </div>
        </div>
      </CCarouselItem>

      {/* Slide 3 */}
      <CCarouselItem>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <CImage 
            className="d-block w-full h-full"
            style={{ objectFit: 'cover' }} 
            src={LaptopImage} 
            alt="Laptop" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">Empowering Innovation</h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-2">Transforming Ideas into Reality</p>
            <button onClick={servicesRedirect} className="mt-4 bg-blue-500 text-white py-2 px-4 sm:px-6 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-600 animate-bounce">
              Get Started
            </button>
          </div>
        </div>
      </CCarouselItem>
    </CCarousel>
  );
}

export default Hero;

