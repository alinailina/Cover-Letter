import React from "react";
import "./index.scss";

const New = () => {
  return (
    <div className="new">
      {" "}
      <h3>Let's work together</h3>
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

export default New;
