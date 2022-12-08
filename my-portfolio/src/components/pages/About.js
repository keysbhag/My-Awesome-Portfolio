import React from "react";
import '../../styles/About.css'
import headshot from '../../images/portfolioAboutpic.jpg'
import pic from '../../images/codeTemp.jpeg'


export default function About() {

  return (
    <div className="about-main">
      <h1 className="text-center p-3">About</h1>
      <div className="d-flex about-container">
        <div className="headshot flex-fill d-flex justify-content-center mt-3 animate__animated animate__backInLeft">
          <img src={headshot} alt="Keyshawn" height="600"></img>
        </div>
        <div className="d-flex flex-column justify-content-around ">
          <div className="about-info d-flex justify-content-center mt-3 animate__animated animate__backInDown">
            My name is Keyshawn Bhagwandin. I am a 25 year old young
            professional Full Stack developer currently residing in the GTA. I
            am very passionate about coding and web development. I love
            developing functional projects, responsive web applications, and
            practical software’s. Some of the technologies I have become very
            skilled in include JavaScript, MySQL, and Express.JS. I am dedicated
            to my craft and work to keep build on my already high level skills
            in programming and coding languages.
          </div>
          <div className="d-flex justify-content-between techs mt-3 animate__animated animate__backInRight">
            <div>
              <h3> Technologies: </h3>
              <ul className="">
                <li>HTML, CSS, JavaScript</li>
                <li>Node.JS</li>
                <li>Express.JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>React.JS</li>
              </ul>
            </div>
            <div>
              <h3> Pictures: </h3>
              <img src={pic} alt="" width={100}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
