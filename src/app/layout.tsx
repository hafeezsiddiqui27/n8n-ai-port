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
  title: "Hafeez Siddiqui | Automate Repetitive Tasks, Focus on Growth",
  description:
    "I help teams and startups stop wasting hours on repetitive tasks. Hafeez Siddiqui designs automation workflows that connect systems, streamline operations, and let teams focus on high-value work and growth.",
  keywords: [
    "n8n automation developer",
    "AI workflow automation",
    "OpenAI integration",
    "enterprise automation",
    "business process automation",
    "workflow developer",
    "Next.js automation",
    "automation consultant US",
    "automation consultant UK",
    "automation consultant Canada",
    "automation consultant Australia",
  ],
  authors: [
    { name: "Hafeez Siddiqui", url: "https://automatewithhafeez.vercel.app/" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
    },
  ],
  creator: "Hafeez Siddiqui",
  publisher: "Hafeez Siddiqui",
  metadataBase: new URL("https://automatewithhafeez.vercel.app/"),
  alternates: {
    canonical: "https://automatewithhafeez.vercel.app/",
  },
  openGraph: {
    title: "Hafeez Siddiqui | Automate Repetitive Tasks, Focus on Growth",
    description:
      "Stop wasting hours on manual tasks. Hafeez Siddiqui builds automation workflows that streamline operations, integrate systems, and free teams to focus on growth.",
    url: "https://automatewithhafeez.vercel.app/",
    siteName: "Automate with Hafeez",
    images: [
      {
        url: "https://automatewithhafeez.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hafeez Siddiqui Portfolio | Automation & Workflow Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafeez Siddiqui | Automate Repetitive Tasks, Focus on Growth",
    description:
      "Hafeez Siddiqui helps teams and startups automate workflows, integrate systems, and focus on high-value work while saving hours daily.",
    creator: "@HafeezuSiddiqui",
    images: ["https://automatewithhafeez.vercel.app/og-image.png"],
  },
  other: {
    "google-site-verification": "SgWmaPGBlxWvDxvsEIcvwPqgXeXxWvUrdOZnBFGqrlQ",
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
