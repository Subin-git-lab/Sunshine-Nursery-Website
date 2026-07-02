import React from 'react';
import moment1 from '../assets/moment1.jpg';
import moment2 from '../assets/moment2.jpg';
import moment3 from '../assets/moment3.jpg';
import moment4 from '../assets/moment4.jpg';
import moment5 from '../assets/moment5.jpg';
import moment6 from '../assets/moment6.jpg';
import moment7 from '../assets/moment7.jpg';


export default function WhyChooseUs() {
  const metrics = [
    { value: "150+", label: "Happy Students" },
    { value: "15+", label: "Qualified Teachers" },
    { value: "5+", label: "Years of Trust" },
    { value: "100%", label: "Safe & Secure" }
  ];

  const features = [
    { title: "Caring & Experienced Teachers", desc: "Our teachers are loving, qualified and dedicated." },
    { title: "Safe & Secure Environment", desc: "Your child's safety and well-being are our top priority." },
    { title: "Fun & Engaging Activities", desc: "We make learning fun with creative and interactive activities." },
    { title: "Individual Attention", desc: "We focus on each child's growth and development." },
    { title: "Clean & Colorful Classrooms", desc: "Bright, clean and child-friendly spaces for happy learning." }
  ];

  return (
    <section style={{ padding: '5rem 1.5rem', background: '#F0FDF4' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* Left Side: Layout Statistics Counters & New Gallery Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Statistics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ background: '#FFF', padding: '2rem', borderRadius: '1rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-pink)' }}>{m.value}</div>
                <div style={{ color: 'var(--text-dark)', fontWeight: '600' }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Exact Card Match from image_6da501.png placed inside your yellow-marked zone */}
          <div style={{ background: '#F8FAFC', borderRadius: '2rem', padding: '2rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #EDF2F7', maxWidth: '450px', margin: '0 auto', width: '100%' }}>
            
            {/* Card Header Title */}
            <h3 style={{ textAlign: 'center', color: '#ff0c6d', fontFamily: "'Fredoka', sans-serif", fontSize: '1.6rem', marginBlockEnd: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              Our Happy Moments <span style={{ fontSize: '1.2rem' }}>❤️</span>
            </h3>

            {/* Photo Grid Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBlockEnd: '1.5rem' }}>
              {/* Top Left Image */}
              <div style={{ height: '140px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage:`url(${moment1})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              {/* Top Right Image */}
              <div style={{ height: '140px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage:`url(${moment2})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              {/* Middle Left Image */}
              <div style={{ height: '140px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage: `url(${moment3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              {/* Middle Right Image */}
              <div style={{ height: '140px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage: `url(${moment4})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              {/* Bottom Wide Image Spanning Both Columns */}
              <div style={{ gridColumn: 'span 2', height: '180px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage:`url(${moment5})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

              <div style={{ height: '140px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage: `url(${moment6})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ height: '140px', background: '#CBD5E1', borderRadius: '1.2rem', backgroundImage: `url(${moment7})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

            </div>

    

          </div>

        </div>

        {/* Right Side: Reason List Elements */}
        <div>
          <h2 style={{ fontSize: '2.5rem', color: '#ff0c6d', marginBlockEnd: '2rem' }}>Why Parents Choose Us</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ color: '#10B981', fontSize: '1.2rem' }}>`✔`</div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#1A202C' }}>{f.title}</h4>
                  <p style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}