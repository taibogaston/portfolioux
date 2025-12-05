"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const projects = [
    {
      id: 9,
      title: "Start CRM",
      description: "Sistema CRM completo con diseño centrado en la experiencia del usuario y eficiencia operativa",
      image: "/jovenes-colegas-concentrados-sentados-en-la-oficina-de-coworking.jpg",
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
      id: 7,
      title: "IEB - Proyecto técnico",
      description: "Proyecto técnico realizado para IEB (personal), enfocado en diseño de interfaces y experiencia de usuario",
      image: "/Image ieb.jpg",
      category: "Web Design",
      technologies: ["Figma", "UX", "UI", "Design System"],
      liveUrl: "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1",
      githubUrl: "#"
    },
    {
      id: 1,
      title: "Worldtrip e-commerce",
      description: "Web e-commerce, con orientación en viajes y paquetes. Modelo responsive",
      image: "/avion.jpg",
      category: "Mobile App",
      technologies: ["Figma", "Web", "Sitemap", "Card sorting", "Tree testing"],
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
      id: 3,
      title: "Love - Art Gallery",
      description: "Trabajo en proceso. Congeniado con diversas diseñadoras de todo el mundo",
      image: "/love.jpeg",
      category: "Mobile App",
      technologies: ["Figma", "UX", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Desafio Buenbit",
      description: "Desafio basado en el re-diseño del Home de la app Buenbit",
      image: "/wallet.jpeg",
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
      className="py-20 relative overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl z-0" />
      
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

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative rounded-2xl overflow-hidden bg-gray-100/80 dark:bg-white/10 border border-gray-200 dark:border-white/30 hover:border-gray-300 dark:hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300/20 dark:hover:shadow-white/20 hover:-translate-y-2 flex flex-col ${project.id === 2 ? 'cursor-pointer' : 'md:cursor-default cursor-pointer'}`}
            >
              {/* Clickable overlay */}
                <button
                onClick={() => setOpenModalId(project.id)}
                  className="absolute inset-0 z-10"
                  aria-label={`Ver proyecto ${project.title}`}
                />
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 bg-gray-50/80 dark:bg-white/10 flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-white/70 mb-3 leading-relaxed text-sm line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-white/20 text-gray-800 dark:text-white text-xs rounded-md border border-gray-300 dark:border-white/20"
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

      {/* Modales de proyectos */}
      {projects.map((project) => {
        // Datos por defecto para cada proyecto (se pueden editar después)
        const modalData: Record<number, any> = {
          1: {
            title: "Worldtrip e-commerce",
            subtitle: "Web e-commerce, con orientación en viajes y paquetes. Modelo responsive",
            aboutProject: "Descripción del proyecto...",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            images: [],
            presentationUrl: "https://www.figma.com/board/Txm6rmVc23s3eiPYq9Ya3U/Worldtrip?node-id=0-1&t=MVhe9WdvsBLzHNp1-1",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          2: {
            title: "Mercado Libre Research",
            subtitle: "Rediseño de la funcionalidad de filtrados",
            aboutProject: "Este proyecto consistió en el rediseño de la funcionalidad de filtrados de MercadoLibre, una de las plataformas de e-commerce más grandes de Latinoamérica. El objetivo fue mejorar la experiencia del usuario al buscar y filtrar productos, haciendo el proceso más intuitivo y eficiente.",
            methodology: ["<strong>3 Card Sorting abiertos</strong>, siendo el primero para evaluación de errores estructurales de la interfaz actual, y los demás para la evaluación de cambios realizados dentro de los márgenes de conclusiones investigativas basadas en los usuarios.", "Análisis de dendrograma para identificar agrupaciones naturales de filtros según la mentalidad de los usuarios", "Tree Testing para validar la estructura de navegación propuesta", "Diseño de interfaz enfocado en usabilidad y accesibilidad basado en los hallazgos", "Prototipado y testing iterativo"],
            analysis: "Se utilizó el análisis de dendrograma para identificar las agrupaciones naturales que los usuarios realizaron durante los 3 Card Sorting abiertos. Este análisis permitió visualizar las relaciones entre los diferentes filtros y validar la arquitectura final del sistema de filtros.",
            images: [
              "/Screenshot 2025-12-03 135719.png",
              "/Screenshot 2025-12-03 135843.png",
              "/Screenshot 2025-12-03 145907.png",
              "/Screenshot 2025-12-03 150044.png",
              "/Screenshot 2025-12-03 145945.png",
            ],
            presentationUrl: "https://www.figma.com/design/S4f2vtIqY4yGwTWB7T4zO8/Mercado-Libre-Filtros?node-id=0-1&t=UYBX8jcu06mCfZDr-1",
            prototypeUrl: "https://www.figma.com/proto/S4f2vtIqY4yGwTWB7T4zO8/Mercado-Libre-Filtros?page-id=1%3A411&node-id=1-513&viewport=2378%2C-561%2C0.6&t=xnZn07zBAUiI3k94-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A513",
            mockupImage: "/iphone mockup meli.png",
          },
          3: {
            title: "Love - Art Gallery",
            subtitle: "Trabajo en proceso. Congeniado con diversas diseñadoras de todo el mundo",
            aboutProject: "Descripción del proyecto...",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            images: [],
            presentationUrl: "https://www.figma.com/board/50SwZpDGtqhW1AWZw2Uvyz/UXISTIR----UX-CLUB-PROYECTO?node-id=218-745&t=KKQN2qyx4qXqiT6p-1",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          4: {
            title: "Desafio Buenbit",
            subtitle: "Desafio basado en el re-diseño del Home de la app Buenbit",
            aboutProject: "Descripción del proyecto...",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            images: [],
            presentationUrl: "https://www.figma.com/design/xmVa7xLpXXNQEVFAAi7cS2/Creaciones?node-id=34-173&t=CfQylzFYNjPeowNh-1",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          5: {
            title: "Starbucks",
            subtitle: "Rediseño de la web Starbucks Argentina. Enfocado en landing page para descarga de su app",
            aboutProject: "Descripción del proyecto...",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            images: [],
            presentationUrl: "",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          6: {
            title: "Dogwalk App",
            subtitle: "Primer proyecto de mi Diplomatura en UX/UI. Centrado principalmente en estructuración. No estética",
            aboutProject: "Descripción del proyecto...",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            images: [],
            presentationUrl: "https://www.figma.com/design/gw9ESmToqxT9o7tP5RFh3e/Dogwalk?node-id=33-869&t=YKA7k00lUZEjtuCC-1",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          7: {
            title: "IEB - Proyecto técnico",
            subtitle: "Proyecto técnico realizado para IEB (personal), enfocado en diseño de interfaces y experiencia de usuario",
            aboutProject: "Este proyecto técnico personal para IEB consistió en el diseño completo de una plataforma digital enfocada en mejorar la experiencia del usuario a través de interfaces intuitivas y un sistema de diseño consistente. Realizado en un período limitado de tiempo de 4 días, el objetivo principal fue desarrollar una solución que combinara funcionalidad, estética y usabilidad, aplicando metodologías de diseño centrado en el usuario y principios de diseño de interfaces modernas.",
            methodology: ["Investigación UX", "Evaluación de principios de heurística (Nielsen)", "Benchmarking, POV, User Persona, How Might We (Cómo podríamos), Matriz de necesidades, Sitemap e Investigación de mercado", "Diseño responsive", "Utilización de tokens"],
            analysis: "Durante la etapa de research se identificaron problemas críticos en la landing actual de IEB+: no lograba guiar al usuario hacia la acción principal (descarga de la app o uso del broker), presentaba un recorrido informativo sin fomentar confianza, y carecía de una estructura clara que conectara los intereses del usuario con los objetivos del negocio. La solución propuesta fue una reestructuración estratégica del sitemap orientada a captar potenciales clientes. Puedes ver la investigación completa dentro de la presentación.",
            images: ["/antes.jpg", "/despues.jpg"],
            presentationUrl: "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1",
            prototypeUrl: "https://www.figma.com/proto/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?page-id=1%3A3&node-id=60-512&viewport=659%2C668%2C0.09&t=NUn7MGpGF8j75zHB-1&scaling=min-zoom&content-scaling=fixed",
            mockupImage: "/iebfinal.png",
          },
          8: {
            title: "Blog MindDev Perú",
            subtitle: "Diseño y desarrollo de blog para MindDev Perú, enfocado en contenido técnico y experiencias de usuario",
            aboutProject: "En este proyecto trabajé en conjunto con programadores. Objetivo: Diseñar y desarrollar una versión del Blog de MindDev, aplicando buenas prácticas de experiencia de usuario, diseño visual y desarrollo frontend. El resultado debe ser una versión moderna, atractiva, responsive y alineada con la identidad visual de Minddev. Se pidió específicamente que NO SE UTILICEN IMAGENES.",
            methodology: ["Creación de tokens con nomenclaturas afines a Tailwind CSS", "Creación de componentes reutilizables y alineamientos de design system", "UX research (competencias, benchmarking, heurísticas, etc)", "Comunicación con desarrollo", "Escucha y recibimiento de feedback para mejora continua", "Diseño responsive"],
            analysis: "Análisis del proyecto...",
            images: ["/Desktopminddev.jpg", "/Mobile mindev.jpg"],
            presentationUrl: "",
            prototypeUrl: "",
            mockupImage: "/mockup minnnn.png",
          },
          9: {
            title: "Start CRM",
            subtitle: "Sistema CRM completo con diseño centrado en la experiencia del usuario y eficiencia operativa",
            aboutProject: "Descripción del proyecto...",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            images: [],
            presentationUrl: "",
            prototypeUrl: "",
            mockupImage: project.image,
          },
        };

        const data = modalData[project.id] || {
          title: project.title,
          subtitle: project.description,
          aboutProject: "",
          methodology: [],
          analysis: "",
          images: [],
          presentationUrl: "",
          prototypeUrl: "",
          mockupImage: project.image,
        };

        return (
          <ProjectModal
            key={project.id}
            isOpen={openModalId === project.id}
            onClose={() => setOpenModalId(null)}
            title={data.title}
            subtitle={data.subtitle}
            aboutProject={data.aboutProject}
            methodology={data.methodology}
            analysis={data.analysis}
            images={data.images}
            presentationUrl={data.presentationUrl}
            prototypeUrl={data.prototypeUrl}
            mockupImage={data.mockupImage}
          />
        );
      })}
    </section>
  );
};

export default Projects;