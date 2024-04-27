import React from "react";
import "./Carousel.css";

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
                    <img src="/imgs/open.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src="/imgs/javascript-logo-4.png" className="d-block w-100 carousel-image js-logo" alt="Slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="/imgs/html.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
                </div>
                <div className="carousel-item">
                    <img src="/imgs/css.jpg" className="d-block w-100 carousel-image" alt="Slide 4" />
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
