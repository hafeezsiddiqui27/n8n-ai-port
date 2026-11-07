import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hafeez Siddiqui | Reducing Manual Work With Automation Systems",
    template: "%s | Hafeez Siddiqui Automation",
  },
  description:
    "I help teams and businesses reclaim 10+ hours each week previously lost to repetitive tasks. This freed time enables greater focus on growth initiatives, strategic priorities, and high-impact work that drives meaningful progress.",
  keywords: [
    "automation engineer",
    "custom automation",
    "business automation",
    "automate repetitive tasks",
    "save time automation",
    "reclaim hours weekly",
    "unlock time for growth",
    "focus on strategic work",
    "API connections",
    "n8n automation",
    "reduce repetitive work",
    "high-impact automation",
  ],
  authors: [
    { name: "Hafeez Siddiqui", url: "https://automatewithhafeez.vercel.app/" },
  ],
  creator: "Hafeez Siddiqui",
  publisher: "Hafeez Siddiqui",
  metadataBase: new URL("https://automatewithhafeez.vercel.app"),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hafeez Siddiqui | Reducing Manual Work With Automation Systems",
    description:
      "Reclaim 10+ hours per week from repetitive tasks. I build custom automation systems that free teams to concentrate on growth, strategy, and the work that actually moves the business forward.",
    url: "https://automatewithhafeez.vercel.app",
    siteName: "Hafeez Siddiqui",
    images: [
      {
        url: "https://automatewithhafeez.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hafeez Siddiqui – Automation Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafeez Siddiqui | Reducing Manual Work With Automation Systems",
    description:
      "Save 10+ hours weekly on repetitive work. Custom automation lets your team focus on strategic growth and high-value priorities instead of routine tasks.",
    creator: "@HafeezuSiddiqui",
    site: "@HafeezuSiddiqui",
    images: ["https://automatewithhafeez.vercel.app/og-image.png"],
  },
  verification: {
    google: "SgWmaPGBlxWvDxvsEIcvwPqgXeXxWvUrdOZnBFGqrlQ",
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Hafeez Siddiqui | Reducing Manual Work With Automation Systems",
              image: "https://automatewithhafeez.vercel.app/og-image.png",
              description:
                "I help teams recover more than 10 hours per week previously spent on repetitive tasks. This additional time supports investment in growth strategies, strategic priorities, and high-impact initiatives that create lasting value.",
              url: "https://automatewithhafeez.vercel.app",
              email: "contact@hafeezsiddiqui.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Remote / Worldwide",
              },
              areaServed: [
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "Australia" },
                { "@type": "Country", name: "European Union" },
                { "@type": "Country", name: "United Arab Emirates" },
                { "@type": "Country", name: "Saudi Arabia" },
                { "@type": "Country", name: "Singapore" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                description: "Services available by appointment",
              },
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Automation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Automation",
                      description:
                        "Systems that manage repetitive tasks automatically, freeing over 10 hours weekly for strategic and growth-focused work",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tool & Data Connections",
                      description:
                        "Connections between systems that eliminate time-consuming manual handling",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
                "https://github.com/hafeezsiddiqui27",
                "https://twitter.com/HafeezuSiddiqui",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
