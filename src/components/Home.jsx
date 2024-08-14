import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/Banner1.png';
import productBgImg from "../assets/products.webp";

const Home = () => {
    return (
        <div className='container relative pt-24 md:pt-0'>
            <img
                src={productBgImg}
                alt="Product Background"
                className='w-full h-[20vh] md:h-[40vh] object-cover mx-auto'
            />
            <div className='absolute top-[50%] md:top-[60%] w-full flex justify-center'>
                <h1 className='font-semibold mb-4 leading-snug text-white text-2xl text-center w-full md:w-3/4'>
                    Authorized Distributor of Vyaire Ventilation <br />
                    <span className='text-xl md:text-3xl text-brandPrimary leading-snug'>
                        For Australia & New Zealand
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Home