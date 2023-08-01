import React from "react";
import "./projects.scss";
import { FiFolder } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { RiShareCircleLine } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  return (
    <section>
      <div className="container card-container" id="projects">
        <div className="proj-header">
          <h1 data-aos="fade-up">/Projects</h1>
        </div>
        <div class="card-deck">
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/FaceRecognitionAttendaceProject">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Face Track Attendance</h5>
              <p class="card-text">
                This program records facial attendance by detecting and
                recognizing faces in real-time video and saving the data to a
                .csv file with a timestamp.
              </p>
            </div>
            <div class="card-footer">Python, openCV</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/Sorting-Algorithmn-Visualizer">
                  <FiGithub />
                </a>
                <a
                  href="https://aradhyas8.github.io/Sorting-Algorithmn-Visualizer/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Sorting Algorithm Visualizer</h5>
              <p class="card-text">
                A sorting visualizer displaying Bubble, Insertion, and Selection
                Sort algorithms with array visualization.
              </p>
            </div>
            <div class="card-footer">Javascript, React.js</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/speech_assistant">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Talk-Smart</h5>
              <p class="card-text">
                A voice assistant with multiple functionalities including music
                playback, timekeeping, Wikipedia information, joke-telling, and
                weather updates.
              </p>
            </div>
            <div class="card-footer">Python</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/ForTheHorses">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">For The Horses</h5>
              <p class="card-text">
                Animal rescue app that won first prize at YUHacks 2022 with
                search, dashboard, adopter matching and messaging features.
              </p>
            </div>
            <div class="card-footer">Javascript, Node.js, React.js</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/csHUB-LHD-Website">
                  <FiGithub />
                </a>
                <a
                  href="https://cshublhd.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiShareCircleLine />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">CS HUB: Local Hack Day</h5>
              <p class="card-text">
                Designed and Developed the CS HUB: Local Hack Day 2023 Website.
              </p>
            </div>
            <div class="card-footer">Javascript, Bootstrap, React.js</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/World-Bank-Analysis">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Data Visualizer</h5>
              <p class="card-text">
                EECS 3311 project for York University in Fall 2022 analyzing
                World Bank API data in visual format.
              </p>
            </div>
            <div class="card-footer">Java, REST APIs, Java Swing</div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/Personal-Website-Template">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">yuHacks Website</h5>
              <p class="card-text">
                Developed a fullstack website for yuHacks : 2023.
              </p>
            </div>
            <div class="card-footer">
              Typescript, Next.js, Tailwind CSS, Node.js, GraphQL, Express,
              MongoDB
            </div>
          </div>
          <div class="card" data-aos="fade-up">
            <div class="card-header">
              <div className="folder">
                <FiFolder />
              </div>
              <div className="git-share">
                <a href="https://github.com/aradhyas8/API-Generator">
                  <FiGithub />
                </a>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">API Generator</h5>
              <p class="card-text">
                A Web-app that allows you build personalized APIs with API
                endpoint customization.
              </p>
            </div>
            <div class="card-footer">
              Javascript, Node.js, Mongo DB, GraphQL, Express.js, React,
              Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
