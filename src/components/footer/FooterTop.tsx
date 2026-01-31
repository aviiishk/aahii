export default function FooterTop() {
  return (
    <section className="bg-[#243b6b] text-white">
      <div className="max-w-[1400px] mx-auto px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

            <p className="leading-8">
            </p>
            <p className="leading-8">
            </p>

            <p className="mt-4 leading-8">
              Corporate Office: 5th Floor, Room No. 505~508 Research Park, IIT Guwahati, Amingaon, Guwahati-781039<br /> 
                Assam, India
            </p>

            <p className="mt-4 leading-8">
            </p>
            <p className="leading-8">
              Email:info@agihf.org 
            </p>
          </div>

          {/* IMPORTANT LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Important Links</h3>
            <ul className="space-y-3">
              {[
                "News",
                "Research",
                "FAQs",
                "Vision & Mission",
                "Contact Us",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span>»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Departments",
                "Our Team",
                "Sitemap",
                "Vacancies",
                "Gallery",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span>»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MAP */}
          <div className="w-full h-[230px] border border-white/20">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps?q=5MMP+FV7, Amingaon, Guwahati, Assam 781039, India=&output=embed"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
