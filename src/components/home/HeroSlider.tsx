"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/hero/hero1.webp",
  "/hero/hero2.jpg",
  "/hero/hero3.png",
  "/hero/hero4.png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500); // ICMR-like timing

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* SLIDES */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={img}
            alt={`Hero slide ${index + 1}`}
            fill
            className="w-full h-full object-cover"
            priority={index === 0}
          />

          {/* OPTIONAL DARK OVERLAY (govt style) */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      ))}

      {/* OPTIONAL CONTENT OVERLAY */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-[1400px] mx-auto px-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Advancing Healthcare Through Research & Innovation
          </h1>

          <p className="text-white/90 mt-4 max-w-xl text-lg">
            AAHI is committed to excellence in medical research, innovation,
            and public health impact.
          </p>
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full transition
              ${i === current ? "bg-orange-500" : "bg-white/60"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
