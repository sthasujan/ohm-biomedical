import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Siemensultrasound/acusion500.webp";
import Blog2 from "../assets/products/Siemensultrasound/freestyle1.jpeg";
import Blog3 from "../assets/products/Siemensultrasound/maple.png";

const blogs = [
    {
        id: 1,
        title: "ACUSON P500",
        subtitle: "Carefusion",
        description: "Portable ultrasound system for high-quality imaging. The ACUSON P500 by Siemens Healthineers provides high-quality care and ultrasound imaging anywhere, anytime. It enhances image quality with motion correction and various applications tailored to your needs, ensuring paramount image quality.",
        image: Blog1,
        images: [Blog1],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf',
        descriptions: [
            "Dynamic Persistence and Auto Flash Artifact Suppression: Reduce motion artifacts and noise while enhancing color sensitivity.",
            "Dynamic TCE™ tissue contrast enhancement: Visualize subtle tissue variations.",
            "Advanced SieClear™ spatial compounding: Enhance anatomical detail.",
            "TEQ™ ultrasound technology: Optimize images with one button.",
            "Stress Echo application: Perform a wide range of exams with user-defined protocols.",
            "eSie Measure™ workflow acceleration: Provides automated measurements for routine echo exams.",
            "eSieScan™ Protocol: Semi-automated guided workflow to reduce training time and errors.",
        ]
    },
    {
        id: 2,
        title: "ACUSON Freestyle",
        subtitle: "Siemens",
        description: "Wireless ultrasound solution for interventional suites. The ACUSON Freestyle Series is the world’s first wireless ultrasound solution, redefining ultrasound access in interventional suites and at the point of care. It offers scalable configurations for automated workflow, clear visualization, and faster access.",
        image: Blog2,
        images: [Blog2],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf',
        descriptions: [
            "Pixelformer Image Processing Architecture: Computational focusing for uniformly sharp images.",
            "Enhanced Needle Visualization: Sophisticated synthetic focusing technique for improved needle visibility.",
            "Anesthesiology: Enhances efficiency and effectiveness in ultrasound-guided nerve blocks.",
            "Interventional Radiology: Provides mobility and tools for vascular access and procedural guidance.",
            "MSK: Promotes precise, needle-guided injections and quick diagnosis of soft tissue structures.",
            "Wireless Transducers: High data rate transmission with excellent image quality and high frame rates.",
            "Integrated Controls: Operate imaging parameters from up to 3 meters away.",
            "Removable Battery: Up to 90 minutes of continuous scan time.",
        ]
    },
    {
        id: 3,
        title: "ACUSON Maple Ultrasound System",
        subtitle: "Siemens",
        description: "Ultrasound system for high-quality imaging. The ACUSON Maple provides powerful imaging, ready for virtually every patient regardless of physical characteristics or condition. Its intuitive design minimizes manual optimization and still delivers high-quality images with excellent penetration and resolution.",
        image: Blog3,
        images: [Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf',
        descriptions: [
            "Intuitive Design: Less need for manual optimization, increasing efficiency.",
            "High-Quality Imaging: Excellent penetration and resolution for all patients.",
            "Increased Efficiency: Simplified usability helpful for clinicians with less training."
        ]
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
                            <div key={index} className="mb-4">< div className="relative w-40 aspect-w-1 aspect-h-1 border-4 border-brandSecondary rounded-full overflow-hidden shadow-lg cursor-pointer hover:opacity-75 transition-opacity" > <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover"
                                onClick={() => setSelectedImage(image)}
                            />
                            </div></div>
                        ))}
                    </div>
                    {/* Middle Column - Selected Image */}
                    <div className="flex justify-start items-start">
                        <div className="relative w-full aspect-w-1 aspect-h-1 border-4 border-brandSecondary rounded-lg overflow-hidden shadow-xl"><img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                        </div>
                    </div>

                    {/* Right Column - Blog Details */}
                    <div className="flex flex-col justify-center">
                        <h4 className="text-base text-neutralGrey font-medium mb-4">{blog.subtitle}</h4>
                        <h3 className="text-2xl text-neutralGrey font-semibold mb-2">{blog.title}</h3>
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
                <div className="mt-12 space-y-4 hidden">
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
            </div >
        </div >
    );
};

export default SiemensBlogDetailView;
