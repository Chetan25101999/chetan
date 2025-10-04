import React, { useState } from "react";
import "./HideUnhide.css";

const HideUnhide = () => {
  const [nav, showNav] = useState(false);

  const toggleNav = () => showNav(!nav);

  return (
    <div className="container">
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <div className="menu-container">
          <button className="menu-btn" onClick={toggleNav}>
            {nav ? "Hide Menu" : "Menu"}
          </button>

          {nav && (
            <div className="dropdown">
              <a href="#">Link 1</a>
              <br />
              <a href="#">Link 2</a>
              <br />
              <a href="#">Link 3</a>
              <br />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default HideUnhide;
