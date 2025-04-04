import React from 'react';
import { useNavigate } from 'react-router-dom';
import productBgImg from '../assets/products.webp';
import Blog1 from '../assets/products/Carefusionbirdblenders/high_flow.webp';
import Blog2 from '../assets/products/Carefusionbirdblenders/low_flow.webp';
import Blog3 from '../assets/products/Carefusionbirdblenders/flow_meter.webp';

import LazyLoad from 'react-lazyload';
import { motion } from "framer-motion";

const blogs = [
    {
        id: 1,
        title: 'High Flow Bird Air/Oxygen Blender',
        subtitle: 'High flow, high pressure blender for ventilators and CPAP.',
        description: 'The High Flow Bird Air/Oxygen Blender is a high flow, high pressure blender that is ideal for use with ventilators, CPAP, and high flow oxygen therapy devices. It is designed to provide accurate FiO2 mixtures from two outlet ports and has an overall flow range of 2-120 LPM. The High Flow Bird Blender is perfect for use in hospitals, clinics, and other healthcare facilities where high flow oxygen therapy is required.',
        image: Blog1,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
    {
        id: 2,
        title: 'Low Flow Bird Air/Oxygen Blender',
        subtitle: 'Low flow, high pressure blender for ventilators and CPAP.',
        description: 'The Low Flow Bird Air/Oxygen Blender is a low flow, high pressure blender that is ideal for use with ventilators, CPAP, and high flow oxygen therapy devices. It is designed to provide accurate FiO2 mixtures from two outlet ports and has an overall flow range of 2-120 LPM. The Low Flow Bird Blender is perfect for use in hospitals, clinics, and other healthcare facilities where low flow oxygen therapy is required.',
        image: Blog2,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
    {
        id: 3,
        title: 'Flow Meter Bird Air/Oxygen MicroBlenders',
        subtitle: 'Experience Precision in Every Breath with the Bird Blender',
        description: 'At OHM Biomedical, we proudly present the Bird Air/Oxygen Blender, a cornerstone in respiratory care technology.Designed with precision and reliability in mind, the Bird Blender offers unparalleled control over oxygen concentration, ensuring optimal therapy outcomes for patients of all ages.',
        image: Blog3,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
];

const Carefusionbirdblender = () => {
    const navigate = useNavigate();

    const handleReadMore = (blog) => {
        navigate(`/Carefusionbirdblender/${blog.id}`);
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
                        Products: Carefusion Bird Air/Oxygen Blenders
                    </motion.h1>
                </div>
            </div>
            <div className="mt-2 px-4 lg:px-14 max-w-screen-xl mx-auto my-20">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            onClick={() => handleReadMore(blog)}
                            className="mx-auto relative mb-12 cursor-pointer"
                        >
                            <LazyLoad height={200} offset={100} once>
                                <img src={blog.image} loading="lazy" alt="Lazy Loaded Image" className="hover:scale-95 transition-all duration-300 rounded-lg" />
                            </LazyLoad>

                            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-24">
                                <span className="inline-block bg-black text-white font-bold rounded-full px-3 py-1 mb-2">
                                    Blenders
                                </span>
                                <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                                <div className="flex items-center justify-center gap-8">
                                    <button
                                        className="font-bold text-brandPrimary hover:text-neutral-700"
                                    >
                                        Read more
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="11"
                                            viewBox="0 0 17 11"
                                            fill="none"
                                            className="inline-block ml-2"
                                        >
                                            <path
                                                d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 
                                                        1.39905M15 5.39905L1 5.39905"
                                                stroke="#4CAF4F"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carefusionbirdblender;
