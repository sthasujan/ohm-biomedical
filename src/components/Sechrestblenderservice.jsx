import React, { useState } from 'react';
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";

import emailjs from 'emailjs-com';

const Sechrestblenderservice = () => {

    const [showContactPopup, setShowContactPopup] = useState(false);

    const handlePopupOpen = (item) => {
        setSelectedItem(item);
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setSelectedItem(null);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: '',
        agreeToTerms: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const openPopup = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            comments: '',
            agreeToTerms: false,
        });
        setShowContactPopup(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.email.includes('@') || formData.email.length < 5) {
            alert('Please enter a valid email.');
            return;
        }
        if (!formData.phone || formData.phone.length < 10 || formData.phone.length > 15 || !/^\+?\d+$/.test(formData.phone)) {
            alert('Please enter a valid phone number (10-15 digits).');
            return;
        }
        if (!/^[A-Za-z\s'-]+$/.test(formData.firstName)) {
            alert('Please enter a valid name');
            return;
        }
        if (!/^[A-Za-z\s'-]+$/.test(formData.lastName)) {
            alert('Please enter a valid last name');
            return;
        }

        if (formData.firstName && formData.lastName && formData.phone && formData.agreeToTerms) {
            emailjs.send(
                'service_wck61fq', // Replace with your EmailJS service ID
                'template_g0yu38f', // Replace with your EmailJS template ID
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    comments: formData.comments,
                },
                'axf9xXZ07UFk3Vs7Z' // Replace with your EmailJS user ID (found in account settings)
            )
                .then(() => {
                    alert('Your message has been sent!');
                    setShowContactPopup(false);
                })
                .catch((error) => {
                    alert('There was an error sending your message. Please try again.');
                    console.error(error);
                });
        } else {
            alert('Please fill out all fields and agree to the terms.');
        }
    };

    return (
        <div>
            <div className='relative pt-16 md:pt-0'>
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
                        Sechrist Blender Service <br />
                    </h1>
                </div>
            </div>
            <div className="bg-gray-100 text-gray-900">
                {/* Hero Section */}
                <section className="relative text-black py-20 text-center bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* <motion.h1
                            className="text-3xl font-bold mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Ensure Your Sechrist Blender’s Performance with OHM Biomedical
                        </motion.h1> */}
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
                            onClick={() => setShowContactPopup(true)}
                        >
                            Get a Quote
                        </motion.button>
                        {showContactPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                                <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-6 md:p-8 relative shadow-lg">
                                    <h2 className="text-red-600 text-center font-bold text-xl md:text-2xl mb-4">
                                        Contact a Sales Representative
                                    </h2>
                                    <button
                                        onClick={openPopup}
                                        className="absolute top-3 right-3 text-white bg-blue-900 border rounded-full p-2 hover:bg-red-600"
                                    >
                                        X
                                    </button>
                                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded w-full"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded w-full"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded w-full"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="border p-2 rounded w-full"
                                            required
                                        />
                                        {/* Comment Section */}
                                        <div className="col-span-1 md:col-span-2">
                                            <textarea
                                                name="comments"
                                                placeholder="Your comments or questions..."
                                                value={formData.comments}
                                                onChange={handleInputChange}
                                                className="border p-2 rounded w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                                            ></textarea>
                                        </div>

                                        <div className="col-span-1 md:col-span-2 flex items-center">
                                            <input
                                                type="checkbox"
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleInputChange}
                                                className="mr-2"
                                                required
                                            />
                                            <span className='text-sm md:text-base'>I have read and agree to OHM's Terms and Conditions</span>
                                        </div>
                                        <div className="col-span-1 md:col-span-2">
                                            <button
                                                type="submit"
                                                className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-red-600 transition-all"
                                            >
                                                Get In Touch
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
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
                <section className="py-16">
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
