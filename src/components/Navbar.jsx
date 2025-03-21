// Import the necessary libraries and assets
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import { FaXmark, FaBars, FaPhone } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import ContactPopup from './ContactPopup';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const navbarRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = (e) => {
        e.preventDefault();  // Prevent default anchor navigation
        setShowPopup(true);
    };

    const handleClosePopup = () => setShowPopup(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
                setDropdownOpen(null);
            }
        };

        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setDropdownOpen(null);
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { link: "Home", path: "/" },
        {
            link: "Products",
            path: "#",
            dropdown: [
                { link: 'Zoll Medical Ventilator', path: '/ZollYyaireventilator' },
                { link: 'Carefusion Bird Air/Oxygen Blender', path: '/Carefusionbirdblender' },
                { link: 'Siemens Ultrasound', path: '/Siemensultrasound' },
                { link: 'Consumables', path: '/Consumablessales' },
            ],
        },
        {
            link: "Service",
            path: "#",
            dropdown: [
                { link: 'Bird Air/Oxygen Blender Service', path: '/Birdblenderservice' },
                { link: 'Biomedical Service', path: '/Biomedicalservice' },
                { link: 'Sechrist Blender Service', path: '/Sechristblenderservice' },
                { link: 'Anaesthetic Machine Service', path: '/Anaestheticmachineservice' },
            ],
        },
        {
            link: "Who We Are?",
            path: "#",
            dropdown: [
                { link: 'About', path: '/About' },
                { link: 'Our Team', path: '/Ourteam' },
                { link: 'FAQ', path: '/Faq' },
                { link: 'Gallery', path: '/Gallery' },
            ],
        },
        { link: "Testimonial", path: "/Testimonial" },
        { link: "Blog", path: "/Blog" }
    ];

    return (
        <header className='w-full bg-white fixed top-0 left-0 right-0 z-50'>
            <nav className={`py-6 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md duration-300 z-[999]" : ""}`} ref={navbarRef}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <NavLink to="/" className='text-2xl font-semibold flex items-center space-x-3'>
                        <img src={logo} className='w-24 inline-block items-center' alt="Logo" />
                    </NavLink>
                    <ul className='md:flex space-x-12 hidden'>
                        {navItems.map(({ link, path, dropdown }) => (
                            dropdown ? (
                                <li
                                    key={link}
                                    onMouseEnter={() => setDropdownOpen(link)}
                                    onMouseLeave={() => setDropdownOpen(null)}
                                    className="relative"
                                >
                                    <span className="cursor-pointer">
                                        {link}
                                    </span>
                                    {dropdownOpen === link && (
                                        <ul className="absolute bg-white shadow-lg p-2 flex flex-col">
                                            {dropdown.map(({ link, path }) => (
                                                <li key={path}>
                                                    <NavLink to={path} className="block px-8 py-2 text-base text-gray900 hover:text-brandPrimary whitespace-nowrap">
                                                        {link}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={path}>
                                    <NavLink
                                        to={path}
                                        className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>
                                        {link}
                                    </NavLink>
                                </li>
                            )
                        ))}
                    </ul>
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <a 
                            href="/" 
                            onClick={handleShowPopup}
                            className='hidden lg:flex items-center text-brandSecondary hover:text-brandPrimary'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.05 4.55a2.5 2.5 0 011.986-1.986l2.282-.457a1 1 0 011.18.737l1.007 4.03a1 1 0 01-.57 1.126l-1.515.757a7.002 7.002 0 003.317 3.317l.757-1.515a1 1 0 011.126-.57l4.03 1.008a1 1 0 01.737 1.18l-.457 2.282a2.5 2.5 0 01-2.514 2.057A15.969 15.969 0 012.05 4.55z" />
                            </svg>
                                03 9115 7464
                        </a>
                         {/* Popup Modal */}
                        <ContactPopup show={showPopup} handleClose={handleClosePopup} />
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`transition-transform transform ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} space-y-5 px-6 mt-24 py-7 bg-brandSecondary fixed top-0 right-0 w-full md:hidden`} >
                    {navItems.map(({ link, path, dropdown }) => (
                        dropdown ? (
                            <div key={link} className='relative'>
                                <span
                                    onClick={() => setDropdownOpen(prev => prev === link ? null : link)}
                                    className='block cursor-pointer text-base text-white hover:text-brandPrimary first:font-medium'>
                                    {link}
                                </span>
                                {dropdownOpen === link && (
                                    <ul className='mt-2 flex flex-col space-y-2'>
                                        {dropdown.map(({ link, path }) => (
                                            <li key={path}>
                                                <NavLink
                                                    to={path}
                                                    className='block px-4 py-2 text-base text-white hover:text-brandPrimary'
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setDropdownOpen(null);
                                                    }}
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
                                className='block text-base text-white hover:text-brandPrimary first:font-medium'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link}
                            </NavLink>
                        )
                    ))}
                    <button
                        onClick={toggleMenu}
                        className='text-white'>
                        <FaXmark className='h-6 w-6' />
                    </button>
                </div>
            </nav>

            {/* Mobile Call Icon */}
            <div className="fixed bottom-4 right-4 z-50 md:hidden">
                <a
                    href="tel:0391157464"
                    className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brandPrimary text-brandPrimary hover:text-red-500 hover:border-red-500 transition-colors vibrate"
                >
                    <FaPhone className="w-6 h-6" />
                </a>
            </div>
        </header>
    );
};

export default Navbar;
