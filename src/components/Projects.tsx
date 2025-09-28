"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Eye, Calendar, Users, Zap } from "lucide-react";

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
      image: "/api/placeholder/600/400",
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
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    className="p-2 bg-primary/20 text-primary rounded-lg backdrop-blur-sm hover:bg-primary/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    className="p-2 bg-muted/50 text-muted-foreground rounded-lg backdrop-blur-sm hover:bg-primary/20 hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key === 'users' ? 'Usuarios' : 
                         key === 'conversion' ? 'Conversión' :
                         key === 'rating' ? 'Rating' :
                         key === 'performance' ? 'Rendimiento' :
                         key === 'visitors' ? 'Visitantes' :
                         key === 'satisfaction' ? 'Satisfacción' : key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 glow"
          >
            Ver todos los proyectos
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;

