"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "Diseño completo de una aplicación móvil de e-commerce con enfoque en la experiencia del usuario y conversión.",
      image: "/avion.jpg",
      category: "Mobile App",
      technologies: ["Figma", "Principle", "React Native"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "MercadoLibre Redesign",
      description: "Rediseño de la experiencia de usuario para la plataforma de e-commerce más grande de Latinoamérica.",
      image: "/mercadolibre.jpeg",
      category: "Web App",
      technologies: ["Figma", "React", "D3.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Love - Art Gallery App",
      description: "Aplicación móvil para galería de arte con enfoque en experiencias inmersivas y pop art.",
      image: "/love.jpeg",
      category: "Mobile App",
      technologies: ["Figma", "Framer", "React Native"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Digital Wallet App",
      description: "Aplicación de billetera digital con interfaz moderna y funcionalidades de seguridad avanzadas.",
      image: "/wallet.jpeg",
      category: "Mobile App",
      technologies: ["Figma", "InVision", "React Native"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Starbucks Mobile App",
      description: "Rediseño de la aplicación móvil de Starbucks con enfoque en pedidos y recompensas.",
      image: "/starbucks.jpeg",
      category: "Mobile App",
      technologies: ["Figma", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      description: "Interfaz de dashboard para análisis de datos con visualizaciones interactivas y diseño responsive.",
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
            Trabajos destacados
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
              className="group relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-white/30">
                    {project.category}
                  </span>
                </div>

                {/* Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    aria-label="Ver código"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/20 text-white/90 text-xs rounded-md backdrop-blur-sm border border-white/20"
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