import React from "react";
import "../styles/Project.css";
import findflix from '../images/FindFlix.png';
import foodcity from '../images/FoodCityGrocery.png';
import techblog from '../images/TechBlog.png';
import notetaker from '../images/NoteTaker.png';
import weather from '../images/WeatherApp.png';
import texteditor from '../images/TextEditor.png';

const projects = [
  {
    id: 1,
    src: findflix,
    name: "FindFlix",
    url: "https://keysbhag.github.io/FindFlix-Project/",
    stack: "HTML, CSS, Java Script, Web API's",
  },
  {
    id: 2,
    src: foodcity,
    name: "Food City",
    url: "https://food-city-grocery.herokuapp.com/",
    stack: "Node.JS, Express.JS, MySQL, Handlebars.JS",
  },
  {
    id: 3,
    src: techblog,
    name: "Tech Blog",
    url: "https://keys-tech-blog.herokuapp.com/",
    stack: "Node.JS, Express.JS, MySQL, Handlebars.JS",
  },
  {
    id: 4,
    src: notetaker,
    name: "Note Taker",
    url: "https://express-note-taking-app-bykeys.herokuapp.com/",
    stack: "Node.JS, Express.JS, JavaScript, CSS, HTML",
  },
  {
    id: 5,
    src: weather,
    name: "Weather Application",
    url: "https://keysbhag.github.io/Weather-Application/",
    stack: "JavaScript, CSS, HTML, Web API's",
  },
  {
    id: 6,
    src: texteditor,
    name: "Text Editor",
    url: "https://pwa-text-editor1232.herokuapp.com/",
    stack: "Node.JS, Express.JS, PWA'S, Service Workers, IndexedDB ",
  },
];


function Project() {
  return (
    <div className="d-flex align-items-center justify-content-around flex-wrap">
      {projects.map((project) => (
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
      ))}
    </div>
  );
}

export default Project;
