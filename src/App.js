import './App.css';
import React, { Component, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Blurb from './components/Blurb';
import About from './components/About';
import Contact from './components/Contact';
import Background from './components/Background';


const App = () => {

  return (
    <div className="container">
        <Header/>
        <Background/>
        <Nav/>
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
