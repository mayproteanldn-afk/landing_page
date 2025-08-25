// Assets
import brandLogo from "../../../assets/BrandLogoBrown.png";
import heroPoster from "../../../assets/hero-poster.jpg";
import bgImage from "../../../assets/bg.jpg";

// Video file is served from /public (place at frontend/public/videos/hero.mp4)
const videoSrc = "/videos/hero.mp4";

export default function BeautifulWelcomeSection() {
  return (
    <>
      {/* Fixed logo — top-left (now 50% bigger) */}
            <header className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <img
          src={brandLogo}
          alt="Protean LDN"
          className="h-14 w-14 md:h-20 md:w-20 rounded-full object-cover border-[1.5px] [border-color:#D4AF37]"
        />
      </header>

      <section
        className="w-screen min-h-dvh overflow-x-hidden font-sans bg-center bg-cover bg-no-repeat flex flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-1 mx-auto max-w-7xl px-6 pt-6 md:pt-8 pb-1">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center md:items-start gap-8 md:gap-12">

            {/* VIDEO: moved down the same amount as the text column */}
            <div className="order-2 md:order-1 mb-8 md:mb-0 mt-6 md:mt-10">
              <div className="w-full rounded-xl overflow-hidden bg-transparent">
                <video
                  className="
                    block w-full h-auto object-contain bg-transparent
                    md:max-h-[520px] lg:max-h-[680px] xl:max-h-[780px]
                  "
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

            {/* CONTENT: moved down to match the video */}
            <div className="order-1 md:order-2 text-center md:text-left mx-auto md:mx-0 mt-6 md:mt-10">
              {/* Launch line + Instagram */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <span className="block text-sm tracking-wider text-[#4B2C1A]">
                  LAUNCHING JANUARY 2026
                </span>
                <a
                  href="https://www.instagram.com/proteanldn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Protean LDN on Instagram"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 hover:bg-white transition shadow-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
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

              {/* BIG HEADLINE */}
              <div className="display-font leading-[0.9] mb-5">
                <h1 className="text-[#4B2C1A] font-black text-6xl md:text-7xl xl:text-8xl">
                  PROTEIN
                </h1>
                <h2 className="text-[#2F7A43] font-black text-6xl md:text-7xl xl:text-8xl">
                  BUBBLE TEA?
                </h2>
                <p className="italic text-[#4B2C1A] mt-2 text-2xl md:text-3xl">
                  Yes please.
                </p>
              </div>

              {/* Copy */}
              <div className="max-w-2xl mx-auto md:mx-0 text-[#4B2C1A]">
                <p className="text-lg md:text-[17px] xl:text-xl mb-3">
                  Your new favourite protein shake is about to taste like bubble tea.
                  Real tea, real benefits.
                </p>
                <p className="italic text-lg md:text-[17px] xl:text-xl mb-6">
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
                    Get me in
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
          ©{new Date().getFullYear()} Protean LDN. All rights reserved.
        </footer>
      </section>
    </>
  );
}
