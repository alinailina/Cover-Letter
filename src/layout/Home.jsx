import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./css/index.scss";
import css from "./css/Home.module.scss";

// Children
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <div className={css.container}>
        <section>
          <div>
            {" "}
            <h1>
              Hi, I'm Alina Ilina, <br />a Web Developer &{" "}
              <span>UI Imagineer</span>
              , <br />
              based in Helsinki, Finland.
            </h1>
            <p>
              I make clean, simple, predictable user interfaces for web and
              mobile apps that meet high standards for usability, and scale.
            </p>
            <a href="/about">Read full story</a>
          </div>
        </section>

        <section>
          <h2>What I do:</h2>
          <ul>
            <li>
              <img
                className={css.svg1}
                src={require("../assets/svgs/UI Elements/video.svg")}
                alt=""
                width="300px"
              />
            </li>
            <li>
              <p>Web development</p>
            </li>
            <li>
              <p>Mobile app development</p>
            </li>
            <li>
              <div>
                {" "}
                <img
                  className={css.svg2}
                  src={require("../assets/svgs/UI Elements/phone-notch.svg")}
                  alt=""
                  width="100px"
                />{" "}
              </div>
              <div>
                <img
                  className={css.svg3}
                  src={require("../assets/svgs/UI Elements/app-notification.svg")}
                  alt=""
                  width="120px"
                />{" "}
              </div>
            </li>{" "}
            <li>
              <img
                className={css.svg4}
                src={require("../assets/svgs/UI Elements/size.svg")}
                alt=""
                width="120px"
              />
            </li>
            <li>
              <p>
                Responsive design/
                <br />
                UI design
              </p>
            </li>
          </ul>
        </section>

        <CTA />

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
