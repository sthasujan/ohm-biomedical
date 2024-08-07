import React, { useState } from 'react';

const CarefusionBlogDetailView = ({ blog, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(blog.images[0]);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showResources, setShowResources] = useState(false);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="container mx-auto my-12 px-4 lg:px-14 max-w-screen-2xl">
            <button onClick={onClose} className="bg-red-500 text-white font-bold py-2 px-4 rounded mb-4">Back</button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    {blog.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="cursor-pointer mb-4 w-48 h-48 object-cover hover:opacity-75 transition-all"
                            onClick={() => handleImageClick(image)}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-center">
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-74 h-74 object-cover mb-4"
                    />
                    <div className="text-left px-4 py-4 bg-white shadow-lg rounded-md w-full">
                        <h3 className="text-neutralGrey font-semibold mb-2">{blog.title}</h3>
                        <p className="mb-4">{blog.description}</p>
                        <button className="bg-brandPrimary text-white font-bold py-2 px-4 rounded">
                            Contact Sales Representative
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <button
                    onClick={() => setShowFeatures(!showFeatures)}
                    className="bg-brandPrimary text-white font-bold py-2 px-4 rounded"
                >
                    Features & Benefits
                </button>
                <button
                    onClick={() => setShowResources(!showResources)}
                    className="bg-brandPrimary text-white font-bold py-2 px-4 rounded"
                >
                    Customer Resources
                </button>
            </div>
            {showFeatures && (
                <div className="mt-8 p-4 bg-white shadow-lg rounded-md">
                    <h3 className="font-semibold mb-2">Features & Benefits</h3>
                    <p>{blog.featuresAndBenefits}</p>
                </div>
            )}
            {showResources && (
                <div className="mt-8 p-4 bg-white shadow-lg rounded-md">
                    <h3 className="font-semibold mb-2">Customer Resources</h3>
                    <a
                        href={blog.resourcePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brandPrimary font-bold underline"
                    >
                        Download PDF
                    </a>
                </div>
            )}
        </div>
    );
};

export default CarefusionBlogDetailView;
