import { useState, useEffect, useRef, useCallback } from 'react';
import logo from '../assets/logo.png';
import { FaXmark, FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import ContactPopup from './ContactPopup';

const Navbar = ({ onHeightChange }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const navbarRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = useCallback((e) => {
        e?.preventDefault();
        setShowPopup(true);
        setIsMenuOpen(false);
    }, []);

    const handleClosePopup = () => setShowPopup(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setDropdownOpen(null);
    };

    // Measure and report navbar height
    useEffect(() => {
        const updateHeight = () => {
            if (navbarRef.current && onHeightChange) {
                const height = navbarRef.current.offsetHeight;
                onHeightChange(`${height}px`);
            }
        };

        // Initial measurement
        updateHeight();

        // Set up resize observer to handle dynamic changes
        const resizeObserver = new ResizeObserver(updateHeight);
        if (navbarRef.current) {
            resizeObserver.observe(navbarRef.current);
        }

        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setDropdownOpen(null);
                if (isMenuOpen) {
                    setIsMenuOpen(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen, onHeightChange]);

    const navItems = [
        { link: "Home", path: "/" },
        {
            link: "Products",
            path: "#",
            dropdown: [
                { link: 'Zoll Medical Ventilator', path: '/ZollYyaireventilator' },
                { link: 'Carefusion Bird Air/Oxygen Blender', path: '/Carefusionbirdblender' },
                { link: 'Siemens Ultrasound', path: '/Siemensultrasound' },
                // { link: 'Consumables', path: '/Consumablessales' },
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
        { link: "Blog", path: "/Blog" },
        { link: "Contact Us", path: "#", onClick: handleShowPopup },
    ];

    return (
        <>
            <header className='w-full bg-white fixed top-0 left-0 right-0 z-50' ref={navbarRef}>
                <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white shadow-md duration-300" : ""}`}>
                    <div className='flex justify-between items-center text-base gap-8'>
                        <NavLink to="/" className='text-2xl font-semibold flex items-center space-x-3'>
                            <img src={logo} className='w-20 inline-block items-center' alt="Logo" />
                        </NavLink>

                        <ul className='md:flex space-x-8 hidden'>
                            {navItems.map(({ link, path, dropdown, onClick }) => (
                                dropdown ? (
                                    <li
                                        key={link}
                                        onMouseEnter={() => setDropdownOpen(link)}
                                        onMouseLeave={() => setDropdownOpen(null)}
                                        className="relative group"
                                    >
                                        <span className="cursor-pointer flex items-center" aria-expanded={dropdownOpen === link ? 'true' : 'false'}>
                                            {link}
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </span>
                                        {dropdownOpen === link && (
                                            <ul className="absolute bg-white shadow-lg p-2 flex flex-col min-w-[200px] rounded-md mt-1 z-50">
                                                {dropdown.map(({ link, path }) => (
                                                    <li key={path}>
                                                        <NavLink
                                                            to={path}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded whitespace-nowrap"
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
                                        {onClick ? (
                                            <span
                                                onClick={onClick}
                                                className="block cursor-pointer text-base text-gray-900 hover:text-brandPrimary first:font-medium"
                                            >
                                                {link}
                                            </span>
                                        ) : (
                                            <NavLink
                                                to={path}
                                                className={({ isActive }) =>
                                                    `block cursor-pointer text-base ${isActive ? 'text-brandPrimary font-medium' : 'text-gray-900 hover:text-brandPrimary'}`
                                                }
                                            >
                                                {link}
                                            </NavLink>
                                        )}
                                    </li>
                                )
                            ))}
                        </ul>

                        <div className='space-x-8 hidden lg:flex items-center'>
                            <button
                                onClick={handleShowPopup}
                                className='flex items-center text-brandSecondary hover:text-brandPrimary'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.05 4.55a2.5 2.5 0 011.986-1.986l2.282-.457a1 1 0 011.18.737l1.007 4.03a1 1 0 01-.57 1.126l-1.515.757a7.002 7.002 0 003.317 3.317l.757-1.515a1 1 0 011.126-.57l4.03 1.008a1 1 0 01.737 1.18l-.457 2.282a2.5 2.5 0 01-2.514 2.057A15.969 15.969 0 012.05 4.55z" />
                                </svg>
                                <span className="ml-1">03 9115 7464</span>
                            </button>
                        </div>

                        <div className='md:hidden'>
                            <button
                                onClick={toggleMenu}
                                className='text-neutralDGrey focus:outline-none focus:text-gray-500'
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        onClick={toggleMenu}
                    >
                        <div
                            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center p-4 border-b">
                                <img src={logo} className='w-16' alt="Logo" />
                                <button
                                    onClick={toggleMenu}
                                    className='text-gray-500 hover:text-gray-700'
                                    aria-label="Close menu"
                                >
                                    <FaXmark className='h-6 w-6' />
                                </button>
                            </div>

                            <div className="overflow-y-auto h-[calc(100%-60px)]">
                                <div className="px-4 py-2 space-y-1">
                                    {navItems.map(({ link, path, dropdown, onClick }) => (
                                        dropdown ? (
                                            <div key={link} className=''>
                                                <button
                                                    onClick={() => setDropdownOpen(prev => prev === link ? null : link)}
                                                    className='w-full flex justify-between items-center py-3 px-3 text-left text-gray-800 hover:text-brandPrimary rounded hover:bg-gray-50'
                                                >
                                                    <span>{link}</span>
                                                    <svg
                                                        className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen === link ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {dropdownOpen === link && (
                                                    <ul className='pl-4 mt-1 space-y-1'>
                                                        {dropdown.map(({ link, path }) => (
                                                            <li key={path}>
                                                                <NavLink
                                                                    to={path}
                                                                    className='block py-2 px-3 text-sm text-gray-700 hover:text-brandPrimary hover:bg-gray-50 rounded'
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
                                            <div key={path} className=''>
                                                {onClick ? (
                                                    <button
                                                        onClick={(e) => {
                                                            onClick(e);
                                                        }}
                                                        className='w-full text-left py-3 px-3 text-gray-800 hover:text-brandPrimary rounded hover:bg-gray-50'
                                                    >
                                                        {link}
                                                    </button>
                                                ) : (
                                                    <NavLink
                                                        to={path}
                                                        className={({ isActive }) =>
                                                            `block py-3 px-3 text-gray-800 hover:text-brandPrimary rounded hover:bg-gray-50 ${isActive ? 'bg-gray-100 text-brandPrimary' : ''}`
                                                        }
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {link}
                                                    </NavLink>
                                                )}
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Floating Call Button - visible only on mobile */}
                    <div className="fixed bottom-4 right-4 z-50 md:hidden">
                        <a
                            href="tel:0391157464"
                            aria-label="Call Us"
                            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-brandPrimary text-brandPrimary hover:text-red-500 hover:border-red-500 transition-colors vibrate"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 512 512"
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </header>

            {showPopup && <ContactPopup show={showPopup} handleClose={handleClosePopup} />}
        </>
    );
};

export default Navbar;