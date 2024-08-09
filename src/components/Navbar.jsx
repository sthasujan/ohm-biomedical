import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { FaXmark, FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };

        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };
        

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        {
            link: "Products",
            path: "#",
            dropdown: [
                { link: 'Vyaire Ventilator', path: '/Yyaireventilator' },
                { link: 'Carefusion Bird Blender', path: '/Carefusionbirdblender' },
                { link: 'Siemens Ultrasound', path: '/Siemensultrasound' },
                { link: 'Consumables Sales', path: '/Consumablessales' },
            ],
        },
        { 
            link: "Service",
            path: "#",
            dropdown: [
                { link: 'Bird Blender Service', path: '/Birdblenderservice' },
                { link: 'Biomedical Service', path: '/Biomedicalservice' },
            ],
        },
        { 
            link: "Who We Are?",
            path: "#",
            dropdown: [
                { link: 'About', path: '/About' },
                { link: 'Our Team', path: '/Ourteam' },
                { link: 'FAQ', path: '/Faq' },
                { link: 'Careers', path: '/Careers' },
            ],
        },
        { link: "Testimonial", path: "testimonial" },
        { link: "Blog", path: "Blog" },
    ];

    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0'>
            <nav className={`py-10 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <NavLink to="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} className='w-24 inline-block items-center' alt="Logo" />
                    </NavLink>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path, dropdown }) => (
                            dropdown ? (
                                <li key={link} className='relative group'>
                                    <span
                                        onClick={() => setIsDropdownOpen(prev => prev === link ? false : link)}
                                        className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                        {link}
                                    </span>
                                    {isDropdownOpen === link && (
                                        <ul className='absolute bg-white shadow-lg mt-2 p-2 flex flex-col space-y-2'>
                                            {dropdown.map(({ link, path }) => (
                                                <li key={path}>
                                                    <NavLink
                                                        to={path}
                                                        className='block px-8 py-2 text-base text-gray900 hover:text-brandPrimary whitespace-nowrap'
                                                        onClick={() => setIsDropdownOpen(false)} 
                                                        >                                                        
                                                        {link}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={path}>
                                    {link === "Home" ? (
                                        <NavLink
                                            to={path}
                                            className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                            {link}
                                        </NavLink>
                                    ) : (
                                        <ScrollLink
                                            to={path}
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                            {link}
                                        </ScrollLink>
                                    )}
                                </li>
                            )
                        ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center text-brandSecondary hover:text-brandPrimary'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.05 4.55a2.5 2.5 0 011.986-1.986l2.282-.457a1 1 0 011.18.737l1.007 4.03a1 1 0 01-.57 1.126l-1.515.757a7.002 7.002 0 003.317 3.317l.757-1.515a1 1 0 011.126-.57l4.03 1.008a1 1 0 01.737 1.18l-.457 2.282a2.5 2.5 0 01-2.514 2.057A15.969 15.969 0 012.05 4.55z" />
                            </svg>
                            03 9115 7464
                        </a>
                        {/* <a href="/" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a> */}
                        {/* <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button> */}
                    </div>

                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path, dropdown }) => (
                        dropdown ? (
                            <div key={link} className='relative'>
                                <span
                                    onClick={() => setIsDropdownOpen(prev => prev === link ? false : link)}
                                    className='block cursor-pointer text-base text-white hover:text-brandPrimary first:font-medium'>
                                    {link}
                                </span>
                                {isDropdownOpen === link && (
                                    <ul className='mt-2 flex flex-col space-y-2'>
                                        {dropdown.map(({ link, path }) => (
                                            <li key={path}>
                                                <NavLink
                                                    to={path}
                                                    className='block px-4 py-2 text-base text-white hover:text-brandPrimary'
                                                    onClick={() => setIsDropdownOpen(false)} 
                                                    >
                                                    {link}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                key={path}
                                to={path}
                                className='block text-base text-white hover:text-brandPrimary first:font-medium'>
                                {link}
                            </NavLink>
                        )
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
