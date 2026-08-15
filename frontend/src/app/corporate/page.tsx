import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
    title: "Corporate Internet | Ms Online",
    description: "Dedicated corporate internet solutions with SLA-backed uptime for your enterprise business.",
};

const features = [
    {
        title: "Cloud IP-PABX",
        desc: ["Enjoy the PABX system by connecting to our IP-PABX platform", "Zero Capex", "Scalable depending on your staffing needs"],
    },
    {
        title: "Free Talk Time",
        desc: ["Reduce call Costs"],
    },
    {
        title: "Domain Name Registration",
        desc: ["Establish your business identity on the world wide web", "Branding", "Improve Search Engine Ranking"],
    },
    {
        title: "Web Hosting",
        desc: ["Hosting opportunity for your website", "Domain-associated email address"],
    },
    {
        title: "Safe DNS",
        desc: ["Enables you to control internet access over your organization", "Clean Internet", "Increase productivity"],
    },
    {
        title: "Barracuda",
        desc: ["Shields against small-borne viruses, malwares and spams", "Protects your network from viruses and malwares", "Saves Internet Bandwidth"],
    },
    {
        title: "Redundant Link",
        desc: ["A backup link to keep your internet operational"],
    },
    {
        title: "Video Conferencing",
        desc: ["Online meeting with participants from remote places", "Save travel costs", "Demonstrate your product remotely"],
    },
    {
        title: "Complimentary Home Internet",
        desc: ["One Home internet connection for IT Manager for support from home", "One Home internet connection for working from home"],
    },
    {
        title: "Web Application Firewall (WAF)",
        desc: ["Protect your websites and applications against fraud or data theft", "Prevents Data Leak"],
    },
    {
        title: "Data Connectivity",
        desc: ["Leading-edge MPLS technology for absolute privacy", "Provides independence for increased resilience", "Features service level guarantees for latency, jitter and packet loss", "Enterprise-grade security and accessibility", "24/7 monitoring, management and support"],
    },
];

export default function CorporatePage() {
    return (
        <div className="w-full bg-[radial-gradient(circle_at_top,_rgba(91,200,232,0.08),_transparent_32%),linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)]">

            {/* ── Hero ── */}
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
                            Corporate <span style={{ color: "var(--blue)" }}>Internet</span> built for performance and reliability
                        </h1>
                        <p className="mt-6 max-w-xl text-[15px] leading-8 text-slate-600 md:text-[16px]">
                            Dedicated corporate internet solutions with SLA-backed uptime for your enterprise business.
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
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Corporate Sales Contact</p>
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
                                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600">Enterprise Solutions</p>
                                    <h2 className="mt-1 text-xl font-extrabold text-slate-900">CORPORATE INTERNET</h2>
                                </div>
                                <div className="rounded-2xl bg-sky-50 px-4 py-2 text-right">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">SLA Backed</p>
                                    <p className="text-sm font-extrabold text-sky-700">Business Grade</p>
                                </div>
                            </div>

                            <svg viewBox="0 0 240 170" className="h-auto w-full" fill="none">
                                <defs>
                                    <linearGradient id="corpGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#5bc8e8" stopOpacity="0.7" />
                                        <stop offset="100%" stopColor="#1a7abf" stopOpacity="0.08" />
                                    </linearGradient>
                                </defs>
                                <circle cx="184" cy="50" r="34" fill="#e8f4fb" />
                                <circle cx="184" cy="35" r="16" fill="#5bc8e8" opacity="0.28" />
                                <rect x="24" y="88" width="170" height="66" rx="12" fill="url(#corpGrad)" stroke="#dbeafe" strokeWidth="1.2" />
                                <rect x="40" y="102" width="120" height="40" rx="8" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                                <rect x="54" y="113" width="46" height="8" rx="4" fill="#d9eef8" />
                                <rect x="54" y="128" width="70" height="5" rx="2.5" fill="#eef2f7" />
                                <path d="M175 68 Q188 59 204 64" stroke="#1a7abf" strokeWidth="2" fill="none" />
                                <circle cx="208" cy="62" r="6" fill="#e8f4fb" stroke="#1a7abf" strokeWidth="1.2" />
                            </svg>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Features Intro ── */}
            <div aria-hidden="true" style={{ height: "clamp(64px, 7vw, 96px)" }} />

            <Section variant="light" size="sm" className="text-center py-14 md:py-18">
                <Container className="flex flex-col items-center gap-4 md:gap-5">
                    <span className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700 shadow-sm">
                        Explore Our Corporate Internet Features
                    </span>
                    <h2 className="max-w-3xl text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                        Let your business grow with us
                    </h2>
                    <div className="h-1 w-16 rounded-full" style={{ background: "var(--blue-lt)" }} />
                    <p className="max-w-2xl text-[15px] leading-8 text-slate-500">
                        We offer a full range of fast, superfast and ultrafast broadband packages
                    </p>
                </Container>
            </Section>

            {/* ── Feature Grid ── */}
            <Section variant="light" size="md" className="pt-4 md:pt-6 pb-16 md:pb-24">
                <Container>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {features.map((feat) => (
                            <div
                                key={feat.title}
                                className="feature-card group relative flex h-full min-w-0 items-start gap-4 overflow-hidden border border-slate-200 bg-white p-5 transition-all duration-200"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-sky-500" />
                                <div className="min-w-0 flex-1">
                                    <h4 className="mb-2 text-[16px] font-extrabold text-slate-900">{feat.title}</h4>
                                    <ul className="feature-card-list flex flex-col gap-2.5">
                                        {feat.desc.map((d, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[13px] leading-6 text-slate-500">
                                                <CheckCircle size={14} className="mt-1 flex-shrink-0 text-sky-600" />
                                                <span className="min-w-0 break-words">{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Keeps the final feature cards at least half an inch above the footer. */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />

        </div>
    );
}
