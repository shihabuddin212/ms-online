import type { Metadata } from "next";
import Section from "@/components/Section";
import { fetchServerApi } from "@/lib/api";
import Container from "@/components/Container";
import Link from "next/link";
import { CheckCircle2, PhoneCall, MapPin, Search } from "lucide-react";

export const metadata: Metadata = {
    title: "Coverage Area | Ms Online",
    description: "Check if your area is covered by Ms Online's fast fiber network.",
};

export const dynamic = "force-dynamic";

const fallbackLocations = [
    "Mirpur", "Pallabi", "Kafrul", "Agargaon", "Sher-e-Bangla Nagar",
    "Mohammadpur", "Dhanmondi", "Kalabagan", "Green Road", "Tejgaon",
    "Farmgate", "Bijoy Sarani", "Uttara", "Turag", "Khilkhet",
    "Badda", "Rampura", "Banasree", "Aftabnagar", "Gulshan",
    "Banani", "Niketan", "Baridhara", "Bashundhara"
];

async function getCoverageLocations() {
    try {
        const response = await fetchServerApi("/api/locations/coverage");
        if (!response.ok) throw new Error("Could not load coverage areas");

        const payload: { data?: Array<{ name?: string }> } = await response.json();
        const locations: string[] = (payload.data || [])
            .map((item: { name?: string }) => item.name?.trim())
            .filter((name: string | undefined): name is string => Boolean(name));

        return locations.length ? locations : fallbackLocations;
    } catch {
        return fallbackLocations;
    }
}

export default async function CoveragePage() {
    const locations = await getCoverageLocations();

    return (
        <div className="w-full">
            {/* Header */}
            <Section
                variant="light"
                size="sm"
                className="text-center pb-8 border-b border-gray-100"
                style={{ paddingTop: "clamp(48px, 5vw, 64px)" }}
            >
                <Container className="flex flex-col items-center gap-4">
                    <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border"
                        style={{ color: "var(--blue)", borderColor: "var(--blue-lt)", background: "#f0f9ff" }}>
                        Coverage
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Our <span style={{ color: "var(--blue)" }}>Coverage Areas</span>
                    </h1>
                    <p className="text-gray-500 text-[15px] max-w-2xl mt-2 leading-relaxed">
                        Ms Online is rapidly expanding its fiber network across Dhaka.
                        Check if your area is covered and get connected today.
                    </p>
                </Container>
            </Section>

            {/* Keep the coverage labels comfortably separated from the page header. */}

            {/* Split Section */}
            <Section variant="white" size="lg">
                <Container className="content-split content-split--five-seven items-start">

                    {/* Left: Summary */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-6">
                        <span className="inline-block px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest border"
                            style={{ color: "var(--blue)", borderColor: "var(--blue-lt)", background: "#f0f9ff", alignSelf: "flex-start" }}>
                            Coverage Area
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                            We&apos;re Spread Across <br />
                            <span style={{ color: "var(--blue)" }}>All of Dhaka City</span>
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed">
                            Ms Online is rapidly expanding its fiber optic network across Dhaka. Check if your area is covered and get connected today.
                        </p>

                        <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-[1rem] p-4 text-center mt-2 shadow-sm">
                            <div className="flex flex-col justify-center">
                                <span className="text-2xl font-black text-slate-800">30+</span>
                                <span className="text-[11px] text-gray-400 font-bold uppercase mt-1">Areas Covered</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-2xl font-black" style={{ color: "var(--blue)" }}>10K+</span>
                                <span className="text-[11px] text-gray-400 font-bold uppercase mt-1">Active Users</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-2xl font-black" style={{ color: "var(--blue-lt)" }}>500km+</span>
                                <span className="text-[11px] text-gray-400 font-bold uppercase mt-1">Fiber Laid</span>
                            </div>
                        </div>

                        <button className="w-full py-4 text-center text-white rounded-full font-bold shadow-lg hover:-translate-y-0.5 transition-all mt-4 text-[14px]" style={{ background: "var(--blue)" }}>
                            View Coverage Map →
                        </button>
                    </div>

                    {/* Right: Area Grid */}
                    <div className="w-full lg:w-7/12 border border-gray-200 rounded-[var(--card-radius)] p-8 shadow-sm bg-white">
                        <h3 className="font-bold text-[14px] flex items-center gap-2 mb-6" style={{ color: "var(--blue)" }}>
                            <MapPin size={16} /> Available Coverage Areas
                        </h3>
                        <div className="w-full h-px bg-gray-100 mb-6"></div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                            {locations.map((loc) => (
                                <div key={loc} className="flex items-center gap-2">
                                    <CheckCircle2 size={13} style={{ color: "var(--blue-lt)" }} className="flex-shrink-0" />
                                    <span className="text-gray-600 text-[13px] font-medium">{loc}</span>
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-gray-100 mt-8 mb-4"></div>
                        <p className="text-center text-gray-400 text-[11px] font-semibold tracking-wider uppercase">+ More areas coming soon</p>
                    </div>
                </Container>
            </Section>

            {/* Keep the CTA label at least half an inch below the coverage content. */}

            {/* Bottom CTA Card */}
            <Section variant="white" className="pt-0">
                <Container>
                    <div className="w-full rounded-[var(--card-radius)] overflow-hidden shadow-xl p-10 md:p-14 text-center flex flex-col items-center"
                        style={{ background: "linear-gradient(135deg, #e8f4fb 0%, #f0f9ff 100%)", border: "var(--card-border)" }}>
                        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-6 bg-white"
                            style={{ color: "var(--blue)", borderColor: "var(--blue-lt)" }}>
                            READY TO CONNECT?
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                            Locate Our <span style={{ color: "var(--blue)" }}>Coverage Area</span>
                        </h2>
                        <p className="text-gray-500 text-[15px] max-w-lg mb-10">
                            Ms Online is spread almost everywhere in Dhaka city. Check the availability of all coverage areas and get connected today.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold transition-all hover:opacity-90 shadow-lg text-[14px]" style={{ background: "var(--blue)" }}>
                                <Search size={16} /> Check Coverage Area
                            </button>
                            <a href="tel:09639116116" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-800 font-bold border border-gray-200 transition-all hover:bg-gray-50 shadow-sm text-[14px]">
                                <PhoneCall size={16} /> Call Us Now
                            </a>
                        </div>
                        <Link href="/contact" className="mt-8 text-xs font-semibold text-gray-400 hover:text-gray-600 flex items-center gap-1">
                            Get a free consultation →
                        </Link>
                    </div>
                </Container>
            </Section>
            {/* Keeps the final coverage content visibly separated from the footer. */}
        </div>
    );
}
