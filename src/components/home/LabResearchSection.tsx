import Image from "next/image";
import Link from "next/link";

type LabCard = {
  title: string;
  desc: string;
  img: string;
  href: string;
  bg?: string;
};

const labs: LabCard[] = [
  {
    title: "Invasive to Non-Invasive Diagnostics",
    desc:
      "Addresses the fast-growing diagnostics market with scalable, low-risk platforms that reduce procedure costs while enabling earlier, higher-volume detection.",
    img: "https://agihf.org/wp-content/uploads/2026/01/inavsive.png",
    href: "https://agihf.org/departments/#diagnostics",
  },
  {
    title: "Personalized Medicine",
    desc:
      "Unlocks premium, outcomes-based care models through genomics-driven therapies tailored to individual patient profiles.",
    img: "https://agihf.org/wp-content/uploads/2026/01/invasive.png",
    href: "https://agihf.org/departments/#personalized",
    bg: "bg-[#f0f9f4]",
  },
  {
    title: "Multi-Scale Robotics",
    desc:
      "Targets high-value surgical and interventional markets with precision robotics that improve efficiency, outcomes, and clinician productivity.",
    img: "https://agihf.org/wp-content/uploads/2026/01/robot.png",
    href: "https://agihf.org/departments/#robotics",
    bg: "bg-[#eef5ff]",
  },
  {
    title: "Nano-Therapeutics",
    desc:
      "Enables next-generation oncology and chronic-disease treatments through high-margin, targeted delivery platforms with strong IP potential.",
    img: "https://agihf.org/wp-content/uploads/2026/01/medicine-doctor-touching-electronic-medical-record-tablet-dna-digital-healthcare-network-connection-hologram-modern-virtual-icon-scaled.jpg",
    href: "https://agihf.org/departments/#nano",
    bg: "bg-[#dcd9ff]",
  },
  {
    title: "Integrated Medicine",
    desc:
      "Creates differentiated, preventive and chronic-care models by validating traditional systems within modern, scalable healthcare frameworks.",
    img: "https://agihf.org/wp-content/uploads/2026/01/team-industrial-scientists-engineers-developers-innovating-new-vaccine-doctor-pointing-tablet-explaining-virus-evolution-coworker-scaled.jpg",
    href: "https://agihf.org/departments/#integrated",
    bg: "bg-[#c8f2d5]",
  },
  {
    title: "Machine Learning & Big Data in ICU",
    desc:
      "Drives cost reduction and outcome improvement in critical care through predictive analytics and real-time decision support.",
    img: "https://agihf.org/wp-content/uploads/2026/01/healthcare-professional-intensive-care-unit-scaled.jpg",
    href: "https://agihf.org/departments/#machinelearning",
    bg: "bg-[#f3f0ff]",
  },
];

export default function LabResearchSection() {
  return (
    <section className="w-full px-[6%] py-20 mt-10 bg-[#faf6ee]">
        {/* ================= HEADING ================= */}
<div className="max-w-5xl mx-auto text-center mb-16">
  <h2 className="text-[24px] sm:text-[36px] font-extrabold tracking-wide text-[#0f2a6d] mb-4 ">
    Research & Innovation Possibilities at AAHII
  </h2>

  <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#2f2f2f]">
    Interdisciplinary translational R&amp;D centre for innovation in frontier
    areas of health sciences and cutting-edge health technologies.
  </p>
</div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {labs.map((lab, i) => (
          <div
            key={i}
            className={`
              ${lab.bg ?? "bg-white"}
              rounded-[22px]
              p-[22px]
              flex flex-col
              shadow-[0_14px_36px_rgba(15,42,109,0.08)]
              transition-all duration-300
              hover:-translate-y-[6px]
              hover:shadow-[0_22px_52px_rgba(15,42,109,0.14)]
            `}
          >
            {/* Image */}
            <div className="rounded-[16px] overflow-hidden mb-4">
              <Image
                src={lab.img}
                alt={lab.title}
                width={600}
                height={400}
                className="w-full h-[170px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-semibold text-[#0b2c63] mb-[10px] leading-[1.35]">
              {lab.title}
            </h3>

            {/* Description */}
            <p className="text-[14.5px] leading-[1.6] text-[#444] mb-[18px]">
              {lab.desc}
            </p>

            {/* Button */}
            <Link
              href={lab.href}
              className="mt-auto inline-block self-start
                px-[18px] py-[10px]
                rounded-[6px]
                bg-[#0b2c63] text-white
                text-[14px] font-semibold
                transition-all duration-300
                hover:bg-[#123a86] hover:-translate-y-[2px]"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
