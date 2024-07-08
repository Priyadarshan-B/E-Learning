import React from "react";
import "./home.css";

const Home = React.forwardRef((props, ref) => (
  <section ref={ref} id="home" data-aos = "fade-down">
    

    <div className="content" data-aos = "fade-right">
      <h1>Welcome to Our E-Learning Platform</h1>
      <p>Empower your learning journey with us.</p>
    </div>

  </section>
));

export default Home;
