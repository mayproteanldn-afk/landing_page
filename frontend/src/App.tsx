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

  // ✅ type the isActive param to fix the TS error
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

/* -------------------- Shared shell for subpages --------------------
   Centers content horizontally, keeps same vertical height as Home,
   adds logo top-left, reuses Home's footer spacing. */
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
          className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-[1.5px]"
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

/* -------------------- Subpages (kept, just hidden via flags) -------------------- */
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

function About() {
  return (
    <PageShell>
      <div className="max-w-3xl mx-auto text-[#4B2C1A]">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About</h1>
        <p className="text-lg md:text-xl opacity-80">
          Tell your story, mission, and team here.
        </p>
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
