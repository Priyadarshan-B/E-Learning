import React from "react";
import "./home.css";
import home from "../../Assests/gif1.mp4"

const Home = React.forwardRef((props, ref) => (
  <section ref={ref} id="home" className="home-section" >
    

    <div className="total-slot">
      <div className="content" data-aos = "fade-right">
        <h1 className="home-h1">Welcome to Our E-Learning Platform</h1>
        <p className="home-p">Empower your learning journey with us.</p>
      </div>
      <div className="gif" data-aos="fade-left" data-aos-delay="1000">
          <div className="video-container">
            <video autoPlay muted loop className="home-video">
              <source src={home} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </div>

  </section>
));

export default Home;
