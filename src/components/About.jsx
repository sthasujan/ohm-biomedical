import React from 'react';
import aboutImg from '../assets/aboutImg.jpg';
import customerIcon from "../assets/icons/customerIcon.png";
import memberIcon from "../assets/icons/memberIcon.png";
import serviceIcon from "../assets/icons/serviceIcon.png";
import paymentIcon from "../assets/icons/paymentIcon.png";

const About = () => {
    return (
        <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div className='md:w-1/2 lg-2/5'>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md-w-4/5'>
                            Biomedical Excellence with Integrity
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            Welcome to OHM Biomedical, your trusted partner for all your Biomedical needs. We are a team of experienced and
                            passionate Biomedical engineers and technicians dedicated to delivering the highest quality service and support
                            to the healthcare industry in Australia.
                        </p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stat */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-brandSecondary font-semibold mb-4 md:w-4/5'>Trusted partner for all your medical device sales and after sales support. <br />
                            <span className='text-brandPrimary'></span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey md-8'>
                            Delivering innovative and reliable Biomedical solutions, we advance healthcare technology and enhance patient outcomes with our expertise and commitment to excellence.
                        </p>
                    </div>
                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around
                gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={customerIcon} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>26,578</h4>
                                    <p>Customers</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={memberIcon} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>4,784</h4>
                                    <p>Member</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src={serviceIcon} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,012</h4>
                                    <p>Services</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src={paymentIcon} alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>3,245,012</h4>
                                    <p>Payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About