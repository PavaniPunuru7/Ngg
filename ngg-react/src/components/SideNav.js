import React from "react";

const SideNav = () => {
  return (
    <nav id="cd-vertical-nav">
      <ul>
        <li>
          <a href="#home">
            <span className="cd-dot"></span>
            <span className="cd-label"><b>Home</b></span>
            <span className="data-badge"></span>
          </a>
        </li>
        <li>
          <a href="#products">
            <span className="cd-dot"></span>
            <span className="cd-label"><b>Products</b></span>
            <span className="data-badge"></span>
          </a>
        </li>
        <li>
          <a href="#services">
            <span className="cd-dot"></span>
            <span className="cd-label"><b>Services Offered</b></span>
            <span className="data-badge"></span>
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <span className="cd-dot"></span>
            <span className="cd-label"><b>Testimonials</b></span>
            <span className="data-badge"></span>
          </a>
        </li>
        <li>
          <a href="#about">
            <span className="cd-dot"></span>
            <span className="cd-label"><b>About Us</b></span>
            <span className="data-badge"></span>
          </a>
        </li>
        
        
        <li>
          <a href="#contact">
            <span className="cd-dot"></span>
            <span className="cd-label"><b>Contact Us</b></span>
            <span className="data-badge"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
