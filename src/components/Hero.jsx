import TeacherCard from './TeacherCard';
import VideoBox from './VideoBox';

export default function Hero({ onPlayClick, onStartLearning }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <TeacherCard 
          name="ნიკ სიარგ" 
          university="თსუ (TSU)" 
          experience="3+ წელი გამოცდილება"
          brand="TimeRiot"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdl7sS8vbD5In7_bWrXoF-DzrdIGrfJAICptKywM3gFu4Efk7pkHNszZ4&s=10"
          isOnline={true}
        />
        <h1>აღმოაჩინე ისტორია <span>TimeRiot</span>-თან ერთად</h1>
        <p>ინტერაქციული ვიდეო ქვიზები, პოდკასტები და საინტერესო მასალები სტუდენტებისთვის.</p>
        <div className="hero-btns">
          <button 
            onClick={onStartLearning} 
            className="btn-primary"
            style={{ border: 'none', cursor: 'pointer', fontFamily: 'Fira GO' }}
          >
            დაიწყე სწავლა
          </button>
        </div>
      </div>
      
      <VideoBox onClick={onPlayClick} />
    </section>
  );
}