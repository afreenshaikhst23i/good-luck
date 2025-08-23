import FiftySection from "@/components/common/FiftyFiftyCard";
import Quote from "@/components/common/Quote";
import SEO from "@/components/layout/SEO";
import serviceData from "@/data/serviceData";

function Services() {
    return (
        <>
            <SEO page="services" />
            <Quote 
                heading="Our Services"
                text="With a passion for storytelling and an unwavering commitment to excellence, we offer a range of photography services tailored to meet your unique needs"
            />

            {serviceData.map((section, index) => (
                <FiftySection
                    key={index}
                    sectionClass={section.sectionClass}
                    alignment={section.alignment}
                    textContent={section.textContent}
                    imageContent={section.imageContent}
                />
            ))}
        </>
    );
}

export default Services;