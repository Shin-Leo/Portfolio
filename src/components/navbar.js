import React from 'react';
import {  Link } from "react-scroll";
const Navbar = () =>{
  return (
  <div>
    <li>
      <Link to="/" spy={true} smooth={easeInQuad} delay={0} duration={10}>About</Link>
    </li>
    <li>
      <Link to="/projects" spy={true} smooth={easeInQuad} delay={0} duration={10}>Projects</Link>
    </li>
    <li>
      <Link to="resume-div" spy={true} smooth={easeInQuad} delay={0} duration={10}>Resume</Link>
    </li>
    </div>
  )}