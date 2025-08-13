function Quote({heading, text}) {
    return (
        <section class="quote-section">
            <div class="quote-wrapper container">
                <h2 class="the-quote">{heading}</h2>
                <p class="the-sub-text">{text}</p>
            </div>
        </section>
    );   
}

export default Quote;