import React from 'react';
import './contact.css'

const Contact = React.forwardRef((props, ref) => (
  <section ref={ref} id="contact" data-aos = "fade-up">
    <h1>Contact Us</h1>
    <p>Get in touch with us for any queries.</p>
  </section>
));

export default Contact;
