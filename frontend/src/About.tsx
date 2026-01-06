import aboutHero from "./assets/Aboutpagedrink.png"; // if this path 404s, try "../assets/Aboutpagedrink.png"



export default function About() {
    return (
        <main className="bg-cream text-ink">
            {/* Our why (split) */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] gap-10">
                {/* Row 1: heading/eyebrow on the left */}
                <div className="lg:col-span-7 lg:row-start-1">
                    <p className="text-sm text-muted mb-3">About Protean LDN</p>
                    <h1 className="display-font text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Our why
                    </h1>
                </div>

                {/* Row 2: white text card on the left */}
                <div className="lg:col-span-7 lg:row-start-2">
                    <div className="rounded-2xl bg-white shadow-[0_0_0_1px_var(--line)] p-6 md:p-7">
                        <p className="text-lg md:text-xl">
                            We grew up loving bubble tea — and we lift. Refusing to choose between
                            <span className="italic"> liquid happiness</span> and macros, we’re building
                            <strong> Protean LDN</strong>: Asian-inspired, real tea–infused protein powders that taste like your
                            favourite bubble teas and fit your routine.
                        </p>
                        <p className="text-lg md:text-xl mt-4">
                            Like many of us, she grew up in Asia where aunties (and everyone else) can comment on your body and
                            what’s on your plate in the same breath — well-meaning, but it can sting. She was the “chubby” kid.
                            After moving to the UK, she <strong>found her true love - the gym - and lifting heavy circles</strong>.
                            <span className="block mt-2">
                                <strong>Whilst the supplement aisle was full of vanilla-ice-cream and Nutella flavours, nothing tasted like home.</strong>{" "}
                                Nothing <em>scratched the itch</em> for the flavours she grew up with while still helping her hit her goals.
                                So she <strong>decided to build it herself</strong>.
                            </span>
                        </p>
                    </div>

                    <a href="/" className="inline-block mt-4 text-accent underline underline-offset-4">
                        Join the waitlist →
                    </a>
                </div>

                {/* Row 2: image on the right */}
                <div className="lg:col-span-5 lg:row-start-2">
                    <div className="rounded-2xl overflow-hidden bg-[#FCFAF7] shadow-[0_0_0_1px_var(--line)] h-80 md:h-[26rem]">
                        <img
                            src={aboutHero}
                            alt="Unbranded shaker with matcha liquid and soft shadow"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* What we make */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-10">
                <h2 className="font-display text-3xl md:text-4xl mb-4">What we make</h2>

                <div className="rounded-xl bg-white shadow-[0_0_0_1px_var(--line)] p-5 md:p-6 text-muted">
                    Protein you’ll actually crave — clean, authentic, tea-led flavour.
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                    <span className="rounded-full bg-white shadow-[0_0_0_1px_var(--line)] px-4 py-2 text-sm">
                        22g protein / serve
                    </span>
                    <span className="rounded-full bg-white shadow-[0_0_0_1px_var(--line)] px-4 py-2 text-sm">
                        Beloved Asian classics
                    </span>
                </div>

                <p className="text-muted mt-3">
                    <strong>Multi-serving pouches for launch</strong> — because once you’ve tried it, you’ll reach for it
                    every time you’ve got macros to hit and cravings to satisfy.
                </p>
            </section>

            {/* Founder pull-quote */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
                <div className="rounded-2xl bg-[#FCFAF7] shadow-[0_0_0_1px_var(--line)] p-6 md:p-8">
                    <blockquote className="font-display text-2xl md:text-3xl">
                        “Whilst the supplement aisle was full of vanilla-ice-cream and Nutella flavours, nothing tasted like home.”
                    </blockquote>
                    <p className="text-muted mt-3">
                        She found her true love — the gym — and lifting heavy circles… so she decided to build it herself.
                    </p>
                </div>
            </section>

            {/* Flavours (UPDATED: only 2, no fruit tea) */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-6">
                <h2 className="font-display text-3xl md:text-4xl mb-6">Launch flavours (teaser)</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    {[
                        "Matcha latte using ceremonial matcha",
                        "Brown sugar milk tea",
                    ].map((label, i) => (
                        <div key={i} className="rounded-2xl bg-white shadow-[0_0_0_1px_var(--line)] p-6">
                            <div className="w-14 h-14 rounded-full bg-[#F5F5F5] shadow-[0_0_0_1px_var(--line)] mb-4" />
                            <p className="text-ink">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline + CTA (UPDATED launch date) */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
                <h2 className="font-display text-3xl md:text-4xl mb-6">Where we’re at</h2>
                <div className="relative">
                    <div className="h-1 bg-[var(--line)] rounded-full" />
                    <div className="flex justify-between -mt-3">
                        {["Formulation", "Pre-order info to waitlist", "Soft launch: March 2026"].map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-accent" />
                                <span className="mt-3 text-sm">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-muted mt-4">Small-batch on purpose. We’ll keep you posted by email.</p>
            </section>

            <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
                <div className="rounded-2xl bg-[#FCFAF7] shadow-[0_0_0_1px_var(--line)] p-6 md:p-8 flex items-center justify-between gap-4">
                    <p className="text-lg md:text-xl">Want first access and secret discounts?</p>
                    <a href="/" className="btn-primary whitespace-nowrap">Join the waitlist</a>
                </div>
            </section>
        </main>
    );
}
