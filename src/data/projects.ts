/** Listado único de proyectos (home + rutas /projects/[slug]) */

export interface ProjectSummary {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const PROJECTS: ProjectSummary[] = [
  {
    id: 10,
    slug: "propsail",
    title: "Propsail",
    description:
      "Landing page en integración con IA, enfoque en sector inmobiliario y especial atención al aumento de conversión.",
    image: "/propsail card.png",
    category: "Web App",
    technologies: ["Figma", "UX", "UI", "Design System"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    slug: "start-crm",
    title: "Start CRM",
    description:
      "Sistema CRM completo con diseño centrado en la experiencia del usuario y eficiencia operativa",
    image: "/MacBook%20%2313.jpg",
    category: "Web App",
    technologies: ["Figma", "UX", "UI", "CRM", "Design System"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    slug: "blog-minddev-peru",
    title: "MindDev",
    description:
      "Diseño y desarrollo de blog para MindDev Perú, enfocado en contenido técnico y experiencias de usuario",
    image: "/card%20minddev.jpg",
    category: "Web Design",
    technologies: ["Figma", "UX", "UI", "Web Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    slug: "binance",
    title: "Binance",
    description:
      "Rediseño UX/UI de la app: optimización visual y de flujo para reducir la sobrecarga cognitiva y mejorar la confianza del usuario.",
    image: "/binance.png",
    category: "Portfolio",
    technologies: ["Figma", "UX", "UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    slug: "ieb-proyecto-tecnico",
    title: "IEB+",
    description:
      "Proyecto técnico realizado en 4 días para IEB (personal), enfocado en diseño de interfaces y experiencia de usuario",
    image: "/Image ieb.jpg",
    category: "Web Design",
    technologies: ["Figma", "UX", "UI", "Design System"],
    liveUrl:
      "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1",
    githubUrl: "#",
  },
  {
    id: 1,
    slug: "worldtrip-ecommerce",
    title: "WorldTrip",
    description: "Próximamente..",
    image: "/avion.jpg",
    category: "Mobile App",
    technologies: ["Figma", "Web", "Sitemap", "Card sorting", "Tree testing"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    slug: "locker-app",
    title: "Locker App",
    description: "Próximamente..",
    image: "/lockerapp.png",
    category: "Mobile App",
    technologies: ["Figma", "UX", "UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    slug: "starbucks",
    title: "Starbucks",
    description:
      "Rediseño de la web Starbucks Argentina. Enfocado en landing page para descarga de su app",
    image: "/starbucks.jpeg",
    category: "Mobile App",
    technologies: ["Figma", "Responsive", "Research", "UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    slug: "alpay",
    title: "Alpay",
    description:
      "Plataforma de administracion inmobiliria, mejoras y diseño de landing page al estilo solicitado",
    image: "/card alpay.png",
    category: "Mobile App",
    technologies: ["Figma", "UX", "UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    slug: "mercado-libre-research",
    title: "Mercado Libre",
    description:
      "Rediseño de la funcionalidad de filtrados de una de las plataformas de e-commerce más grande de Latinoamérica",
    image: "/mercadolibre.jpeg",
    category: "Web App",
    technologies: ["Figma", "Card sorting", "Tree testing", "UX"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    slug: "desafio-buenbit",
    title: "Buenbit",
    description: "Desafio basado en el re-diseño del Home de la app Buenbit",
    image: "/foto buenbit.png",
    category: "Mobile App",
    technologies: ["Figma", "UX Design", "Mobile UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    slug: "dogwalk-app",
    title: "Dogwalk App",
    description:
      "Primer proyecto de mi Diplomatura en UX/UI. Centrado principalmente en estructuración. No estética",
    image: "/dogandshe.jpeg",
    category: "Web App",
    technologies: ["Figma", "React", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function getProjectBySlug(slug: string): ProjectSummary | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

/** Índice del proyecto en el listado (home / carrusel) */
export function getProjectIndexBySlug(slug: string): number {
  return PROJECTS.findIndex((p) => p.slug === slug);
}
