import { PageShell } from "./App";

/**
 * Our Products page
 * Luxurious + fun, same palette/fonts, with hero tiles front-and-centre.
 */
export default function OurProducts() {
    return (
        <PageShell>
            {/* Override the PageShell's default center alignment */}
            <div className="max-w-6xl mx-auto text-left text-[#4B2C1A] mt-16 md:mt-20 pb-6">
                {/* Header */}
                <div className="text-center px-2">
                    <p className="text-sm tracking-wider opacity-75">OUR PRODUCTS</p>
                    <h1 className="display-font !font-normal text-5xl md:text-6xl font-extrabold mt-3">
                        Protein that tastes like bubble tea.
                    </h1>
                    <p className="mt-4 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
                        Two launch flavours. Real tea. Big nostalgia. Still hits your macros.
                    </p>
                    <p className="mt-2 text-sm md:text-base opacity-75">
                        Soft launch planned for <strong>March 2026</strong>.
                    </p>
                </div>

                {/* Hero tiles (MAIN FOCUS) */}
                <section className="mt-10 md:mt-12">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <HeroTile
                            title="Matcha latte using ceremonial matcha"
                            subtitle="Tea-led • Smooth • Creamy"
                            accentHex="#5e8c31"
                            floatingTag="🍵 matcha energy"
                        />
                        <HeroTile
                            title="Brown sugar milk tea"
                            subtitle="Caramel warmth • Tea-led • Indulgent"
                            accentHex="#ba7d45"
                            floatingTag="🧋 brown sugar vibes"
                        />
                    </div>
                </section>

                {/* Macros + claims */}
                <section className="mt-10 md:mt-12">
                    <div className="rounded-3xl bg-white/85 backdrop-blur border border-[#D2D2D2] shadow-lg p-6 md:p-8">
                        <div className="grid lg:grid-cols-12 gap-6 items-start">
                            <div className="lg:col-span-7">
                                <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold">
                                    What’s inside
                                </h2>
                                <p className="mt-3 text-lg md:text-xl opacity-90">
                                    Built to taste like your favourite bubble tea flavours — without the sugar crash.
                                </p>

                                <div className="mt-5 space-y-3 text-[#5A605E]">
                                    <p>
                                        <strong>Protein blend:</strong> 80% Whey Protein Concentrate + Whey Protein
                                        Isolate (high quality whey imported from Australia and New Zealand).
                                    </p>
                                    <p>
                                        <strong>Dietary:</strong> Lactose-free.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#FFFCF3] border border-[#D2D2D2] p-5 md:p-6">
                                    <p className="font-semibold mb-3">Macros (per serving)</p>

                                    <div className="grid grid-cols-2 gap-3">
                                        <StatPill label="Protein" value="22g" />
                                        <StatPill label="Calories" value="120 kcal" />
                                        {/* Placeholders for now — swap when confirmed */}
                                        <StatPill label="Carbs" value="TBC" />
                                        <StatPill label="Fats" value="TBC" />
                                    </div>

                                    <p className="mt-4 text-xs opacity-75">
                                        Final nutrition panel will be confirmed at launch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Format + CTA */}
                <section className="mt-8 md:mt-10">
                    <div className="rounded-3xl bg-[#FCFAF7] border border-[#D2D2D2] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-lg md:text-xl font-semibold">
                                Launch format: multi-serving pouches
                            </p>
                            <p className="mt-1 text-[#5A605E]">
                                Join the waitlist for first access and secret discounts.
                            </p>
                        </div>

                        <a
                            href="/"
                            className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-white whitespace-nowrap"
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

/* -------------------- Components -------------------- */

function HeroTile(props: {
    title: string;
    subtitle: string;
    accentHex: string;
    floatingTag: string;
}) {
    const { title, subtitle, accentHex, floatingTag } = props;

    return (
        <div className="relative rounded-3xl overflow-hidden border border-[#D2D2D2] shadow-[0_18px_60px_rgba(0,0,0,0.08)] bg-white/85 backdrop-blur">
            {/* Premium “hero art” placeholder */}
            <div className="relative h-[360px] md:h-[420px]">
                {/* soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/75" />

                {/* playful luxury bubbles */}
                <div className="absolute inset-0 opacity-80">
                    <div className="absolute -top-10 -left-10 w-56 h-56 rounded-full border border-white/60 bg-white/20 blur-[1px]" />
                    <div className="absolute top-10 right-6 w-28 h-28 rounded-full border border-white/60 bg-white/15 blur-[1px]" />
                    <div className="absolute bottom-8 left-10 w-36 h-36 rounded-full border border-white/60 bg-white/10 blur-[1px]" />
                </div>

                {/* “Product silhouette” placeholder (centre focus) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[220px] md:w-[250px] h-[300px] md:h-[340px]">
                        {/* bottle/pouch shape */}
                        <div className="absolute inset-0 rounded-[2.25rem] border border-[#D2D2D2] bg-white shadow-lg" />

                        {/* label zone */}
                        <div className="absolute left-6 right-6 top-16 rounded-2xl border border-[#E2E2E2] bg-[#FFFCF3] p-4 text-center">
                            <p className="text-xs tracking-wider opacity-70">PROTEAN LDN</p>
                            <p className="mt-2 font-semibold">{title}</p>
                            <p className="mt-1 text-sm opacity-75">{subtitle}</p>
                        </div>

                        {/* accent liquid window */}
                        <div
                            className="absolute left-8 right-8 bottom-10 h-24 rounded-2xl border border-[#E2E2E2]"
                            style={{
                                background: `linear-gradient(180deg, ${accentHex}33, ${accentHex}99)`,
                            }}
                        />

                        {/* tiny gold detail */}
                        <div
                            className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border"
                            style={{ borderColor: "#D4AF37", background: "#ffffffaa" }}
                            aria-hidden="true"
                        />
                    </div>
                </div>

                {/* floating tag */}
                <div className="absolute top-5 right-5">
                    <span className="inline-flex items-center rounded-full px-4 py-2 text-sm border border-[#D2D2D2] bg-white/85 backdrop-blur">
                        {floatingTag}
                    </span>
                </div>

                {/* accent corner stamp */}
                <div className="absolute bottom-5 left-5">
                    <span
                        className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                        style={{ background: accentHex }}
                    >
                        22g protein • 120 kcal
                    </span>
                </div>
            </div>

            {/* Footer content under hero */}
            <div className="p-6 md:p-7">
                <p className="text-[#5A605E]">
                    Lactose-free • Real tea–led flavour • Whey Protein Concentrate (80%) + Whey Protein Isolate
                </p>
            </div>
        </div>
    );
}

function StatPill({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl bg-white border border-[#D2D2D2] px-4 py-3">
            <p className="text-xs tracking-wider opacity-70">{label}</p>
            <p className="text-lg font-semibold mt-1">{value}</p>
        </div>
    );
}
