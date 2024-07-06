import React from "react";
import "./home.css";
import HomeVideo from "../../Assests/video2.mp4";

const Home = React.forwardRef((props, ref) => (
  <section ref={ref} id="home" data-aos = "fade-down">
    <div className="video-container">
      <video autoPlay muted loop className="background-video">
        <source src="../../Assests/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="content">
      <h1>Welcome to Our E-Learning Platform</h1>
      <p>Empower your learning journey with us.</p>
    </div>
  </section>
));

export default Home;
