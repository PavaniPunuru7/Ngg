import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import SideNav from './components/SideNav';
import Services from './components/Services';
import About from './components/About';
import Career from './components/Career';
import Contact from './components/Contact';
import Cursor from './components/Cursor';

function App() {
    console.log("App component is rendering!"); // ✅ Debug log

    const handleScroll = (id) => {
        console.log(`Scrolling to: ${id}`); // ✅ Debug log
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id '${id}' not found.`);
        }
    };

    return (
        <>
            <Cursor />
            <SideNav onNavClick={handleScroll} />
            <Navbar onNavClick={handleScroll} />
            <div id="home"><Carousel onNavClick={handleScroll} /></div>
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="career"><Career /></div>
            <div id="contact"><Contact /></div>
        </>
    );
}

export default App;
