"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { MODAL_DATA } from "@/data/projectModalsData";
const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

interface ModalData {
  title: string;
  subtitle: string;
  proximamente?: boolean;
  aboutProject?: string;
  problem?: string;
  objectives?: string[];
  research?: string;
  designSystem?: string;
  userType?: string;
  methodology?: string[];
  analysis?: string;
  resultado?: string;
  images?: string[];
  processImages?: string[];
  presentationUrl?: string;
  prototypeUrl?: string;
  mockupImage?: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const projects = [
    {
      id: 10,
      title: "Propsail",
      description: "Landing page en integración con IA, enfoque en sector inmobiliario y especial atención al aumento de conversión.",
      image: "/Frame.jpg",
      category: "Web App",
      technologies: ["Figma", "UX", "UI", "Design System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Start CRM",
      description: "Sistema CRM completo con diseño centrado en la experiencia del usuario y eficiencia operativa",
      image: "/MacBook%20%2313.jpg",
      category: "Web App",
      technologies: ["Figma", "UX", "UI", "CRM", "Design System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Blog MindDev Perú",
      description: "Diseño y desarrollo de blog para MindDev Perú, enfocado en contenido técnico y experiencias de usuario",
      image: "/mockup minddev.jpeg",
      category: "Web Design",
      technologies: ["Figma", "UX", "UI", "Web Design"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "Binance",
      description: "Rediseño UX/UI de la app: optimización visual y de flujo para reducir la sobrecarga cognitiva y mejorar la confianza del usuario.",
      image: "/binance.png",
      category: "Portfolio",
      technologies: ["Figma", "UX", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "IEB - Proyecto técnico",
      description: "Proyecto técnico realizado en 4 días para IEB (personal), enfocado en diseño de interfaces y experiencia de usuario",
      image: "/Image ieb.jpg",
      category: "Web Design",
      technologies: ["Figma", "UX", "UI", "Design System"],
      liveUrl: "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1",
      githubUrl: "#"
    },
    {
      id: 1,
      title: "Worldtrip e-commerce",
      description: "Próximamente..",
      image: "/avion.jpg",
      category: "Mobile App",
      technologies: ["Figma", "Web", "Sitemap", "Card sorting", "Tree testing"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Alpay",
      description: "Plataforma de administracion inmobiliria, mejoras y diseño de landing page al estilo solicitado",
      image: "/alpayxs.png",
      category: "Mobile App",
      technologies: ["Figma", "UX", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "Locker App",
      description: "Próximamente..",
      image: "/lockerapp.png",
      category: "Mobile App",
      technologies: ["Figma", "UX", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mercado Libre Research",
      description: "Rediseño de la funcionalidad de filtrados de una de las plataformas de e-commerce más grande de Latinoamérica",
      image: "/mercadolibre.jpeg",
      category: "Web App",
      technologies: ["Figma", "Card sorting", "Tree testing", "UX"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Desafio Buenbit",
      description: "Desafio basado en el re-diseño del Home de la app Buenbit",
      image: "/foto buenbit.png",
      category: "Mobile App",
      technologies: ["Figma", "UX Design", "Mobile UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Starbucks",
      description: "Rediseño de la web Starbucks Argentina. Enfocado en landing page para descarga de su app",
      image: "/starbucks.jpeg",
      category: "Mobile App",
      technologies: ["Figma", "Responsive", "Research", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Dogwalk App",
      description: "Primer proyecto de mi Diplomatura en UX/UI. Centrado principalmente en estructuración. No estética",
      image: "/dogandshe.jpeg",
      category: "Web App",
      technologies: ["Figma", "React", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 relative overflow-hidden bg-background"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full tech-badge text-primary text-sm font-medium mb-6"
          >
            <Eye className="w-4 h-4 mr-2" />
            Proyectos
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Proyectos realizados
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mi enfoque en el diseño
            centrado en el usuario y la creación de experiencias digitales excepcionales.
          </p>
        </motion.div>

        {/* Projects: grid 2 columnas, sin animación */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenModalId(project.id)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border dark:border-white/30 hover:border-primary/50 dark:hover:border-white/50 transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer touch-manipulation active:scale-[0.99]"
              onClick={() => setOpenModalId(project.id)}
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 dark:from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 sm:p-5 bg-card border-t border-border dark:border-white/20 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-foreground dark:text-white mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground dark:text-white/70 text-xs sm:text-sm line-clamp-2 mb-2 sm:mb-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-muted dark:bg-zinc-700 text-primary dark:text-zinc-100 text-xs rounded-md border border-border dark:border-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Un solo modal: se monta solo cuando hay uno abierto */}
      {openModalId != null && (() => {
        const selectedProject = projects.find((p) => p.id === openModalId);
        if (!selectedProject) return null;
        const raw = MODAL_DATA[openModalId];
        const data = raw
          ? { ...raw, mockupImage: raw.mockupImage || selectedProject.image }
          : {
              title: selectedProject.title,
              subtitle: selectedProject.description,
              aboutProject: "",
              methodology: [],
              analysis: "",
              resultado: "",
              research: "",
              designSystem: "",
              images: [],
              processImages: [],
              presentationUrl: "",
              prototypeUrl: "",
              mockupImage: selectedProject.image,
            };
        return (
          <ProjectModal
            key={openModalId}
            isOpen
            onClose={() => setOpenModalId(null)}
            title={data.title}
            subtitle={data.subtitle}
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
        );
      })()}
    </section>
  );
};

export default Projects;