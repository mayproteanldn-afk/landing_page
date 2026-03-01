// frontend/src/modules/landingPage/components/HeroSection.tsx

import { useState } from "react";

// Assets
import brandLogo from "../../../assets/BrandLogoBrown.png";
import heroPoster from "../../../assets/hero-poster.jpg";
import bgImage from "../../../assets/bg.jpg";

// Video file is served from /public
const videoSrc = "/videos/hero.mp4";

const API_BASE = "https://monkfish-app-9g9ua.ondigitalocean.app";

export default function BeautifulWelcomeSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          attributes: { SIGNUP_SOURCE: "homepage" },
          signupSource: "homepage",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("You’re on the list ✅");
      setFirstName("");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message || "Couldn’t sign you up — try again.");
    }
  };

  return (
    <>
      {/* Fixed logo — top-left */}
      <header className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <img
          src={brandLogo}
          alt="Protean LDN"
          className="h-14 w-14 md:h-20 md:w-20 rounded-full object-cover border-[1.5px]"
          style={{ borderColor: "#D4AF37" }}
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
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* VIDEO */}
            <div className="order-2 md:order-1 mt-6 md:mt-10">
              <div className="w-full rounded-xl overflow-hidden">
                <video
                  className="block w-full h-auto object-contain"
                  src={videoSrc}
                  poster={heroPoster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="order-1 md:order-2 text-center md:text-left mt-6 md:mt-10">
              {/* Launch line */}
              <p className="text-sm tracking-wider text-[#4B2C1A] mb-4">
                LAUNCHING MAY 2026
              </p>

              {/* HEADLINE */}
              <div className="display-font leading-[0.9] mb-5">
                <h1 className="text-[#4B2C1A] font-black text-6xl md:text-7xl xl:text-8xl">
                  PROTEIN
                </h1>
                <h2 className="text-[#2F7A43] font-black text-6xl md:text-7xl xl:text-8xl">
                  BUBBLE TEA?
                </h2>

                {/* YES PLEASE + INSTAGRAM INLINE */}
                <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
                  <p className="italic text-[#4B2C1A] text-2xl md:text-3xl">
                    Yes please.
                  </p>

                  <a
                    href="https://www.instagram.com/proteanldn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Protean LDN on Instagram"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/80 hover:bg-white transition shadow-sm"
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
                      <circle cx="17.5" cy="6.5" r="1.25" fill="#4B2C1A" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* COPY */}
              <div className="max-w-2xl mx-auto md:mx-0 text-[#4B2C1A]">
                <p className="text-lg md:text-xl mb-3">
                  Your new favourite protein shake is about to taste like bubble
                  tea. Real tea, real benefits.
                </p>
                <p className="italic text-lg md:text-xl mb-6">
                  Sign up to our waitlist now for priority access and secret
                  discount codes.
                </p>

                {/* FORM */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="flex-1 px-6 py-3 rounded-full bg-[#FFFCF3] text-[#4B2C1A]"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-3 rounded-full bg-[#013220] text-[#FFFCF3]"
                  />

                  <button
                    onClick={handleSubscribe}
                    disabled={status === "loading"}
                    className="px-6 py-3 whitespace-nowrap rounded-full border-2 border-[#4B2C1A] bg-[#FFFCF3] text-[#4B2C1A] font-semibold"
                  >
                    {status === "loading" ? "Adding..." : "Get me in"}
                  </button>
                </div>

                {message && (
                  <p className="mt-3 text-sm opacity-80">{message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
          ©{new Date().getFullYear()} Protean LDN. All rights reserved.
        </footer>
      </section>
    </>
  );
}
