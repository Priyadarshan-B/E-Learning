import React from "react";
import "./about.css";
import about from "../../Assests/slot.mp4";

const About = React.forwardRef((props, ref) => (
  <section ref={ref} id="about" className="about-section" data-aos="fade-up">
    <div className="about-content" data-aos="fade-up" >
      <video autoPlay muted loop className="about-video" data-aos="fade-right" data-aos-delay="1000">
        <source src={about} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-container" data-aos="fade-left">
        <h1>About Us</h1>
        <p>
          Learn more about our mission and values. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed
          cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
          imperdiet. Duis sagittis ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris.
        </p>
      </div>
    </div>
  </section>
));

export default About;
