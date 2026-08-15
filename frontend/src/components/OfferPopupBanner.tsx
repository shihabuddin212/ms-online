"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function OfferPopupBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show popup after 1.2s delay for professional feel
        const timer = setTimeout(() => {
            const dismissed = sessionStorage.getItem("offer_popup_dismissed");
            if (!dismissed) {
                setVisible(true);
            }
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setVisible(false);
        sessionStorage.setItem("offer_popup_dismissed", "1");
    };

    if (!visible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
                aria-label="Close offer popup"
            />

            {/* Popup Card */}
            <div
                className="fixed z-[9999] top-1/2 left-1/2"
                style={{
                    transform: "translate(-50%, -50%)",
                    width: "min(90vw, 600px)",
                    animation: "popupIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both",
                }}
                role="dialog"
                aria-modal="true"
                aria-label="Special Offer"
            >
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-all"
                        aria-label="Dismiss"
                    >
                        <X size={16} strokeWidth={2.5} className="text-slate-600" />
                    </button>

                    {/* Offer Image — clickable */}
                    <Link href="/offer" onClick={handleClose}>
                        <Image
                            src="/Ms_Offer-thamble.png"
                            alt="রেফার করে জিতে নিন ক্যাশব্যাক সহ আকর্ষণীয় সব পুরস্কার"
                            width={600}
                            height={335}
                            className="w-full h-auto object-cover hover:opacity-95 transition-opacity cursor-pointer"
                            priority
                        />
                    </Link>

                    {/* Bottom strip */}
                    <div className="flex items-center justify-between px-5 py-4 bg-white border-t border-gray-100">
                        <div className="flex flex-col">
                            <span className="text-[13px] font-extrabold text-slate-800">🎁 রেফার করুন, পুরস্কার জিতুন!</span>
                            <span className="text-[11px] text-gray-400 font-medium mt-0.5">১০০ টাকা ক্যাশব্যাক ও আকর্ষণীয় গিফট জিতুন</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link
                                href="/offer"
                                onClick={handleClose}
                                className="px-4 py-2 rounded-lg text-white text-[12px] font-bold hover:opacity-90 transition-all shadow-md"
                                style={{ background: "var(--blue)" }}
                            >
                                বিস্তারিত দেখুন →
                            </Link>
                            <button
                                onClick={handleClose}
                                className="px-3 py-2 rounded-lg text-[11px] font-bold text-gray-400 hover:text-gray-600 border border-gray-200 hover:bg-gray-50 transition-all"
                            >
                                পরে দেখব
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style>{`
                @keyframes popupIn {
                    from { opacity: 0; transform: translate(-50%, -48%) scale(0.92); }
                    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                }
            `}</style>
        </>
    );
}
