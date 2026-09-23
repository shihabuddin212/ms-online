import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";

export const metadata: Metadata = {
    title: "BTRC Approved Tariff | Ms Online",
    description: "View Ms Online's BTRC approved internet service tariff and package pricing.",
};

export default function BtrcApprovedTariffPage() {
    return (
        <div className="w-full relative">
            <div className="absolute top-0 left-0 w-full h-[400px] -z-10 bg-gradient-to-b from-[#e8f4fb] to-white" />

            <div aria-hidden="true" className="h-12 md:h-16" />
            <Section size="md" className="text-center pb-8 border-b-0 pt-0">
                <Container className="flex flex-col items-center gap-4">
                    <span
                        className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-blue-200 bg-blue-50"
                        style={{ color: "var(--blue)" }}
                    >
                        Tariff
                    </span>
                    <h1 className="text-4xl md:text-[44px] font-extrabold text-slate-800 tracking-tight">
                        BTRC Approved <span style={{ color: "var(--blue)" }}>Tariff</span>
                    </h1>
                    <p className="text-gray-500 text-[15px] max-w-2xl mt-1 leading-relaxed">
                        Ms Online offers internet service packages in accordance with BTRC (Bangladesh Telecommunication Regulatory Commission) approved tariff rates.
                    </p>
                </Container>
            </Section>

            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
            <Section variant="light" size="md" className="pt-0">
                <Container>
                    <div className="mx-auto w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
                        <p className="text-gray-500 text-[15px] leading-relaxed text-center">
                            Detailed tariff information will be published here shortly. For current package pricing, please visit our{" "}
                            <a href="/home-internet" className="font-semibold" style={{ color: "var(--blue)" }}>
                                Home Internet
                            </a>{" "}
                            page or contact us directly.
                        </p>
                    </div>
                </Container>
            </Section>

            <div aria-hidden="true" className="h-12 bg-[#f8fbff] md:h-16" />
        </div>
    );
}
