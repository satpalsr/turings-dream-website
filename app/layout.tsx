import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turing's Dream - AI Residency Program",
  description: "A six-week residency program in Bangalore for programmers to explore AI deeply. Join a community of smart, driven peers working on cutting-edge AI projects.",
  keywords: ["AI residency", "artificial intelligence", "programming", "Bangalore", "hackhouse", "AI research", "machine learning"],
  authors: [{ name: "Paras Chopra" }],
  openGraph: {
    title: "Turing's Dream - AI Residency Program",
    description: "A six-week residency program in Bangalore for programmers to explore AI deeply",
    url: "https://turingsdream.co",
    siteName: "Turing's Dream",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
