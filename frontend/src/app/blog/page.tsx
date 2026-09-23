"use client";
import { useEffect, useState } from "react";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const Facebook = (props: any) => (
    <svg width={props.size || 16} height={props.size || 16} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);
const Twitter = (props: any) => (
    <svg width={props.size || 16} height={props.size || 16} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);
const Youtube = (props: any) => (
    <svg width={props.size || 16} height={props.size || 16} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
);
const Instagram = (props: any) => (
    <svg width={props.size || 16} height={props.size || 16} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);
const Linkedin = (props: any) => (
    <svg width={props.size || 16} height={props.size || 16} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const categories = ["All", "Technology", "Security", "Community", "Ms Online", "Tips & Tricks"];

const FALLBACK_POSTS = [
    {
        id: "1", slug: "reliable-broadband-in-bangladesh",
        title: "Reliable Broadband in Bangladesh: Finding Your Ideal Internet Connection",
        excerpt: "As the demand for a stable internet connection continues to grow in Bangladesh, the importance of a reliable broadband service cannot be overstated...",
        thumbnail: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&h=400&fit=crop",
        author: "Ms Online Team", createdAt: "2024-11-16T00:00:00Z", tags: ["Technology"],
        isPublished: true,
    },
    {
        id: "2", slug: "benefits-of-fibre-optic-internet",
        title: "The Benefits of Fibre Optic Internet for Your Home or Business",
        excerpt: "A high-speed internet connection is a no-brainer in this hyper-connected universe. Dependence on legacy copper wire networks is rapidly fading...",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&h=400&fit=crop",
        author: "Ms Online Team", createdAt: "2024-03-29T00:00:00Z", tags: ["Technology"],
        isPublished: true,
    },
    {
        id: "3", slug: "improve-wifi-speed-10-steps",
        title: "Improve Your Wi-Fi Speed in 10 Simple Steps",
        excerpt: "Having a slow Wi-Fi connection can be very annoying. Think about the time you became extremely frustrated waiting for a page to load...",
        thumbnail: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=600&h=400&fit=crop",
        author: "Ms Online Team", createdAt: "2024-05-08T00:00:00Z", tags: ["Tips & Tricks"],
        isPublished: true,
    },
];

function formatDate(dt: string) {
    try {
        return new Date(dt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    } catch { return dt; }
}

export default function BlogPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All");

    async function fetchPosts() {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
            if (res.ok) {
                const data = await res.json();
                if (data?.data?.length > 0) {
                    setPosts(data.data.filter((p: any) => p.isPublished !== false));
                    setLoading(false);
                    return;
                }
            }
        } catch { }
        setPosts(FALLBACK_POSTS);
        setLoading(false);
    }

    useEffect(() => {
        document.title = "Blog & Insights | Ms Online";
        const loadPosts = async () => {
            await fetchPosts();
        };
        void loadPosts();
    }, []);

    const filtered = activeCategory === "All"
        ? posts
        : posts.filter((p) => (p.tags || []).some((t: string) => t === activeCategory));

    const recentPosts = [...posts].slice(0, 5);

    return (
        <div className="w-full bg-[#f8fafc] min-h-screen">

            {/* ── Blog Header & Navigation ── */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <Container className="flex flex-col">
                    <div className="flex flex-col sm:flex-row items-center justify-between py-5 border-b border-gray-100 gap-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-black text-slate-800 uppercase tracking-wide">
                                Welcome To <span style={{ color: "var(--navy)" }}>Ms Online</span> Blog
                            </h1>
                        </div>
                        <div className="flex gap-2">
                            {[
                                { icon: Facebook, bg: "#1877F2", href: "https://www.facebook.com/msonlineisp" },
                                { icon: Twitter, bg: "#1DA1F2", href: "#" },
                                { icon: Instagram, bg: "#E4405F", href: "#" },
                                { icon: Youtube, bg: "#FF0000", href: "#" },
                                { icon: Linkedin, bg: "#0A66C2", href: "https://www.linkedin.com/company/msonlinebd" }
                            ].map((s, i) => (
                                <a key={i} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="w-8 h-8 rounded text-white flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
                                    style={{ backgroundColor: s.bg }}>
                                    <s.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categories Nav */}
                    <nav className="flex items-center gap-1 overflow-x-auto py-1">
                        {categories.map((cat, i) => (
                            <button key={i} onClick={() => setActiveCategory(cat)}
                                className={`text-[13px] font-bold whitespace-nowrap px-4 py-3 border-b-2 hover:text-[var(--blue)] transition-colors bg-transparent ${activeCategory === cat ? 'border-[var(--blue)] text-[var(--blue)]' : 'border-transparent text-slate-600'}`}>
                                {cat}
                            </button>
                        ))}
                    </nav>
                </Container>
            </div>

            <Section size="md" className="pt-8">
                <Container className="content-split content-split--two-one items-start">

                    {/* ── Left Content (Main Posts) ── */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">
                        {loading ? (
                            <div className="flex flex-col gap-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="bg-white rounded-2xl border border-gray-100 h-56 animate-pulse" />
                                ))}
                            </div>
                        ) : filtered.length === 0 ? (
                            <div className="text-center py-20 text-gray-400">
                                <div className="text-5xl mb-4">📝</div>
                                <h3 className="text-xl font-bold text-gray-600 mb-2">No posts found</h3>
                                <p className="text-sm">No published posts in this category yet.</p>
                            </div>
                        ) : (
                            filtered.map((post, idx) => {
                                const slug = post.slug || post.id;
                                const category = (post.tags || [])[0] || "General";
                                const thumb = post.thumbnail || post.image || "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&h=400&fit=crop";

                                return (
                                    <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col sm:flex-row group">
                                        {/* Image */}
                                        <div className="w-full sm:w-5/12 h-56 sm:h-auto overflow-hidden relative border-r border-gray-100">
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                                            <img src={thumb} alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        </div>
                                        {/* Content */}
                                        <div className="w-full sm:w-7/12 p-6 md:p-8 flex flex-col items-start justify-center">
                                            <span className="text-[11px] font-bold text-[var(--blue)] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full mb-3">{category}</span>
                                            <h2 className="text-xl md:text-[22px] font-extrabold text-[#0f172a] leading-[1.3] mb-3 group-hover:text-[var(--navy)] transition-colors">
                                                <Link href={`/blog/${slug}`}>{post.title}</Link>
                                            </h2>
                                            <p className="text-[13px] text-gray-400 font-medium mb-3">
                                                {post.author || "Ms Online Team"} &nbsp;·&nbsp; {formatDate(post.createdAt || post.date || "")}
                                            </p>
                                            <p className="text-[14px] text-gray-500 leading-relaxed font-medium mb-6 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <Link href={`/blog/${slug}`}
                                                className="flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 rounded-lg text-slate-700 text-[13px] font-bold hover:border-[var(--blue)] hover:bg-[var(--blue)] hover:text-white transition-all mt-auto group/btn">
                                                Read More <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {/* ── Right: Sidebar ── */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-[160px]">

                        {/* Most Recent Posts */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--navy)] to-[var(--blue)]"></div>
                            <h3 className="text-[15px] font-black text-slate-800 tracking-wider uppercase mb-5 flex flex-col">
                                MOST RECENT POSTS
                                <span className="w-12 h-1 bg-[var(--blue)] mt-2"></span>
                            </h3>
                            <div className="flex flex-col gap-4">
                                {recentPosts.map((post, idx) => {
                                    const slug = post.slug || post.id;
                                    const thumb = post.thumbnail || post.image || "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=150&h=150&fit=crop";
                                    return (
                                        <Link key={idx} href={`/blog/${slug}`} className="flex gap-4 items-center group cursor-pointer border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                                            <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0 relative">
                                                <img src={thumb} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <h4 className="text-[13px] font-bold text-slate-800 leading-snug group-hover:text-[var(--blue)] transition-colors line-clamp-2">
                                                    {post.title}
                                                </h4>
                                                <span className="text-[11px] text-gray-400 font-medium">{formatDate(post.createdAt || post.date || "")}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Facebook Widget */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#1877F2]"></div>
                            <h3 className="text-[15px] font-black text-slate-800 tracking-wider uppercase mb-5 flex flex-col">
                                LIKE US ON FACEBOOK
                                <span className="w-12 h-1 bg-[#1877F2] mt-2"></span>
                            </h3>
                            <div className="border border-gray-200 rounded-lg overflow-hidden bg-slate-50 cursor-pointer hover:shadow-md transition-shadow">
                                <div className="p-4 bg-white flex gap-3 items-center border-b border-gray-100">
                                    <div className="w-12 h-12 rounded bg-slate-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                                        <img src="/logo.png" alt="logo" className="w-8 object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#1877F2] hover:underline text-[14px]">Ms Online Limited</span>
                                        <span className="text-gray-500 text-[11px] font-medium">173,647 followers</span>
                                    </div>
                                </div>
                                <div className="p-3 flex items-center justify-between border-b border-gray-200 bg-white">
                                    <a href="https://www.facebook.com/msonlineisp" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1 bg-[#1877F2] text-white rounded text-[12px] font-bold hover:opacity-90 transition-opacity">
                                        <Facebook size={12} /> Follow Page
                                    </a>
                                </div>
                                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&h=400&fit=crop')" }}>
                                </div>
                            </div>
                        </div>

                    </div>

                </Container>
            </Section>
        </div>
    );
}
