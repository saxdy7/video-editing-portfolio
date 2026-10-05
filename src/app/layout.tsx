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
  title: "Sandeep Mamidala — Video Editor & Motion Designer",
  description:
    "Cinematic video editor specializing in reels, social media content, SaaS product videos, long-form editing, motion graphics and promotional content.",
  keywords: [
    "video editor",
    "cinematic video editor",
    "reels editor",
    "Instagram reels editor",
    "SaaS video editor",
    "product video editor",
    "motion graphics",
    "Premiere Pro editor",
    "After Effects editor",
    "social media video editor",
    "YouTube video editor",
  ],
  authors: [{ name: "Sandeep Mamidala", url: "https://linkedin.com/in/sandeepmamidala" }],
  creator: "Sandeep Mamidala",
  openGraph: {
    title: "Sandeep Mamidala — Video Editor & Motion Designer",
    description:
      "From scroll-stopping reels to cinematic long-form content and SaaS product videos, I create edits built around strong storytelling, pacing and visual impact.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandeep Mamidala — Video Editor & Motion Designer",
    description:
      "Cinematic video editor specializing in reels, social media content, SaaS product videos, long-form editing, motion graphics and promotional content.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070a] text-[#f1f5f9]">
        {/* Cinematic film grain and vignette overlays */}
        <div className="film-grain" aria-hidden="true" />
        <div className="cinematic-vignette" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
