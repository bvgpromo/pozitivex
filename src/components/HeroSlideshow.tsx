"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg"
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-contain bg-white" // Using object-contain so we don't crop the quotes
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all shadow-sm border border-black/10 ${
              index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
