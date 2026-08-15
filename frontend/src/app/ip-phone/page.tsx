import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { fetchServerApi } from "@/lib/api";

export const metadata: Metadata = {
    title: "IP Phone | Ms Online",
    description: "Ms Online IP Phone App — Call local and international numbers at the lowest rates. FREE app-to-app calls, video calls, group chats and more.",
};

export const dynamic = "force-dynamic";

const DEFAULT_PACKAGES = [
    {
        id: "ip-phone-plan", name: "MS ONLINE IP PHONE", speed: "App Call Package", price: "0.35 / min",
        period: "Call Rate", color: "#0f2542", isPopular: true,
        features: [
            { text: "Talk to any number 24 hours by 35 paisa per minute call rate. (15% VAT applicable)" },
            { text: "Every second pulse — pay only for what you use." },
            { text: "FREE talk to any IP number." },
            { text: "No expiry date for account balance." },
            { text: "Allows you to share file and make video call, audio call & group chat." }
        ]
    }
];

const highlights = [
    { icon: "📞", label: "35 Paisa/min", desc: "Talk to local operators" },
    { icon: "🆓", label: "FREE Calls", desc: "App-to-app calls always free" },
    { icon: "🎥", label: "Video Calls", desc: "HD quality video calling" },
    { icon: "💬", label: "Group Chat", desc: "IM & group messaging" },
    { icon: "📁", label: "File Share", desc: "Share files instantly" },
    { icon: "🔐", label: "Secure", desc: "Encrypted communication" },
];

async function getIpPhonePackages() {
    try {
        const res = await fetchServerApi("/api/ip-phone/packages");
        if (res.ok) {
            const data = await res.json();
            if (data?.data?.length > 0) return data.data;
        }
    } catch {
        // Keep the page available with curated defaults while the API restarts.
    }
    return DEFAULT_PACKAGES;
}

export default async function IPPhonePage() {
    const packages = await getIpPhonePackages();

    return (
        <div className="w-full">

            {/* ── Page Header ── */}
            <Section
                variant="white"
                size="sm"
                className="pb-5 md:pb-6"
                style={{ marginTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--blue)" }}>
                            Voice & Calling Services
                        </p>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider mb-2" style={{ color: "var(--navy)" }}>
                            MS ONLINE IP PHONE
                        </h1>
                        <div className="w-14 h-1 rounded-full" style={{ background: "var(--blue-lt)" }} />
                    </div>
                    {/* Phone illustration */}
                    <div className="hidden sm:flex items-center justify-center w-44 h-44">
                        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                            <circle cx="100" cy="100" r="95" fill="#f0f9ff" stroke="#dbeafe" strokeWidth="2" />
                            <rect x="65" y="30" width="70" height="140" rx="12" fill="var(--navy)" />
                            <rect x="70" y="42" width="60" height="110" rx="6" fill="#1a1a2e" />
                            <rect x="88" y="34" width="24" height="4" rx="2" fill="#3a4a6a" />
                            <circle cx="100" cy="158" r="5" fill="#3a4a6a" />
                            <rect x="72" y="44" width="56" height="108" rx="5" fill="#0d2542" opacity="0.8" />
                            <text x="100" y="98" textAnchor="middle" fill="var(--blue-lt)" fontSize="28" fontWeight="bold">IP</text>
                            <text x="100" y="116" textAnchor="middle" fill="white" fontSize="10">PHONE</text>
                            <path d="M50 70 Q100 35 150 70" stroke="var(--blue-lt)" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4 3" />
                            <path d="M60 55 Q100 25 140 55" stroke="var(--blue)" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="4 3" />
                        </svg>
                    </div>
                </Container>
            </Section>

            {/* ── Description ── */}
            <Section variant="light" size="sm" className="py-5 md:py-6">
                <Container>
                    <p className="text-gray-600 text-[15px] leading-[1.85] max-w-3xl">
                        <strong className="text-gray-900">Ms Online IP Phone App</strong> is a popular alternative to your Desk phones or Softphones
                        with dozens of premium features built into the application. It is an excellent mobile dialer App to call your friends
                        or family at affordable cost. App-to-App and App-to-any IPTSP Operator is <strong className="text-gray-800">absolutely free</strong>{" "}
                        while App-to-any Phone Operator (PSTN/Mobile) costs much lower than your traditional phones. Ms Online IP Phone App
                        will provide you with a unique phone number to make and receive phone calls securely from anywhere, anytime.
                        Simply download, register and enjoy high-quality phone calls, IM, Group Chat, Audio conferences, and more.
                    </p>
                </Container>
            </Section>

            {/* ── Pricing Card block ── */}
            <Section
                variant="white"
                size="md"
                className="pt-6 pb-6 md:pt-8 md:pb-8"
                style={{ marginTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container>
                    <div className="w-full max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                            Pricing &amp; Calling <span style={{ color: "var(--blue)" }}>Packages</span>
                        </h2>
                        <div
                            className="w-14 h-1 rounded-full"
                            style={{ background: "var(--blue-lt)", marginBottom: "clamp(32px, 3vw, 40px)" }}
                        />

                        <div className="grid min-w-0 grid-cols-1 gap-6">
                            {packages.map((pkg: any) => {
                                const accent = pkg.color || "#0f2542";
                                return (
                                    <div key={pkg.id || pkg.name} className="min-w-0 border border-gray-100 rounded-2xl p-6 shadow-sm bg-white hover-lift transition-all relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1.5" style={{ background: accent }} />
                                        {pkg.tagline && (
                                            <span className="absolute top-4 right-4 text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full bg-blue-50 text-blue-600">
                                                {pkg.tagline}
                                            </span>
                                        )}
                                        <h3 className="text-lg font-black text-slate-800 leading-snug mb-1">{pkg.name}</h3>
                                        <p className="text-[13px] text-gray-400 font-semibold mb-4">{pkg.speed}</p>

                                        <div className="my-5 flex items-baseline gap-1.5">
                                            <span className="text-3xl font-black text-slate-900">৳{pkg.price}</span>
                                            <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{pkg.period}</span>
                                        </div>

                                        <ul className="flex flex-col gap-2.5 border-t border-gray-50 pt-4 mb-6">
                                            {(pkg.features || []).map((f: any, i: number) => {
                                                const txt = typeof f === "object" ? f.text : f;
                                                return (
                                                    <li key={i} className="text-gray-600 text-[13px] flex items-start gap-2">
                                                        <span className="text-[var(--blue-lt)] font-bold">•</span>
                                                        <span>{txt}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <Link href={pkg.ctaLink || "/contact"} className="block text-center py-3 text-white rounded-xl text-[13px] font-bold tracking-wide transition hover:opacity-90 mt-auto"
                                            style={{ background: accent }}>
                                            Get Registered
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Feature list block ── */}
            <Section
                variant="light"
                size="md"
                className="pt-0 pb-8 md:pb-10"
                style={{ marginTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container>
                    <div className="w-full max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                            Features of Ms Online IP Phone App:
                        </h2>
                        <p className="min-w-0 text-gray-500 text-[14.5px] leading-relaxed mb-6">
                            Standard call rate packages with second pulse. Ideal for corporate extensions or personal communications worldwide. Make secure VoIP connections directly over high-speed internet.
                        </p>
                        <div className="flex min-w-0 flex-col gap-4">
                            {highlights.slice(0, 4).map((h, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-xl flex-shrink-0 border border-slate-100">
                                        {h.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-[14px] text-slate-800">{h.label}</h4>
                                        <p className="text-[13px] text-gray-500 leading-normal">{h.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Highlights Grid ── */}
            <Section
                variant="light"
                size="md"
                className="pt-0"
                style={{ marginTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                            Why Choose <span style={{ color: "var(--blue)" }}>Ms Online IP Phone?</span>
                        </h2>
                        <div className="w-14 h-1 rounded-full mx-auto" style={{ background: "var(--blue-lt)" }} />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {highlights.map((h) => (
                            <div key={h.label}
                                className="bg-white rounded-[var(--card-radius)] p-6 text-center hover-lift flex flex-col items-center gap-3"
                                style={{ boxShadow: "var(--card-shadow)", border: "var(--card-border)" }}>
                                <span className="text-3xl">{h.icon}</span>
                                <h4 className="font-extrabold text-[15px]" style={{ color: "var(--navy)" }}>{h.label}</h4>
                                <p className="text-gray-500 text-[13px]">{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Download CTA ── */}
            <Section variant="white" size="md">
                <Container>
                    <div className="content-split content-split--app items-center">
                        {/* Text */}
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
                                Download <span style={{ color: "var(--blue)" }}>Ms Online IP Phone</span> app today<br />
                                to enjoy the best call rates in the country.
                            </h2>
                            <p className="text-gray-500 text-[15px] mb-2">
                                Talk to any local operator for 35 paisa per minute and one second pulse.
                            </p>
                            <p className="text-gray-500 text-[15px] mb-8">
                                FREE calls to IP phone numbers, app-to-app video calls, audio calls, group chats and file sharing.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.softifybd.msonline&pcampaignid=web_share"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-[14px] transition hover:opacity-90 hover:-translate-y-0.5"
                                    style={{ background: "#1a1a2e", border: "1px solid #444" }}>
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.18 23.76a2 2 0 002.73.74l11.72-6.77-2.9-2.9L3.18 23.76zM21 10.27 18.57 8.9l-3.27 3.27 3.27 3.27L21 13.79a2 2 0 000-3.52zM2 1.65a2 2 0 00-.66 1.47v17.76c0 .6.24 1.12.66 1.47l.09.08 9.95-9.95v-.23L2.09 1.57 2 1.65zm12.16 11.61L5 20.41v.01l-1.82-1.82 8.98-8.98 1.82 1.82-.82.82z" />
                                    </svg>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] font-normal opacity-80">GET IT ON</div>
                                        <div className="text-[14px]">Google Play</div>
                                    </div>
                                </a>
                                <a href="#" className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-[14px] transition hover:opacity-90 hover:-translate-y-0.5"
                                    style={{ background: "#1a1a2e", border: "1px solid #444" }}>
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] font-normal opacity-80">Available on the</div>
                                        <div className="text-[14px]">App Store</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Phone mockup */}
                        <div className="flex-shrink-0">
                            <div className="relative w-52">
                                <div className="rounded-[2.5rem] p-2 shadow-2xl" style={{ background: "var(--navy)" }}>
                                    <div className="rounded-[2rem] overflow-hidden bg-black" style={{ height: "400px" }}>
                                        <div className="w-full h-full flex flex-col items-center justify-center"
                                            style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--blue) 100%)" }}>
                                            <svg viewBox="0 0 100 100" className="w-20 h-20 mb-3" fill="none">
                                                <circle cx="50" cy="50" r="45" fill="white" opacity="0.1" />
                                                <circle cx="50" cy="50" r="30" fill="white" opacity="0.15" />
                                                <text x="50" y="57" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">IP</text>
                                            </svg>
                                            <p className="text-white font-bold text-sm tracking-widest">MS ONLINE</p>
                                            <p className="text-white/70 text-xs mt-0.5">IP Phone</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <div className="w-16 h-1 rounded-full bg-white/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── FAQ / Contact CTA ── */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />

        </div>
    );
}
