import React from "react";
import resume from '../../images/resumePlaceHolder.png';
import dlRes from '../../assets/resume.pdf'


export default function Resume() {
  return (
    <div>
      <h1 className="text-center p-3">Resume</h1>
      <h3 className="text-center p-1">
        Please click on the image to see my Resume!
      </h3>
      <div className="d-flex justify-content-center">
        <a
          href={dlRes}
          download="Keyshawn Bhagwandin's Resume"
        >
          <img src={resume} alt="Resume Place Holder"></img>{" "}
        </a>
      </div>
    </div>
  );
}
