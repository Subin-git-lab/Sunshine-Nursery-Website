import React from 'react';
import sun from '../assets/aboutUsImages/sun.png';
import cloud from '../assets/aboutUsImages/cloud.png';
import wave from '../assets/aboutUsImages/wave.png';
import children from '../assets/GalleryImages/children.png';
import slide from '../assets/HeroImages/slide.jpg';
import flower1 from '../assets/GalleryImages/flower1.png'; 
import flower2 from '../assets/GalleryImages/flower2.png'; 
 
import gal1 from '../assets/GalleryImages/gal1.png'; 
import gal2 from '../assets/GalleryImages/gal2.png'; 
import gal3 from '../assets/GalleryImages/gal3.png'; 
import gal4 from '../assets/GalleryImages/gal4.png'; 
import gal5 from '../assets/GalleryImages/gal5.png'; 
import gal6 from '../assets/GalleryImages/gal6.png'; 
import gal7 from '../assets/GalleryImages/gal7.png'; 
import gal8 from '../assets/GalleryImages/gal8.png'; 
import gal9 from '../assets/GalleryImages/gal9.png'; 
import gal10 from '../assets/GalleryImages/gal10.png'; 
import gal11 from '../assets/GalleryImages/gal11.png'; 
import gal12 from '../assets/GalleryImages/gal12.png'; 

import About from "../sections/About";
import CTA from '../sections/CTA';

// Connected your imported image variables (gal1, gal2, etc.) to the array
const galleryItems = [
  { id: 1, category: 'class room', label: 'Class room activities', img: gal1 },
  { id: 2, category: 'class room', label: 'Class room activities', img: gal2 },
  { id: 3, category: 'Outdoors', label: 'Outside activities', img: gal3 },
  { id: 4, category: 'Outdoors', label: 'Outside activities', img: gal4 },
  { id: 5, category: 'Outdoors', label: 'Outside activities', img: gal5 },
  { id: 6, category: 'Events', label: 'Events', img: gal6 },
  { id: 7, category: 'Events', label: 'Events', img: gal7 },
  { id: 8, category: 'Events', label: 'Events', img: gal8 },
  { id: 9, category: 'Events', label: 'Events', img: gal9 },
  { id: 10, category: 'class room', label: 'Classroom Activities', img: gal10 },
  { id: 11, category: 'Outdoors', label: 'Outdoor Activities', img: gal11 },
  { id: 12, category: 'Events', label: 'Events', img: gal12 },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState('All');

  return (
    <>
      <div style={{ 
        background: 'linear-gradient(95deg, #A8D6FF 0%, #95FB99 100%)',
        paddingTop: '250px', 
        paddingBottom: '100px', 
        fontFamily: "'Fredoka', sans-serif", 
        position: 'relative', 
        overflow: 'hidden',
        minHeight: '95vh'
      }}>
        <div className="container">
          <div className="row align-items-center">
            
            {/* LEFT COLUMN */}
            <div className="col-12 col-md-6 position-relative mb-5 mb-md-0">
              {sun && (
                <img 
                  src={sun} 
                  alt="Sun decoration" 
                  style={{ position: 'absolute', top: '-60px', left: '530px', width: '100px', height: '100px' }} 
                />
              )}

              <h2 className="display-6 fw-bold text-dark p-3 m-0">OUR <br/>
                <span style={{ color: '#FF3B7A' }}>G</span>
                <span style={{ color: '#5FAF37' }}>a</span>
                <span style={{ color: '#FF3B7A' }}>ll</span>
                <span style={{ color: '#00477C' }}>e</span>
                <span style={{ color: '#FF3B7A' }}>r</span>
                <span style={{ color: '#5FAF37' }}>y</span>
              </h2>

              <p className="fs-5 fw-bold p-3" style={{color:'#000000'}}>
                A glimpse into the joyful learning, <br/>
                laughter, and love that fill our days.
              </p>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-12 col-md-6 p-0 d-flex justify-content-end">
              <div style={{
                width: '100%',
                maxWidth: '750px',
                position: 'absolute',
                right: '0px',
                top: '100px',
                bottom: '0px',
                zIndex: '4',
                height: '100%',   
                overflow: 'hidden',
                borderRadius: '100% 0% 0% 100% / 50% 0% 0% 50%',
                WebkitBorderRadius: '100% 0% 0% 100% / 50% 0% 0% 50%'
              }}>
                <img 
                  src={children}
                  alt="Children playing" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'contain',
                    objectPosition: 'right center'
                  }} 
                />
              </div>
            </div>

          </div>

          {/* Left Grass */}
          <div style={{ position: 'absolute', top: '515px', left: '1px', zIndex: 5 }}>
            <img src={flower1} alt="grass left" style={{ width: '100%', height: '150px' }} />
          </div>

          {/* Center Grass */}
          <div style={{ position: 'absolute', top: '520px', left: '750px', zIndex: '5' }}>
            <img src={flower2} alt="grass center" style={{ width: '100%', height: '150px' }} />
          </div>
        </div>
        
        {/* Wave Layer */}
        {wave && (
          <img 
            src={wave} 
            alt="wave decor" 
            style={{
              position: 'absolute',
              bottom: '-2px', 
              left: '0',
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(10px -8px 0px #7cdf7f)',
              zIndex: '5'
            }}
          />
        )}
      </div> 

      {/* --- GALLERY FILTER SECTION --- */}
      <section style={{ 
        backgroundColor: '#ffffff', 
        paddingTop: '60px', 
        paddingBottom: '60px',
        fontFamily: "'Fredoka', sans-serif"
      }}>
        <div className="container">
          
          {/* THE FILTER BUTTON BAR */}
          <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
            {['All', 'class room', 'Activity', 'Playtime', 'Events', 'Celebrations', 'Outdoors'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="btn fw-bold px-4 py-2" 
                style={{ 
                  backgroundColor: activeCategory === cat ? '#E94E77' : '#fff', 
                  color: activeCategory === cat ? '#fff' : '#000', 
                  borderRadius: '25px', 
                  border: activeCategory === cat ? 'none' : '1px solid #ced4da',
                  textTransform: 'capitalize',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* THE AUTOMATIC FILTER GRID */}
          <div className="row g-4 justify-content-center">
            {galleryItems
              // Keeps items matching clicked button, or keeps all items if 'All' is active
              .filter(item => activeCategory === 'All' || item.category === activeCategory)
              // Loops through remaining images to display them dynamically
              .map((item) => (
                <div key={item.id} className="col-12 col-sm-6 col-lg-3 text-center">
                  <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '20px', backgroundColor: '#f0f0f0' }}>
                    <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <p className="fw-bold text-dark mt-2 small">{item.label}</p>
                </div>
              ))}
          </div>

        </div>
      </section> 

      <About/>
      <CTA /> 
    </>
  );
}

export default Gallery;