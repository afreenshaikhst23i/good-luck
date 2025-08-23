import FiftySection from "@/components/common/FiftyFiftyCard";
import Quote from "@/components/common/Quote";
import SEO from "@/components/layout/SEO";
import Image from "next/image";

function About() {
    return (
        <>
            <SEO page="about" />
            <Quote 
                heading="About Us"
                text="As a passionate and dedicated photographer, We strive to capture the essence of each fleeting moment, transforming them into timeless visual narratives"
            />
            <FiftySection
                sectionClass="about-section"
                alignment="right"
                textContent=
                    {
                        <>
                            <h2 className="text-2xl font-bold">A Legacy Since 1995</h2>
                            <p>
                                I, Zuber Shaikh,
                                welcomes you to Good Luck Digital Photo Studio, a visual journey steeped in a 
                                legacy of capturing moments since 1995. For over two decades, 
                                our lens has been a witness to the evolving tapestry of life, 
                                preserving memories with a timeless touch. With a foundation 
                                built on passion, skill, and a deep appreciation for the art of 
                                photography, we bring a wealth of experience to every frame.
                            </p>
                            <p>At Good Luck Digital Photo Studio, 
                                we are dedicated to preserving the authenticity of each moment, 
                                whether it&apos;s a tender embrace, a spontaneous burst of laughter, 
                                or the quiet beauty of a still life. With an unwavering commitment 
                                to artistic expression and a keen eye for detail, we embark on a 
                                visual journey to encapsulate the essence of every subject.</p>
                        </>
                    }
                imageContent=
                    {
                        <Image 
                            src="/images/zuber-shaikh.JPG" 
                            alt="Portrait of Zuber Shaikh, professional wedding and event photographer at Good Luck Digital Photo Studio" 
                            className="w-full" 
                            priority
                            width={518} height={744} />
                    }
            />
        </>
    );
}

export default About;