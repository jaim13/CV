// Carousel.js
import React from "react";
import "./Carousel.css";

function Carousel() {
  const images = [
    { src: "/imgs/react.png", alt: "Slide 1" },
    { src: "/imgs/js.png", alt: "Slide 2" },
    { src: "/imgs/html-5.png", alt: "Slide 3" },
    { src: "/imgs/css-3.png", alt: "Slide 4" }
  ];

  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button key={index} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : ""} aria-label={`Slide ${index + 1}`}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="10000">
            <img src={image.src} className="d-block w-100 carousel-image" alt={image.alt} />
          </div>
        ))}
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
