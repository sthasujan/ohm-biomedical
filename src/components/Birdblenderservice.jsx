import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faCertificate, faTools, faSync, faCheckCircle, faClipboardList, faSearch } from '@fortawesome/free-solid-svg-icons';
import productBgImg from "../assets/products.webp";
import serviceImg from "../assets/Pictures/img3.JPEG"; // New service image

const Birdblenderservice = () => {
    const services = [
        {
            title: "Genuine OEM Kit Usage",
            description: "We utilize the genuine OEM kit (Part Number: 10003) for all preventative maintenance and service tasks.",
            icon: faGears
        },
        {
            title: "Certified and Trained Engineers",
            description: "All service procedures are performed by Zoll Medical-certified engineers, ensuring adherence to the highest standards.",
            icon: faCertificate
        },
        {
            title: "Equipment Calibration",
            description: "All services are performed using fully calibrated equipment. We provide detailed calibration information for all used equipment, essential for audits during your accreditation.",
            icon: faTools
        },
        {
            title: "Loaner Availability",
            description: "If required, a loaner blender will be provided during service to ensure continuous operation.",
            icon: faSync
        },
        {
            title: "Certification Renewal",
            description: "Our engineers' certifications are renewed every two years as Zoll Medical requires, reflecting our commitment to maintaining expert knowledge and skills.",
            icon: faCheckCircle
        },
        {
            title: "Strict Protocols Adherence",
            description: "We follow the protocols provided by Zoll Medical, ensuring that all work complies with Zoll Medical's testing requirements and meets the highest industry standards.",
            icon: faClipboardList
        },
        {
            title: "Two Analyzers Used",
            description: "Our process includes the use of two different analyzers—one for testing and calibration, and another for verifications and quality assurance. This dual-use approach acts as a fail-safe mechanism, ensuring that the blenders are accurately tested and maintained.",
            icon: faSearch
        }
    ];

    return (
        <section className="bg-white">
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
                        Bird Air/Oxygen Blender Service
                    </motion.h1>
                </div>
            </div>
            {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-4 mb-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <FontAwesomeIcon icon={service.icon} className="text-brandSecondary w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-brandSecondary">{service.title}</h3>
                        <p className="text-gray-500 mt-2">{service.description}</p>
                    </motion.div>
                ))}
            </div> */}
            <div className="container mx-auto px-6 mt-10 mb-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left Section - Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 order-none lg:order-first">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <FontAwesomeIcon icon={service.icon} className="text-blue-500 w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Section - Image */}
                <motion.div
                    className="flex justify-center order-none lg:order-last"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <img src={serviceImg} alt="Service Illustration" className="rounded-lg shadow-lg w-full max-w-md" />
                </motion.div>
            </div>
        </section>
    );
};

export default Birdblenderservice;
