import React from 'react';
import './slot.css'

const Slot = React.forwardRef((props, ref) => (
  <section ref={ref} id="slot" data-aos = "zoom-in">
    <h1>Welcome to Our E-Learning Platform</h1>
    <p>Slot.</p>
  </section>
));

export default Slot;
