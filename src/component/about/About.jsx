import React from 'react'
import './About.css'
import {VscDebugStart} from 'react-icons/vsc'

export const About = () => {
  return (
    <><section id='about'>
      <div className='h5-container'>
        <h5>/about me ━━━━━━━</h5>
      </div>
      <div className='container about__container'>
        <p>
          As a QA Developer at theScore, I am constantly pushing the boundaries of what is possible in quality assurance.
          When I'm not busy making sure our products are top-notch, you can find me at the CSHub at York University, where I'm always looking for new ways to make an impact.
          With a versatile set of technical skills and a passion for problem-solving, there's no challenge I can't handle.
        </p>
        <div className='h6-container'>
          <h6>Technologies I am tinkering with:</h6>
        </div>
        <div className='skills-container'>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> Java</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> Python</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> Javascript</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> React</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> Node.js</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> Selenium</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> SQL</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> REST APIs</div>
          <div className='skills-item'><VscDebugStart color='#0094FA' /> AI/ML</div>
        </div>
      </div>
    </section></>
  )
}
export default About
