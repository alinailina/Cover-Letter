import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h3>Get in touch</h3>
          <p>I'd love to hear from you :)</p>
          <h4>
            {" "}
            <a href="tel:+358465935910">
              <span>T.</span> +358465935910
            </a>
          </h4>
          <h4>
            <a href="mailto:ai.foreach@gmail.com">
              <span>E.</span> ai.foreach@gmail.com
            </a>
          </h4>
          <h4>
            <a href="/">CV</a>
          </h4>
        </div>

        <div>
          <h4>
            {" "}
            <a
              href="https://www.linkedin.com/in/alinailina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </h4>
          <h4>
            <a
              href="https://twitter.com/icode_ergosum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </h4>
          <h4>
            <a
              href="https://github.com/alinailina"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </h4>
        </div>
      </div>

      <p>© - ai.foreach, 2020.</p>
    </footer>
  );
};

export default Footer;
