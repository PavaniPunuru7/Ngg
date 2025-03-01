import React from 'react';


const About = () => {
    return (
        <>
        <section id="about" className="section">
            <div style={{ textAlign: 'left', paddingLeft: '100px' }}>
                <h1 style={{ color: 'rgb(8, 77, 8)', fontSize: '45px', fontWeight: 'bold' }}>About us </h1>
            </div>

            <div className='about_page'>
                <p>At NGG, we believe in the power of plants to transform our world. Our mission is simple: to make the beauty of nature accessible to everyone, one garden at a time. Through our innovative web platform, we empower individuals to create and nurture their own personal green spaces—whether in their homes, balconies, or backyards.</p>

                <p>We view plants not just as decor, but as living, breathing partners in creating a healthier, more sustainable environment. Like software that makes life easier, our platform helps you visualize and manage your garden with ease, from selecting the right plants for your space to offering tailored care advice, reminders, and community support.</p>

                <p>Whether you're a seasoned gardener or a beginner, we’re here to guide you every step of the way. Our vision is to help you grow not just plants, but a deeper connection with nature, contributing to a greener, more vibrant world for future generations.</p>

                <p>Join us in planting the seeds for a beautiful tomorrow. Grow your own garden, visualize the beauty of the world, and let nature inspire your life.</p>
            </div>
            
        </section>
        </>
    );
};

export default About;
