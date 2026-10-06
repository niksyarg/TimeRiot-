import React, { useState, useEffect } from 'react';
import Hero from './components/Hero'; 
import LecturesView from './components/LecturesView'; 
import TodayInHistory from './components/TodayInHistory'; 

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('riot_current_user');
    const storedRole = localStorage.getItem('riot_role');
    console.log("App mount - Loaded user from storage:", storedUser);
    if (storedUser) {
      setUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  const handleLogin = (username, userRole) => {
    console.log("App handleLogin called with:", username, userRole);
    localStorage.setItem('riot_current_user', username);
    localStorage.setItem('riot_role', userRole);
    setUser(username);
    setRole(userRole);
  };

  const handleLogout = () => {
    console.log("App handleLogout called");
    // სრულად ვასუფთავებთ მხოლოდ სასწავლო/იუზერის ქეშს, რომ პარამეტრები არ აირიოს
    localStorage.removeItem('riot_current_user');
    localStorage.removeItem('riot_role');
    setUser(null);
    setRole(null);
    setCurrentView('home');
  };

  return (
    <div>
      <header>
        <div className="logo" onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>
          Time<span>Riot</span>
        </div>
        <nav>
          <ul>
            <li>
              <button 
                onClick={() => setCurrentView('home')} 
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontFamily: 'Fira GO', fontSize: '16px' }}
              >
                მთავარი
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentView('lectures')} 
                className="btn-primary" 
                style={{ border: 'none', padding: '8px 15px', cursor: 'pointer', fontFamily: 'Fira GO' }}
              >
                ლექციები
              </button>
            </li>
            <li>
              <a href="#masterclass" onClick={() => setCurrentView('home')}>მასტერკლასი</a>
            </li>
            <li>
              <a href="#contact">კონტაქტი</a>
            </li>
          </ul>
        </nav>
      </header>
      
      {currentView === 'home' ? (
        <main id="home">
          <Hero 
            onPlayClick={() => window.open('https://www.facebook.com/profile.php?id=61586823821806', '_blank')} 
            onStartLearning={() => setCurrentView('lectures')} 
          />

          <TodayInHistory />

          <section className="materials" id="masterclass">
            <div className="lesson-grid" style={{ justifyContent: 'center', display: 'flex' }}>
              <div className="card masterclass-card" style={{ maxWidth: '500px', width: '100%' }}>
                <div className="card-badge">LIVE</div>
                <h3>უფასო მასტერკლასი</h3>
                <p>დარეგისტრირდი და გაიგე, როგორ ჩააბარო ისტორია უმაღლეს ქულაზე.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfHENJtzGcRiiKEJBMvTzNbbv3ch5yu-q1nfrFXnd-D49zFIQ/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn-card" style={{ textDecoration: 'none' }}>რეგისტრაცია</a>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <LecturesView 
          user={user} 
          role={role} 
          onLogin={handleLogin} 
          onLogout={handleLogout} 
        />
      )}

      <footer id="contact">
        <h3>TimeRiot - ისტორიის ჰაბი</h3>
        <p>ტელეფონი: <a href="tel:+995558551052" style={{ color: '#ff4d4d', textDecoration: 'none' }}>+995 558 55 10 52</a></p>
        <div className="socials">
          <a href="https://www.facebook.com/profile.php?id=61586823821806" target="_blank" rel="noopener noreferrer" style={{ color: '#4267B2', fontWeight: 'bold' }}>Facebook</a> |{' '}
          <a href="https://api.whatsapp.com/send?phone=995558551052" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 'bold' }}>WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}

export default App;