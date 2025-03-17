import React from "react";
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";

const GEAnaestheticmachineservice = () => {
    return (
        <div className="pt-20 lg:pt-24">
            {/* <div className='relative pt-16 md:pt-0'>
                <img
                    src={productBgImg}
                    alt="Product Background"
                    className='w-full h-[30vh] md:h-[40vh] object-cover'
                />
                <div
                    className='absolute bottom-[22%] md:top-[65%] w-full flex justify-center px-4'
                >
                    <h1
                        className='font-semibold mb-2 leading-tight text-white text-xl sm:text-2xl text-center w-full md:w-3/4'
                    >
                        GE Anaesthetic Machine Service <br />
                    </h1>
                </div>
            </div> */}
            {/* <div className="bg-gray-100 min-h-screen p-4 font-sans">
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Cost-Effective Servicing for GE & Mindray Anaesthetic Machines
                    </h1>

                    <p className="text-center text-lg font-semibold text-blue-600">
                        Vendor-Trained Engineers | OEM-Quality | Lower Cost
                    </p>

                    <p className="text-gray-700 mt-4">
                        At OHM Biomedical, we specialize in servicing GE and Mindray anaesthetic machines with vendor-trained engineers, ensuring your equipment operates at peak performance while reducing maintenance costs.
                    </p>

                    <p className="mt-4 font-semibold text-lg text-gray-800">Why Choose OHM Biomedical?</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li><strong>Vendor-Trained Engineers</strong> – Our team has experience and vendor training for GE and Mindray anaesthesia, ensuring expert servicing that meets manufacturer standards and compliance.</li>
                        <li><strong>Same Quality, Lower Cost</strong> – Get the same high-quality service as OEM providers at significantly lower hourly rates.</li>
                        <li><strong>Comprehensive Maintenance & Repairs</strong> – Whether it's routine servicing or complex repairs, we keep your machines performing optimally.</li>
                        <li><strong>Fast Turnaround & Flexible Scheduling</strong> – We minimize downtime with efficient, on-time service.</li>
                        <li><strong>Genuine & Compatible Parts</strong> – We use high-quality parts sourced directly from GE and Mindray.</li>
                    </ul>

                    <p className="mt-4 font-semibold text-lg text-gray-800">We Service All Major GE & Mindray Anaesthetic Machines</p>
                    <div className="bg-gray-200 p-4 rounded-lg mt-2">
                        <p className="font-semibold">🔹 GE Models:</p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Aespire™ & Aisys™ models</li>
                            <li>Avance™ series</li>
                            <li>Carestation™ series</li>
                            <li>Other GE-compatible anaesthesia equipment</li>
                        </ul>
                        <p className="font-semibold mt-2">🔹 Mindray Models:</p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Full range of Mindray anaesthetic machines</li>
                        </ul>
                    </div>

                    <p className="mt-4 text-gray-700">
                        Hospitals and clinics trust OHM Biomedical for cost-effective servicing without compromising quality. Our team ensures full compliance with AS3551:2012 and vendor preventive maintenance standards.
                    </p>

                    <div className="mt-6 text-center">
                        <p className="font-semibold text-gray-800">📞 Contact Us Today for a Free Consultation</p>
                        <p className="text-blue-600">📧 Email: <a href="mailto:support@ohmbiomedical.com.au" className="underline">support@ohmbiomedical.com.au</a></p>
                        <p className="text-blue-600">📞 Phone: <a href="tel:0391157464" className="underline">03 9115 7464</a></p>
                    </div>

                    <div className="mt-6 text-center">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
                            Get a Free Consultation
                        </button>
                    </div>
                </div>
            </div> */}
            <div className="bg-gray-100 text-gray-900">
                {/* Hero Section */}
                <section className="relative bg-blue-900 text-white py-20 text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <motion.h1
                            className="text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Cost-Effective Servicing for <span className="text-red-700">GE & Mindray</span> Anaesthetic Machines
                        </motion.h1>
                        <motion.p
                            className="text-center text-lg font-semibold text-white-600 mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Vendor-Trained Engineers | OEM-Quality | Lower Cost
                        </motion.p>
                        <motion.p
                            className="text-sm mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            At OHM Biomedical, we specialize in servicing GE and Mindray anaesthetic machines with vendor-trained engineers, ensuring your equipment operates at peak performance while reducing maintenance costs.
                        </motion.p>
                        <motion.button
                            className="bg-white text-blue-900 font-bold py-3 px-6 rounded shadow-md hover:bg-gray-200"
                            whileHover={{ scale: 1.05 }}
                        >
                            Get a Quote
                        </motion.button>
                        <p className="text-white-600 font-medium mt-6 reveal" style={{ transitionDelay: '0.6s' }}>
                            💰 Why pay more for the same service? Get OEM-level maintenance at a fraction of the cost with our expert team.
                        </p>
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

export default GEAnaestheticmachineservice;
