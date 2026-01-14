import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import BeautifulWelcomeSection from "./modules/landingPage/components/HeroSection";
import About from "./About";
import OurProducts from "./OurProducts";

// same background as Home
import bgImage from "./assets/bg.jpg";
// your logo for the subpages (top-left)
import brandLogo from "./assets/BrandLogoBrown.png";

import testerHero from "./assets/testerhero.png";

/* -------------------- feature flags -------------------- */
/* Flip these to true later when you want the pages live */
const SHOW_FAQS = false;
const SHOW_PREORDER = false;

/* -------------------- QR surprise password -------------------- */
const QR_PASSWORD = "ilyproteinboba";

/* -------------------- maintenance mode -------------------- */
/** Toggle via DigitalOcean App Platform → Environment Variables → VITE_MAINTENANCE */
const MAINTENANCE =
  String((import.meta as any).env?.VITE_MAINTENANCE ?? "")
    .trim()
    .toLowerCase() === "true";

/* -------------------- Top-right navbar -------------------- */
function Navbar() {
  const base = "text-[#A06C4D] tracking-wide transition-colors text-lg md:text-xl";
  const active = "font-semibold";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${base} ${isActive ? active : ""}`;

  return (
    <nav className="fixed top-6 inset-x-0 z-50">
      <ul className="mx-auto w-fit flex space-x-8 md:space-x-14">
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>

        {SHOW_FAQS && (
          <li>
            <NavLink to="/faqs" className={linkClass}>
              FAQs
            </NavLink>
          </li>
        )}

        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/our-products" className={linkClass}>
            Our Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/secret" className={linkClass}>
            Secret Access
          </NavLink>
        </li>

        {SHOW_PREORDER && (
          <li>
            <NavLink to="/pre-order" className={linkClass}>
              Pre-Order
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

/* -------------------- Shared shell for subpages -------------------- */
/** Exported so other pages can reuse the exact same layout (bg + logo + footer). */
export function PageShell({ children }: { children: React.ReactNode }) {
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
      {/* Top-left logo (subpages only) */}
      <a
        href="/"
        aria-label="Protean LDN — Home"
        className="fixed top-6 left-6 z-50 inline-flex items-center"
      >
        <img
          src={brandLogo}
          alt="Protean LDN logo"
          className="h-14 w-14 md:h-20 md:w-20 rounded-full object-cover border-[1.5px]"
          style={{ borderColor: "#D4AF37" }}
        />
      </a>

      {/* Keep the same top padding, center horizontally */}
      <div className="flex-1 mx-auto max-w-7xl px-6 pt-4 md:pt-6 pb-1">
        <div className="mx-auto text-center">{children}</div>
      </div>

      {/* Footer exactly like on Home */}
      <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
        ©{new Date().getFullYear()} Protean LDN. All rights reserved.
      </footer>
    </section>
  );
}

/* -------------------- Subpages -------------------- */
function FAQs() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto text-[#4B2C1A]">
        <h1 className="display-font !font-normal text-4xl md:text-5xl font-extrabold mb-6">
          FAQs
        </h1>
        <p className="text-lg md:text-xl opacity-80">
          Add your common questions and answers here.
        </p>
      </div>
    </PageShell>
  );
}

function PreOrder() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto text-[#4B2C1A]">
        <h1 className="display-font !font-normal text-4xl md:text-5xl font-extrabold mb-6">
          Pre-Order
        </h1>
        <p className="text-lg md:text-xl opacity-80">
          Put your pre-order form or “coming soon” content here.
        </p>
      </div>
    </PageShell>
  );
}

/* -------------------- Secret Access page -------------------- */
function SecretAccess() {
  const [step, setStep] = React.useState<"locked" | "form" | "done">(() =>
    localStorage.getItem("secretUnlocked") === "1" ? "form" : "locked"
  );

  const [pw, setPw] = React.useState("");
  const [pwError, setPwError] = React.useState("");

  const location = useLocation() as { state?: { prefillPw?: string } };

  React.useEffect(() => {
    const incoming = location?.state?.prefillPw;
    if (incoming) setPw(incoming);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SECRET = (import.meta as any).env?.VITE_SECRET_ACCESS_PW || "ilyproteinboba";

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    if (pw.trim() === SECRET) {
      localStorage.setItem("secretUnlocked", "1");
      setPwError("");
      setStep("form");
    } else {
      setPwError("Wrong password. Try again.");
    }
  }

  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [formError, setFormError] = React.useState("");

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim()) return setFormError("Please enter your first name.");
    const emailOk = /^\S+@\S+\.\S+$/.test(email);
    if (!emailOk) return setFormError("Please enter a valid email address.");
    setFormError("");
    setStep("done");
  }

  return (
    <PageShell>
      {/* LOCKED */}
      {step === "locked" && (
        <div className="relative">
          <div
            className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="w-full max-w-4xl mx-auto px-4">
              <div
                className="rounded-3xl border border-white/40 bg-white/30 shadow-2xl p-10 md:p-14"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(18px) saturate(120%)",
                }}
              >
                <h2 className="display-font !font-normal text-4xl md:text-5xl font-extrabold text-[#2F7A43] opacity-80">
                  Welcome to the land of gains and flavour
                </h2>
                <p className="mt-4 text-[#4B2C1A] text-lg opacity-80">
                  (Preview hidden until you enter the password)
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-md text-left text-[#4B2C1A] mt-24 md:mt-28">
            <h1 className="display-font !font-normal text-4xl md:text-5xl font-extrabold mb-4 text-center">
              Secret Access
            </h1>

            <p className="text-center opacity-80 mb-6">
              Enter the password to unlock exclusive content.
            </p>

            <form
              onSubmit={handleUnlock}
              className="rounded-2xl bg-white/85 backdrop-blur-md border border-[#D2D2D2] p-6 shadow-lg"
            >
              <label className="block text-sm mb-2" htmlFor="secretPw">
                Password
              </label>
              <input
                id="secretPw"
                type="password"
                inputMode="text"
                autoComplete="current-password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D2D2D2] focus:outline-none focus:ring-2 focus:ring-[#5e8c31]"
                placeholder="••••••••"
                aria-invalid={!!pwError}
                aria-describedby={pwError ? "pw-error" : undefined}
              />
              {pwError && (
                <p id="pw-error" className="mt-2 text-sm text-red-700">
                  {pwError}
                </p>
              )}

              <button
                type="submit"
                className="mt-4 w-full rounded-xl px-4 py-3 font-semibold text-[#8C6E1E] shadow-sm border border-[#C9A227] hover:bg-[#C9A227] transition-colors"
                style={{ background: "#D4AF37" }}
              >
                Unlock
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FORM */}
      {step === "form" && (
        <div className="mx-auto max-w-2xl text-[#4B2C1A] mt-16 md:mt-20">
          <h1 className="display-font !font-normal text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to the land of gains and flavour
          </h1>
          <p className="mt-4 text-lg opacity-90">Pop in your details to confirm access.</p>

          <form
            onSubmit={handleFormSubmit}
            className="mt-6 rounded-2xl bg-white/90 backdrop-blur border border-[#D2D2D2] p-6 md:p-7 shadow-lg text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2" htmlFor="firstName">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#D2D2D2] focus:outline-none focus:ring-2 focus:ring-[#5e8c31]"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#D2D2D2] focus:outline-none focus:ring-2 focus:ring-[#5e8c31]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {formError && <p className="mt-3 text-sm text-red-700">{formError}</p>}

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button
                type="submit"
                className="rounded-xl px-5 py-3 font-semibold text-white"
                style={{ background: "#e8b80eff" }}
              >
                Confirm access
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem("secretUnlocked");
                  setStep("locked");
                }}
                className="rounded-xl px-5 py-3 font-semibold border border-[#4B2C1A] text-[#4B2C1A] bg-white/80"
              >
                Lock again
              </button>
            </div>
          </form>
        </div>
      )}

      {/* SUCCESS */}
      {step === "done" && (
        <div className="mx-auto max-w-xl text-[#4B2C1A] mt-28 md:mt-32 text-center">
          <h1 className="display-font !font-normal text-4xl md:text-5xl font-extrabold mb-4">
            You’re in 🎉
          </h1>
          <p className="text-lg">You're in, keep an eye out on your inbox for a surprise ;)</p>
          <button
            className="mt-8 rounded-xl px-6 py-3 font-semibold text-white"
            style={{ background: "#5e8c31" }}
            onClick={() => setStep("form")}
          >
            Back
          </button>
        </div>
      )}
    </PageShell>
  );
}

/* -------------------- Maintenance Page -------------------- */
function MaintenancePage() {
  return (
    <section
      className="w-screen min-h-dvh flex flex-col items-center justify-center bg-center bg-cover text-[#4B2C1A]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <img
        src={brandLogo}
        alt="Protean LDN logo"
        className="h-[7.5rem] w-[7.5rem] md:h-[12rem] md:w-[12rem] rounded-full object-cover border-[1.5px] mb-6"
        style={{ borderColor: "#D4AF37" }}
      />

      <h1 className="display-font text-5xl md:text-6xl font-extrabold mb-4 text-center">
        We’re cooking up something new 🧋
      </h1>
      <p className="text-lg md:text-xl text-center opacity-90 mb-8 max-w-lg">
        Exciting things are coming... check back soon!
      </p>

      <a
        href="https://www.instagram.com/proteanldn/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#D4AF37] bg-white/80 hover:bg-[#fff8e1] transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#4B2C1A"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" strokeWidth="2" />
          <circle cx="18" cy="6" r="1.5" fill="#4B2C1A" />
        </svg>
        <span className="font-semibold text-[#4B2C1A]">@proteanldn</span>
      </a>

      <img
        src={testerHero}
        alt="Teaser visual"
        className="mt-10 w-full max-w-md rounded-2xl shadow-lg border border-[#D2D2D2]"
        loading="lazy"
      />
    </section>
  );
}

/* -------------------- Hidden QR page: /surprise -------------------- */
function Surprise() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(QR_PASSWORD);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = QR_PASSWORD;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } catch { }
      document.body.removeChild(ta);
      setTimeout(() => setCopied(false), 1600);
    }
  }

  function goToSecret() {
    navigate("/secret", { state: { prefillPw: QR_PASSWORD } });
  }

  return (
    <PageShell>
      <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white/95 backdrop-blur border border-[#D2D2D2] shadow-xl p-6 text-[#4B2C1A]">
          <h1 className="display-font !font-normal text-3xl md:text-4xl font-extrabold text-center">
            You’re one of the lucky ones 🎉
          </h1>

          <p className="mt-3 text-center opacity-90">
            Use this secret password on our access page to unlock an exclusive discount when we launch.
          </p>

          <div className="mt-5 flex gap-3 items-stretch">
            <div className="flex-1 rounded-xl border border-[#D2D2D2] bg-[#FFFCF3] px-4 py-3 text-center break-all select-all">
              {QR_PASSWORD}
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-xl px-4 py-3 font-semibold text-[#8C6E1E] border border-[#C9A227] hover:bg-[#C9A227] transition-colors"
              style={{ background: "#D4AF37" }}
              aria-live="polite"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <button
            type="button"
            onClick={goToSecret}
            className="mt-4 w-full rounded-xl px-4 py-3 font-semibold border border-[#4B2C1A] text-[#4B2C1A] bg-white/90 hover:bg-white"
          >
            Go to Secret Access →
          </button>

          <p className="mt-4 text-xs text-center opacity-70">
            <em>Keep it low-key, but your gym buddy might want in.</em>
          </p>
        </div>
      </div>
    </PageShell>
  );
}

/* -------------------- Routes -------------------- */
export default function App() {
  if (MAINTENANCE) return <MaintenancePage />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/surprise" element={<Surprise />} />

        {/* Home */}
        <Route path="/" element={<BeautifulWelcomeSection />} />

        {/* FAQs: hidden -> redirect to Home */}
        {SHOW_FAQS ? (
          <Route path="/faqs" element={<FAQs />} />
        ) : (
          <Route path="/faqs" element={<Navigate to="/" replace />} />
        )}


        {/* Our Products */}
        <Route path="/our-products" element={<OurProducts />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Secret Access */}
        <Route path="/secret" element={<SecretAccess />} />

        {/* Pre-Order: hidden -> redirect to Home */}
        {SHOW_PREORDER ? (
          <Route path="/pre-order" element={<PreOrder />} />
        ) : (
          <Route path="/pre-order" element={<Navigate to="/" replace />} />
        )}

        {/* Fallback */}
        <Route path="*" element={<BeautifulWelcomeSection />} />
      </Routes>
    </>
  );
}
