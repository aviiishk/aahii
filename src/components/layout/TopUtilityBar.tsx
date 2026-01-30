import { Search } from "lucide-react";

export default function TopUtilityBar() {
  return (
    <div className="bg-slate-100 text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
        {/* Skip link */}
        <a
          href="#main-content"
          className="underline text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Skip to main content
        </a>

        {/* Utilities */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Language */}
          <button className="hover:underline">हिंदी</button>
          <button className="hover:underline">English</button>

          <span className="mx-1 text-slate-400">|</span>

          {/* Font size controls */}
          <button aria-label="Decrease font size">A-</button>
          <button aria-label="Default font size">A</button>
          <button aria-label="Increase font size">A+</button>

          {/* Search */}
          <button
            aria-label="Search site"
            className="ml-2"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
