import servicesData from "@/data/FiftyCardData";

function FiftyCard( wrapperClass = "left-fifty-wrapper") {
    return (
        <section className="fifty-section service-section" key={index}>
          <div className="container">
            <div className={wrapperClass}>
              <div className="text-wrap">
                <h2 className="service-heading">{service.title}</h2>
                <p className="service-text">{service.text}</p>
              </div>
              <div className="img-wrap">
                <h2 className="service-heading">{service.title}</h2>
                <Image
                  src={service.img}
                  alt={service.title}
                  className="service-img"
                  width={518}
                  height={345}
                />
              </div>
            </div>
          </div>
        </section>
    );
}

export default FiftyCard;