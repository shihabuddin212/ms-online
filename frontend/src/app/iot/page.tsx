"use client";
import { useState, useEffect } from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { Check, Shield, Bell, Cloud, Search, ArrowRight, Video, Calendar, ShoppingCart } from "lucide-react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const DEFAULT_PACKAGES = [
    {
        id: "iot-3d-basic",
        name: "3 DAYS STORAGE",
        price: "315.00",
        speed: "3 Days",
        tagline: "3 DAYS STORAGE",
        features: [{ text: "Cloud Storage" }],
        color: "#708090",
        period: "Valid for 30 Days",
        image: "",
        isPopular: false,
    },
    {
        id: "iot-3d-ai",
        name: "3 DAYS STORAGE + AI",
        price: "590.00",
        speed: "3 Days",
        tagline: "3 DAYS STORAGE + AI",
        features: [
            { text: "Cloud Storage" },
            { text: "Face Detection" },
            { text: "Human Detection" },
            { text: "Fire Detection" },
            { text: "Gun Detection" },
            { text: "Fight Detection" },
            { text: "Animal Detection" },
            { text: "Package Detection" },
            { text: "Vehicle Detection" }
        ],
        color: "#10b981",
        period: "Valid for 30 Days",
        image: "",
        isPopular: true,
    },
    {
        id: "iot-7d-basic",
        name: "7 DAYS STORAGE",
        price: "490.00",
        speed: "7 Days",
        tagline: "7 DAYS STORAGE",
        features: [{ text: "Cloud Storage" }],
        color: "#708090",
        period: "Valid for 30 Days",
        image: "",
        isPopular: false,
    },
    {
        id: "iot-7d-ai",
        name: "7 DAYS STORAGE + AI",
        price: "710.00",
        speed: "7 Days",
        tagline: "7 DAYS STORAGE + AI",
        features: [
            { text: "Cloud Storage" },
            { text: "Face Detection" },
            { text: "Human Detection" },
            { text: "Fire Detection" },
            { text: "Gun Detection" },
            { text: "Fight Detection" },
            { text: "Animal Detection" },
            { text: "Package Detection" },
            { text: "Vehicle Detection" }
        ],
        color: "#10b981",
        period: "Valid for 30 Days",
        image: "",
        isPopular: true,
    },
];

export default function IotPage() {
    const [packages, setPackages] = useState<any[]>(DEFAULT_PACKAGES);

    useEffect(() => {
        fetch(`${API_URL}/api/iot/packages`)
            .then(res => res.json())
            .then(data => {
                if (data.success && data.data && data.data.length > 0) {
                    setPackages(data.data);
                }
            })
            .catch(() => { });
    }, []);

    return (
        <div className="w-full">
            {/* ── Hero Banner ── */}
            <Section variant="white" size="sm" className="pt-8">
                <Container>
                    <div className="w-full rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative bg-white">
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 p-10 md:p-16 text-[var(--blue)] z-10 flex flex-col justify-center">
                            <h1 className="text-4xl md:text-[50px] font-black mb-4 leading-[1.1] tracking-tight">
                                SECURE AND <br />GUARANTEED
                            </h1>
                            <p className="text-[var(--blue)] text-[15.5px] leading-relaxed mb-8 max-w-sm font-medium">
                                Stay aware. Stay secure. SecureCam keeps every moment in clear focus.
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="flex gap-3">
                                    <Link href="#packages-section" className="px-6 py-3 bg-white font-bold rounded-lg text-[13px] hover:-translate-y-0.5 transition shadow-md inline-block text-center" style={{ color: "var(--navy)" }}>
                                        Buy Cloud Storage
                                    </Link>
                                    <Link href="/contact" className="px-6 py-3 bg-white font-bold rounded-lg text-[13px] hover:-translate-y-0.5 transition shadow-md inline-block text-center" style={{ color: "var(--navy)" }}>
                                        Buy Device
                                    </Link>
                                </div>
                                <Link href="/contact" className="self-start px-6 py-3 bg-white font-bold rounded-lg text-[13px] hover:-translate-y-0.5 transition shadow-md text-center" style={{ color: "var(--navy)" }}>
                                    Buy Device with Ms Online Internet Connection
                                </Link>
                            </div>
                        </div>

                        {/* Illustration Area */}
                        <div className="w-full md:w-1/2 relative bg-white flex items-center justify-center p-10 hidden sm:flex">
                            <svg viewBox="0 0 400 300" fill="none" className="w-full max-w-[320px]">
                                <rect x="20" y="20" width="360" height="260" rx="10" fill="#f8fafc" />
                                <circle cx="80" cy="80" r="30" stroke="var(--blue-lt)" strokeWidth="3" />
                                <circle cx="80" cy="80" r="10" fill="var(--blue)" />
                                <rect x="70" y="110" width="20" height="40" fill="var(--blue-lt)" />
                                <rect x="180" y="160" width="120" height="40" rx="5" stroke="#94a3b8" strokeWidth="2" />
                                <rect x="170" y="140" width="20" height="60" rx="3" stroke="#94a3b8" strokeWidth="2" />
                                <rect x="290" y="140" width="20" height="60" rx="3" stroke="#94a3b8" strokeWidth="2" />
                                <circle cx="320" cy="80" r="20" stroke="#94a3b8" strokeWidth="2" />
                                <path d="M290 140 Q320 90 350 140" stroke="#94a3b8" strokeWidth="2" />
                                <rect x="270" y="80" width="20" height="30" rx="2" fill="var(--navy)" />
                                <path d="M110 80 Q190 30 270 80" stroke="var(--blue)" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Intro ── */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />

            <Section variant="light" size="md">
                <Container className="content-split content-split--equal items-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        <h2 className="text-3xl font-extrabold text-slate-900 border-b-4 pb-2 self-start" style={{ borderColor: "var(--navy)" }}>
                            IoT <span style={{ color: "var(--blue)" }}>SecureCam</span>
                        </h2>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">
                            Ms Online is a premier provider of modern security solutions, committed to ensuring safety and peace of mind for our clients. With over a decade of industry expertise, we continue to innovate in surveillance and protection technologies. At the heart of our offerings is SecureCam — an advanced AI-powered surveillance solution designed to deliver smarter monitoring, real-time insights, and more proactive security.
                        </p>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed mb-4">
                            Our purpose is to provide enterprise-grade security platforms that unify advanced surveillance, intelligent analytics, and continuous professional monitoring.
                        </p>

                        <div className="flex gap-8 mt-2">
                            <div className="flex flex-col items-center text-center max-w-[140px]">
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 mb-3 text-blue-500">
                                    <Cloud size={24} />
                                </div>
                                <h4 className="font-bold text-[14px] text-slate-800">Cloud Management</h4>
                                <p className="text-[11px] text-gray-500 mt-1 leading-snug">Access, Manage and Control your Cameras</p>
                            </div>
                            <div className="flex flex-col items-center text-center max-w-[140px]">
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 mb-3 text-blue-500">
                                    <Bell size={22} />
                                </div>
                                <h4 className="font-bold text-[14px] text-slate-800">Smart Push</h4>
                                <p className="text-[11px] text-gray-500 mt-1 leading-snug">Get real-time text or image alert notifications on your phone</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
                        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex items-center justify-center relative overflow-hidden h-64">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50"></div>
                            <div className="z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full bg-slate-100 shadow-inner flex items-center justify-center border-4 border-white mb-[-10px] z-20">
                                    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center border-2 border-slate-600">
                                        <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700"></div>
                                        <div className="absolute w-12 h-12 rounded-full border border-slate-700"></div>
                                    </div>
                                </div>
                                <div className="w-32 h-20 bg-white rounded-t-full shadow-lg border-t border-gray-100 flex items-end justify-center pb-2 z-10">
                                    <span className="font-extrabold text-[10px]" style={{ color: "var(--navy)" }}>MS ONLINE</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center w-full max-w-md">
                            <p className="text-[12.5px] font-medium text-slate-700 mb-4 bg-blue-50 py-2 px-4 rounded-lg border border-blue-100">
                                📣 <strong style={{ color: "var(--navy)" }}>Exclusive Offer for Ms Online Customers!</strong> Call now at <span className="font-bold" style={{ color: "var(--blue)" }}>09639116116</span> to get your special offer.
                            </p>
                            <div className="flex flex-col gap-2">
                                <Link href="/contact" className="w-full py-3 text-white font-bold rounded-lg shadow-md hover:bg-slate-800 transition text-center" style={{ background: "var(--navy)" }}>
                                    Buy Device
                                </Link>
                                <Link href="/contact" className="w-full py-3 text-white font-bold rounded-lg shadow-md transition text-center" style={{ background: "var(--blue)" }}>
                                    Buy Device with Ms Online Internet Connection
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Pricing Grid ── */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />

            <Section variant="white" size="md" id="packages-section">
                <Container>
                    <div className="text-center flex flex-col items-center" style={{ marginBottom: "0.8cm" }}>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                            Choose Your <span className="relative inline-block pb-1" style={{ color: "var(--blue)" }}>Package<span className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-900 rounded-full" /></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {packages.map((pkg) => {
                            const isAi = pkg.tagline?.toLowerCase().includes("ai") || pkg.name?.toLowerCase().includes("ai");
                            return (
                                <div key={pkg.id || pkg.name} className="bg-white shadow-xl border border-slate-200 flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300 relative group" style={{ borderRadius: "10px" }}>
                                    {/* Top Right Overlay Tagline */}
                                    {pkg.tagline && (
                                        <div className="bg-yellow-400 text-slate-900 text-[10px] font-black uppercase py-1.5 px-3 rounded-bl-xl shadow-sm z-10 absolute top-0 right-0 tracking-wider">
                                            {pkg.tagline}
                                        </div>
                                    )}

                                    {/* Camera / Device Visual Box */}
                                    <div className="pt-10 pb-6 flex justify-center bg-slate-50 border-b border-gray-100 relative overflow-hidden">
                                        {pkg.image ? (
                                            /* Image fallback or user uploaded camera */
                                            <div className="w-24 h-24 rounded-full border-2 border-white shadow-md bg-white flex items-center justify-center overflow-hidden">
                                                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                                            </div>
                                        ) : (
                                            /* Beautiful Camera Shape mimicking design visual */
                                            <div className="w-20 h-24 flex flex-col items-center relative">
                                                {/* Black Lens on center top */}
                                                <div className="w-16 h-16 bg-slate-900 rounded-full border-4 border-white shadow-md flex items-center justify-center relative">
                                                    <div className="w-6 h-6 bg-slate-950 rounded-full flex items-center justify-center">
                                                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full opacity-80" />
                                                    </div>
                                                    <div className="absolute top-1.5 right-3 w-2 h-2 bg-white/20 rounded-full" />
                                                </div>
                                                {/* Stand curved part */}
                                                <div className="w-20 h-9 bg-white mt-1.5 rounded-t-full shadow-sm border border-gray-100" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Info Strip (Days Storage + Basic/AI Badge) */}
                                    <div className="flex justify-between items-center px-5 py-3.5 border-b border-gray-100 bg-white">
                                        <div className="flex items-center gap-1.5 text-gray-600 text-[12px] font-extrabold tracking-wide">
                                            <Video size={14} className="text-slate-400" /> {pkg.speed || "3 Days"}
                                        </div>
                                        <div className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md text-white shadow-sm ${isAi ? 'bg-emerald-500' : 'bg-slate-500'}`}>
                                            {isAi ? 'AI ENABLED' : 'Basic'}
                                        </div>
                                    </div>

                                    {/* Features Listed */}
                                    <div className="p-5 flex-grow bg-white text-center">
                                        <p className="text-[11px] font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
                                            {isAi ? (
                                                <span className="text-orange-500 flex items-center gap-1">✨ AI Detection:</span>
                                            ) : (
                                                <span className="text-slate-400 flex items-center gap-1">☁️ Basic Features:</span>
                                            )}
                                        </p>
                                        <div className="flex w-full justify-center">
                                            <ul className="flex flex-col items-start gap-3">
                                                {(pkg.features || []).map((f: any, idx: number) => {
                                                    const featureText = typeof f === 'object' ? (f.text || '') : f;
                                                    return (
                                                        <li key={idx} className="flex items-center gap-2.5 text-left text-[12.5px] font-bold text-slate-700">
                                                            <Check size={14} strokeWidth={3.5} className="text-blue-500 flex-shrink-0" />
                                                            <span>{featureText}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Price & Action footer */}
                                    <div className="border-t border-slate-100 bg-white p-5 text-center flex flex-col items-center">
                                        {/* Calendar validity */}
                                        <div className="flex items-center gap-1.5 text-[11px] text-blue-600 font-bold mb-2.5 bg-blue-50/80 border border-blue-100 px-3 py-1.5 rounded-full">
                                            <Calendar size={12} /> {pkg.period || "Valid for 30 Days"}
                                        </div>
                                        {/* Huge Price */}
                                        <p className="text-[28px] font-black mb-4 tracking-tight" style={{ color: "var(--navy)" }}>
                                            {pkg.price} <span className="text-[17px] font-extrabold text-slate-800">Tk</span>
                                        </p>
                                        {/* Action Button */}
                                        <Link href="/contact" className="w-full py-3.5 text-white font-extrabold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-[14px] flex items-center justify-center gap-2 group-hover:bg-blue-600" style={{ background: "var(--blue)", borderRadius: "10px" }}>
                                            <ShoppingCart size={15} /> Buy Storage
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* Keeps the last IoT package card visibly separated from the footer. */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />
        </div>
    );
}
