import React, { useState } from 'react';
import './experience.css';
import {VscDebugStart} from 'react-icons/vsc'
import  THESCORE from '../../assets/theScore.jpg'
import YORKU from '../../assets/Yorku.png'
import CIBC from '../../assets/cibc.png'
import CSHUB from '../../assets/cshub.jpg'


export const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (event, tabIndex) => {
    event.preventDefault();
    setSelectedTab(tabIndex);
  };

  return (
    <section id="experience">
      <div className='h5-container'>
        <h5>/experience ━━━━━━━</h5>
      </div>
      <div class="tabs">
        <ul class="tab-list">
          <li
            class={`tab-item ${selectedTab === 1 ? 'active' : ''}`}
            onClick={(event) => handleTabClick(event, 1)}
          >
           <img src={THESCORE}className="company-logo" /><p>  theScore </p> 
          </li>
          <li
            class={`tab-item ${selectedTab === 2 ? 'active' : ''}`}
            onClick={(event) => handleTabClick(event, 2)}
          >
           <img src={YORKU} className="company-logo" /> York U 
          </li>
          <li
            class={`tab-item ${selectedTab === 3 ? 'active' : ''}`}
            onClick={(event) => handleTabClick(event, 3)}
          >
           <img src={CIBC} className="company-logo" /> CIBC 
          </li>
          <li
            class={`tab-item ${selectedTab === 4 ? 'active' : ''}`}
            onClick={(event) => handleTabClick(event, 4)}
          >
           <img src={CSHUB} className="company-logo-cshub" /> csHUB 
          </li>
        </ul>
        <div class="tab-content">
          {selectedTab === 1 && (
            <div>
              <h2>QA Developer/Analyst Co-op</h2>
              <p>Upcoming</p>
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <h2>Global Student Mentor @ York International</h2>
              <ul>
                <li>
                <VscDebugStart color='#0094FA' /> Mentoring 10 students from Lassonde and guiding them for EECS assignments, choosing courses, and having a smooth transition in the university system throughout the year.
                </li>
                <li>
                <VscDebugStart color='#0094FA' /> Facilitating when a student may be experiencing difficulties and developing a plan of support with the guidance of Student Support Staff.
                </li>
              </ul>
            </div>
          )}
          {selectedTab === 3 && (
            <div>
              <h2>Intermediate Business Analyst</h2>
              <ul>
                <li>
                <VscDebugStart color='#0094FA' /> Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial
                </li>
                <li>
                <VscDebugStart color='#0094FA' /> Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment
                </li>
                <li>
                <VscDebugStart color='#0094FA' /> Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees
                </li>
              </ul>
            </div>
          )}
          {selectedTab === 4 && (
            <div>
              <h2>Backend Developer</h2>
              <ul>
                <li><VscDebugStart color='#0094FA' /> Developing and maintaining server-side logic and infrastructure for the merch store, including setting up a database, integrating with payment gateways, and building APIs.</li>
                <li><VscDebugStart color='#0094FA' /> Ensuring the security and stability of the e-commerce platform by implementing SSL certificates, setting up backup systems, and monitoring performance. Collaborated with team members to implement new features and functionality.</li>
              </ul>
            </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
