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

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function AppWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Yyaireventilator" element={<YyaireVentilator />} />
        <Route path="/Carefusionbirdblender" element={<Carefusionbirdblender />} />
        <Route path="/Siemensultrasound" element={<Siemensultrasound />} />
        <Route path="/Yyaireventilator/:id" element={<VyaireBlogDetailView />} />
        <Route path="/Carefusionbirdblender/:id" element={<CarefusionBlogDetailView />} />
        <Route path="/About" element={<About />} />
        <Route path="/Ourteam" element={<OurTeam />} />
        <Route path="/Faq" element={<FAQ />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:id" element={<BlogDetail />} />
      </Routes>
      {isHomePage && (
        <>
          <Products />
          <Trustedpartners />
        </>
      )}
      <MyFooter />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
