import React, { useState, useEffect } from 'react';
import Hero from './components/Hero'; 
import LecturesView from './components/LecturesView'; 
import TodayInHistory from './components/TodayInHistory'; 

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* სტილები: ჰამბურგერი ჩართულია ყველგან (დესკტოპზეც და მობილურზეც) */}
      <style>{`
        .desktop-nav { display: none !important; }
        .mobile-hamburger-btn {
          display: flex !important;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 22px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1000;
        }
        .mobile-hamburger-btn span {
          width: 100%;
          height: 3px;
          background-color: white;
          border-radius: 2px;
          transition: 0.3s;
        }
        .mobile-dropdown-menu.open {
          display: flex !important;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          flex-direction: column;
          align-items: center;
          padding: 25px 0;
          gap: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.8);
          border-bottom: 2px solid #ff4d4d;
          z-index: 999;
        }
      `}</style>

      <header style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#000', color: '#fff' }}>
        <div className="logo" onClick={() => setCurrentView('home')} style={{ cursor: 'pointer', fontSize: '24px', fontWeight: 'bold' }}>
          Time<span style={{ color: '#ff4d4d' }}>Riot</span>
        </div>

        {/* ჰამბურგერ ღილაკი (ჩანს ყველგან: კომპიუტერზეც და ტელეფონზეც) */}
        <button 
          className="mobile-hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="მენიუ"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* ჩამოსაშლელი სია, რომელიც იხსნება ჰამბურგერზე დაჭერისას */}
        <div className={`mobile-dropdown-menu ${isMenuOpen ? 'open' : ''}`} style={{ display: 'none' }}>
          <button onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', fontFamily: 'Fira GO' }}>
            მთავარი
          </button>
          <button onClick={() => { setShowCourseModal(true); setIsMenuOpen(false); }} style={{ background: 'none', border: 'none', color: 'white', fontSize: '18px', cursor: 'pointer', fontFamily: 'Fira GO' }}>
            კურსის შესახებ
          </button>
          <button onClick={() => { setCurrentView('lectures'); setIsMenuOpen(false); }} style={{ background: '#ff4d4d', border: 'none', color: 'white', fontSize: '16px', padding: '10px 25px', cursor: 'pointer', fontFamily: 'Fira GO', borderRadius: '20px' }}>
            ლექციები
          </button>
          <a href="#masterclass" onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontFamily: 'Fira GO' }}>მასტერკლასი</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontFamily: 'Fira GO' }}>კონტაქტი</a>
        </div>
      </header>
      
      {currentView === 'home' ? (
        <main id="home">
          <Hero 
            onPlayClick={() => window.open('https://www.facebook.com/profile.php?id=61586823821806', '_blank')} 
            onStartLearning={() => setCurrentView('lectures')} 
          />

          <TodayInHistory />

          <section className="materials" id="masterclass">
  <div className="lesson-grid" style={{ justifyContent: 'center', display: 'flex', padding: '20px 0' }}>
    <div className="card masterclass-card" style={{ maxWidth: '500px', width: '100%', padding: '30px', boxSizing: 'border-box' }}>
      <div className="card-badge">LIVE</div>
      <h3 style={{ marginBottom: '15px' }}>უფასო მასტერკლასი</h3>
      <p style={{ marginBottom: '25px', lineHeight: '1.6' }}>დარეგისტრირდი და გაიგე, როგორ ჩააბარო ისტორია უმაღლეს ქულაზე.</p>
      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSfHENJtzGcRiiKEJBMvTzNbbv3ch5yu-q1nfrFXnd-D49zFIQ/viewform?usp=header" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-card" 
        style={{ 
          textDecoration: 'none', 
          display: 'inline-block', 
          marginTop: '15px', 
          padding: '10px 20px' 
        }}
      >
        რეგისტრაცია
      </a>
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