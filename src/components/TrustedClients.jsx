import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Trustedpartners from './Trustedpartners';

const TrustedClients = () => {
  const clients = [
    { name: 'NSW Health', image: 'src/assets/TrustedClients/NSW Health.png' },
    { name: 'QLD Health', image: 'src/assets/TrustedClients/Queensland Health.png' },
    { name: 'ACT Health', image: 'src/assets/TrustedClients/ACT Health.png' },
    { name: 'TAS Health', image: 'src/assets/TrustedClients/Tasmania HealthService.png' },
    { name: 'NT Health', image: 'src/assets/TrustedClients/NT Health.png' },
    { name: 'WA Health', image: 'src/assets/TrustedClients/WA Health.png' },
    { name: "Royal Children's Hospital", image: 'src/assets/TrustedClients/The Royal Childrens Hospital Melbourne.png' },
    { name: 'Western Health', image: 'src/assets/TrustedClients/Western Health.png' },
    { name: "Perth Children's Hospital", image: 'src/assets/TrustedClients/Perth Childrens Hospital.png' },
    { name: 'King Edward Memorial Hospital', image: 'src/assets/TrustedClients/King Edward Memorial Hospital.png' },
    { name: 'HealthShare NSW', image: 'src/assets/TrustedClients/Healthshare NSW.png' },
    { name: 'HealthShare VIC', image: 'src/assets/TrustedClients/Healthshare Victoria.png' },
    { name: 'Multiple Veterinary Clinics', image: 'src/assets/TrustedClients/Multiple Veterinary Clinics.png' },
    { name: 'Cardiology Clinics', image: 'src/assets/TrustedClients/Cardiology Clinics.png' },
    { name: 'Radiology Clinics', image: 'src/assets/TrustedClients/Radiology Clinics.png' },
    { name: 'Dental Hospitals', image: 'src/assets/TrustedClients/Dental Hospital.png' }
  ];

  const marqueeRef = useRef(null);

  const scroll = (direction) => {
    if (marqueeRef.current) {
      const { current } = marqueeRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Our Valued Clients
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with leading healthcare organizations across Australia
          </p>
          <div className="w-32 h-1.5 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Marquee Container with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-blue-600 text-xl" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-blue-600 text-xl" />
          </button>

          {/* Single Row Marquee */}
          <div 
            ref={marqueeRef}
            className="flex overflow-x-auto scrollbar-hide py-6 px-4 sm:px-8 space-x-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                style={{ minWidth: '200px' }}
              >
                <div className="mb-4 p-2 bg-blue-50 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors duration-300">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="w-20 h-20 object-cover rounded-full" 
                  />
                </div>
                <h3 className="text-center font-medium text-gray-800 text-base sm:text-lg md:text-xl">
                  {client.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-2 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">16+</div>
              <div className="text-gray-600 text-sm sm:text-base">Health Organizations</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600 text-sm sm:text-base">States & Territories</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Specialist Clinics</div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm sm:text-base">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
      <Trustedpartners />
    </div>
  );
};

export default TrustedClients;
