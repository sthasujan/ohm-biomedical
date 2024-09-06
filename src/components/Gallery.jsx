import React from 'react'
import productBgImg from "../assets/products.webp";
import img1 from "../assets/Pictures/img1.JPEG";
import img2 from "../assets/Pictures/img2.JPEG";
import img3 from "../assets/Pictures/img3.JPEG";
import img4 from "../assets/Pictures/img4.JPEG";

const Gallery = () => {
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
                        Gallery <br />
                    </h1>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All Gallery</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ml-2 mr-2">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img1} alt="OHM_Biomedical_Team_Dinner_2024" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img2} alt="Anupam_Engineering_3100_Ventilator_OHM" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img3} alt="Technician_Blender_Repair_OHM_Biomedical" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={img4} alt="Anupam_Technician_Blender_Repair_OHM_Biomedical" />
                </div>
            </div>

        </div>
    )
}

export default Gallery