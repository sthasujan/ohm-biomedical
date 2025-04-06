import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPopup = ({ show, handleClose }) => {
    if (!show) return null;

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.firstName &&
            formData.lastName &&
            formData.phone &&
            formData.agreeToTerms
        ) {
            emailjs
                .send(
                    'service_wck61fq',
                    'template_g0yu38f',
                    {
                        firstName: formData.firstName,
                        lastName: formData.lastName,
                        email: formData.email,
                        phone: formData.phone,
                        comments: formData.comments,
                    },
                    'axf9xXZ07UFk3Vs7Z'
                )
                .then(() => {
                    alert('Your message has been sent!');
                    handleClose(false);
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
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]" // 🔄 Changed bg-opacity, added backdrop-blur, replaced padding
        >
            <div
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden p-6 md:p-8 relative" // 🔄 Changed rounded-lg ➜ rounded-xl, shadow-lg ➜ shadow-2xl, added overflow-hidden
            >
                <h2
                    className="text-blue-900 text-center font-bold text-2xl md:text-2xl mb-6" // 🔄 Changed text-red-600 ➜ text-blue-900, increased spacing
                >
                    Contact a Sales Representative
                </h2>

                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition-colors p-1 rounded-full" // 🔄 Updated to match the cleaner icon style (gray hover red)
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" // 🔄 Updated styling to match animated input
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" // 🔄 Same here
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" // 🔄 Same
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" // 🔄 Same
                        required
                    />

                    <div className="md:col-span-2">
                        <textarea
                            name="comments"
                            placeholder="Your comments or questions..."
                            value={formData.comments}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none transition-all" // 🔄 Enhanced styling, removed min-h-[120px]
                        ></textarea>
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
                            I have read and agree to OHM's Terms and Conditions
                        </span>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors" // 🔄 Updated font, bg color, and hover transition
                        >
                            Get In Touch
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPopup;
