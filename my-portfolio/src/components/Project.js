import React from "react";
import "../styles/Project.css";
import findflix from '../images/FindFlix.png';
import foodcity from '../images/FoodCityGrocery.png';
import techblog from '../images/TechBlog.png';
import sixauto from '../images/sixauto.png';
import weather from '../images/WeatherApp.png';
import texteditor from '../images/TextEditor.png';

const projects = [
  {
    id: 1,
    src: findflix,
    name: "FindFlix",
    github: "https://github.com/keysbhag/FindFlix-Project",
    url: "https://keysbhag.github.io/FindFlix-Project/",
    stack: "HTML, CSS, Java Script, Web API's",
  },
  {
    id: 2,
    src: foodcity,
    name: "Food City",
    github: "https://github.com/keysbhag/Food-City-Grocery",
    url: "https://food-city-grocery.herokuapp.com/",
    stack: "Node.JS, Express.JS, MySQL, Handlebars.JS",
  },
  {
    id: 3,
    src: sixauto,
    name: "6ix Auto",
    github: "https://github.com/keysbhag/6ixAuto",
    url: "https://express-note-taking-app-bykeys.herokuapp.com/",
    stack: "MERN (MongoDB, Express.JS, React.JS, Node.JS",
  },
  {
    id: 4,
    src: techblog,
    name: "Tech Blog",
    github: "https://github.com/keysbhag/Keys-Tech-Blog",
    url: "https://keys-tech-blog.herokuapp.com/",
    stack: "Node.JS, Express.JS, MySQL, Handlebars.JS",
  },
  {
    id: 5,
    src: weather,
    name: "Weather Application",
    github: "https://github.com/keysbhag/Weather-Application",
    url: "https://keysbhag.github.io/Weather-Application/",
    stack: "JavaScript, CSS, HTML, Web API's",
  },
  {
    id: 6,
    src: texteditor,
    name: "Text Editor",
    github: "https://github.com/keysbhag/PWA-Text-Editor",
    url: "https://pwa-text-editor1232.herokuapp.com/",
    stack: "Node.JS, Express.JS, PWA'S, Service Workers, IndexedDB ",
  },
];


function Project() {
  return (
    <div className="d-flex align-items-center justify-content-around flex-wrap">
      {projects.map((project) => (
        <div className="d-flex flex-column">
          <div className="project" key={project.id}>
            <a href={project.url} target="blank" className="example">
              <img
                src={project.src}
                alt={project.name}
                width="450"
                height="400"
              ></img>
              <div class="content">
                <h2 className="text"> {project.name} <p className="descr"> {project.stack}</p> </h2>
              </div>
            </a>
          </div>
          <h4 className="git-repo m-3"> Github Repo: <a href={project.github} className="mx-2"> {project.name} </a> </h4>
        </div>
      ))}
    </div>
  );
}

export default Project;
