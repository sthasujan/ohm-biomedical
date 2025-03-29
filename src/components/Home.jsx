import { Carousel } from 'flowbite-react';
import React from 'react';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Vyaireventilators/blog1.png";
import Blog2 from "../assets/products/Vyaireventilators/blog2.png";
import Blog3 from "../assets/products/Vyaireventilators/blog5.png";
import Blog4 from "../assets/products/Vyaireventilators/blog6.png";
import Blog5 from '../assets/products/Carefusionbirdblenders/flow_meter.webp';
import { motion } from "framer-motion";
const Home = () => {
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
                        Welcome to OHM Biomedical – Your Ally in Patient Care
                    </motion.h1>
                </div>
            </div>
            <div className='mt-0 mx-auto w-full max-w-[2000px] p-4 sm:p-6 bg-white shadow-lg rounded-lg 
            flex flex-col lg:flex-row transition-all duration-300 ease-in-out items-center mb-2 gap-6'>
                {/* Left Text Section - Takes 80% width on larger screens */}
                <div className="w-full lg:w-[80%] xl:w-[75%] 2xl:w-[70%]">
                    <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-sans mb-3 text-justify leading-relaxed md:leading-loose"
                        style={{ hyphens: 'auto' }}>
                        As an ISO 9001:2015 certified company we are your one-stop shop for medical device purchases and specialist Biomedical Engineering services across Australia and New Zealand (ANZ). OHM Biomedical is the exclusive distributor for ZOLL Medical Ventilators, including Bellavista® for adults, Fabian® HFO for neonates, and 3100 HFOV, delivering expert sales and service with full support for consumables, parts, and programs throughout ANZ.
                        <br /><br />
                        In addition to these specific products, we provide specialist biomedical engineering services for a wide range of medical devices across hospitals, clinics, and veterinary settings, including GE and Mindray anaesthesia, monitoring, ventilators, and AS3551 testing. Exclusively partnering with OEM vendors and distributors, we extend their service departments, offering tailored outsourcing for recalls, installations, projects, and preventative maintenance (PMS).
                    </h2>
                </div>

                {/* Right Image Section - Takes 20% width on larger screens */}
                <div className='w-full lg:w-[20%] xl:w-[25%] 2xl:w-[30%] flex justify-center lg:justify-end'>
                    <div className='w-full max-w-[400px] lg:w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]'>
                        <Carousel>
                            <img
                                src={Blog1}
                                alt="Biomedical Image 1"
                                className='w-full h-full object-contain transition-transform duration-300 hover:scale-105'
                            />
                            <img
                                src={Blog2}
                                alt="Biomedical Image 2"
                                className='w-full h-full object-contain transition-transform duration-300 hover:scale-105'
                            />
                            <img
                                src={Blog4}
                                alt="Biomedical Image 4"
                                className='w-full h-full object-contain transition-transform duration-300 hover:scale-105'
                            />
                            <img
                                src={Blog5}
                                alt="Biomedical Image 5"
                                className='w-full h-full object-contain transition-transform duration-300 hover:scale-105'
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home