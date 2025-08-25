import Image from "next/image";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-item">
                        <div className="footer-logo">
                            <Image 
                                src="/images/logo/black-logo-tagline.svg" 
                                alt="Good Luck Digital Photo Studio Logo" 
                                priority
                                placeholder="empty"
                                width={250} height={100} />
                        </div>
                    </div>
                    <div className="footer-item">
                        <address className="address-wrap">
                            Shop 3, Jarimari,
                            Kurla - Andheri Road,
                            Mumbai - 400070
                        </address>
                    </div>
                    <div className="footer-item">
                        <div className="contact-wrap">
                            <a className="contact" href="tel:9029913925">
                                <Image src="/images/social-icons/phone.svg" alt="Call Us" width={20} height={20} />
                                9029913925</a>
                            <a className="contact" href="tel:9004768168">
                                <Image src="/images/social-icons/phone.svg" alt="Call Us" width={20} height={20} />
                                9004768168</a>
                            <a className="contact" target="_blank" href="https://www.instagram.com/goodluck.dps/">
                                <Image src="/images/social-icons/instagram.svg" alt="Call Us" width={20} height={20} />
                                goodluck.dps</a>
                            <a className="contact" href="mailto:goodluckstudio1968@gmail.com">
                                <Image src="/images/social-icons/mail.svg" alt="Call Us" width={20} height={20} />
                                goodluckstudio1968@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright-text">© {currentYear} Good Luck Digital Photo Studio - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;