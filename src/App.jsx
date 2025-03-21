import './App.css';
import About from './components/About';
import MyFooter from './components/MyFooter';
import Home from './components/Home';
import Navbar from './components/Navbar';
import YyaireVentilator from './components/VyaireVentilators';
import Trustedpartners from './components/Trustedpartners';
import Carefusionbirdblender from './components/Carefusionbirdblender';
import Siemensultrasound from './components/Siemensultrasound';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import CarefusionBlogDetailView from './components/CarefusionBlogDetailView';
import FAQ from './components/FAQ';
import OurTeam from './components/OurTeam';
import VyaireBlogDetailView from './components/VyaireBlogDetailView';
import Birdblenderservice from './components/Birdblenderservice';
import Consumablessales from './components/Consumablessales';
import Biomedicalservice from './components/Biomedicalservice';
import SiemensBlogDetailView from './components/SiemensBlogDetailView';
import Anaestheticmachineservice from './components/Anaestheticmachineservice'
import Sechristblenderservice from './components/Sechristblenderservice'
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NotFound from './components/NotFound';
import HomeNavigation from './components/HomeNavigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';

import { HelmetProvider } from "react-helmet-async";
import GoogleTag from "./components/GoogleTag";

function AppWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {isHomePage && <HomeNavigation />} {/* Display navigation on home page only */}
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Product Section */}
        <Route path="/ZollYyaireventilator" element={<YyaireVentilator />} />
        <Route path="/Carefusionbirdblender" element={<Carefusionbirdblender />} />
        <Route path="/Siemensultrasound" element={<Siemensultrasound />} />
        <Route path="/Consumablessales" element={<Consumablessales />} />
        {/* Each Product ReadMore Section */}
        <Route path="/ZollYyaireventilator/:id" element={<VyaireBlogDetailView />} />
        <Route path="/Carefusionbirdblender/:id" element={<CarefusionBlogDetailView />} />
        <Route path="/Siemensultrasound/:id" element={<SiemensBlogDetailView />} />

        {/* Service Section */}
        <Route path="/Birdblenderservice" element={<Birdblenderservice />} />
        <Route path="/Biomedicalservice" element={<Biomedicalservice />} />
        <Route path="/Sechristblenderservice" element={<Sechristblenderservice />} />
        <Route path="/Anaestheticmachineservice" element={<Anaestheticmachineservice />} />

        {/* Who We Are Section */}
        <Route path="/About" element={<About />} />
        <Route path="/Ourteam" element={<OurTeam />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/Gallery" element={<Gallery />} />

        {/* Testimonial Section */}
        <Route path="/Testimonial" element={<Testimonial />} />

        {/* Blogs Section */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id" element={<BlogDetail />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* {isHomePage && (
        <>
          <Products />
          <Trustedpartners />
        </>
      )} */}
      <MyFooter />
    </>
  );
}

function App() {
  return (
    <>
      <HelmetProvider>
        <GoogleTag /> {/* Google Ads Conversion Tracking */}
        <Router>
          <ScrollToTop /> {/* Ensures page resets to top when navigating */}
          <AppWrapper />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
