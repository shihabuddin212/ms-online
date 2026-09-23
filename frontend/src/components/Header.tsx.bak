"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "HOME INTERNET", href: "/home-internet" },
  { label: "CORPORATE", href: "/corporate" },
  { label: "SME", href: "/sme" },
  { label: "IP PHONE", href: "/ip-phone" },
  { label: "CLOUD PABX", href: "/cloud-pabx" },
  { label: "IOT DEVICES", href: "/iot" },
  { label: "WIFI ZONE", href: "/wifi" },
  { label: "BILL PAY", href: "/bill-pay" },
  { label: "CONTACT", href: "/contact" },
  {
    label: "MORE",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Coverage Area", href: "/coverage" },
      { label: "Special Offer", href: "/offer" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50 block">

      {/* ── TOP BAR ── */}
      <div style={{ background: "#0b1e35" }} className="w-full text-white text-[11px] py-1.5 flex justify-center">
        <Container className="flex flex-col sm:flex-row justify-between items-center gap-y-1">
          {/* Left */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="font-semibold" style={{ color: "#5bc8e8" }}>Welcome to Ms Online</span>
            <span className="flex items-center gap-1 text-gray-300">
              {/* phone icon */}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:09639116116" className="hover:text-white transition">09639116116 | 01749090930 | 01911223006</a>
            </span>
            <span className="flex items-center gap-1 text-gray-300">
              {/* mail icon */}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:noc@msonlinebd.com" className="hover:text-white transition">noc@msonlinebd.com</a>
            </span>
          </div>
          {/* Right */}
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            {/* FB icon */}
            <a
              href="https://www.facebook.com/msonlineisp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Ms Online on Facebook"
              className="hover:text-white transition"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* User icon */}
            <a
              href="https://admin.msonlinebd.com/BillPayment/Index"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open bill payment"
              className="hover:text-white transition"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
              </svg>
            </a>
          </div>
        </Container>
      </div>

      {/* ── MAIN NAV ── */}
      <div className="w-full bg-white shadow sticky top-0 z-50 flex justify-center">
        <Container className="flex justify-between items-center h-[60px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image src="/logo.png" alt="Ms Online" width={55} height={43} className="object-contain" priority />
            <span className="hidden sm:block text-[13px] font-extrabold leading-tight"
              style={{ color: "#0d2542" }}>
              Ms<br />Online
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-[18px] text-[11px] font-bold text-gray-700">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className="flex items-center gap-0.5 hover:text-[#0d2542] transition">
                    {item.label} <ChevronDown size={12} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href}
                        className="block px-4 py-2.5 text-[12px] font-semibold hover:bg-blue-50 hover:text-[#0d2542] transition">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href}
                  className="hover:text-[#0d2542] transition whitespace-nowrap">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile toggle */}
          <button className="xl:hidden p-2 text-gray-700 hover:text-[#0d2542]"
            onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </Container>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-[12px] font-bold text-gray-700 hover:bg-blue-50 hover:text-[#0d2542] border-b border-gray-50 transition">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
