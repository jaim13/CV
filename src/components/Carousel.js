import React from "react";

function Carousel(){
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="/imgs/open.jpg" className="d-block w-100" alt="Slide 1" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Open</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src="/imgs/js.jpg" className="d-block w-100" alt="Slide 2" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>JavaScript</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/imgs/html.jpg" className="d-block w-100" alt="Slide 3" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>HTML</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/imgs/css.jpg" className="d-block w-100" alt="Slide 4" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>CSS</h5>
                        <p>Some representative placeholder content for the fourth slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
