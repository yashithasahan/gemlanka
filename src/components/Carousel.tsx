"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const images = [
  "https://www.calderagem.com/cdn/shop/articles/Top_5_Precious_Gemstones.jpg?v=1697660662&width=1400", // Replace with actual image URLs
  "https://cdn.shopify.com/s/files/1/0073/4439/0207/files/Blue_Diamond_e4a58ac9-f358-4846-8a3d-4d0ae6feb222_1024x1024.jpg?v=1709318635",
  "https://www.calderagem.com/cdn/shop/articles/Top_5_Precious_Gemstones.jpg?v=1697660662&width=1400",
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-32  rounded-md overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      ></div>
      <ChevronLeft
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white "
      />

      <ChevronRight
        scale={2}
        onClick={nextSlide}
        className="absolute  top-1/2 right-0 transform -translate-y-1/2 text-white "
      />
    </div>
  );
};

export default Carousel;
