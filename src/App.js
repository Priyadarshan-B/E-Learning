import React, { useRef, useState } from 'react';
import './App.css';

import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Course from './Components/Course/course';
import Slot from './Components/Slot/slot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import google from './Assests/google.png';

const App = () => {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    course: useRef(null),
    slot: useRef(null),
    contact: useRef(null),
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false); 
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="navbar">
        <nav>
          <div className="hamburger-icon" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>
          <ul className={isNavOpen ? 'nav-open' : ''}>
            <li onClick={() => handleScroll('home')}>Home</li>
            <li onClick={() => handleScroll('about')}>About</li>
            <li onClick={() => handleScroll('course')}>Course</li>
            <li onClick={() => handleScroll('slot')}>Book Slot</li>
            <li onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
          <button className="sign-in-button" onClick={openModal}>Sign In</button>
        </nav>
      </header>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h2 style={{ color: "white" }}>Sign In</h2>
            <button className="google-sign-in-button">
              <img src={google} alt="Google Sign In" />
              Sign in with Google
            </button>
          </div>
        </div>
      )}
      <main className='total-background'>
        <Home ref={sectionRefs.home} /><br/>
        <About ref={sectionRefs.about} /><br/>
        <Course ref={sectionRefs.course} /><br/>
        <Slot ref={sectionRefs.slot} /><br/>
        <Contact ref={sectionRefs.contact} /><br/>
      </main>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default App;
