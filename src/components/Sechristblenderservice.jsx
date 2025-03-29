import React, { useState } from 'react';
import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";
import amimg from "../assets/services/Sechrist.png";

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

                        {/* Contact Popup */}
                        {showContactPopup && (
                            <motion.div
                                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                style={{ position: 'fixed', top: '0', left: '0' }}
                            >
                                <motion.div
                                    className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden"
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                >
                                    <div className="p-6 md:p-8 relative">
                                        <button
                                            onClick={() => setShowContactPopup(false)}
                                            className="absolute top-4 right-4 text-gray-500 hover:text-red-600
                                                    transition-colors p-1 rounded-full"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>

                                        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
                                            Contact a Sales Representative
                                        </h2>

                                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            {/* Form Fields */}
                                            {['First Name', 'Last Name', 'Email', 'Phone Number'].map((label, idx) => (
                                                <div key={label} className={idx > 1 ? 'md:col-span-2' : ''}>
                                                    <input
                                                        type={idx === 2 ? 'email' : idx === 3 ? 'tel' : 'text'}
                                                        name={label.toLowerCase().replace(' ', '')}
                                                        placeholder={label}
                                                        value={formData[label.toLowerCase().replace(' ', '')]}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg
                                                        focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                        transition-all"
                                                        required
                                                    />
                                                </div>
                                            ))}

                                            <div className="md:col-span-2">
                                                <textarea
                                                    name="comments"
                                                    placeholder="Your comments or questions..."
                                                    value={formData.comments}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg
                                                        focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                                        h-32 resize-none transition-all"
                                                />
                                            </div>

                                            <div className="md:col-span-2 flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name="agreeToTerms"
                                                    checked={formData.agreeToTerms}
                                                    onChange={handleInputChange}
                                                    className="w-4 h-4 mr-3 accent-blue-900"
                                                    required
                                                />
                                                <span className="text-sm text-gray-600">
                                                    I agree to OHM's Terms and Conditions
                                                </span>
                                            </div>

                                            <div className="md:col-span-2">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg
                                                        font-semibold hover:bg-blue-800 transition-colors"
                                                >
                                                    Get In Touch
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
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
                {/* <section className="py-16">
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
                </section> */}
            </div >
        </div >
    );
};

export default Sechrestblenderservice;
