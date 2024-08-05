import React from 'react';
import './Swiper.css'; // Import the CSS file

const Swiper = () => {
  const items = [
    { src: './slider1_1.png', alt: 'Slider 1' },
    { src: './slider1_2.png', alt: 'Slider 2' },
    { src: './slider1_3.png', alt: 'Slider 3' },
    { src: './slider1_4.png', alt: 'Slider 4' },
    { src: './slider1_5.png', alt: 'Slider 5' },
    { src: './slider1_6.png', alt: 'Slider 6' },
    { src: './slider1_7.png', alt: 'Slider 7' },
    { src: './slider1_8.png', alt: 'Slider 8' },
    { src: './slider1_9.png', alt: 'Slider 9' },
    { src: './slider1_10.png', alt: 'Slider 10' },
  ];

  return (
    <div
      className="slider container"
      style={{ '--width': '100px', '--height': '50px', '--quantity': items.length }}
    >
      <div className="list">
        {items.map((item, index) => (
          <div className="item" style={{ '--position': index + 1 }} key={index}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;
