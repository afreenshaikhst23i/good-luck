import FiftySection from "@/components/common/FiftyFiftyCard";
import Quote from "@/components/common/Quote";
import SEO from "@/components/layout/SEO";
import Image from "next/image";

function Contact() {
    return(
        <>
            <SEO page="contact" />
            <Quote 
                heading="Contact Us"
                text="Through the lens, we not only capture images but also the emotions, the fleeting moments, and the profound stories that define the human experience"
            />
            <FiftySection
                sectionClass="contact-section"
                alignment="left"
                textContent=
                    {
                        <>
                            <p>Looking for a professional wedding photographer and videographer? Let&apos;s connect to discuss your dream wedding photography and cinematic film.</p>
                            <p>Our lens is ready, and so are we.</p>
                            <h2 className="cont-heading">Contact Us</h2>
                            <div className="cont-details">
                                <p>
                                    <strong>Phone: </strong>
                                    <a className="contact" href="tel:9029913925"> <i className="fa fa-phone"></i> 9029913925</a>
                                </p>
                                <p>
                                    <strong>Phone: </strong>
                                    <a className="contact" href="tel:9004768168"> <i className="fa fa-phone"></i> 9004768168</a>
                                </p>
                                <p>
                                    <strong>Email: </strong>
                                    <a className="contact" href="mailto:goodluckstudio1968@gmail.com"> <i className="fa fa-envelope-o"></i> goodluckstudio1968@gmail.com</a>
                                </p>
                            </div>
                            <h2 className="cont-heading">Visit Us</h2>
                            <address className="address-wrap">
                                Shop 3, Jarimari,
                                Kurla - Andheri Road,
                                Mumbai - 400070
                            </address>
                        </>
                    }
                imageContent=
                    {
                        <Image 
                            src="/images/contact.jpg" 
                            alt="" 
                            className="w-full" 
                            priority
                            width={518} height={642} />
                    }
            />
        </>
    );
}

export default Contact;