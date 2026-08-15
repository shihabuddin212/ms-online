import type { Metadata } from "next";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Link from "next/link";
import { ChevronRight, Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
import { fetchServerApi } from "@/lib/api";

export const dynamic = "force-dynamic";

interface SocialIconProps { size?: number; className?: string; }
const Facebook = (p: SocialIconProps) => (
    <svg className={p.className} width={p.size || 16} height={p.size || 16} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);
const Twitter = (p: SocialIconProps) => (
    <svg className={p.className} width={p.size || 16} height={p.size || 16} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const res = await fetchServerApi(`/api/blog/${slug}`);
        if (res.ok) {
            const data = await res.json();
            const post = data.data;
            if (post) {
                return {
                    title: `${post.title} | Ms Online Blog`,
                    description: post.excerpt || post.title,
                };
            }
        }
    } catch { }
    return { title: "Blog Post | Ms Online" };
}

async function getPost(slug: string) {
    try {
        const res = await fetchServerApi(`/api/blog/${slug}`);
        if (res.ok) {
            const data = await res.json();
            if (data?.data) return data.data;
        }
    } catch (e) {
        console.error("Blog post fetch failed:", e);
    }
    return null;
}

async function getRecentPosts() {
    try {
        const res = await fetchServerApi("/api/blog");
        if (res.ok) {
            const data = await res.json();
            return (data?.data || []).filter((p: any) => p.isPublished !== false).slice(0, 5);
        }
    } catch { }
    return [];
}

function formatDate(dt: string) {
    try {
        return new Date(dt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    } catch { return dt || ""; }
}

function calcReadTime(content: string): string {
    const words = (content || "").replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 200));
    return `${mins} min read`;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);
    const recentPosts = await getRecentPosts();

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
                <div className="text-center py-20">
                    <div className="text-6xl mb-6">📝</div>
                    <h1 className="text-3xl font-extrabold text-slate-800 mb-4">Post Not Found</h1>
                    <p className="text-gray-500 mb-8">This blog post doesn&apos;t exist or has been removed.</p>
                    <Link href="/blog" className="px-8 py-3 rounded-full font-bold text-white transition hover:opacity-90"
                        style={{ background: "var(--blue)" }}>
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const category = (post.tags || [])[0] || "General";
    const thumbnail = post.thumbnail || post.image || "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&h=600&fit=crop";
    const readTime = calcReadTime(post.content || "");
    const postUrl = `https://www.msonlinebd.com/blog/${slug}`;

    return (
        <div className="w-full bg-[#f7fafc] min-h-screen">

            {/* ── Blog Sub-header ── */}
            <div className="bg-white border-b border-gray-200 shadow-sm">
                <Container className="flex flex-col">
                    <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-gray-100 gap-3">
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-black text-slate-800 uppercase tracking-wide">
                                Welcome To <span style={{ color: "var(--navy)" }}>Ms Online</span> Blog
                            </h2>
                        </div>
                        <div className="flex gap-2">
                            {[
                                { icon: Facebook, bg: "#1877F2", href: "https://www.facebook.com/msonlineisp" },
                                { icon: Twitter, bg: "#1DA1F2", href: "#" },
                            ].map((s, i) => (
                                <a key={i} href={s.href} target={s.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                                    className="w-8 h-8 rounded text-white flex items-center justify-center hover:opacity-80 transition-opacity shadow-sm"
                                    style={{ backgroundColor: s.bg }}>
                                    <s.icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-400 py-3">
                        <Link href="/" className="hover:text-[var(--blue)] transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/blog" className="hover:text-[var(--blue)] transition-colors">Blog</Link>
                        <ChevronRight size={12} />
                        <span className="text-[var(--navy)] line-clamp-1 max-w-[300px]">{post.title}</span>
                    </nav>
                </Container>
            </div>

            {/* ── Main Content ── */}
            <Section size="md" className="pt-8">
                <Container className="content-split content-split--two-one items-start">

                    {/* ── Left: Article ── */}
                    <article className="w-full lg:w-2/3">
                        {/* Category badge */}
                        <span className="inline-block text-[11px] font-bold text-[var(--blue)] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4">
                            {category}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight mb-4">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 text-[13px] text-gray-400 font-medium mb-6 pb-6 border-b border-gray-100">
                            <span className="flex items-center gap-1.5"><User size={13} /> {post.author || "Ms Online Team"}</span>
                            <span className="flex items-center gap-1.5"><Calendar size={13} /> {formatDate(post.createdAt || post.date || "")}</span>
                            <span className="flex items-center gap-1.5"><Clock size={13} /> {readTime}</span>
                            {/* Share */}
                            <div className="flex items-center gap-2 ml-auto">
                                <span className="flex items-center gap-1 text-gray-400"><Share2 size={13} /> Share:</span>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="w-7 h-7 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: "#1877F2" }}>
                                    <Facebook size={13} />
                                </a>
                                <a href={`https://twitter.com/intent/tweet?url=${postUrl}`}
                                    target="_blank" rel="noopener noreferrer"
                                    className="w-7 h-7 rounded flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                                    style={{ backgroundColor: "#1DA1F2" }}>
                                    <Twitter size={13} />
                                </a>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                            <img src={thumbnail} alt={post.title} className="w-full h-64 md:h-96 object-cover" />
                        </div>

                        {/* Article Body — supports rich HTML from admin editor */}
                        <div
                            className="blog-content prose prose-slate max-w-none"
                            style={{
                                lineHeight: "1.9",
                                fontSize: "15px",
                                color: "#374151",
                            }}
                            dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt || ""}</p>` }}
                        />

                        {/* Tags */}
                        {(post.tags || []).length > 0 && (
                            <div className="flex items-center gap-2 flex-wrap mt-8 pt-6 border-t border-gray-100">
                                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">Tags:</span>
                                {post.tags.map((tag: string, i: number) => (
                                    <span key={i} className="text-[11px] font-bold text-slate-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-blue-50 hover:text-[var(--blue)] cursor-pointer transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Back link */}
                        <div className="mt-8">
                            <Link href="/blog" className="inline-flex items-center gap-2 text-[13px] font-bold text-[var(--blue)] hover:underline">
                                <ArrowLeft size={14} /> Back to Blog
                            </Link>
                        </div>
                    </article>

                    {/* ── Right: Sidebar ── */}
                    <aside className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-[80px]">

                        {/* Most Recent */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--navy)] to-[var(--blue)]" />
                            <h3 className="text-[14px] font-black text-slate-800 tracking-wider uppercase mb-5 flex flex-col">
                                MOST RECENT POSTS
                                <span className="w-10 h-1 bg-[var(--blue)] mt-2" />
                            </h3>
                            <div className="flex flex-col gap-4">
                                {recentPosts.map((p: any, idx: number) => {
                                    const ps = p.slug || p.id;
                                    const pt = p.thumbnail || p.image || "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=150&h=150&fit=crop";
                                    return (
                                        <Link key={idx} href={`/blog/${ps}`} className="flex gap-3 items-center group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                            <div className="w-16 h-14 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src={pt} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[12px] font-bold text-slate-700 leading-snug group-hover:text-[var(--blue)] transition-colors line-clamp-2">{p.title}</span>
                                                <span className="text-[10px] text-gray-400 font-medium">{formatDate(p.createdAt || p.date || "")}</span>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Facebook Widget */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#1877F2]" />
                            <h3 className="text-[14px] font-black text-slate-800 tracking-wider uppercase mb-5 flex flex-col">
                                LIKE US ON FACEBOOK
                                <span className="w-10 h-1 bg-[#1877F2] mt-2" />
                            </h3>
                            <div className="border border-gray-200 rounded-xl overflow-hidden bg-slate-50 hover:shadow-md transition-shadow">
                                <div className="p-3 bg-white flex gap-3 items-center border-b border-gray-100">
                                    <div className="w-10 h-10 rounded bg-slate-100 border border-gray-200 overflow-hidden flex items-center justify-center">
                                        <img src="/logo.png" alt="logo" className="w-8 object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <a href="https://www.facebook.com/msonlineisp" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1877F2] hover:underline text-[13px]">Ms Online Limited</a>
                                        <span className="text-gray-500 text-[10px] font-medium">173,647 followers</span>
                                    </div>
                                </div>
                                <div className="px-3 py-2 flex items-center gap-2 bg-white border-b border-gray-100">
                                    <a href="https://www.facebook.com/msonlineisp" target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1877F2] text-white rounded text-[11px] font-bold hover:opacity-90 transition-opacity">
                                        <Facebook size={12} /> Follow Page
                                    </a>
                                </div>
                                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&h=400&fit=crop')" }} />
                            </div>
                        </div>

                    </aside>
                </Container>
            </Section>

        </div>
    );
}
