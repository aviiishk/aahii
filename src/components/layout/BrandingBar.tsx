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
          <div className="flex items-center gap-3">
            <Image
              src="/logos/aahii-logo.png"
              alt="AAHII official logo"
              width={48}
              height={48}
              priority
              className="rounded   sm:w-14 sm:h-14"
            />

            <div>
              <h1 className="text-sm sm:text-lg md:text-xl font-bold text-blue-900">
                AAHII
              </h1>
              <p className="text-[10px] sm:text-sm text-slate-700">
                Assam Advanced Healthcare Innovation Institute
              </p>
              <p className="hidden sm:block text-[10px] text-red-600">
                A joint venture between Govt. of Assam & IIT-G
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Desktop logos */}
            <div className="hidden md:flex items-center gap-4">
              <Image
                src="/logos/iitg-logo.png"
                alt="IIT Guwahati logo"
                width={44}
                height={44}
              />
              <Image
                src="/logos/assam-gov.jpeg"
                alt="Government of Assam logo"
                width={44}
                height={44}
                className="rounded-full"
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
