// frontend/src/About.tsx

import bgImage from "./assets/bg.jpg";
import brandLogo from "./assets/BrandLogoBrown.png";
import aboutHero from "./assets/Aboutpagedrink.png";
import hongKongAbout from "./assets/HongKongAbout.png";
import powderAbout from "./assets/PowderAbout.png";

function SectionImage({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:w-5/12">
            <div className="rounded-2xl overflow-hidden border border-[#D2D2D2] bg-[#FCFAF7] p-3 md:p-4">
                {children}
            </div>
        </div>
    );
}

function SectionCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="lg:w-7/12">
            <div className="rounded-2xl bg-white border border-[#D2D2D2] p-6 md:p-7 shadow-sm">
                <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-[#4B2C1A]">
                    {title}
                </h2>

                <div className="text-lg md:text-xl text-[#4B2C1A]">
                    {children}
                </div>
            </div>
        </div>
    );
}

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
            <a
                href="/"
                aria-label="Protean LDN - Home"
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
                <div className="max-w-6xl mx-auto text-left text-[#4B2C1A]">
                    <div className="mt-2">
                        <p className="text-sm opacity-70 mb-3">About Protean LDN</p>
                        <h1 className="display-font !font-normal text-5xl md:text-6xl font-extrabold mb-8 md:mb-10 leading-tight">
                            Our why
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                        <SectionImage>
                            <img
                                src={aboutHero}
                                alt="Unbranded shaker with matcha liquid and soft shadow"
                                className="w-full h-auto object-contain mx-auto max-w-[80%] lg:max-w-full"
                                loading="lazy"
                            />
                        </SectionImage>

                        <SectionCard title="Liquid happiness vs. your dream bod">
                            <p>
                                We grew up loving bubble tea. We also work out.
                                But the two didn't really work well together...
                                Whilst glugging down a vanilla protein shake
                                that tasted like feet-shavings for the 100th time,
                                we hit a wall: why did “macros” always mean the SAME boring
                                flavours, in formats that never fit our routines and what we actually wanted to drink?
                            </p>

                            <p className="mt-4">
                                <strong>Protean is the answer.</strong> Liquid happiness,
                                no compromise.
                            </p>
                        </SectionCard>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:gap-8 mt-12 md:mt-16">
                        <SectionImage>
                            <img
                                src={hongKongAbout}
                                alt="Hong Kong themed about image"
                                className="w-full h-auto object-cover rounded-xl"
                                loading="lazy"
                            />
                        </SectionImage>

                        <SectionCard title="Aunties have entered the chat">
                            <p>
                                Growing up in Asia, food is love… and commentary. Aunties
                                will tell you you're not eating enough, and what they think of
                                your body, often in the same breath.
                            </p>

                            <p className="mt-4">
                                Fitness became our way to feel strong and in control, but
                                the supplements out there never excited us enough for us to actually stick
                                with it.
                            </p>
                        </SectionCard>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 mt-12 md:mt-16">
                        <SectionImage>
                            <img
                                src={powderAbout}
                                alt="Protein powder about image"
                                className="w-full h-auto object-cover rounded-xl"
                                loading="lazy"
                            />
                        </SectionImage>

                        <SectionCard title="So we built it ourselves">
                            <p>
                                <strong>
                                    Asian-inspired, real tea-infused protein powders that
                                    actually taste like your favourite bubble teas.
                                </strong>
                            </p>

                            <ul className="mt-4 space-y-2">
                                <li>🍵 Matcha Latte using ceremonial matcha</li>
                                <li>🧋 Brown Sugar Milk Tea using real black tea</li>
                            </ul>

                            <p className="mt-4">
                                Lactose-free, macros without compromise.
                            </p>
                        </SectionCard>
                    </div>

                    <section className="mt-12 md:mt-16">
                        <h2 className="display-font !font-normal text-3xl md:text-4xl font-extrabold mb-4">
                            What we make
                        </h2>

                        <div className="rounded-xl bg-white border border-[#D2D2D2] p-5 md:p-6 text-[#5A605E] text-lg md:text-xl">
                            Supplements inspired by beloved bubble tea flavours, with all of
                            the flavour <em>and</em> nutritional benefits.
                        </div>
                    </section>

                    <section className="mt-12 md:mt-16">
                        <div className="rounded-2xl bg-[#FCFAF7] border border-[#D2D2D2] p-6 md:p-8 text-center">
                            <p className="display-font !font-normal text-3xl md:text-4xl font-extrabold text-[#4B2C1A]">
                                This is just the beginning.
                            </p>

                            <a
                                href="/"
                                className="inline-block mt-4 text-[#5e8c31] underline underline-offset-4 text-lg"
                            >
                                Join the waitlist →
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