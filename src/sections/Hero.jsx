import React from 'react';
// Save the background scene illustration inside your local project assets directory
import heroIllustration from '../assets/background.jpg'; 

export default function Hero() {
  return (
    <section id="home" className="hero-section" style={{
      backgroundImage: `url(${heroIllustration})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
        
        {/* Left Side Content Overlaid on top of the image field */}
        <div className="hero-text-block" style={{ maxWidth: '500px', padding: '1rem', borderRadius: '2rem' }}>
          <h1 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '3rem', color: '#2D3748', lineHeight: '1.2', marginBlockEnd: '1rem' }}>
            A Happy Place <br />
            To <span style={{ color: '#3B82F6' }}>Learn</span> & <span style={{ color: '#059263' }}>Grow</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#4A5568', marginBlockEnd: '2rem', lineHeight: '1.5' }}>
            Inspiring young minds to explore, imagine and achieve every day.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button style={{ backgroundColor: '#f80a0a', color: 'white', border: 'none', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer' }}>
              Enroll Now ➔
            </button>
            <button style={{ backgroundColor: 'white', color: '#2169dc', border: '2px solid #3B82F6', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer' }}>
              Contact Us ➔
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}