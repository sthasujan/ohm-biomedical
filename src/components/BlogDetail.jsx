import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Blog1 from "../assets/blog/blog1.jpg";
import Blog2 from "../assets/blog/blog2.webp";
import Blog3 from "../assets/blog/blog3.jpg";
import productBgImg from "../assets/products.webp";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Import framer-motion

const blogData = [
    {
        id: 1,
        title: "The Importance of AS3551 in the Biomedical Industry",
        image: Blog1,
        date: "2024-08-11",
        description:
            [
                "AS3551 is the Australian standard for the safe use, handling, and maintenance of medical equipment. It sets out the requirements for ensuring that Biomedical equipment is safe, effective, and fit for purpose, and is an essential tool for anyone working in the Biomedical industry.",
                "At OHM Biomedical, we understand the importance of adhering to AS3551 and take it very seriously. Our team is fully trained in the requirements of AS3551, and we make sure that all of the equipment we service meets these standards."
            ],
        descriptionTitle: "Why is AS3551 important?",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "",
                        "",
                        "",
                        "",
                        "",
                    ],
                    ans: [
                        "AS3551 is critical to patient safety. Medical equipment is an integral part of healthcare, and it is vital that it is functioning correctly to ensure that patients receive the best possible care. By adhering to AS3551, we can ensure that all equipment we service is safe, effective, and fit for purpose, which helps to protect patients and healthcare workers.",
                        "AS3551 is also important for the Biomedical industry as a whole. By ensuring that all equipment meets these standards, we can help to maintain the trust of our clients and protect the reputation of the industry. Adhering to AS3551 also helps to ensure that our clients receive the best possible service, and their equipment is functioning at its best.",
                        "In addition to its importance for patient safety and the Biomedical industry, AS3551 also has economic benefits. By ensuring that equipment is functioning properly and is well-maintained, we can help our clients reduce the cost of equipment failures and downtime. This can save healthcare facilities money and help them to operate more efficiently.",
                        "At OHM Biomedical Engineering, we are committed to the safety and well-being of our clients and their patients. We take our responsibilities very seriously and work hard to ensure that we are meeting the highest standards of quality and safety. Our team is constantly updating their knowledge of AS3551 and any changes made to it, to ensure that we provide the best service possible.",
                    ],
                }
            ],
        conclusion:
            [
                "AS3551 is a crucial component of the Biomedical industry in Australia. It ensures that medical equipment is safe, effective, and fit for purpose, which is essential for patient safety and the reputation of the industry. At OHM Biomedical, we are committed to adhering to AS3551 and providing our clients with the best possible service. If you have any questions about AS3551 or our services, please don’t hesitate to contact us. We are here to help and are always happy to answer any questions you may have.",
                "",
            ]
    },
    {
        id: 2,
        title: "Ensuring Reliability with Mandatory 2-Year OEM Preventive Maintenance for Bird Air/Oxygen Blenders",
        image: Blog2,
        date: "2024-08-10",
        description:
            [
                "In the realm of neonate care, the importance of equipment reliability cannot be overstated. Bird Air/Oxygen Blenders, critical components in respiratory therapy and patient care, are no exception. To ensure their optimal performance, a Mandatory 2-Year Preventive Maintenance (PM) schedule, conducted by Original Equipment Manufacturers (OEM), is essential. This practice not only guarantees the safety, performance, and effectiveness of these devices but also aligns with AS3551:2012 industry standards for maintenance and care."
            ],
        descriptionTitle: "Why Opt for OEM Preventive Maintenance?",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "1. Expertise and Precision",
                        "2. Updated Technology and Genuine Parts",
                        "3. Compliance with Warranty Requirements",
                        "4. Enhanced Safety",
                        "5. Cost-Effectiveness",
                    ],
                    ans: [
                        "OEMs possess comprehensive knowledge and understanding of their products. This expertise ensures that maintenance checks and repairs are performed with a level of precision that third-party services might not match. Technicians trained directly by the OEM are familiar with the latest updates and nuances of the equipment, leading to more accurate diagnostics and adjustments.",
                        "During preventive maintenance, OEMs use genuine parts and the latest technology. This practice is crucial because even minor differences in parts can affect the overall functionality and safety of the equipment. Using OEM parts helps maintain the equipment's integrity and can extend its lifespan significantly.",
                        "Many warranties require that maintenance and repairs be carried out by certified OEM technicians. Following these guidelines ensures that the warranty remains valid, providing additional security and benefits in case of equipment failure. The parts replaced by the OEM is traced via the supply chain for any quality-related issues.",
                        "Regular maintenance ensures that all safety protocols are up to date. OEMs are best equipped to implement upgrades and fixes that address both known issues and newly discovered vulnerabilities. This is crucial in medical settings where equipment failure can have serious consequences.",
                        "While it might seem cost-effective to skip OEM maintenance or opt for a less expensive service provider, the long-term costs of such decisions can be significantly higher. OEM maintenance helps avoid major repairs that are often much more expensive and disruptive. Regularly maintained equipment is less likely to fail, reducing unexpected downtime and the associated costs."
                    ],
                }
            ],
        conclusion:
            [
                "Mandatory 2-year preventive maintenance for Bird Air/Oxygen Blenders, carried out by OEMs using genuine parts, is not just a regulatory fulfillment—it's a critical investment in the reliability and efficiency of the device. It ensures that the equipment operates at peak performance, ultimately contributing to better patient outcomes and minimizing risks by avoiding unexpected failure. By prioritizing OEM maintenance, healthcare providers can maintain continuous, safe, and effective operation of their critical equipment, thereby upholding their commitment to delivering high-quality care.",
                "At OHM Biomedical, we understand the critical nature of this maintenance and are committed to providing expert OEM services to keep your Bird Air/Oxygen Blenders performing reliably. Contact us today at support@ohmbiomedical.com.au to learn more about our maintenance programs and how they can benefit your fleet of Bird Air/Oxygen Blenders.",
            ]
    },
    {
        id: 3,
        title: "Choosing the Right Ventilator Supplier: The Critical Importance of After-Sales Support",
        image: Blog3,
        date: "2024-08-18",
        description:
            [
                "In healthcare, the reliability of essential medical equipment like ventilators is paramount, directly influencing patient care and the efficiency of healthcare professionals. This makes the after-sales support from your equipment supplier a critical factor when choosing medical ventilators. At OHM Biomedical, we prioritize after-sales and service support above all else."
            ],
        descriptionTitle: "",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "Service First: The OHM Biomedical Commitment",
                        "Proactive Solutions and Lasting Relationships",
                    ],
                    ans: [
                        "At OHM Biomedical, we believe that exceptional service leads to successful sales. Our sales team includes clinical engineers who receive comprehensive product and service training, ensuring they are fully knowledgeable about the ventilators, their features, and their service requirements. Our engineers are committed to providing 24/7 support, ensuring you have the assistance you need, precisely when you need it most—especially during critical equipment malfunctions. This service-first approach minimizes downtime and guarantees continuous, effective operation of your equipment, which is vital in medical environments where every second counts.",
                        "Our service extends beyond merely fixing problems; it actively prevents them. We offer tailored solutions designed to enhance the functionality and longevity of your equipment, ensuring smooth operations and an optimal customer experience. This allows you to focus on patient care while we handle the maintenance and reliability of your equipment. At OHM Biomedical, our goal is not just to meet your expectations but to exceed them. We strive to build lasting relationships based on trust and reliability, ensuring that when you choose our ventilators, you are also choosing unparalleled after-sales and service support.",
                    ],
                }
            ],
        conclusion:
            [
                "Choosing the right ventilator supplier involves looking beyond the product itself to the quality of the support that follows. At OHM Biomedical, we offer not only advanced technology but also a steadfast commitment to 24-hour support and proactive service, making us the preferred partner in healthcare.",
                "#medicalventilators",
                "#NIV",
                "#adultventilation",
            ]
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
                        <p className='text-lg text-neutralDGrey'>
                            {/* {blog.description} */}
                            {blog.description.map((desc, index) => (
                                <p key={index}>
                                    {desc}
                                </p>
                            ))}
                        </p>
                        <h4 className='text-2xl text-black'>{blog.descriptionTitle}</h4>
                        <br />
                        <p className='text-lg text-neutralDGrey'>
                            {/* {blog.description} */}
                            {blog.descriptionTitleContent.map((desc, index) => (
                                <div key={index} className='mb-2'>
                                    {desc.ques.map((question, quesIndex) => (
                                        <div key={quesIndex} className='mb-6'>
                                            {/* Render the question */}
                                            <p className='font-semibold mb-2'>
                                                {question}
                                            </p>
                                            {/* Render the corresponding answer */}
                                            <p className='text-gray-700'>
                                                {desc.ans[quesIndex]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </p>
                        <h4 className='text-2xl text-black'>Conclusion</h4>
                        <br />
                        <p className='text-lg text-gray'>
                            {blog.conclusion.map((desc, index) => (
                                <p key={index}>
                                    {desc}
                                </p>
                            ))}
                        </p>
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
