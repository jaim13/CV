// CarouselItem.js
import React from "react";

function CarouselItem({ src, alt, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`} data-bs-interval="10000">
      <img src={src} className="d-block w-100 carousel-image" alt={alt} />
    </div>
  );
}

export default CarouselItem;
