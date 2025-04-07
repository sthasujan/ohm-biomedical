import React, { useState } from 'react';
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";
import amimg from "../assets/services/Sechrist blender.png";
import ContactPopup from './ContactPopup'; // Import the ContactPopup component

const Sechrestblenderservice = () => {
    const [showContactPopup, setShowContactPopup] = useState(false);

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
                        Sechrist Blender Service
                    </motion.h1>
                </div>
            </div>
            <div className="bg-gray-100 text-gray-900">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-white to-blue-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                            {/* Left Content */}
                            <motion.div
                                className="md:col-span-7 space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="space-y-4">
                                    <motion.p
                                        className="text-center text-xl md:text-2xl font-semibold text-blue-900 mb-4"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        Genuine Parts | Expert Service | Unmatched Reliability.
                                    </motion.p>

                                    <motion.p
                                        className="text-center text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7 }}
                                    >
                                        At OHM Biomedical, we specialize in precision servicing for Sechrist air-oxygen blenders, ensuring optimal performance, reliability, and compliance with industry standards.
                                    </motion.p>

                                    <motion.div
                                        className="flex justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <motion.button
                                            className="bg-blue-900 text-white font-semibold py-3 px-8 rounded-lg
                                                        shadow-lg hover:shadow-xl transition-shadow
                                                        hover:scale-[1.02] active:scale-95"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setShowContactPopup(true)}
                                        >
                                            Get a Quote
                                        </motion.button>
                                    </motion.div>

                                    <motion.p
                                        className="text-center text-gray-600 text-sm md:text-base mt-6 px-4 md:px-0"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        Our factory-trained engineers provide high-quality service at a significantly lower cost than OEM providers, helping you reduce maintenance expenses without compromising safety and reliability.
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Right Card */}
                            <motion.div
                                className="md:col-span-5"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="relative bg-white rounded-2xl shadow-xl p-6 overflow-hidden
                                                hover:shadow-2xl transition-shadow duration-300 group">
                                    {/* Animated Decorative Elements */}
                                    <motion.div
                                        className="absolute -right-8 -top-8 w-24 h-24 bg-blue-100 rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                    />
                                    <motion.div
                                        className="absolute -left-4 -bottom-4 w-16 h-16 bg-blue-50 rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 }}
                                    />

                                    <div className="relative">
                                        <img
                                            src={amimg}
                                            alt="Anaesthetic Machine"
                                            className="w-full rounded-xl object-cover aspect-[4/3]
                                                        transform group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Popup - Using the standalone component */}
                        <ContactPopup
                            show={showContactPopup}
                            handleClose={() => setShowContactPopup(false)}
                        />
                    </div>
                </section>
                {/* Service Benefits Section */}
                <section className="py-16 px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Why Choose OHM Biomedical for Sechrist Blender Servicing?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Trained Experts",
                                "Affordable Pricing",
                                "Fast Turnaround Time",
                                "Genuine & Compatible Parts",
                                "Comprehensive Testing & Calibration",
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-white rounded-lg shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Equipment Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-6">Sechrist Blenders We Service</h2>
                        <div className="grid md:grid-cols-1">
                            {[
                                { title: "We specialize in servicing a wide range of Sechrist air-oxygen blenders, including:", desc: "✔Sechrist 3500 Series | ✔Sechrist 2000 Series | ✔Other Sechrist-compatible models" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="text-gray-700 mt-2">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Sechrestblenderservice;