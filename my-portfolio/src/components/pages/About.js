import React from "react";
import '../../styles/About.css'
import headshot from '../../images/portfolioAboutpic.jpg'
import pic from '../../images/html_css_js.png'
// import pic2 from '../../images/.png'


export default function About() {

  return (
    <div className="about-main">
      <h1 className="text-center p-3 about-head">ABOUT</h1>
      <div className="d-flex about-container">
        <div className="headshot flex-fill d-flex justify-content-center mt-3 animate__animated animate__backInLeft">
          <img src={headshot} alt="Keyshawn" height="600"></img>
        </div>
        <div className="d-flex flex-column justify-content-around ">
          <div className="about-info d-flex flex-wrap justify-content-center mt-3 animate__animated animate__backInDown">
            My name is Keyshawn Bhagwandin. I am a 25 year old young
            professional Full Stack developer currently residing in the GTA. I
            am very passionate about coding and web development. I love
            developing functional projects, responsive web applications, and
            practical software’s. Some of the technologies I have become very
            skilled in include HTML, CSS, JavaScript, Node.JS, MongoDB, React.JS, MySQL, and Express.JS. I am dedicated
            to my craft and work to keep build on my already high level skills
            in programming and coding languages. Please check out my projects that I have worked on in the portfolio section of this page.
            
          </div>
          <div className="d-flex justify-content-between techs mt-5 animate__animated animate__backInRight">
            <div className="mx-2">
              <h3> Technologies: </h3>
              <ul className="">
                <li>HTML, CSS, JavaScript</li>
                <li>Node.JS</li>
                <li>Express.JS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>React.JS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="d-flex flex-wrap align-items-center mx-2">
              <i className="devicon-html5-plain colored icon"></i>
              <i className="devicon-css3-plain colored icon"></i>
              <i className="devicon-javascript-plain colored icon"></i>
              <i className="devicon-nodejs-plain colored icon"></i>
              <i className="devicon-express-original colored icon"></i>
              <i className="devicon-mysql-plain icon"></i>
              <i className="devicon-react-original-wordmark colored icon"></i>
              <i className="devicon-mongodb-plain colored icon"></i>
              <i className="devicon-bootstrap-plain-wordmark colored icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
