// Assets
import brandLogo from "../../../assets/BrandLogoBrown.png";
import heroPoster from "../../../assets/hero-poster.jpg";      // remove if unused
import bgImage from "../../../assets/bg.jpg";                  // remove if unused

// Video file is served from /public
const videoSrc = "/videos/hero.mp4";

export default function BeautifulWelcomeSection() {
  return (
    <section
      className="min-h-screen w-full font-sans bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Main content grows, footer stays low */}
      <div className="flex-1 mx-auto max-w-7xl px-6 py-10 md:py-16">
        {/* CHANGED: items-start (not items-center) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12">
          {/* VIDEO: bottom on mobile, left on desktop — NEVER CROPPED */}
          {/* CHANGED: add md:mt-[168px] to drop the video top down to the "LAUNCHING..." line */}
          <div className="order-2 md:order-1 mb-8 md:mb-0 md:mt-[168px]">
            <div className="w-full rounded-xl overflow-hidden bg-transparent">
              <video
                className="block w-full h-auto md:max-h-[520px] object-contain bg-transparent"
                style={{ backgroundColor: "transparent" }}
                src={videoSrc}
                poster={heroPoster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Pouring bubble-tea protein shake"
              />
            </div>
          </div>

          {/* CONTENT: top on mobile, right on desktop */}
          <div className="order-1 md:order-2 text-center md:text-left mx-auto md:mx-0">
            {/* Logo (thin gold border) */}
            <div className="flex justify-center md:justify-start mb-6">
              <img
                src={brandLogo}
                alt="Protean LDN logo"
                className="h-36 w-36 rounded-full object-cover border-[1.5px] [border-color:#D4AF37]"
              />
            </div>

            {/* Launch line */}
            <span className="block text-sm tracking-wider mb-5 text-[#4B2C1A]">
              LAUNCHING JANUARY 2026
            </span>

            {/* BIG HEADLINE */}
            <div className="display-font leading-[0.9] mb-6">
              <h1 className="text-[#4B2C1A] font-black text-6xl md:text-8xl">
                PROTEIN
              </h1>
              <h2 className="text-[#2F7A43] font-black text-6xl md:text-8xl">
                BUBBLE TEA
              </h2>
            </div>

            {/* Copy block */}
            <div className="max-w-2xl mx-auto md:mx-0 text-[#4B2C1A]">
              <p className="text-lg md:text-xl mb-3">
                Your new favourite protein shake is about to taste like bubble tea.
                Real tea, real benefits.
              </p>
              <p className="italic text-lg md:text-xl mb-8">
                Sign up to our waitlist now for priority access and secret discount codes.
              </p>

              {/* Email form */}
              <div className="flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-full px-6 py-4 rounded-full border border-transparent
                             focus:outline-none focus:ring-2 focus:ring-gray-300
                             [background-color:#013220] [color:#FFFCF3] [placeholder-color:#FFFCF3]"
                />
                <button
                  type="button"
                  className="px-6 py-4 rounded-full border-2 [border-color:#4B2C1A]
                             [background-color:#FFFCF3] [color:#4B2C1A] font-semibold
                             hover:[background-color:#e9e2d1] transition-colors"
                >
                  Get me in now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social: centred Instagram icon */}
        <div className="mt-16 md:mt-20 flex justify-center">
          <a
            href="https://www.instagram.com/proteanldn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Protean LDN on Instagram"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/70 hover:bg-white transition shadow-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4B2C1A"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <circle cx="17.5" cy="6.5" r="1.25" fill="#4B2C1A" stroke="none" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer pinned near the bottom by the flex layout */}
      <footer className="pb-8 text-center text-xs text-[#4B2C1A]">
        ©{new Date().getFullYear()} Protean LDN. All rights reserved.
      </footer>
    </section>
  );
}
