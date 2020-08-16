import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div className="nav-logo">
        <NavLink to="/">
          <h3>[Logo]</h3>
        </NavLink>
      </div>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="hamburger"></div>
      </div>

      <ul className={active ? "active" : ""}>
        <NavLink
          to="about"
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
          About
        </NavLink>
        <NavLink
          to="portfolio"
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
          My works
        </NavLink>
        <NavLink
          to="faq"
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
          FAQs
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
