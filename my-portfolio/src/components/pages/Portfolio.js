import React from "react";
import Project from '../Project';

export default function Portfolio() {
  setTimeout(function () {
    window.scrollTo(0, 500);
  }, 100);
  return (
    <div className="text-white">
      <h1 className="text-center p-3">Portfolio</h1>
      <Project/>
    </div>
  );
}
