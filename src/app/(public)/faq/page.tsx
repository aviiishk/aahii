"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book an initial consultation?",
    answer:
      "You can book an appointment through our online portal or by contacting our support team directly.",
  },
  {
    question: "When Will AAHII Start Recruitment Of Scientists?",
    answer:
      "Official recruitment for phase 2 research scientists is scheduled to begin in Q4 2024. Please keep your profile updated in our portal for automatic notifications.",
  },
  {
    question: "What insurance providers are currently accepted?",
    answer:
      "We accept all major national and international insurance providers. Please contact support for detailed verification.",
  },
  {
    question: "Are telehealth appointments available for new patients?",
    answer:
      "Yes, telehealth appointments are available for both new and existing patients.",
  },
  {
    question: "What are the standard clinic operating hours?",
    answer:
      "Our clinics operate from Monday to Saturday, 9 AM to 6 PM.",
  },
  {
    question: "What are the standard clinic operating hours?",
    answer:
      "Our clinics operate from Monday to Saturday, 9 AM to 6 PM.",
  },
  {
    question: "What are the standard clinic operating hours?",
    answer:
      "Our clinics operate from Monday to Saturday, 9 AM to 6 PM.",
  },
  {
    question: "What are the standard clinic operating hours?",
    answer:
      "Our clinics operate from Monday to Saturday, 9 AM to 6 PM.",
  },
];

export default function FAQPage() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Expert Guidance <br />
            <span className="text-blue-600">At Your Service.</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-md">
            Our team of world-class medical professionals is here to provide
            clarity and support for all your healthcare journey needs.
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">
            <Image
              src="/images/faq.png"
              alt="Doctor"
              width={500}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <p className="text-sm text-blue-600 font-semibold mb-2">
            RESOURCE CENTER
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mb-8">
            Quick answers to common inquiries about our recruitment,
            patient care, and clinical operations.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white shadow-sm"
                  }`}
                >
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-medium">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm opacity-90">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* SUPPORT BOX */}
          <div className="mt-10 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                Still have questions?
              </h3>
              <p className="text-sm opacity-80">
                Our support team is ready to help you find what you need.
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-400 transition px-5 py-2 rounded-lg font-medium">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}