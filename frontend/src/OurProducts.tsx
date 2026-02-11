import bgImage from "./assets/bg.jpg";
import brandLogo from "./assets/BrandLogoBrown.png";

import matchaTile from "./assets/MatchaLatteTile.png";
import brownSugarTile from "./assets/BrownSugarMilkTeaTile.png";

type Macro = { label: string; value: string };

function MacroRow({ items }: { items: Macro[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {items.map((m) => (
                <div
                    key={m.label}
                    className="rounded-2xl bg-white/90 backdrop-blur border border-[#D2D2D2] px-4 py-3 text-center shadow-sm"
                >
                    <div className="text-xs tracking-wider text-[#A06C4D] uppercase">
                        {m.label}
                    </div>
                    <div className="text-lg font-semibold text-[#4B2C1A]">
                        {m.value}
                    </div>
                </div>
            ))}
        </div>
    );
}

function ProductTile({
    title,
    imageSrc,
    badgeText,
    macros,
}: {
    title: string;
    imageSrc: string;
    badgeText: string;
    macros: Macro[];
}) {
    return (
        <div className="rounded-3xl bg-white/85 backdrop-blur border border-[#D2D2D2] shadow-2xl overflow-hidden">
            <div className="p-6 md:p-7">
                {/* Title + badge stacked + centred */}
                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold text-[#4B2C1A] leading-tight">
                        {title}
                    </h2>

                    <span className="rounded-full border border-[#D2D2D2] bg-[#FFFCF3] px-4 py-2 text-xs md:text-sm font-semibold text-[#4B2C1A]">
                        {badgeText}
                    </span>
                </div>

                {/* Image */}
                <div className="mt-5 rounded-2xl overflow-hidden border border-[#D2D2D2] bg-[#FCFAF7]">
                    <img
                        src={imageSrc}
                        alt={`${title} product tile`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Macros */}
                <p className="mt-5 text-sm tracking-wider text-[#A06C4D] uppercase">
                    Macros (per serving)
                </p>
                <MacroRow items={macros} />
            </div>
        </div>
    );
}

export default function OurProducts() {
    const commonProtein = "22g";

    const macrosBrownSugar: Macro[] = [
        { label: "Protein", value: commonProtein },
        { label: "Calories", value: "117 kcal" },
        { label: "Carbs", value: "3.6g" },
        { label: "Fats", value: "1.4g" },
    ];

    const macrosMatcha: Macro[] = [
        { label: "Protein", value: commonProtein },
        { label: "Calories", value: "116 kcal" },
        { label: "Carbs", value: "3.7g" },
        { label: "Fats", value: "1.3g" },
    ];

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
            {/* Logo */}
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

            <div className="flex-1 mx-auto max-w-6xl px-6 pt-24 md:pt-28 pb-8">
                {/* Header */}
                <div className="text-center text-[#4B2C1A]">
                    <p className="text-sm tracking-wider opacity-80 mb-3">
                        OUR PRODUCTS
                    </p>
                    <h1 className="display-font !font-normal text-5xl md:text-6xl font-extrabold mb-3">
                        Your bubble tea cravings,
                        <br className="hidden sm:block" />
                        but make it macro-friendly.
                    </h1>

                    {/* Blend + dietary copy */}
                    <div className="mt-5 mx-auto max-w-3xl rounded-3xl bg-white/85 backdrop-blur border border-[#D2D2D2] shadow-xl p-6 md:p-7 text-left">
                        <p className="text-lg md:text-xl">
                            A{" "}
                            <strong className="text-[#4B2C1A]">
                                premium whey protein blend
                            </strong>{" "}
                            (of Whey Protein Concentrate and Whey Protein Isolate)
                            - smooth, satisfying, and designed to taste like the
                            stuff you actually crave.
                        </p>

                        <div className="mt-4 flex flex-wrap justify-center gap-3">
                            <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm font-semibold text-[#4B2C1A]">
                                Lactose-free
                            </span>
                            <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm font-semibold text-[#4B2C1A]">
                                Real tea-inspired flavours
                            </span>
                            <span className="rounded-full bg-[#FFFCF3] border border-[#D2D2D2] px-4 py-2 text-sm font-semibold text-[#4B2C1A]">
                                Shake-friendly texture
                            </span>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProductTile
                        title="Matcha Latte"
                        imageSrc={matchaTile}
                        badgeText="Made with ceremonial matcha"
                        macros={macrosMatcha}
                    />

                    <ProductTile
                        title="Brown Sugar Milk Tea"
                        imageSrc={brownSugarTile}
                        badgeText="Made with real black tea"
                        macros={macrosBrownSugar}
                    />
                </div>

                {/* Format */}
                <div className="mt-10 text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-white/85 backdrop-blur border border-[#D2D2D2] shadow-sm px-6 py-3 text-[#4B2C1A]">
                        <span className="font-semibold">
                            Single-serving sachets for satisfying your bubble tea
                            cravings on the go
                        </span>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white"
                        style={{ background: "#5e8c31" }}
                    >
                        Join the waitlist
                    </a>
                </div>
            </div>

            <footer className="pb-2 text-center text-xs text-[#4B2C1A]">
                ©{new Date().getFullYear()} Protean LDN. All rights reserved.
            </footer>
        </section>
    );
}
