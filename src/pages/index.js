import Films from "@/components/sections/Films";
import ImageGrid from "@/components/sections/ImageGrid";
import HeroSlider from "@/components/sections/HeroSlider";
import Quote from "@/components/common/Quote";
import SEO from "@/components/layout/SEO";

export default function Home() {
    return (
        <>
            <SEO page="home" />
            <HeroSlider />
            <Quote
                heading="Every photograph is a journey through time and emotion"
                text="At Good Luck Digital Photo Studio, we don&apos;t just capture images—we preserve emotions, fleeting moments, and profound stories that define life. With over 25 years of experience in wedding photography and cinematic videography, we specialize in creating timeless wedding films and candid memories for couples across Mumbai and all over India"
            />
            <ImageGrid />
            <Films />
        </>
    );
}
