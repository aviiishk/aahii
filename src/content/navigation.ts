export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "About",
    href: "/about",
    children: [
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Board of Directors", href: "/about/board-of-directors" },
      { label: "Management Team", href: "/about/management-team" },
    ],
  },

  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Upcoming Departments", href: "/departments/upcoming" },
      { label: "Clinical Services", href: "/departments/clinical-services" },
    ],
  },

  { label: "Research & Development", href: "/research-development" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact Us", href: "/contact" },

  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Vacancies", href: "/careers/vacancies" },
      {
        label: "Fellowship / Training / Internship",
        href: "/careers/fellowship-training-internship",
      },
    ],
  },

  {
    label: "Media",
    href: "/media",
    children: [
      { label: "News & Events", href: "/media/news-events" },
      { label: "Press Coverage", href: "/media/press-coverage" },
    ],
  },

  { label: "Vendors", href: "/vendor/register" },
];
