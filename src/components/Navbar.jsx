import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ background: '#FFFFFF', padding: '1rem 2rem', borderBottom: '1px solid #F0F0F0', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Exact Logo Match from image_60e711.jpg */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Smiling Sun Icon Graphic */}
          <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>☀️</span>
          <div>
            {/* Multi-colored letter spelling */}
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: '700', fontSize: '1.4rem', letterSpacing: '0.5px', marginBottom: '2px' }}>
              <span style={{ color: '#FF3B7A' }}>S</span>
              <span style={{ color: '#FF9F1C' }}>U</span>
              <span style={{ color: '#FFD166' }}>N</span>
              <span style={{ color: '#06D6A0' }}>S</span>
              <span style={{ color: '#118AB2' }}>H</span>
              <span style={{ color: '#FF3B7A' }}>I</span>
              <span style={{ color: '#FF9F1C' }}>N</span>
              <span style={{ color: '#06D6A0' }}>E</span>
            </div>
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: '600', fontSize: '0.85rem', letterSpacing: '3px', color: '#10B981', textAlign: 'center', lineHeight: 1 }}>
              NURSERY
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#home" style={{ textDecoration: 'none', color: '#FF3B7A', fontWeight: '700', borderBottom: '3px solid #FF3B7A', paddingBottom: '4px' }}>Home</a>
          <a href="#about" style={{ textDecoration: 'none', color: '#2D3748', fontWeight: '700' }}>About Us</a>
          <a href="#programs" style={{ textDecoration: 'none', color: '#2D3748', fontWeight: '700' }}>Programs</a>
          <a href="#gallery" style={{ textDecoration: 'none', color: '#2D3748', fontWeight: '700' }}>Gallery</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#2D3748', fontWeight: '700' }}>Contact Us</a>
          <button style={{ backgroundColor: '#FFB800', color: '#2D3748', border: 'none', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Enroll Now ➔
          </button>
        </div>

        {/* Mobile Hamburger Trigger (Visible via responsive CSS rules below) */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="mobile-drawer">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <button style={{ backgroundColor: '#FFB800', width: '100%', padding: '0.75rem', borderRadius: '9999px', border: 'none', fontWeight: '700' }}>Enroll Now ➔</button>
        </div>
      )}
    </nav>
  );
}