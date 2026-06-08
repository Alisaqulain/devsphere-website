import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingSocial from "@/components/layout/FloatingSocial";
import Toaster from "@/components/providers/Toaster";
import JsonLd, { organizationSchema, localBusinessSchema, websiteSchema } from "@/components/seo/JsonLd";
import { defaultMetadata } from "@/lib/seo";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/png" href="/logoupdate.png" />
        <link rel="apple-touch-icon" href="/logoupdate.png" />
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
      </head>
      <body className={`${plusJakarta.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingSocial />
        <Toaster />
      </body>
    </html>
  );
}
