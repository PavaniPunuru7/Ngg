import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contactbg">
        <div className="contact_alignment">
        
         {/*<div>
            
            <h4>NGG</h4>
            <h4>3rd Floor, Nidhi Bhavan,</h4>
            <h4>IT Park, Behind APIIC building,</h4>
            <h4>Mangalagiri, Guntur District,</h4>
            <h4>Andhra Pradesh-522503</h4>
            <h4>E: info[at]ngg[dot]in</h4>
          </div>*/}
          <div>
          <h1 className="contact_head">Contact Us</h1>
              <div className="name_phone">
              <div className="p-2 m-3">
                <i className="fa-solid fa-user pl-3"></i>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  id="name"
                  className="underline-input_contact"
                />
              </div>
              <div className="p-2 m-3">
                <i className="fa-solid fa-phone pl-3"></i>
                <input
                  type="tel"
                  placeholder="Phone"
                  id="phone"
                  className="underline-input_contact"
                />
              </div>
              
              </div>
              <div className="location_email">
              <div className="p-2 m-3">
              <i class="fa-solid fa-location-dot pl-3"></i>
                <input
                  type="text"
                  placeholder="Location"
                  id="location"
                  className="underline-input_contact"
                />
              </div>
             <div className="p-2 m-3">
                <i className="fa-solid fa-envelope pl-3"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  className="underline-input_contact"
                />
              </div>
              </div>
              
              
            
          
            
            <div className="pencil m-4">
              <div className="p-2">
                <i className="fa-solid fa-pencil"></i>
                <input
                  type="text"
                  placeholder="How can we help you? Feel free to get in touch!"
                  id="help"
                  className="underline-input_contact2"
                />
              </div>
            </div>
            <div>
              <div>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                <label htmlFor="myCheckbox">I Agree to terms and conditions</label>
              </div>
              <button className="more_details_btn m-4">Submit</button>
            </div>
          </div>

          <div style={{ height: "550px" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.1530251218664!2d81.80566310207496!3d16.892935866143635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37bcf9c7906f1d%3A0xd25aa50fb038b201!2sKadiyapulanka!5e0!3m2!1sen!2sin!4v1740570421851!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google map of Kadiyapulanka"></iframe>
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
