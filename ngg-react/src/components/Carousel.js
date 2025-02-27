import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Carousel = ({ onNavClick }) => {
  return (
    <section className="section" id="home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        </ol>

        {/* Background Image */}
        <div className="carousel-bg">
          <div className="foreground"></div>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="carousel1">
              <div className="overlay-text">
                <h2 className="title">Our Motto</h2>
                <p className="desc">
                  Transforming spaces with quality plants delivered <br />Fresh, Anywhere, Anytime.
                </p>
              </div>
              <div className="side-lines">
                <button className="line" onClick={() => onNavClick("home")} data-text="Home"></button>
                <button className="line" onClick={() => onNavClick("products")} data-text="Products"></button>
                <button className="line" onClick={() => onNavClick("services")} data-text="Services Offered"></button>
                <button className="line" onClick={() => onNavClick("testimonials")} data-text="Testimonials"></button>
                <button className="line" onClick={() => onNavClick("about")} data-text="About Us"></button>
                <button className="line" onClick={() => onNavClick("contact")} data-text="Contact Us"></button>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="carousel2">
              <div className="overlay-text">
                <h2 className="title">Vision</h2>
                <p className="desc">
                  Visualize the beauty of plants to the world. Let's witness the happiness of growing your own garden.
                </p>
              </div>
              <div className="side-lines">
              <button className="line" onClick={() => onNavClick("home")} data-text="Home"></button>
                <button className="line" onClick={() => onNavClick("products")} data-text="Products"></button>
                <button className="line" onClick={() => onNavClick("services")} data-text="Services Offered"></button>
                <button className="line" onClick={() => onNavClick("testimonials")} data-text="Testimonials"></button>
                <button className="line" onClick={() => onNavClick("about")} data-text="About Us"></button>
                <button className="line" onClick={() => onNavClick("contact")} data-text="Contact Us"></button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;