import React from 'react';

function About() {
  const redirect = () => {
    window.location.href = '#contact';
  }
  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-14 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 font-sans">
          Welcome To <span className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-extrabold hover:text-blue-700 transition-colors duration-300 underline decoration-2">DevAURA</span>
        </h2>
        <p className="text-center text-gray-700 font-sans font-light text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          A dedicated software development center consists of the infrastructure and human resources necessary for a 'turn-key' software development operation. We enable you to get all the benefits of software development facility without the responsibility and overheads of setting up and managing the operation.
        </p>
        <div className="flex justify-center">
          <button onClick={redirect} className="text-center item-center bg-blue-600 hover:bg-blue-700 py-3 px-8 text-white font-medium rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
