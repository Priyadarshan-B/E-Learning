import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos'
import 'aos/dist/aos.css';

var width = window.innerWidth;

  if (width <= 600) { 
    AOS.init({
      offset: 200, 
      duration: 1000
    });
  } else if (width > 600 && width <= 900) { 
    AOS.init({
      offset: 300,
      duration: 1000
    });
  } else { 
    AOS.init(
      {
        offset: 300,
      duration: 2000
      }
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
