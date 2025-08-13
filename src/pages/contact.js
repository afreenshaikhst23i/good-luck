import Quote from "@/components/Quote";
import Image from "next/image";

function Contact() {
    return(
        <>
            <Quote 
                heading="Contact Us"
                text="Through the lens, we not only capture images but also the emotions, the fleeting moments, and the profound stories that define the human experience."
            />
            <section class="fifty-section contact-section">
                <div class="container">
                    <div class="left-fifty-wrapper">
                        <div class="text-wrap">
                            <p>Let&apos;s capture the conversation.</p>
                            <p>Have a vision, a question, 
                                or a moment you want to share? Our lens is ready, and so are we.</p>
                            <p class="cont-heading">Contact Us</p>
                            <div class="cont-details">
                                <a class="contact" href="tel:9029913925"> <i class="fa fa-phone"></i> 9029913925</a>
                                <a class="contact" href="tel:9004768168"> <i class="fa fa-phone"></i> 9004768168</a>
                                <a class="contact" href="mailto:goodluckstudio1968@gmail.com"> <i class="fa fa-envelope-o"></i> goodluckstudio1968@gmail.com</a>
                            </div>
                            <p class="cont-heading">Visit Us</p>
                            <address class="address-wrap">
                                Shop 3, Jarimari,
                                Kurla - Andheri Road,
                                Mumbai - 400070
                            </address>
                        </div>
                        <div class="img-wrap">
                            <Image src="/images/contact.jpg" className="w-full" alt="Wedding Photography" width={518} height={642} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;