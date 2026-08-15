import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { fetchServerApi } from "@/lib/api";

export const metadata: Metadata = {
    title: "SME Internet | Ms Online",
    description: "Small & Medium Enterprise Internet Packages — Super Speed Optical Fiber Internet Connectivity with Real IP.",
};

export const dynamic = "force-dynamic";

const DEFAULT_PACKAGES = [
    {
        id: "sme-pro", name: "SME PRO", speed: "30 Mbps", price: "2000",
        period: "Per Month", color: "#1a7abf", isPopular: false,
        features: [
            { text: "Free Talk Time 300 Min" }, { text: "High Availability" },
            { text: "FTTH Technology" }, { text: "Selfcare Portal" },
            { text: "24/7 Customer Support" }, { text: "OTC - 1000 Taka" },
        ],
    },
    {
        id: "sme-ultra", name: "SME ULTRA", speed: "40 Mbps", price: "2500",
        period: "Per Month", color: "#0091d5", isPopular: true,
        features: [
            { text: "Free Talk Time 500 Min" }, { text: "High Availability" },
            { text: "FTTH Technology" }, { text: "Selfcare Portal" },
            { text: "24/7 Customer Support" }, { text: "OTC - 1000 Taka" },
        ],
    },
    {
        id: "sme-max", name: "SME MAX", speed: "50 Mbps", price: "3000",
        period: "Per Month", color: "#1a7abf", isPopular: false,
        features: [
            { text: "Free Talk Time 700 Min" }, { text: "High Availability" },
            { text: "Free Real IP" }, { text: "FTTH Technology" },
            { text: "Selfcare Portal" }, { text: "24/7 Customer Support" },
            { text: "OTC - 1000 Taka" },
        ],
    },
];

async function getSmePackages() {
    try {
        const res = await fetchServerApi("/api/sme/packages");
        if (res.ok) {
            const data = await res.json();
            if (data?.data?.length > 0) return data.data;
        }
    } catch {
        // Keep the page available with curated defaults while the API restarts.
    }
    return DEFAULT_PACKAGES;
}

export default async function SmePage() {
    const packages = await getSmePackages();

    return (
        <div className="w-full bg-[radial-gradient(circle_at_top,_rgba(91,200,232,0.08),_transparent_32%),linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)]">
            <Section
                variant="white"
                size="lg"
                className="relative overflow-hidden bg-transparent py-16 md:py-24"
                style={{ marginTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-sky-700 shadow-sm backdrop-blur">
                            Enterprise Solutions
                        </span>
                        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-[58px] lg:leading-[1.02]">
                            SME <span style={{ color: "var(--blue)" }}>Internet</span> built for performance and reliability
                        </h1>
                        <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-[16px]">
                            Dedicated SME internet solutions with stable uptime, business-ready support, and reliable connectivity for growing operations.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/70 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-700 shadow-inner">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">SME Sales Contact</p>
                                    <a href="tel:09639116116" className="text-lg font-extrabold text-slate-900 transition hover:text-sky-700">
                                        09639116116
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-sky-200/35 blur-3xl" />
                        <div className="absolute -bottom-6 right-2 h-24 w-24 rounded-full bg-blue-300/30 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
                            <div className="mb-5 flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">SME Packages</p>
                                    <h2 className="mt-1 text-xl font-extrabold text-slate-900">SME INTERNET</h2>
                                </div>
                                <div className="rounded-2xl bg-sky-50 px-4 py-2 text-right">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Uptime</p>
                                    <p className="text-sm font-extrabold text-sky-700">99.9%</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2.5">
                                {[
                                    { label: "30 Mbps", active: false },
                                    { label: "40 Mbps", active: true },
                                    { label: "50 Mbps", active: false },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center"
                                        style={{
                                            boxShadow: item.active ? "0 10px 22px rgba(26,122,191,0.12)" : "none",
                                            background: item.active ? "linear-gradient(135deg,#eef8ff,#f5fbff)" : undefined,
                                        }}
                                    >
                                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Plan</p>
                                        <p className="mt-2 text-lg font-black text-slate-900">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-[#f6fbff] p-4">
                                <div className="mb-3 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                                    <span>Network</span>
                                    <span>Stable</span>
                                </div>

                                <svg viewBox="0 0 240 170" className="h-auto w-full" fill="none">
                                    <defs>
                                        <linearGradient id="smeGraphicGrad" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#5bc8e8" stopOpacity="0.7" />
                                            <stop offset="100%" stopColor="#1a7abf" stopOpacity="0.08" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="184" cy="50" r="34" fill="#e8f4fb" />
                                    <circle cx="184" cy="35" r="16" fill="#5bc8e8" opacity="0.28" />
                                    <rect x="24" y="88" width="170" height="66" rx="12" fill="url(#smeGraphicGrad)" stroke="#dbeafe" strokeWidth="1.2" />
                                    <rect x="40" y="102" width="120" height="40" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                                    <rect x="54" y="113" width="46" height="8" rx="4" fill="#d9eef8" />
                                    <rect x="54" y="128" width="70" height="5" rx="2.5" fill="#eef2f7" />
                                    <path d="M175 68 Q188 59 204 64" stroke="#1a7abf" strokeWidth="2" fill="none" />
                                    <circle cx="208" cy="62" r="6" fill="#e8f4fb" stroke="#1a7abf" strokeWidth="1.2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Creates a one-inch break between the SME hero and package introduction. */}
            <div aria-hidden="true" style={{ height: "clamp(64px, 7vw, 96px)" }} />

            <Section variant="light" size="sm" className="text-center py-0">
                <Container className="flex flex-col items-center">
                    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-5"
                        style={{ color: "var(--blue)", borderColor: "var(--blue-lt)", background: "#f0f9ff" }}>
                        Our Packages
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Small &amp; Medium Enterprise Packages
                    </h2>
                    <div className="w-16 h-1 rounded-full mb-5" style={{ background: "var(--blue-lt)" }} />
                    <p className="text-gray-500 text-[15px] max-w-xl leading-relaxed">
                        Super Speed Optical Fiber Internet Connectivity with Real IP Right to Your Door Steps
                    </p>
                </Container>
            </Section>

            {/* Keeps the package cards half an inch below the Real IP introduction. */}
            <div aria-hidden="true" style={{ height: "clamp(48px, 5vw, 64px)" }} />

            <Section variant="light" size="md" className="pt-0 mb-12 pb-12 md:mb-16 md:pb-16">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg: any) => {
                            const accent = pkg.color || "#1a7abf";
                            const isPopular = !!pkg.isPopular;
                            return (
                                <div
                                    key={pkg.id || pkg.name}
                                    className="rounded-[var(--card-radius)] overflow-hidden flex flex-col hover-lift transition-all duration-300"
                                    style={{
                                        background: "#fff",
                                        boxShadow: isPopular ? `0 8px 28px ${accent}20` : "var(--card-shadow)",
                                        border: isPopular ? `2px solid ${accent}` : "var(--card-border)",
                                    }}
                                >
                                    <div className="pkg-card-top relative" style={isPopular ? { background: `linear-gradient(135deg, var(--navy) 0%, ${accent} 100%)` } : {}}>
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-3" style={{ boxShadow: `0 4px 12px ${accent}30` }}>
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                style={{ color: accent }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                                            </svg>
                                        </div>
                                        <h3 className="text-base font-extrabold tracking-widest" style={isPopular ? { color: "#fff" } : {}}>{pkg.name}</h3>
                                        {isPopular && (
                                            <div className="absolute top-3 right-3 bg-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
                                                style={{ color: accent }}>
                                                {pkg.tagline || "Most Popular"}
                                            </div>
                                        )}
                                        {!isPopular && pkg.tagline && (
                                            <div className="absolute top-3 right-3 bg-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest"
                                                style={{ color: "#475569" }}>
                                                {pkg.tagline}
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-8 pb-8 px-8 flex flex-col items-center flex-grow">
                                        {pkg.image && (
                                            <img src={pkg.image} alt={pkg.name} className="w-20 h-20 object-cover rounded-lg border border-gray-100 shadow-sm mb-4" />
                                        )}
                                        <p className="text-2xl font-bold mb-2" style={{ color: "var(--navy)" }}>{pkg.speed}</p>
                                        <div className="flex gap-1 mb-6">
                                            {[0, 1, 2].map((i) => (
                                                <span key={i} className="text-lg" style={{ color: accent }}>—</span>
                                            ))}
                                        </div>

                                        <ul className="w-full flex flex-col gap-3.5 flex-grow mb-7">
                                            {(pkg.features || []).map((f: any, i: number) => {
                                                const txt = typeof f === "object" ? f.text : f;
                                                return (
                                                    <li key={i}
                                                        className="text-gray-600 text-[13px] text-center pb-3.5 last:pb-0"
                                                        style={{ borderBottom: "1px solid #f0f4f8" }}>
                                                        {txt}
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="text-gray-500 font-bold text-xs">Unlimited:</span>
                                            <svg className="h-6 w-6" viewBox="0 0 24 24" aria-label="Facebook">
                                                <rect width="24" height="24" rx="2" fill="#1877F2" />
                                                <path d="M13.7 21v-7h2.35l.35-2.73H13.7V9.53c0-.79.22-1.33 1.36-1.33h1.45V5.76a19.3 19.3 0 0 0-2.11-.11c-2.09 0-3.52 1.27-3.52 3.61v2.01H8.5V14h2.38v7h2.82Z" fill="white" />
                                            </svg>
                                            <svg className="h-5 w-7" viewBox="0 0 28 20" aria-label="YouTube">
                                                <rect width="28" height="20" rx="5" fill="#FF0000" />
                                                <path d="m11 5.8 7 4.2-7 4.2V5.8Z" fill="white" />
                                            </svg>
                                            <svg className="h-5 w-9" viewBox="0 0 36 20" aria-label="BDIX">
                                                <path d="M1 4.5c3-2 6-2 9 0" stroke="#f59e0b" strokeWidth="1.6" fill="none" />
                                                <path d="M1 7.5c3-2 6-2 9 0" stroke="#10b981" strokeWidth="1.6" fill="none" />
                                                <path d="M1 10.5c3-2 6-2 9 0" stroke="#ef4444" strokeWidth="1.6" fill="none" />
                                                <text x="11" y="14.5" fill="#0891d1" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700">BDIX</text>
                                            </svg>
                                        </div>

                                        <div className="text-center mb-8">
                                            <span className="text-4xl font-extrabold text-gray-900">৳{pkg.price}</span>
                                            <span className="text-gray-400 text-xs ml-1">+5% VAT/MONTH</span>
                                        </div>

                                        <Link
                                            href={pkg.ctaLink || "/contact"}
                                            className="mt-auto w-full text-white font-bold py-3.5 rounded-full text-center text-[13px] tracking-wide transition-all shadow-md hover:opacity-90 hover:shadow-lg"
                                            style={{ background: `linear-gradient(135deg, var(--navy) 0%, ${accent} 100%)` }}
                                        >
                                            + GET ONLINE REGISTER
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* Keeps the pricing cards visibly separated from the site footer. */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
        </div>
    );
}
