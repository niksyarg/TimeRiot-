import React, { useState, useEffect } from 'react';

export default function LecturesView({ user, role, onLogin, onLogout }) {
  const initialLectures = [
    {
      id: 1,
      title: "ლექცია 1: იბერიის სამეფო და ფარნავაზი",
      description: "ამ გაკვეთილში განვიხილავთ იბერიის სამეფოს ჩამოყალიბებას, მეფე ფარნავაზის რეფორმებს, დამწერლობის შექმნასა და არმაზის კერპის აღმართვას.",
      videoUrl: "", 
      quizzes: [
        {
          question: "ვინ იყო იბერიის პირველი მეფე?",
          options: ["ფარნავაზი", "მირიანი", "ვახტანგ გორგასალი", "ბაგრატ III"],
          correct: 0
        },
        {
          question: "რომელ საუკუნეში მოღვაწეობდა მეფე ფარნავაზი?",
          options: ["ძვ.წ. IV-III სສ.", "ახ.წ. I ს.", "ძვ.წ. I ს.", "ახ.წ. IV ს."],
          correct: 0
        },
        {
          question: "რა ერქვა ფარნავაზის მიერ აღმართულ მთავარ კერპს?",
          options: ["არმაზი", "ზადენი", "გაცი", "გაიმ"],
          correct: 0
        },
        {
          question: "რომელ ქალაქს უკავშირდება იბერიის სამეფოს დაარსება?",
          options: ["მცხეთა", "თბილისი", "ქუთაისი", "უფლისციხე"],
          correct: 0
        }
      ]
    },
    {
      id: 2,
      title: "ლექცია 2: ვახტანგ გორგასალი და თბილისის დაარსება",
      description: "გაკვეთილი ეძღვნება V საუკუნის უდიდეს მეფეს, მის ბრძოლებს ირანელებთან და დედაქალაქის მცხეთიდან თბილისში გადმოტანის პროცესს.",
      videoUrl: "",
      quizzes: [
        {
          question: "რომელ საუკუნეში მოღვაწეობდა ვახტანგ გორგასალი?",
          options: ["IV ს.", "V ს.", "VI ს.", "XI ს."],
          correct: 1
        },
        {
          question: "რა ეწოდებოდა ვახტანგ გორგასლის მუზარადს, რის გამოც მას 'გორგასალი' შეარქვეს?",
          options: ["მგლისთავა", "ლომისტავა", "ვეფხისტავა", "არწივისებრი"],
          correct: 0
        },
        {
          question: "რომელი ქალაქიდან გადმოიტანა დედაქალაქი თბილისში ვახტანგმა?",
          options: ["მცხეთა", "ქუთაისი", "უფლისციხე", "რუსთავი"],
          correct: 0
        },
        {
          question: "რა ცხოველს/ფრინველს უკავშირდება თბილისის დაარსების ლეგენდა?",
          options: ["ხოხობსა და ქორს", "ირემს", "დათვს", "მგელს"],
          correct: 0
        }
      ]
    }
  ];

  const [lectures, setLectures] = useState(() => {
    const saved = localStorage.getItem('riot_lectures');
    return saved ? JSON.parse(saved) : initialLectures;
  });

  // ვიღებთ აქტიურ იუზერს უსაფრთხოდ - თუ პროპად არ შემოდის, ვეძებთ localStorage-ში
  const activeUser = user || localStorage.getItem('riot_current_user');

  // სწორი და უსაფრთხო პროგრესის ჩატვირთვა იუზერის მიხედვით
  const [completedLectures, setCompletedLectures] = useState(() => {
    if (!activeUser) return [];
    const savedCompleted = localStorage.getItem(`riot_completed_${activeUser}`);
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  });

  // როცა აქტიური იუზერი იცვლება ან თავიდან შედის, ავტომატურად ვქაჩავთ მის შენახულ პროგრესს
  useEffect(() => {
    if (activeUser) {
      const savedCompleted = localStorage.getItem(`riot_completed_${activeUser}`);
      if (savedCompleted) {
        setCompletedLectures(JSON.parse(savedCompleted));
      } else {
        setCompletedLectures([]);
      }
    }
  }, [activeUser]);

  const handleCompleteLecture = (lectureId) => {
    if (!completedLectures.includes(lectureId)) {
      const updated = [...completedLectures, lectureId];
      setCompletedLectures(updated);
      const targetUser = user || localStorage.getItem('riot_current_user');
      if (targetUser) {
        localStorage.setItem(`riot_completed_${targetUser}`, JSON.stringify(updated));
      }
    }
  };

  const [selectedLecture, setSelectedLecture] = useState(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const [isRegistering, setIsRegistering] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correct: 0 },
    { question: '', options: ['', '', '', ''], correct: 0 },
    { question: '', options: ['', '', '', ''], correct: 0 },
    { question: '', options: ['', '', '', ''], correct: 0 }
  ]);

  useEffect(() => {
    localStorage.setItem('riot_lectures', JSON.stringify(lectures));
  }, [lectures]);

  const handleLectureSelect = (lec, index) => {
    if (index > 0 && role !== 'admin') {
      const prevLectureId = lectures[index - 1].id;
      if (!completedLectures.includes(prevLectureId)) {
        alert("⚠️ ეს ლექცია ჩაკეტილია! ჯერ ბოლომდე უნდა შეისწავლო და უშეცდომოდ ჩააბარო წინა ლექციის ქვიზი.");
        return;
      }
    }

    setSelectedLecture(lec);
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setQuizFinished(false);
    setShowFeedback(false);
    window.scrollTo(0, 0);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setAuthError('');

    const trimmedUser = usernameInput.trim();
    const trimmedPass = passwordInput.trim();

    if (!trimmedUser || !trimmedPass) {
      setAuthError('გთხოვთ შეავსოთ ყველა ველი!');
      return;
    }

    // ვინახავთ აქტიურ იუზერს გლობალურად localStorage-ში, რომ არ დაიკარგოს
    localStorage.setItem('riot_current_user', trimmedUser);

    if (trimmedUser === "Nika" && trimmedPass === "riot123") {
      onLogin(trimmedUser, "admin");
      return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem('riot_users') || '{}');

    if (isRegistering) {
      if (registeredUsers[trimmedUser]) {
        setAuthError('მომხმარებლის სახელი დაკავებულია. აირჩიეთ სხვა!');
        return;
      }
      registeredUsers[trimmedUser] = trimmedPass;
      localStorage.setItem('riot_users', JSON.stringify(registeredUsers));
      onLogin(trimmedUser, "student");
    } else {
      if (!registeredUsers[trimmedUser]) {
        registeredUsers[trimmedUser] = trimmedPass;
        localStorage.setItem('riot_users', JSON.stringify(registeredUsers));
        onLogin(trimmedUser, "student");
        return;
      }

      if (registeredUsers[trimmedUser] !== trimmedPass) {
        setAuthError('❌ არასწორი პაროლი!');
        return;
      }

      onLogin(trimmedUser, "student");
    }
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null || showFeedback) return;

    const currentQuiz = selectedLecture.quizzes[currentQuizIndex];
    const isCorrect = parseInt(selectedAnswer) === currentQuiz.correct;

    let updatedScore = quizScore;
    if (isCorrect) {
      updatedScore = quizScore + 1;
      setQuizScore(updatedScore);
    }

    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);

      if (currentQuizIndex + 1 < selectedLecture.quizzes.length) {
        setCurrentQuizIndex(prev => prev + 1);
      } else {
        setQuizFinished(true);
        
        if (updatedScore === selectedLecture.quizzes.length) {
          handleCompleteLecture(selectedLecture.id);
        }
      }
    }, 1500);
  };

  const handleAddLecture = (e) => {
    e.preventDefault();
    if (!newTitle || !newVideoUrl) return;

    let embedUrl = newVideoUrl;
    if (newVideoUrl.includes("watch?v=")) {
      embedUrl = newVideoUrl.split("watch?v=")[1].split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${embedUrl}`;
    } else if (newVideoUrl.includes("youtu.be/")) {
      embedUrl = newVideoUrl.split("youtu.be/")[1].split("?")[0];
      embedUrl = `https://www.youtube.com/embed/${embedUrl}`;
    } else if (!newVideoUrl.includes("embed/")) {
      alert("გთხოვთ შეიყვანოთ ვალიდური YouTube ლინკი!");
      return;
    }

    const newLec = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      videoUrl: embedUrl,
      quizzes: questions
    };

    setLectures([...lectures, newLec]);
    setNewTitle('');
    setNewDescription('');
    setNewVideoUrl('');
    setQuestions([
      { question: '', options: ['', '', '', ''], correct: 0 },
      { question: '', options: ['', '', '', ''], correct: 0 },
      { question: '', options: ['', '', '', ''], correct: 0 },
      { question: '', options: ['', '', '', ''], correct: 0 }
    ]);
    alert('ლექცია წარმატებით დაემატა!');
  };

  const handleDeleteLecture = (id) => {
    if (window.confirm('დარწმუნებული ხარ, რომ გინდა ამ ლექციის წაშლა?')) {
      setLectures(lectures.filter(l => l.id !== id));
      if (selectedLecture?.id === id) setSelectedLecture(null);
    }
  };

  const currentQuiz = selectedLecture?.quizzes?.[currentQuizIndex];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', color: 'white', fontFamily: 'Fira GO' }}>
      
      {!activeUser ? (
        <div style={{ maxWidth: '400px', margin: '60px auto', background: '#1e1e24', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', border: '1px solid #333' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#ff4d4d' }}>
            {isRegistering ? 'სტუდენტის რეგისტრაცია' : 'სტუდენტის პორტალი'}
          </h2>
          
          {authError && (
            <div style={{ background: '#5a1d1d', color: '#ff8888', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', textAlign: 'center', border: '1px solid #dc3545' }}>
              {authError}
            </div>
          )}

          <form onSubmit={handleAuthSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>მომხმარებლის სახელი:</label>
              <input 
                type="text" 
                value={usernameInput} 
                onChange={e => setUsernameInput(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#111', color: 'white', fontFamily: 'Fira GO' }} 
                placeholder="შეიყვანე სახელი..."
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>პაროლი:</label>
              <input 
                type="password" 
                value={passwordInput} 
                onChange={e => setPasswordInput(e.target.value)} 
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #333', background: '#111', color: 'white' }} 
                placeholder="შეიყვანე პაროლი..."
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '12px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontFamily: 'Fira GO', marginBottom: '15px' }}>
              {isRegistering ? 'რეგისტრაცია და შესვლა' : 'შესვლა სისტემაში'}
            </button>

            <div style={{ textAlign: 'center' }}>
              <button 
                type="button" 
                onClick={() => { setIsRegistering(!isRegistering); setAuthError(''); }} 
                style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', fontSize: '13px', fontFamily: 'Fira GO', textDecoration: 'underline' }}
              >
                {isRegistering ? 'უკვე გაქვს ანგარიში? შევედით' : 'არ გაქვს ანგარიში? გაიარე რეგისტრაცია'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1e1e24', padding: '15px 20px', borderRadius: '8px', marginBottom: '30px', flexWrap: 'wrap', gap: '15px', border: '1px solid #333' }}>
            <div>მოგესალმები, <span style={{ color: '#ff4d4d', fontWeight: 'bold' }}>{activeUser}</span> ({role === 'admin' ? 'ადმინისტრატორი' : 'სტუდენტი'})</div>
            <button onClick={onLogout} style={{ background: '#ff4d4d', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Fira GO', fontWeight: 'bold' }}>გამოსვლა</button>
          </div>

          {!selectedLecture ? (
            <div>
              <h2 style={{ marginBottom: '25px', borderBottom: '2px solid #ff4d4d', paddingBottom: '10px' }}>📚 სასწავლო პროგრამა (ლექციები)</h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                {lectures.map((lec, index) => {
                  const isCompleted = completedLectures.includes(lec.id);
                  const isLocked = index > 0 && role !== 'admin' && !completedLectures.includes(lectures[index - 1].id);

                  let cardBg = '#1a1a22';
                  let borderColor = '#333';

                  if (isCompleted) {
                    cardBg = '#14281a'; 
                    borderColor = '#28a745';
                  } else if (isLocked) {
                    cardBg = '#16161a';
                    borderColor = '#222';
                  }

                  return (
                    <div 
                      key={lec.id} 
                      style={{ 
                        background: cardBg, 
                        padding: '25px', 
                        borderRadius: '12px', 
                        cursor: isLocked ? 'not-allowed' : 'pointer', 
                        border: `1px solid ${borderColor}`, 
                        transition: '0.3s', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'space-between',
                        opacity: isLocked ? 0.6 : 1
                      }} 
                      onClick={() => handleLectureSelect(lec, index)}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ color: isCompleted ? '#28a745' : '#ff4d4d', fontSize: '14px', fontWeight: 'bold' }}>
                            ლექცია №{index + 1} {isCompleted ? '✓ დასრულებულია' : ''} {isLocked ? '🔒 ჩაკეტილია' : ''}
                          </span>
                        </div>
                        
                        <h3 style={{ fontSize: '18px', margin: '10px 0 15px 0', color: 'white' }}>{lec.title}</h3>
                        
                        {lec.description && (
                          <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {lec.description}
                          </p>
                        )}
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                        <span style={{ color: isLocked ? '#666' : (isCompleted ? '#28a745' : '#ff4d4d'), fontWeight: 'bold', fontSize: '14px' }}>
                          {isLocked ? 'საჭიროებს წინა ლექციას 🔒' : (isCompleted ? 'თავიდან ნახვა 🔄' : 'ჩართვა ▶')}
                        </span>
                        
                        {role === 'admin' && (
                          <button onClick={(e) => { e.stopPropagation(); handleDeleteLecture(lec.id); }} style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', padding: '0 5px' }}>✕</button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div>
              <button 
                onClick={() => setSelectedLecture(null)} 
                style={{ background: '#333', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', marginBottom: '20px', fontFamily: 'Fira GO', fontWeight: 'bold' }}
              >
                ← სიაში დაბრუნება
              </button>

              <div style={{ background: '#111116', padding: '30px', borderRadius: '12px', border: '1px solid #222' }}>
                <h2 style={{ marginBottom: '15px', fontSize: '26px', color: '#ff4d4d' }}>{selectedLecture.title}</h2>
                
                {selectedLecture.description && (
                  <p style={{ color: '#ccc', fontSize: '16px', lineHeight: '1.7', marginBottom: '25px', background: '#1a1a22', padding: '18px', borderRadius: '8px', borderLeft: '4px solid #ff4d4d' }}>
                    {selectedLecture.description}
                  </p>
                )}
                
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', marginBottom: '35px', border: '1px solid #333' }}>
                  <iframe src={selectedLecture.videoUrl} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title={selectedLecture.title} frameBorder="0" allowFullScreen></iframe>
                </div>

                <div style={{ background: '#1e1e24', padding: '25px', borderRadius: '10px', border: '1px solid #333' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
                    <h3 style={{ color: '#ff4d4d', margin: 0 }}>🧠 შეამოწმე ცოდნა ინტერაქციული ქვიზით:</h3>
                    {!quizFinished && selectedLecture.quizzes && (
                      <span style={{ color: '#aaa', fontSize: '14px' }}>კითხვა: {currentQuizIndex + 1} / {selectedLecture.quizzes.length}</span>
                    )}
                  </div>

                  {!quizFinished ? (
                    currentQuiz ? (
                      <div>
                        <p style={{ fontSize: '19px', marginBottom: '20px', fontWeight: '500' }}>{currentQuiz.question}</p>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                          {currentQuiz.options.map((opt, i) => {
                            let bgStyle = '#111';
                            let borderStyle = '1px solid #222';

                            if (selectedAnswer === String(i)) {
                              borderStyle = '1px solid #ff4d4d';
                              bgStyle = '#1a1a24';
                            }

                            if (showFeedback) {
                              if (i === currentQuiz.correct) {
                                bgStyle = '#1e4620';
                                borderStyle = '1px solid #28a745';
                              } else if (selectedAnswer === String(i)) {
                                bgStyle = '#5a1d1d';
                                borderStyle = '1px solid #dc3545';
                              }
                            }

                            return (
                              <label key={i} style={{ background: bgStyle, padding: '14px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', cursor: showFeedback ? 'default' : 'pointer', border: borderStyle, transition: '0.2s' }}>
                                <input type="radio" name="quiz-opt" value={i} checked={selectedAnswer === String(i)} disabled={showFeedback} onChange={e => setSelectedAnswer(e.target.value)} style={{ accentColor: '#ff4d4d' }} />
                                <span style={{ fontSize: '16px' }}>{opt}</span>
                              </label>
                            );
                          })}
                        </div>

                        <button onClick={handleCheckAnswer} disabled={selectedAnswer === null || showFeedback} className="btn-primary" style={{ border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: (selectedAnswer === null || showFeedback) ? 'not-allowed' : 'pointer', opacity: (selectedAnswer === null || showFeedback) ? 0.6 : 1, fontWeight: 'bold', width: '100%', fontFamily: 'Fira GO' }}>
                          {showFeedback ? 'მოწმდება...' : (currentQuizIndex + 1 === selectedLecture.quizzes.length ? 'დასრულება' : 'შემდეგი კითხვა')}
                        </button>
                      </div>
                    ) : (
                      <p style={{ color: '#aaa' }}>ამ ლექციაზე ქვიზები არ არის დამატებული.</p>
                    )
                  ) : (
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                      {quizScore === selectedLecture.quizzes.length ? (
                        <div>
                          <h3 style={{ color: '#28a745', marginBottom: '15px' }}>🎉 შესანიშნავია! ლექცია უშეცდომოდ დაასრულე!</h3>
                          <p style={{ fontSize: '20px', marginBottom: '20px' }}>შენი შედეგი: <strong style={{ color: '#ff4d4d', fontSize: '24px' }}>{quizScore} / {selectedLecture.quizzes.length}</strong></p>
                          <p style={{ color: '#28a745', marginBottom: '20px', fontSize: '15px' }}>✓ შემდეგი ლექცია ახლა უკვე გახსნილია!</p>
                        </div>
                      ) : (
                        <div>
                          <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>⚠️ ტესტი ვერ ჩაბარდა!</h3>
                          <p style={{ fontSize: '18px', marginBottom: '15px' }}>შენი შედეგი: <strong style={{ color: '#ff4d4d', fontSize: '22px' }}>{quizScore} / {selectedLecture.quizzes.length}</strong></p>
                          <p style={{ color: '#aaa', marginBottom: '20px', fontSize: '14px' }}>აუცილებელია ყველა კითხვას გასცე სწორი პასუხი, რომ შემდეგი ლექცია გაიხსნას. სცადე თავიდან!</p>
                        </div>
                      )}
                      
                      <button onClick={() => setSelectedLecture(null)} className="btn-primary" style={{ border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'Fira GO', fontWeight: 'bold' }}>სასწავლო სიაში დაბრუნება 📚</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {role === 'admin' && (
            <div style={{ marginTop: '50px', background: '#1a1a20', padding: '30px', borderRadius: '12px', border: '1px dashed #ff4d4d' }}>
              <h3 style={{ color: '#ff4d4d', marginBottom: '20px' }}>🛠 ახალი ლექციის დამატება (ლექტორის პანელი)</h3>
              <form onSubmit={handleAddLecture}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>ლექციის სათაური:</label>
                    <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#111', border: '1px solid #333', color: 'white' }} placeholder="მაგ: ლექცია 3: დავით აღმაშენებელი" required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px' }}>YouTube ვიდეოს ლინკი:</label>
                    <input type="text" value={newVideoUrl} onChange={e => setNewVideoUrl(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#111', border: '1px solid #333', color: 'white' }} placeholder="https://www.youtube.com/watch?v=..." required />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '5px' }}>თემის მოკლე აღწერა:</label>
                  <textarea value={newDescription} onChange={e => setNewDescription(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', background: '#111', border: '1px solid #333', color: 'white', height: '80px', resize: 'vertical', fontFamily: 'Fira GO' }} placeholder="ჩაწერე რას ეხება ეს ლექცია მოკლედ..." />
                </div>

                <h4 style={{ color: '#ff4d4d', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>📝 ქვიზის აწყობა (სულ 4 კითხვა)</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  {questions.map((q, qIdx) => (
                    <div key={qIdx} style={{ background: '#111', padding: '15px', borderRadius: '8px', border: '1px solid #222' }}>
                      <span style={{ fontWeight: 'bold', color: '#ff4d4d', display: 'block', marginBottom: '10px' }}>კითხვა {qIdx + 1}:</span>
                      <input type="text" value={q.question} onChange={e => {
                        const updated = [...questions];
                        updated[qIdx].question = e.target.value;
                        setQuestions(updated);
                      }} style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#222', border: '1px solid #444', color: 'white', marginBottom: '10px' }} placeholder="ჩაწერე კითხვა..." required />
                      
                      <label style={{ fontSize: '12px', color: '#aaa', display: 'block', marginBottom: '5px' }}>სავარაუდო ვარიანტები:</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '10px' }}>
                        {q.options.map((opt, optIdx) => (
                          <input key={optIdx} type="text" value={opt} onChange={e => {
                            const updated = [...questions];
                            updated[qIdx].options[optIdx] = e.target.value;
                            setQuestions(updated);
                          }} style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#222', border: '1px solid #444', color: 'white' }} placeholder={`ვარიანტი ${optIdx + 1}`} required />
                        ))}
                      </div>

                      <label style={{ fontSize: '12px', color: '#aaa', display: 'block', marginBottom: '5px' }}>რომელია სწორი პასუხი?</label>
                      <select value={q.correct} onChange={e => {
                        const updated = [...questions];
                        updated[qIdx].correct = parseInt(e.target.value);
                        setQuestions(updated);
                      }} style={{ width: '100%', padding: '8px', borderRadius: '4px', background: '#222', border: '1px solid #444', color: 'white' }}>
                        <option value={0}>ვარიანტი 1</option>
                        <option value={1}>ვარიანტი 2</option>
                        <option value={2}>ვარიანტი 3</option>
                        <option value={3}>ვარიანტი 4</option>
                      </select>
                    </div>
                  ))}
                </div>

                <button type="submit" style={{ background: '#28a745', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', fontFamily: 'Fira GO', fontWeight: 'bold', width: '100%' }}>ლექციის გამოქვეყნება 🚀</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}