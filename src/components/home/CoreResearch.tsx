import Image from "next/image";

const researchAreas = [
  {
    title: "Stem Cell",
    desc: "Regenerative medicine & organ-on-chip research",
    img: "/avatars/stem.png",
    accent: "bg-pink-500",
    bg: "bg-pink-50",
  },
  {
    title: "Digital Health",
    desc: "Data-driven healthcare innovations",
    img: "/avatars/digitalhealth.png",
    accent: "bg-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Therapeutics",
    desc: "Drug design, delivery & informatics",
    img: "/avatars/thera.png",
    accent: "bg-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Precision Medicine",
    desc: "Personalized treatment approaches",
    img: "/avatars/medicine2.png",
    accent: "bg-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Robotics",
    desc: "Automation & intelligent systems",
    img: "/avatars/robotics.png",
    accent: "bg-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    title: "Affordable Diagnostics",
    desc: "Accessible & cost-effective diagnostics",
    img: "/avatars/diagnostics.png",
    accent: "bg-teal-600",
    bg: "bg-teal-50",
  },
];

export default function CoreResearch() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0f2a6d] mb-14">
        Our Core Research & Innovation Areas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {researchAreas.map((item) => (
          <div
            key={item.title}
            className={`
              relative rounded-2xl ${item.bg}
              pt-[60px] px-6 pb-8
              min-h-[180px]
              shadow-[0_10px_26px_rgba(15,42,109,0.08)]
              hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,42,109,0.18)]
              transition-all duration-300
            `}
          >
            {/* Accent strip */}
            <span
              className={`absolute left-0 top-6 bottom-6 w-1 rounded ${item.accent}`}
            />

            {/* Avatar */}
            <div
              className="
                absolute -top-7 left-6
                w-14 h-14
                bg-white rounded-full
                shadow-[0_6px_16px_rgba(15,42,109,0.18)]
                flex items-center justify-center overflow-hidden
              "
            >
              <Image
                src={item.img}
                alt={item.title}
                width={56}
                height={56}
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-[15px] font-semibold text-[#0f2a6d]">
                {item.title}
              </p>
              <p className="mt-2 text-[15px] leading-snug text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
