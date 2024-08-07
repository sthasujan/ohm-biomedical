
import './App.css'
import About from './components/About'
import MyFooter from './components/MyFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Blog from './components/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YyaireVentilator from './components/VyaireVentilators'
import Trustedpartners from './components/Trustedpartners'
import Carefusionbirdblender from './components/Carefusionbirdblender'
import Siemensultrasound from './components/Siemensultrasound'
import Products from './components/Products'


function App() {

  return (
    <>
       <Router>
            <Navbar />
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path="/Yyaireventilator" element={<YyaireVentilator />} />
                <Route  path="/Carefusionbirdblender" element={<Carefusionbirdblender />} />
                <Route  path="/Siemensultrasound" element={<Siemensultrasound />} />
                {/* Add other routes as needed */}
            </Routes>
            <Products />
            <Trustedpartners />
            <MyFooter />
        </Router>
    </>
  )
}

export default App
