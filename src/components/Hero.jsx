import React from 'react';
import Products from './Products';
import Trustedpartners from './Trustedpartners';
import Home from './Home';
import TrustedClients from './TrustedClients'

const Hero = () => {
    return (
        <>
            <section id="home" className="min-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center items-center px-4 sm:px-8">
                <Home />
            </section>

            <section id="products" className="min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] flex flex-col justify-center items-center px-4 sm:px-8">
                <Products />
            </section>
            <section id="trustedpartners" className="min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center px-4 sm:px-8">
                <div className="w-full">
                    <TrustedClients />
                </div>
            </section>
        </>
    );
};

export default Hero;