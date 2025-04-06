import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';
import QualityLogo from '../assets/icon-iso-white.svg';
import termcondition from '../assets/Terms&Conditions/OHM Biomedical Enginnering Terms of Supply and Sale  v 1.2_ 29_12_2024.pdf';

const Footer = () => {
  return (
    <footer className="bg-brandSecondary text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center md:text-left">
          {/* <div>
            <h3 className="font-semibold text-lg mb-3 underline">Features</h3>
            <ul>
              <li className="hover:underline"><a href="/">Home</a></li>
              <li className="hover:underline"><a href="/">Product</a></li>
              <li className="hover:underline"><a href="/">Services</a></li>
            </ul>
          </div> */}
          <div className="flex justify-center md:justify-start">
            {/* <h3 className="font-semibold text-lg mb-3 underline">Contact</h3> */}
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
          <div className="flex flex-col items-center md:items-end">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/company/ohmbiomedical/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 mb-3 p-1 border border-white rounded-full flex items-center justify-center w-8 h-8"
            >
              <FaLinkedinIn />
            </a>

            {/* Privacy and Terms */}
            <div className="flex flex-col text-sm text-white space-y-1 mb-2">
              <a href="/PrivacyPolicy" className="hover:underline text-center md:text-right">
                Privacy Policy
              </a>
              <a
                href={termcondition}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-center md:text-right"
              >
                Terms & Conditions
              </a>
            </div>

            {/* Footer Text */}
            <div className="text-sm text-center md:text-right mt-6 text-white">
              &copy; Copyright 2024 OHM Biomedical
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
