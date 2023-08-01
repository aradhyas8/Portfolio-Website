import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Aradhya_Singh_Website from "../../assets/Aradhya_Singh_Website.pdf";
import "./header.scss";
import Socials from "../Socials/Socials";
import Aos from "aos";
import "aos/dist/aos.css";

export const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 50,
    });
    new Typewriter(headingRef.current, {
      loop: false,
      cursor: "|",
    })
      .pauseFor(50)
      .typeString("hi, I am ")
      .typeString('<span style="color: #64ffda;">Aradhya.</span>')
      .start();
  }, []);

  return (
    <section id="home-page">
      <div className="parent landing-par ">
        <div className="container landing-page">
          <div className="header-page">
            <div className="row header-title">
              <h1 ref={headingRef} />
            </div>
            <div className="row header-two" data-aos="fade-up">
              <h2>I like to solve problems.</h2>
            </div>
            <div className="row landing-description" data-aos="fade-up">
              <p>
                As a programmer extraordinaire, I juggle two roles: slaying bugs
                as an intern QA Developer at{" "}
                <a className="work-link" href="https://www.thescore.com/">
                  theScore
                </a>{" "}
                and weaving code magic as a Software Developer at{" "}
                <a className="work-link" href="https://fibrainc.ca//">
                  Fibra
                </a>
                , Software development is my playground, and I'm always hungry for new
                challenges to devour. Let's team up and code the world into a
                better place! 🚀
              </p>
            </div>
            <div className="resume-btn" data-aos="fade-up">
              <button
                class="btn btn-outline-primary btn-lg resume-tag"
                data-aos="fade-up"
              >
                <a href={Aradhya_Singh_Website}>Resume</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
