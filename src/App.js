import React, { useRef } from 'react';
import './App.css';

import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Course from './Components/Course/course';
import Slot from './Components/Slot/slot';

const App = () => {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    course: useRef(null),
    slot: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="navbar">
        <nav>
          <ul>
            <li onClick={() => handleScroll('home')}>Home</li>
            <li onClick={() => handleScroll('about')}>About</li>
            <li onClick={() => handleScroll('course')}>Course</li>
            <li onClick={() => handleScroll('slot')}>Book Slot</li>
            <li onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <Home ref={sectionRefs.home} />
        <About ref={sectionRefs.about} />
        <Course ref={sectionRefs.course} />
        <Slot ref={sectionRefs.slot} />
        <Contact ref={sectionRefs.contact} />
      </main>
    </div>
  );
};

export default App;
