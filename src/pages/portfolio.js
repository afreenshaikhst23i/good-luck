import Quote from "@/components/Quote";
import Link from "next/link";
import albumsData from "../data/albumsData";
import Image from "next/image";

function Portfolio() {
    return (
        <>
            <Quote 
                heading="Our Portfolio"
                text="Join us on a captivating journey where each photograph becomes a chapter in life’s enchanting story, written with light and shadow"
            />
            <section className="photo-grid-section portfolio">
                <div className="grid-list">
                    {albumsData.map((album) => (
                    <div className="grid-list-item" key={album.slug}>
                        <Link href={`/albums/${album.slug}`}>
                        <Image
                            src={album.cover}
                            alt={album.title}
                            width={592}
                            height={394}
                            style={{ width: "100%" }}
                        />
                        <h2 className="grid-name">{album.title}</h2>
                        </Link>
                    </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Portfolio;