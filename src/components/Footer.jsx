import React from 'react';
import footerimage from '../assets/footer.jpg'; 

export default function Footer() {
  return (
    <footer id="contact" style={{backgroundImage: `url(${footerimage})`,backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat', color: '#1a1b1c', padding: '4rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem' }}>
        
        {/* About branding block */}
        <div>
          <h3 style={{ marginBlockEnd: '1rem', color: 'var(--primary-yellow)' }}>SUNSHINE NURSERY</h3>
          <p style={{ color: '#040404', lineHeight: '1.5' }}>Where little minds learn, play, grow and shine every day.</p>
        </div>

        {/* Quick Links array */}
        <div>
          <h4 style={{ marginBlockEnd: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><a href="#home" style={{ color: '#040404', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#about" style={{ color: '#040404', textDecoration: 'none' }}>About Us</a></li>
            <li><a href="#programs" style={{ color: '#040404', textDecoration: 'none' }}>Our Programs</a></li>
          </ul>
        </div>

        {/* Explicit PDF Contact Data */}
        <div>
          <h4 style={{ marginBlockEnd: '1rem' }}>Contact Us</h4>
          <p style={{ color: '#040404', marginBlockEnd: '0.5rem' }}>📞 +91 9876543210</p>
          <p style={{ color: '#040404', marginBlockEnd: '0.5rem' }}>✉ info@sunshinenursery.com</p>
          <p style={{ color: '#040404' }}>📍 123 Sunshine Street, Happy Town, 600001</p>
        </div>

      </div>
    </footer>
  );
}