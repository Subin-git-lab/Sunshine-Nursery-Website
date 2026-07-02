import React from 'react';

export default function Programs() {
  const matchingPrograms = [
    { name: "Play Group", desc: "Fun activities & play based learning", icon: "🧸" },
    { name: "Nursery", desc: "Building basics through play", icon: "🎨" },
    { name: "KG Classes", desc: "Preparing kids for the future", icon: "🧱" },
    { name: "Art & Craft", desc: "Encouraging creativity", icon: "✂️" },
    { name: "Music & Dance", desc: "Rhythm, movement & expression", icon: "🎵" }
  ];

  return (
    <section id="programs" style={{backgroundColor: '#FFFFFF' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#ff0c6d', marginBlockEnd: '3rem',padding: '2rem' }}>Our Programs</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {matchingPrograms.map((item, index) => (
            <div key={index} style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '1rem', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', marginBlockEnd: '1rem' }}>{item.icon}</div>
              <h3 style={{ marginBlockEnd: '0.5rem', color: '#1A202C' }}>{item.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}