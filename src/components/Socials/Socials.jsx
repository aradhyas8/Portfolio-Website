import React from "react";
import './socials.scss'
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://linkedin.com/aradhyas8" data-aos="fade-up">
        <FiLinkedin />
      </a>
      <a href="https://github.com/aradhyas8" data-aos="fade-up">
        <FiGithub />
      </a>
      <a href="mailto:aradhya@my.yorku.ca" data-aos="fade-up">
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default Socials;
