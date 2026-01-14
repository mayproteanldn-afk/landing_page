import { useEffect, useState } from "react";
import bgImage from "./assets/bg.jpg";
import brandLogo from "./assets/BrandLogoBrown.png";

// Same backend used on Home
const API_BASE = "https://monkfish-app-9g9ua.ondigitalocean.app";

export default function TheWellnessDrive() {
    // Prevent indexing by search engines (good for “hidden” pages)
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);
        return () => {
            document.head.removeChild(meta);
        };
    }, []);

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
                body: JSON.stringify({ firstName, email }),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data?.error || "Something went wrong");
            }

            setStatus("success");
            setMessage("You’re on the VIP list ✅ We’ll email you your exclusive sample when we launch.");
            setFirstName("");
            setEmail("");
        } catch (err: any) {
            setStatus("error");
            setMessage(err?.message || "Couldn’t sign you up — try again.");
        }
    };

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
            {/* Top-left logo (same style as your subpages) */}
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
                        THE WELLNESS DRIVE x PORSCHE
                    </p>

                    <h1 className="display-font text-4xl md:text-5xl font-extrabold mb-4">
                        VIP access only.
                    </h1>

                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        This page is for VIP attendees at the <strong>The Wellness Drive x Porsche</strong> event.
                    </p>

                    {/* Signup box */}
                    <div className="mt-8 rounded-2xl bg-[#FFFCF3] border border-[#D2D2D2] p-6 md:p-7 text-left">
                        <p className="font-semibold mb-4 text-center md:text-left">
                            Sign up to our email list to receive your exclusive sample when we launch
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:items-stretch justify-center md:justify-start gap-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                aria-label="First name"
                                autoComplete="given-name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="flex-1 w-full px-6 py-4 rounded-full border border-transparent
                           focus:outline-none focus:ring-2 focus:ring-gray-300
                           [background-color:#FFFCF3] [color:#4B2C1A] [placeholder-color:#A06C4D]"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                aria-label="Email"
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 w-full px-6 py-4 rounded-full border border-transparent
                           focus:outline-none focus:ring-2 focus:ring-gray-300
                           [background-color:#013220] [color:#FFFCF3] [placeholder-color:#FFFCF3]"
                            />

                            <button
                                type="button"
                                onClick={handleSubscribe}
                                disabled={status === "loading"}
                                className="px-6 py-4 rounded-full border-2 [border-color:#4B2C1A]
                           [background-color:#FFFCF3] [color:#4B2C1A] font-semibold
                           hover:[background-color:#e9e2d1] transition-colors
                           disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
                            >
                                {status === "loading" ? "Claiming..." : "Claim my free sample"}
                            </button>
                        </div>

                        {message && (
                            <p className="mt-4 text-sm text-[#4B2C1A] opacity-85 text-center md:text-left">
                                {message}
                            </p>
                        )}
                    </div>

                    <a
                        href="/"
                        className="inline-flex items-center justify-center mt-8 rounded-full px-6 py-3 font-semibold text-white"
                        style={{ background: "#5e8c31" }}
                    >
                        Back to Home
                    </a>

                    <p className="mt-4 text-xs opacity-70">
                        (Anyone with the link can view this page — it’s just not listed on the main site.)
                    </p>
                </div>
            </div>

            <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
                ©{new Date().getFullYear()} Protean LDN. All rights reserved.
            </footer>
        </section>
    );
}
