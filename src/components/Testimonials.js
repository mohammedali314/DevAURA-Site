import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Emily Carter',
    position: 'Founder at Visionary Labs',
    testimonial: 'Working with this team has been a game-changer. Their dedication and expertise helped us scale our business 3x in just a year!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    position: 'COO at TechWave',
    testimonial: 'Exceptional service and innovative solutions. Their strategies have boosted our engagement and sales beyond expectations!',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
  },
  {
    id: 3,
    name: 'Sophia Martinez',
    position: 'CMO at NextGen Solutions',
    testimonial: 'They don’t just provide services, they create experiences. A truly visionary team that understands growth!',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    id: 4,
    name: 'Daniel Lee',
    position: 'CTO at FutureTech',
    testimonial: 'Their expertise in modern technology and customer engagement is unparalleled. We have seen a 60% improvement in user retention.',
    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    id: 5,
    name: 'Jessica Brown',
    position: 'VP of Marketing at ElevateCorp',
    testimonial: 'A dynamic team that truly understands the digital landscape. Their insights have transformed our brand’s online presence!',
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
  },
  {
    id: 6,
    name: 'David Wilson',
    position: 'Head of Strategy at GrowthPeak',
    testimonial: 'Innovative, reliable, and results-driven. We’ve seen a 50% increase in customer engagement thanks to their strategies!',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    id: 7,
    name: 'Olivia Anderson',
    position: 'CEO at BrightPath',
    testimonial: 'The best decision we made! Their attention to detail and customer-first approach set them apart from the rest.',
    avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
  },
];

const Testimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreTestimonials = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="bg-white p-12 my-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, visibleCount).map((testi) => (
            <div key={testi.id} className="bg-gray-100 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <img className="w-16 h-16 rounded-full border-4 border-blue-500" src={testi.avatar} alt={testi.name} />
                <div>
                  <p className="text-lg font-bold">{testi.name}</p>
                  <p className="text-sm text-gray-600">{testi.position}</p>
                </div>
              </div>
              <p className="text-gray-700">
                <FaQuoteLeft className="inline mr-2 text-blue-500 text-xl" />
                {testi.testimonial}
              </p>
            </div>
          ))}
        </div>
        {visibleCount < testimonials.length && (
          <div className="text-center mt-12">
            <button
              onClick={showMoreTestimonials}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Read More Testimonials
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
