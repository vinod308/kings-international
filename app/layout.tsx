import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBubble from "@/components/layout/ChatBubble";
import { CONTACT, CONTACT_CONTENT } from "@/lib/contact";
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
  title: "Kings International Ltd. - Premium Hand-Crafted Leather Goods, Kanpur",
  description:
    "Kings International Ltd. - vertically integrated manufacturer and exporter of hand-crafted leather goods since 1977. Belts, bags, saddlery, pet accessories, and OEM/private-label manufacturing from Kanpur, India.",
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
