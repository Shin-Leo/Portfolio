import React from "react";
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./components/Projects.js";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import About from "./components/About.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import profile from "./images/profile-image.jpg";
import Typewriter from "typewriter-effect";
import Email from "./components/Email.js";
import Button from "react-bootstrap/Button"
import {Link} from "react-scroll"

import notation from "./images/notation.png";
import graphs from "./images/graphs.png";

import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import linkedin from "./images/linkedin.svg";
import github from "./images/github.svg";
import career from "./images/monitor.svg";
import location from "./images/pin.svg";
import employment from "./images/briefcase.svg";

import css from "./images/css.svg";
import django from "./images/django.svg";
import flask from "./images/flask.svg";
import javascript from "./images/javascript.svg";
import jquery from "./images/jquery.svg";
import postgresql from "./images/postgresql.svg";
import python from "./images/python.svg";
import panda from "./images/panda.svg";
import react from "./images/react.svg";
import typescript from "./images/typescript.svg";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
              <div className="btn nav-button" role="button" aria-pressed="false" style={{cursor: "pointer"}}>
              <Link to="about" spy={true} smooth={true} duration={100} delay={0}>About</Link>
              </div>
              <div className="btn nav-button" role="button" aria-pressed="false" style={{cursor: "pointer"}}>
              <Link to="projects" spy={true} smooth={true} duration={100} delay={0}>Projects</Link> 
              </div>
              <div className="btn nav-button" role="button" aria-pressed="false" style={{cursor: "pointer"}}>
              <Link to="resume-div" spy={true} smooth={true} duration={100} delay={0}>Resume</Link>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container inline-flex="true" className="profile-section">
          <Row>
            <Col sm={1} className="side-col" width="10%"></Col>
            <Col sm={4}>
              <Card className="profile-card">
                <Card.Header className="profile-header" style={{borderRadius: "20px 20px 0px 0px"}}>
                  <div className="wrapper">
                    <div className="profile-img-wrapper">
                      <img
                        className="profile-img img"
                        src={profile}
                        alt=""
                      ></img>
                    </div>
                    <span
                      style={{
                        fontSize: "x-large",
                        paddingTop: "200px",
                        fontWeight: "bold",
                        color: "#455F73"
                      }}
                    >
                      Leo Shin
                    </span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="intro-info">
                    <span className="intro-point">
                      <img
                        className="icon"
                        alt=""
                        width="25px"
                        src={career}
                      ></img>{" "}
                      &nbsp; Software Engineer
                    </span>
                    <span className="intro-point">
                
                      <img
                        alt=""
                        className="icon"
                        width="25px"
                        src={employment}
                      ></img>{" "}
                      &nbsp; Looking for Summer 2022 opportunities!
                    </span>
                    <span className="intro-point">
                      <img
                        className="icon"
                        alt=""
                        width="25px"
                        src={location}
                      ></img>{" "}
                      &nbsp; University of British Columbia
                    </span>
                    <span className="intro-point">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                      {
                        <span style={{ fontStyle: "italic" }}>
                          &nbsp; Combined Major in Computer Science and Business
                        </span>
                      }
                    </span>
                  </div>
                  <div className="divider div-transparent div-arrow-down"></div>
                  <div className="icon-group">
                    <a href="https://www.facebook.com/leo.shin.311">
                      <img src={facebook} width="35px" alt=""></img>
                    </a>
                    &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                    <a href="https://www.instagram.com/leo8902/">
                      <img src={instagram} width="35px" alt=""></img>
                    </a>
                    &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/leo-shin">
                      <img src={linkedin} width="35px" alt=""></img>
                    </a>
                    &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                    <a href="https://github.com/Shin-Leo">
                      <img src={github} width="35px" alt=""></img>
                    </a>
                    &nbsp;&nbsp;&middot;&nbsp;&nbsp;
                    <Email></Email>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={5} className="text-col">
              <div id="generated-text">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi!")
                      .pauseFor(500)
                      .typeString(" My name is ")
                      .typeString(`<span class="intro-span" >Leo</span>`)
                      .pauseFor(250)
                      .typeString(" and I like to ")
                      .typeString(
                        `<span class="intro-span" >build software.</span>`
                      )
                      .pauseFor(500)
                      .typeString(" Feel free to ")
                      .typeString(`<span class="intro-span">contact me</span>`)
                      .typeString(" or check out some of my ")
                      .typeString(
                        `<span class="intro-span">projects below!</span>`
                      )
                      .start();
                  }}
                  options={{ delay: 60 }}
                />
              </div>
            </Col>
            <Col sm={1} className="side-col" width="10%"></Col>
          </Row>
        </Container>
        <Container inline-flex="true" className="project-card">
        <div id="projects"></div>
          <Row>
            <Col sm={1} className="side-col" width="10%"></Col>
            <Col sm={6}>
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
            <Col sm={3}>
              <Card>
                <Card.Header>Tech Stack</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span className="tech-stack-headers">Languages</span>
                      <span className="tech-stack">
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={python}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Python</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={javascript}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Javascript</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={typescript}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Typescript</span>
                          </Row>
                        </Col>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="tech-stack-headers">
                        Frameworks & Libraries
                      </span>
                      <span className="tech-stack">
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img alt="" className="tech-icon" src={flask}></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Flask</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img alt="" className="tech-icon" src={react}></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">React</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={jquery}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">jQuery</span>
                          </Row>
                        </Col>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="tech-stack-headers">APIs</span>
                      <span className="tech-stack">
                        <Row>
                          <Col>
                            <a href="https://github.com/0xfe/vexflow">
                              Vexflow.js
                            </a>
                          </Col>
                          <Col>
                            <a href="https://github.com/tonaljs/tonal">
                              Tonal.js
                            </a>
                          </Col>
                          <Col>
                            <a href="https://github.com/Tonejs/Tone.js/">
                              Tone.js
                            </a>
                          </Col>
                        </Row>
                        <span></span>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="repo-btn">
                      <div className="btn from-right">
                        Check it Out!
                        <a href="https://github.com/Shin-Leo/reHarmonizer">
                          <span className="link-span"></span>
                        </a>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col sm={1} className="side-col" width="10%"></Col>
          </Row>
        </Container>
        <Container inline-flex="true" className="project-card-reverse">
          <Row>
            <Col sm={1} className="side-col" width="10%"></Col>
            <Col sm={6}>
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
            <Col sm={3}>
              <Card>
                <Card.Header>Tech Stack</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <span className="tech-stack-headers">Languages</span>
                      <span className="tech-stack">
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={python}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Python</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={javascript}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Javascript</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img alt="" className="tech-icon" src={css}></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">CSS</span>
                          </Row>
                        </Col>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="tech-stack-headers">
                        Frameworks & Libraries
                      </span>
                      <span className="tech-stack">
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={django}
                              style={{ width: "60px" }}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Django</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img alt="" className="tech-icon" src={panda}></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">Pandas</span>
                          </Row>
                        </Col>
                        <Col className="col-tech-icon">
                          <Row className="row-tech-icon">
                            <img
                              alt=""
                              className="tech-icon"
                              src={postgresql}
                            ></img>
                          </Row>
                          <Row>
                            <span className="tech-stack">postgreSQL</span>
                          </Row>
                        </Col>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <span className="tech-stack-headers">APIs</span>
                      <span className="tech-stack">
                        <Row>
                          <Col>
                            <a href="https://github.com/ranaroussi/yfinance">
                              yfinance
                            </a>
                          </Col>
                          <Col>
                            <a href="https://github.com/chartjs/Chart.js">
                              Chart.js
                            </a>
                          </Col>
                        </Row>
                        <span></span>
                      </span>
                    </ListGroup.Item>
                    <ListGroup.Item className="repo-btn">
                      <div className="btn from-right">
                        Check it Out!
                        <a href="https://github.com/Shin-Leo/optionsPOrtfolio">
                          <span className="link-span"></span>
                        </a>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col sm={1} className="side-col" width="10%"></Col>
          </Row>
        </Container>
        <Container className="resume-container">
          <Row className="resume-row">
            <Col sm={1} className="side-col" width="45%"></Col>
            <Col sm={3} className="middle-resume-col" width="10%">
              <Button className="resume-download">Download Resume</Button>
            </Col>
            <Col sm={1} className="side-col" width="45%"></Col>
          </Row>
        </Container>
          <div id="resume-div"></div>
      </div>
    </BrowserRouter>
  );
}
export default App;
