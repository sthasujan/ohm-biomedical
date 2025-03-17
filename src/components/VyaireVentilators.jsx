import React from 'react';
import { useNavigate } from 'react-router-dom';
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
        resourcePdf: 'resource.pdf',
        category: "Adult Ventilator"
    },
    { 
        id: 2, 
        title: "fabian™ HFO Ventilator", 
        subtitle: '',
        description: "4-in-1 device, flexible from the delivery room to the NICU", 
        image: Blog2, 
        images: [Blog1, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf',
        category: "Neonate Ventilator"
    },
    { 
        id: 3, 
        title: "fabian™ Therapy evolution",
        subtitle: '', 
        description: "2-in-1 device, ideal for NICU, PICU & transport applications", 
        image: Blog3, 
        images: [Blog1, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf',
        category: "Neonate Ventilator"
    },
    { 
        id: 4, 
        title: "fabian™ +nCPAP Ventilator", 
        subtitle: '',
        description: "Our 3-in-1 device for NICU, PICU and transport applications", 
        image: Blog4, 
        images: [Blog1, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf',
        category: "Neonate Ventilator" 
    },
    // { 
    //     id: 5, 
    //     title: "LTV2™ Series Ventilators", 
    //     subtitle: '',
    //     description: "The LTV2™ series ventilator is now part of Vyaire Medical.", 
    //     image: Blog5, 
    //     images: [Blog1, Blog2, Blog3], 
    //     featuresAndBenefits: 'Features and benefits details...', 
    //     resourcePdf: 'resource.pdf',
    //     category: "Transport Ventilator" 
    // },
    { 
        id: 6, 
        title: "3100A/B HFOV Ventilators", 
        subtitle: '',
        description: "High Frequency Oscillatory Ventilators (HFOV, Adult/Pediatric Ventilation Solutions).", 
        image: Blog6, 
        images: [Blog1, Blog2, Blog3], 
        featuresAndBenefits: 'Features and benefits details...', 
        resourcePdf: 'resource.pdf',
        category: "HFO Ventilator"
    },
];
const YyaireVentilator = () => {
    const navigate = useNavigate();

    const handleReadMore = (blog) => {
        navigate(`/ZollYyaireVentilator/${blog.id}`);
    };
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
                        Products: Zoll Medical Ventilators <br />
                    </h1>
                </div>
            </div>
            <div className="mt-0 px-4 lg:px-14 max-w-screen-xl mx-auto my-14">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 gap-y-16 items-center justify-between">
                    {blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            onClick={() => handleReadMore(blog)}
                            className="mx-auto relative mb-12 cursor-pointer"
                        >
                            <img src={blog.image} alt="" className="hover:scale-95 transition-all duration-300 rounded-lg" />
                            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-24">
                                <span className="inline-block bg-black text-white font-bold rounded-full px-3 py-1 mb-2">
                                    {blog.category}
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

export default YyaireVentilator;
