import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Intro from './Intro.jsx'
import Proyecto01 from './proyecto01.jsx'
import Proyecto02 from './Proyecto02.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro/>
    <Proyecto01/>
    <Proyecto02/>
    <Footer/>
  </StrictMode>,
)
