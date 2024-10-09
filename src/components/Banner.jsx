import React from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import '../App.css';


function Banner() {
  
  useEffect(() => {
    let tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      ease: 'expo.out',
    });
  
    let del = 3;
    let i = 1;
  
    // Animate the first hero section
    gsap.set(["#hero-1 h2, #hero-1 h1, #hero-1 h3"], {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    });
  
    // Set initial state for other hero sections
    gsap.set(
      [
        '#hero-2 h2, #hero-3 h2, #hero-4 h2, #hero-5 h2',
        '#hero-2 h1, #hero-3 h1, #hero-4 h1, #hero-5 h1',
        '#hero-2 h3, #hero-3 h3, #hero-4 h3, #hero-5 h3',
      ],
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      }
    );
  
    // Animation loop for transitioning between hero sections
    while (i < 5) {
      tl.to(`#hero-${i} h2`, 0.9, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        delay: del,
      })
        .to(
          `#hero-${i} h1`,
          0.9,
          {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          },
          '-=0.3'
        )
        .to(
          `#hero-${i} h3`,
          0.9,
          {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          },
          '-=0.3'
        )
        .to(
          `#hero-${i} .hi-${i}`,
          0.7,
          {
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          },
          '-=1'
        )
        .to(`#hero-${i + 1} h2`, 0.9, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        })
        .to(
          `#hero-${i + 1} h1`,
          0.9,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
          '-=0.3'
        )
        .to(
          `#hero-${i + 1} h3`,
          0.9,
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
          '-=0.3'
        );
  
      i++;
    }
  }, []);
  

  return (
    <div className=''>
      <div className="">
        <header className="">
        {/* begin navbar  */}
          <nav>
            <h1>Lopez Landscaping</h1>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        {/*  end of navbar  */}
        {/* hero page beins */}
          <main>
            {/* first animation */}
            <article id="hero-1" style={{ '--i': 5 }}>
              <div className="hero-info">
                <h2>Lopez Landscaping</h2>
                <h1>Family-Owned</h1>
                <h3>Bringing Your Dream Yard to Life</h3>
              </div>
              <div className="hero-image hi-1"></div>
            </article>
            {/* second animation */}
            <article id="hero-2" style={{ '--i': 4 }}>
              <div className="hero-info">
                <h2>Transform Your Outdoors </h2>
                <h1>Personalized care</h1>
                <h3> for picture-perfect landscapes.</h3>
              </div>
              <div className="hero-image hi-2"></div>
            </article>
            {/* third animation */}
            <article id="hero-3" style={{ '--i': 3 }}>
              <div className="hero-info">
                <h2>Trusted for</h2>
                <h1>20 years</h1>
                <h3>Your yard’s beauty is our priority</h3>
              </div>
              <div className="hero-image hi-3"></div>
            </article>
            {/* fourth animation */}
            <article id="hero-4" style={{ '--i': 2 }}>
              <div className="hero-info">
                <h2>Precision, Quality</h2>
                <h1>Perfection</h1>
                <h3>We craft beautiful landscapes you’ll love. </h3>
              </div>
              <div className="hero-image hi-4"></div>
            </article>
            {/* fifth animation */}
            <article id="hero-5" style={{ '--i': 1 }}>
              <div className="hero-info">
                <h2>Elevate Your </h2>
                <h1>Curb Appeal</h1>
                <h3> Tailored landscaping that makes a lasting impression</h3>
              </div>
              <div className="hero-image hi-5"></div>
            </article>
          </main>
          {/* end of hero page */}
          {/* about us page  */}
        </header>

      </div>
    </div>
  )
}

export default Banner