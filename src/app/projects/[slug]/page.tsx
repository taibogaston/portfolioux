import ProjectDetailView from "@/components/ProjectDetailView";
import ProjectNavCarousel from "@/components/ProjectNavCarousel";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { MODAL_DATA } from "@/data/projectModalsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Maitena`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const raw = MODAL_DATA[project.id];
  const data = raw
    ? { ...raw, mockupImage: raw.mockupImage || project.image }
    : {
        title: project.title,
        subtitle: project.description,
        aboutProject: "",
        methodology: [] as string[],
        analysis: "",
        resultado: "",
        research: "",
        designSystem: "",
        images: [] as string[],
        processImages: [] as string[],
        presentationUrl: "",
        prototypeUrl: "",
        mockupImage: project.image,
      };

  return (
    <main className="flex-1 w-full pt-24 sm:pt-28 pb-12">
      {/* Un solo contenedor: carrusel y tarjeta comparten la misma grilla horizontal que el resto del sitio */}
      <div className="container mx-auto w-full px-6 sm:px-[var(--site-gutter-x)]">
        <ProjectNavCarousel currentSlug={slug} />
        <ProjectDetailView
          title={data.title}
          subtitle={data.subtitle}
          hideTitle
          proximamente={data.proximamente}
          aboutProject={data.aboutProject}
          problem={data.problem}
          objectives={data.objectives}
          research={data.research}
          designSystem={data.designSystem}
          userType={data.userType}
          methodology={data.methodology}
          analysis={data.analysis}
          resultado={data.resultado}
          impacto={data.impacto}
          miRol={data.miRol}
          images={data.images}
          processImages={data.processImages}
          presentationUrl={data.presentationUrl}
          prototypeUrl={data.prototypeUrl}
          mockupImage={data.mockupImage}
        />
      </div>
    </main>
  );
}
