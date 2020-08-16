import React from "react";
import CV from "../assets/CV_ALINA_ILINA.pdf";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Work with me</h3>
          <a href="tel:+358465935910">+358465935910</a>
          <a href="mailto:alinailina.random@gmail.com">
            alinailina.random@gmail.com
          </a>
          <a href={CV} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/alinailina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/aiforeach"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <p>© - Alina Ilina, 2020.</p>
    </footer>
  );
};

export default Footer;
