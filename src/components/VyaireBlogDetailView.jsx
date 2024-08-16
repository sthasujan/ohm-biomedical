import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Vyaireventilators/blog1.png";
import Blog2 from "../assets/products/Vyaireventilators/blog2.png";
import Blog3 from "../assets/products/Vyaireventilators/blog3.png";
import Blog4 from "../assets/products/Vyaireventilators/blog4.png";
import Blog5 from "../assets/products/Vyaireventilators/blog5.png";
import Blog6 from "../assets/products/Vyaireventilators/blog6.png";

const blogs = [
    { 
        id: 1, 
        title: "bellavista™ 1000e Ventilator", 
        subtitle: '',
        description: "Ventilation support for your patient's respiratory needs.", 
        image: Blog1, 
        images: [Blog1, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf' 
    },
    { 
        id: 2, 
        title: "fabian™ HFO Ventilator", 
        subtitle: '',
        description: "4-in-1 device, flexible from the delivery room to the NICU", 
        image: Blog2, 
        images: [Blog2, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf' 
    },
    { 
        id: 3, 
        title: "fabian™ Therapy evolution",
        subtitle: '', 
        description: "2-in-1 device, ideal for NICU, PICU & transport applications", 
        image: Blog3, 
        images: [Blog3, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf' 
    },
    { 
        id: 4, 
        title: "fabian™ +nCPAP Ventilator", 
        subtitle: '',
        description: "Our 3-in-1 device for NICU, PICU and transport applications", 
        image: Blog4, 
        images: [Blog4, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf' 
    },
    { 
        id: 5, 
        title: "LTV2™ Series Ventilators", 
        subtitle: '',
        description: "The LTV2™ series ventilator is now part of Vyaire Medical.", 
        image: Blog5, 
        images: [Blog5, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf' 
    },
    { 
        id: 6, 
        title: "3100A/B HFOV Ventilators", 
        subtitle: '',
        description: "High Frequency Oscillatory Ventilators (HFOV, Adult/Pediatric Ventilation Solutions).", 
        image: Blog6, 
        images: [Blog6, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf' 
    },
];

 
const VyaireBlogDetailView = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(blog.images[0]);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showResources, setShowResources] = useState(false);

    return (
        <div>
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
                        Products: Vyaire Ventilators <br />
                    </h1>
                </div>
            </div>
            <div className="container mx-auto my-12 px-4 lg:px-14 max-w-screen-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Thumbnails */}
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

                    {/* Middle Column - Selected Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-96 h-96 object-cover mb-4 rounded-lg border-4 border-brandSecondary shadow-xl transform hover:scale-105 transition-all"
                        />
                    </div>

                    {/* Right Column - Blog Details */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl text-neutralGrey font-semibold mb-2">{blog.title}</h3>
                        <h4 className="text-xl text-neutralGrey font-medium mb-4">{blog.subtitle}</h4>
                        <p className="mb-8 text-lg leading-relaxed">{blog.description}</p>
                        <button className="bg-brandSecondary text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-green-700 transition-all">
                            Contact Sales Representative
                        </button>
                    </div>
                </div>

                {/* Accordion Panels */}
                <div className="mt-12 space-y-4">
                    {/* Features & Benefits Accordion */}
                    <div className="border border-gray-300 rounded-lg">
                        <button
                            onClick={() => setShowFeatures(!showFeatures)}
                            className="flex justify-between items-center w-full bg-brandSecondary text-white py-3 px-6 rounded-t-lg"
                        >
                            <span className="text-lg font-semibold">Features & Benefits</span>
                            <span className="text-2xl">{showFeatures ? '-' : '+'}</span>
                        </button>
                        {showFeatures && (
                            <div className="p-6 bg-gray-50">
                                <p>{blog.featuresAndBenefits}</p>
                            </div>
                        )}
                    </div>

                    {/* Customer Resources Accordion */}
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
                                <a
                                    href={blog.resourcePdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brandSecondary underline"
                                >
                                    Download PDF
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VyaireBlogDetailView;