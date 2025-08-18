import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientWrapper from "./ClientWrapper";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://devspheresolutions.in"),
  title: {
    default: "DevSphere Solutions",
    template: "%s | DevSphere Solutions",
  },
  description: "Smart solutions for a smarter world. We design and build high‑quality Web, Mobile and CRM products for startups and enterprises.",
  applicationName: "DevSphere Solutions",
  keywords: [
    "DevSphere",
    "software development",
    "web development",
    "mobile apps",
    "CRM",
    "React",
    "Next.js",
    "Tailwind",
  ],
  authors: [{ name: "DevSphere Solutions", url: "https://devspheresolutions.in" }],
  creator: "DevSphere Solutions",
  publisher: "DevSphere Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://devspheresolutions.in/",
    title: "DevSphere Solutions",
    description: "Smart solutions for a smarter world. Web, Mobile and CRM products built with care.",
    siteName: "DevSphere Solutions",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "DevSphere Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSphere Solutions",
    description: "Smart solutions for a smarter world.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.jpg" }
    ],
    apple: "/logo.jpg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DevSphere Solutions",
            url: "https://devspheresolutions.in",
            logo: "https://devspheresolutions.in/logo.jpg",
            sameAs: [
              "https://www.linkedin.com/",
              "https://twitter.com/"
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: "info@devspheresolutions.in",
                telephone: "+91-9457818861",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["en", "hi"]
              }
            ]
          })}
        </Script>
      </body>
    </html>
  );
}
