import React from 'react';
import { useNavigate } from 'react-router-dom';
import Blog1 from "../assets/blog/blog1.jpg";
import Blog2 from "../assets/blog/blog2.webp";
import Blog3 from "../assets/blog/blog3.jpg";
import Blog4 from "../assets/blog/blog4.png";
import productBgImg from "../assets/products.webp";

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
            description: "A brief description about the importance of AS3551 in the biomedical industry.",
        },
        {
            id: 2,
            title: "Ensuring Reliability with Mandatory 2-Year OEM Preventive Maintenance",
            image: Blog2,
            date: "2024-08-10",
            description: "A brief description about the mandatory 2-year OEM preventive maintenance for Bird Air/Oxygen Blenders.",
        },
        {
            id: 3,
            title: "Choosing the Right Ventilator Supplier",
            image: Blog3,
            date: "2024-08-18",
            description: "A brief description about the mandatory 2-year OEM preventive maintenance for Bird Air/Oxygen Blenders.",
        },
        {
            id: 4,
            title: "Why Choose OHM Biomedical",
            image: Blog4,
            date: "2024-08-18",
            description: "A brief description about the mandatory 2-year OEM preventive maintenance for Bird Air/Oxygen Blenders.",
        },
    ];

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
                        Blogs <br />
                    </h1>
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
