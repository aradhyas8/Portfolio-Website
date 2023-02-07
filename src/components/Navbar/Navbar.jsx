import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul class="nav justify-content-end navi-list">
        <li class="nav-item">
          <a class="nav-link active navi-top" aria-current="page" href="#home-page">
          <span class="digit">01.</span> <span class="text">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link navi-top" href="#about">
          <span class="digit">02.</span> <span class="text">About</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link navi-top" href="#experience">
          <span class="digit">03.</span> <span class="text">Experience</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link navi-top" href="#projects" tabindex="-1" aria-disabled="true">
          <span class="digit">04.</span> <span class="text">Projects</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link navi-top" href="#contact" tabindex="-1" aria-disabled="true">
          <span class="digit">05.</span> <span class="text">Contact</span>
          </a>
        </li>
      </ul>
      
      
    </div>
  );
};

export default Navbar;
