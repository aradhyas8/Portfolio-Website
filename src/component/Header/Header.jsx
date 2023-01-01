import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './header.css';
import CTA from './CTA';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'hello, I am Aradhya.';

  useEffect(() => {
    let index = 0;

    const updateTypedText = () => {
      setTypedText(prevTypedText => prevTypedText + textToType[index]);
      index += 1;

      if (index < textToType.length) {
        setTimeout(updateTypedText, 100);
      }
    };

    setTimeout(updateTypedText, 100);
  }, []);

  return (
    <header>
      <div className="container header__container">
        <div className="large-text">{typedText}</div>
        
        <h6>
          I'm a programmer with a passion for building and solving. My skills and dedication help me stand out and tackle any challenge that comes my way. 
          I love pushing the limits and finding creative solutions to problems.
        </h6>
        
        <CTA />
        
        <div className="header__socials-container" style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <div className="header__socials">
            <a href="https://www.linkedin.com/in/aradhyas8/" className="header__social">
              <FaLinkedin />
            </a>
            <a href="https://github.com/aradhyas8" className="header__social">
              <FaGithub />
            </a>
          </div>
        </div>
        
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};


export default Header;
