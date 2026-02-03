"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import clsx from "clsx";
import { primaryNavigation } from "@/content/navigation";
import BrandingBar from "./BrandingBar";

export default function MainNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* ---------------- helpers ---------------- */

  const openMenu = () => {
    setMobileOpen(true);
  };

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenIndex(null);
  };

  /* lock background scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ---------------- render ---------------- */

  return (
    <>
      {/* Branding bar owns hamburger */}
      <BrandingBar onOpenMenu={openMenu} />

      {/* ---------------- Desktop Nav ---------------- */}
      <nav className="hidden md:block bg-white shadow-sm relative z-40">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex items-center gap-10 h-14 text-sm font-medium">
            {primaryNavigation.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  href={item.href ?? "#"}
                  className="flex items-center gap-1 py-4 text-slate-700 hover:text-blue-700 transition"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <ul
                    className="absolute left-0 top-full mt-2 min-w-56 bg-white shadow-xl rounded-xl py-2
                               opacity-0 invisible translate-y-1
                               group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                               transition-all duration-200"
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href!}
                          className="block px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md mx-2"
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
      </nav>

      {/* ---------------- Mobile Menu ---------------- */}
      <div
        className={clsx(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-200",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className="absolute inset-0 bg-black/30"
        />

        {/* Menu panel */}
        <div
          className={clsx(
            "absolute left-0 right-0 top-0 bg-[#eaf1fb] shadow-lg",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-y-0" : "-translate-y-3",
            "max-h-screen",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-end px-5 h-14 sticky top-0 bg-[#eaf1fb] z-10">
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2"
            >
              <X className="w-6 h-6 text-blue-700" />
            </button>
          </div>

          <div className="h-px bg-slate-300/50" />

          {/* Scrollable menu */}
          <div className="overflow-y-auto overscroll-contain">
            <ul className="px-5 py-4 space-y-2">
              {primaryNavigation.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <li key={item.label}>
                    <button
                      className="w-full flex items-center justify-between
                                 py-4 text-left text-[16px] font-semibold
                                 text-slate-800 rounded-md
                                 hover:bg-white/60 transition"
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                    >
                      <span>{item.label}</span>

                      {item.children && (
                        <ChevronDown
                          className={clsx(
                            "w-5 h-5 text-blue-700 transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      )}
                    </button>

                    {/* Accordion */}
                    {item.children && (
                      <div
                        className={clsx(
                          "overflow-hidden transition-all duration-300 ease-out",
                          isOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0",
                        )}
                      >
                        <ul className="ml-3 mt-2 mb-3 rounded-md bg-white/60 px-3 py-2 space-y-1">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href!}
                                className="block py-2 text-[14px] text-slate-700 hover:text-blue-700"
                                onClick={closeMenu}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
