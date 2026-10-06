import React from 'react';

export default function VideoBox({ onClick }) {
  return (
    <div className="video-box" onClick={onClick} role="button" tabIndex={0}>
      <span className="play-button">▶</span>
      <p>ნახე ვიდეო ტური</p>
    </div>
  );
}