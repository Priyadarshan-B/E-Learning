import React from "react";
import "./slot.css";
import slot from "../../Assests/slot2.mp4";

const Slot = React.forwardRef((props, ref) => (
  <section ref={ref} id="slot" >
    <div className="total-slot">
      <div className="round">
        <div className="slot-content" data-aos="zoom-in">
          <h1 className="slot-h1">Welcome to Our E-Learning Platform</h1>
          <p className="slot-p">Book Your Doubt Session</p>
          <button className="view-more">Book a Slot Here..</button>
        </div>
      </div>
      <div className="gif" data-aos="fade-left">
        <video autoPlay muted loop className="slot-video">
          <source src={slot} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
));

export default Slot;
