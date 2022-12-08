import React from "react";
import "../styles/Footer.css";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";


// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-center footer">
      <a href="https://github.com/keysbhag">
        <h1 className="github">
          <BsGithub/>
        </h1>
      </a>
      <a href="https://www.linkedin.com/in/keyshawn-bhagwandin-460341211/">
        <h1 className="linkedin">
          <BsLinkedin/>
        </h1>
      </a>
      <a href="https://www.youtube.com/channel/UCeJKhBiYYpNiGKJS2BW2qiA">
        <h1 className="youtube">
          <BsYoutube/>
        </h1>
      </a>
    </div>
  );
}

export default Footer;
