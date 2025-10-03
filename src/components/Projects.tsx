"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye, Calendar, Users, Zap, Play } from "lucide-react";
import HorizontalScroller from "./HorizontalScroller";
import HoverRevealCard from "./HoverRevealCard";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      description: "Diseño completo de una aplicación móvil de e-commerce con enfoque en la experiencia del usuario y conversión.",
      image: "/avion.jpg",
      category: "Mobile App",
      year: "2024",
      technologies: ["Figma", "Principle", "React Native"],
      features: ["UX Research", "UI Design", "Prototyping", "User Testing"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "10K+",
        conversion: "+25%",
        rating: "4.8/5"
      }
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Interfaz de dashboard para análisis de datos con visualizaciones interactivas y diseño responsive.",
      image: "/api/placeholder/600/400",
      category: "Web App",
      year: "2024",
      technologies: ["Figma", "React", "D3.js"],
      features: ["Data Visualization", "Responsive Design", "Component Library"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "5K+",
        performance: "+40%",
        rating: "4.9/5"
      }
    },
    {
      id: 3,
      title: "SaaS Landing Page",
      description: "Landing page moderna para una plataforma SaaS con animaciones y optimización de conversión.",
      image: "/api/placeholder/600/400",
      category: "Landing Page",
      year: "2023",
      technologies: ["Figma", "Framer", "Next.js"],
      features: ["Landing Design", "Animation", "A/B Testing"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        visitors: "50K+",
        conversion: "+35%",
        rating: "4.7/5"
      }
    },
    {
      id: 4,
      title: "Banking App Redesign",
      description: "Rediseño completo de aplicación bancaria con enfoque en accesibilidad y usabilidad.",
      image: "/api/placeholder/600/400",
      category: "Mobile App",
      year: "2023",
      technologies: ["Sketch", "InVision", "React Native"],
      features: ["UX Research", "Accessibility", "Security Design"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "100K+",
        satisfaction: "+30%",
        rating: "4.6/5"
      }
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce con diseño moderno y funcionalidades avanzadas.",
      image: "/api/placeholder/600/400",
      category: "Web App",
      year: "2024",
      technologies: ["Figma", "React", "Node.js"],
      features: ["E-commerce Design", "Payment Integration", "Admin Dashboard"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "25K+",
        conversion: "+45%",
        rating: "4.8/5"
      }
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Aplicación de redes sociales con interfaz intuitiva y características innovadoras.",
      image: "/api/placeholder/600/400",
      category: "Mobile App",
      year: "2024",
      technologies: ["Figma", "React Native", "Firebase"],
      features: ["Social Features", "Real-time Chat", "Content Sharing"],
      liveUrl: "#",
      githubUrl: "#",
      stats: {
        users: "50K+",
        engagement: "+60%",
        rating: "4.7/5"
      }
    }
  ];

  return (
     <section
       id="projects"
       ref={ref}
       className="py-20 relative overflow-hidden"
     >
       {/* Fondo negro borroso como en About */}
       <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl z-0" style={{ zIndex: -1 }} />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
             className="inline-flex items-center px-4 py-2 rounded-full tech-badge text-primary text-sm font-medium mb-6 relative z-10"
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

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Desplázate para ver más proyectos</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-4 h-4"
            >
              →
            </motion.div>
          </div>
        </motion.div>

        {/* Horizontal Scrolling Projects */}
        <HorizontalScroller className="py-8 pb-16">
          {projects.map((project, index) => (
            <HoverRevealCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              labels={project.technologies}
              className="w-[400px] min-w-[400px] h-[500px] flex-shrink-0"
            >
              {/* Project badges */}
              <div className="flex space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full">
                  {project.year}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {project.stats.users}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Zap className="w-4 h-4 mr-1" />
                    {Object.values(project.stats)[1]}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Play className="w-4 h-4 mr-1" />
                    {project.stats.rating}
                  </div>
                </div>
              </div>
            </HoverRevealCard>
          ))}
        </HorizontalScroller>

      </motion.div>
    </section>
  );
};

export default Projects;

