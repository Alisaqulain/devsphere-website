import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";

export const metadata = pageMetadata("Privacy Policy", "DevSphere Solutions privacy policy.", "/privacy");

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Privacy Policy</h1>
          <div className="gradient-border rounded-3xl p-8 bg-card/40 space-y-6 text-muted-foreground leading-relaxed">
            <p>Last updated: {new Date().getFullYear()}</p>
            <p>DevSphere Solutions respects your privacy. This policy explains how we collect, use, and protect your information.</p>
            <h2 className="text-xl font-bold text-foreground">Information We Collect</h2>
            <p>We collect information you provide via contact forms including name, email, phone, and project details.</p>
            <h2 className="text-xl font-bold text-foreground">How We Use Information</h2>
            <p>We use your information to respond to enquiries, provide services, and improve our website.</p>
            <h2 className="text-xl font-bold text-foreground">Contact</h2>
            <p>For privacy questions, email devsspheresolutions@gmail.com</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
