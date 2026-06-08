import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import PageWrapper from "@/components/sections/PageWrapper";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata(post.title, post.excerpt, `/blog/${slug}`);
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <PageWrapper>
      <article className="section-padding">
        <div className="container-wide max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="text-xs font-semibold text-primary">{post.category}</span>
          <h1 className="text-4xl font-bold mt-2 mb-4 tracking-tight">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-8">{post.date}</p>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <p className="text-muted-foreground">
              Full article content placeholder — update with real blog content or connect a CMS later.
            </p>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
