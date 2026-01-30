import Image from "next/image";

export default function BrandingBar() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2">

          {/* Left: Logo + Name */}
          <div className="flex items-center gap-2 min-w-0">
            <Image
              src="/logos/aahii-logo.jpeg"
              alt="AAHII official logo"
              width={40}
              height={40}
              priority
              className="shrink-0 sm:w-14 sm:h-14"
            />

            {/* Text block */}
            <div className="min-w-0">
              <div className="flex items-center gap-1 min-w-0">
                <h1 className="text-[13px] sm:text-lg md:text-xl font-bold text-blue-900 whitespace-nowrap">
                  AAHII
                </h1>

                <p className="text-[8px] sm:text-sm text-slate-700 truncate">
                  Assam Advanced Healthcare Innovation Institute
                </p>
              </div>

              {/* Subtitle hidden on mobile */}
              <p className=" sm:block text-[7px] md:text-[12px] text-red-600 leading-snug">
                A joint venture between Govt. of Assam & IIT-G
              </p>
            </div>
          </div>

          {/* Right: Partner logos */}
          <div className="flex items-center gap-2 shrink-0">
            <Image
              src="/logos/iitg-logo.png"
              alt="IIT Guwahati logo"
              width={36}
              height={36}
              className="sm:w-12 sm:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
