import logo from './assets/LOGO.jpeg'; 
import React from 'react';
//import ReactDOM from 'react-dom/client';

//import App from './App';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ServicePage from './components/ServicesPage';
import Testimonials from './components/TestimonialsPage';


import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App () {
  return (    
    <BrowserRouter>
      <div>
          <NavBar /> 
          <Home />

          <div id="AboutUs">
            <AboutUs />
          </div>
          <ServicePage />
          <Testimonials />
          
          {/* <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/aboutUs' element={<AboutUs />}/>

          </Routes> */}

      </div>
    </BrowserRouter>
  );
};

export default App;