function Quote({heading, text}) {
    return (
        <section className="quote-section">
            <div className="quote-wrapper container">
                <h2 className="the-quote">{heading}</h2>
                <p className="the-sub-text">{text}</p>
            </div>
        </section>
    );   
}

export default Quote;