import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './header.css';
import CTA from './CTA';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = 'hi, I am Aradhya.';

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
        
        <div className="build">I like to build things</div>
        <div  className="description__header"><h6>
        I am a programmer with a focus on creating tools and products. Currently, I am interning as a QA Developer at <span className="highlighted"><a href="https://www.thescore.com/" target="_blank">theScore</a></span> and as a Software Engineer at <span className="highlighted"><a href="https://fibrainc.ca/">Fibra</a></span>, and completing my Undergrad at <span className="highlighted"><a href="https://yorku.ca/">York University</a></span>.
        </h6></div>
        
        
        <CTA />
        
        <div className="header__socials-container">
  <div className="header__socials">
  <p> <a href="https://www.linkedin.com/in/aradhyas8/" className="header__social">
      <FaLinkedin />
    </a>
    
    <a href="https://github.com/aradhyas8" className="header__social">
      <FaGithub />  ━━━━━━━ 
    </a></p>
  </div>
</div>

        
        
      </div>
      <p className="scroll__down">aradhya@my.yorku.ca ━━━━━━━━━━━</p>
    </header>
  );
};

export default Header;
