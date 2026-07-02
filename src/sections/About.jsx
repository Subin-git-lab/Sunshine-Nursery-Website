import React from 'react';
import kidsDrawingImage from '../assets/3children.jpg';

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 1.5rem', background: '#FFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        
        <div style={{ textAlign: 'center' }}>
          {/* We apply the background image rules right here on the block-level layout div */}
          <div 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              height: '300px', 
              borderRadius: '1rem', 
              margin: '0 auto',
              backgroundImage: `url(${kidsDrawingImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }} 
          />
        </div>

        <div>
          <h2 style={{ fontSize: '2.5rem',color: '#ff0c6d', marginBlockEnd: '1rem' }}>About Sunshine Nursery</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#4A5568', marginBlockEnd: '1.5rem' }}>
            At Sunshine Nursery, we provide a warm, caring and stimulating environment where children learn through play, creativity, music, stories and activities. We focus on the overall development of each child-socially, emotionally physically and intellectually.[cite: 2]
          </p>
          <button style={{ backgroundColor: '#f80a0a', color: 'white', border: 'none', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer' }}>
              Learn More About Us
            </button>
        </div>

      </div>
    </section>
  );
}