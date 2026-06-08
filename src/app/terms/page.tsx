import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";

export const metadata = pageMetadata("Terms of Service", "DevSphere Solutions terms of service.", "/terms");

export default function TermsPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Terms of Service</h1>
          <div className="gradient-border rounded-3xl p-8 bg-card/40 space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().getFullYear()}</p>
            <p>By using the DevSphere Solutions website, you agree to these terms.</p>
            <h2 className="text-xl font-bold text-foreground">Services</h2>
            <p>We provide web development, SaaS, mobile app, and related digital services as described on our website.</p>
            <h2 className="text-xl font-bold text-foreground">Intellectual Property</h2>
            <p>All website content, branding, and code are owned by DevSphere Solutions unless otherwise agreed in writing.</p>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p>For questions about these terms, email devsspheresolutions@gmail.com</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
