import { Carousel } from 'flowbite-react';
import React from 'react';
import productBgImg from "../assets/products.webp";
import Blog1 from "../assets/products/Vyaireventilators/blog6.png";

const Home = () => {
    return (
        <div>
            <div className='container relative pt-16 md:pt-0'>
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
            flex flex-col md:flex-row  transition-all duration-300 ease-in-out'>
                {/* Left Text Section */}
                <div className='md:w-1/2'>
                    <h2 className='text-xl text-black font-serif mb-3'>
                        OHM Biomedical is the exclusive distributor for Vyaire ventilators and CareFusion Bird blenders in Australia and New Zealand, providing expert sales and service. <br />
                        <br />In addition to these specific products, we offer a wide range of biomedical services to leading healthcare companies in the industry.
                    </h2>
                </div>

                {/* Right Image Section */}
                <div className='md:w-1/2 flex justify-center md:justify-end'>
                    <div className='w-full h-[300px] md:w-full md:h-[400px] lg:w-full lg:h-[500px]'>
                        {/* Carousel for images */}
                        <Carousel>
                            <img
                                src={Blog1}
                                alt="Biomedical Image 1"
                                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'
                            />
                            <img
                                src={Blog1}
                                alt="Biomedical Image 2"
                                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'
                            />
                            <img
                                src={Blog1}
                                alt="Biomedical Image 3"
                                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'
                            />
                            <img
                                src={Blog1}
                                alt="Biomedical Image 4"
                                className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105'
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home