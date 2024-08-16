import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faCertificate, faTools, faSync, faCheckCircle, faClipboardList, faSearch } from '@fortawesome/free-solid-svg-icons';
import productBgImg from "../assets/products.webp";

const Birdblenderservice = () => {
    const services = [
        {
            title: "Genuine OEM Kit Usage",
            description: "We utilize the genuine OEM kit (Part Number: 10003) for all preventative maintenance and service tasks.",
            icon: faGears
        },
        {
            title: "Certified and Trained Engineers",
            description: "All service procedures are performed by Vyaire-certified engineers, ensuring adherence to the highest standards.",
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
            description: "Our engineers' certifications are renewed every two years as Vyaire Medical requires, reflecting our commitment to maintaining expert knowledge and skills.",
            icon: faCheckCircle
        },
        {
            title: "Strict Protocols Adherence",
            description: "We follow the protocols provided by Vyaire, ensuring that all work complies with Vyaire's testing requirements and meets the highest industry standards.",
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
            <div className='container relative pt-16 md:pt-0'>
                <img
                    src={productBgImg}
                    alt="Product Background"
                    className='w-full h-[30vh] md:h-[40vh] object-cover'
                />
                {/* Adjust positioning for mobile and larger screens */}
                <div
                    className='absolute bottom-[22%] md:top-[65%] w-full flex justify-center px-4'
                >
                    <h1
                        className='font-semibold mb-2 leading-tight text-white text-xl sm:text-2xl text-center w-full md:w-3/4'
                    >
                        Bird Blender Service <br />
                    </h1>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mt-2">
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
            </div>
            <div className="text-center mt-4 mb-2">
                <motion.a 
                    href="#"
                    className="inline-block px-8 py-3 border-2 border-brandSecondary text-brandSecondary font-semibold rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    Learn More
                </motion.a>
            </div>
        </section>
    );
};

export default Birdblenderservice;
