import Image from "next/image";
import { Twitter, Linkedin, Instagram } from "lucide-react";
export default function ContactPage() {
  return (
    <section className="bg-[#fffaf3]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* ================= HERO ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold  text-gray-900 mb-4">
            Contact us
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Get in touch and ask us anything. We are here to help and answer any
            question you might have. We look forward to hearing from you 🙂
          </p>
        </div>

        {/* ================= FORM + ILLUSTRATIONS ================= */}
        <div className="relative grid lg:grid-cols-3 gap-12 items-center">
          {/* Left Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <Image
              src="/contact/contact.png"
              alt="Contact Illustration"
              width={400}
              height={400}
              className="max-w-[280px] h-auto object-contain"
              sizes="(min-width: 1024px) 280px, 0px"
            />
          </div>

          {/* Form */}
          <div className="lg:col-span-1 bg-transparent">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border px-4 py-2 text-sm bg-transparent"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border px-4 py-2 text-sm bg-transparent"
                />
              </div>

              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full rounded-md border px-4 py-2 text-sm bg-transparent"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-full py-3 text-sm font-medium hover:bg-blue-700 transition"
              >
                Send your message
              </button>

              <p className="text-[11px] text-center text-gray-500">
                By clicking, you agree to our{" "}
                <span className="underline">Terms & Conditions</span>,{" "}
                <span className="underline">Privacy</span> and{" "}
                <span className="underline">Data Protection Policy</span>.
              </p>
            </form>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/contact/contact1.png"
              alt="Contact Illustration 2"
              width={400}
              height={400}
              className="max-w-[280px] h-auto object-contain"
              sizes="(min-width: 1024px) 280px, 0px"
            />
          </div>
        </div>

        {/* ================= LOCATION ================= */}
        <div className="mt-32">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Get in touch with AAHII
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden border h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.338962343904!2d91.7018375!3d26.1962642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5b002291b0b5%3A0xb26dbfa8dfebafeb!2sAssam%20Advanced%20Healthcare%20Innovation%20Institute%20(AAHII)%20Under%20AGIHF!5e0!3m2!1sen!2sin!4v1707050000000"
                className="w-full h-full rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address Card */}
            <div className="bg-[#f3ede4] rounded-2xl p-8 space-y-6 shadow-sm">
              {/* Address */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Corporate Office
                </p>
                <p className="text-sm text-gray-800 leading-relaxed">
                  5th Floor, Room No. 505–508 <br />
                  Research Park, IIT Guwahati <br />
                  Amingaon, Guwahati – 781039
                </p>
              </div>

              {/* Working Hours */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Working Hours
                </p>
                <p className="text-sm text-gray-800">
                  Mon to Fri: 9:30am – 5:30pm
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Email Address
                </p>
                <a
                  href="mailto:info@agihf.org"
                  className="text-sm text-blue-600 hover:underline transition"
                >
                  info@agihf.org
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-300">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                  Connect with us
                </p>

                <div className="flex gap-4">
                  {/* X / Twitter */}
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white text-gray-600
                 hover:bg-black hover:text-white
                 transition-all duration-300 shadow-sm"
                  >
                    <Twitter size={18} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white text-gray-600
                 hover:bg-blue-700 hover:text-white
                 transition-all duration-300 shadow-sm"
                  >
                    <Linkedin size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-white text-gray-600
                 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 hover:text-white
                 transition-all duration-300 shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
