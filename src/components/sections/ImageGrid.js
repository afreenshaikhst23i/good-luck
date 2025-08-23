import React, { useState } from "react";
import images  from "@/data/GridImages";
import Image from "next/image";
import FlexBox from "../common/FlexBox";

export default function ImageGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

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
            <Image
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
