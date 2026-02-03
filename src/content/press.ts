// content/press.ts

export type PressItem = {
  id: number;
  source: string;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  publishedAt: string;
  featured?: boolean;
};

export const pressData: PressItem[] = [
  {
    id: 1,
    source: "The Indian Express",
    title:
      "PM Modi to lay foundation stone of Research and Healthcare Facility at IIT Guwahati today",
    excerpt:
      "The upcoming centre is poised to become a hub for indigenous medical technology development...",
    image: "/press/news1.jpg",
    link: "#",
    publishedAt: "14 April 2023",
  },
  {
    id: 2,
    source: "Business Standard",
    title:
      "Modi to lay foundation stone of Research and Healthcare Facility",
    excerpt:
      "A major step toward strengthening healthcare research infrastructure in the Northeast...",
    image: "/press/news2.jpg",
    link: "#",
    publishedAt: "13 April 2023",
  },
  {
    id: 3,
    source: "The Assam Tribune",
    title: "PM Modi to launch development projects in Assam",
    excerpt:
      "A multi-billion project aimed at revolutionizing healthcare infrastructure...",
    image: "/press/news3.jpg",
    link: "#",
    publishedAt: "14 April 2023",
  },
];
