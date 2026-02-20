import Image from "next/image";
import { Menu } from "lucide-react";

export default function BrandingBar({
  onOpenMenu,
}: {
  onOpenMenu: () => void;
}) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left */}
<div className="flex items-start gap-4">
  <Image
    src="/logos/aahii-logo.png"
    alt="AAHII official logo"
    width={100}
    height={100}
    priority
    className="
      w-40 h-40
      sm:w-22 sm:h-22
      object-contain
      rounded-xl
      transition-all duration-300 ease-out
      hover:scale-105 hover:drop-shadow-md
    "
  />

  <div className="pt-1">
    <h1 className="text-2xl font-bold text-blue-900">
      Assam Advanced Healthcare Innovation Institute (AAHII)
    </h1>
      <h2 className="text-sm font-bold italic text-blue-500">
      by
    </h2>
    <p className="text-xl  font-bold text-slate-900">
        Assam Government IIT-G Healthcare Foundation (AGIHF)
    </p>
    <p className="hidden sm:block text-[10px] text-red-600">
      A joint venture between Govt. of Assam & IIT-G
    </p>
  </div>
</div>


          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Desktop logos */}
          
              <Image
                src="/logos/assam-gov.png"
                alt="Government of Assam logo"
                width={60}
                height={60}
                
              />
                <div className="hidden md:flex items-center gap-4">
              <Image
                src="/logos/iitg-logo.png"
                alt="IIT Guwahati logo"
                width={60}
                height={60}
              />
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={onOpenMenu}
              className="md:hidden p-2 rounded-md hover:bg-slate-100"
              aria-label="Open menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-200/60" />
    </div>
  );
}
