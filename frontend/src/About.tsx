// frontend/src/About.tsx

import bgImage from "./assets/bg.jpg";
import brandLogo from "./assets/BrandLogoBrown.png";
import aboutHero from "./assets/Aboutpagedrink.png";

export default function About() {
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

            <div className="flex-1 mx-auto max-w-7xl px-6 pt-24 md:pt-28 pb-8">
                {/* outer wrapper */}
                <div className="max-w-6xl mx-auto text-left text-[#4B2C1A]">
                    {/* Our why */}
                    <div className="grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-10 mt-2">
                        {/* Left: heading */}
                        <div className="lg:col-span-7 lg:row-start-1">
                            <p className="text-sm opacity-70 mb-3">About Protean LDN</p>
                            <h1 className="display-font !font-normal text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                                Our why
                            </h1>
                        </div>

                        {/* Left: white card + link */}
                        <div className="lg:col-span-7 lg:row-start-2">
                            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6 md:p-7 shadow-sm">
                                <p className="text-lg md:text-xl">
                                    We grew up loving bubble tea - and yes, we work out.
                                </p>

                                <p className="text-lg md:text-xl mt-4">
                                    Somewhere between post-gym protein shakes and craving-led bubble tea
                                    runs, we realised something was missing. Why did “macros” always
                                    mean the same boring flavours, and why did the flavours we actually loved
                                    never come in formats that fit our routines?
                                </p>

                                <p className="text-lg md:text-xl mt-4">
                                    Protean LDN was born from that exact frustration — a refusal to choose
                                    between <em>liquid happiness</em> and achieving our wellness goals.
                                </p>

                                <p className="text-lg md:text-xl mt-4">
                                    Growing up in Asia, food is love… and commentary. Aunties have no
                                    problem telling you what’s on your plate <em>and</em> what they think
                                    of your body, often in the same sentence. It’s
                                    well-meaning, but it sticks with you. Fitness later became a way
                                    to feel strong, confident, and in control... but the supplements
                                    available didn’t excite us, which often meant we didn't stick to our goals.
                                </p>

                                <p className="text-lg md:text-xl mt-4">
                                    So instead of settling for vanilla-everything, we decided to build
                                    what we wished existed:{" "}
                                    <strong>
                                        Asian-inspired, real tea–infused protein powders that taste just like
                                        your favourite bubble teas and still aligns with a healthy lifestyle.
                                    </strong>
                                </p>

                                <p className="text-lg md:text-xl mt-4">
                                    <em>This is just the beginning...</em>
                                </p>
                            </div>

                            <a
                                href="/"
                                className="inline-block mt-4 text-[#5e8c31] underline underline-offset-4"
                            >
                                Join the waitlist →
                            </a>
                        </div>

                        {/* Right: visual */}
                        <div className="lg:col-span-5 lg:row-start-2 lg:self-start mt-8 md:mt-10 lg:mt-0">
                            <div className="rounded-2xl overflow-hidden border border-[#D2D2D2] bg-[#FCFAF7] p-3 md:p-4">
                                <img
                                    src={aboutHero}
                                    alt="Unbranded shaker with matcha liquid and soft shadow"
                                    className="w-full h-auto object-contain max-h-[26rem] md:max-h-[32rem] mx-auto"
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

                        <div className="rounded-xl bg-white border border-[#D2D2D2] p-5 md:p-6 text-[#5A605E] text-lg md:text-xl">
                            Supplements inspired by beloved bubble tea flavours, with all of the
                            flavour <em>and</em> nutritional benefits.
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-10 md:mt-12">
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
            </div>

            <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
                ©{new Date().getFullYear()} Protean LDN. All rights reserved.
            </footer>
        </section>
    );
}
