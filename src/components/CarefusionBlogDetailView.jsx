import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productBgImg from "../assets/products.webp";
import Blog1 from '../assets/products/Carefusionbirdblenders/high_flow.png';
import Blog2 from '../assets/products/Carefusionbirdblenders/low_flow.png';
import Blog3 from '../assets/products/Carefusionbirdblenders/flow_meter.png';

const blogs = [
    {
        id: 1,
        title: 'High Flow Bird Blender',
        subtitle: 'High flow, high pressure blender for ventilators and CPAP.',
        topic: 'carefusion',
        description: 'The High Flow Bird Blender is a high flow, high pressure blender that is ideal for use with ventilators, CPAP, and high flow oxygen therapy devices. It is designed to provide accurate FiO2 mixtures from two outlet ports and has an overall flow range of 2-120 LPM. The High Flow Bird Blender is perfect for use in hospitals, clinics, and other healthcare facilities where high flow oxygen therapy is required.',
        image: Blog1,
        images: [Blog1],
        featuresAndBenefits: [
            
        ],
        resourcePdf: 'resource.pdf',
        descriptions: [
            "Accurately delivers FiO2 mixtures",
            "High Flow range of 2-120 lpm",
            "Discount when purchased with a BlenderBuddy",
            "24 month warranty"
        ]
    },
    {
        id: 2,
        title: 'Low Flow Bird Blender',
        subtitle: 'Low flow, high pressure blender for ventilators and CPAP.',
        topic: 'carefusion',
        description: 'The Low Flow Bird Blender is a low flow, high pressure blender that is ideal for use with ventilators, CPAP, and high flow oxygen therapy devices. It is designed to provide accurate FiO2 mixtures from two outlet ports and has an overall flow range of 2-120 LPM. The Low Flow Bird Blender is perfect for use in hospitals, clinics, and other healthcare facilities where low flow oxygen therapy is required.',
        image: Blog2,
        images: [Blog2],
        featuresAndBenefits: [
           
        ],
        resourcePdf: 'resource.pdf',
        descriptions: [
            "Accurately delivers FiO2 mixtures",
            "Low Flow range of 3-30 lpm (0-30 w/bleed)",
            "Discount when purchased with a BlenderBuddy",
            "24 month warranty"
        ]
    },
    {
        id: 3,
        title: 'Flow Meter Bird MicroBlenders',
        subtitle: 'Experience Precision in Every Breath with the Bird Blender',
        topic: 'vyaire',
        description: 'At OHM Biomedical, we proudly present the Bird Blender, a cornerstone in respiratory care technology.Designed with precision and reliability in mind, the Bird Blender offers unparalleled control over oxygen concentration, ensuring optimal therapy outcomes for patients of all ages.',
        image: Blog3,
        images: [Blog3],
        featuresAndBenefits: [
        ],
        resourcePdf: 'resource.pdf',
        descriptions: [
        ]
    },

];

const CarefusionBlogDetailView = () => {
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
                        Products: Carefusion Bird Blenders <br />
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
                    <div className="flex justify-start items-start">
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-96 h-96 object-cover mb-4 rounded-lg border-4 border-brandSecondary shadow-xl transform hover:scale-105 transition-all"
                        />
                    </div>

                    {/* Right Column - Blog Details */}
                    <div className="flex flex-col justify-center">
                        <h4 className="text-base text-neutralGrey font-medium mb-4">{blog.topic}</h4>
                        <h3 className="text-2xl text-neutralGrey font-semibold mb-2">{blog.title}</h3>
                        <h4 className="text-xl text-neutralGrey font-medium mb-4">{blog.subtitle}</h4>
                        <p className="mb-2 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.description }}></p>

                        {/* Descriptions List */}
                        <ul className="list-disc mb-4 text-lg text-neutralGrey pl-6">
                            {blog.descriptions.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
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

export default CarefusionBlogDetailView;
