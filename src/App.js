import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ReactDetails from './Components/CourseDetails/react';
import { Navbar } from './Components/Navbar/navbar';
import Slot from './Components/Slot/slot';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path='/slot' element={<Slot/>} />
          <Route path="/react-details" element={<ReactDetails />} />
        </Routes>
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Router>
  );
};

export default App;
