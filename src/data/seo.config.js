const siteURL = "https://good-luck-dnii.vercel.app";

const SEO_CONFIG = {
    default: {
        title: "Good Luck Digital Photo Studio",
        description:
            "Wedding Photography and Cinematography by Good Luck Digital Photo Studio. Capturing timeless memories with creativity and passion.",
            image: `${siteURL}/images/og-image.jpg`,
            url: siteURL,
    },

    home: {
        title: "Wedding Photography and Cinematography",
        description:
            "Explore a world of visual storytelling through the lens of Good Luck Digital Photo Studio. Specializing in Wedding photography and cinematography.",
            image: `${siteURL}/images/og-image.jpg`,
            url: `${siteURL}/`,
    },

    portfolio: {
        title: "Portfolio",
        description:
            "View our portfolio of wedding photography and cinematography. Stunning captures that turn moments into timeless memories.",
            image: `${siteURL}/images/portfolio-cover.jpg`,
            url: `${siteURL}/portfolio`,
    },

    services: {
        title: "Photography & Videography Services",
        description:
            "Discover our professional photography and videography services including weddings, pre-weddings, events, and cinematography. We bring creativity and precision to every moment.",
            image: `${siteURL}/images/services-cover.jpg`,
            url: `${siteURL}/services`,
    },

    about: {
        title: "About Us",
        description:
            "Learn more about Good Luck Digital Photo Studio. With over 25 years of experience, we specialize in weddings, events, and timeless photography.",
            image: `${siteURL}/images/about-cover.jpg`,
            url: `${siteURL}/about`,
    },

    contact: {
        title: "Contact",
        description:
            "Get in touch with Good Luck Digital Photo Studio for wedding photography, videography, and events. Let's capture your special moments together.",
            image: `${siteURL}/images/contact-cover.jpg`,
            url: `${siteURL}/contact`,
    },
};

export default SEO_CONFIG;
