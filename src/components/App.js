import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import "./app.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
