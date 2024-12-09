import React from "react";
import "./Navbar.css";
// eslint-disable-next-line 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/money.webp" alt="YACHAY BANK" /><h1 style={{color:"white"}}>YACHAY BANK</h1>
      </div>
      <ul className="navbar-links" >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
            
          <a href="https://drive.google.com/file/d/1ix__xcl7RPab_-wKMyc__uoFAWwbd9Qk/view?usp=sharing" target="_blank" rel="noreferrer">About Project</a>
        </li>
        <li>
          <a href="https://www.kaggle.com/datasets/parisrohan/credit-score-classification" target="_blank" rel="noreferrer">Dataset Used</a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
