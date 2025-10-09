import { Routes, Route, NavLink, Navigate, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import BeautifulWelcomeSection from "./modules/landingPage/components/HeroSection";

// same background as Home
import bgImage from "./assets/bg.jpg";
// your logo for the subpages (top-left)
import brandLogo from "./assets/BrandLogoBrown.png";
import aboutHero from "./assets/Aboutpagedrink.png";

import testerHero from "./assets/testerhero.png";



/* -------------------- feature flags -------------------- */
/* Flip these to true later when you want the pages live */
const SHOW_FAQS = false;
const SHOW_PREORDER = false;
/* -------------------- QR surprise password -------------------- */
const QR_PASSWORD = "ilyproteinboba";

/* -------------------- maintenance mode -------------------- */
/* -------------------- toggle via DO, switch key VITE_MAINTENANCE to False -------------------- */
/** Toggle via DigitalOcean App Platform → Environment Variables → VITE_MAINTENANCE */
// safer read: handles TRUE/True/true and missing values
const MAINTENANCE =
  String((import.meta as any).env?.VITE_MAINTENANCE ?? "")
    .trim()
    .toLowerCase() === "true";
console.log("MAINTENANCE =", MAINTENANCE, "raw =", (import.meta as any).env?.VITE_MAINTENANCE);



/* -------------------- Top-right navbar -------------------- */
function Navbar() {
  const base =
    "text-[#A06C4D] tracking-wide transition-colors text-lg md:text-xl";
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
function PageShell({ children }: { children: React.ReactNode }) {
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

      {/* Keep the same top padding (no vertical re-centering), center horizontally */}
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
        <h1 className="display-font !font-normal text-4xl md:text-5xl font-extrabold mb-6">FAQs</h1>
        <p className="text-lg md:text-xl opacity-80">
          Add your common questions and answers here.
        </p>
      </div>
    </PageShell>
  );
}

/* --- tiny icon used on About --- */
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.75a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 2a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM18.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function About() {
  return (
    <PageShell>
      {/* outer wrapper overrides parent center alignment */}
      <div className="max-w-6xl mx-auto text-left text-[#4B2C1A]">
        {/* Our why (split) */}
        {/* NOTE: add explicit grid rows so we can align the image with the card */}
        <div className="grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-10 mt-10 md:mt-12">
          {/* Left: heading (row 1) */}
          <div className="lg:col-span-7 lg:row-start-1">
            <p className="text-sm opacity-70 mb-3">About Protean LDN</p>
            <h1 className="display-font !font-normal text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Our why
            </h1>
          </div>

          {/* Left: white card + link (row 2) */}
          <div className="lg:col-span-7 lg:row-start-2">
            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6 md:p-7 shadow-sm">
              <p className="text-lg md:text-xl">
                We grew up loving bubble tea — and we lift. Refusing to choose
                between <em>liquid happiness</em> and macros, we’re building{" "}
                <strong>Protean LDN</strong>: Asian-inspired, real tea–infused
                protein powders that taste like your favourites and fit your
                routine.
              </p>

              <p className="text-lg md:text-xl mt-4">
                Like many of us, she grew up in Asia where aunties (and everyone
                else) can comment on your body and what’s on your plate in the
                same breath — well-meaning, but it can sting. She was the
                “chubby” kid. After moving to the UK, she{" "}
                <strong>found her true love - the gym - and lifting heavy circles</strong>.
                <span className="block mt-2">
                  <strong>
                    Whilst the supplement aisle was full of vanilla ice cream and
                    nutella flavours, nothing tasted like home.
                  </strong>{" "}
                  Nothing <em>scratched the itch</em> for the flavours she grew
                  up with while still helping her hit her goals. So she{" "}
                  <strong>decided to build it herself</strong>.
                </span>
              </p>
            </div>

            <a
              href="/"
              className="inline-block mt-4 text-[#5e8c31] underline underline-offset-4"
            >
              Join the waitlist →
            </a>
          </div>

          {/* Right: visual (row 2 to align with white card top) */}
          <div className="lg:col-span-5 lg:row-start-2 lg:self-start mt-8 md:mt-10 lg:mt-0">
            <div className="rounded-2xl overflow-hidden border border-[#D2D2D2] h-80 md:h-[26rem] bg-[#FCFAF7]">
              <img
                src={aboutHero}
                alt="Unbranded shaker with matcha liquid and soft shadow"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* What we make */}
        <section className="mt-12 md:mt-16">
          <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold mb-4">
            What we make
          </h2>

          <div className="rounded-xl bg-white border border-[#D2D2D2] p-5 md:p-6 text-[#5A605E]">
            Protein you’ll actually crave ~ delicious, smooth, and made using real tea.
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <span className="rounded-full bg-white border border-[#D2D2D2] px-4 py-2 text-sm">
              22–25g protein / serve
            </span>
            <span className="rounded-full bg-white border border-[#D2D2D2] px-4 py-2 text-sm">
              Beloved Asian classics
            </span>
          </div>

          <p className="text-[#5A605E] mt-3">
            <strong>Multi-serving pouches for launch</strong> — because once
            you’ve tried it, you’ll reach for it every time you crave bubble tea and have macros to hit.
          </p>
        </section>

        {/* Founder pull-quote */}
        <section className="mt-10 md:mt-12">
          <div className="rounded-2xl bg-[#FCFAF7] border border-[#D2D2D2] p-6 md:p-8">
            <blockquote className="text-2xl md:text-3xl font-semibold">
              “Whilst the supplement aisle was full of vanilla-ice-cream and
              Nutella flavours, nothing tasted like home.”
            </blockquote>
            <p className="text-[#5A605E] mt-3">
              So she decided to build it herself.
            </p>
          </div>
        </section>

        {/* Flavours */}
        <section className="mt-10 md:mt-12">
          <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold mb-6">
            Launch flavours (teaser)
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] border border-[#D2D2D2] mb-4" />
              <p>Matcha latte using ceremonial matcha</p>
            </div>

            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] border border-[#D2D2D2] mb-4" />
              <p>Brown sugar milk tea</p>
            </div>

            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] border border-[#D2D2D2] mb-4" />
              <p>
                Fruit tea flavour (to be decided by you). Let us know what
                flavour you’d like to see via our Instagram
              </p>
              <a
                href="https://www.instagram.com/proteanldn/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-[#5A605E] hover:text-[#4B2C1A]"
              >
                <InstagramIcon className="w-5 h-5" />
                @proteanldn
              </a>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-10 md:mt-12">
          <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold mb-6">
            Where we’re at
          </h2>

          <div className="relative">
            <div className="h-1 bg-[#D2D2D2] rounded-full" />
            <div className="flex justify-between -mt-3">
              {["Formulation", "Pre-order info to waitlist", "Soft launch: Jan 2026"].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#5e8c31]" />
                  <span className="mt-3 text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#5A605E] mt-4">
            Small-batch on purpose. We’ll keep you posted by email.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-8 md:mt-10">
          <div className="rounded-2xl bg-[#FCFAF7] border border-[#D2D2D2] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-lg md:text-xl">
              Want first access and secret discounts?
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white"
              style={{ background: "#5e8c31" }}
            >
              Join the waitlist
            </a>
          </div>
        </section>
      </div>
    </PageShell>
  );
}


function PreOrder() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto text-[#4B2C1A]">
        <h1 className="display-font !font-normal text-4xl md:text-5xl font-extrabold mb-6">Pre-Order</h1>
        <p className="text-lg md:text-xl opacity-80">
          Put your pre-order form or “coming soon” content here.
        </p>
      </div>
    </PageShell>
  );
}

/* -------------------- Secret Access page -------------------- */
function SecretAccess() {
  const [step, setStep] = React.useState<"locked" | "form" | "done">(
    () => (localStorage.getItem("secretUnlocked") === "1" ? "form" : "locked")
  );

  const [pw, setPw] = React.useState("");
  const [pwError, setPwError] = React.useState("");
  // 👇 Add this block
  const location = useLocation() as { state?: { prefillPw?: string } };

  React.useEffect(() => {
    const incoming = location?.state?.prefillPw;
    if (incoming) setPw(incoming);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 👆 End new block
  const SECRET =
    (import.meta as any).env?.VITE_SECRET_ACCESS_PW || "ilyproteinboba";

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
    // TODO: integrate with your waitlist/ESP
    setStep("done");
  }

  return (
    <PageShell>
      {/* LOCKED */}
      {step === "locked" && (
        <div className="relative">
          {/* blurred preview background */}
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

          {/* unlock card */}
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

              {/* GOLD unlock button (no pro-tip) */}
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
          <p className="mt-4 text-lg opacity-90">
            Pop in your details to confirm access.
          </p>

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

            {formError && (
              <p className="mt-3 text-sm text-red-700">{formError}</p>
            )}

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
          <p className="text-lg">
            You're in, keep an eye out on your inbox for a surprise ;)
          </p>
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
      {/* Logo */}
      <img
        src={brandLogo}
        alt="Protean LDN logo"
        className="h-20 w-20 rounded-full object-cover border-[1.5px] mb-6"
        style={{ borderColor: "#D4AF37" }}
      />

      {/* Headline */}
      <h1 className="display-font text-5xl md:text-6xl font-extrabold mb-4 text-center">
        We’re brewing something new ☕️
      </h1>
      <p className="text-lg md:text-xl text-center opacity-90 mb-8 max-w-lg">
        Exciting things are coming... check back soon!
      </p>

      {/* Instagram Button */}
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

      {/* Teaser Image */}
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

  // Add noindex so this page isn't indexed by search engines
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
      // Fallback if clipboard API isn't available
      const ta = document.createElement("textarea");
      ta.value = QR_PASSWORD;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); setCopied(true); } catch { }
      document.body.removeChild(ta);
      setTimeout(() => setCopied(false), 1600);
    }
  }

  function goToSecret() {
    // pass the password along so SecretAccess can prefill
    navigate("/secret", { state: { prefillPw: QR_PASSWORD } });
  }

  return (
    <PageShell>
      {/* overlay modal */}
      <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-2xl bg-white/95 backdrop-blur border border-[#D2D2D2] shadow-xl p-6 text-[#4B2C1A]">
          <h1 className="display-font !font-normal text-3xl md:text-4xl font-extrabold text-center">
            You’re one of the lucky ones 🎉
          </h1>

          <p className="mt-3 text-center opacity-90">
            Use this secret password on our access page to unlock an exclusive discount when we launch.
          </p>

          {/* password + copy */}
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
  if (MAINTENANCE) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/surprise" element={<Surprise />} />
        {/* Home (unchanged) */}
        <Route path="/" element={<BeautifulWelcomeSection />} />

        {/* FAQs: hidden -> redirect to Home */}
        {SHOW_FAQS ? (
          <Route path="/faqs" element={<FAQs />} />
        ) : (
          <Route path="/faqs" element={<Navigate to="/" replace />} />
        )}

        {/* About (visible) */}
        <Route path="/about" element={<About />} />

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
