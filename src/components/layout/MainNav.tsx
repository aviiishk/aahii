"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNavigation } from "@/content/navigation";

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 md:py-0">
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6 py-3 text-sm font-medium">
            {primaryNavigation.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-1 hover:text-blue-700"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Desktop dropdown */}
                {item.children && (
                  <ul className="absolute left-0 top-full hidden min-w-56 bg-white border shadow-sm group-hover:block">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href!}
                          className="block px-4 py-2 hover:bg-slate-100"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="md:hidden border-t pb-4 text-sm font-medium">
            {primaryNavigation.map((item) => (
              <li key={item.label} className="border-b">
                <button
                  className="w-full flex items-center justify-between px-2 py-3"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                >
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}

                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Mobile dropdown */}
                {item.children && openDropdown === item.label && (
                  <ul className="bg-slate-50">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href!}
                          className="block px-6 py-2"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
