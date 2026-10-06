import React, { useState, useEffect } from 'react';

export default function TodayInHistory() {
  const [fact, setFact] = useState({ text: "იტვირთება ისტორიული ფაქტი...", year: "", link: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`)
      .then(response => response.json())
      .then(data => {
        if (data && data.events && data.events.length > 0) {
          
          const randomEvent = data.events[Math.floor(Math.random() * data.events.length)];
          
      
          const wikiUrl = randomEvent.pages && randomEvent.pages[0] && randomEvent.pages[0].content_urls 
            ? randomEvent.pages[0].content_urls.desktop.page 
            : "https://en.wikipedia.org";

          setFact({
            text: randomEvent.text,
            year: randomEvent.year,
            link: wikiUrl
          });
        } else {
          setFact({ text: "დღევანდელი დღის ისტორიული ფაქტი ვერ მოიძებნა.", year: "", link: "" });
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("API შეცდომა:", error);
        setFact({ text: "ვერ მოხერხდა ისტორიული ფაქტის ჩატვირთვა.", year: "", link: "" });
        setLoading(false);
      });
  }, []);

  return (
    <div style={{
      background: '#1a1a22',
      border: '1px solid #ffd700',
      borderRadius: '12px',
      padding: '25px',
      margin: '30px auto',
      maxWidth: '800px',
      color: 'white',
      fontFamily: 'Fira GO',
      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
        <span style={{ fontSize: '24px' }}>⏳</span>
        <h3 style={{ margin: 0, color: '#ffd700', fontSize: '18px' }}>დღევანდელი დღე ისტორიაში {fact.year ? `(${fact.year} წელი)` : ''}</h3>
      </div>
      
      <p style={{ margin: '0 0 15px 0', fontSize: '16px', lineHeight: '1.6', color: '#ddd' }}>
        {loading ? "იტვირთება..." : fact.text}
      </p>

      {!loading && fact.link && (
        <a 
          href={fact.link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#ffd700',
            border: '1px solid #ffd700',
            padding: '8px 16px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '14px',
            transition: '0.3s',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#ffd700';
            e.target.style.color = '#1a1a22';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#ffd700';
          }}
        >
          სრულად წაკითხვა ვიკიპედიაზე ↗
        </a>
      )}
    </div>
  );
}