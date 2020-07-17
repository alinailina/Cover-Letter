import React from "react";
import { Link } from "react-router-dom";

// Styles
import "../css/FAQ.scss";

// Children
import Acc from "./Acc";
import Form from "./Form";

const FAQ = () => {
  return (
    <div className="faq">
      <header>
        <h2>FAQs</h2>
      </header>
      <section>
        <p>How can I help?</p>
      </section>
      <Acc />
      <section className="form">
        <h3>Ask me anything</h3>
        <p>
          Your question not answered yet? Help me improve this page &mdash; ask
          away in the form down below.
        </p>
        <Form />
      </section>
      <section className="bottom-nav">
        <div>
          <Link to="about">About</Link>
        </div>
        <div>
          <Link to="portfolio">My works</Link>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
