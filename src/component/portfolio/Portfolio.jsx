import React from 'react';
import './portfolio.css'
import { AiOutlineGithub } from 'react-icons/ai';
import { MdOutlineOpenInNew } from 'react-icons/md'

function Card({ type, date, heading, tags }) {
  return (

    <div className="card">
      <div className="card-info">
        <span className={`card-grad--${type.toLowerCase()}`}>{type}</span>
        <span>{date}</span>
      </div>
      <div className="card-heading">
        <a href={heading.link} target="_blank">{heading.text}</a>
      </div>
      <div className="card-tags">
        {tags.map((tag, i) => (
          <div className="card-tag" key={i}>
            {tag.link ? (
              <a href={tag.link} target="_blank">
                {tag.icon}
              </a>
            ) : (
              tag.icon
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <div className='h5-container'>
        <h5>/portfolio ━━━━━━━</h5>
      </div>
      
      <div className="cards">
        <Card
          type="Face-track Attendance"
          heading={{
            text: 'This program takes facial attendance by detecting and recognizing faces in real-time video from a web camera, and saving the attendance data to a .csv file with a timestamp if a match is found.',
            link: 'https://github.com/aradhyas8/FaceRecognitionAttendaceProject'
          }}
          tags={[
            {
              icon: <AiOutlineGithub />,
              link: 'https://github.com/aradhyas8/FaceRecognitionAttendaceProject'
            }
          ]}
        />
        <Card
          type="Sorting Algorithm Visualizer"
          heading={{
            text: 'A sorting visualizer that implements the Bubble Sort, Insertion Sort, and Selection Sort algorithms and uses array visualization to show the sorting process.',
            link: 'https://github.com/aradhyas8/Sorting-Algorithmn-Visualizer'
          }}
          tags={[
            {
              icon: <AiOutlineGithub />,
              link: 'https://github.com/aradhyas8/Sorting-Algorithmn-Visualizer'
            },
            {
              icon: <MdOutlineOpenInNew />,
              link: 'https://random-link-1.com'
            }
          ]}
        />
        <Card
                   type="Talk-Smart"
                   heading={{
                     text: 'A smart voice assistant that can play music, provide the current time, give information from Wikipedia, tell jokes, and provide the current weather in a given city.',
                     link: 'https://abubakersaeed.netlify.app/designs/d3-radio-buttons'
                   }}
                   tags={[
                     {
                       icon: <AiOutlineGithub />,
                       link: 'https://github.com/aradhyas8/Talk-Smart'
                     }
                   ]}
                 />
                 <Card
                   type="For The Horses"
                   heading={{
                     text: 'Animal rescue app developed for YUHacks 2022. Winner of first prize. Features include search, organization dashboard, adopter matching and messaging.',
                     link: 'https://github.com/aradhyas8/ForTheHorses'
                   }}
                   tags={[
                     {
                       icon: <AiOutlineGithub />,
                       link: 'https://github.com/aradhyas8/ForTheHorses'
                     }
                   ]}
                 />
                 <Card
                   type="Twitter Bot"
                   heading={{
                     text: 'A Personal Twitter Bot that when mentioned unrolls and replies to tweets. Built using the Twitter API and tweepy library.',
                     link: ''
                   }}
                   tags={[
                     {
                       icon: <AiOutlineGithub />,
                       link: 'https://github.com/aradhyas8/'
                     },
                     {
                       icon: <MdOutlineOpenInNew />,
                       link: 'https://github.com/aradhyas8/'
                     }
                   ]}
                 />
                 <Card
        type="Data Visualizer"
        heading={{
          text: 'Developed for EECS 3311 at York University, Fall 2022. Fetches data from World Bank API, analyzes and shows data in visual format.',
          link: 'https://github.com/aradhyas8/World-Bank-Analysis'
        }}
        tags={[
          {
            icon: <AiOutlineGithub />,
            link: 'https://github.com/aradhyas8/World-Bank-Analysis'
          }
        ]}
      />
               </div>
               
             </section>
           );
         }
export default Portfolio         
