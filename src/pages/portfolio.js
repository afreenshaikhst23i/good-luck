import Quote from "@/components/common/Quote";
import Link from "next/link";
import albumsData from "../data/albumsData";
import Image from "next/image";
import SEO from "@/components/layout/SEO";

function Portfolio() {
    return (
        <>
            <SEO page="portfolio" />
            <Quote 
                heading="Our Portfolio"
                text="Explore our portfolio of wedding photography and videography. From candid shots to cinematic wedding films, our work showcases creativity, passion, and attention to detail"
            />
            <section className="photo-grid-section portfolio">
                <div className="grid-list">
                    {albumsData.map((album) => (
                    <div className="grid-list-item" key={album.slug}>
                        <Link href={`/albums/${album.slug}`}>
                        <Image
                            src={album.cover}
                            alt={album.alt}
                            width={592}
                            height={394}
                            priority
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