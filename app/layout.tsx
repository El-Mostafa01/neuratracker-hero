import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeuraTracker — Retail Execution · IA",
  description:
    "Vos équipes terrain photographient les rayons — NeuraTracker en extrait ruptures, part de linéaire et conformité planogramme, en quelques secondes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans">{children}</body>
    </html>
  );
}
