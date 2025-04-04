import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Vyaireventilators/blog1.png";
import Blog11 from "../assets/products/Vyaireventilators/blog11.png";
import Blog111 from "../assets/products/Vyaireventilators/blog111.png";
import Blog2 from "../assets/products/Vyaireventilators/blog2.png";
import Blog22 from "../assets/products/Vyaireventilators/blog22.png";
import Blog222 from "../assets/products/Vyaireventilators/blog222.png";
import Blog3 from "../assets/products/Vyaireventilators/blog3.png";
import Blog33 from "../assets/products/Vyaireventilators/blog33.png";
import Blog333 from "../assets/products/Vyaireventilators/blog333.png";
import Blog4 from "../assets/products/Vyaireventilators/blog4.png";
import Blog44 from "../assets/products/Vyaireventilators/blog44.png";
import Blog5 from "../assets/products/Vyaireventilators/blog5.png";
import Blog55 from "../assets/products/Vyaireventilators/blog55.png";
import Blog555 from "../assets/products/Vyaireventilators/blog555.png";
import Blog6 from "../assets/products/Vyaireventilators/blog6.png";
import Blog66 from "../assets/products/Vyaireventilators/3100A.webp";
import Blog666 from "../assets/products/Vyaireventilators/3100A1.webp";
import pdf1 from "../assets/products/Vyaireventilators/VyairePdf/bellavistabrochure.pdf";
import pdf11 from "../assets/products/Vyaireventilators/VyairePdf/bellavista1000e.pdf";
import pdf111 from "../assets/products/Vyaireventilators/VyairePdf/bellavistahfot.pdf";
import pdf2 from "../assets/products/Vyaireventilators/VyairePdf/fabianbrochure.pdf";
import pdf22 from "../assets/products/Vyaireventilators/VyairePdf/fabiande.pdf";
import pdf222 from "../assets/products/Vyaireventilators/VyairePdf/fabianit.pdf";
import pdf2222 from "../assets/products/Vyaireventilators/VyairePdf/fabiancn.pdf";
import pdf5 from "../assets/products/Vyaireventilators/VyairePdf/ltv2brochure.pdf";
import pdf55 from "../assets/products/Vyaireventilators/VyairePdf/vyrltv2.pdf";
import pdf6 from "../assets/products/Vyaireventilators/VyairePdf/3100Ventilator.pdf";
import emailjs from 'emailjs-com';
import { FaFilePdf, FaDownload } from 'react-icons/fa';
import { motion } from "framer-motion";

const blogs = [
    {
        id: 1,
        title: "bellavista™ 1000e Ventilator",
        subtitle: 'High Flow Oxygen Therapy | Mechanical Ventilation',
        description: "The bellavista™ 1000e offers a full spectrum of high performance features in a compact size including: ",
        image: Blog1,
        images: [Blog1, Blog11, Blog111],
        featuresAndBenefits: [
            'Neonatal to Adult ICU ventilator with high definition 17.3” touchscreen',
            'Intuitive user interface',
            'Adaptive Ventilation Mode',
            'High Flow Oxygen Therapy',
            'Advanced NIV features',
            'Lung Recruitment Tool',
            'Minimum of 3 hours battery capacity'
        ],
        resourcePdf: [
            {
                name: "bellavista™ - The complete family of ICU ventilators",
                url: pdf1
            },
            {
                name: "bellavista™ 1000e Technical Specification",
                url: pdf11
            },
            {
                name: "bellavista™ HFOT Flyer",
                url: pdf111
            }
        ],
        descriptions: [
            "Adaptive Ventilation Mode - A smart ventilation mode faster weaning and a reduction of manual settings",
            "High Flow Oxygen Therapy improves the oxygenation of patients while enhancing patient comfort",
            "Lung Recruitment Tool provides an automated recruitment maneuver that is reliable and reproducible.",
            "Synchrony tools - Improved patient synchrony with auto.sync, auto.rise and auto.leak",
            "SettingAssist - Foresee all ventilation settings with a comfortable and easy to use display "
        ]
    },
    {
        id: 2,
        title: "fabian™ HFO Ventilator",
        subtitle: 'Mechanical Ventilation',
        description: "The fabian™  HFO with a 10.4' touch screen is our most comprehensive ventilator. This model has a true single membrane high-frequency oscillation (HFO) with active inspiration and expiration in addition to all modern noninvaisve and conventional modes. Other enhancements include Forced Oscillation Technique (FOT), a precise and intelligent lung recruitment tool.",
        image: Blog2,
        images: [Blog2, Blog22, Blog222],
        featuresAndBenefits: [
            'HFO designed with the same working principles as the 3100A oscillator',
            'Designed with hotwire anemometer flow sensor for low sensitivity to gas composition and humidity',
            'Volume, flow, and pressure trigger to meet the neonates varying needs',
            'Lung recruitment can be used during HFO',
            'PRICO protects babies from out of target oxygen ranges',
            'Volume guarantee ranges are ideal for extremely low birth weight babies',
            'Supports 3 different etCO2 module types: microstream, mainstream and sidestream',
            'FOT* is an effective measurement for safe lung recruitment'
        ],
        resourcePdf: [
            {
                name: "fabian™ Brochure, EN",
                url: pdf2
            },
            {
                name: "fabian™ Brochure, DE",
                url: pdf22
            },
            {
                name: "fabian™ Brochure, IT",
                url: pdf222
            },
            {
                name: "fabian™ Brochure, CN",
                url: pdf2222
            }
        ],
        descriptions: [
            "*FOT may not be available in your region. Please inquire with your local Vyaire representative.",
        ]
    },
    {
        id: 3,
        title: "fabian™ Therapy evolution",
        subtitle: 'High Flow Oxygen Therapy | Mechanical Ventilation',
        description: "The fabian™ Therapy evolution is a complete and highly advanced non-invasive ventilator featuring all classic and modern NIV modes, including HFNC, nCPAP, duoPAP, and triggered duoPAP. The next generation of closed-loop oxygenation, PRICO is available in this model.",
        image: Blog3,
        images: [Blog3, Blog33, Blog333],
        featuresAndBenefits: [
            'Easy to Use',
            'Weighs even less. Does even more.',
            'Automates selection of proper NIV trigger sensor depending on flow and pressure sensors used',
            'SPO2 with Masimo SPO2 sensor technology',
            'PRICO adapts and maintains the SpO2 within the desired set range.'
        ],
        resourcePdf: [
            {
                name: "fabian™ Brochure, EN",
                url: pdf2
            },
            {
                name: "fabian™ Brochure, DE",
                url: pdf22
            },
            {
                name: "fabian™ Brochure, IT",
                url: pdf222
            },
            {
                name: "fabian™ Brochure, CN",
                url: pdf2222
            }
        ],
        descriptions: [

        ]
    },
    {
        id: 4,
        title: "fabian™ +nCPAP Ventilator",
        subtitle: '',
        description: "The fabian™ +nCPAP evolution has the full scope all non-invasive modes with modern invasive ventilation capabilities. The next generation of closed-loop oxygenation, PRICO is available in this model. PRICO reduces manual adjustment of FIO2 by up to 60%.",
        image: Blog4,
        images: [Blog4, Blog44],
        featuresAndBenefits: [
            'Patient Safety',
            'Modularity',
            'Ease of Use',
            'Easy Access'
        ],
        resourcePdf: [
            {
                name: "fabian™ Brochure, EN",
                url: pdf2
            },
            {
                name: "fabian™ Brochure, DE",
                url: pdf22
            },
            {
                name: "fabian™ Brochure, IT",
                url: pdf222
            },
            {
                name: "fabian™ Brochure, CN",
                url: pdf2222
            }
        ],
        descriptions: [

        ]
    },
    {
        id: 5,
        title: "LTV2™ Series Ventilators",
        subtitle: 'Mechanical Ventilation',
        description: "Over the years, we have enhanced our LTV™ ventilators with a series of line extensions and improvements. Decades later, the LTV has established a reputation of reliability, versatility, and durability. With our new LTV2™ 2200 and LTV2™ 2150 models, we continue to innovate by providing more capabilities, higher performance, and greater portability. Our LTV2™ ventilators have an easy-to-use interface, making them simple for clinicians.",
        image: Blog5,
        images: [Blog5, Blog55, Blog555],
        featuresAndBenefits: [
            'Turbine technology eliminates the need for a high-pressure air source',
            'Oxygen resource management tool reduces oxygen consumption * 2200 model only',
            'Enhanced patient comfort and care with flow trigger and internal PEEP compensation',
            'Optimization trial settings',
            'Versatility with highly customizable settings to support patient success',
            'Hot swappable battery',
            'Low cost of ownership',
            'Data output capabilities',
            'NPPV enhancements',
            'Sigh breath for more natural breathing',
            'Improved power capabilities',
            'Institutional use and for intra-hospital transport',
            'Easy to read displays',
            'Comprehensive monitoring',
            'Supports invasive and non-invasive applications The LTV2™ is available in Japan. Please contact your local representative for additional information.'
        ],
        resourcePdf: [
            {
                name: "LTV2™ Institution Brochure",
                url: pdf5
            },
            {
                name: "LTV2™ Spec Sheet",
                url: pdf55
            }
        ],
        descriptions: [

        ]
    },
    {
        id: 6,
        title: "3100A/B HFOV Ventilators",
        subtitle: '',
        description: "The 3100A High Frequency Oscillatory Ventilator (HFOV) by Vyaire is designed for ventilatory support in neonates and pediatric patients who are failing conventional ventilation. It utilizes high-frequency oscillatory ventilation strategies to provide gentle and effective ventilation, minimizing the risk of ventilator-induced lung injury.",
        image: Blog6,
        images: [Blog6, Blog66, Blog666],
        featuresAndBenefits: [
            'High-Frequency Oscillation: Delivers small tidal volumes at rapid frequencies, reducing alveolar over-distention and shear stress.',
            'Active Exhalation: Aids in CO2 removal by enhancing expiratory flow.',
            'Comprehensive Alarm System: Ensures patient safety with various alarms for pressure, power, and system performance issues.',
            'Lung Protective Strategy: Reduces the risk of barotrauma and volutrauma by maintaining lung volumes close to the anatomical dead space.',
            'Improved Gas Exchange: Facilitates efficient oxygenation and CO2 removal even in patients with severe respiratory distress.',
            'Versatility: Suitable for use in a range of conditions from neonatal respiratory distress syndrome to pediatric respiratory failure.'
        ],
        resourcePdf: [
            {
                name: "3100A/B HFOV Ventilator Guide",
                url: pdf6
            }
        ],
        descriptions: [

        ]
    },
];

const VyaireBlogDetailView = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(blog.images[0]);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showResources, setShowResources] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
            agreeToTerms: false,
        });
        setShowPopup(false);
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
                'template_mn3et1q', // Replace with your EmailJS template ID
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                },
                'axf9xXZ07UFk3Vs7Z' // Replace with your EmailJS user ID (found in account settings)
            )
                .then(() => {
                    alert('Your message has been sent!');
                    setShowPopup(false);
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
                        Products: Zoll Medical Ventilators
                    </motion.h1>
                </div>
            </div>
            <div className="mx-auto my-12 px-4 lg:px-14 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center">
                        {blog.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="cursor-pointer mb-4 w-32 h-32 object-cover hover:opacity-75 transition-all rounded-full border-4 border-brandSecondary shadow-lg"
                                onClick={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-start items-start">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-96 h-96 object-cover mb-4 rounded-lg border-4 border-brandSecondary shadow-xl transform hover:scale-105 transition-all"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h4 className="text-base text-neutralGrey font-medium mb-4">{blog.subtitle}</h4>
                        <h3 className="text-2xl text-neutralGrey font-semibold mb-2">{blog.title}</h3>
                        <p className="mb-2 text-lg leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: blog.description }}></p>
                        {/* Descriptions List */}
                        <ul className="list-disc mb-4 text-lg text-neutralGrey pl-6">
                            {blog.descriptions.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowPopup(true)}
                            className="bg-brandSecondary text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-green-700 transition-all"
                        >
                            Contact Sales Representative
                        </button>
                        {showPopup && (
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
                                        <div className="flex items-center col-span-1 md:col-span-2">
                                            <input
                                                type="checkbox"
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleInputChange}
                                                className="mr-2"
                                                required
                                            />
                                            <span className="text-sm md:text-base">I have read and agree to OHM's Terms and Conditions</span>
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
                    </div>
                </div>
                <div className="mt-12 space-y-4">
                    <div className="border border-gray-300 rounded-lg">
                        <button
                            onClick={() => setShowFeatures(!showFeatures)}
                            className="flex justify-between items-center w-full bg-brandSecondary text-white py-3 px-6 rounded-t-lg"
                        >
                            <span className="text-lg font-semibold">Features & Benefits</span>
                            <span className="text-2xl">{showFeatures ? '-' : '+'}</span>
                        </button>
                        {showFeatures && (
                            // <div className="p-6 bg-gray-50">
                            //     <p>{blog.featuresAndBenefits}</p>
                            // </div>
                            <ul className="list-disc mb-4 text-lg text-neutralGrey pl-6">
                                {blog.featuresAndBenefits.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="border border-gray-300 rounded-lg">
                        <button
                            onClick={() => setShowResources(!showResources)}
                            className="flex justify-between items-center w-full bg-brandSecondary text-white py-3 px-6 rounded-t-lg"
                        >
                            <span className="text-lg font-semibold">Customer Resources</span>
                            <span className="text-2xl">{showResources ? '-' : '+'}</span>
                        </button>
                        {showResources && (
                            <div className="p-6 bg-gray-50">
                                <div className="space-y-4">
                                    {blog.resourcePdf.map((service, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-4 bg-white shadow rounded-lg hover:bg-gray-100 transition"
                                        >
                                            <FaFilePdf size={30} className="text-brandSecondary mr-2" />
                                            <span className="flex-grow text-brandSecondary text-base font-medium">
                                                {service.name}
                                            </span>
                                            <a
                                                href={service.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-brandPrimary flex items-center"
                                            >
                                                <FaDownload size={24} className="text-brandSecondary" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VyaireBlogDetailView;