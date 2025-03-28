import React from 'react';
import { useNavigate } from 'react-router-dom';
import Blog1 from "../assets/blog/blog1.webp";
import Blog2 from "../assets/blog/blog2.webp";
import Blog3 from "../assets/blog/blog3.png";
import Blog4 from "../assets/blog/blog4.webp";
import Blog5 from "../assets/blog/blog5.webp";
import Blog6 from "../assets/blog/blog6.png";
import Blog7 from "../assets/blog/blog7.webp";
import Blog8 from "../assets/blog/blog8.webp";

import productBgImg from "../assets/products.webp";
import { motion } from "framer-motion";

const Blog = () => {
    const navigate = useNavigate();

    const handleReadMore = (blog) => {
        navigate(`/Blog/${blog.id}`);
    };

    const blogs = [
        {
            id: 1,
            title: "The Importance of AS3551 in the Biomedical Industry",
            image: Blog1,
            date: "2024-08-11",
            description: "",
        },
        {
            id: 2,
            title: "Ensuring Reliability with Mandatory 2-Year OEM Preventive Maintenance",
            image: Blog2,
            date: "2024-08-10",
            description: "",
        },
        {
            id: 3,
            title: "Choosing the Right Ventilator Supplier",
            image: Blog3,
            date: "2024-08-18",
            description: "",
        },
        {
            id: 4,
            title: "Why Choose OHM Biomedical",
            image: Blog4,
            date: "2024-08-18",
            description: "",
        },
        {
            id: 5,
            title: "ZOLL Acquires Vyaire Medical's ",
            image: Blog5,
            date: "2024-08-21",
            description: "",
        },
        {
            id: 6,
            title: "Blender Service Training ANZ",
            image: Blog6,
            date: "2024-09-17",
            description: "",
        },
        {
            id: 7,
            title: "Our Success with the 3100A/B, Sensormedics HFO",
            image: Blog7,
            date: "2024-10-10",
            description: "",
        },
        {
            id: 8,
            title: "OHM Biomedical at the EPSM-ABEC 2024 Conference: Innovation, Collaboration, and a Cuppa!",
            image: Blog8,
            date: "2024-11-28",
            description: "",
        },
    ];

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
                        Blogs
                    </motion.h1>
                </div>
            </div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 mb-28'>
                {/* All Blogs */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-24 sm:gap-20 gap-24 items-center justify-between'>
                    {blogs.map(blog => (
                        <div key={blog.id}  onClick={() => handleReadMore(blog)} className='mx-auto relative mb-12 cursor-pointer'>
                            <img src={blog.image} alt={blog.title} className='hover:scale-95 transition-all duration-300' />
                            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-36'>
                                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                                <p className='mb-4 text-sm text-neutralDGrey'>{blog.date}</p>
                                {/* <p className='mb-6 text-sm text-neutralDGrey'>{blog.description}</p> */}
                                <div className='flex items-center justify-center gap-8'>
                                    <button
                                        className="font-bold text-brandPrimary hover:text-neutral-700"
                                    >
                                        Read More
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
};

export default Blog;
