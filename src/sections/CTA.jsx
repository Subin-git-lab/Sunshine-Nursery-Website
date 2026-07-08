import React from 'react';
import bag from '../assets/HeroImages/bag.png';
import arrow from '../assets/HeroImages/arrow.png';

export default function CTASection() {
  return (
    <section className="py-4 bg-white" style={{ fontFamily: 'sans-serif' }}>
      <div className="container-fluid">
        
        <div 
          className="p-4 px-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 text-white position-relative" 
          style={{ 
            backgroundColor: '#E84E88', 
            borderRadius: '40px 40px 0px 0px'
          }}
        >
          {/* Left Side Content (Icon + Text) */}
          <div className="d-flex flex-column flex-sm-row align-items-center gap-4 text-center text-sm-start">
            <div style={{ width: '80px', height: '80px' }} className="flex-shrink-0">
              <img 
                src={bag}
                alt="School Bag" 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              />
            </div>

            <div>
              <h2 className="fw-bold mb-1" style={{ fontSize: '1.75rem', letterSpacing: '-0.5px' }}>
                Ready to Brighten Your Child's Future?
              </h2>
              <p className="mb-0 fw-medium opacity-90" style={{ fontSize: '1.05rem' }}>
                Join Sunshine Nursery today!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}