import React from 'react';


import children from '../assets/aboutUsImages/children.png';
import love from '../assets/aboutUsImages/love.png';
import sun from '../assets/aboutUsImages/sun.png';
import tick from '../assets/aboutUsImages/tick.png';
import cloud from '../assets/aboutUsImages/cloud.png';
import wave from '../assets/aboutUsImages/wave.png';
import school from '../assets/aboutUsImages/school.png';
import redarrow from '../assets/aboutUsImages/redarrow.png';
import scope from '../assets/aboutUsImages/scope.png';
import contact from '../assets/aboutUsImages/contact.png';
import yellow from '../assets/aboutUsImages/yellow.png';
import degree from '../assets/aboutUsImages/degree.png';
import blue from '../assets/aboutUsImages/blue.png';
import fam from '../assets/aboutUsImages/fam.png';
import aswini from '../assets/aboutUsImages/aswini.png';

import About from "../sections/About";
import CTA from '../sections/CTA';


export default function AboutUs() {    

  return (
    <>
    <div style={{ 
      backgroundColor: '#E3F2FD', 
      paddingTop: '180px', 
      paddingBottom: '100px', 
      fontFamily: "'Fredoka', sans-serif", 
      position: 'relative', 
      overflow: 'hidden',
      minHeight: '95vh'
    }}>
      
      
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT COLUMN: Takes full width on small screens, 6-columns on medium+ screens */}
          <div className="col-12 col-md-6 position-relative mb-5 mb-md-0">
            
            {/* Sun Image Placeholder */}
            {sun && (
              <img 
                src={sun} 
                alt="Sun decoration" 
                style={{ position: 'absolute', top: '-60px', left: '560px', width: '100px', height: '100px' }} 
              />
            )}
            <img 
              src={cloud} 
              alt="Cloud decoration" 
              style={{ 
                position: 'absolute', 
                top: '100px',      
                left: '640px',     
                width: '170px',    
                height: 'auto',
                opacity: 0.9,      
                zIndex: 1          
              }} 
            />

            <h2 className="display-6 fw-bold text-dark m-0">About</h2>
            <h1 className="display-4 fw-bold mb-4">
              <span style={{ color: '#FF3B7A' }}>Sunshine</span>{' '}
              <span style={{ color: '#4CAF50' }}>Nursery</span>
            </h1>

            <p className="fs-5 text-dark fw-semibold mb-5" style={{ maxWidth: '420px', lineHeight: '1.6' }}>
              <b>where little minds learn, play, grow and shine every day.</b>
            </p>

            {/* Features Rows using Bootstrap Grid */}
            <div className="row g-4">
              
              {/* Feature 1: Nurturing Hearts */}
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#FF3B7A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginRight: '1rem'
                }}>
                  {love ? (
                    <img src={love} alt="Love icon" style={{ width: '70px', height: '70px' }} />
                  ) : (
                    <span style={{ color: 'white', fontSize: '1.5rem' }}>❤️</span>
                  )}
                </div>
                <div>
                  <h5 className="fw-bold m-0 text-dark">Nuturing Hearts</h5>
                  <p className="small text-muted m-0 fw-medium">We care with love and compassion</p>
                </div>
              </div>

              {/* Feature 2: Building Future */}
              <div className="col-12 col-sm-6 d-flex align-items-center">
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#42A5F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginRight: '1rem'
                }}>
                  {tick ? (
                    <img src={tick} alt="Blue tick icon" style={{ width: '70px', height: '70px' }} />
                  ) : (
                    <span style={{ color: 'white', fontSize: '1.5rem' }}>🛡️</span>
                  )}
                </div>
                <div>
                  <h5 className="fw-bold m-0 text-dark">Building Future</h5>
                  <p className="small text-muted m-0 fw-medium">We prepare children for a bright tomorrow</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Matches the exact shape and layout from image_83d45f.jpg */}
          <div className="col-12 col-md-6 p-0 d-flex justify-content-end">
            <div style={{
              width: '100%',
              maxWidth: '900px',
              position: 'relative',
              zIndex: '4',
              marginTop: '-120px',
              marginRight:'-100px', 
              height: '570px',   
              borderRadius: '70% 0% 0% 50% / 60% 0% 0% 40%', // Creates that deep sweeping left curve
              overflow: 'hidden',
              backgroundColor: '#FFB800',
              transform: 'translateY(100px)'
            }}>
              <img 
                src={children} 
                alt="Children playing" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }} 
              />
            </div>
          </div>

        </div>
        
      </div>
      <img 
          src={wave} 
          alt="wave decor" 
          style={{
            position: 'absolute',
            bottom: '-2px', // Snaps tightly to the bottom line to eliminate pixel gaps
            left: '0',
            width: '100%',
            height: 'auto',
            zIndex: '8',
            filter: 'drop-shadow(0px -10px 0px #7cdf7f)'
          }}
          
        />
    </div>
    
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      paddingTop: '80px', 
      paddingBottom: '80px', 
      fontFamily: "'Fredoka', sans-serif" 
    }}>
      <div className="container py-2">
        
        {/* --- SECTION 1: OUR STORY --- */}
        <div className="row align-items-center mb-5 pb-3">
          
          {/* Left Column: School Image Box */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div style={{
              overflow: 'hidden',
            }}>
              <img 
                src={school}
                alt="Sunshine Nursery School Building" 
                className="img-fluid w-100"
                style={{ objectFit: 'cover', display: 'block', height: 'auto' }}
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="col-12 col-md-6 ps-md-4">
            <h2 className="display-6 fw-bold mb-3" style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ color: '#FF3B7A', textDecoration: 'underline', textUnderlineOffset: '8px' }}>
                Our Story
              </span>
            </h2>
            
            <p className="fs-5 text-secondary mt-3" style={{ lineHeight: '1.7', fontWeight: '400' }}>
              Founded With A Passion For Early Childhood Education, Sunshine Nursery Has Been Nurturing 
              Young Minds For Over A Decade. We Provide A Safe, Joyful, And Inspiring Environment Where 
              Children Can Explore, Learn, And Grow With Confidence.
            </p>
            <p className="fs-5 text-secondary" style={{ lineHeight: '1.7', fontWeight: '400' }}>
              Our Dedicated Educators Create Engaging Learning Experiences That Foster Creativity, Curiosity, 
              Social Development, And A Lifelong Love For Learning.
            </p>
          </div>

        </div>

        {/* --- SECTION 2: MISSION & VISION CARDS --- */}
        <div className="row g-4 mt-2">
          
          {/* Left Card: Our Mission (Pink Box) */}
          <div className="col-12 col-md-6">
            <div className="h-100 p-4 d-flex align-items-center" style={{
              backgroundColor: '#FFE1EA',
              border: '2px solid #FFB7CE',
              borderRadius: '24px',
              minHeight: '160px'
            }}>
              <div className="d-flex align-items-center w-100">
                {/* Icon wrapper */}
                <div className="me-4 flex-shrink-0" style={{ width: '85px' }}>
                  <img 
                    src={redarrow}
                    alt="Target Icon" 
                    className="img-fluid" 
                  />
                </div>
                {/* Content */}
                <div>
                  <h4 className="fw-bold mb-2" style={{ color: '#FF3B7A' }}>
                    <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Our Mission</span>
                  </h4>
                  <p className="m-0 text-dark fw-medium" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                    To provide a safe, loving and stimulating environment where childern learn through play, creativity and meaningful experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Our Vision / Mission (Blue Box) */}
          <div className="col-12 col-md-6">
            <div className="h-100 p-4 d-flex align-items-center" style={{
              backgroundColor: '#D2EAFF',
              border: '2px solid #99CFFF',
              borderRadius: '24px',
              minHeight: '160px'
            }}>
              <div className="d-flex align-items-center w-100">
                {/* Icon wrapper */}
                <div className="me-4 flex-shrink-0" style={{ width: '85px' }}>
                  <img 
                    src={scope}
                    alt="Telescope Icon" 
                    className="img-fluid" 
                  />
                </div>
                {/* Content */}
                <div>
                  <h4 className="fw-bold mb-2" style={{ color: '#0288D1' }}>
                    <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>Our Mission</span>
                  </h4>
                  <p className="m-0 text-dark fw-medium" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                    To be leading early childhood center that inspire young minds to become confidence, curious and compassionate lifelong learners.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>


    {/* What Makes Us Special */}

  {/* What Makes Us Special */}
<section className="py-2 bg-white" style={{ fontFamily: 'sans-serif' }}>
  <div className="container position-relative">
    
    {/* 1. SECTION TITLE */}
    <div className="text-center mb-4">
      <h2 style={{ color: '#E84E88', fontWeight: '700' }}>
        What Makes us Special ♡
      </h2>
    </div>

    <div className="container py-5">
      <div className="row justify-content-center g-4">
        
        {/* Item 1: Child-centered Approach */}
        <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
          {/* Circular icon container */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
            style={{ width: '85px', height: '85px', backgroundColor: '#5CB85C' }}
          >
            <img 
              src={contact}
              alt="decoration" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          {/* Text block */}
          <div>
            <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>
              Child -centered Approach
            </h5>
            <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
              we focus on each child's individual needs and learn style.
            </p>
          </div>
        </div>

        {/* Item 2: Safe and secure enviorment */}
        <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
          {/* Circular icon container */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
            style={{ width: '85px', height: '85px', backgroundColor: '#E4B63C' }}
          >
            <img 
              src={yellow}
              alt="decoration" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          {/* Text block */}
          <div>
            <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>
              Safe and secure enviorment
            </h5>
            <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
              Hygienic , secure and child- friendly spaces for peace of mind.
            </p>
          </div>
        </div>

        {/* Item 3: Qualified & Caring Educators */}
        <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
          {/* Circular icon container */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
            style={{ width: '85px', height: '85px', backgroundColor: '#EC4B82' }}
          >
            <img 
              src={degree}
              alt="decoration" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          {/* Text block */}
          <div>
            <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>
              Qualified & Caring Educators
            </h5>
            <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
              Experienced teachers who inspire, guide and support every child
            </p>
          </div>
        </div>

        {/* Item 4: Play- Based Learning */}
        <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
          {/* Circular icon container */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
            style={{ width: '85px', height: '85px', backgroundColor: '#8E44AD' }}
          >
            <img 
              src={blue}
              alt="decoration" 
              style={{ width: '130%', height: '130%', objectFit: 'contain' }} 
            />
          </div>
          {/* Text block */}
          <div>
            <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>
              Play- Based Learning
            </h5>
            <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
              Learning through play, exploration and fun activities.
            </p>
          </div>
        </div>

        {/* Item 5: Strong parent paratnership */}
        <div className="col-12 col-md-2 d-flex flex-column align-items-center text-center">
          {/* Circular icon container */}
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 mb-3"
            style={{ width: '85px', height: '85px', backgroundColor: '#0A84FF' }}
          >
            <img 
              src={fam}
              alt="decoration" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>
          {/* Text block */}
          <div>
            <h5 className="mb-2 fw-bold text-dark lh-sm" style={{ fontSize: '1.1rem' }}>
              Strong parent paratnership
            </h5>
            <p className="text-secondary small mb-0" style={{ lineHeight: '1.4', fontSize: '0.85rem' }}>
              we work closely with parents for holistic child develipment.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* Meet our Team */}

{/* Meet our Team Section */}
<section className="py-2 bg-white" style={{ fontFamily: 'sans-serif' }}>
  <div className="container text-center">
    
    {/* SECTION TITLE */}
    <div className="mb-5">
      <h2 style={{ color: '#E84E88', fontWeight: '700', fontSize: '2.5rem' }}>
        Meet our Team ♡
      </h2>
    </div>

    {/* CARDS GRID */}
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
      
      {/* Team Member 1 */}
      <div className="col">
        <div className="h-100 p-4 d-flex flex-column align-items-center" style={{
          backgroundColor: '#FFEBF1',
          border: '1px solid #FFC2D6',
          borderRadius: '24px'
        }}>
          {/* Circular Image Container */}
          <div className="mb-3 overflow-hidden rounded-circle" style={{ width: '110px', height: '110px' }}>
            <img 
              src={aswini}
              alt="Aswini singh" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          {/* Member Info */}
          <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
          <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
            10+ years of experience in early childhood education and leadership.
          </p>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col">
        <div className="h-100 p-4 d-flex flex-column align-items-center" style={{
          backgroundColor: '#FFEBF1',
          border: '1px solid #FFC2D6',
          borderRadius: '24px'
        }}>
          {/* Circular Image Container */}
          <div className="mb-3 overflow-hidden rounded-circle" style={{ width: '110px', height: '110px' }}>
            <img 
              src={aswini}
              alt="Aswini singh" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          {/* Member Info */}
          <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
          <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
            10+ years of experience in early childhood education and leadership.
          </p>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="col">
        <div className="h-100 p-4 d-flex flex-column align-items-center" style={{
          backgroundColor: '#FFEBF1',
          border: '1px solid #FFC2D6',
          borderRadius: '24px'
        }}>
          {/* Circular Image Container */}
          <div className="mb-3 overflow-hidden rounded-circle" style={{ width: '110px', height: '110px' }}>
            <img 
              src={aswini}
              alt="Aswini singh" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          {/* Member Info */}
          <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
          <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
            10+ years of experience in early childhood education and leadership.
          </p>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="col">
        <div className="h-100 p-4 d-flex flex-column align-items-center" style={{
          backgroundColor: '#FFEBF1',
          border: '1px solid #FFC2D6',
          borderRadius: '24px'
        }}>
          {/* Circular Image Container */}
          <div className="mb-3 overflow-hidden rounded-circle" style={{ width: '110px', height: '110px' }}>
            <img 
              src={aswini}
              alt="Aswini singh" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          {/* Member Info */}
          <h4 className="fw-bold text-dark mb-2" style={{ fontSize: '1.25rem' }}>Aswini singh</h4>
          <p className="text-secondary fw-normal m-0" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
            10+ years of experience in early childhood education and leadership.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    <About/>
    <CTA />
    </>
    
  );
}