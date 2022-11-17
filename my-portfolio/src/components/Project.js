import React from "react";
import "../styles/Project.css";
import findflix from '../images/FindFlix.png';
import foodcity from '../images/FoodCityGrocery.png';


const projects = [
  {
    id: 1,
    src: findflix,
    name: "FindFlix",
    url: "https://keysbhag.github.io/FindFlix-Project/",
    stack: "HTML, CSS, Java Script, Web API's"
  },
  {
    id: 2,
    src: foodcity,
    name: "Food City",
    url: "https://food-city-grocery.herokuapp.com/",
    stack: 'Node, Express, MySQL, Handlebars'
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
