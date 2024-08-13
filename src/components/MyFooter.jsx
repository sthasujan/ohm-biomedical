import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brandSecondary text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <ul>
              <li className="hover:underline"><a href="/">Company Profile</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Features</h3>
            <ul>
              <li className="hover:underline"><a href="/">Home</a></li>
              <li className="hover:underline"><a href="/">Product</a></li>
              <li className="hover:underline"><a href="/">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <address>
              <strong>OHM Biomedical</strong><br />
              Unit 10, 39 Barrie Road<br />
              Tullamarine VIC 3043<br />
              <br />
              <strong>Phone:</strong> +61 3 9115 7464<br />
              <strong>Fax:</strong> +61 3 9115 7464<br />
              <a href="support@ohmbiomedical.com.au" className="underline hover:text-gray-200">support@ohmbiomedical.com.au</a><br />
              <br />
              {/* <a href="/" className="underline hover:text-gray-200">Office Locations</a><br />
              <a href="/" className="underline hover:text-gray-200">Online Enquiry Form</a> */}
            </address>
          </div>
          <div>
            <div className="flex justify-end md:col-span-3">
              <div className="flex flex-col items-center">
                <img src="https://via.placeholder.com/100x100" alt="Certification" className="w-20 h-20 mb-3" />
                <p className="text-center md:text-left">OHM Biomedical is an ISO-9001 certified company.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center space-y-4 mt-4">
              <a href="/" className="hover:text-gray-200"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <img src={logo} alt="Parker Healthcare Logo" className="h-10" />
          </div>
          <div className="text-sm">
            &copy; Copyright 2020-2024 OHM Biomedical
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
