import React from 'react'
import alpha_click from "../assets/partners/alpha_click.jpeg";
import bbraun from "../assets/partners/bbraun.svg";
import healwithlaserlogo from "../assets/partners/heal-with-laser-logo.png";
import medilaze from "../assets/partners/medilaze.png";
import mindray from "../assets/partners/mindray.png";
import seimens from "../assets/partners/seimens.svg";

const Trustedpartners = () => {
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="service">
            <div className='text-center my-8'>
                <h2 className='text-4xl text-brandPrimary font-semibold mb-2'>Our Trusted <br/> Partners</h2>
                <p className='text-neutraGrey'>We have been working with some Fortune 500+ clients</p>

                {/* comapany logo*/}

                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src={alpha_click} alt="" className='company-logo' />
                    <img src={bbraun} alt="" className='company-logo' />
                    <img src={healwithlaserlogo} alt="" className='company-logo' />
                    <img src={medilaze} alt="" className='company-logo' />
                    <img src={mindray} alt="" className='company-logo' />
                    <img src={seimens} alt="" className='company-logo' />
                </div>
            </div>
        </div>
    )
}

export default Trustedpartners