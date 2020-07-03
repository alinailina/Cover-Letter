import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../css/FAQ.scss";

// Children
import Acc from "./Acc";
import Form from "./Form";

import CTA from "../../components/CTA";

const FAQ = () => {
  return (
    <div className="faq">
      <header>
        <h2>FAQs</h2>
      </header>
      <Acc />
      <section className="form">
        <header>
          {" "}
          <h3>Haven't found your answers?</h3>
          <p>
            Help me improve this page &mdash; ask away in the form down below!
          </p>
        </header>
        <Form />
      </section>

      <section className="bottom-nav">
        <div>
          <Link to="about">About</Link>
          <p>(In a nutshell)</p>
        </div>
        <div>
          <Link to="portfolio">My works</Link>
          <p>(See what I've been up to)</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
