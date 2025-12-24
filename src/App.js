import './App.css';
import React, { Component, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Blurb from './components/Blurb';
import About from './components/About';
import Contact from './components/Contact';
import Background from './components/Background';
import NavBackground from './components/NavBackground';


const App = () => {
  const isMobile = window.innerWidth < 768;
  const [hamburgerOpen, setHamburgerOpen] =  useState(false);

  return (
    <div className="container">
        <NavBackground hamburgerOpen={hamburgerOpen} isMobile={isMobile}/>
        <Header/>
        <Background/>
        <Nav hamburgerOpen={hamburgerOpen} setHamburgerOpen={setHamburgerOpen} isMobile={isMobile}/>
        <div className="griddy">
          <Blurb/>
          <About/>
          <Contact/>
        </div>
        <Footer/>
    </div>
  );

}

export default App;
