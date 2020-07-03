import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./css/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={css.container}>
      <header>
        <h2>My works</h2>
      </header>
      <section>
        <p>
          I'm working on something very interesting here. Check back in a bit,
          or get notified when it's ready!{" "}
        </p>
        <form name="get-update" method="POST" data-netlify="true">
          {" "}
          <label htmlFor="email">
            Your email:
            <input type="email" />
          </label>
          <div>
            <input type="submit" />
          </div>
        </form>

        <p>
          In the meantime, check out my <Link to="/faq">FAQ</Link> page to find
          how I can be of service today.
        </p>
      </section>

      <section className="bottom-nav">
        <div>
          <Link to="/about">About</Link>
          <p>(In a nutshell)</p>
        </div>
        <div>
          <Link to="/faq">FAQs</Link>
          <p>(All you need to know)</p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
