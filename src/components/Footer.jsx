import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <section>
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
        </section>
        <section>
          <a href="tel:+358465935910">
            <span>T.</span> +358465935910
          </a>
          <a href="mailto:alinailina.random@gmail.com">
            <span>E.</span> ai.foreach@gmail.com
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
        </section>

        <section>
          <p>© - ai.foreach, 2020.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
