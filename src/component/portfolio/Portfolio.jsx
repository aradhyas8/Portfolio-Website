import React from 'react'
import './portfolio.css'
import {GoMarkGithub} from 'react-icons/go'
import {BiSlideshow} from 'react-icons/bi'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='h5-container'>
        <h5>/portfolio ━━━━━━━</h5>
      </div>
      <div class="container">
        <div class="projects-list">
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>Face-Track Attendance</h2>
              <a href="https://github.com/aradhyas8/FaceRecognitionAttendaceProject">
                <GoMarkGithub />
              </a>
            </div>
            <p>This program takes facial attendance by detecting and recognizing faces in real-time video from a web camera, and saving the attendance data to a .csv file with a timestamp if a match is found.</p>
            <p class="project-tools">Python, openCV</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>For The Horses</h2>
              <a href="https://github.com/aradhyas8/ForTheHorses">
                <GoMarkGithub />
              </a>
            </div>
            <p>Animal rescue app developed for YUHacks 2022. Winner of first prize. Features include search, organization dashboard, adopter matching and messaging.</p>
            <p class="project-tools">JAVASCRIPT, NODE.JS, EXPRESS.JS</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>Talk-Smart</h2>
              <a href="https://github.com/aradhyas8/speech_assistant">
                <GoMarkGithub />
              </a>
              <a href="https://github.com/aradhyas8/speech_assistant">
                <BiSlideshow />
              </a>
            </div>
            <p>A smart voice assistant that can play music, provide the current time, give information from Wikipedia, tell jokes, and provide the current weather in a given city.</p>
            <p class="project-tools">PYTHON, pyttsx3, speech_recognition</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>Sorting Algorithm Visualizer</h2>
              <a href="https://github.com/aradhyas8/Sorting-Algorithmn-Visualizer">
                <GoMarkGithub />
              </a>
              <a href="https://aradhyas8.github.io/Sorting-Algorithmn-Visualizer/">
                <BiSlideshow />
              </a>
            </div>
            <p> A sorting visualizer that implements the Bubble Sort, Insertion Sort, and Selection Sort algorithms and uses array visualization to show the sorting process.</p>
            <p class="project-tools">JAVASCRIPT, REACT</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>World Bank Data Analysis</h2>
              <a href="https://github.com/aradhyas8/World-Bank-Analysis">
                <GoMarkGithub />
              </a>
            </div>
            <p>Developed for EECS 3311 at York University, Fall 2022. Fetches data from World Bank API, analyzes and shows data in visual format.</p>
            <p class="project-tools">JAVA, REST API</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>Vending Machine</h2>
              <a href="https://github.com/aradhyas8/Vending-Machine">
                <GoMarkGithub />
              </a>
            </div>
            <p>A Vending Machine developed using various Object-Oriented Design Patterns.</p>
            <p class="project-tools">JAVA</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>Twitter Bot</h2>
              <a href="github.com/aradhyas8">
                <GoMarkGithub />
              </a>
            </div>
            <p>A Personal Twitter Bot that when mentioned unrolls and replies to tweets. Built using the Twitter API and tweepy library.</p>
            <p class="project-tools">PYTHON, TWITTER API, TWEEPY</p>
          </div>
          <div class="project">
            <i class="fas fa-code"></i>
            <div class="project-name-icons">
              <h2>Instagram Bot</h2>
              <a href="https://github.com/aradhyas8/Instagram_bot">
                <GoMarkGithub />
              </a>
            </div>
            <p>An instagram bot that enages in fundamental functions like liking, sharing, following, commenting and posting.</p>
            <p class="project-tools">PYTHON, SELENIUM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Portfolio
