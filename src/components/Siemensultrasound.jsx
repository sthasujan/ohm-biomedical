import React from 'react';
import { useNavigate } from 'react-router-dom';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Siemensultrasound/acusion500.webp";
import Blog2 from "../assets/products/Siemensultrasound/freestyle.jpeg";
import Blog3 from "../assets/products/Siemensultrasound/maple.png";
import { motion } from "framer-motion";

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
        title: "ACUSON Maple",
        subtitle: "",
        description: "",
        image: Blog3,
        images: [Blog1, Blog2, Blog3],
        featuresAndBenefits: 'Features and benefits details...',
        resourcePdf: 'resource.pdf'
    },
];

const Siemensultrasound = () => {
    const navigate = useNavigate();
    const handleReadMore = (blog) => {
        navigate(`/Siemensultrasound/${blog.id}`);
    };

    return (
        <div>
            <div className="relative w-full h-[120px] mb-10">
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
                        Products: Siemens Ultrasound
                    </motion.h1>
                </div>
            </div>
            <div className="mt-2 px-4 lg:px-14 max-w-screen-3xl mx-auto my-40">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-between">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            onClick={() => handleReadMore(blog)}
                            className="relative mb-12 cursor-pointer"
                        >
                            <img src={blog.image} loading="lazy" alt={blog.title} className="w-full h-auto rounded-lg hover:scale-95 transition-all duration-300" />
                            <div className="text-center px-4 py-6 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0">
                                <span className="inline-block bg-black text-white font-bold rounded-full px-3 py-1 mb-2 text-xs sm:text-sm">
                                    Ultrasound
                                </span>
                                <h3 className="mb-3 text-neutralGrey font-semibold text-sm sm:text-base">{blog.title}</h3>
                                <div className="flex items-center justify-center gap-8">
                                    <button
                                        className="font-bold text-brandPrimary hover:text-neutral-700 text-sm sm:text-base"
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
                                                d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
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
}

export default Siemensultrasound;
