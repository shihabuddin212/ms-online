"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Wifi,
  Server,
  Globe,
  PhoneCall,
  Building2,
  Headphones,
  ChevronDown,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const DEFAULT_SUBJECTS = [
  { id: "d1", label: "New Connection", value: "new-connection" },
  { id: "d2", label: "Sales & Packages", value: "sales" },
  { id: "d3", label: "Technical Support", value: "support" },
  { id: "d4", label: "Billing", value: "billing" },
  { id: "d6", label: "VPS Server", value: "vps-server" },
  { id: "d7", label: "Cloud PABX / IP Phone", value: "cloud-pabx" },
  { id: "d8", label: "Other Inquiry", value: "other" },
];

const whyChooseUs = [
  {
    icon: Wifi,
    title: "99.9% Uptime",
    desc: "Enterprise-grade fiber backbone with redundant routing ensures constant uptime.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Our network operation center monitors your connection round the clock.",
  },
  {
    icon: Server,
    title: "Dedicated Real IP",
    desc: "Static and dynamic public IP addresses available for business needs.",
  },
  {
    icon: Globe,
    title: "BDIX Peering",
    desc: "Direct BDIX peering for ultra-fast local routing and streaming.",
  },
];

const officeLocations = [
  {
    icon: Building2,
    city: "Head Office — Dhaka",
    address: "89, 3 Water Works Rd, Lalbagh, Dhaka 1211",
    phone: "09639116116",
  },
  {
    icon: Headphones,
    city: "Customer Support Helpline",
    address: "24/7 Dedicated Online & Desk Helpdesk",
    phone: "01749090930 | 01911223006",
  },
];

export default function ContactPage() {
  const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/api/contact/subjects`)
      .then((r) => r.json())
      .then((d) => {
        if (d.data?.length > 0) setSubjects(d.data);
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.subject) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`${API_URL}/api/contact/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f3fbff] pb-20 text-slate-800 md:pb-28">
      {/* Creates a clear half-inch gap below the site header. */}
      <div aria-hidden="true" style={{ height: "clamp(48px, 5vw, 64px)" }} />
      <Section className="px-0 py-0">
        <Container className="mx-auto max-w-[1240px] px-4 md:px-8">
          {/* Main Hero Header */}
          <div className="mb-14 text-center">
            <span className="inline-block rounded-full bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700">
              Contact Us
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Get in <span className="text-sky-600">Touch</span>
            </h1>
            <p
              className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
              style={{ marginTop: "clamp(4rem, 6vw, 6rem)" }}
            >
              Have questions or need a new fiber connection? Our team is available 24/7 to assist you.
            </p>
          </div>

          {/* Keeps the contact details half an inch below the introduction. */}
          <div aria-hidden="true" style={{ height: "clamp(48px, 5vw, 64px)" }} />

          {/* Contact Grid */}
          <div className="grid items-start gap-12 lg:grid-cols-12">
            {/* Left Column - Contact Details */}
            <div className="mt-8 lg:col-span-5 lg:mt-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                  We&apos;re Here to <span className="text-sky-600">Help</span>
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Reach out for new connections, technical support, enterprise inquiries, or package upgrades.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="mt-8 space-y-4 md:mt-10">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "09639116116 | 01749090930",
                    href: "tel:09639116116",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "noc@msonlinebd.com",
                    href: "mailto:noc@msonlinebd.com",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "89, 3 Water Works Rd, Lalbagh, Dhaka 1211",
                    href: "#",
                  },
                  {
                    icon: Clock,
                    title: "Support Hours",
                    content: "24/7 — 365 Days Active",
                    href: "#",
                  },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl border border-sky-100 bg-[#f4fbff] p-4 shadow-[0_4px_20px_rgba(14,116,144,0.05)] transition hover:border-sky-300 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white text-sky-600 ring-1 ring-sky-100">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm font-bold text-slate-800">
                        {item.content}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div aria-hidden="true" style={{ height: "clamp(48px, 5vw, 64px)" }} />

              <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm">
                <h3 className="mb-4 text-base font-bold text-slate-900">Office Locations</h3>
                <div className="space-y-4">
                  {officeLocations.map((item) => (
                    <div key={item.city} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-sky-700">{item.city}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.address}</p>
                        <p className="mt-1 text-xs font-semibold text-slate-700">{item.phone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="lg:col-span-7 rounded-[1.5rem] border border-sky-200 bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.08)] md:p-10">
              {status === "success" ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-sky-700">Message Sent Successfully!</h3>
                  <p className="max-w-md text-sm text-slate-600">
                    Thank you for contacting us. Our technical support team will reach out within 2 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-slate-950">Send us a Message</h3>

                  <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                          placeholder="Your full name"
                          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                          placeholder="your@email.com"
                          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Phone
                        </label>
                        <input
                          type="text"
                          value={form.phone}
                          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                          placeholder="01xxxxxxxxx"
                          className="h-10 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={form.subject}
                            onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                            className="h-10 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 pr-10 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                          >
                            <option value="">Select subject</option>
                            {subjects.map((s) => (
                              <option key={s.id} value={s.value}>
                                {s.label}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                        placeholder="Tell us how we can help..."
                        className="min-h-[105px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600 border border-red-200">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {errorMsg}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-sm font-bold leading-none text-white shadow-[0_10px_22px_rgba(14,116,214,0.24)] transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-60"
                    >
                      <Send className="h-4 w-4 shrink-0" />
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          <div aria-hidden="true" style={{ height: "clamp(48px, 5vw, 64px)" }} />

          {/* Bottom Section: Integrated Features & Offices */}
          <div className="border-t border-slate-200 pt-12 md:pt-16">
            <h3 className="mb-10 text-center text-2xl font-bold text-slate-900">
              Why Connect With Us?
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-sky-100 bg-white p-6 shadow-[0_10px_24px_rgba(14,116,144,0.04)]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      {/* Keeps the final contact content visibly separated from the footer. */}
      <div aria-hidden="true" className="h-12 md:h-16" />
    </div>
  );
}
