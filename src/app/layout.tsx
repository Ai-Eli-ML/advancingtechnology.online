import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  title: "AdvancingTechnology | AI-Powered Business Solutions",
  description: "Enterprise-grade AI solutions and autonomous agents for modern businesses. Specializing in therapeutic AI, business intelligence, and custom development.",
  keywords: ["AI solutions", "therapeutic AI", "autonomous agents", "business intelligence", "Next.js development", "enterprise software", "AI automation"],
  authors: [{ name: "AdvancingTechnology" }],
  creator: "AdvancingTechnology",
  publisher: "AdvancingTechnology",
  metadataBase: new URL('https://advancingtechnology.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://advancingtechnology.online',
    siteName: 'AdvancingTechnology',
    title: 'AdvancingTechnology | AI-Powered Business Solutions',
    description: 'Enterprise-grade AI solutions and autonomous agents for modern businesses',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AdvancingTechnology - AI-Powered Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdvancingTechnology | AI-Powered Business Solutions',
    description: 'Enterprise-grade AI solutions and autonomous agents for modern businesses',
    images: ['/og-image.png'],
    creator: '@AdvancingTech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <Analytics />
      </body>
    </html>
  );
}
