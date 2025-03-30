import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaClinicMedical, FaTeeth, FaHeartbeat, FaXRay, FaPaw, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GiHealthNormal, GiHealingShield, GiHealthCapsule, GiHealthPotion,  } from 'react-icons/gi';
import Trustedpartners from './Trustedpartners';

const TrustedClients = () => {
  const clients = [
    { name: 'NSW Health', icon: <FaHospital size={50} /> },
    { name: 'QLD Health', icon: <FaClinicMedical size={50} /> },
    { name: 'ACT Health', icon: <FaTeeth size={50} /> },
    { name: 'TAS Health', icon: <FaHeartbeat size={50} /> },
    { name: 'NT Health', icon: <FaXRay size={50} /> },
    { name: 'WA Health', icon: <FaPaw size={50} /> },
    { name: "Royal Children's Hospital", icon: <FaChevronLeft size={50} /> },
    { name: 'Western Health', icon: <FaChevronRight size={50} /> },
    { name: "Perth Children's Hospital", icon: <GiHealthNormal size={50} /> },
    { name: 'King Edward Memorial Hospital', icon: <GiHealingShield size={50} /> },
    { name: 'HealthShare NSW', icon: <GiHealthCapsule size={50} /> },
    { name: 'HealthShare VIC', icon: <GiHealthPotion size={50} /> },
    { name: 'Multiple Veterinary Clinics', icon: <FaPaw size={50} /> },
    { name: 'Cardiology Clinics', icon: <FaHeartbeat size={50} /> },
    { name: 'Radiology Clinics', icon: <FaXRay size={50} /> },
    { name: 'Dental Hospitals', icon: <FaTeeth size={50} /> }
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
            className="flex overflow-x-auto scrollbar-hide py-8 px-4 sm:px-8 space-x-8"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                style={{ minWidth: '200px' }}
              >
                <div className="mb-4 p-4 bg-blue-50 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition-colors duration-300">
                  {client.icon}
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
          className="mt-2 bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12"
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