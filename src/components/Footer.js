import Image from "next/image";

function Footer() {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-item">
                        <div className="footer-logo">
                            <Image src="/images/logo/balck-logo-tagline.png" alt="Good Luck Digital Photo Studio Logo" width={250} height={100} />
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
                                <svg><use xlinkHref="/images/primary-icons.svg#phone"></use></svg>
                                9029913925</a>
                            <a className="contact" href="tel:9004768168">
                                <svg><use xlinkHref="/images/primary-icons.svg#phone"></use></svg>
                                9004768168</a>
                            <a className="contact" target="_blank" href="https://www.instagram.com/goodluck.digital.photo.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <svg><use xlinkHref="/images/social-icons.svg#instagram"></use></svg>
                                goodluck.digital.photo.studio</a>
                            <a className="contact" href="mailto:goodluckstudio1968@gmail.com">
                                <svg><use xlinkHref="/images/primary-icons.svg#mail"></use></svg>
                                goodluckstudio1968@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="copyright-text">© 2024 Good Luck Digital Photo Studio, All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;