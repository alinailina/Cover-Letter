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
          Something interesting is cooking here. Check back in a bit, or get
          notified when it's ready!
        </p>
        <form name="get-update" method="post">
          <input type="hidden" name="form-name" value="get-update" />{" "}
          <label>
            Your email:
            <input type="email" name="email" required />
          </label>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>

        <p>
          In the meantime, check out my <Link to="/faq">FAQ</Link> page to find
          how I can be of service today.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
