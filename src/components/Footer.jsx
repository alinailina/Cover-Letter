import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          {" "}
          <h3>Drop me a line</h3>
          <p>I'd love to hear from you </p>
        </div>
      </div>
      <div>
        <div>
          {" "}
          <a href="tel:+358465935910">
            <span>T.</span> +358465935910
          </a>
          <a href="mailto:ai.foreach@gmail.com">
            <span>E.</span> ai.foreach@gmail.com
          </a>{" "}
          <a href="/">
            <span>
              <img
                src={require("../assets/download.svg")}
                alt="download-icon"
              />
            </span>{" "}
            Download CV
          </a>
        </div>
      </div>
      <div>
        <div>
          {" "}
          <a
            href="https://www.linkedin.com/in/alinailina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://twitter.com/icode_ergosum"
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
        <p>© - ai, 2020.</p>
      </div>
    </footer>
  );
};

export default Footer;
