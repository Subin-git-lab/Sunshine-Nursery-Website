import React from 'react';

export default function CTA() {
  return (
<div className="container" style={{ padding: '4rem 1.5rem',marginBlockEnd: '1.5rem',borderRadius: '3rem', backgroundColor: '#f5468c', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', marginBlockEnd: '0.5rem' }}>Ready to Brighten Your Child's Future?</h2>
        <p style={{ fontSize: '1.2rem', marginBlockEnd: '2rem' }}>Join Sunshine Nursery today!</p>
        <button style={{ backgroundColor: '#f4be1b', color: 'black', border: 'none', padding: '0.75rem 1.75rem', borderRadius: '9999px', fontWeight: '700', cursor: 'pointer' }}>
              Enroll Now ➔
            </button>
      </div>
    </div>
  );
}