export type EventCategory =
  | "medical-workshops"
  | "research-conferences"
  | "official-visits";

export interface EventItem {
  id: number;
  title: string;
  slug: string;
  category: EventCategory;

  // for cards / listing
  coverImage: string;

  // for gallery page
  images: string[];
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Employee Engagement",
    slug: "employee-engagement",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/Bhogali_bihu_1.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/birthday_celebration_3.png",
      "https://agihf.org/wp-content/uploads/2025/12/birthday_celebration_2.png",
      "https://agihf.org/wp-content/uploads/2026/01/Women-in-Beige-Monochrome-Photo-Collage-Instagram-Post1.png",
      "https://agihf.org/wp-content/uploads/2026/01/Women-in-Beige-Monochrome-Photo-Collage-Instagram-Post-1.png",
      "https://agihf.org/wp-content/uploads/2025/12/Bhogali_bihu_1.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/eeee-scaled.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/3www.jpeg",
    ],
  },

    {
    id: 2,
    title: "Unveiling of Indigenous Low-Field MRI and Surgical Robot Prototypes in the Presence of the Hon’ble Chief Minister of Assam",
    slug: "unveiling-indigenous-low-field-mri-surgical-robot-prototypes",
    category: "research-conferences",
    coverImage:"https://agihf.org/wp-content/uploads/2026/02/1-scaled.jpg",
      
    images: [
      "https://agihf.org/wp-content/uploads/2026/02/1-1-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-3-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-2-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-4-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-5-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-6-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-7-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-9-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-10-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-11-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-12-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-13-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/02/1-14-scaled.jpg",
    ],
  },

  {
    id: 3,
    title: "Delegates from Kagawa University, Japan, 27th Jan 2026",
    slug: "delegates-kagawa-university-japan",
    category: "research-conferences",
    coverImage:"https://agihf.org/wp-content/uploads/2026/01/japenese.jpg",
      
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5515-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5653-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5673-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5539-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5567-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5699-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5682-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5706-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5703-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5727-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_5651-scaled.jpg",
    ],
  },

  {
    id: 4,
    title: "Training on Improvement of quality components in the NICU and all medical college hospitals in Assam, 9th Jan 2026",
    slug: "training-nicu-quality-components-assam",
    category: "official-visits",
    coverImage:
      "https://agihf.org/wp-content/uploads/2026/01/qqq.jpeg",
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/a.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/qqq.jpeg",
    ],
  },

  {
    id: 5,
    title: "Director review visit at AAHII, 5th Jan 2026",
    slug: "director-review-visit-aahii",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2026/01/sss.jpeg",
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/jujj.jpeg",
    ],
  },

  {
    id: 6,
    title: "ICC Healthtech & Well-Being Conclave, 19th Dec 2025​",
    slug: "icc-healthtech-well-being-conclave",
    category: "research-conferences",
    coverImage:
      "https://agihf.org/wp-content/uploads/2026/01/conclave.jpeg",
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/ww.jpeg",
    ],
  },

  {
    id: 7,
    title: "ICANN Dec 12th-14th, 2025",
    slug: "icann-dec-2025",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2026/01/5.jpeg",
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/Women-in-Beige-Monochrome-Photo-Collage-Instagram-Post2.png",
      "https://agihf.org/wp-content/uploads/2026/01/4.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/DSC_7901-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2026/01/3.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/1.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/ee.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/2.jpeg",
    ],
  },
  {
    id: 8,
    title: "Synapse, 14th-15th Nov 2025",
    slug: "synapse-nov-2025",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2026/01/3-1.jpeg",
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/2-1.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/synpeppe.jpeg",
      "https://agihf.org/wp-content/uploads/2026/01/1-1.jpeg",
    ],
  },
  {
    id: 9,
    title: "TAG Meeting, AHIDMS 29th–30th May 2025",
    slug: "tag-meeting-ahidms-may-2025",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/TAG_Meeting_1-scaled.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/TAG_Meeting_2-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/TAG_Meeting_3-scaled.jpg",
    ],
  },
{
    id: 10,
    title: "Healthcare Leadership Meet Eastern Region 2025",
    slug: "healthcare-leadership-meet-eastern-region-2025",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2026/01/5t5rt5rt.jpeg",
    images: [
      "https://agihf.org/wp-content/uploads/2026/01/5t5rt5rt.jpeg",
    ],
  },
    {
    id: 11,
    title: "AGIHF Welcomes Dr. Siddharth Singh, 21st May 2025",
    slug: "agihf-welcomes-dr-siddharth-singh-may-2025",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/Dr_Siddharth_Singh_Visit_1-scaled.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/Dr_Siddharth_Singh_Visit_2-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Dr_Siddharth_Singh_Visit_3.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Dr_Siddharth_Singh_Visit_4-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Dr_Siddharth_Singh_Visit_5.jpg",
    ],
  },
 {
    id: 12,
    title: "PAN IIT, 21st Jan 2025",
    slug: "pan-iit-jan-2025",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/PANIIT4-scaled.webp",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/PANIIT3.webp",
      "https://agihf.org/wp-content/uploads/2025/12/PANIIT2.webp",
      "https://agihf.org/wp-content/uploads/2025/12/PANIIT1-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/PANIIT5-scaled.jpg",
    ],
  },
   {
    id: 13,
    title: "Indian International Science Festival (IISF), 30th Nov - 3rd Dec 2024",
    slug: "iisf-nov-dec-2024",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/IISF2.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/IISF1.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/IISF3.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/IISF4.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/IISF5.jpg",
    ],
  },
   {
    id: 14,
    title: "Symposium, 8th November 2024",
    slug: "symposium-nov-2024",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/Symposium_4.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/Symposium_1.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Symposium_2.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Symposium_3-scaled.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Symposium_6.jpg",
    ],
  },
     {
    id: 15,
    title: "MOA signing, 4th November 2024",
    slug: "moa-signing-nov-2024",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/MOA_4.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/MOA_1.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/MOA_2.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/MOA_3.jpg",
    ],
  },
       {
    id: 16,
    title: "Frontiers in Nano Sciences, FINS, 1st-2nd November,2024",
    slug: "frontiers-nano-sciences-nov-2024",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/FINS_2.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/FINS_1.jpg",
    ],
  },
       {
    id: 17,
    title: "New Office Opening Ceremony at Research Park, 30th October 2024",
    slug: "new-office-opening-research-park-oct-2024",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/RESERACH_PARK_1.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/RESERACH_PARK_2.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/RESERACH_PARK_3.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/RESERACH_PARK_4.jpg",
    ],
  },
         {
    id: 18,
    title: "ICANN, Our 2nd Doctor’s Conclave 29th November - 1st December, 2023 ",
    slug: "icann-doctors-conclave-nov-dec-2023",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_new_1.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_new_2.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_new_3.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_new_4.jpg",
    ],
  },
    {
    id: 19,
    title: "Our 1st Doctor’s Conclave ",
    slug: "our-1st-doctors-conclave",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_old_1.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_old_2.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_old_3.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Doctors_Conclave_old_4.jpg",
    ],
  },
  {
    id: 20,
    title: "Foundation Stone, 14th April, 2023",
    slug: "foundation-stone-april-2023",
    category: "medical-workshops",
    coverImage:
      "https://agihf.org/wp-content/uploads/2025/12/Foundation_2.jpg",
    images: [
      "https://agihf.org/wp-content/uploads/2025/12/Foundation_1.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Foundation_3.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Foundation_4.jpg",
      "https://agihf.org/wp-content/uploads/2025/12/Foundation_5.jpg",
    ],
  },
];
