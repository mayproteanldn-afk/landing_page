// frontend/src/TheWellnessDrive.tsx

import React from "react";
import bgImage from "./assets/bg.jpg";
import brandLogo from "./assets/BrandLogoBrown.png";
import SignupForm from "./modules/landingPage/components/SignupForm2";

export default function TheWellnessDrive() {
    // Prevent indexing by search engines (good for “hidden” pages)
    React.useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);
        return () => {
            document.head.removeChild(meta);
        };
    }, []);

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
            {/* Top-left logo */}
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

            <div className="flex-1 mx-auto max-w-4xl px-6 pt-28 md:pt-32 pb-10">
                <div className="rounded-3xl bg-white/85 backdrop-blur border border-[#D2D2D2] shadow-2xl p-8 md:p-10 text-[#4B2C1A] text-center">
                    <p className="text-sm tracking-wider opacity-80 mb-3">
                        THE WELLNESS DRIVE × PORSCHE
                    </p>

                    <h1 className="display-font text-4xl md:text-5xl font-extrabold mb-4">
                        VIP access only 🎟️
                    </h1>

                    <p className="text-lg md:text-xl opacity-90 mb-8">
                        This page is for VIP attendees at <strong>The Wellness Drive × Porsche</strong>.
                    </p>

                    {/* ✅ Signup form (auto-detects /thewellnessdrive and forces wellness_drive) */}
                    <div className="max-w-2xl mx-auto text-left">
                        <SignupForm
                            signupSource="wellness_drive"
                            buttonLabel="Claim my free sample"
                            headline="Sign up to our email list to receive your exclusive sample when we launch."
                        />
                    </div>

                    <a
                        href="/"
                        className="inline-flex items-center justify-center mt-10 rounded-full px-6 py-3 font-semibold text-white"
                        style={{ background: "#5e8c31" }}
                    >
                        Back to Home
                    </a>
                </div>
            </div>

            <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
                ©{new Date().getFullYear()} Protean LDN. All rights reserved.
            </footer>
        </section>
    );
}
