import React from 'react';

export default function LessonModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{content?.title || 'TimeRiot ვიდეო ტური'}</h2>
        <div style={{ marginTop: '20px', color: '#ccc' }}>
          {content ? (
            <p>{content.description} - აქ ჩაიტვირთება გაფართოებული ტექსტური მასალა და ქვიზები.</p>
          ) : (
            <p>აქ ჩაირთვება საინტროდუქციო ვიდეო/პოდკასტი პროექტის შესახებ.</p>
          )}
        </div>
      </div>
    </div>
  );
}