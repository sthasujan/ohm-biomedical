import React from 'react';
import aboutImg from '../assets/AboutSection.jpg';
import customerIcon from "../assets/icons/customerIcon.png";
import memberIcon from "../assets/icons/memberIcon.png";
import serviceIcon from "../assets/icons/serviceIcon.png";
import paymentIcon from "../assets/icons/paymentIcon.png";

import productBgImg from "../assets/products.webp";

const About = () => {
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
                        About Us <br />
                    </h1>
                </div>
            </div>
            <div>
                {/* about text */}
                <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
                    <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12">
                        <div className="flex justify-center items-center md:w-1/2 lg:w-2/5">
                            <img
                                src={aboutImg}
                                alt=""
                                className="h-auto max-w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="md:w-1/2 mx-auto">
                            <h2 className="text-xl md:text-2xl lg:text-3xl text-neutralDGrey font-bold leading-tight mb-6 md:mb-2 md:w-4/5">
                                OHM Biomedical: Our Story
                            </h2>
                            <p className="md:w-full text-base md:text-sm text-neutralGrey text-justify leading-relaxed">
                                Our story began in 2022 when four clinical engineers, driven by a shared dedication to quality compliance and exceptional customer experience, recognized that the service standards they were delivering needed to evolve. United by these values, they founded OHM Biomedical, determined to set a new benchmark in the biomedical industry.
                                <br /> <br />
                                Today, OHM Biomedical has grown beyond its original team of four into a robust, experienced collective of professionals. Our expertise spans critical medical devices, including ventilators, anesthesia machines, and dialysis equipment, ensuring they perform flawlessly when lives depend on them.
                                <br /> <br />
                                At OHM Biomedical, we are more than just a service provider—we are partners in your patient care. Our unwavering commitment to excellence and our extensive industry knowledge make us the trusted choice for all your medical equipment needs. We care about your equipment, the quality of care you provide to your patients, and your experience working with us. That's why our value is simple: “I DO CARE.”
                            </p>
                            {/* <button className="btn-primary mt-6">Learn More</button> */}
                        </div>
                    </div>
                </div>

                {/* company stat */}
                {/* <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                        <div className='md:w-1/2'>
                            <h2 className='text-4xl text-brandSecondary font-semibold mb-4 md:w-4/5'>Trusted partner for all your medical device sales and after sales support. <br />
                                <span className='text-brandPrimary'></span></h2>
                            <p className='md:w-3/4 text-sm text-neutralGrey md-8'>
                                Delivering innovative and reliable Biomedical solutions, we advance healthcare technology and enhance patient outcomes with our expertise and commitment to excellence.
                            </p>
                        </div>
                        <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around
                                        gap-12'>
                            <div className='space-y-8'>
                                <div className='flex items-center gap-4'>
                                    <img src={customerIcon} alt="" />
                                    <div>
                                        <h4 className='text-2xl text-neutralDGrey font-semibold'>26,578</h4>
                                        <p>Customers</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <img src={memberIcon} alt="" />
                                    <div>
                                        <h4 className='text-2xl text-neutralDGrey font-semibold'>4,784</h4>
                                        <p>Member</p>
                                    </div>
                                </div>
                            </div>
                            <div className='space-y-8'>
                                <div className='flex items-center gap-4'>
                                    <img src={serviceIcon} alt="" />
                                    <div>
                                        <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,012</h4>
                                        <p>Services</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <img src={paymentIcon} alt="" />
                                    <div>
                                        <h4 className='text-2xl text-neutralDGrey font-semibold'>3,245,012</h4>
                                        <p>Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default About