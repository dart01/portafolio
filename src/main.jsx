import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Intro from './Intro.jsx'
import AboutMe from './AboutMe.jsx'
import Proyecto01 from './proyecto01.jsx'
import Proyecto02 from './Proyecto02.jsx'
import Proyecto03 from './Proyecto03.jsx'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Intro/>
    <AboutMe/>
    <Proyecto01/>
    <Proyecto02/>
    <Proyecto03/>
    <Footer/>
  </StrictMode>,
)
