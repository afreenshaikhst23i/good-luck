import Films from "@/components/Films";
import ImageGrid from "@/components/ImageGrid";
import HeroSlider from "@/components/HeroSlider";
import Quote from "@/components/Quote";
import SEO from "@/components/Seo";

export default function Home() {
    return (
        <>
            <SEO page="home" />
            <HeroSlider />
            <Quote
                heading="Every photograph is a journey through time and emotion"
                text="Through the lens, we not only capture images but also the emotions, the fleeting moments, and the profound stories that define the human experience"
            />
            <ImageGrid />
            <Films />
        </>
    );
}
