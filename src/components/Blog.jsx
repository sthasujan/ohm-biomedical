import React from 'react'
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.webp";

const Blog = () => {

    const blogs = [
        { id: 1, title: "The Importance of AS3551 in the Biomedical Industry", image: Blog1 },
        { id: 1, title: "Ensuring Reliability with Mandatory 2-Year OEM Preventive Maintenance for Bird Air/Oxygen Blenders", image: Blog2 },
        // {id: 1, title: "Blog title", image: ""},
    ];

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold md-4'>
                    Add text here
                </h2>
                <p className='text-sm text-neutralDGrey mb-8 md:w-3/4 mx-auto'>
                    Need to Add text here add text
                </p>
            </div>

            {/* all Blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog =>
                        <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                            <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300'/>
                            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto
                                absolute left-0 right-0 -bottom-12'>
                                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
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
    )
}

export default Blog