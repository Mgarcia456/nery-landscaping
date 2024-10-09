import React from 'react'
import '../App.css';
import aboutImage from '../assets/images/about-us.jpg'; 

function About() {
  return (
    <div className='h-100'>
      <div class="responsive-container-block bigContainer">
            <div class="responsive-container-block Container bottomContainer">
              <div class="ultimateImg">
                <img class="mainImg" src={aboutImage}/>
                <div class="purpleBox">
                  <p class="purpleText">
                  Their team is friendly, professional, and always ensures my yard looks its best. Whether for maintenance or new projects, they consistently exceed expectations.
                  </p>
                  <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"/>
                </div>
              </div>
              <div class="allText bottomText">
                <p class="text-blk headingText">
                  About Our Company
                </p>
                <p class="text-blk subHeadingText">
                  Lopez Landscaping
                </p>
                <p class="text-blk description">
                For over 20 years, we’ve been transforming outdoor spaces into stunning landscapes that reflect your unique vision. 
                Whether it's lush gardens, flawless lawns, or customized hardscapes, our experienced team ensures every detail is 
                crafted to perfection. Trust us to enhance the beauty and value of your property with care and precision that’s stood the test of time. 
                Let’s create your dream outdoor oasis today!
                <br/>
                <br/>Call us Today! at <a className='text-green-600' href="tel:+17862749848">786-274-9848 </a>
                </p>
                <a class="explore" href="tel:+17862749848">
                  contact us now 
                </a>
              </div>
            </div>
      </div>
    </div>
  )
}

export default About