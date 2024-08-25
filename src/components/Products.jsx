import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import img1 from "../assets/products/Vyaireventilators/blog2.png";
import img2 from "../assets/products/Carefusionbirdblenders/flow_meter.jpg";
import img3 from "../assets/products/Anesthesia.jpeg";

const Products = () => {
  const services = [
    {
      id: 1,
      title: "Vyaire Ventilator",
      description: "Comprehensive Sales & Support",
      description1: "Expert Maintenance Services",
      description2: "Training and Education",
      image: img1,
      link: "/Yyaireventilator" // Add a link for the product
    },
    {
      id: 2,
      title: "CareFusion Bird Air/Oxygen Blender",
      description: "New Blender Sales",
      description1: "Blender Replacement",
      description2: "2-Year PM Overhaul",
      image: img2,
      link: "/Carefusionbirdblender" // Add a link for the product
    },
    {
      id: 3,
      title: "Biomedical Service",
      description: "Preventative Maintenance & Repair",
      description1: "Compliance with AS3551 Standards",
      description2: "Rapid Response Guarantee",
      image: img3,
      link: "/Biomedicalservice" // Add a link for the product
    },
  ];

  return (
    <div className='px-4 py-6 md:px-6 max-w-screen-xl mx-auto text-center'>
      {/* Service Cards Section */}
      <h2 className='text-3xl md:text-4xl lg:text-5xl text-brandPrimary font-bold mb-6 md:md-8'>Our Products</h2>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => (
            <Link key={service.id} to={service.link} className='flex justify-center'>
              <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg bg-white p-4'>
                {/* Dynamic Image Height */}
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-t-xl'
                />
                <div className='flex flex-col items-center'>
                  <h4 className='text-xl font-bold text-neutralDGrey mb-2 mt-1'>{service.title}</h4>
                  <ul className='text-sm text-neutralGrey flex flex-col items-start list-disc pl-5'>
                    <li>{service.description}</li>
                    <li>{service.description1}</li>
                    <li>{service.description2}</li>
                  </ul>
                </div>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default Products;
