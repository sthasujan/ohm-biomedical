// src/components/BlogDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.webp";
import productBgImg from "../assets/products.webp";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

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

    return (
        <div>
            <div className='w-32 h-32'>
                <img src={productBgImg} alt="" />
            </div>
            <div className='px-4 lg:px-14 max-w-screen-xl mx-auto my-12'>
                {blog ? (
                    <>
                        <h1 className='text-3xl font-bold text-center mb-6'>{blog.title}</h1>
                        <div className='text-center mb-8'>
                            <img src={blog.image} alt={blog.title} className='rounded-lg mx-auto' style={{ width: '100%', maxWidth: '800px' }} />
                        </div>
                        <p className='text-lg text-neutralDGrey mb-8'>{blog.description}</p>

                        <div className='flex justify-center space-x-4 mb-8'>
                            <a>Share on</a>
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className='text-blue-600'>
                                <FaFacebookF className='h-6 w-6' />
                            </a>
                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className='text-blue-700'>
                                <FaLinkedinIn className='h-6 w-6' />
                            </a>
                        </div>

                        <div className='bg-white p-6 rounded-lg shadow-lg'>
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
                                    />
                                </div>
                                <button
                                    type='submit'
                                    className='bg-brandPrimary text-white px-4 py-2 rounded-md shadow-md hover:bg-brandSecondary'>
                                    Submit
                                </button>
                            </form>
                        </div>

                        <div className='mt-8'>
                            <h2 className='text-xl font-semibold mb-4'>Comments</h2>
                            {comments.length === 0 ? (
                                <p>No comments yet.</p>
                            ) : (
                                comments.map((c, index) => (
                                    <div key={index} className='border-t pt-4'>
                                        <p className='font-semibold'>{c.name}</p>
                                        <p className='text-sm text-gray-600'>{c.comment}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                ) : (
                    <p className='text-center'>Blog not found</p>
                )}
            </div>
        </div>

    );
};

export default BlogDetail;
