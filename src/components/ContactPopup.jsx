import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPopup = ({ show, handleClose }) => {
    if (!show) return null; // Don't render the popup if `show` is false.
    //const handleClosePopup = () => show(false);

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
        <div className="fixed -inset-40 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-8 relative shadow-lg">
                <h2 className="text-red-600 text-center font-bold text-2xl mb-4">
                    Contact a Sales Representative
                </h2>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white bg-blue-900 border rounded-full p-2 hover:bg-red-600"
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
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                        required
                    />
                    {/* Comment Section */}
                    <div className="col-span-2">
                        <textarea
                            name="comments"
                            placeholder="Your comments or questions..."
                            value={formData.comments}
                            onChange={handleInputChange}
                            className="border p-2 rounded w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                        ></textarea>
                    </div>

                    <div className="col-span-2 flex items-center">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleInputChange}
                            className="mr-2"
                            required
                        />
                        <span>I have read and agree to OHM's Terms and Conditions</span>
                    </div>
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-all"
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
