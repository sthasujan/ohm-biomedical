import React from "react";
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";

const Sechrestblenderservice = () => {
    return (
        <div className="pt-20 lg:pt-24">
            <div className="bg-gray-100 text-gray-900">
                {/* Hero Section */}
                <section className="relative text-white py-20 text-center" style={{ backgroundImage: `url(${productBgImg})` }}>
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.h1
                            className="text-3xl font-bold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Ensure Your Sechrist Blender’s Performance with OHM Biomedical
                        </motion.h1>
                        <motion.p
                            className="text-center text-lg font-semibold text-white-600 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Genuine Parts | Expert Service | Unmatched Reliability.
                        </motion.p>
                        <motion.p
                            className="text-sm mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            At OHM Biomedical, we specialize in precision servicing for Sechrist air-oxygen blenders, ensuring optimal performance, reliability, and compliance with industry standards. 
                        </motion.p>
                        <motion.button
                            className="bg-white text-blue-900 font-bold py-3 px-6 rounded shadow-md hover:bg-gray-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get a Quote
                        </motion.button>
                        <motion.p
                            className="text-white-600 font-medium mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Our factory-trained engineers provide high-quality service at a significantly lower cost than OEM providers, helping you reduce maintenance expenses without compromising safety and reliability.
                        </motion.p>
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
                {/* Advert Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-6">Reliable Service, Exceptional Value</h2>
                        <div className="grid md:grid-cols-1">
                            {[
                                { title: "", desc: "Hospitals, clinics, and healthcare providers trust OHM Biomedical to keep their Sechrist blenders operating safely and efficiently. Our service adheres to strict healthcare standards and ensures compliance with AS3551:2012 and manufacturer guidelines, delivering safe, precise, and reliable oxygen blending." },
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
            </div >
        </div >
    );
};

export default Sechrestblenderservice;
