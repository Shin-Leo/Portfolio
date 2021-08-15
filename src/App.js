import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./components/Projects.js";
import Resume from "./components/Resume.js";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import About from "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profile from "./images/profile-image.jpg";

import notation from "./images/notation.png";
import graphs from "./images/graphs.png";

import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import github from "./images/github.svg";
import email from "./images/email.svg";

import career from "./images/monitor.png";
import location from "./images/pin.png";
import employment from "./images/suitcase.png";

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
        <Container inline-flex="true" className="profile-section">
<Row>
                <Col sm={5}>
                <Card className="profile-card">
                    <Card.Header className="profile-header">
                      <div className="wrapper">
                        <Card.Img
                          variant="top"
                          className="profile-img"
                          src={profile}
                        />
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Leo Shin</Card.Title>
                      <div className="intro-info">
                      <span className="intro-point"><img className="icon" alt="" width="15px" src={career}></img> Software
                          Engineer</span>
                          <span className="intro-point"><img alt="" width="15px" src={location}></img>{" "}
                          University of British Columbia
                          </span>
                          <span className="intro-point">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Combined Major in Computer Science and Business"}</span>
                          <span className="intro-point"><img alt="" width="15px" src={employment}></img>{" "}
                          Looking for Summer 2022 opportunities!</span>
                          </div>
                      <div className="icon-group">
                        <img src={facebook} width="35px" alt=""></img>
                        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                        <img src={instagram} width="35px" alt=""></img>
                        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                        <img src={linkedin} width="35px" alt=""></img>
                        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                        <img src={github} width="35px" alt=""></img>
                        &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                        <img src={email} width="35px" alt=""></img>
                      </div>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={7}>
                </Col>
                </Row>
          </Container>
        <Container inline-flex="true" className="project-card">
          <Row>
            <Col sm={8}>
              <Card className="bg-dark text-white">
                <Card.Img src={notation} alt="Card image" />
                <Card.ImgOverlay>
                  <Card.Title>reHarmonizer</Card.Title>
                  <Card.Text>
                    Flask project for reharmonizing a small section of a song
                    when given the chord progression and the main melody.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <Card.Text>Techonologies Used</Card.Text>
                  <div className="btn from-right">Check it Out!</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container inline-flex="true" className="project-card-reverse">
          <Row>
            <Col sm={8}>
              <Card className="bg-dark text-white">
                <Card.Body>
                  <Card.Img src={graphs} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>Options Portfolio</Card.Title>
                    <Card.Text text="dark">
                      Django project for simulating a portfolio of options
                      strategies using the yfinance api.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card>
                <Card.Body>
                  <Card.Text>Techonologies Used</Card.Text>
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
