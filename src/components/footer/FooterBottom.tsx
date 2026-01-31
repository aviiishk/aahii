import Image from "next/image";

export default function FooterBottom() {
  return (
    <section className="bg-[#1f3360] text-white">

      {/* CARD STRIP */}
      <div className="py-10">
        <div className="max-w-[1400px] mx-auto flex items-center gap-6 px-6 overflow-x-auto scrollbar-hide">
          {[
            "/logos/iitg-logo.png",
            "/logos/medirays.png",
            "/logos/govassam.jpg",
            "/logos/roboss.png",
            "/logos/bionest.png",
          ].map((logo) => (
            <div
              key={logo}
              className="min-w-[220px] bg-white rounded-xl px-6 py-4 flex justify-center items-center"
            >
              <Image
                src={logo}
                alt="Partner logo"
                height={48}
                width={220}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* POLICIES */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm gap-4">
          <p>Term & Conditions &nbsp;&nbsp; Privacy Policy &nbsp;&nbsp; Website Policies</p>
          <p>
            <span className="text-orange-400">Page Update on:</span>{" "}
            <strong>27/01/2026</strong>
          </p>
          <p>
            <span className="text-orange-400"></span>{" "}
            <strong></strong>
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
