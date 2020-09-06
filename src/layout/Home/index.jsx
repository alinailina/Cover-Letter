import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import css from "./index.module.scss";

const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <img
          src={require("../../assets/hero.svg")}
          alt="finger-tapping-yellow-circle"
        />
      </div>
      <section>
        <div>
          <h1>Alina Ilina</h1>
          <h2>
            {" "}
            Web and mobile apps <br />
            with <span>a touch of awe(some)</span>
          </h2>

          <div>
            {" "}
            <a href="mailto:alinailina.random@gmail.com?subject=App request for Alina Ilina">
              <input type="submit" value="Request app" />
            </a>
            <AnchorLink href="#hi">Learn more</AnchorLink>
          </div>
        </div>
      </section>

      <section id="hi">
        <h3>Hello,</h3>
        <div>
          <p>
            My name is Alina Ilina. I'm{" "}
            <span>a Web Developer & UI Imagineer</span>. I make clean,
            predictable and simply awesome user interfaces for web and mobile
            apps that meet high standards for usability, and scale.
          </p>
          <a href="/about">Read full story</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
