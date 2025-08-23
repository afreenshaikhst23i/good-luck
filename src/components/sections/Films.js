function Films() {
    return (
        <section className="films-section">
            <div className="films-wrapper">
                <h2 className="primary-heading">Our Films</h2>
                <div className="film-grid">
                    <div className="film-item">
                        <video poster="/images/amrin-shabbir/landscape-2.JPG" controls disablePictureInPicture  controlsList="nodownload noplaybackrate">
                            <source src="/films/amrin-shabbir.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Films;