import React, { useState } from "react";
import FlexBox from "./FlexBox";

export default function ImageGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // Images are now inside this component
  const images = [
    { src: "/images/amrin-shabbir/landscape-11.JPG", alt: "Wedding Photography 1" },
    { src: "/images/amrin-shabbir/landscape-15.JPG", alt: "Wedding Photography 2" },
    { src: "/images/ganesh-more/landscape-11.JPG", alt: "Wedding Photography 3" },
    { src: "/images/couple-1/landscape-12.JPG", alt: "Wedding Photography 4" },
    { src: "/images/amrin-shabbir/landscape-12.JPG", alt: "Wedding Photography 5" },
    { src: "/images/sarika-manju/landscape-1.JPG", alt: "Wedding Photography 6" },
    { src: "/images/amrin-shabbir/landscape-17.JPG", alt: "Wedding Photography 7" },
    { src: "/images/amrin-shabbir/landscape-16.JPG", alt: "Wedding Photography 8" },
    { src: "/images/amrin-shabbir/landscape-18.JPG", alt: "Wedding Photography 9" },
    { src: "/images/couple-1/landscape-11.jpg", alt: "Wedding Photography 10" },
    { src: "/images/sarika-manju/landscape-2.jpg", alt: "Wedding Photography 11" },
    { src: "/images/mahek-faisal/landscape-1.JPG", alt: "Wedding Photography 12" },
  ];

  const openModal = (index) => {
    setStartIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="photo-grid-section">
      <h2 className="primary-heading">Our Photography Showcase</h2>

      <div className="grid-list">
        {images.map((img, i) => (
          <div
            key={i}
            className="grid-list-item"
            onClick={() => openModal(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="hover-shadow cursor w-full"
              width={592}
              height={394}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {modalOpen && (
        <FlexBox images={images} startIndex={startIndex} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}
