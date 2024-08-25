// src/components/Home.js
import React from 'react';
import Products from './Products';
import Trustedpartners from './Trustedpartners';
import Home from './Home'; 

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-min sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center items-center">
                    <Home /> 
            </section>
            <section id="products" className="min-h-screen flex items-center justify-center">
                <div className="w-full">                    
                    <Products />
                </div>
            </section>
            <section id="trustedpartners" className="min-h-min flex items-center justify-center">
                <div className="w-full">
                    <Trustedpartners />
                </div>
            </section>
        </>
    );
};

export default Hero;
