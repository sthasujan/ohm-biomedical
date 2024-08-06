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
        { link: "Home", path: "home" },
        {
            link: "Products",
            path: "#",
            dropdown: [
                { link: 'Vyaire Ventilator', path: '/Yyaireventilator' },
                { link: 'Carefusion Bird Blender', path: '/Carefusionbirdblender' },
                { link: 'Siemens Ultrasound', path: '/Siemensultrasound' },
            ],
        },
        { link: "Service", path: "services" },
        { link: "About", path: "about" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0'>
            <nav className={`py-10 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="#" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} className='w-20 inline-block items-center' alt="Logo" />
                    </a>
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
                                                        className='block px-4 py-2 text-base text-gray900 hover:text-brandPrimary'>
                                                        {link}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={path}>
                                    <ScrollLink
                                        to={path}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                        {link}
                                    </ScrollLink>
                                </li>
                            )
                        ))}
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
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
                                                    className='block px-4 py-2 text-base text-white hover:text-brandPrimary'>
                                                    {link}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <ScrollLink
                                key={path}
                                to={path}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                className='block text-base text-white hover:text-brandPrimary first:font-medium'>
                                {link}
                            </ScrollLink>
                        )
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
