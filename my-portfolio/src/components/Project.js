import React from "react";
import "../styles/Header.css";


const projects = [
  {
    id: 1,
    src: "FindFlix.png",
    name: "FindFlix picture",
  },
  {
    id: 2,
    src: "FoodCityGrocery.png",
    name: "Food City picture",
  },
];


function Project() {
  return (

    <div className="d-flex align-items-center justify-content-center">
      {projects.map((project) => (
        <div className="" key={project.id}>
          <img src='../images/FindFlix.png' alt={project.name}></img>
        </div>
      ))}
    </div>
  );
}

export default Project;
