import React, { useEffect, useState } from 'react';
import logo from '../assets/ngg_logo.png';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

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

    // Close navbar when a nav link is clicked
    const closeNavbar = () => {
        const navCollapse = document.querySelector(".navbar-collapse");
        if (navCollapse.classList.contains("show")) {
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
                            { id: "about", label: "About Us" },
                            { id: "services", label: "Services Offered" },
                            { id: "career", label: "Career" },
                            { id: "contact", label: "Contact Us" },
                        ].map((item) => (
                            <li className="nav-item" key={item.id}>
                                <a
                                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                                    href={`#${item.id}`}
                                    onClick={closeNavbar} // Close navbar when clicked
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
