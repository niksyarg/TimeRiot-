import React from 'react';

export default function Header() {
  const navItems = ['მთავარი', 'მასალები', 'კურსები', 'კონტაქტი'];

  return (
    <header>
      <div className="logo">
        Time<span>Riot</span>
      </div>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}