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
        title: "Wedding Photography and Cinematography | Good Luck Digital Photo Studio",
        description:
            "Good Luck Digital Photo Studio – Wedding Photography & Cinematic Videography in Mumbai. With 25+ years of experience, we capture candid moments, emotional ceremonies, and timeless wedding films for couples across India.",
            image: `${siteURL}/images/og-image.jpg`,
            url: `${siteURL}/`,
    },

    portfolio: {
        title: "Wedding Photography Portfolio | Good Luck Digital Photo Studio",
        description:
            "Explore real weddings and highlight films—candid moments, bridal portraits, couple shoots, and cinematic edits by Good Luck Studio.",
            image: `${siteURL}/images/portfolio-cover.jpg`,
            url: `${siteURL}/portfolio`,
    },

    services: {
        title: "Photography & Videography Services | Good Luck Digital Photo Studio",
        description:
            "Discover our professional photography and videography services including weddings, pre-weddings, events, and cinematography. We bring creativity and precision to every moment.",
            image: `${siteURL}/images/services-cover.jpg`,
            url: `${siteURL}/services`,
    },

    about: {
        title: "About Good Luck Digital Photo Studio | 25+ Years",
        description:
            "A wedding photography and cinematography team with 25+ years of experience, delivering timeless images and films with a personal touch.",
            image: `${siteURL}/images/about-cover.jpg`,
            url: `${siteURL}/about`,
    },

    contact: {
        title: "Contact Good Luck Studio | Wedding Photography & Video",
        description:
            "Get in touch with Good Luck Digital Photo Studio for wedding photography, videography, and events. Let's capture your special moments together.",
            image: `${siteURL}/images/contact-cover.jpg`,
            url: `${siteURL}/contact`,
    },
};

export default SEO_CONFIG;
