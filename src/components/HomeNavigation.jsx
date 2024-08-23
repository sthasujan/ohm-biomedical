import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const HomeNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'trustedpartners', label: 'Trusted Partners' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const productsSection = document.getElementById('products');
      const trustedPartnersSection = document.getElementById('trustedpartners');

      const homeOffset = homeSection?.offsetTop || 0;
      const productsOffset = productsSection?.offsetTop || 0;
      const trustedPartnersOffset = trustedPartnersSection?.offsetTop || 0;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= trustedPartnersOffset) {
        setActiveSection('trustedpartners');
      } else if (scrollPosition >= productsOffset) {
        setActiveSection('products');
      } else if (scrollPosition >= homeOffset) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
      {sections.map((section) => (
        <div
          key={section.id}
          onMouseEnter={() => setHoveredSection(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
          className="relative flex items-center"
        >
          {hoveredSection === section.id && (
            <span
              className="absolute right-5 whitespace-nowrap  text-brandSecondary text-sm py-1 px-3 rounded-md opacity-0 transition-opacity duration-300 transform -translate-x-2"
              style={{ opacity: 1 }}
            >
              {section.label}
            </span>
          )}
          <Link
            to={section.id}
            smooth={true}
            duration={500}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === section.id ? 'bg-blue-600 scale-125' : 'bg-gray-400'
            }`}
            title={section.label}
          >
            <span className="sr-only">{section.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeNavigation;
