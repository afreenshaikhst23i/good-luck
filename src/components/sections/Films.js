import { useState } from "react";
import Image from "next/image";

function VideoPlayer({ thumbnail, thumbnailAlt, src }) {
    const [play, setPlay] = useState(false);

    return (
        <div className="film-item">
            {!play ? (
                <div className="film-overlay" onClick={() => setPlay(true)}>
                    <Image 
                        src={thumbnail} 
                        alt={thumbnailAlt} 
                        priority
                        width={644}
                        height={362}
                        className="w-full h-full object-cover" 
                    />
                    <div className="film-overlay-button">
                        <div className="bg-white rounded-full p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <iframe
                        key="drive-player"
                        src={src}
                        className="absolute inset-0 w-full h-full shadow-lg"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title="Wedding Video"
                    ></iframe>
                    <div className="film-logo">
                        <Image src="/images/logo/brand-logo.jpg" 
                            width={100}
                            height={46}
                            alt="Good Luck Digital Photo Studio Logo" 
                            className="object-contain opacity-90"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default function Films() {
    return (
        <section className="films-section">
        <div className="films-wrapper">
            <h2 className="primary-heading">Our Films</h2>
            <div className="film-grid">
                <VideoPlayer
                    thumbnail="/films/video1-thumbnail.JPG"
                    src="https://drive.google.com/file/d/1ubeY0-_Qhxv5Z1_em82Cw8T5jkvuzK1r/preview"
                    thumbnailAlt="Wedding film of Amrin and Shabbir"
                />
            </div>
        </div>
        </section>
    );
}
