export default function Footer() {
  return (
    <footer className="bg-[#243b6b] text-white text-sm">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="leading-7">
              <strong>Name:</strong> Dr. Manjeet Singh Chalga<br />
              <strong>Designation:</strong> Scientist E (Informatics & Data Centre), ICMR
            </p>
            <p className="mt-3 leading-7">
              V. Ramalingaswami Bhawan, <br />
              P.O. Box No. 4911, Ansari Nagar <br />
              New Delhi – 110029, India
            </p>
            <p className="mt-3">
              <strong>Phone:</strong> 91-11-26588895 / 91-11-26588980
            </p>
            <p>
              <strong>Fax:</strong> 91-11-26588662
            </p>
            <p>
              <strong>Email:</strong> icmrhqds[at]sansad[dot]nic[dot]in
            </p>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Links</h4>
            <ul className="space-y-2">
              {[
                "Help",
                "Feedback",
                "Patent Mitra",
                "Vision, Mission, Mandate",
                "What We Do",
                "Press Releases",
                "Employment Opportunities",
                "Contact Directory",
              ].map((item) => (
                <li key={item} className="hover:underline cursor-pointer">
                  » {item}
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Vigilance",
                "RTI",
                "Sitemap",
                "Screen Reader",
                "Web Information Manager",
                "How to download pdf (Pdf File 300Kb)",
              ].map((item) => (
                <li key={item} className="hover:underline cursor-pointer">
                  » {item}
                </li>
              ))}
            </ul>
          </div>

          {/* MAP */}
          <div className="w-full h-[220px] rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src="https://www.google.com/maps?q=ICMR%20New%20Delhi&output=embed"
            />
          </div>

        </div>
      </div>

      {/* LOGO STRIP */}
      <div className="bg-[#1d2f57] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-6">
          {[
            "/logos/cpgrams.png",
            "/logos/dhr.png",
            "/logos/india-gov.png",
            "/logos/pm-india.png",
            "/logos/impact.png",
          ].map((logo) => (
            <div
              key={logo}
              className="bg-white rounded-lg px-5 py-3 flex items-center"
            >
              <img src={logo} alt="" className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1a2a4d] text-xs">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-3 text-center md:text-left">
          <p>Term & Conditions | Privacy Policy | Website Policies</p>
          <p>Page Update on: <strong>27/01/2026</strong></p>
          <p>Visitors: <strong>26137765</strong></p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#162444] text-center text-xs py-3">
        Copyright © 2023 | All Rights Reserved by ICMR
      </div>
    </footer>
  );
}
