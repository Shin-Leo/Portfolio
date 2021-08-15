import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import About from "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profile from "./images/profile-image.jpg";

import notation from "./images/notation.png";
import graphs from "./images/graphs.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Navbar collapseOnSelect expand="lg">
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
        <div className="profile-section">
          <div className="container">
            <div className="row justify-content-start gr-pt-lg-15 gr-pb-lg-15 gr-pt-10 gr-pb-7">
              <div className="col-lg-7">
                <Card className="profile-card">
                  <Card.Img variant="bottom" src={profile} />
                  <Card.Body>Software Developer</Card.Body>
                </Card>
              </div>
              <div className="col-lg-5"></div>
            </div>
          </div>
        </div>
            <Container d-inline-block="true" className="project-card">
              <Row>
              <Col sm={8}>
                <Card className="bg-dark text-white">
                  <Card.Img src={notation} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>reHarmonizer</Card.Title>
                    <Card.Text>
                    Flask project for reharmonizing a small section of a song when given the chord progression and the main melody.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                  <Card.Body>
                  <Card.Text>
                    Techonologies Used
                  </Card.Text>
                  <div className="btn from-right">Check it Out!</div>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
            </Container>
            <Container  d-inline-flex="true" className="project-card-reverse">
              <Row>
              <Col sm={8}>
                <Card className="bg-dark text-white">
                <Card.Body>
                  <Card.Img src={graphs} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Options Portfolio</Card.Title>
                    <Card.Text text="dark">
                    Django project for simulating a portfolio of options strategies using the yfinance api.
                    </Card.Text>
                  </Card.ImgOverlay>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                  <Card.Body>
                  <Card.Text>
                    Techonologies Used
                  </Card.Text>
                  <div className="btn from-left">Check it Out!</div>
                  </Card.Body>
                </Card>
              </Col>
              </Row>
            </Container>
      </div>
    </BrowserRouter>
  );
}
export default App;
