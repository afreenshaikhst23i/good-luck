import Quote from "@/components/Quote";
import Image from "next/image";

function About() {
    return (
        <>
            <Quote 
                heading="About Us"
                text="As a passionate and dedicated photographer, We strive to capture the essence of each fleeting moment, transforming them into timeless visual narratives"
            />
            <section className="fifty-section about-section">
                <div className="container">
                    <div className="right-fifty-wrapper">
                        <div className="text-wrap">
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
                        </div>
                        <div className="img-wrap">
                            <Image src="/images/zuber-shaikh.JPG" alt="Zuber Shaikh Photographer" className="w-full" width={518} height={776} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;