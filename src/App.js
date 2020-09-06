import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Layout
import Home from "./layout/Home";
import About from "./layout/About";
import MyWorks from "./layout/MyWorks";
import FAQ from "./layout/FAQ";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/myworks" component={MyWorks} />
        <Route path="/faq" component={FAQ} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
