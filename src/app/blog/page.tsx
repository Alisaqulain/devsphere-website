import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import SectionHeading from "@/components/sections/SectionHeading";
import { blogPosts } from "@/data/site";

export const metadata = pageMetadata(
  "Blog & Insights",
  "Development insights, SaaS guides, and web development tips from DevSphere Solutions.",
  "/blog"
);

export default function BlogPage() {
  return (
    <PageWrapper>
      <section className="section-padding">
        <div className="container-wide max-w-4xl">
          <SectionHeading
            eyebrow="Blog"
            title="Insights &"
            highlight="Updates"
            description="Tips, guides, and industry insights from our team."
          />
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block gradient-border rounded-3xl p-6 sm:p-8 bg-card/40 hover:bg-card/60 transition-all group"
              >
                <span className="text-xs font-semibold text-primary">{post.category}</span>
                <h2 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
