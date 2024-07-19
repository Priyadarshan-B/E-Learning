import React, { useRef, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Home from '../Home/home';
import About from '../About/about';
import Contact from '../Contact/contact';
import Course from '../Course/course';
import Slot from '../Slot/slot';
import '@fortawesome/fontawesome-free/css/all.min.css';
import google from '../../Assests/google.png';
import './navbar.css'; 

const useNavbarScroll = () => {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    course: useRef(null),
    slot: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = (section) => {
  const ref = sectionRefs[section]?.current;
  if (ref) {
    ref.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`No reference found for section: ${section}`);
  }
};
  return { sectionRefs, handleScroll };
};

const Navbar = () => {
  const { sectionRefs, handleScroll } = useNavbarScroll();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navbarTransparent, setNavbarTransparent] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarTransparent(false);
      } else {
        setNavbarTransparent(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${navbarTransparent ? 'transparent' : 'solid'}`}>
        <nav>
          <div
            className={`hamburger-icon ${navbarTransparent ? 'icon-transparent' : 'icon-solid'}`}
            onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>
          <ul className={isNavOpen ? 'nav-open' : ''}>
            <li onClick={() => handleScroll('home')}>Home</li>
            <li onClick={() => handleScroll('about')}>About</li>
            <li onClick={() => handleScroll('course')}>Course</li>
            <li onClick={() => handleScroll('slot')}>Book Slot</li>
            <li onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
          <button
            className={`sign-in-button ${navbarTransparent ? 'icon-transparent' : 'icon-solid'}`}
            onClick={openModal}>Sign In</button>
        </nav>
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
      </header>
      <main className='total-background'>
        <Home ref={sectionRefs.home} /><br/>
        <About ref={sectionRefs.about} /><br/><hr></hr><br/>
        <Course ref={sectionRefs.course} /><br/><br/>
        <Slot ref={sectionRefs.slot} /><br/> <hr></hr><br/>
        <Contact ref={sectionRefs.contact} /><br/>
      </main>
    </>
  );
};

export { Navbar, useNavbarScroll };
