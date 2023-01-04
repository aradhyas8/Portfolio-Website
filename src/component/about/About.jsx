import React from 'react'
import './About.css'
import {VscDebugStart} from 'react-icons/vsc'

export const About = () => {
  return (
    <section id='about'>
      <div className='h5-container'>
        <h5>/about me ━━━━━━━</h5>
      </div>
      <div className='container about__container'>
        <div className="about__me">
        <p>
          My name is Aradhya Singh. I love building and automating things. Working as a Software Engineer Intern at Fibra and QA Developer Intern at theScore has allowed me to explore more technologies and learn things. I have worked in the areas of backend and automation. I have always been intrigued by AI and am learning to build things around it. 
        </p>
        </div>
        
        <div className='h6-container'>
          <h6>Here are few technologies I am tinkering with:</h6>
        </div>
        <div className='skills-container'>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> Java
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> Python
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> Javascript
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> React
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> Node.js
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> Selenium
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> SQL
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> REST APIs
          </div>
          <div className='skills-item'>
            <VscDebugStart color='#0094FA' /> AI/ML
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
