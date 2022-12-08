import React from "react";
import Project from '../Project';
import '../../styles/Portfolio.css'

export default function Portfolio() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);
  return (
    <div className="text-white">
      <h1 className="text-center p-3 project-head">PORTFOLIO</h1>
      <Project/>
    </div>
  );
}
