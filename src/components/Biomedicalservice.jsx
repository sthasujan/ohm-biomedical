import React from 'react';
import { motion } from 'framer-motion';

const Biomedicalservice = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <motion.div
                    className="text-2xl font-semibold mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    🚧 Under Construction 🚧
                </motion.div>
                
                <motion.div
                    className="text-lg mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    This page is currently being developed. Please check back later!
                </motion.div>

                <div className="relative w-64 mx-auto">
                    <motion.div
                        className="absolute inset-0 bg-gray-300 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="relative bg-brandPrimary h-6 rounded-full"
                        style={{ width: '70%' }}
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white font-semibold">
                        70%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biomedicalservice;
