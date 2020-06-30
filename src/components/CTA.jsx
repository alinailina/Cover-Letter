import React from "react";
import "./index.scss";

const CTA = () => {
  return (
    <div className="contact">
      {" "}
      <h2>
        Let's work together <br />
        Get in touch
      </h2>
      <div>
        <a href="tel:+358465935910">
          <span>T.</span> +358465935910
        </a>
        <a href="mailto:alinailina.random@gmail.com">
          <span>E.</span> alinailina.random@gmail.com
        </a>{" "}
        <a href="/">
          <span>
            <img src={require("../assets/download.png")} alt="download-icon" />
          </span>{" "}
          Download CV
        </a>
      </div>
    </div>
  );
};

export default CTA;
