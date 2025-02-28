// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/ngg_logo.png';

const Navbar = ({ onNavClick }) => {
    const [activeSection, setActiveSection] = useState("");
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section");
            let currentSection = "";
            const offset = 100;
            const scrollPos = window.scrollY + offset;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Reset active section on route change (like when returning from plant details)
        if (location.pathname === '/') {
            setActiveSection("home");
        }
    }, [location.pathname]);

    const closeNavbar = () => {
        const navCollapse = document.querySelector(".navbar-collapse");
        if (navCollapse && navCollapse.classList.contains("show")) {
            navCollapse.classList.remove("show");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <img src={logo} className="logoImage" alt="Logo" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {[
                            { id: "home", label: "Home" },
                            { id: "products", label: "Products" },
                            { id: "services", label: "Services Offered" },
                            { id: "about", label: "About Us" },
                            { id: "testimonials", label: "Testimonials" },
                            { id: "contact", label: "Contact Us" },
                        ].map((item) => (
                            <li className="nav-item" key={item.id}>
                                <Link
                                    to="/"
                                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                                    onClick={() => {
                                        onNavClick(item.id);
                                        closeNavbar();
                                    }}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
