// components/HeroSlider.jsx
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper modules from 'swiper/modules' (correct for v11+)
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  { src: '/images/home-slider/landscape-1.JPG', alt: 'Wedding Photography 1' },
  { src: '/images/home-slider/landscape-2.JPG', alt: 'Wedding Photography 2' },
  { src: '/images/home-slider/landscape-3.JPG', alt: 'Wedding Photography 3' },
  { src: '/images/home-slider/landscape-4.jpg', alt: 'Wedding Photography 4' },
];

export default function HeroSlider() {
  return (
    <section className="slideshow-section">
        <div className="slideshow-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="w-full"
                >
                {slides.map(({ src, alt }, index) => (
                    <SwiperSlide key={index}>
                    <img
                        src={src}
                        alt={alt}
                        width={1903}
                        height={953}
                        loading="lazy"
                    />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
   
  );
}
