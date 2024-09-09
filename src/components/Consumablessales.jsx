import React, { useState } from 'react';
import productBgImg from "../assets/products.webp";
import pic1 from "../assets/ConsumableItems/pic1.jpeg";
import pic2 from "../assets/ConsumableItems/pic2.jpeg";
import pic3 from "../assets/ConsumableItems/pic3.png";
import pic4 from "../assets/ConsumableItems/pic44.jpeg";
import pic5 from "../assets/ConsumableItems/pic5.jpg";
import pic6 from "../assets/ConsumableItems/pic6.jpg";
import pic7 from "../assets/ConsumableItems/pic77.jpg";
import pic8 from "../assets/ConsumableItems/pic8.jpg";
import pic9 from "../assets/ConsumableItems/pic9.png";
import pic10 from "../assets/ConsumableItems/pic10.jpeg";
import pdf from "../assets/ConsumablePdf/consumablesPdf.pdf";
import emailjs from 'emailjs-com';

const salesItems = [
    {
        partNo: 'Part Number: 777000S',
        title: 'INFANT FLOW LP NASAL PRONGS, SMALL',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic1,
    },
    {
        partNo: 'Part Number: 777040S',
        title: 'INFANT FLOW LP HEADGEAR, SMALL',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic2,
    },
    {
        partNo: 'Part Number: 777002S',
        title: 'Infant Flow LP nasal mask, single Patient use small',
        sizes: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
        image: pic3,
    },
    {
        partNo: 'Part Number: 030.811.020',
        title: 'Internal battery bellavista 1000',
        sizes: [],
        image: pic4,
    },
    {
        partNo: 'Part Number: 770150',
        title: 'SCAVENGER NITRIC OXIDE 3100A/B',
        sizes: [],
        image: pic5,
    },
    {
        partNo: 'Part Number: 766896',
        title: 'CAP/DIAPHRAGM SET, BOX OF 4, 3100A/B',
        sizes: [],
        image: pic6,
    },
    {
        partNo: 'Part Number: 301.328.020',
        title: 'FLOW, ADVANCED, PAEDIATRIC/ADULT, 200 S PROXIMAL, FOR BELLAVISTA 1000e VENTILATOR, SINGLE PATIENT USE',
        sizes: [],
        image: pic7,
    },
    {
        partNo: 'Part Number: 10003',
        title: 'Microblender High and Low Flow Maintenance Kit',
        sizes: [],
        image: pic8,
    },
    {
        partNo: 'Part Number: 301.470.010',
        title: 'iFLOW 40 S Neonatal/Infant Proximal Flow Sensor',
        sizes: [],
        image: pic9,
    },
    {
        partNo: 'Part Number: 04322',
        title: 'VYAIRE BRKT, POST, DOVETAIL ASY',
        sizes: [],
        image: pic10,
    },
    // Add more items here
];

const Consumablessales = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

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
                        Consumables<br />
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button
                    type="button"
                    onClick={() => setShowContactPopup(true)}
                    className="text-brandSecondary hover:text-white border border-brandSecondary bg-white hover:bg-brandSecondary focus:ring-4 focus:outline-none focus:ring-brandSecondary rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                >
                    Contact Us
                </button>
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
                <button
                    type="button"
                    className="text-brandSecondary hover:text-white border border-brandSecondary bg-white hover:bg-brandSecondary focus:ring-4 focus:outline-none focus:ring-brandSecondary rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
                    onClick={() => window.open(pdf, '_blank')}
                >
                    More Consumables
                </button>
            </div>
            <div className="p-4 lg:mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {salesItems.slice(0, 12).map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            onClick={() => handlePopupOpen(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-42 object-cover"
                            />
                            <div className="p-4">
                                <p className="font-bold text-gray-700">{item.partNo}</p>
                                <p className="text-gray-500 truncate">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {showPopup && selectedItem && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">< div className="bg-white rounded-lg p-6 relative max-w-lg w-auto mx-4 lg:mx-0"><button
                        className="absolute top-4 right-4 bg-gray-700 text-white rounded-full p-2 hover:bg-red-500 transition-colors duration-300"
                        onClick={handlePopupClose}
                    >
                        X
                    </button><img
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            className="w-full h-auto max-h-60 object-contain mb-4"
                        /><p className="font-bold text-gray-700 text-center">{selectedItem.partNo}</p><p className="text-gray-800 text-center mb-4">{selectedItem.title}</p><p className="text-gray-600 text-center mb-2">Available in:</p><div className="flex flex-wrap justify-center gap-2">
                            {selectedItem.sizes.map((size, index) => (
                                <span key={index} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>
                    </div>
                )
                }

            </div >
        </div >

    );
};

export default Consumablessales;
