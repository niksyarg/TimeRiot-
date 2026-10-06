import React from 'react';

export default function LessonCard({ badge, title, description, onOpen }) {
  return (
    <div className="card">
      {badge && <span className="card-badge">{badge}</span>}
      <h3>{title}</h3>
      <p style={{ color: '#aaa', marginTop: '10px' }}>{description}</p>
      <button className="btn-card" onClick={onOpen}>გახსნა</button>
    </div>
  );
}