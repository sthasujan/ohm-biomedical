import React from 'react'
import productBgImg from "../assets/products.webp";
import img1 from "../assets/Pictures/img1.JPEG";
import img2 from "../assets/Pictures/img2.JPEG";
import img3 from "../assets/Pictures/img3.JPEG";
import img4 from "../assets/Pictures/img4.JPEG";
import img5 from "../assets/Pictures/img5.jpg";
import img6 from "../assets/Pictures/img6.JPEG";
import img7 from "../assets/Pictures/img7.JPEG";
import img8 from "../assets/Pictures/img8.png";
import img9 from "../assets/Pictures/img9.jpg";
import img10 from "../assets/Pictures/img10.jpg";
// import img11 from "../assets/Pictures/img11.JPG";
import img12 from "../assets/Pictures/img12.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <div>
            <div className="relative w-full h-[120px]">
                {/* Fixed Height Image Container */}
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={productBgImg}
                        alt="Product Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Animated Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-2">
                    <motion.h1
                        className="font-semibold text-white text-center mx-auto
                            text-sm xs:text-base sm:text-lg md:text-xl
                            px-3 py-1 bg-black bg-opacity-40 rounded-md
                            backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Gallery
                    </motion.h1>
                </div>
            </div>
            <div className="flex items-center justify-center py-4 md:py-4 flex-wrap">
                <button type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All Gallery</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ml-2 mr-2 mb-2">
                {[
                    { src: img1, alt: "OHM_Biomedical_Team_Dinner_2024" },
                    { src: img2, alt: "Anupam_Engineering_3100_Ventilator_OHM" },
                    // { src: img3, alt: "Technician_Blender_Repair_OHM_Biomedical" },
                    // { src: img4, alt: "Anupam_Technician_Blender_Repair_OHM_Biomedical" },
                    { src: img5, alt: "OHM_Biomedical_Training" },
                    { src: img6, alt: "OHM_Biomedical_Training" },
                    { src: img7, alt: "OHM_Biomedical_Training" },
                    { src: img8, alt: "OHM_Biomedical_Training" },
                    { src: img9, alt: "OHM_Biomedical_Office" },
                    { src: img10, alt: "OHM_Biomedical_Servicing" },
                    // { src: img11, alt: "OHM_Biomedical_Servicing"},
                    { src: img12, alt: "OHM_Biomedical_Servicing" },
                ].map((image, index) => (
                    <div key={index} className="relative w-full h-auto">
                        <img
                            className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-110"
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery