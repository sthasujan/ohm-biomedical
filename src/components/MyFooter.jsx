import React from 'react';
import { Footer } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsYoutube, BsInstagram, BsHouseAdd, BsPhone, BsMailbox } from "react-icons/bs";
import logo from '../assets/logo.png';

const MyFooter = () => {
  return (
    <Footer container className='bg-brandSecondary'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
            <a href="" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} className='w-20 inline-block 
          items-center' alt="" /></a>
            <div>
              <div className="address-container">
                <BsHouseAdd className="icon" />
                <p className="address-text">
                  Unit 10, 39 Barrie Road
                  <br /> Tullamarine VIC 3043
                </p>
              </div>
              <div className="address-container">
                <BsPhone className="icon" />
                <p className='text-white'>03 9115 7464</p>
              </div>
              <div className="address-container">
                <BsMailbox className="icon" />
                <p className='text-white'>Support@ohmbiomedical.com.au</p>
              </div> 
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white'>Home</Footer.Link>
                <Footer.Link href="#" className='text-white'>Product</Footer.Link>
                <Footer.Link href="#" className='text-white'>Service</Footer.Link>
                <Footer.Link href="#" className='text-white'>Support</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className='text-white'>Customer Support</Footer.Link>
                <Footer.Link href="#" className='text-white'>Product Support</Footer.Link>
                <Footer.Link href="#" className='text-white'>Compliance & Ethics</Footer.Link>
                <Footer.Link href="#" className='text-white'>FAQ</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="" />
              <Footer.LinkGroup col>
                <Footer.Icon href="https://www.linkedin.com/company/ohmbiomedical/" icon={BsLinkedin} />
                <Footer.Link href="#" className='text-white'>Privacy Policy</Footer.Link>
                <Footer.Link href="#" className='text-white'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className='text-white' href="#" by="OHM Biomedical" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-end">
            {/* <Footer.Icon href="#" icon={BsFacebook} /> */}
            {/* <Footer.Icon href="#" icon={BsLinkedin} /> */}
            {/* <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsYoutube} /> */}
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter