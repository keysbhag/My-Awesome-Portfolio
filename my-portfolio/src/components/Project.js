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
  },
  {
    id: 2,
    src: foodcity,
    name: "Food City",
    url: "https://food-city-grocery.herokuapp.com/",
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
              <h4 className="text"> {project.name} </h4>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Project;
