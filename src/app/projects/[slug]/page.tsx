import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import CaseStudyLayout from "@/components/projects/CaseStudyLayout";
import PageWrapper from "@/components/sections/PageWrapper";
import JsonLd, { breadcrumbSchema, creativeWorkSchema } from "@/components/seo/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.description, `/projects/${slug}`);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PageWrapper className="!pt-24">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Projects", url: `${SITE_URL}/projects` },
            { name: project.title, url: `${SITE_URL}/projects/${slug}` },
          ]),
          creativeWorkSchema(project),
        ]}
      />
      <CaseStudyLayout project={project} />
    </PageWrapper>
  );
}
