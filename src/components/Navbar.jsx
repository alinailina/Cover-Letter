import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState("");

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <nav>
      <a href="/">
        <div className={active ? "logo active" : "logo"}>
          <p>a&mdash;i</p>
        </div>
      </a>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={handleToggle}
      >
        <div className="hamburger"></div>
      </div>
      <ul className={active ? "active" : ""}>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="portfolio">My works</Link>
        </li>
        <li>
          <Link to="faq">FAQ</Link>
        </li>
        <li>
          <div>
            <a
              href="https://www.linkedin.com/in/alinailina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              /Linkedin
            </a>
            <a
              href="https://twitter.com/icode_ergosum"
              target="_blank"
              rel="noopener noreferrer"
            >
              /Twitter
            </a>
            <a
              href="https://github.com/alinailina"
              target="_blank"
              rel="noopener noreferrer"
            >
              /Github
            </a>
          </div>

          <p>© - a &mdash; i, 2020.</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
