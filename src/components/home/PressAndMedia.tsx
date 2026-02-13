"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { pressData } from "@/content/press";
import { pressLogos } from "@/content/pressLogos";

export default function PressAndMedia() {
  const latestPress = pressData.filter((item) => !item.featured);
  const newsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    newsRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    newsRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= Header ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0f2a6d] mb-4">
            Featured in Leading Publications
          </h2>
          <p className="text-gray-600">
            Coverage highlighting our vision, research impact, and national
            relevance in the healthcare sector.
          </p>
        </div>

        {/* ================= Logos Marquee ================= */}
        <div className="relative overflow-hidden py-5 border-y border-gray-100 mb-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="press-marquee gap-12 md:gap-20">
            {[...pressLogos, ...pressLogos].map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center h-full
                  min-w-[96px] sm:min-w-[130px] md:min-w-[160px] lg:min-w-[180px]
                  opacity-70 hover:opacity-100 transition-opacity
                "
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={48}
                  className="
                    block object-contain
                    w-[64px] sm:w-[90px] md:w-[120px] lg:w-[140px]
                    h-auto grayscale hover:grayscale-0 transition
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* ================= Latest News ================= */}
{/* ================= Latest News ================= */}
<div className="relative">
  {/* Heading */}
  <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0f2a6d] mb-8">
    Latest News
  </h3>

  {/* Cards */}
  <div
    ref={newsRef}
    className="
      flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide
      md:grid md:grid-cols-3 md:gap-10 md:overflow-visible
    "
  >
    {latestPress.map((item) => (
      <div
        key={item.id}
        className="
          group flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto
          flex flex-col bg-white rounded-2xl overflow-hidden
          shadow-[0_12px_32px_rgba(15,42,109,0.08)]
          transition-all duration-300
          hover:-translate-y-2
          hover:shadow-[0_26px_60px_rgba(15,42,109,0.14)]
        "
      >
        {/* IMAGE */}
        <div className="relative h-[260px] w-full overflow-hidden bg-gray-100">
          <Image
            src={item.image || "/press/news1.jpg"}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="
              object-cover transition-transform duration-500 ease-out
              will-change-transform group-hover:scale-[1.04]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col flex-1 p-7">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
            {item.publishedAt}
          </p>

          <h4 className="text-[19px] leading-[1.35] font-semibold text-[#1f2a5a] mb-6">
            {item.title}
          </h4>

          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link
              href={item.link || "#"}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Arrow buttons – BELOW cards (mobile only) */}
  <div className="mt-6 flex justify-center gap-4 md:hidden">
    <button
      onClick={scrollLeft}
      aria-label="Previous"
      className="
        flex items-center justify-center
        w-11 h-11 rounded-full
        border border-gray-300 text-gray-700
        hover:bg-gray-100 transition
      "
    >
      <ChevronLeft size={20} />
    </button>

    <button
      onClick={scrollRight}
      aria-label="Next"
      className="
        flex items-center justify-center
        w-11 h-11 rounded-full
        bg-purple-600 text-white
        hover:bg-purple-700 transition
      "
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>
      </div>
    </section>
  );
}
