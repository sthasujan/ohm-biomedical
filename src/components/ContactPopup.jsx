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

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };

        // First Name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
            valid = false;
        } else if (!/^[A-Za-z\s'-]+$/.test(formData.firstName)) {
            newErrors.firstName = 'Please enter a valid name';
            valid = false;
        }

        // Last Name validation
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
            valid = false;
        } else if (!/^[A-Za-z\s'-]+$/.test(formData.lastName)) {
            newErrors.lastName = 'Please enter a valid last name';
            valid = false;
        }

        // Email validation
        if (!formData.email.includes('@') || formData.email.length < 5) {
            newErrors.email = 'Please enter a valid email';
            valid = false;
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
            valid = false;
        } else if (formData.phone.length < 10 || formData.phone.length > 15 || !/^\+?\d+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        if (!formData.agreeToTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }

        emailjs.send(
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
            handleClose();
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                comments: '',
                agreeToTerms: false,
            });
        })
        .catch((error) => {
            alert('There was an error sending your message. Please try again.');
            console.error(error);
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2 z-[1000]">
            <div className="bg-white rounded-xl shadow-2xl w-[92vw] max-w-[400px] h-auto max-h-[90vh] overflow-y-auto md:w-auto md:max-w-[90vw] overflow-hidden p-4 sm:p-5 relative">
                <h2 className="text-blue-900 text-center font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                    Contact a Sales Representative
                </h2>
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 transition-colors p-1 rounded-full"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${
                                errors.firstName ? 'border-red-500' : 'border-gray-200'
                            }`}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${
                                errors.lastName ? 'border-red-500' : 'border-gray-200'
                            }`}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${
                                errors.email ? 'border-red-500' : 'border-gray-200'
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm ${
                                errors.phone ? 'border-red-500' : 'border-gray-200'
                            }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>

                    <div className="md:col-span-2">
                        <textarea
                            name="comments"
                            placeholder="Your comments or questions..."
                            value={formData.comments}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20 resize-none transition-all text-sm"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex items-start">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="w-3.5 h-3.5 mt-0.5 mr-2 accent-blue-900"
                            required
                        />
                        <span className="text-xs text-gray-600">
                            I have read and agree to OHM's Terms and Conditions
                        </span>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm"
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