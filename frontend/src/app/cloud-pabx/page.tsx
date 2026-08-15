import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { Check } from "lucide-react";
import { fetchServerApi } from "@/lib/api";

export const metadata: Metadata = {
    title: "Cloud PABX | Ms Online",
    description: "Ms Online Cloud PABX — Best solution for voice communication. Enterprise-grade IP PABX packages with zero CAPEX.",
};

export const dynamic = "force-dynamic";

const DEFAULT_PLANS = [
    { id: "starter", name: "Starter", speed: "5 Extensions", price: "1,800", period: "Per Month", color: "#0f2542", isPopular: false, features: [{ text: "5 Extensions" }, { text: "IVR / Auto Attendant" }, { text: "Call Recording" }, { text: "Voicemail" }, { text: "Basic Support" }] },
    { id: "professional", name: "Professional", speed: "10 Extensions", price: "3,000", period: "Per Month", color: "#3b82f6", isPopular: true, features: [{ text: "10 Extensions" }, { text: "IVR / Auto Attendant" }, { text: "Call Recording" }, { text: "Voicemail" }, { text: "Conference Calling" }, { text: "Email Support" }] },
    { id: "business", name: "Business", speed: "20 Extensions", price: "5,500", period: "Per Month", color: "#0f2542", isPopular: false, features: [{ text: "20 Extensions" }, { text: "IVR / Auto Attendant" }, { text: "Call Recording" }, { text: "Voicemail" }, { text: "Conference & Group Calls" }, { text: "Priority Support" }] },
    { id: "enterprise", name: "Enterprise", speed: "50 Extensions", price: "12,000", period: "Per Month", color: "#0f2542", isPopular: false, features: [{ text: "50 Extensions" }, { text: "Advanced IVR" }, { text: "HD Call Recording" }, { text: "Voicemail to Email" }, { text: "Conference Bridge" }, { text: "24/7 Dedicated Support" }, { text: "Custom Integration" }] },
    { id: "premium", name: "Premium", speed: "100 Extensions", price: "20,000", period: "Per Month", color: "#0f2542", isPopular: false, features: [{ text: "100 Extensions" }, { text: "Advanced IVR" }, { text: "HD Call Recording" }, { text: "Voicemail to Email" }, { text: "Multi-Office Mode" }, { text: "24/7 Priority Support" }, { text: "CRM Integration" }, { text: "SLA Guarantee" }] },
    { id: "plus-business", name: "Plus Business", speed: "150 Extensions", price: "28,000", period: "Per Month", color: "#0f2542", isPopular: false, features: [{ text: "150 Extensions" }, { text: "Custom IVR Flow" }, { text: "HD Encrypted Recording" }, { text: "Voicemail to Email/SMS" }, { text: "Multi-Office Mode" }, { text: "Dedicated Account Manager" }, { text: "CRM + API Access" }, { text: "SLA Guarantee" }] },
];

const pabxFeatures = [
    { num: "01", title: "Auto Attendant (IVR)", desc: "Professionally route calls to the right department automatically." },
    { num: "02", title: "Desktop Extension", desc: "Use any device — PC, laptop, or IP phone — as your extension." },
    { num: "03", title: "Extension to Extension Calling", desc: "Free internal calls between all your team extensions." },
    { num: "04", title: "Find Me / Follow Me", desc: "Never miss a call — route to mobile when away from desk." },
    { num: "05", title: "Hotline Support", desc: "Dedicated hotline for customer service operations." },
    { num: "06", title: "Admin Control", desc: "Full web-based admin panel to manage users and settings." },
    { num: "07", title: "Action Board", desc: "Real-time dashboard for call monitoring and analytics." },
    { num: "08", title: "Puck Out Call", desc: "Intercept and redirect calls between agents dynamically." },
    { num: "09", title: "IVR (Interactive Voice Response)", desc: "Multi-level IVR menu with custom greetings." },
    { num: "10", title: "For Soft Phone", desc: "Compatible with all major softphone clients." },
    { num: "11", title: "Blacklist Management", desc: "Block unwanted numbers from reaching your system." },
    { num: "12", title: "Call Recording", desc: "Automatic recording of all inbound and outbound calls." },
];

const whyUs = [
    "Zero CAPEX — no hardware investment required",
    "Instant deployment in 24 hours",
    "Unlimited scalability as your team grows",
    "High availability with 99.9% uptime SLA",
    "Seamless integration with existing IT infrastructure",
    "24/7 Monitoring & professional technical support",
];

async function getPabxPlans() {
    try {
        const res = await fetchServerApi("/api/cloud-pabx/packages");
        if (res.ok) {
            const data = await res.json();
            if (data?.data?.length > 0) return data.data;
        }
    } catch {
        // Keep the page available with curated defaults while the API restarts.
    }
    return DEFAULT_PLANS;
}

export default async function CloudPabxPage() {
    const plans = await getPabxPlans();

    return (
        <div className="w-full">

            {/* ── Page Header ── */}
            <Section variant="white" size="sm">
                <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                            Business Communication
                        </p>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider mb-2" style={{ color: "var(--navy)" }}>
                            CLOUD PABX
                        </h1>
                        <div className="w-14 h-1 rounded-full" style={{ background: "var(--blue-lt)" }} />
                    </div>
                    <svg viewBox="0 0 220 150" fill="none" className="w-48 h-auto hidden sm:block">
                        <rect x="20" y="40" width="160" height="90" rx="10" fill="#f0f9ff" stroke="#dbeafe" strokeWidth="1.5" />
                        <rect x="35" y="55" width="70" height="50" rx="5" fill="var(--navy)" />
                        <rect x="38" y="58" width="64" height="44" rx="4" fill="#1a1a2e" />
                        {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => (
                            <rect key={`${r}-${c}`} x={42 + c * 14} y={62 + r * 10} width="10" height="7" rx="2" fill="#2a3a5a" />
                        )))}
                        <path d="M120 65 Q140 55 155 70 L148 82 Q138 76 130 80 L120 65Z" fill="var(--blue)" />
                        <path d="M120 65 Q110 80 115 95 L128 92 Q125 82 130 80 L120 65Z" fill="var(--blue-lt)" />
                        <path d="M160 50 Q170 42 180 50" stroke="var(--blue)" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <path d="M155 44 Q170 33 185 44" stroke="var(--blue-lt)" strokeWidth="2" fill="none" strokeLinecap="round" />
                        <circle cx="170" cy="56" r="3" fill="var(--blue)" />
                    </svg>
                </Container>
            </Section>

            {/* ── Intro ── */}
            <Section variant="light" size="sm" className="text-center">
                <Container className="flex flex-col items-center gap-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border"
                        style={{ color: "var(--blue)", borderColor: "var(--blue-lt)", background: "#f0f9ff" }}>
                        Best Solution for Voice Communication
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                        The Best for{" "}
                        <span style={{ color: "var(--blue)" }}>Voice Communication Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-[15px] max-w-2xl leading-relaxed">
                        Ms Online Cloud PABX is a cloud-based phone system designed for businesses that need enterprise-level
                        communication without the hardware overhead. Zero CAPEX, scalable, and always online — the smarter way to run your business phone system.
                    </p>
                    <div className="w-14 h-1 rounded-full" style={{ background: "var(--blue-lt)" }} />
                </Container>
            </Section>

            {/* ── Pricing Table ── */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />

            <Section variant="white" size="md">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                            PABX <span style={{ color: "var(--blue)" }}>Pricing Table</span>
                        </h2>
                        <div className="w-14 h-1 rounded-full mx-auto" style={{ background: "var(--blue-lt)" }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-8">
                        {plans.map((plan: any) => {
                            const isPopular = !!plan.isPopular;
                            const accent = plan.color || (isPopular ? "#3b82f6" : "#0f2542");
                            const headerBg = isPopular
                                ? `linear-gradient(135deg, #0f2a4d 0%, #1f64d6 100%)`
                                : `linear-gradient(135deg, var(--navy) 0%, #1e3a5f 100%)`;

                            return (
                                <div
                                    key={plan.id || plan.name}
                                    className={`flex flex-col overflow-hidden border bg-white transition-all duration-300 ${isPopular ? "scale-[1.01]" : ""}`}
                                    style={{
                                        borderRadius: "16px",
                                        boxShadow: isPopular ? `0 18px 36px ${accent}28` : "0 10px 24px rgba(15, 23, 42, 0.08)",
                                        borderColor: isPopular ? accent : "rgba(148, 163, 184, 0.28)",
                                    }}
                                >
                                    {/* Card Header */}
                                    <div className="relative px-6 pb-8 pt-7 text-center text-white"
                                        style={{ background: headerBg }}>
                                        {isPopular && (
                                            <div className="absolute right-4 top-4 rounded-full bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em]"
                                                style={{ color: accent }}>
                                                {plan.tagline || "Most Popular"}
                                            </div>
                                        )}
                                        {!isPopular && plan.tagline && (
                                            <div className="absolute right-4 top-4 rounded-full bg-white/12 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-slate-100">
                                                {plan.tagline}
                                            </div>
                                        )}
                                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/12 backdrop-blur-sm">
                                            {plan.image ? (
                                                <img src={plan.image} alt={plan.name} className="h-9 w-9 rounded-full object-cover" />
                                            ) : (
                                                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            )}
                                        </div>
                                        <h3 className="text-base font-extrabold uppercase tracking-[0.18em]">{plan.name}</h3>
                                        <p className="mt-1 text-[12px] text-white/80">{plan.speed}</p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="flex flex-grow flex-col bg-white px-6 pb-7 pt-6">
                                        <div className="mb-6 text-center">
                                            <span className="text-3xl font-extrabold text-slate-900">৳{plan.price}</span>
                                            <span className="ml-1 text-xs text-slate-400">+VAT/MONTH</span>
                                        </div>

                                        <ul className="mb-7 flex flex-grow flex-col gap-3.5">
                                            {(plan.features || []).map((f: any, i: number) => {
                                                const txt = typeof f === "object" ? f.text : f;
                                                return (
                                                    <li key={i} className="flex items-center gap-2.5 border-b border-slate-100 pb-3 text-[13px] text-slate-600 last:border-0 last:pb-0">
                                                        <Check size={14} strokeWidth={3} style={{ color: accent, flexShrink: 0 }} />
                                                        <span>{txt}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <Link href={plan.ctaLink || "/contact"}
                                            className="mt-auto block w-full rounded-full border border-transparent text-center text-[13px] font-bold tracking-[0.08em] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                                            style={isPopular
                                                ? { background: accent, color: "#fff", padding: "0.9rem 1rem" }
                                                : { background: "var(--navy)", color: "#fff", padding: "0.9rem 1rem" }
                                            }>
                                            Order Now
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* ── Features Grid (numbered) ── */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />

            <Section variant="light" size="md">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                            Features of{" "}
                            <span style={{ color: "var(--blue)" }}>Ms Online Cloud PABX</span>
                        </h2>
                        <div className="w-14 h-1 rounded-full mx-auto" style={{ background: "var(--blue-lt)" }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {pabxFeatures.map((feat) => (
                            <div key={feat.title}
                                className="bg-white rounded-[var(--card-radius)] p-6 hover-lift"
                                style={{ boxShadow: "var(--card-shadow)", border: "var(--card-border)" }}>
                                <h4 className="font-bold text-[14px] text-slate-800 mb-2">{feat.title}</h4>
                                <p className="text-gray-500 text-[13px] leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Why Ms Online PABX ── */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />

            <Section variant="white" size="md">
                <Container>
                    <div className="content-split content-split--two-three items-center">
                        <div className="w-full lg:w-2/5 flex justify-center">
                            <svg viewBox="0 0 300 280" fill="none" className="w-72">
                                <ellipse cx="150" cy="260" rx="120" ry="20" fill="#f0f4f8" />
                                <rect x="60" y="60" width="180" height="130" rx="12" fill="var(--navy)" />
                                <rect x="68" y="70" width="164" height="110" rx="8" fill="#1a1a2e" />
                                <rect x="72" y="74" width="156" height="102" rx="6" fill="#0d1a30" />
                                <rect x="80" y="82" width="80" height="8" rx="4" fill="var(--blue)" opacity="0.7" />
                                <rect x="80" y="96" width="60" height="5" rx="2.5" fill="#3a5a7a" />
                                {[0, 1, 2, 3].map(i => (
                                    <rect key={i} x="80" y={108 + i * 14} width={40 + i * 10} height="5" rx="2.5" fill="#2a4a6a" />
                                ))}
                                <rect x="165" y="95" width="55" height="80" rx="8" fill="#163760" />
                                <circle cx="192" cy="120" r="18" fill="var(--blue)" opacity="0.9" />
                                <path d="M184 117a10 10 0 0015 0" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M178 112 Q192 105 206 112" stroke="var(--blue-lt)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                <rect x="135" y="190" width="30" height="25" rx="3" fill="#0d2542" />
                                <rect x="110" y="215" width="80" height="8" rx="4" fill="#163760" />
                                <path d="M240 40 Q255 28 270 40" stroke="var(--blue)" strokeWidth="2" fill="none" strokeLinecap="round" />
                                <path d="M235 32 Q255 15 275 32" stroke="var(--blue-lt)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
                                <circle cx="255" cy="48" r="4" fill="var(--blue)" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                                THE SMARTER CHOICE
                            </p>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
                                Why{" "}
                                <span style={{ color: "var(--blue)" }}>Ms Online Cloud PABX?</span>
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {whyUs.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                                            style={{ background: "#f0f9ff", border: "2px solid var(--blue-lt)" }}>
                                            <Check size={14} strokeWidth={3} style={{ color: "var(--blue)" }} />
                                        </div>
                                        <p className="text-gray-700 text-[15px] leading-relaxed">{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10 flex gap-4">
                                <Link href="/contact"
                                    className="px-8 py-3.5 rounded-full font-bold text-white text-[14px] transition hover:-translate-y-0.5 hover:opacity-90 shadow-md"
                                    style={{ background: "var(--blue)" }}>
                                    Get a Quote
                                </Link>
                                <Link href="tel:09639116116"
                                    className="px-8 py-3.5 rounded-full font-bold text-[14px] transition hover:-translate-y-0.5 border-2"
                                    style={{ color: "var(--blue)", borderColor: "var(--blue)" }}>
                                    Call Us Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── CTA Banner ── */}
            {/* Keep the final page content clearly separated from the global footer. */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />
        </div>
    );
}
