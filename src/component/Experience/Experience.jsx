import React, { useState } from 'react';
import './experience.css';
import {VscDebugStart} from 'react-icons/vsc'


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
  <button
    class={`tab-item ${selectedTab === 1 ? 'active' : ''}`}
    onClick={(event) => handleTabClick(event, 1)}
  >
   theScore
  </button>
  <button
    class={`tab-item ${selectedTab === 2 ? 'active' : ''}`}
    onClick={(event) => handleTabClick(event, 2)}
  >
    Fibra 
  </button>
  <button
    class={`tab-item ${selectedTab === 3 ? 'active' : ''}`}
    onClick={(event) => handleTabClick(event, 3)}
  >
    CIBC 
  </button>
  <button
    class={`tab-item ${selectedTab === 4 ? 'active' : ''}`}
    onClick={(event) => handleTabClick(event, 4)}
  >
    csHUB 
  </button>
  <button
    class={`tab-item ${selectedTab === 5 ? 'active' : ''}`}
    onClick={(event) => handleTabClick(event, 5)}
  >
    York U 
  </button>
</ul>

          
          <div class="tab-content">
  <div className="h2-wrapper1">
    <h2>
      {selectedTab === 1 && "QA Developer/Analyst Intern"}
      {selectedTab === 2 && "Software Engineer Intern (Part - time)"}
      {selectedTab === 3 && "Intermediate Business Analyst"}
      {selectedTab === 4 && "Backend Developer"}
      {selectedTab === 5 && "Global Student Mentor @ York International"}
    </h2>
  </div>
  <div className="dates">
    {selectedTab === 1 && "January 2023 - Present"}
    {selectedTab === 2 && "September 2022 - Present"}
    {selectedTab === 3 && "January 2023 - Present"}
    {selectedTab === 4 && "November 2022 - Present"}
    {selectedTab === 5 && "January 2023 - Present"}
  </div>
  <div className="description">
  {selectedTab === 1 && (
    <ul>
      <li>
        <VscDebugStart className="debug-icon" color="#0094FA" />
        Upcoming
      </li>
    </ul>
  )}
 {selectedTab === 2 && (
    <ul>
      <li>
        <VscDebugStart className="debug-icon" color="#0094FA" />
        Upcoming
      </li>
    </ul>
  )}


  {selectedTab === 3 && (
    <ul>
      <li>
        <VscDebugStart className="debug-icon" color="#0094FA" />
        Reviewing confirmed fraud claims using internal fraud systems and policies to minimize losses and mitigate fraud for CIBC and Simplii Financial
      </li>
      <li><VscDebugStart className="debug-icon" color="#0094FA" />
      Sorting and assigning incoming fraud claims by type and mark appropriate transactions as fraud, uploading to SharePoint for assignment</li>
      <li><VscDebugStart className="debug-icon" color="#0094FA" />
      Deploying correct fraud information into databases, work with internal and external partners to complete investigations and reach resolution, and gather required information on suspected fraud activities with CIBC employees</li>
    </ul>
  )}
  {selectedTab === 4 && (
    <ul>
      <p>As a member of the CSHub club, I am contributing to develop the backend of our merch store. Tasks include :</p>
      <li> <VscDebugStart className="debug-icon" color="#0094FA" /> Setting up a database and integrating with payment gateways to streamline the checkout process</li>
      <li> <VscDebugStart className="debug-icon" color="#0094FA" /> Building APIs and implementing SSL certificates to ensure the security and confidentiality of our customers' data</li>
      <li> <VscDebugStart className="debug-icon" color="#0094FA" /> Monitoring performance and implementing backup systems to guarantee the reliability of the platform for our users.</li>
    </ul>
  )}
  {selectedTab === 5 && <ul>
      <li>
        <VscDebugStart className="debug-icon" color="#0094FA" />
        Mentoring 10 students from Lassonde and guiding them for EECS assignments, choosing courses, and having a smooth transition in the university system throughout the year.
      </li>
      <li>
        <VscDebugStart className="debug-icon" color="#0094FA" /> 
        Facilitating when a student may be experiencing difficulties and developing a plan of support with the guidance of Student Support Staff.
      </li>
    </ul> }
  
</div>

</div>
      </div>
    </section>
  );
};


export default Experience;
