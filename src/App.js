import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route} from "react-router-dom";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import About from "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/" className="item">
                  About
                </Nav.Link>{" "}
                <Nav.Link href="/Projects" className="item">
                  Projects
                </Nav.Link>
                <NavDropdown title="" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/reharmonizer">
                    reharmonizer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/optionsPortfolio">
                    optionsPortfolio
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Resume" className="item">
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div class="profile-section">
          <div class="container">
            <div class="row justify-content-start gr-pt-lg-15 gr-pb-lg-15 gr-pt-10 gr-pb-7">
              <div class="col-lg-7"></div>

              <div class="col-lg-5"></div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
