"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

/* ── SVG Slide Illustrations exactly matching Pic 1 style ── */

const HostingIllustration = () => (
    <svg viewBox="0 0 500 350" className="w-full h-full max-w-[420px]" fill="none">
        {/* Cloud with red outline in Pic 1 (we use brand blue/sky outline on white) */}
        <path
            d="M180 180 C150 180, 130 160, 130 130 C130 100, 155 80, 185 80 C200 50, 240 30, 280 30 C330 30, 370 70, 370 120 C395 120, 415 140, 415 165 C415 190, 395 210, 370 210"
            stroke="#1a7abf" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"
            opacity="0.85"
        />

        {/* Red/Blue neon cloud details */}
        <path
            d="M370 120 C370 70, 330 40, 280 40"
            stroke="#5bc8e8" strokeWidth="4.5" strokeLinecap="round"
        />

        {/* Server towers (three vertical blocks at bottom right of cloud) */}
        <g transform="translate(250, 110)">
            {/* Central Server Chassis */}
            <rect x="0" y="30" width="36" height="85" rx="3" fill="white" stroke="#334155" strokeWidth="2.5" />
            <line x1="5" y1="45" x2="31" y2="45" stroke="#334155" strokeWidth="2.5" />
            <line x1="5" y1="60" x2="31" y2="60" stroke="#334155" strokeWidth="2.5" />
            <circle cx="10" cy="75" r="2" fill="#5bc8e8" />
            <circle cx="18" cy="75" r="2" fill="#5bc8e8" />
            <circle cx="26" cy="75" r="2" fill="#34d399" />

            {/* Left Server Chassis */}
            <rect x="-48" y="45" width="36" height="70" rx="3" fill="white" stroke="#334155" strokeWidth="2.5" />
            <line x1="-43" y1="60" x2="-17" y2="60" stroke="#334155" strokeWidth="2.5" />
            <circle cx="-38" cy="75" r="2" fill="#5bc8e8" />
            <circle cx="-30" cy="75" r="2" fill="#34d399" />

            {/* Right Server Chassis */}
            <rect x="48" y="45" width="36" height="70" rx="3" fill="white" stroke="#334155" strokeWidth="2.5" />
            <line x1="53" y1="60" x2="79" y2="60" stroke="#334155" strokeWidth="2.5" />
            <circle cx="58" cy="75" r="2" fill="#34d399" />
            <circle cx="66" cy="75" r="2" fill="#5bc8e8" />
        </g>

        {/* Standing figure (pointing/managing servers) */}
        <g transform="translate(190, 110)">
            {/* Head */}
            <circle cx="20" cy="20" r="10" fill="#334155" />
            {/* Body / Coat */}
            <path d="M10 32 L30 32 L35 75 L5 75 Z" fill="#334155" />
            {/* Legs */}
            <rect x="8" y="75" width="8" height="30" rx="2" fill="#334155" />
            <rect x="24" y="75" width="8" height="30" rx="2" fill="#334155" />
            {/* Arm pointing */}
            <path d="M30 38 L45 28" stroke="#334155" strokeWidth="3.5" strokeLinecap="round" />
        </g>
    </svg>
);

const BroadbandIllustration = () => (
    <svg viewBox="0 0 500 350" className="w-full h-full max-w-[420px]" fill="none">
        {/* Large Globe wireframe style */}
        <circle cx="250" cy="170" r="110" stroke="#dae2eb" strokeWidth="2.5" />
        <ellipse cx="250" cy="170" rx="110" ry="40" stroke="#dae2eb" strokeWidth="2" />
        <ellipse cx="250" cy="170" rx="40" ry="110" stroke="#dae2eb" strokeWidth="2" />
        <line x1="250" y1="60" x2="250" y2="280" stroke="#dae2eb" strokeWidth="2" />
        <line x1="140" y1="170" x2="360" y2="170" stroke="#dae2eb" strokeWidth="2" />

        {/* Connected nodes */}
        <circle cx="250" cy="60" r="10" fill="#1a7abf" />
        <circle cx="250" cy="280" r="10" fill="#1a7abf" />
        <circle cx="140" cy="170" r="10" fill="#5bc8e8" />
        <circle cx="360" cy="170" r="10" fill="#0d2542" />

        <circle cx="180" cy="100" r="8" fill="#1a7abf" opacity="0.8" />
        <circle cx="320" cy="100" r="8" fill="#5bc8e8" opacity="0.8" />
        <circle cx="180" cy="240" r="8" fill="#0d2542" opacity="0.8" />
        <circle cx="320" cy="240" r="8" fill="#1a7abf" opacity="0.8" />

        {/* Central hub router */}
        <rect x="220" y="145" width="60" height="50" rx="6" fill="white" stroke="#0d2542" strokeWidth="3" />
        <circle cx="250" cy="170" r="8" fill="#5bc8e8" />
        <line x1="235" y1="160" x2="265" y2="180" stroke="#0d2542" strokeWidth="2" />
        <line x1="235" y1="180" x2="265" y2="160" stroke="#0d2542" strokeWidth="2" />

        {/* Speed pulse lines */}
        <path d="M190 70 A120 120 0 0 1 310 70" stroke="#1a7abf" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
);

const PackageIllustration = () => (
    <svg viewBox="0 0 500 350" className="w-full h-full max-w-[420px]" fill="none">
        {/* Clean server/cloud database cluster */}
        <path d="M150 120 L250 70 L350 120 L250 170 Z" fill="#ffffff" stroke="#0d2542" strokeWidth="3" />
        <path d="M150 150 L250 100 L350 150 L250 200 Z" fill="#f8fafc" stroke="#0d2542" strokeWidth="3" />
        <path d="M150 180 L250 130 L350 180 L250 230 Z" fill="#e8f4fb" stroke="#1a7abf" strokeWidth="3" />

        {/* Floating network rings */}
        <ellipse cx="250" cy="120" rx="140" ry="60" stroke="#5bc8e8" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
        <circle cx="110" cy="120" r="8" fill="#5bc8e8" />
        <circle cx="390" cy="120" r="8" fill="#1a7abf" />

        {/* Center signal tower */}
        <line x1="250" y1="70" x2="250" y2="0" stroke="#0d2542" strokeWidth="3.5" />
        <circle cx="250" cy="0" r="8" fill="#ef4444" />
        <path d="M238 -10 Q250 -25 262 -10" stroke="#ef4444" strokeWidth="2.5" fill="none" />
        <path d="M230 -18 Q250 -40 270 -18" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
);

const slides = [
    {
        id: 1,
        category: "HOSTING & WEB DEVELOPMENT",
        cta: "Learn More",
        href: "/hosting",
        Illustration: HostingIllustration,
    },
    {
        id: 2,
        category: "IP PHONE APP SERVICE",
        cta: "Learn More",
        href: "/ip-phone",
        Illustration: BroadbandIllustration,
    },
    {
        id: 3,
        category: "IP TELEPHONY PORTAL",
        cta: "Learn More",
        href: "/ip-phone",
        Illustration: HostingIllustration,
    },
    {
        id: 4,
        category: "POPULAR BILL PACKAGES",
        cta: "View All Packages",
        href: "#packages",
        Illustration: PackageIllustration,
    },
    {
        id: 5,
        category: "HOME INTERNET SPEED",
        cta: "Get Connected",
        href: "/",
        Illustration: BroadbandIllustration,
    },
    {
        id: 6,
        category: "CORPORATE FIBER NET",
        cta: "Become a Client",
        href: "/corporate",
        Illustration: HostingIllustration,
    },
];

export default function HeroSlider() {
    const [cur, setCur] = useState(0);
    const [hovered, setHovered] = useState(false);
    const timer = useRef<NodeJS.Timeout | null>(null);

    const reset = () => { if (timer.current) clearTimeout(timer.current); };

    useEffect(() => {
        reset();
        if (!hovered) {
            timer.current = setTimeout(() => setCur(p => (p + 1) % slides.length), 2000);
        }
        return reset;
    }, [cur, hovered]);

    const slide = slides[cur];
    const { Illustration } = slide;

    // Split Category String to render matching Pic 1 Styling:
    // First word dark bold, Second word thin light, Third/rest medium silver-gray
    const renderCategoryTitle = (cat: string) => {
        const words = cat.split(" ");
        return (
            <h2 className="text-[26px] sm:text-[40px] md:text-[54px] font-extrabold tracking-wide uppercase select-none leading-[1.1] font-sans">
                <span style={{ color: "#333333" }} className="font-black">
                    {words[0]}{" "}
                </span>
                {words[1] && (
                    <span style={{ color: "#666666" }} className="font-light">
                        {words[1]}
                    </span>
                )}
                {words.slice(2).length > 0 && (
                    <span style={{ color: "#888888" }} className="font-medium block sm:inline">
                        {" "}{words.slice(2).join(" ")}
                    </span>
                )}
            </h2>
        );
    };

    return (
        <div
            className="relative bg-white overflow-hidden border-b border-gray-100 flex items-center justify-center w-full"
            style={{ minHeight: "480px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Active Slide Wrapper */}
            <div key={cur} className="slide-enter w-full flex justify-center">
                <Container className="content-split content-split--equal items-center py-16 md:py-20">

                    {/* Left Text: Exact minimalist design (Heading & Rounded Button only) */}
                    <div className="min-w-0 space-y-8 text-left">
                        {renderCategoryTitle(slide.category)}

                        <div className="pt-2">
                            <Link
                                href={slide.href}
                                className="btn-primary hover-lift text-white font-bold text-xs uppercase tracking-wider text-center"
                                style={{
                                    background: "#1a7abf",
                                    borderRadius: "9999px",
                                    padding: "14px 38px",
                                    boxShadow: "0 6px 15px rgba(26,122,191,0.2)"
                                }}
                            >
                                {slide.cta}
                            </Link>
                        </div>
                    </div>

                    {/* Right: Premium minimal illustration */}
                    <div className="min-w-0 flex h-[260px] items-center justify-center sm:h-[320px]">
                        <Illustration />
                    </div>

                </Container>
            </div>

            {/* Navigation Chevrons: Styled simply as clean floating icons at edges matching Pic 1 */}
            <button
                onClick={() => setCur(p => (p - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-slate-300 hover:text-[#1a7abf] transition-colors"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={36} strokeWidth={1.5} />
            </button>
            <button
                onClick={() => setCur(p => (p + 1) % slides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-slate-300 hover:text-[#1a7abf] transition-colors"
                aria-label="Next Slide"
            >
                <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            {/* Underlined slide index dots matching spacing of Pic 1 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCur(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        style={{
                            background: i === cur ? "#1a7abf" : "#cbd5e1",
                            transform: i === cur ? "scale(1.2)" : "scale(1)"
                        }}
                    />
                ))}
            </div>

            {/* Hover paused indicator */}
            {hovered && (
                <span className="absolute top-4 right-16 text-[9px] font-bold text-slate-300 uppercase tracking-widest">
                    Autoplay Paused
                </span>
            )}
        </div>
    );
}
