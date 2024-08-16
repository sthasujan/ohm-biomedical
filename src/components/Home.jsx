import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/Banner1.png';
import productBgImg from "../assets/products.webp";

const Home = () => {
    return (
        <div className='container relative pt-16 md:pt-0'>
            <img
                src={productBgImg}
                alt="Product Background"
                className='w-full h-[30vh] md:h-[40vh] object-cover'
            />

            {/* Adjust positioning for mobile and larger screens */}
            <div
                className='absolute bottom-[15%] md:top-[65%] w-full flex justify-center px-4'
            >
                <h1
                    className='font-semibold mb-2 leading-tight text-white text-xl sm:text-2xl text-center w-full md:w-3/4'
                >
                    Authorized Distributor of Vyaire Ventilation in ANZ <br />
                    {/* <span className='text-xl md:text-3xl text-brandPrimary leading-snug'>
                        For Australia & New Zealand
                    </span> */}
                </h1>
            </div>
        </div>
    )
}

export default Home