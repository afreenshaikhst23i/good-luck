function FiftySection({ 
    sectionClass = "", 
    alignment = "left", 
    textContent, 
    imageContent 
    }) {
    return (
        <section className={`fifty-section ${sectionClass}`}>
            <div className="container">
                <div className={`${alignment}-fifty-wrapper`}>
                <div className="text-wrap">
                    {textContent}
                </div>
                <div className="img-wrap">
                    {imageContent}
                </div>
                </div>
            </div>
        </section>
    );
}

export default FiftySection;
