import React from 'react';
import alpha_click from "../assets/partners/alpha_click.jpeg";
import bbraun from "../assets/partners/bbraun.svg";
import healwithlaserlogo from "../assets/partners/heal-with-laser-logo.png";
import medilaze from "../assets/partners/medilaze.png";
import mindray from "../assets/partners/mindray.png";
import seimens from "../assets/partners/seimens.svg";
import bayside from "../assets/partners/bayside.png";
import maxtec from "../assets/partners/maxtec.svg";

const Trustedpartners = () => {
    return (
        <div className='md:px-14 px-4 max-w-screen-2xl mx-auto' id="service">
            <div className='text-center my-2'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-brandPrimary font-bold mb-2'>Our Trusted Partners</h2>
                <div className='company-logos'>
                    <div className='scroll-container'>
                        <img src={alpha_click} alt="Alpha Click" className='company-logo' />
                        <img src={bbraun} alt="B Braun" className='company-logo' />
                        <img src={healwithlaserlogo} alt="Heal With Laser" className='company-logo' />
                        <img src={medilaze} alt="Medilaze" className='company-logo' />
                        <img src={mindray} alt="Mindray" className='company-logo' />
                        <img src={seimens} alt="Siemens" className='company-logo' />
                        <img src={bayside} alt="bayside" className='company-logo' />
                        <img src={maxtec} alt="maxtec" className='company-logo' />

                        {/* Duplicate images for seamless looping */}
                        <img src={alpha_click} alt="Alpha Click" className='company-logo' />
                        <img src={bbraun} alt="B Braun" className='company-logo' />
                        <img src={healwithlaserlogo} alt="Heal With Laser" className='company-logo' />
                        <img src={medilaze} alt="Medilaze" className='company-logo' />
                        <img src={mindray} alt="Mindray" className='company-logo' />
                        <img src={seimens} alt="Siemens" className='company-logo' />
                        <img src={bayside} alt="bayside" className='company-logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trustedpartners;
