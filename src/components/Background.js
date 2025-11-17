import React, { useContext, useEffect, useState } from 'react';
import console from './img/console2.jpg'

const Background = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 150) {
            setIsScrolled(true);
        } 
        else {
            setIsScrolled(false);
        }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <img id="BackgroundImage" className= {`${isScrolled ? 'parallax-bg-image-blur' : 'parallax-bg-image-noblur'} background-image`} src={console}/>
  );

}

export default Background;
