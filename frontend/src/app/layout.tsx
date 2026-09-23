import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfferPopupBanner from "@/components/OfferPopupBanner";
export const metadata: Metadata = {
  title: {
    template: "%s | Ms Online",
    default: "Ms Online | High Speed Broadband Internet Provider in Dhaka",
  },
  description:
    "Ms Online is a BTRC licensed ISP providing high-speed fiber internet, corporate broadband, IP Telephony, and web hosting solutions in Dhaka, Bangladesh.",
  keywords: ["ISP Bangladesh", "broadband internet Dhaka", "fiber internet", "FTTH", "corporate internet", "Ms Online"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Ms Online | High Speed Internet Provider",
    description: "BTRC Licensed Internet Service Provider in Dhaka, Bangladesh",
    siteName: "Ms Online",
    locale: "en_BD",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full" data-scroll-behavior="smooth">
      <body className="min-h-screen w-full m-0 bg-white p-0 font-sans" suppressHydrationWarning>
        <Header />
        <div className="w-full overflow-x-hidden">
          <OfferPopupBanner />
          <main className="w-full block">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
