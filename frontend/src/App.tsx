import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import BeautifulWelcomeSection from "./modules/landingPage/components/HeroSection";

// same background as Home
import bgImage from "./assets/bg.jpg";
// your logo for the subpages (top-left)
import brandLogo from "./assets/BrandLogoBrown.png";

/* -------------------- feature flags -------------------- */
/* Flip these to true later when you want the pages live */
const SHOW_FAQS = false;
const SHOW_PREORDER = false;

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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">FAQs</h1>
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
        <div className="grid lg:grid-cols-12 gap-10 items-start mt-10 md:mt-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="text-sm opacity-70 mb-3">About Protean LDN</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Our why
            </h1>

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
                <strong>
                  found her true love - the gym - and lifting heavy circles
                </strong>
                .
                <span className="block mt-2">
                  <strong>
                    Whilst the supplement aisle was full of
                    vanilla-ice-cream and Nutella flavours, nothing tasted like
                    home.
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

          {/* Right: visual placeholder */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FCFAF7] border border-[#D2D2D2] h-80 md:h-[26rem] flex items-center justify-center text-[#5A605E]">
              Hero visual (unbranded shaker, matcha liquid, soft shadow)
            </div>
          </div>
        </div>

        {/* What we make */}
        <section className="mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
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
              So
              she decided to build it herself.
            </p>
          </div>
        </section>

        {/* Flavours */}
        <section className="mt-10 md:mt-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Launch flavours (teaser)
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Tile 1 */}
            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] border border-[#D2D2D2] mb-4" />
              <p>Matcha latte using ceremonial matcha</p>
            </div>

            {/* Tile 2 */}
            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
              <div className="w-14 h-14 rounded-full bg-[#F5F5F5] border border-[#D2D2D2] mb-4" />
              <p>Brown sugar milk tea</p>
            </div>

            {/* Tile 3 */}
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Where we’re at
          </h2>

          <div className="relative">
            <div className="h-1 bg-[#D2D2D2] rounded-full" />
            <div className="flex justify-between -mt-3">
              {[
                "Formulation",
                "Pre-order info to waitlist",
                "Soft launch: Jan 2026",
              ].map((step, i) => (
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
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Pre-Order</h1>
        <p className="text-lg md:text-xl opacity-80">
          Put your pre-order form or “coming soon” content here.
        </p>
      </div>
    </PageShell>
  );
}

/* -------------------- Routes -------------------- */
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
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
