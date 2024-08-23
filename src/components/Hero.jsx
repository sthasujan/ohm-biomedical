// src/components/Home.js
import React from 'react';
import Products from './Products';
import Trustedpartners from './Trustedpartners';
import MyFooter from './MyFooter';
import Home from './Home'; // Updated to HomeContent for clarity

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-screen">
                    <Home /> 
            </section>
            <section id="products" className="min-h-screen flex items-center justify-center mt-10 lg:mt-36">
                    <Products />
            </section>
            <section id="trustedpartners" className="min-h-min flex items-center justify-center mt-10 lg:mt-10">
                <div className="w-full">
                    <Trustedpartners />
                </div>
            </section>
        </>
    );
};

export default Hero;
