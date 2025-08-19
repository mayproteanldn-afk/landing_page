import brandLogo from "../../../assets/BrandLogoBrown.png"
import backgroundImage from "../../../assets/testerhero.png"

const BeautifulWelcomeSection = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-center items-center px-6 py-16 font-sans"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {/* Overlay for soft white effecdddddt */}
      <div className="absolute inset-0 [background-color:#FFFCF3]/15 backdrop-blur-sm"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Logo/Branding */}
        <div className="flex flex-col items-center mb-8">
          <img
            className="h-48 w-48 rounded-full object-cover mb-4 border border-gray-200"
            src={brandLogo}
            alt="Brand logo"
          />
          <span className="text-sm tracking-wider [color:#4B2C1A]">
            LAUNCHING JANUARY 2026
          </span>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light [color:#4B2C1A] mb-4 leading-tight">
            Get Early Access
          </h1>
          <p className="[color:#4B2C1A] max-w-xl mx-auto mb-8 text-lg">
            Get priority access and secret discount codes... Join the waitlist now!
          </p>

          {/* Email Input */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent [color:#FFFCF3] [placeholder-color:#FFFCF3] [background-color:#013220]"
              />
              <button
                className="absolute right-2 top-2 [background-color:#FFFCF3] hover:[background-color:#e9e2d1] [color:#4B2C1A] px-6 py-2 rounded-full transition-colors"
              >
                Get me in
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-xs [color:#4B2C1A]">
          ©{new Date().getFullYear()} Protean LDN. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default BeautifulWelcomeSection;
