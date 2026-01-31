"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;


  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 text-sm">
        <Link href="/" className="text-blue-700 hover:underline">
          Home
        </Link>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, l => l.toUpperCase());

          return (
            <span key={href}>
              <span className="mx-2 text-gray-500">/</span>
              <Link
                href={href}
                className="text-blue-700 hover:underline"
              >
                {label}
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
}
