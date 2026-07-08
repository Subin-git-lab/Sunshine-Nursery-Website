import React from 'react';
import '../sections/Admission.css';

import heroIllustration from '../assets/HeroImages/herobackground.jpg'; 
import wave from '../assets/HeroImages/wave.jpg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      backgroundImage: `url(${heroIllustration})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '4rem 2rem',
      margin: 0,
      maxWidth: '100vw',
      width: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'flex-start', boxSizing: 'border-box',padding: '6rem' }}>
        
        {/* Left Side Content Overlaid on top of the image field */}
        <div className="hero-text-block" style={{ maxWidth: '51.1875rem', height:'41rem', padding: '4rem', borderRadius: '2rem' }}>
          <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '3rem', color: '#2D3748', lineHeight: '1.2', marginBlockEnd: '1rem' }}>
            <b>A Happy Place </b><br />
            <b>To</b> <span style={{ color: '#3B82F6' }}><b>Learn</b></span> & <span style={{ color: '#059263' }}><b>Grow</b></span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4A5568', marginBlockEnd: '2rem', lineHeight: '1.5' }}>
            <b>Inspiring young minds to explore, imagine and achieve every day.</b>
          </p>
          <div style={{ display: 'flex', gap: '3.75rem', flexWrap: 'wrap' }}>
  <Link to="/contactus" className="admission-btn-link">
    <button className="admission-btn">
      
      {/* Container for the falling/raining toys */}
      <div className="toy-rain-container">
        <span className="toy book">📖</span>
        <span className="toy palette">🎨</span>
        <span className="toy blocks">🧱</span>
        <span className="toy rocket">🚀</span>


      </div>

      <span className="btn-text">Admission Open ➔</span>
    </button>
  </Link>
</div>
        </div>

      </div>
      <div style={{
        position: 'absolute',
        bottom: '-2px', /* Forces overlap to eliminate tiny structural lines */
        left: 0,
        width: '100%',
        lineHeight: 0,
        zIndex: 1
      }}>
        <img 
          src={wave} 
          alt="Transition Wave Divider" 
          style={{
            width: '100%',
            height: '60px',
            maxHeight: '130px', /* Keeps the scale aligned perfectly with the layout height */
            display: 'block'
          }} 
        />
      </div>
    </section>
  );
}