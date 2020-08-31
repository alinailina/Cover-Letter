import React from "react";
import CV from "../assets/CV_ALINAILINA.pdf";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Work with me</h3>
          <a href="tel:+358465935910">T. +358465935910</a>
          <a href="mailto:alinailina.random@gmail.com">
            E. alinailina.random@gmail.com
          </a>
          <p>A. Helsinki, Finland</p>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/alinailina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../assets/linkedin.svg")} alt="linkedin" />
          </a>
          <a
            href="https://medium.com/@alinailina.random"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../assets/medium.svg")} alt="medium" />
          </a>
          <a
            href="https://twitter.com/alinaimagineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../assets/twitter.svg")} alt="twitter" />
          </a>
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../assets/github.svg")} alt="github" />
          </a>
        </div>
      </div>
      <p>© Alina Ilina, 2020.</p>
    </footer>
  );
};

export default Footer;
