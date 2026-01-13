import { useState } from "react";

// Assets
import brandLogo from "../../../assets/BrandLogoBrown.png";
import heroPoster from "../../../assets/hero-poster.jpg";
import bgImage from "../../../assets/bg.jpg";

// Video file is served from /public
const videoSrc = "/videos/hero.mp4";

// API base (env-first, fallback to DO URL)
const API_BASE =
  import.meta.env.VITE_API_BASE ??
  "https://monkfish-app-9g9ua.ondigitalocean.app";

export default function BeautifulWelcomeSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("error");
      setMessage("Please enter your email");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
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
      {/* Fixed logo */}
      <header className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
        <img
          src={brandLogo}
          alt="Protean LDN"
          className="h-14 w-14 md:h-20 md:w-20 rounded-full object-cover border-[1.5px] [border-color:#D4AF37]"
        />
      </header>

      <section
        className="w-screen min-h-dvh overflow-x-hidden font-sans bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex-1 mx-auto max-w-7xl px-6 pt-6 md:pt-8 pb-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Video */}
            <div className="order-2 md:order-1 mt-10">
              <video
                className="w-full max-h-[680px] object-contain"
                src={videoSrc}
                poster={heroPoster}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 mt-10 text-center md:text-left">
              <div className="display-font leading-[0.9] mb-6">
                <h1 className="text-[#4B2C1A] text-7xl font-black">PROTEIN</h1>
                <h2 className="text-[#2F7A43] text-7xl font-black">
                  BUBBLE&nbsp;TEA?
                </h2>
                <p className="italic text-[#4B2C1A] mt-2 text-2xl">
                  Yes please.
                </p>
              </div>

              <p className="mb-6 text-lg text-[#4B2C1A]">
                Sign up to our waitlist for priority access and secret discounts.
              </p>

              {/* Form */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full bg-[#FFFCF3] text-[#4B2C1A]"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full bg-[#013220] text-white"
                />

                <button
                  onClick={handleSubscribe}
                  disabled={status === "loading"}
                  className="px-6 py-4 rounded-full border-2 border-[#4B2C1A]
                             bg-[#FFFCF3] text-[#4B2C1A] font-semibold
                             hover:bg-[#e9e2d1] disabled:opacity-60"
                >
                  {status === "loading" ? "Adding..." : "Get me in"}
                </button>
              </div>

              {message && (
                <p className="mt-3 text-sm text-[#4B2C1A]">{message}</p>
              )}
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
