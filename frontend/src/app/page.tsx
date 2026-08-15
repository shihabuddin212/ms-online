"use client";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import Container from "@/components/Container";
import ClientSlider from "@/components/ClientSlider";
import Section from "@/components/Section";

// High Quality Isometric SVG for #1 Broadband Section (Welcome Section)
const WelcomeIllustration = () => (
  <svg viewBox="0 0 500 350" className="w-full h-auto max-w-[460px] animate-fade-in" fill="none">
    {/* Floor base */}
    <ellipse cx="250" cy="240" rx="200" ry="85" fill="#f8fafc" stroke="#edf2f7" strokeWidth="2" />
    <ellipse cx="250" cy="245" rx="160" ry="60" fill="#f1f5f9" />

    {/* Isometric Servers grid / Data Center Rack */}
    <g transform="translate(140, 110)">
      {/* Background blocks */}
      <path d="M0 40 L60 10 L120 40 L60 70 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      <path d="M0 40 L0 100 L60 130 L60 70 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      <path d="M60 70 L60 130 L120 100 L120 40 Z" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />

      {/* Laser glow lines */}
      <path d="M30 65 L90 35" stroke="#1a7abf" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 85 L90 55" stroke="#5bc8e8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 105 L90 75" stroke="#1a7abf" strokeWidth="1.5" strokeLinecap="round" />

      {/* Floating server nodes */}
      <circle cx="30" cy="65" r="2.5" fill="#4ade80" />
      <circle cx="30" cy="85" r="2.5" fill="#38bdf8" />
      <circle cx="30" cy="105" r="2.5" fill="#facc15" />
    </g>

    {/* Isometric Screen Terminal */}
    <g transform="translate(260, 130)">
      {/* Front screen */}
      <path d="M0 30 L50 5 L100 30 L50 55 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
      <path d="M5 28 L48 6 L92 28 L48 50 Z" fill="#0d2542" />
      {/* Stand */}
      <path d="M45 52 L45 80 L55 80 L55 52 Z" fill="#94a3b8" />
      <ellipse cx="50" cy="80" rx="20" ry="8" fill="#64748b" />

      {/* Small bar charts on server screen */}
      <path d="M20 32 L35 24 M35 24 L50 32" stroke="#5bc8e8" strokeWidth="2" strokeLinecap="round" />
      <path d="M45 32 L60 24 M60 24 L75 32" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Multiple Isometric Characters/People interacting */}
    {/* Person 1 (Sitting at bottom-left corner) */}
    <g transform="translate(110, 200)">
      {/* Head */}
      <circle cx="20" cy="20" r="8" fill="#fde68a" />
      {/* Torso */}
      <path d="M10 28 L30 28 L35 55 L5 55 Z" fill="#1a7abf" />
      {/* Feet */}
      <rect x="8" y="55" width="8" height="15" rx="3" fill="#334155" />
      <rect x="24" y="55" width="8" height="15" rx="3" fill="#334155" />
    </g>

    {/* Person 2 (Standing pointing at dashboard) */}
    <g transform="translate(380, 170)">
      <circle cx="15" cy="15" r="7" fill="#fde68a" />
      <path d="M5 22 L25 22 L28 50 L2 50 Z" fill="#0d2542" />
      <rect x="5" y="50" width="6" height="18" rx="2" fill="#334155" />
      <rect x="19" y="50" width="6" height="18" rx="2" fill="#334155" />
      {/* Arm pointing */}
      <path d="M5 28 L-15 15" stroke="#fde68a" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// High Quality Isometric SVG for packages (Sitting on smart device)
const PackageIllustration = () => (
  <svg viewBox="0 0 500 350" className="w-full h-auto max-w-[460px] animate-fade-in" fill="none">
    {/* Background platform ellipse */}
    <ellipse cx="250" cy="250" rx="190" ry="75" fill="#f8fafc" stroke="#edf2f7" strokeWidth="2" />
    <ellipse cx="250" cy="253" rx="150" ry="50" fill="#f1f5f9" />

    {/* Large isometric smart interface pad */}
    <g transform="translate(100, 170)">
      {/* Dark screen border */}
      <path d="M0 40 L150 0 L300 40 L150 80 Z" fill="#334155" />
      {/* Screen inner */}
      <path d="M5 38 L150 3 L295 38 L150 73 Z" fill="#0d2542" />
      {/* Glare */}
      <path d="M50 49 L150 14 L250 49 L150 64 Z" fill="#1e293b" opacity="0.4" />
      {/* Grid line details on screen */}
      <path d="M150 73 L150 3" stroke="#1a7abf" strokeWidth="1" opacity="0.3" />
      <path d="M5 38 L295 38" stroke="#1a7abf" strokeWidth="1" opacity="0.3" />

      {/* Floating browser tabs */}
      <g transform="translate(20, -50)">
        <path d="M0 15 L50 0 L100 15 L50 30 Z" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
        <line x1="20" y1="12" x2="60" y2="4" stroke="#1a7abf" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="18" x2="80" y2="12" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(180, -20)">
        <path d="M0 15 L50 0 L100 15 L50 30 Z" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
        <circle cx="30" cy="12" r="3" fill="#34d399" />
        <line x1="45" y1="10" x2="80" y2="3" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>

    {/* User sitting on top of screen pad */}
    <g transform="translate(200, 90)">
      {/* Laptop on lap */}
      <path d="M-40 60 L-10 50 L20 60 L-10 70 Z" fill="#e2e8f0" />
      <path d="M-10 50 L-10 30 L10 36 L10 57 Z" fill="#cbd5e1" />

      {/* Head */}
      <circle cx="2" cy="15" r="10" fill="#fde68a" />
      <path d="M-6 8 Q2 0 10 8" stroke="#3d2008" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Headphones */}
      <path d="M-10 15 Q2 3 14 15" stroke="#ef4444" strokeWidth="2.5" fill="none" />
      <circle cx="-10" cy="15" r="3" fill="#ef4444" />
      <circle cx="14" cy="15" r="3" fill="#ef4444" />

      {/* Torso */}
      <path d="M-15 25 L19 25 L24 55 L-20 55 Z" fill="#1a7abf" />

      {/* Arms holding laptop */}
      <path d="M-15 30 L-35 50" stroke="#fde68a" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M15 30 L-5 50" stroke="#fde68a" strokeWidth="4.5" strokeLinecap="round" />

      {/* Legs (hanging down) */}
      <path d="M-12 55 L-22 95 L-5 95" stroke="#334155" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 55 L2 95 L19 95" stroke="#334155" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Floating notifications / icons */}
    {/* Email Envelope */}
    <g transform="translate(60, 100)">
      <rect x="0" y="0" width="28" height="18" rx="2" fill="#ef4444" />
      <path d="M0 0 L14 10 L28 0" stroke="white" strokeWidth="1.5" fill="none" />
    </g>
    {/* Chat bubble icon */}
    <g transform="translate(370, 70)">
      <rect x="0" y="0" width="30" height="20" rx="4" fill="#3b82f6" />
      <path d="M8 20 L8 25 L15 20 Z" fill="#3b82f6" />
      <circle cx="8" cy="10" r="1.5" fill="white" />
      <circle cx="15" cy="10" r="1.5" fill="white" />
      <circle cx="22" cy="10" r="1.5" fill="white" />
    </g>
  </svg>
);

const pkgFeatures = [
  "70 Mbps Unlimited",
  "Fiber Optics",
  "BDIX Free",
  "24/7 Customer Support",
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ── 1. DYNAMIC HERO SLIDER ── */}
      <HeroSlider />

      {/* ── 2. WELCOME / TOP BROADBAND INTERNET PROVIDER ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-50 flex justify-center">
        <Container className="content-split content-split--equal items-center">

          {/* Left Text Block */}
          <div className="min-w-0 space-y-6">
            <span
              className="text-xs md:text-sm font-bold tracking-widest uppercase inline-block border-b-2 pb-1"
              style={{ color: "#1a7abf", borderColor: "#5bc8e8" }}
            >
              Welcome To Ms Online
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.1] text-slate-900">
              Top Broadband Internet <br className="hidden sm:inline" /> Provider
            </h1>

            <p className="text-gray-500 text-[14px] leading-relaxed max-w-xl">
              Ms Online has come a long way since its establishment. From small beginnings as a provider
              of dial-up &amp; radio link Internet access to local businesses, we have grown consistently and
              organically, as a communications provider serving a diverse portfolio of business class voice
              and data services.
            </p>

            <div className="pt-2">
              <Link
                href="/corporate"
                className="btn-primary inline-flex items-center gap-2 hover:-translate-y-0.5"
                style={{ background: "#1a7abf", borderRadius: "9999px", padding: "12px 32px" }}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right High-Quality Isometric Illustration */}
          <div className="min-w-0 flex items-center justify-center">
            <WelcomeIllustration />
          </div>
        </Container>
      </section>

      {/* ── 3. CLIENT / PARTNER LOGO SLIDER ── */}
      <ClientSlider />
      <div
        aria-hidden="true"
        className="bg-white"
        style={{ height: "clamp(2.5rem, 5vw, 4.5rem)" }}
      />

      {/* ── 4. WHAT WE DO? SECTION ── */}
      <ServicesSection />
      <div
        aria-hidden="true"
        className="bg-white"
        style={{ height: "clamp(3rem, 6vw, 5.5rem)" }}
      />

      {/* ── 5. MOST POPULAR PACKAGE SECTION ── */}
      <Section
        variant="white"
        size="md"
        id="packages"
        style={{
          paddingTop: "clamp(5rem, 8vw, 8rem)",
          paddingBottom: "clamp(6rem, 10vw, 10rem)",
        }}
      >
        <Container>
          <div className="text-center mb-16 flex flex-col items-center gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "var(--navy)" }}>
              Most Popular Package
            </h2>
            <div className="w-16 h-1 rounded-full" style={{ background: "var(--blue)" }} />
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-x-20 lg:gap-y-0">
            {/* Card */}
            <div className="w-full max-w-[380px] justify-self-center bg-white rounded-[var(--card-radius)] overflow-hidden hover-lift flex flex-col"
              style={{
                boxShadow: "var(--card-shadow)",
                border: "var(--card-border)",
                minHeight: "clamp(24rem, 34vw, 27rem)",
              }}>
              <div className="text-white text-center pb-12 pt-10 px-6"
                style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)" }}>
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold tracking-widest uppercase">PRIMARY+</h3>
              </div>

              <div className="pt-8 pb-10 px-8 flex flex-1 flex-col items-center justify-between">
                <div className="flex items-baseline mb-6 gap-1">
                  <span className="text-[14px] font-bold text-slate-400 uppercase">BDT</span>
                  <span className="text-5xl font-black text-slate-800 tracking-tight">1260</span>
                  <span className="text-xs text-slate-500 font-bold uppercase ml-1">+5% VAT / month</span>
                </div>
                <ul className="w-full flex flex-col gap-4 mb-8">
                  {pkgFeatures.map((feat, idx) => (
                    <li key={idx} className="text-slate-600 text-[13.5px] text-center pb-4 border-b last:border-0 border-slate-100 font-medium">
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/home-internet"
                  className="font-bold text-[13.5px] tracking-wide uppercase hover:underline flex items-center gap-1.5 transition"
                  style={{ color: "var(--blue)" }}>
                  View All Packages →
                </Link>
              </div>
            </div>

            <div className="min-w-0 flex items-center justify-center">
              <PackageIllustration />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CHAT ACTION WIDGET ── */}
      <Link
        href="/contact"
        aria-label="Contact Ms Online"
        className="chat-btn hover-lift"
        style={{
          background: "#1a7abf",
          boxShadow: "0 6px 20px rgba(26,122,191,0.3)"
        }}
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="text-[12px] font-bold">Chat with us</span>
      </Link>
    </div>
  );
}
