import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Blog1 from "../assets/blog/blog1.webp";
import Blog2 from "../assets/blog/blog2.webp";
import Blog3 from "../assets/blog/blog3.webp";
import Blog4 from "../assets/blog/blog4.webp";
import Blog5 from "../assets/blog/blog5.webp";
import Blog6 from "../assets/blog/blog6.webp";
import Blog7 from "../assets/blog/blog7.webp";
import Blog8 from "../assets/blog/blog8.webp";
import Blog88 from "../assets/blog/blog88.webp";
import productBgImg from "../assets/products.webp";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';  // Import framer-motion
import emailjs from 'emailjs-com';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


const blogData = [
    {
        id: 1,
        title: "The Importance of AS3551 in the Biomedical Industry",
        image: [Blog1],
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
        image: [Blog2],
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
        image: [Blog3],
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
    {
        id: 4,
        title: "Why Choose OHM Biomedical as Your Service Partner",
        image: [Blog4],
        date: "2024-08-18",
        description:
            [
                "At OHM Biomedical, our commitment to service excellence is unmatched, driven by a core principle: we only service devices for which our engineers have received specialized training directly from the original equipment manufacturers (OEMs). This rigorous approach ensures that every piece of equipment we handle is maintained and repaired by experts with the highest level of training and knowledge. Managing critical medical devices requires specialized skills, and through OEM training and support, we are dedicated to providing superior services to our partners. This commitment guarantees our full compliance with AS/NZS 3551:2012, the gold standard for medical equipment management in Australia and New Zealand."
            ],
        descriptionTitle: "",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "Specialized Expertise and Compliance",
                        "Ensuring Safety and Reliability",
                        "Building Trust Through Certification",
                    ],
                    ans: [
                        "Our engineers undergo intensive training directly from the manufacturers, equipping them with the same skills and certifications as OEM engineers. This specialized expertise allows them to understand the intricate details of each device and ensures they adhere to the highest standards of service. This level of proficiency is essential for maintaining operational efficiency and compliance with stringent health regulations.",
                        "The focused training our team receives enables them to handle complex medical devices with exceptional precision and care. This targeted approach not only minimizes the risk of errors but also enhances our ability to proactively maintain and repair equipment, ensuring it operates at optimal levels—a critical requirement in healthcare environments.",
                        "Healthcare providers trust OHM Biomedical because they know that every engineer we deploy is manufacturer-trained and certified. Whether it’s a dialysis machine, a medical laser, an anesthesia machine, an ultrasound, or any other sophisticated equipment, our certifications provide assurance of the reliability and quality of our services.",
                    ],
                }
            ],
        conclusion:
            [
                "OHM Biomedical`s policy of servicing only those devices for which we have OEM-specific training guarantees the highest standards of safety, efficiency, and reliability, all while ensuring compliance with AS/NZS 3551:2012. By upholding this strict standard, we position ourselves not just as engineers, but as trusted partners in patient care.",
            ]
    },
    {
        id: 5,
        title: "ZOLL Acquires Vyaire Medical's Ventilator Business",
        image: [Blog5],
        date: "2024-08-21",
        description:
            [
                "Dear OHM Biomedical Community"
            ],
        descriptionTitle: "",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    ans: [
                        "Over the past few weeks, many of you have expressed concerns about the future of our trusted devices such as the 3100A/B, Fabian HFO, Bellavista 1000e, and Bird Air/Oxygen Blenders following the news of Vyaire`s Chapter 11 bankruptcy filing in the U.S. on June 10, 2024. Despite the uncertainties, we've remained optimistic about the future and are committed to keeping you informed and supported.",
                        "We are thrilled to announce a significant development that marks a promising new chapter in respiratory care: ZOLL, an Asahi Kasei company known for its innovative medical devices and software solutions, has emerged as the winning bidder in the auction to acquire Vyaire Medical's ventilator business. This announcement came on August 19, and the acquisition is pending court approval at a forthcoming sale hearing, with the final closing expected to occur in the next few weeks.",
                        "ZOLL has been a leader in acute critical care and respiratory solutions globally since 2014, developing devices and accessories specifically designed for transporting critically ill patients. Their commitment to enhancing respiratory care aligns perfectly with the needs of our clientele.",
                        "Jon Rennert, CEO of ZOLL, emphasized that respiratory care has always been a core component of their business strategy. \"Adding Vyaire`s ventilators to our product portfolio will significantly enhance our ability to serve a broader range of clinicians and patients\", he stated. This integration promises to boost the capabilities and reach of our ventilation solutions, bringing advanced technology to healthcare providers across Australia and New Zealand.",
                        "We at OHM Biomedical are enthusiastic about the future and our ongoing partnership with you, our valued customers. The support from the Vyaire Management team during this transition has been instrumental in ensuring smooth operations, thus minimizing any impact on our service and commitments to you."
                    ],
                }
            ],
        conclusion:
            [
                "As we move forward, we are confident that this new relationship with ZOLL will not only maintain but enhance the quality and innovation you expect from us. We look forward to continuing to support your critical care needs with even more advanced and reliable ventilation technology.",
                "For more detailed information on this acquisition and what it means for our products and services, please visit ZOLL's announcement <a href='https://www.zoll.com' target='_blank' rel='noopener noreferrer' class='hover:text-blue-500 hover:underline'>page here</a>..",
                "Thank you for your continued trust in OHM Biomedical. We are excited to step into this new era of respiratory care with you.",
                "#OHMBiomedical #Ventilation",
                "Sincerely,",
                "Sovit Baral",
                "Managing Director",
                "OHM Biomedical Engineering"
            ]
    },
    {
        id: 6,
        title: "OHM Biomedical Sets a New Standard for Bird™ Blender Service Training in ANZ",
        image: [Blog6],
        date: "2024-09-17",
        description:
            [
                ""
            ],
        descriptionTitle: "",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "",
                        "",
                        "",
                        "",
                        ""
                    ],
                    ans: [
                        "At OHM Biomedical, we are proud to establish a new benchmark in the servicing of Bird™ Air/Oxygen Blenders across Australia and New Zealand. Through our close partnership with Vyaire Medical, we are now offering OEM-certified online training, specifically designed for biomedical engineers responsible for maintaining Bird™ blenders.",
                        "Historically, Vyaire Medical limited this specialized training to distributors and OEM service providers, leaving end-users without access to this critical knowledge. After extensive discussions, OHM Biomedical has successfully negotiated to extend this OEM-certified training to biomedical engineers, allowing those directly maintaining Bird™ Air/Oxygen Blenders to develop the necessary expertise.",
                        "Delivered online from Vyaire`s facility in Germany, this training offers engineers hands-on experience to ensure top-tier service and equipment reliability. Although all current training sessions are fully booked, we encourage engineers in Australia and New Zealand to contact us for upcoming training opportunities.",
                        "In addition to training, OHM Biomedical provides a full range of OEM parts and tools for servicing Bird™ blenders. This includes genuine preventative maintenance kits directly sourced from Vyaire Medical, ensuring full traceability through the supply chain.",
                        "If you are a biomedical engineer interested in Bird™ blender training or purchasing OEM-certified parts and tools, reach out to us today to secure your spot in future training sessions."
                    ],
                }
            ],
        conclusion:
            [

            ]
    },
    {
        id: 7,
        title: "Our Success with the 3100A/B, Sensormedics HFO",
        image: [Blog7],
        date: "2024-10-10",
        description:
            [
                "At <strong>OHM Biomedical</strong>, we are proud to announce the successful completion of one of the largest installations of the 3100A/B High-Frequency Oscillatory Ventilator (HFO) (also known as Sensormedics) in partnership with Vyaire Medical. This project saw the installation of <strong>11 ventilators</strong> at the prestigious <strong>Royal Children's Hospital</strong> in Melbourne, a key healthcare provider for critically ill children. ",
                "This project showcased the strength of collaboration between Vyaire Medical and our highly skilled clinical engineers and technical team. It was a significant milestone for OHM Biomedical, reinforcing our commitment to delivering exceptional service and innovative solutions across Australia and New Zealand."
            ],
        descriptionTitle: "",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "Why Regular PM is Critical for 3100 HFO Ventilators",
                        "Dedicated Training and Support from Vyaire Medical",
                        "Feedback from Our Early Experience with the 3100 HFO",
                        "Ensuring Ongoing Reliability",
                        "Get in Touch",
                        "",
                    ],
                    ans: [
                        "The <strong>3100A/B HFO</strong> has earned its reputation as the <strong>gold standard</strong> in High-Frequency Oscillatory Ventilation. It plays a critical role in managing patients with severe respiratory issues, particularly in neonatal intensive care units (NICU). To ensure these life-saving devices continue to perform at their peak, annual preventive maintenance (PM) is essential. This includes sensor calibration, filter replacements, and electrical safety checks, which are crucial for extending the equipment’s lifespan and maintaining compliance with medical standards.",
                        "A special thanks goes to Pankaj Sharma and James Ang, Senior Service Leaders at Vyaire Medical, for their in-depth technical training provided to our team at our Melbourne workshop. Their support ensures that OHM Biomedical can deliver outstanding maintenance and support for the 11 installed 3100A/B devices.",
                        "The 3100 HFO has been widely praised by clinical teams. In fact, during our early experience with the device in the NICU at Sydney, the feedback was clear—“Oldie but Goldie.” Its reputation as a reliable and efficient ventilator remains strong, and we are proud to support this exceptional piece of equipment.",
                        "Regular maintenance and calibration are key to the 3100 HFO performing at its best. If your facility uses these devices and requires servicing, consumables, or in-service training, we’re here to help. Our expert team is equipped to handle the ongoing needs of these machines, ensuring your facility can continue to provide top-tier care.",
                        "If your facility has 3100A/B HFO ventilators that need service or maintenance, reach out to our clinical engineering team. We are always ready to provide the support your team needs.",
                        "Contact us at <strong>support@ohmbiomedical.com.au</strong> we're just an email away!",
                    ],
                }
            ],
        conclusion:
            [

            ]
    },
    {
        id: 8,
        title: "OHM Biomedical at the EPSM-ABEC 2024 Conference: Innovation, Collaboration, and a Cuppa!",
        image: [Blog8,Blog88],
        date: "2024-11-28",
        description:
            [
                "From November 17-20, 2024, OHM Biomedical proudly participated in the <strong>joint Engineering and Physical Sciences in Medicine (EPSM) Conference &amp; Australian Biomedical Engineering Conference (ABEC)</strong> at the Grand Hyatt, Naarm, Melbourne. As a leading name in biomedical engineering, we were thrilled to engage with healthcare professionals, researchers, and engineers during this prestigious event.",
            ],
        descriptionTitle: "",
        descriptionTitleContent:
            [
                {
                    ques: [
                        "Showcasing Excellence in Biomedical Engineering",
                        "A Cup of Coffee and a Chat",
                        "A Special Thanks",
                        "Looking Ahead",
                        "",
                        "",
                    ],
                    ans: [
                        "At <strong>Booth 9</strong>, right across from the buzzing coffee station, we had the opportunity to connect with attendees, discuss ventilation solutions, and highlight how our specialist biomedical engineering services can support facilities across Australia. The exchange of ideas and feedback from industry peers was both inspiring and invaluable in shaping the future of our products and services.",
                        "OHM Biomedical was honored to sponsor coffee at the conference, providing attendees with a perfect chance to recharge and engage in meaningful conversations. Our team enjoyed meeting new faces, sharing insights, and learning about the challenges and advancements shaping biomedical engineering today.",
                        "We extend our heartfelt gratitude to everyone who visited our booth, explored our solutions, and shared their insights. Your feedback is the driving force behind our commitment to innovation and excellence in biomedical engineering.",
                        "As we reflect on the success of EPSM-ABEC 2024, we are more committed than ever to supporting healthcare facilities with reliable biomedical engineering expertise and cutting-edge solutions. Stay connected with OHM Biomedical as we continue to innovate and collaborate for a healthier future.",
                        "Let’s keep the conversation going—whether it’s over coffee or a shared commitment to advancing healthcare technology!",
                        "Thank you for being part of our journey at EPSM-ABEC 2024. We look forward to seeing you at future conferences!",
                    ],
                }
            ],
        conclusion:
            [

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
        } else {
            emailjs.send(
                'service_wck61fq', // Replace with your EmailJS service ID
                'template_g0yu38f', // Replace with your EmailJS template ID
                {
                    firstName: name,
                    email: email,
                    comments: comment,
                },
                'axf9xXZ07UFk3Vs7Z' // Replace with your EmailJS user ID (found in account settings)
            )
                .then(() => {
                    alert('Your message has been sent!');
                })
                .catch((error) => {
                    alert('There was an error sending your message. Please try again.');
                    console.error(error);
                });
            // Send comment via email or API
            setComments([...comments, { name, comment }]);
            setName('');
            setEmail('');
            setComment('');
        }

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
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="w-full rounded-lg"
                        >
                            {blog.image.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={image}
                                        alt={`${blog.title} - Image ${index + 1}`}
                                        className="w-full rounded-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
                        <p className='text-lg text-neutralDGrey text-justify'>
                            {/* {blog.description} */}
                            {blog.description.map((desc, index) => (
                                <p
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: desc }}
                                />
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
                                            <p
                                                className='text-gray-700 text-justify'
                                                dangerouslySetInnerHTML={{ __html: desc.ans[quesIndex] }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </p>
                        {blog.conclusion && blog.conclusion.length > 0 && (
                            <>
                                <h4 className="text-2xl text-black">Conclusion</h4>
                                <br />
                                <p className="text-lg text-gray text-justify">
                                    {blog.conclusion.map((desc, index) => (
                                        <p key={index} dangerouslySetInnerHTML={{ __html: desc }} />
                                    ))}
                                </p>
                            </>
                        )}
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
