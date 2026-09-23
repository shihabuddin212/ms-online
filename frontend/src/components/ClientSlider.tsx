import React from 'react';

// Exact recreations of the requested partner logos using SVG & typography
const PartnerLogos = () => (
    <>
        {/* 1. BTCL */}
        <div className="flex items-center gap-2 flex-shrink-0 group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-10 md:h-10">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#225b2a" strokeWidth="6" />
                <path d="M 10 50 Q 50 10 90 50 Q 50 90 10 50" fill="#298a39" />
                <path d="M 10 50 Q 50 -10 90 50" fill="none" stroke="#111" strokeWidth="2" />
            </svg>
            <div className="flex flex-col">
                <span className="font-extrabold text-[#008f3b] text-xl md:text-2xl tracking-tighter leading-none m-0 p-0">BTCL</span>
            </div>
        </div>

        {/* 2. BD HUB LIMITED */}
        <div className="flex items-center gap-1.5 flex-shrink-0 group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="bg-[#e41e26] rounded-md text-white font-black text-xl md:text-2xl px-2 py-0.5 shadow-sm transform -skew-x-6">bd</div>
            <div className="flex flex-col leading-tight justify-center">
                <span className="font-black text-[#333] text-sm md:text-md m-0 p-0 tracking-tighter">HUB</span>
                <span className="font-bold text-[#444] text-[10px] md:text-[11px] m-0 p-0 tracking-tight">Limited</span>
            </div>
        </div>

        {/* 3. CISCO */}
        <div className="flex items-center gap-2 flex-shrink-0 group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex flex-col items-center">
                <svg viewBox="0 0 100 40" className="w-16 h-8 md:w-20 md:h-10">
                    {/* Bridge bars */}
                    <rect x="5" y="20" width="4" height="10" fill="#005a8b" />
                    <rect x="15" y="15" width="4" height="15" fill="#005a8b" />
                    <rect x="25" y="10" width="4" height="20" fill="#005a8b" />
                    <rect x="35" y="5" width="4" height="25" fill="#005a8b" />
                    <rect x="45" y="10" width="4" height="20" fill="#005a8b" />
                    <rect x="55" y="15" width="4" height="15" fill="#005a8b" />
                    <rect x="65" y="5" width="4" height="25" fill="#005a8b" />
                    <rect x="75" y="10" width="4" height="20" fill="#005a8b" />
                    <rect x="85" y="15" width="4" height="15" fill="#005a8b" />
                    <rect x="95" y="20" width="4" height="10" fill="#005a8b" />
                </svg>
                <span className="font-semibold text-[#d32729] text-[15px] md:text-[18px] tracking-widest leading-none mt-1">CISCO</span>
            </div>
        </div>

        {/* 4. Allot */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <div className="flex items-end gap-1">
                <span className="font-black text-[#1e4896] text-xl md:text-3xl tracking-tighter">All</span>
                <span className="font-black text-[#efb807] text-xl md:text-3xl tracking-tighter">o</span>
                <span className="font-black text-[#1e4896] text-xl md:text-3xl tracking-tighter">t</span>
            </div>
            <span className="text-[7px] text-[#1e4896] tracking-[0.2em] font-medium uppercase mt-0.5">communications</span>
        </div>

        {/* 5. Juniper */}
        <div className="flex flex-col items-center justify-center flex-shrink-0 group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pt-2">
            <span className="font-light text-xl md:text-[28px] tracking-tighter text-[#1a1a1a]">Juniper<span className="font-bold text-xl md:text-[28px] text-[#1a1a1a]">.</span></span>
            <span className="text-[7px] text-[#0090d7] font-semibold uppercase tracking-[0.3em] pl-6 -mt-1">Networks</span>
        </div>

        {/* 6. Grameenphone */}
        <div className="flex flex-col items-center flex-shrink-0 group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 mb-1">
                <path d="M50 20 C60 10, 90 20, 80 50 C90 70, 70 90, 50 80 C30 90, 10 70, 20 50 C10 30, 40 10, 50 20 Z" fill="#008bd2" />
            </svg>
            <span className="font-semibold text-[#444] text-[9px] md:text-[11px] lowercase tracking-wide">grameenphone</span>
        </div>
    </>
);

export default function ClientSlider() {
    return (
        <section
            className="w-full block bg-white border-t border-b border-gray-100 overflow-hidden relative"
            style={{ paddingBlock: "clamp(2.5rem, 5vw, 4rem)" }}
        >
            <div className="w-full flex justify-center max-w-[1400px] mx-auto overflow-hidden relative">

                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex">
                    {/* First Marquee Track wrapper */}
                    <div className="animate-marquee flex items-center gap-8 md:gap-24 px-8 w-max flex-shrink-0">
                        <PartnerLogos />
                        <PartnerLogos />
                    </div>
                </div>
            </div>
        </section>
    );
}
