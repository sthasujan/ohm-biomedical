import React from 'react';
import alpha_click from "../assets/partners/alpha_click.jpeg";
import bbraun from "../assets/partners/bbraun.svg";
import healwithlaserlogo from "../assets/partners/heal-with-laser-logo.png";
import medilaze from "../assets/partners/medilaze.png";
import mindray from "../assets/partners/mindray.png";
import seimens from "../assets/partners/seimens.svg";
import bayside from "../assets/partners/bayside.png";
import maxtec from "../assets/partners/maxtec.svg";
import acl_logo from "../assets/partners/acl_logo.jpg";
import neotech from "../assets/partners/neotech.png";

const Trustedpartners = () => {
    return (
        <div className='md:px-14 px-4 max-w-screen-2xl mx-auto mt-6' id="service">
            <div className='text-center my-2'>
                <h2 className='text-xl md:text-2xl lg:text-3xl text-brandPrimary font-bold mb-2'>Our Trusted Partners</h2>
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
                        <img src={acl_logo} alt="acl_logo" className='company-logo' />
                        <img src={neotech} alt="neotech" className='company-logo' />

                        {/* Duplicate images for seamless looping */}
                        <img src={alpha_click} alt="Alpha Click" className='company-logo' />
                        <img src={bbraun} alt="B Braun" className='company-logo' />
                        <img src={healwithlaserlogo} alt="Heal With Laser" className='company-logo' />
                        <img src={medilaze} alt="Medilaze" className='company-logo' />
                        <img src={mindray} alt="Mindray" className='company-logo' />
                        <img src={seimens} alt="Siemens" className='company-logo' />
                        <img src={bayside} alt="bayside" className='company-logo' />
                        <img src={acl_logo} alt="acl_logo" className='company-logo' />
                        <img src={neotech} alt="neotech" className='company-logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trustedpartners;
