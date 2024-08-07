import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/Banner1.png';
import productBgImg from "../assets/products.webp";

const Home = () => {
    return (
        // <div className='bg-brandSecondary' id="home">
        //     <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        //         <div className='w-full mx-auto'>
        //             <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between
        //             gap-12">
        //                 <div>
        //                     <img src={banner1} alt="" />
        //                 </div>
        //                 {/* hero text */}
        //                 <div className='md:w-1/2'>
        //                     <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug whitespace-nowrap'>
        //                         Authorized Distributor of Vyaire <br />
        //                         <span className='text-xl md:text-3xl text-brandPrimary leading-snug'>
        //                             Ventilation for Australia & New Zealand
        //                         </span>
        //                     </h1>
        //                     <p className='md:text-2xl text-white mb-8'>OHM Biomedical</p>
        //                     <button className='btn-primary'>Contact us</button>
        //                 </div>
        //             </div>          
        //         </div>
        //     </div>
        // </div>
        <div className='container' id="home">
            <img src={productBgImg} alt="" className='' />
            <div>
                <h1 className='font-semibold mb-4 md:w-3/4 leading-snug whitespace-nowrap 
                absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center w-full'>
                    Authorized Distributor of Vyaire Ventilation <br/>
                    <span className='text-xl md:text-3xl text-brandPrimary leading-snug'>
                         For Australia & New Zealand
                    </span><br />
                    {/* <span className='text-xl'>OHM Biomedical</span> */}
                </h1>
            </div>
        </div>
    )
}

export default Home