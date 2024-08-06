
import './App.css'
import About from './components/About'
import MyFooter from './components/MyFooter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Blog from './components/Blog'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YyaireVentilator from './components/VyaireVentilators'


function App() {

  return (
    <>
       <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route  path="/Yyaireventilator" element={<YyaireVentilator />} />
                {/* Add other routes as needed */}
            </Routes>
            {/* <About /> */}
            <Services />
            <MyFooter />
        </Router>
    </>
  )
}

export default App
