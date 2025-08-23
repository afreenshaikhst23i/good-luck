import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function FlexBox({ images, startIndex, onClose }) {
  const [slideIndex, setSlideIndex] = useState(startIndex);
  const scrollPosition = useRef(0);

  useEffect(() => {
    scrollPosition.current = window.scrollY || window.pageYOffset;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition.current);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div id="myModal" className="modal flex-modal" role="dialog" aria-modal="true">
      <button type="button" className="close cursor" onClick={onClose} aria-label="Close modal">
        &times;
      </button>

      <div className="modal-content">
        {images.map((img, i) => (
          <div key={i} className="mySlides" style={{ display: i === slideIndex ? "block" : "none" }}>
            <div className="numbertext">{`${i + 1} / ${images.length}`}</div>
            <Image src={img.src} alt={img.alt} className="w-full" width={1200} height={929} loading="lazy" />
          </div>
        ))}

        <button className="prev" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>
        <button className="next" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
      </div>
    </div>
  );
}
