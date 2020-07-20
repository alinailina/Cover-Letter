import React from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

// Styles
import css from "./css/Home.module.scss";

const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <img src={require("../assets/duck.png")} alt="" />
      </div>

      <section className={css.hero}>
        <div>
          <h1>
            ai
            <span>.foreach</span>
          </h1>
          <h2>
            {" "}
            Web and mobile apps <br />
            with a touch of <span>awe(some)</span>
          </h2>

          <div>
            {" "}
            <a href="mailto:ai.foreach@gmail.com?subject=App request for Alina Ilina">
              <input type="submit" value="Request app" />
            </a>
            <AnchorLink href="#hi">Learn more</AnchorLink>
          </div>
        </div>
      </section>

      <section className={css.intro} id="hi">
        <h3>Hello,</h3>
        <div>
          <p>
            My name is Alina Ilina. I'm a Web Developer{" "}
            <span>& UI Imagineer</span>, based in Helsinki, Finland. I make
            clean, predictable and simply awesome user interfaces for web and
            mobile apps that meet high standards for usability, and scale.
          </p>
          <a href="/about">Read full story</a>
        </div>
      </section>

      <section className={css.icons}>
        <div>
          <h3>What I do:</h3>
          <div>
            <div>
              {" "}
              <div>
                {" "}
                <img
                  src={require("../assets/desktop.png")}
                  alt="desktop-screen"
                />
              </div>
              <h4>Web development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                molestias aperiam?
              </p>
            </div>
            <div>
              {" "}
              <div>
                <img src={require("../assets/mobile.png")} alt="mobile-app" />
              </div>
              <h4>Mobile app development</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                molestias aperiam? Quis deleniti accusamus.
              </p>
            </div>
            <div>
              {" "}
              <div>
                {" "}
                <img src={require("../assets/ui.png")} alt="ui-design" />
              </div>
              <h4>User interface design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
                molestias aperiam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bottom-nav">
        <div>
          <Link to="/portfolio">My works</Link>
        </div>
        <div>
          <Link to="/faq">FAQs</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
