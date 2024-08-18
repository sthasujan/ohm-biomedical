import { Carousel } from 'flowbite-react';
import React from 'react';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Vyaireventilators/blog1.png";
import Blog2 from "../assets/products/Vyaireventilators/blog2.png";
import Blog3 from "../assets/products/Vyaireventilators/blog5.png";
import Blog4 from "../assets/products/Vyaireventilators/blog6.png";
import Blog5 from "../assets/blog/blog2.webp";

const Home = () => {
    return (
        <div>
            <div className='relative pt-16 md:pt-0'>
                <img
                    src={productBgImg}
                    alt="Product Background"
                    className='w-full h-[30vh] md:h-[40vh] object-cover'
                />
                <div
                    className='absolute bottom-[15%] md:top-[65%] w-full flex justify-center px-4'
                >
                    <h1
                        className='font-semibold mb-2 leading-tight text-white text-xl sm:text-2xl text-center w-full md:w-3/4'
                    >
                        Authorized Distributor of Vyaire Ventilation in ANZ <br />
                    </h1>
                </div>
            </div>
            <div className='mt-0 mx-auto text-left w-full sm:w-11/12 md:w-4/5 p-6 bg-white shadow-lg rounded-lg 
            flex flex-col md:flex-row  transition-all duration-300 ease-in-out items-center mb-2'>
                {/* Left Text Section */}
                <div className='md:w-1/2'>
                    <h2 className='text-xl text-black font-serif mb-3'>
                        OHM Biomedical is the exclusive distributor for Vyaire ventilators and CareFusion Bird blenders in Australia and New Zealand, providing expert sales and service. <br />
                        <br />In addition to these specific products, we offer a wide range of biomedical services to leading healthcare companies in the industry.
                    </h2>
                </div>
                {/* Right Image Section */}
                <div className='md:w-1/2 flex justify-center md:justify-end'>
                    <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]'>
                        {/* Carousel for images */}
                        <Carousel>
                            <img
                                src={Blog1}
                                alt="Biomedical Image 1"
                                className='w-full h-full object-cover transition-transform duration-100 transform hover:scale-105'
                            />
                            <img
                                src={Blog2}
                                alt="Biomedical Image 2"
                                className='w-full h-full object-cover transition-transform duration-100 transform hover:scale-105'
                            />
                            <img
                                src={Blog3}
                                alt="Biomedical Image 3"
                                className='w-full h-full object-cover transition-transform duration-100 transform hover:scale-105'
                            />
                            <img
                                src={Blog4}
                                alt="Biomedical Image 4"
                                className='w-full h-full object-cover transition-transform duration-100 transform hover:scale-105'
                            />
                            <img
                                src={Blog5}
                                alt="Biomedical Image 5"
                                className='w-full h-full object-cover transition-transform duration-200 transform hover:scale-105'
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home