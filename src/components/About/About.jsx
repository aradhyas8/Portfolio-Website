import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.scss";

export const About = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section>
      <div className="container about" id="about">
        <div className="row">
          <div className="about-header" data-aos="fade-up">
            <h1>/About me</h1>
          </div>
        </div>
        <div className="row about-description" data-aos="fade-up">
          <p>
            Hello, my name is Aradhya Singh. I have a passion for software
            development . I am currently a QA Analyst at{" "}
            <a className="work-link" href="https://www.thescore.com/">
              theScore
            </a>{" "}
            and a Software Developer at{" "}
            <a className="work-link" href="https://fibra.io/">
              Fibra
            </a>
            . In my free time, I contribute as a backend developer at{" "}
            <a className="work-link" href="https://cshub.ca/">
              CS HUB
            </a>{" "}
            at{" "}
            <a className="work-link" href="https://www.yorku.ca/">
              York University
            </a>
            , where I am in my third year of studies.
          </p>
        </div>
        <div className="row about-description" >
          <p data-aos="fade-up">Here are few technologies I am tinkering with:</p>
        </div>
        <ul className="skills">
          <li className="custom-list-item" data-aos="fade-up">
            Java
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            Javascript
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            Springboot
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            React.js
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            REST APIs
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            Node.js
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            GraphQL
          </li>
          <li className="custom-list-item" data-aos="fade-up">
            SQL
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
