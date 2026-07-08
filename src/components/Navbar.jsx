import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/HeroImages/logo.jpg';


export default function Navbar() {
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '/home';
  const navbarBackground = isHomePage ? 'transparent' : '#78DAFC';

  return (
    <nav style={{ 
      background: navbarBackground, 
      padding: '1.75rem 2rem', 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100,
      transition: 'background 0.3s ease'
    }}>
      
      <style>{`
        .nav-link {
          text-decoration: none;
          color: #2D3748;
          font-weight: 790;
          font-family: 'Fredoka', sans-serif;
          font-size: 1.2rem;
          padding-bottom: 4px;
          border-bottom: 3px solid transparent;
          transition: all 0.2s ease;
        }
        
        /* This class is automatically applied by React Router when the link is active! */
        .nav-link.active {
          color: #FF3B7A !important;
          border-bottom: 3px solid #FF3B7A !important;
        }

        .nav-link:hover {
          color: #FF3B7A;
        }
      `}</style>

      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Left Side: Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <img 
            src={logo} 
            alt="Sunshine Nursery Logo" 
            style={{ width: '8.5rem', marginLeft: '3rem', height: '8.5rem', objectFit: 'contain', borderRadius: '50%' }} 
          />
        </div>

        {/* Center/Right: Navigation Links using NavLink */}
        <div className="nav-links">
          
          {/* end ensures "/" only highlights when exactly on the home page */}
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          
          <NavLink to="/programs" className="nav-link">Programs</NavLink>
          <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          <NavLink to="/contactus" className="nav-link">Contact Us</NavLink>

        </div>
      </div>
    </nav>
  );
}