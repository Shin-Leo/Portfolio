import React from 'react';
import {  Link } from "react-scroll";
const Navbar = () =>{
  return (
  <div>
    <li>
      <Link to="/" spy={true} smooth={true}>About</Link>
    </li>
    <li>
      <Link to="/projects" spy={true} smooth={true}>Projects</Link>
    </li>
    <li>
      <Link to="resume-div" spy={true} smooth={true}>Resume</Link>
    </li>
    </div>
  )}