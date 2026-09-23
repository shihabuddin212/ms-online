import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import { Users, Code, Server, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Ms Online",
    description: "Learn more about Ms Online, your trusted internet service provider.",
};

export default function AboutPage() {
    return (
        <div className="w-full">
            {/* ── Header ── */}
            <Section variant="white" size="sm" className="text-center pb-8 border-b border-gray-100" style={{ paddingTop: "1.2cm" }}>
                <Container className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase mb-8" style={{ color: "var(--navy)" }}>
                        ABOUT US
                    </h1>
                    {/* Abstract illustration */}
                    <div className="w-full max-w-lg mb-8 relative hidden sm:flex justify-center">
                        <svg viewBox="0 0 400 120" className="w-full max-w-sm drop-shadow-md">
                            {/* Lines connecting nodes */}
                            <path d="M100 60 L180 30 L220 90 L300 60" stroke="var(--blue)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                            <path d="M80 80 L180 30" stroke="#94a3b8" strokeWidth="1" fill="none" />
                            <path d="M320 80 L220 90" stroke="#94a3b8" strokeWidth="1" fill="none" />
                            {/* Central node (person representation) */}
                            <rect x="180" y="20" width="40" height="80" rx="20" fill="var(--navy)" />
                            {/* Side nodes */}
                            <circle cx="100" cy="60" r="10" fill="#f8fafc" stroke="var(--blue)" strokeWidth="2" />
                            <circle cx="80" cy="80" r="6" fill="var(--blue-lt)" />
                            <circle cx="220" cy="90" r="12" fill="#f8fafc" stroke="var(--blue)" strokeWidth="2" />
                            <circle cx="300" cy="60" r="10" fill="#f8fafc" stroke="var(--blue)" strokeWidth="2" />
                            <circle cx="320" cy="80" r="6" fill="var(--blue-lt)" />
                        </svg>
                    </div>
                </Container>
            </Section>

            {/* ── Welcome Section ── */}
            <Section variant="light" size="md">
                <Container>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">Welcome To Ms Online</h2>
                        <p className="text-gray-500 text-[15px] max-w-4xl mx-auto leading-relaxed">
                            Ms Online is not simply another link in the chain of voice and data supply in Bangladesh. Our pioneering spirit is evidenced by the creation of a national, fully resilient, MPLS network and the continuous testing and adoption of emerging communications platforms. As a result, we have earned the reputation of a communications provider whose focus is on solidly addressing businesses&apos; communications requirements.
                        </p>
                    </div>

                    <div className="content-split content-split--five-seven items-center">
                        {/* Abstract Tech Illustration */}
                        <div className="w-full lg:w-5/12 flex justify-center">
                            <svg viewBox="0 0 300 300" className="w-full max-w-[280px]">
                                {/* Hologram Base */}
                                <ellipse cx="150" cy="250" rx="100" ry="25" fill="#f0f9ff" stroke="var(--blue-lt)" strokeWidth="2" />
                                <ellipse cx="150" cy="250" rx="80" ry="15" fill="var(--blue)" opacity="0.1" />
                                {/* Holographic Panels */}
                                <path d="M90 100 Q150 70 210 100 L210 220 Q150 250 90 220 Z" fill="url(#grad)" opacity="0.7" />
                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--blue-lt)" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="var(--blue)" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                                {/* Data lines on panel */}
                                {[120, 140, 160, 180, 200].map(y => (
                                    <line key={y} x1="105" y1={y} x2="195" y2={y} stroke="white" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" />
                                ))}
                                {/* Floating People (abstract) */}
                                <path d="M40 180 Q60 160 80 180 L80 200 L40 200 Z" fill="var(--navy)" />
                                <circle cx="60" cy="155" r="15" fill="#e74c3c" />
                                <path d="M260 180 Q240 160 220 180 L220 200 L260 200 Z" fill="var(--navy)" />
                                <circle cx="240" cy="155" r="15" fill="#f59e0b" />
                            </svg>
                        </div>

                        {/* Text and list */}
                        <div className="w-full lg:w-7/12 flex flex-col gap-6">
                            <p className="text-gray-500 text-[14.5px] leading-relaxed">
                                We are dedicated to serving customers. We achieve this not only through our extensive portfolio of internet/data connectivity, IP telephony and related services but also by simplifying the process of ordering, provisioning and supporting them. Ms Online is a modern internet service provider offering top-tier quality for homes and enterprises.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 mt-2">
                                {[
                                    "Corporate Internet & Data Connectivity",
                                    "High quality & reliable smart service",
                                    "Safe & Smarter Home Internet",
                                    "Secured Hosting & Web Development"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-800 font-bold text-[13px]">
                                        <CheckCircle size={16} className="flex-shrink-0" style={{ color: "var(--blue)" }} /> {item}
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="mt-4 self-start px-8 py-3 rounded-full text-white font-bold text-[13px] hover:-translate-y-0.5 transition shadow-lg" style={{ background: "var(--blue)" }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Guiding Principles ── */}
            <Section variant="white" size="md">
                <Container>
                    <div className="text-center mb-14">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">Our Guiding Principles</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16">
                        {[
                            { num: "01", title: "Professional Approach", desc: "Keep it Simple! There's no reason why individuals who wish to be involved in the internet need to have sophisticated technical knowledge and the ability to write and understand complicated codes." },
                            { num: "02", title: "Technology Review", desc: "Provide the best technology available! Those who know technology or need the most from it will be suitably impressed with our high-tech equipment. If it's current, we have it; if it's new, we'll be one of the first to get it!" },
                            { num: "03", title: "Affordable Services", desc: "Make it affordable! Ms Online programs are almost always one third to one half the cost of comparable services. This supports our mission of creating greater access to a greater number of people." },
                        ].map((g) => (
                            <div key={g.num} className="flex flex-col items-center text-center">
                                <div className="text-5xl font-light text-slate-700 mb-3 tracking-wide">{g.num}</div>
                                <div className="w-10 h-10 border rounded-full flex items-center justify-center mb-6" style={{ borderColor: "var(--blue)" }}>
                                    <div className="w-3 h-3 rounded-full" style={{ background: "var(--blue)" }}></div>
                                </div>
                                <h4 className="font-bold text-slate-800 text-[16px] mb-4 border-b border-gray-200 w-full pb-4">{g.title}</h4>
                                <p className="text-gray-500 text-[13px] leading-relaxed">{g.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* ── Mission & Vision ── */}
            <Section variant="light" size="md">
                <Container className="content-split content-split--equal content-split--reverse items-center">
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-5">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 border-b-2 border-slate-200 pb-3 w-full mb-2">
                            Mission & vision
                        </h2>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">
                            Ms Online is set out to do the things our customers want in an Internet service providing company. Which is to provide the most reliable service, coupled with the most sophisticated and modern equipment available.
                        </p>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">
                            We envision a world with ease of access and with hassle free service. We are striving to be an exceptional citizen in the virtual frontier.
                        </p>
                        <Link href="/contact" className="mt-4 px-8 py-3 rounded-full text-white font-bold text-[13px] hover:-translate-y-0.5 transition shadow-lg" style={{ background: "var(--blue)" }}>
                            Contact Us
                        </Link>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <svg viewBox="0 0 400 300" className="w-full max-w-[340px]">
                            {/* Base grid platform abstract */}
                            <path d="M200 240 L100 190 L200 140 L300 190 Z" fill="#e0f2fe" stroke="var(--blue-lt)" strokeWidth="2" />
                            <path d="M200 250 L100 200 L200 150 L300 200 Z" fill="var(--blue-lt)" opacity="0.5" />
                            {/* Abstract puzzle pieces forming the platform */}
                            <path d="M200 250 L150 225 L150 175 L200 200 Z" fill="var(--blue)" />
                            <path d="M200 250 L250 225 L250 175 L200 200 Z" fill="var(--navy)" />

                            {/* People */}
                            {/* Left person */}
                            <rect x="130" y="100" width="20" height="50" fill="var(--navy)" />
                            <circle cx="140" cy="80" r="15" fill="var(--blue-lt)" />
                            {/* Right person */}
                            <rect x="250" y="100" width="20" height="50" fill="var(--navy)" />
                            <circle cx="260" cy="80" r="15" fill="var(--blue)" />
                            {/* Center prominent person */}
                            <path d="M190 90 L210 90 L220 160 L180 160 Z" fill="var(--blue-lt)" />
                            <circle cx="200" cy="65" r="18" fill="var(--navy)" />
                            {/* Center person waving arm abstractly */}
                            <path d="M210 100 Q240 80 230 50" stroke="var(--blue)" strokeWidth="8" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>
                </Container>
            </Section>

            {/* ── Bottom CTA Banner ── */}
        </div>
    );
}
