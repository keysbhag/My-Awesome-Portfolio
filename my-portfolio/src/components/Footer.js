import React from "react";
import "../styles/Footer.css";


// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-center footer">
      <a href="https://github.com/keysbhag">
        <h1>
          <i className="fab fa-github github"></i>
        </h1>
      </a>
      <a href="https://www.linkedin.com/in/keyshawn-bhagwandin-460341211/">
        <h1>
          <i class="fab fa-linkedin"></i>
        </h1>
      </a>
      <a href="https://www.youtube.com/channel/UCeJKhBiYYpNiGKJS2BW2qiA">
        <h1>
          <i class="fab fa-youtube youtube"></i>
        </h1>
      </a>
    </div>
  );
}

export default Footer;
