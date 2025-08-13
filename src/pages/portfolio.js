import Quote from "@/components/Quote";
import Link from "next/link";
import albumsData from "../data/albumsData";
import Image from "next/image";

function Portfolio() {
    return (
        <>
            <Quote 
                heading="Our Portfolio"
                text="Join us on a captivating journey where each photograph serves as a chapter in the enchanting tale of life, meticulously written with the interplay of light and shadows."
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