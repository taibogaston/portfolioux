"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, ExternalLink } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const projects = [
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
      title: "MercadoLibre Research",
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
              className="group relative rounded-2xl overflow-hidden bg-gray-100/80 dark:bg-white/10 border border-gray-200 dark:border-white/30 hover:border-gray-300 dark:hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300/20 dark:hover:shadow-white/20 hover:-translate-y-2 flex flex-col md:cursor-default cursor-pointer"
            >
              {/* Mobile clickable overlay */}
              <a
                href={project.id === 1 ? "https://www.figma.com/board/Txm6rmVc23s3eiPYq9Ya3U/Worldtrip?node-id=0-1&t=MVhe9WdvsBLzHNp1-1" : 
                    project.id === 2 ? "https://www.figma.com/design/pM31VoCZnKYo2gvnSopaxW/UX-Club-MeLi?node-id=28-724&t=IGRsXucvCxEOxlFp-1" :
                    project.id === 3 ? "https://www.figma.com/board/50SwZpDGtqhW1AWZw2Uvyz/UXISTIR----UX-CLUB-PROYECTO?node-id=218-745&t=KKQN2qyx4qXqiT6p-1" : 
                    project.id === 4 ? "https://www.figma.com/design/xmVa7xLpXXNQEVFAAi7cS2/Creaciones?node-id=34-173&t=CfQylzFYNjPeowNh-1" :
                    project.id === 6 ? "https://www.figma.com/design/gw9ESmToqxT9o7tP5RFh3e/Dogwalk?node-id=33-869&t=YKA7k00lUZEjtuCC-1" :
                    project.id === 7 ? "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1" :
                    project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 md:hidden"
                aria-label={`Ver proyecto ${project.title}`}
              />
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <a
                    href={project.id === 1 ? "https://www.figma.com/board/Txm6rmVc23s3eiPYq9Ya3U/Worldtrip?node-id=0-1&t=MVhe9WdvsBLzHNp1-1" : 
                        project.id === 2 ? "https://www.figma.com/design/pM31VoCZnKYo2gvnSopaxW/UX-Club-MeLi?node-id=28-724&t=IGRsXucvCxEOxlFp-1" :
                        project.id === 3 ? "https://www.figma.com/board/50SwZpDGtqhW1AWZw2Uvyz/UXISTIR----UX-CLUB-PROYECTO?node-id=218-745&t=KKQN2qyx4qXqiT6p-1" : 
                        project.id === 4 ? "https://www.figma.com/design/xmVa7xLpXXNQEVFAAi7cS2/Creaciones?node-id=34-173&t=CfQylzFYNjPeowNh-1" :
                        project.id === 6 ? "https://www.figma.com/design/gw9ESmToqxT9o7tP5RFh3e/Dogwalk?node-id=33-869&t=YKA7k00lUZEjtuCC-1" :
                        project.id === 7 ? "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1" :
                        project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-200 dark:bg-white/20 rounded-full hover:bg-gray-300 dark:hover:bg-white/30 transition-colors border border-gray-300 dark:border-white/30"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-800 dark:text-white" />
                  </a>
                </div>
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
    </section>
  );
};

export default Projects;