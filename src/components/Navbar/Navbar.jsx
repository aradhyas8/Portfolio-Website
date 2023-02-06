import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
          <span class="digit">01.</span> <span class="text">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">
          <span class="digit">02.</span> <span class="text">About</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">
          <span class="digit">04.</span> <span class="text">Experience</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects" tabindex="-1" aria-disabled="true">
          <span class="digit">05.</span> <span class="text">Projects</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">
          <span class="digit">06.</span> <span class="text">Contact</span>
          </a>
        </li>
      </ul>
      
      
    </div>
  );
};

export default Navbar;
