import React from 'react';

const Testimonials = () => {
    
    return (
        <>
        <section id="testimonials" className="section">
            <div>
                <div style={{ paddingTop: '70px', textAlign: 'left', paddingLeft: '100px' }}>
                    <h1 style={{ color: 'rgb(8, 77, 8)', fontSize: '45px', fontWeight: 'bold' }}>Testimonials</h1>
                </div>

                <section id="impact" className="carousel-section" style={{ paddingTop: '0px' }}>
                    <div className="carousel-container">
                        <div className="void" id="void" style={{ animation: 'none' }}>
                            <div className="crop" style={{ animation: 'none' }}>
                                <ul id="card-list" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        { title: 'Expert Knowledge', description: "Our team of horticultural experts brings decades of experience in plant care and cultivation, ensuring your plants thrive from day one." },
                                        { title: 'Quality Plants', description: "We guarantee fresh, healthy plants grown with care. Whether you're purchasing for your home, office, or a large project, you can count on the best quality." },
                                        { title: 'Affordable Prices', description: "We believe everyone should have access to beautiful plants without breaking the bank. That’s why we offer competitive, fair pricing on all our plants and services." },
                                        // { title: 'Sustainability', description: "We are committed to growing and sourcing plants in an eco-friendly way, providing organic and sustainable options to our customers." },
                                        { title: 'Customized Pot Designing', description: "We offer customized pots to perfectly match your plants and your space. Whether you're looking for unique, eco-friendly options or personalized patterns, we’ll create pots that reflect your style and bring out the beauty of your plants even more." }
                                    ].map((item, index) => (
                                        <li key={index}>
                                            <div className="cards">
                                                <span className="model-name">{item.title}</span>
                                                <span>{item.description}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="last-circle"></div>
                                <div className="second-circle"></div>
                            </div>
                            <div className="mask" style={{ animation: 'none' }}></div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        </>
    );
};

export default Testimonials;
