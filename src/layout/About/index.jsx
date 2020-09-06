import React from "react";
import css from "./index.module.scss";

const About = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>About</h2>
      </header>
      <section>
        <p>
          My name is Alina Ilina. I’m a Web Developer and UI Imagineer (a
          portmanteau title I borrowed from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Walt_Disney_Imagineering"
            target="_blank"
            rel="noopener noreferrer"
          >
            Walt Disney Inc.
          </a>
          , as I believe user interfaces tell a story, and nothing is more
          important to a good narrative than imagination).
        </p>
        <p>
          <span>
            {" "}
            I combine my passion for UI design and development to help brands
            create digital experiences for a long-lasting emotional connection
            with their audience.
          </span>
        </p>
        <p>
          My strong interests in usability, web accessibility and interaction
          design inform my work as a Developer. I believe less is more and
          strive for depth through simplicity in web and mobile applications.
          Making everything obvious or self-explanatory is my ultimate goal as a
          Developer and a Human.
        </p>
      </section>
    </div>
  );
};

export default About;
