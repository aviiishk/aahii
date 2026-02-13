"use client";
import { motion, Variants } from "framer-motion";

export default function TimelineBento() {
  // 🔥 COMMON CARD CLASS (Approach 1)
  const cardBase =
    "rounded-2xl p-6 shadow-[0_10px_26px_rgba(15,42,109,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_52px_rgba(15,42,109,0.18)] active:scale-[0.98]";
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // smooth premium easing
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
    >
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0f2a6d] mb-4">
          Our Timeline
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#2f2f2f] max-w-2xl mx-auto">
          Our experts and specialists of particular branches performing
          research, diagnosis, ready to serve you at our best.
        </p>
      </motion.div>

      {/* ===== Bento Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 2022–23 */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          className={`${cardBase} bg-pink-100`}
        >
          <span className="block w-8 h-2 bg-white/70 rounded-full mb-4"></span>
          <h3 className="text-lg font-semibold text-[#0f2a6d] mb-2">2022–23</h3>
          <p className="text-[15px] text-[#2f2f2f]">• DPR completed</p>
        </motion.div>

        {/* 2023–24 */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          className={`${cardBase} bg-orange-100`}
        >
          <span className="block w-8 h-2 bg-white/70 rounded-full mb-4"></span>
          <h3 className="text-lg font-semibold text-[#0f2a6d] mb-2">2023–24</h3>
          <p className="text-[15px] text-[#2f2f2f]">
            • Concept, Planning & Design
          </p>
          <p className="text-[15px] text-[#2f2f2f] mt-1">
            • Onboarding of key personnel and architect/PMC
          </p>
        </motion.div>

        {/* 2024–25 */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          className={`${cardBase} bg-amber-200`}
        >
          <span className="block w-8 h-2 bg-white/70 rounded-full mb-4"></span>
          <h3 className="text-lg font-semibold text-[#0f2a6d] mb-2">2024–25</h3>
          <p className="text-[15px] text-[#2f2f2f]">• Drawing Finalization</p>
          <p className="text-[15px] text-[#2f2f2f] mt-1">• Tenders Floated</p>
        </motion.div>

        {/* 2025–26 (span-2) */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          className={`${cardBase} bg-green-200 `}
        >
          <span className="block w-8 h-2 bg-white/70 rounded-full mb-4"></span>
          <h3 className="text-lg font-semibold text-[#0f2a6d] mb-2">2025–26</h3>
          <p className="text-[15px] text-[#2f2f2f]">• Contractor Finalized</p>
          <p className="text-[15px] text-[#2f2f2f] mt-1">
            • Construction commenced
          </p>
        </motion.div>

        {/* 2026–27 */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          className={`${cardBase} bg-blue-200 md:col-span-2`}
        >
          <span className="block w-8 h-2 bg-white/70 rounded-full mb-4"></span>
          <h3 className="text-lg font-semibold text-[#0f2a6d] mb-2">2026–27</h3>
          <p className="text-[15px] text-[#2f2f2f]">
            • Installation of equipments and procurement of services
          </p>
          <p className="text-[15px] text-[#2f2f2f] mt-2">
            • Initiation of academic programs
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
