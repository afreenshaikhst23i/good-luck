import Films from "@/components/Films";
import ImageGrid from "@/components/ImageGrid";
import HeroSlider from "@/components/HeroSlider";
import Quote from "@/components/Quote";

export default function Home() {
    return (
        <>
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
