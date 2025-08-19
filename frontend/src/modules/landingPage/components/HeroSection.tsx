import brandLogo from "../../../assets/BrandLogoBrown.png";
import heroGraphic from "../../../assets/testerhero.png";

const BeautifulWelcomeSection = () => {
  return (
    <section className="[background-color:#FFFCF3] w-full font-sans">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

          {/* LEFT: Hero Image */}
          <div className="order-2 md:order-1">
            <img
              src={heroGraphic}
              alt="Hero"
              className="w-full h-[260px] md:h-[520px] object-cover rounded-xl"
              style={{ objectPosition: "center" }}
            />
          </div>

          {/* RIGHT: Logo + text + inline email */}
          <div className="order-1 md:order-2 text-center md:text-left">
            {/* Brand Logo */}
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src={brandLogo}
                alt="Brand logo"
                className="h-36 w-36 rounded-full object-cover border border-white-200"
              />
            </div>

            {/* Launch text */}
            <span className="block text-sm tracking-wider mb-4 [color:#4B2C1A]">
              LAUNCHING JANUARY 2026
            </span>

            {/* Main Heading */}
            <h1 className="leading-[0.95] [color:#4B2C1A] text-5xl md:text-7xl font-extrabold mb-6">
              Get Secret Access
            </h1>

            {/* Subheading */}
            <p className="[color:#4B2C1A] text-lg md:text-xl max-w-xl md:max-w-none mx-auto md:mx-0 mb-8">
              Priority access and exclusive discount codes... Join the waitlist now!
            </p>

            {/* Email input with inline button */}
            <div className="max-w-md md:max-w-lg flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300
                           [background-color:#013220] [color:#FFFCF3] [placeholder-color:#FFFCF3]"
              />
              <button
                className="px-6 py-4 rounded-full border-2 [border-color:#4B2C1A] [background-color:#FFFCF3] [color:#4B2C1A] font-semibold hover:[background-color:#e9e2d1] transition-colors"
              >
                Get me in now
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs [color:#4B2C1A]">
          ©{new Date().getFullYear()} Protean LDN. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default BeautifulWelcomeSection;
