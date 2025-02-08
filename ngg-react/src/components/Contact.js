import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contactbg" id="contact">
        <div className="contact_alignment">
          <div>
            <h1>Contact Us</h1>
            <h4>NGG</h4>
            <h4>3rd Floor, Nidhi Bhavan,</h4>
            <h4>IT Park, Behind APIIC building,</h4>
            <h4>Mangalagiri, Guntur District,</h4>
            <h4>Andhra Pradesh-522503</h4>
            <h4>E: info[at]ngg[dot]in</h4>
          </div>
          <div style={{ height: "550px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30539.090565928742!2d81.792079397807!3d16.90622548104384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skadiyam%20plant%20nursery!5e0!3m2!1sen!2sin!4v1736949162003!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <h5>
            Best Viewed in all Browsers. NGG <i className="fa-regular fa-copyright"></i> 2024
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;