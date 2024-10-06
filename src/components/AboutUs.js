import React from 'react'
import '../components/AboutUs.css';
import OfficePic from '../assets/AboutUsGif.gif';

function AboutUs(){
    return(
        <div className='aboutUs'>
            <img src={OfficePic} alt="Officepic"/>
            <div>
                <h1>Who We Are</h1>
                <p>TechNative is a forward-thinking technology solutions provider, committed to empowering businesses 
                    through cutting-edge innovation and unparalleled service. Founded with a vision to simplify the 
                    complexities of digital transformation, we specialize in delivering custom tech solutions that 
                    drive efficiency and growth. Our mission is to bridge the gap between business needs and 
                    technological advancements, ensuring that our clients stay ahead in today’s fast-paced 
                    digital landscape. With a team of experts who are passionate about technology, 
                    we’ve built a reputation for delivering results-driven solutions that exceed expectations.
                </p>

                <h2>10+ years in business</h2>
                <h2>500+ successful projects completed</h2>
                <h2>98% client satisfaction rating</h2>
            </div>
        </div>
    )
}

export default AboutUs;