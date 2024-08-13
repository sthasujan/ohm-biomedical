import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';
import QualityLogo from '../assets/icon-iso-white.svg';

const Footer = () => {
  return (
    <footer className="bg-brandSecondary text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div>
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <a href="/" className="hover:text-gray-200"><FaLinkedinIn /></a>
            <ul>
              <li className="hover:underline"><a href="/">Company Profile</a></li>
            </ul>
            <div>
              <img src={logo} alt="Parker Healthcare Logo" className="mt-5 h-20" />
            </div>
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
              <a href="support@ohmbiomedical.com.au" className="hover:text-gray-200">support@ohmbiomedical.com.au</a><br />
              <br />
            </address>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <img src={QualityLogo} alt="Certification" className="w-20 h-20 mb-3" />
              <p className="text-center md:text-center">OHM Biomedical is an <br />ISO-9001 certified company.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end text-sm">
          &copy; Copyright 2024 OHM Biomedical
        </div>
      </div>
    </footer>
  );
};

export default Footer;
