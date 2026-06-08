import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devspheresolutions.com";
const SITE_NAME = "DevSphere Solutions";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DevSphere Solutions | Premium Web & SaaS Development Agency",
    template: "%s | DevSphere Solutions",
  },
  description:
    "DevSphere Solutions — full-stack web development company in India. We build websites, SaaS, mobile apps, admin dashboards, and AI integrations for India, Dubai, Oman & global clients.",
  keywords: [
    "web development company in India",
    "full stack development agency",
    "Next.js development company",
    "website development services",
    "SaaS development company",
    "mobile app development company",
    "custom software development",
    "DevSphere Solutions",
    "software company in Muzaffarnagar",
    "web development for Dubai businesses",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "DevSphere Solutions | Premium Digital Agency",
    description:
      "Full-stack development agency building scalable websites, SaaS platforms, and mobile apps for global businesses.",
    images: [{ url: "/logoupdate.png", width: 1200, height: 630, alt: "DevSphere Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSphere Solutions",
    description: "Premium web & SaaS development agency",
    images: ["/logoupdate.png"],
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
    },
  };
}

export { SITE_URL, SITE_NAME };
