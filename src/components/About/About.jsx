import React from "react";
import "./about.scss";

export const About = () => {
  return (
        <section id="about">
      <div className="container about">
        <div className="row"><div className="about-header">
          <h1>/About me</h1>
        </div></div>
        
        <div className="row about-description">
          <p>
            Hello, my name is Aradhya Singh. I have a passion for software
            development . I am currently a QA Analyst at{" "}
            <a className="work-link" href="https://www.thescore.com/">theScore</a> and a Software
            Developer at <a className="work-link" href="https://fibra.io/">Fibra</a>. In my free time,
            I contribute as a backend developer at{" "}
            <a className="work-link" href="https://cshub.ca/">CS HUB</a> at{" "}
            <a className="work-link" href="https://www.yorku.ca/">York University</a>, where I am in
            my third year of studies.
          </p>
        </div>
        <div className="row about-description ">
          <p>Here are few technologies I am tinkering with:</p>
        </div>
        <ul className="skills">
          <li className="custom-list-item">Java</li>
          <li className="custom-list-item">Python</li>
          <li className="custom-list-item">Javascript</li>
          <li className="custom-list-item">React.js</li>
          <li className="custom-list-item">Springboot</li>
          <li className="custom-list-item">MySQL</li>
          <li className="custom-list-item">REST APIs</li>
          <li className="custom-list-item">Node.js</li>
</ul>

      </div>
      </section>
   
  );
};
export default About;
