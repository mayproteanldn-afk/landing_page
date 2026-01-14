import React from "react";
import bgImage from "./assets/bg.jpg";
import brandLogo from "./assets/BrandLogoBrown.png";

export default function OurProducts() {
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

            <div className="flex-1 mx-auto max-w-6xl px-6 pt-28 md:pt-32 pb-10">
                <div className="rounded-3xl bg-white/85 backdrop-blur border border-[#D2D2D2] shadow-2xl p-8 md:p-10 text-[#4B2C1A]">
                    <p className="text-sm tracking-wider opacity-80 mb-3 text-center">
                        OUR PRODUCTS
                    </p>

                    <h1 className="display-font text-4xl md:text-5xl font-extrabold mb-6 text-center">
                        Bubble tea–inspired protein powders
                    </h1>

                    <p className="text-lg md:text-xl opacity-90 text-center max-w-3xl mx-auto">
                        We’re launching with two flavours — made with real tea, designed to taste like your
                        favourite bubble tea, and built for people who care about macros.
                    </p>

                    {/* Product cards */}
                    <div className="grid md:grid-cols-2 gap-6 mt-10">
                        {/* Matcha */}
                        <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="display-font text-2xl md:text-3xl font-extrabold">
                                    Matcha latte using ceremonial matcha
                                </h2>
                                <div
                                    className="w-10 h-10 rounded-full border border-[#D2D2D2]"
                                    style={{ background: "#5e8c31" }}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm">
                                    22g protein / serving
                                </span>
                                <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm">
                                    120 kcal / serving
                                </span>
                                <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm">
                                    Lactose-free
                                </span>
                            </div>

                            <p className="mt-4 opacity-90">
                                Smooth, tea-led matcha flavour with a proper “bubble tea shop” vibe — without the
                                sugar crash.
                            </p>

                            <p className="mt-3 text-sm opacity-75">
                                Launch format: multi-serving pouches.
                            </p>
                        </div>

                        {/* Brown sugar */}
                        <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="display-font text-2xl md:text-3xl font-extrabold">
                                    Brown sugar milk tea
                                </h2>
                                <div
                                    className="w-10 h-10 rounded-full border border-[#D2D2D2]"
                                    style={{ background: "#ba7d45" }}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm">
                                    22g protein / serving
                                </span>
                                <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm">
                                    120 kcal / serving
                                </span>
                                <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm">
                                    Lactose-free
                                </span>
                            </div>

                            <p className="mt-4 opacity-90">
                                Creamy milk tea flavour with that caramel-brown sugar warmth — designed to taste
                                like the real thing, just macro-friendly.
                            </p>

                            <p className="mt-3 text-sm opacity-75">
                                Launch format: multi-serving pouches.
                            </p>
                        </div>
                    </div>

                    {/* Launch note */}
                    <div className="mt-8 rounded-2xl bg-[#FFFCF3] border border-[#D2D2D2] p-6">
                        <p className="font-semibold mb-1">Launch timing</p>
                        <p className="opacity-90">
                            Soft launch is planned for <strong>March 2026</strong>. Join the waitlist to get first
                            access and secret discounts.
                        </p>

                        <div className="mt-4 flex justify-center">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white"
                                style={{ background: "#5e8c31" }}
                            >
                                Join the waitlist
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
                ©{new Date().getFullYear()} Protean LDN. All rights reserved.
            </footer>
        </section>
    );
}
