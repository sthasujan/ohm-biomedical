import React from 'react';
import { motion } from 'framer-motion';
import productBgImg from "../assets/products.webp";
import img1 from "../assets/Testimonials/Aldo.png";
import img2 from "../assets/Testimonials/Wei-Min.jpg";
import img3 from "../assets/Testimonials/Nick-Lonergan.jpg";
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
  {
    name: "Dr Nicholas Lonergan",
    company: "",
    title: "",
    subtitle: "",
    description: "I cannot speak highly enough about Sovit and his exceptional team at Ohm Biomedical. When our anaesthetic system developed an issue that threatened to disrupt an entire day of surgery, Sovit provided immediate, out-of-hours phone support along with clear, expert technical guidance. Remarkably, his dedicated team came out to our site during the Christmas break to resolve the issue promptly, enabling us to resume operations without delay. Although Ohm Biomedical is a smaller company, their boutique size translates into outstanding, personalised customer service and unparalleled responsiveness. Highly recommended for their commitment, professionalism, and genuine care.",
    image: img3,
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="relative w-full h-[120px]">
        {/* Fixed Height Image Container */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={productBgImg}
            alt="Product Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-2">
          <motion.h1
            className="font-semibold text-white text-center mx-auto
                      text-sm xs:text-base sm:text-lg md:text-xl
                      px-3 py-1 bg-black bg-opacity-40 rounded-md
                      backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Testimonials
          </motion.h1>
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
