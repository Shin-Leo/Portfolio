import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import About from "./components/About.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <nav class="navbar navbar-light navbar-expand-md bg-faded">
        <div class="container-fluid">
            <a href="/" class="navbar-brand d-flex w-90 mr-auto">Hi, I'm Leo</a>
            <ul class="nav navbar-nav navbar-right ">
                <li class="nav-item">
                </li>
            </ul>
        </div>
    </nav>
        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">
              About
            </Link>
            <Link to="/resume" className="item">
              Resume
            </Link>
            <Link to="/projects" className="item">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
