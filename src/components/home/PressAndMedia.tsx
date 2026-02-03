import Image from "next/image";
import Link from "next/link";
import { pressData } from "@/content/press";
import { pressLogos } from "@/content/pressLogos";

export default function PressAndMedia() {
  const latestPress = pressData.filter((item) => !item.featured);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* ================= Header ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured in Leading Publications
          </h2>
          <p className="text-gray-600">
            Coverage highlighting our vision, research impact, and national
            relevance in the healthcare sector.
          </p>
        </div>

        {/* ================= Logos Marquee ================= */}
        <div className="relative overflow-hidden py-10 border-y border-gray-100 mb-24">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-20 animate-press-marquee">
            {[...pressLogos, ...pressLogos].map((item, index) => (
              <a
                key={`${item.id}-${index}`}
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center min-w-[180px] opacity-70 hover:opacity-100 transition"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={48}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ================= Latest News ================= */}
        <div className="grid gap-10 md:grid-cols-3">
          {latestPress.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden
                shadow-[0_12px_32px_rgba(15,42,109,0.08)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_26px_60px_rgba(15,42,109,0.14)]"
            >
              {/* IMAGE */}
              <div className="relative h-[260px] w-full overflow-hidden bg-gray-100">
                <Image
                  src={item.image || "/press/news1.jpg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out
                    will-change-transform group-hover:scale-[1.04]"
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

                {/* CTA */}
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
      </div>
    </section>
  );
}
