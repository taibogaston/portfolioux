"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Figma, 
  Github, 
  Trello, 
  Globe,
  Code,
  Palette,
  BarChart3,
  Monitor
} from "lucide-react";

const InfiniteScroller = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tools = [
    { name: "Figma", icon: Figma, color: "text-[#F24E1E]" },
    { name: "Behance", icon: Palette, color: "text-[#1769FF]" },
    { name: "Jira", icon: BarChart3, color: "text-[#0052CC]" },
    { name: "GitHub", icon: Github, color: "text-[#181717]" },
    { name: "After Effects", icon: Monitor, color: "text-[#9999FF]" },
    { name: "Trello", icon: Trello, color: "text-[#0079BF]" },
    { name: "WordPress", icon: Globe, color: "text-[#21759B]" },
    { name: "Framer", icon: Code, color: "text-[#0055FF]" },
  ];

  // ✅ Solo dos copias, suficiente para el loop infinito
  const duplicatedTools = [...tools, ...tools];

  return (
    <section
      id="tools"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4 mr-2" />
            Herramientas
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tecnologías que domino
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Herramientas y plataformas que utilizo para crear experiencias digitales excepcionales.
          </p>
        </motion.div>

        {/* Infinite Scroller */}
        <div className="relative">
          <div className="overflow-hidden py-4">
            <div className="flex space-x-6 md:space-x-8 animate-infinite-scroll">
              {duplicatedTools.map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + (index % tools.length) * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer relative z-20"
                >
                  <tool.icon 
                    className={`w-8 h-8 md:w-12 md:h-12 ${tool.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                  <span className="mt-2 md:mt-3 text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estas son solo algunas de las herramientas que utilizo en mi flujo de trabajo. 
            Siempre estoy aprendiendo nuevas tecnologías para mantenerme actualizado.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InfiniteScroller;
