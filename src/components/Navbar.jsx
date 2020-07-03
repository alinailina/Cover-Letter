import React, { useState } from "react";

import "./index.scss";

const Navbar = () => {
  const [active, setActive] = useState(false);

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
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/portfolio">My works</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
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
