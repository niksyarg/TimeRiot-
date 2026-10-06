import React from 'react';

export default function TeacherCard({ name, university, experience, brand, imageUrl, isOnline }) {
  return (
    <div className="teacher-card">
      <div className="profile-container">
        <img src={imageUrl} alt={name} className="profile-img" />
        {isOnline && <span className="status-badge">✓</span>}
      </div>
      <div>
        <span className="brand-tag">{brand}</span>
        <h3 className="profile-name">{name}</h3>
        <p className="university-tag">{university}</p>
        <p className="experience-tag">{experience}</p>
      </div>
    </div>
  );
}