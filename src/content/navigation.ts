export type NavItem = {
  label: string;
  href?: string;
  disabled?: boolean;
  children?: NavItem[];
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "Vision & Mission", href: "/about-us/vision-mission" },
      { label: "Board of Directors", href: "/about-us/board-of-directors" },
      { label: "Management Team", href: "/about-us/management-team" },
    ],
  },

  {
    label: "Departments",
    href: "/departments",
    children: [
      { label: "Upcoming Departments", href: "/departments/upcoming-departments" },
      { label: "Clinical Services", href: "/departments/clinical-services" },
    ],
  },

  { label: "Research & Development", href: "/research-development" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact Us", href: "/contact-us" },

  {
    label: "Careers",
    href: "/careers",
    disabled: true,
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
    disabled: true,
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Press Coverage", href: "/media/press-coverage" },
    ],
  },

  { label: "Vendors", href: "/vendor/register" },
];




