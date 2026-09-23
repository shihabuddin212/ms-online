import { readFile } from "fs/promises";
import path from "path";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { Check, Zap, Star } from "lucide-react";
import { fetchServerApi } from "@/lib/api";

export const metadata = {
    title: "Home Internet | Ms Online",
    description: "Choose a home internet package that suits your needs and budget. All plans include free installation and unlimited data.",
};

// CMS content is always rendered at request time, never during the build.
export const dynamic = "force-dynamic";

async function getHomeInternetData() {
    try {
        const res = await fetchServerApi("/api/home-internet/packages");
        if (res.ok) {
            const data = await res.json();
            if (data && data.data && data.data.length > 0) {
                return {
                    title: "Best Home Internet Packages",
                    description: "Flexible plans for every budget. All packages include unlimited data and free installation.",
                    packages: data.data
                };
            }
        }
    } catch {
        // The local file keeps this sales page available during a short API outage.
    }
    // Fallback to local data.json file
    try {
        const file = await readFile(path.join(process.cwd(), "data.json"), "utf8");
        const json = JSON.parse(file);
        return json.homeInternet || null;
    } catch {
        return null;
    }
}

const defaultPackages: any[] = [
    {
        name: "Silver+", speed: "50 Mbps", price: "890",
        download: "50 Mbps", upload: "50 Mbps", support: "Email Support",
        badgeColor: "from-gray-200 to-gray-300 text-gray-700 border-gray-300",
    },
    {
        name: "Gold+", speed: "80 Mbps", price: "1,050",
        download: "80 Mbps", upload: "80 Mbps", support: "Phone Support",
        badgeColor: "from-amber-100 to-amber-200 text-amber-700 border-amber-300",
    },
    {
        name: "Platinum+", speed: "100 Mbps", price: "1,260",
        download: "100 Mbps", upload: "100 Mbps", support: "Priority Support",
        badgeColor: "from-cyan-100 to-sky-200 text-cyan-800 border-cyan-300",
        isPopular: true,
    },
    {
        name: "Diamond+", speed: "150 Mbps", price: "1,575",
        download: "150 Mbps", upload: "150 Mbps", support: "24/7 Support",
        badgeColor: "from-blue-100 to-blue-200 text-blue-700 border-blue-300",
    },
    {
        name: "Sapphire+", speed: "200 Mbps", price: "2,100",
        download: "200 Mbps", upload: "200 Mbps", support: "24/7 Priority Support",
        extra: "Free Router",
        badgeColor: "from-indigo-100 to-indigo-200 text-indigo-700 border-indigo-300",
    },
    {
        name: "Star+", speed: "250 Mbps", price: "3,150",
        download: "250 Mbps", upload: "250 Mbps", support: "Dedicated Support",
        extra: "Free Router",
        badgeColor: "from-purple-100 to-fuchsia-200 text-purple-700 border-purple-300",
    },
    {
        name: "Sky+", speed: "300 Mbps", price: "4,200",
        download: "300 Mbps", upload: "300 Mbps", support: "Dedicated Manager",
        extra: "Free Router",
        badgeColor: "from-fuchsia-100 to-pink-200 text-pink-700 border-pink-300",
        isMaxSpeed: true,
    },
];

export default async function HomeInternetPage() {
    const data = await getHomeInternetData();
    const title = data?.title || "Choose Your Perfect";
    const description = data?.description || "Flexible plans for every budget. All packages include unlimited data and free installation.";
    // If admin packages exist, use them, otherwise use fallback defaults
    const packages = (data?.packages && data.packages.length > 0) ? data.packages : defaultPackages;

    return (
        <div className="w-full pt-32 md:pt-36 pb-12 md:pb-16 space-y-12 md:space-y-16">

            {/* ── Page Hero ── */}
            <Section
                variant="light"
                size="sm"
                className="text-center py-16 md:py-20"
                style={{ marginTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container className="flex flex-col items-center gap-6 md:gap-8">
                    <h1 className="text-[34px] md:text-[44px] font-black tracking-tight leading-tight text-slate-800">
                        Simple, Transparent{" "}
                        <span style={{ color: "var(--blue)" }}>Pricing</span>
                    </h1>
                    <p className="text-gray-500 text-[15px] max-w-lg leading-relaxed">
                        Choose a package that suits your needs and budget. All plans include
                        free installation and unlimited data.
                    </p>
                </Container>
            </Section>

            {/* ── Pricing Intro ── */}
            <Section variant="light" size="sm" className="text-center pt-0 pb-8 md:pb-10">
                <Container className="flex flex-col items-center gap-6 md:gap-8">
                    <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[12px] md:text-[13px] font-extrabold uppercase tracking-[0.16em]"
                        style={{ color: "var(--blue)", background: "#eef7ff" }}>
                        <Star size={12} className="fill-current" /> Pricing Plans
                    </span>
                    <h2 className="text-[28px] md:text-[36px] font-extrabold text-slate-900 tracking-tight mt-1 md:mt-2 text-center">
                        {title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span style={{ color: "var(--blue)" }}>{title.split(" ").slice(-1)}</span>
                    </h2>
                    <p className="text-gray-500 text-[14px] max-w-lg leading-relaxed">
                        {description}
                    </p>
                </Container>
            </Section>

            {/* ── Pricing Grid ── */}
            <Section variant="light" size="md" className="pt-16 md:pt-20 pb-20 md:pb-24 mb-8 md:mb-12">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-10 md:gap-y-12 my-6 md:my-8 items-stretch">
                        {packages.map((pkg: any) => {
                            const isPop = !!pkg.isPopular;
                            const isMax = !!pkg.isMaxSpeed || (pkg.tagline && pkg.tagline.toLowerCase().includes("max speed"));

                            // Check if color is present, else fall back to slate base color
                            const accentColor = pkg.color || "#00a3ff";

                            // Dynamic display styling for Speed Badges based on accentColor
                            const speedStyle = pkg.color ? {
                                background: `${accentColor}11`,
                                color: accentColor,
                                borderColor: `${accentColor}40`
                            } : undefined;

                            return (
                                <div
                                    key={pkg.id || pkg.name}
                                    className="relative flex h-full flex-col rounded-[var(--card-radius)] bg-white hover-lift transition-all duration-300"
                                    style={{
                                        boxShadow: isPop
                                            ? `0 10px 30px ${accentColor}18`
                                            : "var(--card-shadow)",
                                        border: isPop
                                            ? `2px solid ${accentColor}`
                                            : "var(--card-border)",
                                        padding: "2.5rem 2rem",
                                    }}
                                >
                                    {/* Popular / Custom tagline badge */}
                                    {isPop && (
                                        <div className="absolute -top-3.5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-[9px] font-black tracking-widest uppercase shadow-md"
                                            style={{ background: accentColor }}>
                                            <Star size={10} className="fill-white" /> {pkg.tagline || "Most Popular"}
                                        </div>
                                    )}
                                    {!isPop && pkg.tagline && (
                                        <div className="absolute -top-3.5 right-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-[9px] font-black tracking-widest uppercase shadow-md"
                                            style={{ background: "#475569" }}>
                                            {pkg.tagline}
                                        </div>
                                    )}

                                    {/* Admin Image Upload Output */}
                                    {pkg.image && (
                                        <div className="mb-4 text-center mt-2">
                                            <img src={pkg.image} alt={pkg.name} width={120} height={120} className="mx-auto block object-cover rounded-md border border-gray-100 shadow-sm" />
                                        </div>
                                    )}

                                    {/* Speed pill */}
                                    <div className={`self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-black border mb-6 ${pkg.color ? "" : pkg.badgeColor || "from-gray-200 to-gray-300 text-gray-700 border-gray-300"}`}
                                        style={speedStyle}>
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        {pkg.speed}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-[21px] font-extrabold text-slate-800 mb-2">{pkg.name}</h3>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-1 mb-8">
                                        <span className="text-[11px] font-bold text-slate-400">TK</span>
                                        <span className="text-[38px] font-black tracking-tight text-slate-900">{pkg.price}</span>
                                        <span className="text-[11px] font-bold text-slate-400">/{pkg.period || "month"}</span>
                                    </div>

                                    {/* Features List (Supports backend custom list items) */}
                                    <ul className="w-full flex flex-col gap-4 mb-10 flex-grow">
                                        {pkg.features && pkg.features.length > 0 ? (
                                            pkg.features.map((feat: any, idx: number) => {
                                                const featureText = typeof feat === "object" ? feat.text : feat;
                                                return (
                                                    <li key={idx} className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                                                        <Check size={15} strokeWidth={3} className="text-emerald-500 shrink-0" />
                                                        {featureText}
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            <>
                                                <li className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                                                    <Check size={15} strokeWidth={3} className="text-emerald-500 shrink-0" />
                                                    {pkg.download || pkg.speed || "50 Mbps"} Download
                                                </li>
                                                <li className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                                                    <Check size={15} strokeWidth={3} className="text-emerald-500 shrink-0" />
                                                    {pkg.upload || pkg.speed || "50 Mbps"} Upload
                                                </li>
                                                <li className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                                                    <Check size={15} strokeWidth={3} className="text-emerald-500 shrink-0" />
                                                    Unlimited Data
                                                </li>
                                                <li className="flex items-center gap-3 text-[13px] font-medium text-slate-600">
                                                    <Check size={15} strokeWidth={3} className="text-emerald-500 shrink-0" />
                                                    {pkg.support || "Priority Support"}
                                                </li>
                                            </>
                                        )}
                                    </ul>

                                    {/* CTA */}
                                    <Link href={pkg.ctaLink || "/contact"}
                                        className="mt-auto block w-full text-center py-3 rounded-full text-[13px] font-bold tracking-wide transition-all"
                                        style={isPop
                                            ? { background: accentColor, color: "#fff", marginBlockStart: "0.3cm" }
                                            : { background: "#fff", color: accentColor, border: `2px solid ${accentColor}30`, marginBlockStart: "0.3cm" }
                                        }
                                    >
                                        Get {pkg.name} →
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* Keeps the last package row visibly separated from the footer. */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
        </div>
    );
}
