import React from "react";
import "./App.scss";
import { Link, animateScroll as scroll } from "react-scroll";
function App() {
  return (
    <div className="App container" name="app">
      <h1>Hello!</h1>
      <p>
        My name is Alina Ilina.
        <span role="img" aria-label="emoji">
          &#128587;
        </span>
      </p>
      <p>
        I’m a front-end developer and UI imagineer{" "}
        <span role="img" aria-label="emoji">
          &#128187; &#127912;
        </span>{" "}
        based in Helsinki, Finland.
      </p>

      {/*------------Social Media------------*/}
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

      {/*-----------Article starts-----------*/}
      <h2>
        Here’s 3,5 reasons you should{" "}
        <span role="img" aria-label="emoji">
          &#128175;
        </span>{" "}
        hire me for your next project:
      </h2>
      <h4>(2 min read)</h4>
      {/*---------------Section 1--------------*/}
      <section>
        <h3>
          1. I’m self-taught{" "}
          <span role="img" aria-label="emoji">
            &#128163; &#128165;
          </span>
        </h3>
        <blockquote>
          <span className="high">
            A front-end developer with potential of a unicorn.
          </span>
        </blockquote>

        <p>
          My coding journey spans a little under a year. Everything I know I
          learned online. Unthinkable at first, I now strongly believe - there’s
          nothing you cannot learn, not a question you won’t find an answer to
          on the internet (provided good connection and some patience
          <span role="img" aria-label="emoji">
            &#10071;
          </span>
          ).
        </p>

        <p>
          Over one year I completely changed the trajectory of my life. Was it
          easy? - No. Was it worth it? - You bet!
        </p>

        <p>
          I’m now proud to call myself a React (MERN stack) developer and be
          able to code almost any part of UI from scratch (seriously, my
          responsive design is so fluid - you’ll want to resize that window over
          and over again). What looked like matrix in the beginning is now a
          natural thing.
        </p>

        <p>
          My interest in usability, web accessibility and interaction design
          informs my work as a developer. Ever curious, I’m determined to go
          above and beyond to improve myself on this journey.{" "}
          <span role="img" aria-label="emoji">
            &#128640;
          </span>
        </p>
      </section>
      {/*---------------Section 2--------------*/}
      <section>
        <h3>
          2. I'm a neat freak{" "}
          <span role="img" aria-label="emoji">
            &#128133; &#128129;
          </span>
        </h3>
        <blockquote>
          <span className="high">Is the padding a little off here?</span>
        </blockquote>

        <p>
          Contrary to what the freaky part might suggest, I tend to think of
          this quality as an asset. I like to know things are done well.
          Consistent design, no unintentional asymmetry, spaghetti code or
          technical debt &mdash; "detail-oriented” is not just another word I
          put on my resume. I like to complete my work conscientiously with a
          touch of awe.{" "}
          <span role="img" aria-label="emoji">
            &#128079;
          </span>
        </p>
      </section>
      {/*---------------Section 3--------------*/}
      <section>
        <h3>
          3. I keep it simple
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
          I believe simplicity is the virtue of genius. I believe in minimalist
          philosophy, the power of honest communication and clear-cut tech.{" "}
        </p>
        <p>
          We live in a world of ever increasing technology integration, where
          people are overstimulated with noise on a daily basis. In a world
          where a phone is an extension of human arm, people depend on balanced
          sleek UI designs to alleviate them from this sensory overload.{" "}
        </p>
        <p>
          Just like that, providing depth through simplicity while making
          everything obvious or self-explanatory is my ultimate goal as a
          developer and a human.{" "}
          <span role="img" aria-label="emoji">
            &#128591;
          </span>
        </p>
      </section>
      {/*---------------Section 3.5--------------*/}
      <section>
        <h3>
          3&frac12;. I made it a habit{" "}
          <span role="img" aria-label="emoji">
            &#127793; &#127773;
          </span>
        </h3>
        <blockquote>
          <span className="high">I code, ergo sum.</span>
        </blockquote>
        <p>My top favourite things to do:</p>
        <ul className="favourite-things">
          <li>&mdash; Decluttering and crossing stuff off the list;</li>
          <li>&mdash; Finding invisible links and correlations;</li>
          <li> &mdash; Questioning everything;</li>
          <li>
            &mdash; Watching screencasts where UI designers overhaul poorly
            designed websites;
          </li>
          <li> &mdash; Reading technical docs (no kidding!)</li>
        </ul>
      </section>
      {/*---------------Footer--------------*/}
      <h2>
        Convinced yet?{" "}
        <span role="img" aria-label="emoji">
          &#127919;{" "}
        </span>
        <br></br>
        Let's grab a coffee!
      </h2>
      <footer>
        <p>
          <span role="img" aria-label="emoji">
            &#128233;{" "}
          </span>
          <a href="mailto:hi@alinailina.info">hi@alinailina.info</a>
        </p>
        <p>
          <span role="img" aria-label="emoji">
            &#128227;{" "}
          </span>
          <a href="tel:+358465935910">+358465935910</a>
        </p>
        {/* 
        <p>
          <span role="img" aria-label="emoji">
            &#128206;{" "}
          </span>
          <a href="#">Download CV</a>
        </p>
        */}
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
