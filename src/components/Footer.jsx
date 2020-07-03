import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="title">
        <div>
          {" "}
          <h3>a &mdash; i</h3>{" "}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="contacts">
        <div>
          {" "}
          <a href="tel:+358465935910">
            <span>T.</span> +358465935910
          </a>
          <a href="mailto:alinailina.random@gmail.com">
            <span>E.</span> alinailina.random@gmail.com
          </a>{" "}
          <a href="/">
            <span>
              <img
                src={require("../assets/download.png")}
                alt="download-icon"
              />
            </span>{" "}
            Download CV
          </a>
        </div>
      </div>

      <div className="links">
        <div>
          {" "}
          <a
            href="https://www.linkedin.com/in/alinailina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>/</span>Linkedin
          </a>
          <a
            href="https://twitter.com/icode_ergosum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>/</span>Twitter
          </a>
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>/</span>Github
          </a>
        </div>
        <p>© - a &mdash; i, 2020.</p>
      </div>
    </footer>
  );
};

export default Footer;
