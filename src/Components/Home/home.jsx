import React from "react";
import "./home.css";
import home from "../../Assests/gif3.mp4";

const Home = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    id="home"
    className="home-section"
    style={{
      height: "100vh",
    }}
  >
    <div className="total-home">
      <div className="content">
        <h1 className="home-h1"data-aos="fade-up">Welcome to Our E-Learning Platform</h1>
        <p className="home-p" data-aos="fade-down">Empower your learning journey with us.</p>
      </div>
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          className="home-video"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <source src={home} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
));

export default Home;
