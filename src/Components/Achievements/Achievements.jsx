import React, { useState } from 'react';
import AchievementCard from "../AchievementCard/AchievementCard";
import './achievements.css';
import img1 from '../../assets/achievements/amazonMLSummerSchool.jpg';
import img2 from '../../assets/achievements/cedcoss_selection.jpg';
import img3 from '../../assets/achievements/cloud_computing_2024-07-28T18_38_09.6709844Z.jpg';
import img4 from '../../assets/achievements/hackdiva.jpg';
import img5 from '../../assets/achievements/internship.jpg';
import img6 from '../../assets/achievements/tcs_offer_letter.jpg';
import img7 from '../../assets/achievements/leetcode.png';

function Achievements() {
  const cards = [
    { image: img4, title: 'HackDiva', description: 'Runner Up of HackDiva Hackathon' },
    { image: img7, title: 'Leetcode', description: 'Was Knight at Leetcode' },
    { image: img1, title: 'Amazon ML Summer School', description: 'Attended Amazon ML Summer School 2023' },
    { image: img2, title: 'CEDCOSS Selection', description: 'Selected for CEDCOSS Technologies in October 2023' },
    { image: img3, title: 'Cloud Computing', description: 'Got Elite + Gold Batch in NPTEL Cloud Computing Course' },
    { image: img5, title: 'Internship', description: 'Completed Internship at Shivankit TechSolutions' },
    { image: img6, title: 'TCS Offer Letter', description: 'Received an offer letter from TCS in March 2024' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="achievements" id="achievements">
      <h2>Achievements</h2>
      <div className="slider">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <div className="slides">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <AchievementCard image={card.image} title={card.title} description={card.description} />
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
}

export default Achievements;
