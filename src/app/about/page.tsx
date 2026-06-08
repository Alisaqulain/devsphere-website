import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import SectionHeading from "@/components/sections/SectionHeading";
import AnimatedCounter from "@/components/sections/AnimatedCounter";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import CTASection from "@/components/sections/CTASection";
import MagneticButton from "@/components/sections/MagneticButton";

export const metadata = pageMetadata(
  "About Us",
  "DevSphere Solutions — premium full-stack development agency serving India, Dubai, Oman & global clients.",
  "/about"
);

const timeline = [
  { year: "2018", title: "Founded", desc: "Started as a software development studio in Muzaffarnagar, India." },
  { year: "2020", title: "Global Expansion", desc: "Delivered projects for clients in UAE and international markets." },
  { year: "2023", title: "15+ Projects", desc: "Crossed 15 successful project deliveries across multiple industries." },
  { year: "2025", title: "Premium Agency", desc: "Full-stack SaaS, CRM, EV platforms, and enterprise solutions." },
];

const values = ["Client-First Delivery", "Production-Ready Code", "Transparent Process", "Long-Term Partnership"];

export default function AboutPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="About"
            title="Building Digital Products That"
            highlight="Transform Businesses"
            description="DevSphere Solutions is a premium software development agency crafting websites, SaaS platforms, mobile apps, and admin dashboards for global clients."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="gradient-border rounded-3xl p-8 bg-card/40">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To build scalable digital products that help businesses grow — with production-ready code,
                SEO-friendly architecture, and long-term client partnerships across India, Dubai, Oman, and beyond.
              </p>
            </div>
            <div className="gradient-border rounded-3xl p-8 bg-card/40">
              <h2 className="text-2xl font-bold mb-4">What We Build</h2>
              <p className="text-muted-foreground leading-relaxed">
                Websites, SaaS platforms, CRM systems, e-commerce stores, mobile apps, admin dashboards,
                AI integrations, and cloud-deployed enterprise solutions tailored to each client&apos;s goals.
              </p>
            </div>
          </div>

          <AnimatedCounter />

          <div className="mt-16 mb-16">
            <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item) => (
                <div key={item.year} className="gradient-border rounded-3xl p-6 bg-card/40">
                  <span className="text-2xl font-black text-gradient">{item.year}</span>
                  <h3 className="font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-3xl p-8 bg-card/40 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {values.map((v) => (
                <span key={v} className="px-5 py-2 rounded-full glass-card text-sm font-medium border border-primary/20">
                  {v}
                </span>
              ))}
            </div>
          </div>

          <div className="gradient-border rounded-3xl p-10 bg-card/30 text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Team</h2>
            <p className="text-muted-foreground text-sm">Team photos and profiles — update with real team members</p>
          </div>

          <div className="text-center">
            <MagneticButton href="/contact">Work With Us</MagneticButton>
          </div>
        </div>
      </section>
      <ProcessTimeline />
      <CTASection />
    </PageWrapper>
  );
}
