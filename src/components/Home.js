import React from 'react'
import '../components/Home.css';
import BackgroundPic from '../assets/BackgroundPic01.jpg';


function Home(){
  return(
    <div className="HomePage">
      <div className='Background'>
        <div id="Background-Pic">
          <img src={BackgroundPic} alt="Background"/>
          <h2>Innovataive Software Solutions for Modern Businesses</h2>
          <p>Providing cutting-edge software, IT consulting, and cloud solutions to help your business grow.</p>

          <button className="cta-button cta-button1">
            <a href="#AboutUs">Learn More</a>
          </button>
          <button className="cta-button cta-button2">
            <a href="#getStarted">Get Started</a>
          </button>
        </div>        
      </div>
    </div>
  )

}
  
export default Home;