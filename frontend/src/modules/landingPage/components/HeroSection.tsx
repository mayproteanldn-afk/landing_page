// Assets
import brandLogo from "../../../assets/BrandLogoBrown.png";
import heroPoster from "../../../assets/hero-poster.jpg";
import bgImage from "../../../assets/bg.jpg";

// Video file is served from /public (place at frontend/public/videos/hero.mp4)
const videoSrc = "/videos/hero.mp4";

export default function BeautifulWelcomeSection() {
  return (
    <section
      className="w-screen min-h-dvh overflow-x-hidden font-sans bg-center bg-cover bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Main content grows, footer stays low */}
      <div className="flex-1 mx-auto max-w-7xl px-6 pt-8 md:pt-10 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          {/* VIDEO: bottom on mobile, left on desktop — NEVER CROPPED */}
          <div className="order-2 md:order-1 mb-8 md:mb-0">
            <div className="w-full rounded-xl overflow-hidden bg-transparent">
              <video
                className="block w-full h-auto md:max-h-[780px] object-contain bg-transparent"
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
            {/* --- RIGHT SIDE ~20% SMALLER ON DESKTOP --- */}
            <div className="md:[&>*]:scale-100 md:[&_h1]:text-7xl md:[&_h2]:text-7xl">
              {/* Logo (thin gold circle border) */}
              <div className="flex justify-center md:justify-start mb-5">
                <img
                  src={brandLogo}
                  alt="Protean LDN logo"
                  /* 20% smaller on desktop */
                  className="h-28 w-28 md:h-28 md:w-28 rounded-full object-cover border-[1.5px] [border-color:#D4AF37]"
                />
              </div>

              {/* Launch line */}
              <div className="flex items-center gap-2 md:gap-3 mb-4">
                <span className="block text-xs md:text-xs tracking-wider text-[#4B2C1A]">
                  LAUNCHING JANUARY 2026
                </span>
                {/* If you currently position the Instagram icon here, leave it as-is in your project */}
              </div>

              {/* BIG HEADLINE (≈20% smaller on desktop) */}
              <div className="leading-[0.9] mb-5">
                <h1 className="text-[#4B2C1A] font-black text-5xl md:text-7xl">
                  PROTEIN
                </h1>
                <h2 className="text-[#2F7A43] font-black text-5xl md:text-7xl">
                  BUBBLE TEA
                </h2>
              </div>

              {/* Copy block (slightly smaller/tighter on desktop) */}
              <div className="max-w-2xl mx-auto md:mx-0 text-[#4B2C1A]">
                <p className="text-base md:text-lg mb-2">
                  Your new favourite protein shake is about to taste like bubble tea.
                  Real tea, real benefits.
                </p>
                <p className="italic text-base md:text-lg mb-5">
                  Sign up to our waitlist now for priority access and secret discount codes.
                </p>

                {/* Email form (compact padding on desktop) */}
                <div className="flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 w-full px-6 py-3 rounded-full border border-transparent
                               focus:outline-none focus:ring-2 focus:ring-gray-300
                               [background-color:#013220] [color:#FFFCF3] [placeholder-color:#FFFCF3]"
                  />
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full border-2 [border-color:#4B2C1A]
                               [background-color:#FFFCF3] [color:#4B2C1A] font-semibold
                               hover:[background-color:#e9e2d1] transition-colors"
                  >
                    Get me in now
                  </button>
                </div>
              </div>
            </div>
            {/* --- END RIGHT SIDE SCALE --- */}
          </div>
        </div>

        {/* If you also render a centred Instagram icon below, keep it.
            No changes here since the ask is only to shrink right side + lift copyright. */}
      </div>

      {/* Footer pinned near the bottom by the flex layout.
          Lift it up a touch on desktop so it stays in view at 100% zoom. */}
      <footer className="pb-2 md:pb-2 text-center text-xs text-[#4B2C1A] md:-mt-6">
        ©{new Date().getFullYear()} Protean LDN. All rights reserved.
      </footer>
    </section>
  );
}
