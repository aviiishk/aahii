import Image from "next/image";
import Link from "next/link";

export default function FooterBottom() {
  return (
    <section className="bg-(--nav-blue) text-white">
      {/* CARD STRIP */}
      <div className="py-6 sm:py-10">
        <div
          className="
            max-w-7xl mx-auto
            flex items-center gap-4 sm:gap-6
            px-4 sm:px-6
            overflow-x-auto scrollbar-hide
          "
        >
          {[
            "/logos/iitg-logo.png",
            "/logos/medirays.png",
            "/logos/govassam.jpg",
            "/logos/roboss.png",
            "/logos/bionest.png",
          ].map((logo) => (
            <div
              key={logo}
              className="
                min-w-35 sm:min-w-55
                bg-white rounded-xl
                px-3 sm:px-6
                py-2 sm:py-4
                flex justify-center items-center
              "
            >
              <Image
                src={logo}
                alt="Partner logo"
                width={220}
                height={48}
                className="h-12 sm:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* POLICIES */}
      <div className="border-t border-white/20">
        <div
          className="
      max-w-7xl mx-auto
      px-4 sm:px-6
      py-3 sm:py-4
      flex flex-col md:flex-row
      items-center md:items-center
      text-xs md:text-sm
      gap-2 sm:gap-4
    "
        >
          {/* Policies links */}
          <div
            className="
        flex items-center gap-4 sm:gap-6
        whitespace-nowrap overflow-x-auto scrollbar-hide
        justify-center md:justify-start
        w-full md:w-auto
      "
          >
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/website-policies" className="hover:underline">
              Website Policies
            </Link>
          </div>

          {/* Page update */}
          <p
            className="
        text-center md:text-left
        md:ml-auto
      "
          >
            <span className="text-orange-400">Page Update on:</span>{" "}
            <strong>27/01/2026</strong>
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#18284f] text-center py-3 text-sm">
        Copyright © 2026 | All Rights Reserved by AAHII
      </div>
    </section>
  );
}
