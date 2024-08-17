import React, { useState } from "react";

import productBgImg from "../assets/products.webp";

const faqData = [
    {
        question: "What is AS3551 and how is it applicable to medical devices in Australia?",
        answer: "AS3551 is an Australian standard that outlines the electrical safety and performance verification requirements for medical devices. It is applicable to all medical devices used in Australia to ensure they meet specific safety and performance standards. Compliance with this standard is required for medical devices to be legally supplied, sold, or used in Australia. At OHM Biomedical, we offer AS3551 testing services to ensure that your medical equipment meets the necessary standards for electrical safety and performance verification."
    },
    {
        question: "What services does OHM Biomedical offer?",
        answer: "OHM Biomedical offers a wide range of Biomedical services, including equipment installation, preventative maintenance and repair, AS3551 testing, TGA recalls, Biomedical asset lifecycle management, Biomedical consulting, test & tag, and virtual workshops."
    },
    {
        question: "How does OHM Biomedical ensure compliance with industry regulations?",
        answer: "OHM Biomedical adheres to all relevant industry standards and regulations to ensure that the services provided are compliant. We use a comprehensive approach to maintain compliance, including continuous training, audits, and the use of industry-standard tools and methodologies."
    },
    {
        question: "Can OHM Biomedical provide custom service plans for my unique business needs?",
        answer: "Yes, OHM Biomedical can create custom service plans tailored to your specific business requirements. Our team will work with you to understand your needs and develop a plan that ensures optimal performance and compliance of your medical devices."
    },
    {
        question: "What is OHM Biomedical's experience in the industry?",
        answer: "OHM Biomedical has extensive experience in the Biomedical field, with a team of experts who have been in the industry for many years. We have a proven track record of delivering high-quality services to a diverse range of clients."
    },
    {
        question: "How can I get started with OHM Biomedical?",
        answer: "To get started with OHM Biomedical, you can contact us via our website or call our customer service team. We will guide you through the process and help you choose the services that best meet your needs."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
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
                        What People Asked Usually?  <br />
                    </h1>
                </div>
            </div>
            <div className="faq-container">
                {/* <h2 className="faq-header">What People Asked Usually?</h2> */}
                {faqData.map((faq, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-question" onClick={() => toggleAccordion(index)}>
                            <h3>{faq.question}</h3>
                            <span className="faq-toggle-icon">
                                {activeIndex === index ? "−" : "+"}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
