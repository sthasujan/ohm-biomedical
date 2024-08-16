import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Blog1 from "../assets/blog/blog1.jpg";
import Blog2 from "../assets/blog/blog2.webp";
import productBgImg from "../assets/products.webp";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Import framer-motion

const blogData = [
    {
        id: 1,
        title: "The Importance of AS3551 in the Biomedical Industry",
        image: Blog1,
        date: "2024-08-11",
        description: "A detailed description about the importance of AS3551 in the biomedical industry.",
    },
    {
        id: 2,
        title: "Ensuring Reliability with Mandatory 2-Year OEM Preventive Maintenance for Bird Air/Oxygen Blenders",
        image: Blog2,
        date: "2024-08-10",
        description: "A detailed description about the mandatory 2-year OEM preventive maintenance for Bird Air/Oxygen Blenders.",
    },
];

const BlogDetail = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const blog = blogData.find(blog => blog.id === parseInt(id));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !comment) {
            alert("All fields are required");
            return;
        }
        // Send comment via email or API
        setComments([...comments, { name, comment }]);
        setName('');
        setEmail('');
        setComment('');
    };

    if (!blog) {
        return <p className='text-center'>Blog not found</p>;
    }

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
                        {blog.title}
                    </h1>
                </div>
            </div>
            <div className="container mx-auto px-4 lg:px-14 my-12">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='relative'>
                        <img src={blog.image} alt={blog.title} className='w-full rounded-lg' />
                    </div>
                    <motion.div
                        className='bg-white p-6 rounded-lg shadow-lg transition-transform duration-500 ease-in-out relative'
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className='mb-4 flex flex-col items-start'>
                            <div className='flex items-center space-x-4 mb-2'>
                                <p className='text-sm text-gray-600'>Share:</p>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className='text-blue-600'>
                                    <FaFacebookF className='h-6 w-6' />
                                </a>
                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className='text-blue-700'>
                                    <FaLinkedinIn className='h-6 w-6' />
                                </a>
                            </div>
                        </div>

                        <p className='text-sm text-gray-600 mb-4'>{blog.date}</p>
                        <p className='text-lg text-neutralDGrey'>{blog.description}</p>
                    </motion.div>
                </div>

                <div className='bg-white p-6 rounded-lg shadow-lg mt-8'>
                    <h2 className='text-xl font-semibold mb-4'>Leave a Reply</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                            <input
                                type='text'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='w-full p-2 border border-gray-300 rounded-md'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                            <input
                                type='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full p-2 border border-gray-300 rounded-md'
                                required
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='comment' className='block text-sm font-medium text-gray-700 mb-1'>Comment</label>
                            <textarea
                                id='comment'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='w-full p-2 border border-gray-300 rounded-md'
                                rows='4'
                                required
                            ></textarea>
                        </div>
                        <button type='submit' className='bg-brandPrimary text-white px-4 py-2 rounded-md hover:bg-brandPrimaryDark'>
                            Submit
                        </button>
                    </form>
                    <div className='mt-6'>
                        <h3 className='text-lg font-semibold'>Comments ({comments.length})</h3>
                        {comments.length > 0 && (
                            <ul className='mt-4 space-y-4'>
                                {comments.map((c, index) => (
                                    <li key={index} className='p-4 bg-gray-100 rounded-md'>
                                        <p className='text-sm text-gray-800'><strong>{c.name}</strong></p>
                                        <p className='text-sm text-gray-600'>{c.comment}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
