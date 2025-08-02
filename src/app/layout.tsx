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
  title: "Ayush Kumar ",
  description: "My personal website",
  keywords: ["Ayush Kumar", "Developer", "Portfolio"],
  authors: [{ name: "Ayush Kumar", url: "https://akdest.vercel.app" }],
  creator: "Ayush Kumar",
  openGraph: {
    title: "Ayush Kumar",
    description: "My personal website",
    url: "https://akdest.vercel.app",
    siteName: "Ayush Kumar",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar",
    description: "My personal website",
    creator: "@ayushkumar_dev",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://akdest.vercel.app",
    languages: {
      "en-US": "https://akdest.vercel.app",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      "bing-site-verification": "bing-verification-code",
    },
  },
  appleWebApp: {
    capable: true,
    title: "Ayush Kumar",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1",
  colorScheme: "light dark",
  referrer: "no-referrer-when-downgrade",
  generator: "Next.js",
  applicationName: "Ayush Kumar Portfolio",
  category: "portfolio",
  publisher: "Ayush Kumar",
  
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
