import React from "react";
import { Link } from "react-router-dom";

// Styles

import css from "./css/Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={css.container}>
        <header>
          <h2>Hi,</h2>
        </header>
        <section>
          <p>
            My name is Alina Ilina. I'm a Web Developer &{" "}
            <span>UI Imagineer</span>, based in Helsinki, Finland. I make clean,
            simple, predictable user interfaces for web and mobile apps that
            meet high standards for usability, and scale.
          </p>
          <a href="/about">Read full story</a>
        </section>

        <section className="bottom-nav">
          <div>
            <Link to="/portfolio">My works</Link>
            <p>(See what I've been up to)</p>
          </div>
          <div>
            <Link to="/faq">FAQs</Link>
            <p>(All you need to know)</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
