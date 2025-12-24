import React, { useState } from 'react';

// eslint-disable-next-line
import { Link, animateScroll as scroll, animateScroll } from "react-scroll";
import Hamburger from './Hamburger';

const Nav = () => {
    const isMobile = window.innerWidth < 768;
    const [hamburgerOpen, setHamburgerOpen] =  useState(false);
    
    const home = "Home"
    const about = "About"
    const contact = "Contact"

    var blurLevelPx = 0;
    
    // this will toggle classes to show what the current page is 
    function toggleCurrent(e) {
        let classes = "navheader";
        let els = document.getElementsByClassName("navheader selected")
        if (els) {
            while (els[0]) {
                els[0].classList.remove('selected')
            }
        
        }
        e.target.className = classes.replace('navheader', 'navheader selected');
    }

    function toggleHamburgerOpen(e) {
        setHamburgerOpen(!hamburgerOpen);
        // TODO disable and configure background
    }

    let navheaderclass = "navheader";

    let scroll = animateScroll;
    function scrollToTop() {
        scroll.scrollToTop();
    }
    
    function scrollToBottom() {
        scroll.scrollToBottom()
    }

    const burgerMeatCSS = `
        .fixed-wrapper {
            display: ${hamburgerOpen ? 'inline': 'none'};
        }
    `;
    
    if (isMobile){
    return (
        <header className='nav wrapper'>
            <div className='fixed-wrapper'>
                <h1 className='selected navheader' id={home} onClick={(e) => {toggleCurrent(e); scrollToTop();}}>{home.toLowerCase()}</h1>
                <Link activeClass="active" to={about} spy={true} smooth={true} offset={0} duration={1000}><h1 className={navheaderclass ? navheaderclass : 'selected'} onClick={(e) => {toggleCurrent(e)}}>{about.toLowerCase()}</h1></Link>
                <Link activeClass="active" spy={true} smooth={true} offset={0} duration={1000}><h1 className={navheaderclass ? navheaderclass : 'selected'} onClick={(e) => {toggleCurrent(e); scrollToBottom();}}>{contact.toLowerCase()}</h1></Link>
            </div>

            <div onClick={(e) => {toggleHamburgerOpen(e);}}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>

            <style>{burgerMeatCSS}</style>
        </header>
    )
    }
    else{
            return (
        <header className='nav wrapper'>
            <div className='fixed-wrapper'>
                <h1 className='selected navheader' id={home} onClick={(e) => {toggleCurrent(e); scrollToTop();}}>{home.toLowerCase()}</h1>
                <Link activeClass="active" to={about} spy={true} smooth={true} offset={0} duration={1000}><h1 className={navheaderclass ? navheaderclass : 'selected'} onClick={(e) => {toggleCurrent(e)}}>{about.toLowerCase()}</h1></Link>
                <Link activeClass="active" spy={true} smooth={true} offset={0} duration={1000}><h1 className={navheaderclass ? navheaderclass : 'selected'} onClick={(e) => {toggleCurrent(e); scrollToBottom();}}>{contact.toLowerCase()}</h1></Link>
            </div>
        </header>
    )

    }

}

export default Nav;



