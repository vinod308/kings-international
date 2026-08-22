import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBubble from "@/components/layout/ChatBubble";
import { CONTACT, CONTACT_CONTENT } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kings International - Hand-Crafted Leather Goods, Kanpur",
  description:
    "Vertically integrated manufacturer and exporter of hand-crafted leather goods since 1977 - belts, bags, saddlery, pet accessories, OEM from Kanpur, India.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappHref =
    CONTACT_CONTENT.quickLinks.find((l) => l.label === "WhatsApp")?.href ??
    `https://wa.me/${CONTACT.india.phones[0].replace(/\D/g, "")}`;

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S0FLRVXJ5Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0FLRVXJ5Q');
          `}
        </Script>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBubble
          whatsappHref={whatsappHref}
          emails={CONTACT_CONTENT.chatWidget.emails}
          phones={CONTACT_CONTENT.chatWidget.phones}
        />
      </body>
    </html>
  );
}
