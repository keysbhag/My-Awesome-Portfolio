import React from "react";
import resume from '../../images/resumePlaceHolder.png';
import dlRes from '../../assets/resume.pdf'
import  '../../styles/Resume.css'

export default function Resume() {
  return (
    <div className="pb-5 text-white">
      <h1 className="text-center p-3 resume-head">RESUME</h1>
      <h3 className="text-center p-1">
        Please click on the image to see my Resume!
      </h3>
      <div className="d-flex justify-content-center">
        <a
          className="resume-link"
          href={dlRes}
          download="Keyshawn Bhagwandin's Resume"
        >
          <img src={resume} alt="Resume Place Holder"></img>
        </a>
      </div>
    </div>
  );
}
