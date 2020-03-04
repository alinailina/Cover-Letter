import React from "react";
import "./App.scss";
import { Link } from "react-scroll";
function App() {
  return (
    <div className="container" name="app">
      <h1>Hello!</h1>
      <p>
        My name is Alina Ilina{" "}
        <span role="img" aria-label="emoji">
          &#128587;
        </span>{" "}
        I’m a front-end developer and UI imagineer{" "}
        <span role="img" aria-label="emoji">
          &#128187; &#127912;
        </span>{" "}
      </p>
      <ul>
        <li>
          <span role="img" aria-label="emoji">
            &#128073;{" "}
          </span>
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <span role="img" aria-label="emoji">
            &#128073;{" "}
          </span>
          <a
            href="https://twitter.com/icode_ergosum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <span role="img" aria-label="emoji">
            &#128073;{" "}
          </span>
          <a
            href="https://www.linkedin.com/in/alinailina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <p>Are you looking to improve the appearance of your application?</p>
      <p>
        Check out the{" "}
        <span className="big-text">
          3&frac12; ways I can help you develop a lick-the-screen stunning UI
        </span>{" "}
        for your next project:
      </p>
      <h4>(2 min read)</h4>
      <section>
        <h3>
          1. I’m a self-starter{" "}
          <span role="img" aria-label="emoji">
            &#128163; &#128165;
          </span>
        </h3>
        <blockquote>
          <span>Ok Google.</span>
        </blockquote>
        <p>
          Everything I know I learned online. Over one year I completely changed
          the trajectory of my life. Was it easy? Hell no! Was it worth it? You
          bet!
        </p>
        <p>
          I’m now proud to call myself a Front-End developer who can code
          (almost) any part of a UI from scratch. What looked like The Matrix is
          now second nature. My interests in usability, web accessibility and
          interaction design inform my work as a Developer. Ever curious, I’m
          determined to go above and beyond to improve myself every step of the
          way.{" "}
          <span role="img" aria-label="emoji">
            &#128640;
          </span>
        </p>
      </section>
      <section>
        <h3>
          2. I'm a neat freak{" "}
          <span role="img" aria-label="emoji">
            &#128133; &#128129;
          </span>
        </h3>
        <blockquote>
          <span className="high">I like to do things well.</span>
        </blockquote>
        <p>
          Consistent design, no unintentional asymmetry, spaghetti code or
          technical debt. "Detail-oriented” is not just another word I put on my
          resume. I mean it. I like to complete my work conscientiously - with a
          touch of awe(some). {" "}
          <span role="img" aria-label="emoji">
            &#128079;
          </span>
        </p>
      </section>
      <section>
        <h3>
          3. I cut through the noise
          <span role="img" aria-label="emoji">
            &#128161; &#128588;
          </span>
        </h3>{" "}
        <blockquote>
          <span className="high">
            When asked how he created his masterpiece, Michelangelo said “It was
            simple. You chip away until you see David”.
          </span>
        </blockquote>
        <p>
          I believe in minimalist philosophy, the power of honest communication
          and clear-cut technology. I strive for depth through simplicity.
          Making everything obvious or self-explanatory is my ultimate goal as a
          Developer and a Human.{" "}
          <span role="img" aria-label="emoji">
            &#128591;
          </span>
        </p>
      </section>
      <section>
        <h3>
          3&frac12;. I made it a habit{" "}
          <span role="img" aria-label="emoji">
            &#127793; &#127773;
          </span>
        </h3>
        <blockquote>
          <span>I code, ergo sum.</span>
        </blockquote>
        <p>My top favourite things to do:</p>
        <ul className="favourite-things">
          <li>&mdash; Finding invisible links and correlations</li>
          <li> &mdash; Asking the right questions</li>
          <li>
            &mdash; Watching screencasts where UI Designers overhaul poorly
            designed websites
          </li>
          <li> &mdash; Reading technical docs (no kidding!)</li>
          <li>
            {" "}
            &mdash;{" "}
            <span className="line-through">
              Decluttering and crossing stuff off the list
            </span>
          </li>
        </ul>
      </section>
      <p className="big-text">
        Want to learn more? <br></br>
        Let's have a chat!
      </p>
      <footer>
        <p>
          <span role="img" aria-label="emoji">
            &#x1f44b;{" "}
          </span>
          <a href="mailto:hi@alinailina.info">hi@alinailina.info</a>
        </p>
        <p>
          <span role="img" aria-label="emoji">
            &#x1F4DE;{" "}
          </span>
          <a href="tel:+358465935910">+358465935910</a>
        </p>
        <p>
          {" "}
          <span role="img" aria-label="emoji">
            &#128257;{" "}
          </span>{" "}
          <Link
            to="app"
            smooth={true}
            duration={500}
            style={{ cursor: "pointer" }}
          >
            Back to top
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default App;
