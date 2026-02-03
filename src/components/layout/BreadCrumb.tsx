"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-linear-to-r from-slate-50 to-slate-100 border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {/* Home */}
          <li>
            <Link
              href="/"
              className="font-medium text-blue-700 hover:text-blue-900 transition"
            >
              Home
            </Link>
          </li>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            const label = segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            return (
              <li key={href} className="flex items-center gap-1">
                {/* Separator */}
                <span className="mx-1 text-slate-400">›</span>

                {/* Segment */}
                {isLast ? (
                  <span className="font-semibold text-slate-700">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
