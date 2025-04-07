import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import img1 from "../assets/products/Vyaireventilators/blog2.png";
import img2 from "../assets/products/Carefusionbirdblenders/flow_meter.jpg";
import img3 from "../assets/products/Siemensultrasound/maple.png";
import img4 from "../assets/Pictures/img3.JPEG";
import img5 from "../assets/products/Biomedical Service.png"
import img6 from "../assets/services/Sechrist blender.png";
import img7 from "../assets/services/GEAnaesthetic.png";

const Products = () => {
  const services = [
    {
      id: 1,
      title: "Zoll Medical Ventilator",
      description: "Comprehensive Sales & Support",
      description1: "Expert Maintenance Services",
      description2: "Training and Education",
      image: img1,
      link: "/ZollYyaireventilator" // Add a link for the product
    },
    {
      id: 2,
      title: "CareFusion Bird Blender",
      description: "New Blender Sales",
      description1: "Blender Replacement",
      description2: "2-Year PM Overhaul",
      image: img2,
      link: "/Carefusionbirdblender" // Add a link for the product
    },
    {
      id: 3,
      title: "Siemens Ultrasound",
      description: "Motion correction & tissue enhancement",
      description1: "Wireless transducers for procedures",
      description2: "High-resolution imaging & easy use",
      image: img3,
      link: "/Siemensultrasound" // Add a link for the product
    },
    {
      id: 4,
      title: "Bird Air/Oxygen Blender Service",
      description: "Genuine OEM kit, Zoll-certified engineers",
      description1: "Loaner provided, certifications renewed",
      description2: "Dual analyzers for precise testing",
      image: img4,
      link: "/Birdblenderservice" // Add a link for the product
    },
    {
      id: 5,
      title: "Biomedical Service",
      description: "Preventative Maintenance & Repair",
      description1: "Compliance with AS3551 Standards",
      description2: "Rapid Response Guarantee",
      image: img5,
      link: "/Biomedicalservice" // Add a link for the product
    },
    {
      id: 6,
      title: "Sechrist Blender Service",
      description: "Genuine parts, expert service",
      description1: "Affordable, fast, and factory-trained engineers",
      description2: "Servicing Sechrist 3500, 2000 ",
      image: img6,
      link: "/Sechristblenderservice" // Add a link for the product
    },
    {
      id: 7,
      title: "Anaesthetic Machines Service",
      description: "OEM-quality service at lower cost",
      description1: "Fast maintenance with genuine parts",
      description2: "Servicing all GE & Mindray models",
      image: img7,
      link: "/Anaestheticmachineservice" // Add a link for the product
    },

  ];

  return (
    <div className='px-4 sm:px-6 py-6 sm:py-8 max-w-screen-2xl mx-auto'>
      {/* Section Header */}
      <motion.h2
        className='text-3xl font-bold text-brandPrimary mb-6 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Products & Services
      </motion.h2>

      {/* Mobile-optimized Cards Grid */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6'>
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Link to={service.link} className='block h-full'>
              <div className='h-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col'>
                {/* Image with fixed aspect ratio (3:2) */}
                <div className='relative pt-[66.66%] overflow-hidden'>
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content optimized for mobile */}
                <div className='p-4 flex flex-col flex-grow'>
                  <h3 className='text-lg font-semibold text-gray-800 mb-2 text-center'>
                    {service.title}
                  </h3>
                  <ul className='text-sm text-gray-600 space-y-1.5 flex-grow'>
                    <li className='flex items-start'>
                      <span className='inline-block w-1.5 h-1.5 rounded-full bg-brandPrimary mt-2 mr-2'></span>
                      {service.description}
                    </li>
                    <li className='flex items-start'>
                      <span className='inline-block w-1.5 h-1.5 rounded-full bg-brandPrimary mt-2 mr-2'></span>
                      {service.description1}
                    </li>
                    <li className='flex items-start'>
                      <span className='inline-block w-1.5 h-1.5 rounded-full bg-brandPrimary mt-2 mr-2'></span>
                      {service.description2}
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;