import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import { CheckCircle2, PhoneCall, Search, Smartphone, Globe, Building2, Wallet } from "lucide-react";

export const metadata: Metadata = {
    title: "Bill Payment | Ms Online",
    description: "Multiple convenient payment options available. Pay your internet bill easily without extra charges.",
};

const paymentMethods = [
    {
        icon: Smartphone,
        title: "Mobile Banking",
        desc: "Pay via bKash, Nagad, or Rocket instantly from your phone.",
        color: "#ec4899", // pink
        steps: ["Open your mobile banking app", "Select \"Pay Bill\"", "Enter merchant number", "Confirm payment"],
    },
    {
        icon: Globe,
        title: "Online Self-care Portal",
        desc: "Log in to your account and pay securely using card or MFS.",
        color: "var(--blue)", // blue
        steps: ["Login to selfcare portal", "Go to \"Pay Bill\" section", "Choose payment method", "Complete payment"],
    },
    {
        icon: Building2,
        title: "Bank Transfer",
        desc: "Transfer directly to our bank account via NPSB or BEFTN.",
        color: "#10b981", // green
        steps: ["Get our bank details", "Initiate bank transfer", "Use your account ID as reference", "Send proof of payment"],
    },
    {
        icon: Wallet,
        title: "Cash Payment",
        desc: "Visit our office or pay through our authorized collection agents.",
        color: "#f59e0b", // amber
        steps: ["Visit our nearest office", "Provide your account ID", "Pay the bill amount", "Collect your receipt"],
    },
];

export default function BillPayPage() {
    return (
        <div className="w-full relative">

            {/* Soft gradient background for the top half */}
            <div className="absolute top-0 left-0 w-full h-[500px] -z-10 bg-gradient-to-b from-[#e8f4fb] to-white" />

            {/* ── Page Header ── */}
            <div aria-hidden="true" className="h-12 md:h-16" />
            <Section size="md" className="text-center pb-8 border-b-0 pt-0">
                <Container className="flex flex-col items-center gap-4">
                    <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-blue-200 bg-blue-50"
                        style={{ color: "var(--blue)" }}>
                        Bill Payment
                    </span>
                    <h1 className="text-4xl md:text-[44px] font-extrabold text-slate-800 tracking-tight">
                        Pay Your Bill <span style={{ color: "var(--blue)" }}>Easily</span>
                    </h1>
                       <p className="text-gray-500 text-[15px] max-w-2xl mt-1 leading-relaxed">
                        Multiple convenient payment options available. No extra charges — just pay and enjoy uninterrupted internet.
                    </p>

                    <div aria-hidden="true" style={{ height: "1.27cm" }} />

                    
                        <a
                        href="https://admin.msonlinebd.com/BillPayment/Index"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-full px-10 py-4 text-center text-xl font-extrabold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:opacity-90 md:text-2xl"
                        style={{
                            background: "var(--blue)",
                            paddingLeft: "calc(2.5rem + 1in)",
                            paddingRight: "calc(2.5rem + 1in)",
                            height: "1.2cm",
                            paddingTop: 0,
                            paddingBottom: 0,
                        }}
                    >
                        Pay Your Bill
                    </a>
                </Container>
            </Section>

            {/* ── Payment Methods ── */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
            <Section variant="light" size="md" className="pt-0">
                <Container>
                    <div className="text-center">
                        <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-blue-200 bg-white shadow-sm mb-4"
                            style={{ color: "var(--blue)" }}>
                            Payment
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                            How to <span style={{ color: "var(--blue)" }}>Pay Your Payment?</span>
                        </h2>
                        <div className="flex w-full justify-center">
                            <p className="max-w-lg text-center text-gray-500 text-[15px] mt-4" style={{ textAlign: "center" }}>
                                Multiple convenient payment options available. Choose the method that works best for you.
                            </p>
                        </div>
                    </div>

                    <div aria-hidden="true" className="h-12 md:h-16" />

                    <div
                        className="mx-auto flex w-full max-w-[42rem] flex-col items-center rounded-2xl border border-blue-100 bg-white px-8 py-7 text-center shadow-sm md:px-12 md:py-8"
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                        <h3 className="w-full text-center text-3xl font-extrabold leading-tight text-slate-800 md:text-4xl">
                            <span style={{ color: "var(--blue)" }}>Easy</span> Payment System
                        </h3>

                        <div aria-hidden="true" style={{ height: "1.27cm" }} />

                        <h4 className="text-xl md:text-2xl font-extrabold text-slate-800 mb-4">
                            Bangla QR
                        </h4>

                        <img
                            src="/bkash-qr.png"
                            alt="Bangla QR Payment Code"
                            className="w-56 h-56 object-contain rounded-xl border border-gray-100 shadow-sm mb-6"
                        />

                        <div className="w-full max-w-xs flex flex-col gap-2 text-left mx-auto">
                            <div className="flex justify-between text-[14px] border-b border-gray-100 pb-2">
                                <span className="font-semibold text-slate-600">Merchant Name:</span>
                                <span className="text-slate-800 font-bold">MS ONLINE</span>
                            </div>
                            <div className="flex justify-between text-[14px] border-b border-gray-100 pb-2">
                                <span className="font-semibold text-slate-600">Merchant ID:</span>
                                <span className="text-slate-800 font-bold">460000000048358</span>
                            </div>
                            <div className="flex justify-between text-[14px]">
                                <span className="font-semibold text-slate-600">Terminal ID:</span>
                                <span className="text-slate-800 font-bold">86048358</span>
                            </div>
                        </div>
                    </div>

                    <div aria-hidden="true" className="h-24" />

                    {/* Grid of Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {paymentMethods.map((method, idx) => (
                            <div key={idx} className="bg-white rounded-[1.25rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden flex flex-col relative group">
                                {/* Top color border */}
                                <div className="h-1.5 w-full absolute top-0 left-0" style={{ backgroundColor: method.color }}></div>

                                <div className="p-7 flex flex-col flex-grow">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${method.color}15`, border: `1px solid ${method.color}30` }}>
                                        <method.icon size={22} style={{ color: method.color }} />
                                    </div>
                                    <h3 className="font-extrabold text-slate-800 text-[16px] mb-2">{method.title}</h3>
                                    <p className="text-gray-500 text-[13px] leading-relaxed mb-6 border-b border-gray-100 pb-5">
                                        {method.desc}
                                    </p>

                                    <ul className="flex flex-col gap-3 mt-auto">
                                        {method.steps.map((step, sIdx) => (
                                            <li key={sIdx} className="flex items-start gap-2.5 text-[12px] font-medium text-slate-600">
                                                <span className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold mt-0.5 flex-shrink-0"
                                                    style={{ border: `1px solid ${method.color}`, color: method.color, background: `${method.color}10` }}>
                                                    {sIdx + 1}
                                                </span>
                                                <span className="leading-snug">{step}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Help Banner */}
                    <div aria-hidden="true" style={{ height: "0.8cm" }} />

                    <div className="w-full bg-[#f8fbfe] border border-blue-100 rounded-2xl p-6 flex items-center justify-start shadow-sm">
                        <div className="flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm" style={{ color: "var(--blue)" }}>
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 text-[15px]">Need help with payment?</h4>
                                <p className="text-gray-500 text-[13px] mt-0.5">Our support team is available 24/7 to assist you with any payment queries.</p>
                            </div>
                        </div>
                    </div>

                </Container>
            </Section>

            {/* Keep the Ready to Connect badge half an inch below the payment content. */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />

            {/* Bottom CTA Card */}
            <Section variant="light" className="pb-24">
                <Container>
                    <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl px-10 pb-10 pt-12 text-center flex flex-col items-center border border-blue-50 md:px-14 md:pb-14 md:pt-16"
                        style={{ background: "linear-gradient(135deg, #e8f4fb 0%, #f0f9ff 100%)" }}>
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
                            <Link href="/coverage" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-bold transition-all hover:opacity-90 shadow-lg text-[14px]" style={{ background: "var(--blue)" }}>
                                <Search size={16} /> Check Coverage Area
                            </Link>
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

            {/* Keeps the final bill-pay content visibly separated from the footer. */}
            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
        </div>
    );
}
