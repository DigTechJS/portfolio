import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Components/Navbar';
import {Banner} from './Components/Banner/Banner'
import {Skills} from './Components/Skills/Skills'
import {Projects} from './Components/Projects/Projects'
import Achievements from './Components/Achievements/Achievements'
import Footer from './Components/Footer/Footer'
import './App.css'
import colorSharp from './assets/img/color-sharp.png'

const App = () => {
  return (
    <>
      <img src={colorSharp} alt="" className="background-image-left" />
      <Navbarr/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Footer/>

    </>
    
  )
}

export default App