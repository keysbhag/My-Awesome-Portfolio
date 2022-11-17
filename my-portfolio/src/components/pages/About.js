import React from "react";
import '../../styles/About.css'
import headshot from '../../images/portfolioAboutpic.jpg'

export default function About() {
  return (
    <div>
      <h1 className="text-center p-3">About</h1>
      <div className="d-flex about-container">
        <div className="flex-fill headshot">
          <img src={headshot} alt="Keyshawn" height="500"></img>
        </div>
        <div className="flex-fill about-info">
          My name is Keyshawn Bhagwandin. I am a 25 year old young professional
          Full Stack developer currently residing in the GTA. I am very
          passionate about coding and web development. I love developing
          functional projects, responsive web applications, and practical
          software’s. Some of the technologies I have become very skilled in
          include JavaScript, MySQL, and Express.JS. I am dedicated to my craft and work
          to keep build on my already high level skills in programming and
          coding languages.
        </div>
        <div className="flex-fill">
          <h3> Technologies: </h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Node.JS</li>
            <li>Express.JS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>React.JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
