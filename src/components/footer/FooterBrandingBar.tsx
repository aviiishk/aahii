import Image from "next/image";

export default function FooterBrandingBar() {
  return (
    /* DARK BLUE CONTINUATION (LEFT & RIGHT) */
    <section className="bg-[#243b6b]">
      
      {/* LIGHT BAR (CENTERED, FIXED WIDTH) */}
      <div className="max-w-[1400px] mx-auto bg-[#e9eff8] border-t border-[#1d2f57]/20">
        <div className="h-[92px] px-10 flex items-center justify-between">

          {/* LEFT: LOGO + TEXT */}
          <div className="flex items-center gap-3">
            <Image
              src="/logos/aahii-logo.jpeg"
              alt="AAHII Logo"
              width={48}
              height={48}
              className="h-12"
            />

            <div className="leading-[1.1]">
              <div className="flex items-center gap-1">
                <span className="text-[28px] font-bold text-[#1d2f57]">
                  AAHII
                </span>
                <span className="w-2 h-2 bg-orange-500 rounded-full translate-y-[2px]" />
              </div>

              <p className="text-[13px] font-semibold text-[#1d2f57] tracking-wide">
               Assam Advanced Health and Innovation Institute
              </p>

              <p className="text-[11px] text-orange-600">
              A Joint Venture between Government of Assam and IIT Guwahati
              </p>
            </div>
          </div>

          {/* RIGHT: SOCIAL ICONS */}
          <div className="flex gap-3">
            {["f", "x", "in", "▶", "◎"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-semibold"
              >
                {icon}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
