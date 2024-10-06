import logo from './assets/LOGO.jpeg'; 

import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';


import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App () {
  return (    
    <BrowserRouter>
      <div>
          <NavBar />  
          <Home />
          <AboutUs />
          <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/aboutUs' element={<AboutUs />}/>

          </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;