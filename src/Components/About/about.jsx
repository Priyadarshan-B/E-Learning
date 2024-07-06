import React from 'react';
import './about.css'

const About = React.forwardRef((props, ref) => (
  <section ref={ref} id="about" data-aos = "fade-up">
    <h1>About Us</h1>
    <p>Learn more about our mission and values.</p>
  </section>
));

export default About;
