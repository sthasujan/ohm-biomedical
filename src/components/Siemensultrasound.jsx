import React from 'react'
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Siemensultrasound/acusion500.webp";
import Blog2 from "../assets/products/Siemensultrasound/freestyle.jpeg";
import Blog3 from "../assets/products/Siemensultrasound/maple.png";

const blogs = [
    { id: 1, title: "ACUSON P500", description: "", image: Blog1 },
    { id: 2, title: "ACUSON Freestyle", description: "", image: Blog2 },
    { id: 3, title: "ACUSON Maple Ultrasound System", description: "", image: Blog3 },
];

const Siemensultrasound = () => {
    return (
        <div>
            <div className='container'>
                <span className="inline-block bg-black text-white font-bold rounded-full px-3 py-1 mb-2">
                    Ultrasound
                </span>
                <img src={productBgImg} alt="" className='' />
                <h1 className='whitespace-nowrap 
                absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center w-full'>Products: Siemens Ultrasound</h1>
            </div>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
                {/* all Blogs */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                    {
                        blogs.map(blog =>
                            <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                                <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300' />
                                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto
                                                absolute left-0 right-0 -bottom-24'>
                                    <span className="inline-block bg-black text-white font-bold rounded-full px-3 py-1 mb-2">
                                        Ultrasound
                                    </span>
                                    <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <div className='flex items-center justify-center gap-8'>
                                        <a href="/"
                                            className='font-bold text-brandPrimary hover:text-neutral-700' >
                                            Readmore
                                            <svg
                                                xmlns="http://www.w3.org/2000.svg"
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
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Siemensultrasound