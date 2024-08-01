import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/Banner1.png';

const Home = () => {
    return (
        <div className='bg-neutralSilver' id="home">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap'>
                                Authorized Distributor of Vyaire <br />
                                <span className='text-brandPrimary leading-snug'>
                                    Ventilation for Australia & New Zealand
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>OHM Biomedical</p>
                            <button className='btn-primary'>Contact us</button>
                        </div>
                    </div>     
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap'>
                                Best Services <br />
                                <span className='text-brandPrimary leading-snug'>
                                Learn about our Refreshed Brand
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Our revitalized brand represents our commitment to innovation, dedication to our customers and fundamental belief in improving the lives of patients through integrated breathing solutions.</p>
                            <button className='btn-primary'>Learn More</button>
                        </div>
                    </div>      
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug whitespace-nowrap'>
                                Best Services <br />
                                <span className='text-brandPrimary leading-snug'>
                                Learn about our Refreshed Brand
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8'>Our revitalized brand represents our commitment to innovation, dedication to our customers and fundamental belief in improving the lives of patients through integrated breathing solutions.</p>
                            <button className='btn-primary'>Learn More</button>
                        </div>
                    </div>                 
                </Carousel>
            </div>
        </div>
    )
}

export default Home