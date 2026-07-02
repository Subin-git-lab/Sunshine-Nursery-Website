import React from 'react';

export default function Testimonials() {
  const quotes = [
    { text: "Sunshine Nursery is a wonderful place! My daughter loves going here every day and has learned so much through play.", author: "Sneha R.", rating: "⭐⭐⭐⭐⭐" },
    { text: "The teachers are so caring and supportive. We are happy to see our son grow confident and independent.", author: "Arun Kumar", rating: "⭐⭐⭐⭐⭐" },
    { text: "A safe, clean and friendly environment. Sunshine Nursery truly lives up to its name!", author: "Priya S.", rating: "⭐⭐⭐⭐⭐" }
  ];

  return (
    <section style={{ padding: '2rem 1.5rem', background: '#fbf9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center',color: '#ff0c6d', fontSize: '2.5rem', marginBlockEnd: '3rem' }}>What Parents Say</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {quotes.map((q, idx) => (
            <div key={idx} style={{ background: '#efcae4', padding: '2rem', borderRadius: '1rem', border: '1px solid #E2E8F0', position: 'relative' }}>
              <div style={{ color: 'var(--primary-pink)', fontSize: '2rem', lineHeight: '1', fontFamily: 'serif' }}>“</div>
              <p style={{ color: '#4A5568', italic: 'true', marginBlockEnd: '1.5rem' }}>{q.text}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>- {q.author}</span>
                <span>{q.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}