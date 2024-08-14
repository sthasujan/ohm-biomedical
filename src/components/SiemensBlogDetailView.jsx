import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Siemensultrasound/acusion500.webp";
import Blog2 from "../assets/products/Siemensultrasound/freestyle.jpeg";
import Blog3 from "../assets/products/Siemensultrasound/maple.png";

const blogs = [
    {
        id: 1,
        title: "ACUSON P500",
        subtitle: "",
        description: "",
        image: Blog1,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
    {
        id: 2,
        title: "ACUSON Freestyle",
        subtitle: "",
        description: "",
        image: Blog2,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
    {
        id: 3,
        title: "ACUSON Maple Ultrasound System",
        subtitle: "",
        description: "",
        image: Blog3,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
];

const SiemensBlogDetailView = () => {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(blog.images[0]);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showResources, setShowResources] = useState(false);

    return (
        <div>
            <div className='container relative pt-24 md:pt-0'>
                <img
                    src={productBgImg}
                    alt="Product Background"
                    className='w-full h-[20vh] md:h-[40vh] object-cover mx-auto'
                />
                <div className='absolute top-[50%] md:top-[60%] w-full flex justify-center'>
                    <h1 className='font-semibold mb-4 leading-snug text-white text-2xl text-center w-full md:w-3/4'>
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

export default SiemensBlogDetailView;
