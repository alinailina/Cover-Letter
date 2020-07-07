import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./css/About.module.scss";

const About = () => {
  return (
    <div className={css.container}>
      <div>
        <img src={require("../assets/keyboard.jpg")} alt="portrait" />
      </div>
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
          </a>{" "}
          , as I believe user interfaces tell a story, and nothing is more
          important to a good narrative than imagination).
        </p>
        <p>
          I combine my passion for UI design and development to help brands
          create digital experiences for a long-lasting emotional connection
          with their audience.
        </p>
        <p>
          My strong interests in usability, web accessibility and interaction
          design inform my work as a Developer. I believe less is more and
          strive for depth through simplicity in web and mobile applications.
          Making everything obvious or self-explanatory is my ultimate goal as a
          Developer and a Human.
        </p>
      </section>
      <section className="bottom-nav">
        <div>
          <Link to="portfolio">My works</Link>
          <p>(See what I've been up to)</p>
        </div>
        <div>
          <Link to="faq">FAQ</Link>
          <p>(All you need to know)</p>
        </div>
      </section>
    </div>
  );
};

export default About;
