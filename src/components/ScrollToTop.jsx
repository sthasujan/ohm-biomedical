import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional, for smooth scrolling
    });
  }, [pathname]);

  // Listen for navigation clicks even when already on the same route
  useEffect(() => {
    const handleSamePageNavigation = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // optional
      });
    };

    window.addEventListener('hashchange', handleSamePageNavigation);

    return () => {
      window.removeEventListener('hashchange', handleSamePageNavigation);
    };
  }, []);

  return null;
};

export default ScrollToTop;
