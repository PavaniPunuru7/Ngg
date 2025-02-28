import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import SideNav from './components/SideNav';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Products from './components/Products';
import PlantDetail from './components/PlantDetails';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const isPlantDetailPage = location.pathname.startsWith('/plant/');

    const handleScroll = (id) => {
        if (isPlantDetailPage) {
            // Navigate to home first if on plant detail page
            navigate('/');
        }

        // Scroll after navigation
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Element with id '${id}' not found.`);
            }
        }, 100); // Add a small delay to let the page load
    };

    // Optional: Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <Cursor />
            {!isPlantDetailPage && <SideNav onNavClick={handleScroll} />}
            <Navbar onNavClick={handleScroll} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div id="home"><Carousel onNavClick={handleScroll} /></div>
                            <div id="products"><Products /></div>
                            <div id="services"><Services /></div>
                            <div id="about"><About /></div>
                            <div id="contact"><Contact /></div>
                        </>
                    }
                />
                <Route path="/plant/:plantName" element={<PlantDetail />} />
            </Routes>
        </>
    );
}

export default App;
