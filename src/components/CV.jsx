import React, { Component } from "react";
import "./CV.scss";

export class CV extends Component {
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>
          My name is Alina Ilina.
          <span role="img" aria-label="emoji">
            &#128587;
          </span>
        </p>
        <p>
          I’m a front-end developer and UI imagineer{" "}
          <span role="img" aria-label="emoji">
            &#128187; &#127912;
          </span>{" "}
          based in Helsinki, Finland.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam
          asperiores iusto explicabo voluptate corrupti incidunt, labore maiores
          provident debitis dignissimos eos quasi rem soluta. Voluptas cumque
          minus odio fuga!
        </p>

        <h2>Skills</h2>
        <ul className="technologies">
          <li>React</li>
          <li>React-Native</li>
          <li>Vanilla JavaScript</li>
          <li>Node.js / Express.js</li>
          <li>MongoDB</li>
          <li>GraphQl</li>
          <li>CSS/SASS/LESS</li>
          <li>Bootsrap</li>
          <li>Material UI</li>
        </ul>

        <ul className="hashtags">
          <li>webdevelopment</li>
          <li>usability</li>
          <li>interactiondesign</li>
        </ul>

        <h2>Contact</h2>
        <ul className="contact-info">
          <li>alinailina.info</li>
          <li>hi@alinailina.info</li>
          <li></li>
          <li>Github</li>
        </ul>
        <ul className="social">
          <li>Twitter/alinalina</li>
          <li>LinkedIn/</li>
          <li>Github</li>
        </ul>
      </div>
    );
  }
}

export default CV;
