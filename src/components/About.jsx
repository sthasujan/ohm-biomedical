import React from 'react';
import aboutImg from '../assets/AboutSection.jpg';
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";

const About = () => {
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
                        About Us
                    </motion.h1>
                </div>
            </div>
            <div>
                <motion.div
                    className="min-h-[80vh] py-10 md:py-14 lg:py-18 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-screen-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
                        {/* Image Section - Now Larger */}
                        <motion.div
                            className="w-full lg:w-[45%] xl:w-[50%]"
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
                                <img
                                    src={aboutImg}
                                    alt="OHM Biomedical Team"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
                            </div>
                        </motion.div>

                        {/* Text Section - Perfectly Aligned */}
                        <motion.div
                            className="w-full lg:w-[55%] xl:w-[50%] space-y-6 md:space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutralDGrey">
                                OHM Biomedical: <span className="text-brandPrimary">Our Story</span>
                            </h2>

                            <div className="space-y-5 md:space-y-6 text-justify">
                                <p className="text-base sm:text-lg md:text-[17px] leading-relaxed md:leading-loose text-neutralGrey">
                                    Our story began in 2022 when four clinical engineers, driven by a shared dedication to quality compliance and exceptional customer experience, recognized that the service standards they were delivering needed to evolve. United by these values, they founded OHM Biomedical, determined to set a new benchmark in the biomedical industry.
                                </p>

                                <p className="text-base sm:text-lg md:text-[17px] leading-relaxed md:leading-loose text-neutralGrey">
                                    Today, OHM Biomedical has grown beyond its original team of four into a robust, experienced collective of professionals. Our expertise spans critical medical devices, including ventilators, anesthesia machines, and dialysis equipment, ensuring they perform flawlessly when lives depend on them.
                                </p>

                                <p className="text-base sm:text-lg md:text-[17px] leading-relaxed md:leading-loose text-neutralGrey font-medium">
                                    At OHM Biomedical, we are more than just a service provider—we are partners in your patient care. Our unwavering commitment to excellence and our extensive industry knowledge make us the trusted choice for all your medical equipment needs.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About