import React, { useState } from "react";
const Navbar = () => {
  return (
    <>
      <nav id="nav">
        <div className="container">
          <h2 className="banner">Samshad Ali.</h2>
          <ul>
            <li>
              {" "}
              <a href="#hero">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#skills">Skills</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#work">Work</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>{" "}
            </li>
          </ul>
        </div>
      </nav>
  
    </>
  );
};

export default Navbar;
