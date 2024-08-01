import React from 'react';
import aboutImg from '../assets/aboutImg.jpg';

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
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Welcome to <br />
                            <span className='text-brandPrimary'>OHM Biomedical</span></h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey md-8'>
                        </p>
                    </div>
                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around
                gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/customerIcon.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>26,578</h4>
                                    <p>Customers</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/memberIcon.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>4,784</h4>
                                    <p>Member</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/serviceIcon.png" alt="" />
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,012</h4>
                                    <p>Services</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/icons/paymentIcon.png" alt="" />
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