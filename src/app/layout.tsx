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
  title: "Hafeez Siddiqui | Enterprise n8n & AI Automation Developer",
  description:
    "Hire Hafeez Siddiqui — Expert in n8n automation, AI workflow systems, and OpenAI integrations. Helping US, UK, Canada, and Australia companies automate processes, save time, and scale efficiently.",
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
    title: "Hafeez Siddiqui | Enterprise n8n & AI Automation Developer",
    description:
      "Portfolio of Hafeez Siddiqui, helping US, UK, Canada, and Australia businesses automate workflows, integrate systems, and scale efficiently using n8n and AI solutions.",
    url: "https://automatewithhafeez.vercel.app/",
    siteName: "Hafeez Portfolio",
    images: [
      {
        url: "https://automatewithhafeez.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hafeez Siddiqui Portfolio | AI & Automation Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafeez Siddiqui | Enterprise Automation & AI Developer",
    description:
      "Expert n8n and AI workflow developer helping high-value clients in US, UK, Canada, and Australia automate business processes and scale efficiently.",
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
