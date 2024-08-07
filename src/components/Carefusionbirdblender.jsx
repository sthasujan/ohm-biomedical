import React, { useState } from 'react';
import productBgImg from '../assets/products.webp';
import Blog1 from '../assets/products/Carefusionbirdblenders/high_flow.png';
import Blog2 from '../assets/products/Carefusionbirdblenders/low_flow.png';
import Blog3 from '../assets/products/Carefusionbirdblenders/flow_meter.png';
import BlogDetailView from './BlogDetailView';

const blogs = [
    { id: 1, title: 'High Flow Bird Blender', 
        subtitle: 'High flow, high pressure blender for ventilators and CPAP.',
        description: 'The High Flow Bird Blender is a high flow, high pressure blender that is ideal for use with ventilators, CPAP, and high flow oxygen therapy devices. It is designed to provide accurate FiO2 mixtures from two outlet ports and has an overall flow range of 2-120 LPM. The High Flow Bird Blender is perfect for use in hospitals, clinics, and other healthcare facilities where high flow oxygen therapy is required.', 
        image: Blog1, images: [Blog1, Blog2, Blog3], featuresAndBenefits: 'Features and benefits details...', resourcePdf: 'resource.pdf' },
    { id: 2, title: 'Low Flow Bird Blender', 
        subtitle: '',
        description: '', image: Blog2, images: [Blog1, Blog2, Blog3], featuresAndBenefits: 'Features and benefits details...', resourcePdf: 'resource.pdf' },
    { id: 3, title: 'Flow Meter Bird MicroBlenders', 
        
        description: '', image: Blog3, images: [Blog1, Blog2, Blog3], featuresAndBenefits: 'Features and benefits details...', resourcePdf: 'resource.pdf' },
];

const Carefusionbirdblender = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleReadMore = (blog) => {
        setSelectedBlog(blog);
    };

    const handleCloseDetailView = () => {
        setSelectedBlog(null);
    };

    return (
        <div>
            {!selectedBlog ? (
                <>
                    <div className="container">
                        <img src={productBgImg} alt="" className="" />
                        <h1>Products: Carefusion bird blenders</h1>
                    </div>
                    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
                        {/* all Blogs */}
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
                                    <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300" />
                                    <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                                        <span className="inline-block bg-black text-white font-bold rounded-full px-3 py-1 mb-2">
                                            Blenders
                                        </span>
                                        <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
                                        <p>{blog.subtitle}</p>
                                        <div className="flex items-center justify-center gap-8">
                                            <button
                                                onClick={() => handleReadMore(blog)}
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
                </>
            ) : (
                <BlogDetailView blog={selectedBlog} onClose={handleCloseDetailView} />
            )}
        </div>
    );
};

export default Carefusionbirdblender;
