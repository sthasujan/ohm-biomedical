import React from 'react';
import { motion } from 'framer-motion';
import productBgImg from "../assets/products.webp";
import img1 from "../assets/Testimonials/Aldo.png";
import img2 from "../assets/Testimonials/Wei-Min.jpg";

// Testimonial data constant
const testimonials = [
  {
    name: "Aldo Perdomo",
    company: "Neonatal Intensive Care Unit | Westmead Hospital",
    title: "Senior Biomedical Officer",
    subtitle: "",
    description: "I greatly appreciate the exceptional service provided by the team at Ohm Biomedical. Their professionalism, expertise, rapid response, and dedication have been instrumental in keeping our critical ventilation equipment functional at all times.",
    image: img1,
  },
  {
    name: "Wei Min Yu",
    company: "Vyaire Medical",
    title: "Director, APAC Service",
    subtitle: "",
    description: "We have been partnering with OHM Biomedical Engineering Services since Oct 2023. They have a group of professionals who are very customer-centric in what they do. We are happy with the quality of the service they provide our customers with across Australia and New Zealand. We truly value this partnership.",
    image: img2,
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className='relative pt-16 md:pt-0'>
        <img
          src={productBgImg}
          alt="Product Background"
          className='w-full h-[30vh] md:h-[40vh] object-cover'
        />

        <div className='absolute bottom-[22%] md:top-[65%] w-full flex justify-center px-4'>
          <h1 className='font-semibold mb-2 leading-tight text-white text-xl sm:text-2xl text-center w-full md:w-3/4'>
            Testimonials <br />
          </h1>
        </div>
      </div>
      <div className="px-4 py-8 md:px-20 md:py-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="mb-16">
            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Image animation */}
              <motion.div
                className="w-full md:w-1/2 p-4 flex justify-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.5 + 0.3, duration: 0.8, ease: "easeInOut" }}
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  className="w-2/3 rounded-md shadow-lg"
                />
              </motion.div>

              {/* Text description animation */}
              <motion.div
                className="w-full md:w-1/2 p-4 self-start text-center md:text-left"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.5, duration: 0.8, ease: "easeInOut" }}
              >
                <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                <h4 className="text-lg font-light text-gray-500">{testimonial.subtitle}</h4>
                <p className="mt-4 text-gray-600 text-justify">{testimonial.description}</p>
                <p className="mt-6 font-medium">{testimonial.title}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </motion.div>
            </div>

            {index < testimonials.length - 1 && <hr className="border-t border-gray-300 my-8" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
