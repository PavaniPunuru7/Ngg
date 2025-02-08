import React, { useEffect, useState, useRef, useCallback } from "react";
import img2 from "../assets/img2.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.png";
import logo from "../assets/ngg_logo.png"; 

const Services = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(null);
  const cardWidth = 300 + 16;
  const slideInterval = useRef(null);
  const transitionRef = useRef(true); // Flag to track transition


  const services = [
    {
      img: img2,
      title: "Personalized Plant Delivery",
      description: "We make it easy for you to get the plants you love delivered directly to your doorstep. No matter where you are, we'll bring fresh, quality plants right to you. Whether it's a single plant or a bulk order for a large project, we've got you covered.",
      details: [
        "Safe and secure packaging to prevent damage during transit",
        "Temperature-controlled shipping to ensure plants stay fresh",
        "Fast delivery options for your convenience",
        "Nationwide service—delivering plants to any location",
      ]
    },
    {
      img: img5,
      title: "Customized Garden Design",
      description: "Create a garden that suits your personality and space. We offer custom garden design services.",
      details: [
        "Tailored garden designs based on space and style",
        "Professional landscape planning",
        "High-quality plant selection for best results",
        "Ongoing support for plant maintenance",
      ]
    },
    {
      img: img6,
      title: "Wholesale and Bulk Orders",
      description: "Looking to buy plants in bulk? We offer wholesale pricing for businesses and large projects.",
      details: [
        "Competitive pricing for bulk orders",
        "Large variety of plants available",
        "Flexible shipping options",
        "Special discounts for regular buyers",
      ]
    },
    {
      img: img7,
      title: "Expert Plant Care Advice",
      description: "Our team of experts is always here to help with plant care and personalized advice.",
      details: [
        "Personalized plant care tips",
        "Consultations with horticulture experts",
        "Guidance for indoor and outdoor plants",
        "Pest control and disease management",
      ]
    }
  ];

 // ✅ Duplicating services for seamless infinite loop
 const infiniteServices = [...services, ...services];

 // ✅ Function to start auto-scrolling
 const startSliding = useCallback(() => {
   slideInterval.current = setInterval(() => {
     setCurrentIndex((prevIndex) => {
       transitionRef.current = true; // Enable transition
       return prevIndex + 1;
     });
   }, 3000);
 }, []);

 // ✅ Function to stop auto-scrolling when hovered
 const stopSliding = useCallback(() => {
   clearInterval(slideInterval.current);
 }, []);

 // ✅ Reset index when reaching duplicated content
 useEffect(() => {
   if (currentIndex >= services.length) {
     setTimeout(() => {
       transitionRef.current = false; // Disable transition temporarily
       setCurrentIndex(0); // Reset position
     }, 500); // Wait for the transition to finish before resetting
   }
 }, [currentIndex, services.length]);

 // ✅ Start auto-scrolling on mount
 useEffect(() => {
   startSliding();
   return () => stopSliding();
 }, [startSliding, stopSliding]);

 return (
   <>
     <section id="services" className="section">
       <div className="main-container">
         <h1 className="left-half">Services <br /> Offered</h1>
         <div className="right-half">
           <div className="wrapper">
             <ul
               className="slider"
               ref={sliderRef}
               style={{
                 transform: `translateX(-${currentIndex * cardWidth}px)`,
                 transition: transitionRef.current ? "transform 0.5s ease-in-out" : "none"
               }}
               onMouseEnter={stopSliding}
               onMouseLeave={startSliding}
             >
               {infiniteServices.map((item, index) => (
                 <li key={index} className="card">
                   <div className="img">
                     <img src={item.img} alt={item.title} draggable="false" />
                   </div>
                   <h2 style={{ color: "green", fontWeight: "bold" }}>{item.title}</h2>
                   <button className="details" onClick={() => setShowOverlay(index % services.length)}>
                     <b>View More</b>
                   </button>
                 </li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     </section>

      {showOverlay !== null && (
        <div className="overlay active">
          <button className="close-btn" onClick={() => setShowOverlay(null)}>&times;</button>
          <div className="content-container">
            {/* Left Text Content */}
            <div className="text-content">
              <h2>{services[showOverlay].title}</h2>
              <p>{services[showOverlay].description}</p>
              <h2>How We Deliver Freshness</h2>
              <p>At NGG Nursery, we know that healthy plants require careful handling and the right environment. That's why we take great care in packaging and delivering your plants to ensure they arrive fresh and in perfect condition. Whether you're purchasing online or in-store, our plants are grown on-site with love and attention to detail.</p>
            </div>

            {/* Right Image */}
            <div className="image-content">
              <img src={logo} alt="Plant Delivery" loading="lazy" />
            </div>
          </div>

          {/* Details List */}
          <div className="lists">
            <h2 className="list-h">Why Our Delivery is Special:</h2>
            <ul>
              {services[showOverlay].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
