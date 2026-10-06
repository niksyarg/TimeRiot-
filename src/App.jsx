import React, { useState, useEffect } from 'react';
import Hero from './components/Hero'; 
import LecturesView from './components/LecturesView'; 
import TodayInHistory from './components/TodayInHistory'; 

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false); // პოაპის სტეიტი

  useEffect(() => {
    const storedUser = localStorage.getItem('riot_current_user');
    const storedRole = localStorage.getItem('riot_role');
    if (storedUser) {
      setUser(storedUser);
      setRole(storedRole);
    }
  }, []);

  const handleLogin = (username, userRole) => {
    localStorage.setItem('riot_current_user', username);
    localStorage.setItem('riot_role', userRole);
    setUser(username);
    setRole(userRole);
  };

  const handleLogout = () => {
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
                onClick={() => setShowCourseModal(true)} 
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontFamily: 'Fira GO', fontSize: '16px' }}
              >
                კურსის შესახებ
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

      {/* კურსის შესახებ პოაპი (Modal) */}
      {showCourseModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            background: '#1e1e24',
            padding: '35px',
            borderRadius: '14px',
            maxWidth: '550px',
            width: '100%',
            border: '1px solid #ff4d4d',
            color: 'white',
            fontFamily: 'Fira GO',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <h2 style={{ color: '#ff4d4d', marginBottom: '20px', fontSize: '24px' }}>📚 TimeRiot - კურსის შესახებ</h2>
            <p style={{ color: '#ccc', lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
              <strong>TimeRiot</strong> არის თანამედროვე საგანმანათლებლო ჰაბი, რომელიც შექმნილია იმისათვის, რომ საქართველოსა და მსოფლიო ისტორიის შესწავლა გახდეს მარტივი, სახალისო და შედეგიანი. 
            </p>
            <p style={{ color: '#ccc', lineHeight: '1.7', marginBottom: '25px', fontSize: '15px' }}>
              კურსი სრულად ფარავს აბიტურიენტებისთვის საჭირო პროგრამას, გთავაზობს ვიდეო ლექციებს, თემატურ ქვიზებს და პროგრესის მკაცრ კონტროლს თითოეული ეტაპის წარმატებით გავლისთვის.
            </p>
            <button 
              onClick={() => setShowCourseModal(false)}
              style={{ 
                background: '#ff4d4d', 
                color: 'white', 
                border: 'none', 
                padding: '12px 25px', 
                borderRadius: '6px', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                fontFamily: 'Fira GO',
                width: '100%'
              }}
            >
              გასაგებია / დახურვა
            </button>
          </div>
        </div>
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