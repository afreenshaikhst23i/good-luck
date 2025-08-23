import { useRouter } from "next/router";
import albumsData from "../../data/albumsData";
import FlexBox from "../../components/common/FlexBox";
import { useState } from "react";
import Image from "next/image";
import SEO from "@/components/layout/SEO";

export default function AlbumPage({ album, client }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  if (!album) return <p className="text-center mt-10">Album not found</p>;

  const openModal = (index) => {
    setSlideIndex(index);
    setModalOpen(true);
  };

  return (
    <>
       <SEO page={client} />

      <section className="portfolio-detail-section">
          <div className="container">
            <div className="portfolio-detail-wrap">
              <div className="portfolio-detail-main">
                <div className="portfolio-detail-text">
                  <h1 className="d-text">{album.title}</h1>
                </div>
                <div className="portfolio-detail-img">
                  <Image
                    src={album.albumCover}
                    className="w-full"
                    alt="Wedding Photography"
                    width={478}
                    height={717}
                  />
                </div>
              </div>
              <hr />
              <div className="portfolio-detail-grid">
                <div className="photo-grid-section">
                  <div className="grid-list">
                    {album.images.map((img, idx) => (
                      <div
                        className="grid-list-item"
                        key={idx}
                        onClick={() => openModal(idx)}
                      >
                        <Image
                          src={img}
                          alt={`${album.title} ${idx + 1}`}
                          width={478}
                          height={717}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {modalOpen && (
          <FlexBox
              images={album.images.map(img => ({ src: img, alt: album.title }))}
              startIndex={slideIndex}
              onClose={() => setModalOpen(false)}
          />
      )}
    </>
  );
}


export async function getStaticPaths() {
  const paths = albumsData.map((album) => ({
    params: { client: album.slug },
  }));

  return { paths, fallback: false };
}

// ✅ Provide album + client as props
export async function getStaticProps({ params }) {
  const album = albumsData.find((a) => a.slug === params.client) || null;

  return {
    props: {
      album,
      client: params.client,
    },
  };
}