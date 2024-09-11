import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AchievementCard from "../AchievementCard/AchievementCard";
import './achievements.css'
import img1 from '../../assets/achievements/amazonMLSummerSchool.jpg'
import img2 from '../../assets/achievements/cedcoss_selection.jpg'
import img3 from '../../assets/achievements/cloud_computing_2024-07-28T18_38_09.6709844Z.jpg'
import img4 from '../../assets/achievements/hackdiva.jpg'
import img5 from '../../assets/achievements/internship.jpg'
import img6 from '../../assets/achievements/tcs_offer_letter.jpg'
import img7 from '../../assets/achievements/leetcode.png'


function Achievements() {
  const cards = [
    { image: img4, title: 'HackDiva', description: 'Runner Up of HackDiva Hackathon' },
    { image: img7, title: 'Leetcode', description: 'Was Knight at Leetcode' },
    { image: img1, title: 'Amazon ML Summer School', description: 'Attended Amazon ML Summer School 2023' },
    { image: img2, title: 'CEDCOSS Selection', description: 'Selected for CEDCOSS Technologies in October 2023' },
    { image: img3, title: 'Cloud Computing', description: 'Got Elite + Gold Batch in NPTEL Cloud Computing Course' },
    { image: img5, title: 'Internship', description: 'Completed Internship at Shivankit TechSolutions' },
    { image: img6, title: 'TCS Offer Letter', description: 'Received an offer letter from TCS in March 2024' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust this according to how many cards you want to show at once
    slidesToScroll: 1,
    autoplay: true, // Enable automatic scrolling
    autoplaySpeed: 2000, // Speed in milliseconds
    pauseOnHover: true, // Pause the carousel when hovering over it
  };

  return (
    <section className="achievements" id="achievements">
      <h2>Achievements</h2>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <AchievementCard className="card" key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </Slider>
    </section>
  );
}

export default Achievements;