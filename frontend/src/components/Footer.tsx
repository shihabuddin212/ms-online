import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";

export default function Footer() {
    return (
        <footer
            className="w-full bg-[#1a1a1a] text-gray-400 flex flex-col items-center"
            style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)",
                paddingTop: "clamp(3.5rem, 7vw, 6rem)",
                paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
        >
            <Container className="footer-grid">

                {/* ── Contact ── */}
                <div>
                    <h4 className="text-white text-base font-bold mb-4 border-b border-red-600 pb-2 inline-block">Contact</h4>
                    <p className="font-semibold text-white mb-3">Ms Online</p>
                    <ul className="space-y-3 text-sm leading-relaxed">
                        <li className="flex gap-2">
                            <MapPin size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span>89, 3 Water Works Rd, Dhaka 1211</span>
                        </li>
                        <li className="flex gap-2">
                            <Phone size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span>
                                Phone: 09639116116<br />
                                Mobile: 01749090930<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;01911223006
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <Mail size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                            <a href="mailto:noc@msonlinebd.com" className="hover:text-red-400 transition">noc@msonlinebd.com</a>
                        </li>
                    </ul>
                </div>

                {/* ── Quick Links 1 ── */}
                <div>
                    <h4 className="text-white text-base font-bold mb-4 border-b border-red-600 pb-2 inline-block">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {[
                            { label: "Home Internet", href: "/home-internet" },
                            { label: "Corporate Internet", href: "/corporate" },
                            { label: "Coverage Area", href: "/coverage" },
                            { label: "IPTSP", href: "/ip-phone" },
                            { label: "Hosting & Development", href: "/hosting" },
                        ].map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className="flex items-center gap-1 hover:text-red-400 transition">
                                    <span className="text-red-500">›</span> {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Quick Links 2 ── */}
                <div>
                    <h4 className="text-white text-base font-bold mb-4 border-b border-red-600 pb-2 inline-block">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        {[
                            { label: "Bill Pay", href: "/bill-pay" },
                            { label: "About", href: "/about" },
                            { label: "Special Offer", href: "/offer" },
                            { label: "Blog", href: "/blog" },
                            { label: "Contact", href: "/contact" },
                        ].map((l) => (
                            <li key={l.label}>
                                <Link href={l.href} className="flex items-center gap-1 hover:text-red-400 transition">
                                    <span className="text-red-500">›</span> {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── App download ── */}
                <div className="flex flex-col items-start">
                    <h4 className="inline-block border-b border-red-600 pb-2 text-base font-bold text-white">Get the App</h4>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.softifybd.msonline&pcampaignid=web_share"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Install Ms Online app from Google Play"
                        className="block transition hover:opacity-90"
      style={{ marginTop: "0.7cm" }}
                    >
                        <svg className="h-auto w-[170px]" viewBox="0 0 210 60" aria-hidden="true">
                            <path d="M8 5 34 30 8 55a4 4 0 0 1-6.8-2.8V7.8A4 4 0 0 1 8 5Z" fill="#34A853" />
                            <path d="m8 5 35 20-9 5L8 5Z" fill="#4285F4" />
                            <path d="m34 30 9 5L8 55l26-25Z" fill="#FBBC04" />
                            <path d="M43 25a5.8 5.8 0 0 1 0 10l-9-5 9-5Z" fill="#EA4335" />
                            <text x="60" y="38" fill="#f8fafc" fontFamily="Arial, sans-serif" fontSize="27" fontWeight="500">Google Play</text>
                        </svg>
                    </a>
                </div>
            </Container>

            {/* Bottom bar */}
            <Container className="footer-bottom">
                <p className="text-sm">
                    <span className="text-red-500 font-bold">Ms Online</span> © {new Date().getFullYear()} All Rights Reserved.
                </p>
                <div className="flex gap-4">
                    {(["facebook", "instagram", "linkedin", "youtube"] as const).map((s) => (
                        <a
                            key={s}
                            href={
                                s === "facebook"
                                    ? "https://www.facebook.com/msonlineisp"
                                    : s === "linkedin"
                                        ? "https://www.linkedin.com/company/msonlinebd/posts/?feedView=all"
                                        : "#"
                            }
                            target={s === "facebook" || s === "linkedin" ? "_blank" : undefined}
                            rel={s === "facebook" || s === "linkedin" ? "noopener noreferrer" : undefined}
                            aria-label={s}
                            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition"
                        >
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                {s === "facebook" && (
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                )}
                                {s === "instagram" && (
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M6.5 20.5h11A3 3 0 0 0 20.5 17.5v-11A3 3 0 0 0 17.5 3.5h-11A3 3 0 0 0 3.5 6.5v11A3 3 0 0 0 6.5 20.5z" strokeWidth="1.5" stroke="currentColor" fill="none" />
                                )}
                                {s === "linkedin" && (
                                    <>
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                        <circle cx="4" cy="4" r="2" />
                                    </>
                                )}
                                {s === "youtube" && (
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                                )}
                            </svg>
                        </a>
                    ))}
                </div>
            </Container>
        </footer>
    );
}
