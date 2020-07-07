import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
// Styles
import css from "./css/Home.module.scss";

const Home = () => {
  return (
    <div className={css.container}>
      <section className={css.hero}>
        <h1>ai</h1>
        <h2>
          {" "}
          Web and mobile apps <br />
          with a touch of <span>awe(some)</span>
        </h2>
        <div>
          <a href="tel:+358465935910">
            <span>T.</span> +358465935910
          </a>
          <a href="mailto:alinailina.random@gmail.com">
            <span>E.</span> ai.foreach@gmail.com
          </a>{" "}
        </div>
        <div>
          {" "}
          <a href="mailto:ai.foreach@gmail.com?subject=App request for Alina Ilina">
            <input type="submit" value="Leave request" />
          </a>
          <AnchorLink href="#hi">Learn more</AnchorLink>
        </div>
      </section>

      <section className={css.intro} id="hi">
        <h3>Hello,</h3>
        <div>
          <p>
            My name is Alina Ilina. I'm a Web Developer &{" "}
            <span>UI Imagineer</span>, based in Helsinki, Finland. I make clean,
            predictable and simply awesome user interfaces for web and mobile
            apps that meet high standards for usability, and scale.
          </p>
          <a href="/about">Read full story</a>
        </div>
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
  );
};

export default Home;
