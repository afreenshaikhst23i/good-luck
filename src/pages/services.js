import Quote from "@/components/Quote";
import SEO from "@/components/Seo";
import Image from "next/image";

function Services() {
    return (
        <>
            <SEO page="services" />
            <Quote 
                heading="Our Services"
                text="With a passion for storytelling and an unwavering commitment to excellence, we offer a range of photography services tailored to meet your unique needs"
            />
            
            <section className="fifty-section service-section">
                <div className="container">
                    <div className="left-fifty-wrapper">
                        <div className="text-wrap">
                            <h2 className="service-heading">Wedding Photography</h2>
                            <p className="service-text">
                                We specialize in immortalizing the magic of love through our lens. 
                                With a passion for storytelling and an eye for detail, 
                                we strive to create timeless wedding photographs that 
                                reflect the unique essence of each couple&apos;s journey. 
                                From candid laughter to stolen glances, we are dedicated to preserving every 
                                precious moment of your special day. Let&apos;s embark on this unforgettable 
                                adventure together, turning fleeting moments into everlasting treasures.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <h2 className="service-heading">Wedding Photography</h2>
                            <Image src="/images/amrin-shabbir/landscape-1.JPG" alt="Wedding Photography" className="service-img" width={518} height={345} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="fifty-section service-section">
                <div className="container">
                    <div className="right-fifty-wrapper">
                        <div className="text-wrap">
                            <h2 className="service-heading">Pre-wedding Photography</h2>
                            <p className="service-text">
                                Step into a world where love unfolds in every frame! We specialize in capturing the joy, 
                                anticipation, and tender moments of the pre-wedding journey. 
                                From intimate embraces to playful glances, we believe in freezing 
                                these precious moments in time, painting a vivid portrait of your 
                                love story before the big day arrives. With a blend of artistry and 
                                authenticity, we strive to create stunning pre-wedding photographs 
                                that reflect the unique bond shared between you and your partner. 
                                Let&apos;s embark on this enchanting journey together, weaving your love 
                                story into breathtaking imagery that will be treasured for a lifetime.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <h2 className="service-heading">Pre-wedding Photography</h2>
                            <Image src="/images/service-pre-wedding.jpg" alt="Pre-wedding Photography" className="service-img" width={518} height={345} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="fifty-section service-section">
                <div className="container">
                    <div className="left-fifty-wrapper">
                        <div className="text-wrap">
                            <h2 className="service-heading">Product Photography</h2>
                            <p className="service-text">
                                Our passion is to showcase your products in their best light, 
                                capturing every detail and essence that sets them apart. 
                                With a keen eye for composition and lighting, we specialize 
                                in creating compelling images that elevate your brand and 
                                drive sales. Whether you&apos;re launching a new product line 
                                or refreshing your brand identity, we&apos;re here to bring your 
                                vision to life. Let&apos;s collaborate and turn your products 
                                into stunning visual assets that leave a lasting impression on your audience.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <h2 className="service-heading">Product Photography</h2>
                            <Image src="/images/service-product.jpg" alt="Product Photography" className="service-img" width={518} height={345} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="fifty-section service-section">
                <div className="container">
                    <div className="right-fifty-wrapper">
                        <div className="text-wrap">
                            <h2 className="service-heading">Events Photography</h2>
                            <p className="service-text">
                                Step into the spotlight of your unforgettable moments! From milestone celebrations to 
                                corporate gatherings, we specialize in capturing the essence and energy of every event. 
                                With a blend of creativity and professionalism, we ensure that no moment goes 
                                unnoticed, preserving the laughter, excitement, and heartfelt connections 
                                that make your event unique. Whether it&apos;s a wedding, corporate conference, 
                                or special occasion, we&apos;re dedicated to providing high-quality images that 
                                encapsulate the spirit of your event. Let&apos;s work together to turn your 
                                moments into timeless memories that you&apos;ll cherish for a lifetime.
                            </p>
                        </div>
                        <div className="img-wrap">
                            <h2 className="service-heading">Events Photography</h2>
                            <Image src="/images/service-birthday.jpg" alt="Events Photography" className="service-img" width={518} height={345} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;