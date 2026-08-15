import Link from "next/link";
import Container from "./Container";

const features = [
    "Corporate Internet & Data Connectivity",
    "Safe & Smarter Home Internet",
    "High Quality & Reliable IPTSP Service",
    "Secured Hosting & Web Development",
];

const services = [
    {
        title: "Corporate Internet",
        desc: "We offer safe internet access services with various service level descriptions for corporate businesses and SMEs.",
        href: "/corporate",
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="#1a7abf" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Home Internet",
        desc: "Ms Online provides an extensive range of high quality data & internet connectivity services throughout the country.",
        href: "/",
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="#1a7abf" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: "Hosting & Development",
        desc: "Ms Online offers hosting & web development solutions for any business with high availability and consistency.",
        href: "/hosting",
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="#1a7abf" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><path d="M8 21h8m-4-4v4" />
            </svg>
        ),
    },
    {
        title: "IPTSP",
        desc: "Ms Online IP Telephony services allow the opportunity to generate profitable and recurring monthly revenue.",
        href: "/ip-phone",
        icon: (
            <svg className="w-9 h-9" fill="none" stroke="#1a7abf" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
];

export default function ServicesSection() {
    return (
        /* Template uses RED bg — we use Ms Online deep navy */
        <section
            style={{
                background: "#0d2542",
                paddingTop: "clamp(5rem, 8vw, 8rem)",
                paddingBottom: "clamp(4rem, 6vw, 6rem)",
            }}
            className="w-full flex justify-center"
        >
            <Container className="content-split content-split--five-seven items-start">

                {/* ── Left ── */}
                <div className="flex min-w-0 flex-col items-start text-white space-y-4">
                    <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: "#5bc8e8" }}>
                        Your one stop smart internet solution!
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        What We Do?
                    </h2>
                    <h3 className="text-xl font-bold" style={{ color: "#a8d4f0" }}>
                        Super Fast &amp; Reliable Faster Network
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#aac4e0" }}>
                        Ms Online provides an extensive range of high quality data &amp; internet connectivity
                        services throughout the country. We offer safe internet access services with various service
                        level descriptions for corporate businesses and SMEs. Our IPTSP services allow the
                        opportunity to generate profitable and recurring monthly revenue for businesses.
                    </p>
                    <ul className="mt-4 w-full space-y-2">
                        {features.map(f => (
                            <li key={f} className="flex items-center gap-2 text-sm font-semibold text-white">
                                <span style={{ color: "#5bc8e8" }}>▸</span> {f}
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact" className="btn-dark mt-6 self-start">
                        Become a Client
                    </Link>
                </div>

                {/* ── Right 2×2 grid ── */}
                <div className="grid min-w-0 grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
                    {services.map((s, i) => (
                        <div key={i} className="srv-card hover-lift h-full min-w-0">
                            <div className="srv-card-icon">{s.icon}</div>
                            <h4 className="text-base font-bold mb-2" style={{ color: "#0d2542" }}>
                                {s.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                            <Link href={s.href} className="text-sm font-bold uppercase tracking-wide"
                                style={{ color: "#1a7abf" }}>
                                Learn More ›
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
