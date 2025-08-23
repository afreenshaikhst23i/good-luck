function Quote({heading, text}) {
    return (
        <section className="quote-section">
            <div className="quote-wrapper container">
                <h1 className="the-quote">{heading}</h1>
                <p className="the-sub-text">{text}</p>
            </div>
        </section>
    );   
}

export default Quote;