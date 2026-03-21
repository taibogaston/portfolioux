"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
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
        className="container mx-auto px-6 sm:px-[var(--site-gutter-x)] relative z-10"
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

        {/* Projects: grid 2 columnas */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden transition-all duration-300 flex flex-col cursor-pointer touch-manipulation active:scale-[0.99] h-full"
              >
                <div className="relative h-52 sm:h-64 overflow-hidden rounded-xl border border-border/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${project.id === 8 ? "object-[50%_25%]" : project.id === 3 ? "object-[50%_30%]" : project.id === 10 ? "object-[50%_25%]" : ""}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 dark:from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-2 sm:p-3 pt-3 sm:pt-4 flex-1 flex flex-col">
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
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
