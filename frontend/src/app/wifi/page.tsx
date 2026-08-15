import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import { Check, Wifi, MapPin } from "lucide-react";
import { fetchServerApi } from "@/lib/api";

export const metadata: Metadata = {
    title: "WiFi Zone | Ms Online",
    description: "Stay connected anywhere with Ms Online WiFi Zones. Free for subscribers.",
};

export const dynamic = "force-dynamic";

const fallbackWifiZones = [
    "Bibir Pokurpar - Barisal", "DC Park - Khagrachari", "Dhalapara Union", "Dharmasagar Park - Comilla",
    "Diabari - Dhaka", "EPZ More - Nilphamari", "Jackob Tower - Charfession", "Jhenaidah Bus Terminal",
    "Kabi Nazrul University - Trisal", "M M College - Jashore", "Panchdona More - Narsingdi", "Railway Station - Sreemangal",
    "Saidpur Railway Station", "Shahrasti Bazar - Chandpur", "Sheyalkol College Road - Sirajganj", "Zindabazar - Sylhet"
];

async function getWifiZones() {
    try {
        const response = await fetchServerApi("/api/locations/wifi");
        if (!response.ok) throw new Error("Could not load WiFi zones");

        const payload: { data?: Array<{ name?: string }> } = await response.json();
        const zones = payload.data || [];
        const names: string[] = zones
            .map((item: { name?: string }) => item.name?.trim())
            .filter((name: string | undefined): name is string => Boolean(name));

        return names.length ? names : fallbackWifiZones;
    } catch {
        return fallbackWifiZones;
    }
}

export default async function WifiZonePage() {
    const wifiZones = await getWifiZones();

    return (
        <div className="w-full">
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />
            {/* ── Hero Banner ── */}
            <Section variant="white" size="sm" className="pt-8">
                <Container>
                    <div
                        className="relative flex w-full flex-col overflow-hidden rounded-3xl shadow-xl md:flex-row"
                        style={{ background: "var(--navy)", overflow: "hidden" }}
                    >

                        {/* Text */}
                        <div
                            className="relative z-10 flex w-full flex-col justify-center text-white md:w-1/2"
                            style={{ padding: "clamp(1.5rem, 4vw, 3.5rem)" }}
                        >
                            <h1 className="m-0 text-3xl font-extrabold leading-tight md:text-5xl">
                                Ms Online <br />
                                <span style={{ color: "var(--blue-lt)" }}>WiFi Zone</span>
                            </h1>
                            <p className="mb-0 mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
                                Stay connected anywhere with Ms Online WiFi Zones. Enjoy seamless internet access across the country with high-speed, secure, and reliable connectivity.
                            </p>
                        </div>

                        {/* Illustration side */}
                        <div className="w-full md:w-1/2 relative bg-black/20 flex flex-col items-center justify-center p-8">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                            {/* Abstract connection illustration */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-2xl relative" style={{ background: "var(--blue)" }}>
                                    <div className="absolute w-full h-full rounded-full animate-ping opacity-20" style={{ background: "var(--blue-lt)" }}></div>
                                    <Wifi size={40} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-wide">CONNECT ANYWHERE</h3>
                                <div className="flex gap-4 mt-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">📱</div>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">💻</div>
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">🎓</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* ── Intro ── */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
            <Section variant="light" size="md">
                <Container className="content-split content-split--equal items-center">
                    <div className="w-full lg:w-1/2">
                        {/* Abstract location placeholder instead of image */}
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1a2a44 0%, #0d1522 100%)" }}>
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#5bc8e8 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col items-center max-w-[200px]">
                                <Wifi size={32} style={{ color: "var(--blue-lt)" }} className="mb-2" />
                                <span className="font-bold text-white tracking-widest text-[12px] uppercase mb-1">Ms Online</span>
                                <span className="font-bold text-white bg-red-600 px-3 py-1 rounded-sm text-[10px]">WIFI ZONE</span>
                                <span className="text-white/50 text-[10px] mt-2 font-mono">09639 116 116</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                            Ms Online <span style={{ color: "var(--blue)" }}>WiFi Zone</span>
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            Ms Online WiFi Zones are designed to bring fast and reliable internet access to public locations across Bangladesh. Whether you are traveling, studying, or working remotely, our WiFi Zones ensure you stay connected without interruption.
                        </p>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-2">
                            All Ms Online broadband subscribers can access these zones completely free of charge. Non-subscribers can easily connect using affordable coupon-based access. Our network is built with enterprise-grade infrastructure ensuring high availability, speed, and security.
                        </p>
                        <ul className="flex flex-col gap-3">
                            {[
                                "Free for Ms Online subscribers",
                                "Low-cost access for non-subscribers",
                                "High-speed broadband connectivity",
                                "Secure and monitored network",
                                "Available nationwide"
                            ].map((li, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-[14.5px] font-medium text-slate-700">
                                    <Check size={16} strokeWidth={3} style={{ color: "var(--blue)" }} /> {li}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Container>
            </Section>

            {/* ── Locations Grid ── */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />
            <Section variant="white" size="md">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-[28px] font-extrabold text-slate-800 mb-2">Available WiFi Zones</h2>
                        <div className="w-14 h-1 rounded-full mx-auto" style={{ background: "var(--blue-lt)" }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {wifiZones.map((zone) => (
                            <div key={zone} className="bg-white border border-gray-100 shadow-sm rounded-xl px-5 py-4 flex items-center hover:shadow-md transition-shadow cursor-default">
                                <MapPin size={16} className="mr-3 flex-shrink-0" style={{ color: "var(--blue)" }} />
                                <span className="text-[13px] font-medium text-slate-700">{zone}</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Keeps the final WiFi zone list visibly separated from the footer. */}
            <div aria-hidden="true" className="h-12 bg-white md:h-16" />

        </div>
    );
}
