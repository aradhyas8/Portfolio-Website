import React from "react";
import "./experiencemob.scss";
import yorku from "../../assets/yorku.jpg";
import cshub from '../../assets/cshub.png'
import cibc from '../../assets/cibc.png'
import fibra from '../../assets/fibra.jpg'
import score from '../../assets/score.png'
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceMob = () => {
  return (
    <section id="experience">
    <div className="container exp-mob">
      <div className="exp-header">
        <h1 data-aos="fade-up">/Experience</h1>
      </div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item" data-aos="fade-left">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Fibra
              <img className="exp-logo-white" src={fibra}></img>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div className="role-title" data-aos="fade-up">
                <p>
                  Software Developer @ <a href="https://fibrainc.ca/">Fibra</a>
                </p>
              </div>
              <div className="role-time" data-aos="fade-up">
                <p>January 2023-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li  data-aos="fade-up">
                    Developing the Fibra app using Node.js and MongoDB for the
                    backend and React Native for the front end.
                  </li>
                  <li  data-aos="fade-up">
                    Utilizing Firebase for real-time data synchronization and
                    user authentication in the Fibra app.
                  </li>
                  <li  data-aos="fade-up">
                    Collaborating with a team to create a seamless and efficient
                    user experience for the Fibra app through the implementation
                    of various technologies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-aos="fade-right">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              theScore
              <img src={score}></img>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <div className="role-time">
                <p>January 2023-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>Upcoming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-aos="fade-left">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              CIBC
              <img className="exp-logo-white" src={cibc}></img>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <div className="role-title">
                <p>
                  Intermediate Business Analyst @{" "}
                  <a href="https://www.cibc.com/en/personal-banking.html">
                    CIBC
                  </a>
                </p>
              </div>
              <div className="role-time">
                <p>January 2023-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>
                    Reviewing confirmed fraud claims using internal fraud
                    systems and policies to minimize losses and mitigate fraud
                    for CIBC and Simplii Financial
                  </li>
                  <li>
                    Sorting and assigning incoming fraud claims by type and mark
                    appropriate transactions as fraud, uploading to SharePoint
                    for assignment
                  </li>
                  <li>
                    Deploying correct fraud information into databases, work
                    with internal and external partners to complete
                    investigations and reach resolution, and gather required
                    information on suspected fraud activities with CIBC
                    employees
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item" data-aos="fade-right">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              CS HUB
              <img src={cshub}></img>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div class="accordion-body">
              <div className="role-title">
                <p>
                  Software Developer @{" "}
                  <a href="https://www.cshub.tech/">CS HUB</a>
                </p>
              </div>
              <div className="role-time">
                <p>October 2022-Present</p>
              </div>
              <div className="role-description">
                <p>
                  As a Software Developer at CSHUB, I am contributing in
                  developing the merchandise store, as well as having worked as
                  Web Developer Lead designing and building the Local Hack Day
                  website.
                </p>
                <ul>
                  <li>
                  Designing and developing the backend architecture for the merch store, usingSpringBoot to create robust and scalable APIs and DAO layer.
                  </li>
                  <li>
                  Implemented complex business logic and optimized database queries to improve API performance, resulting in a 20% reduction in response time.
                  </li>
                  <li>
                  Utilized AWS and Docker to automate the deployment and scaling of the backend infrastructure, reducing deployment time by 50% and increasing system uptime.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item" data-aos="fade-left">
          <h2 class="accordion-header" id="panelsStayOpen-headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              York University
              <img src={yorku}></img>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div class="accordion-body">
              <div className="role-title">
                <p>
                  Student Mentor @{" "}
                  <a href="https://yorkinternational.yorku.ca/">
                    York International
                  </a>
                </p>
              </div>
              <div className="role-time">
                <p>September 2022-Present</p>
              </div>
              <div className="role-description">
                <ul>
                  <li>
                    Mentoring students from Lassonde and guiding them for EECS
                    assignments, choosing courses, and having a smooth
                    transition in the university system throughout the year.
                  </li>
                  <li>
                    Facilitating when a student may be experiencing difficulties
                    and developing a plan of support with the guidance of
                    Student Support Staff.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ExperienceMob;
