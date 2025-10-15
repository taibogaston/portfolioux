"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Target, Lightbulb, Heart, Code2, Palette, Zap } from "lucide-react";
import { useState, useRef } from "react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

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

  const values = [
    {
      icon: Target,
      title: "Enfoque centrado en el usuario",
      description: "Cada decisión de diseño se basa en la investigación y comprensión profunda de las necesidades del usuario final.",
    },
    {
      icon: Lightbulb,
      title: "Innovación constante",
      description: "Mantengo un enfoque proactivo hacia las nuevas tendencias y tecnologías para crear soluciones.",
    },
    {
      icon: Heart,
      title: "Pasión por el detalle",
      description: "Creo que los pequeños detalles marcan la diferencia en todas las experiencias tanto digitales como físicas",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes flowLineVertical {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh - 200px));
            opacity: 0;
          }
        }
        
      `}</style>
      <motion.section
        id="about"
        ref={(node) => {
          ref(node);
          sectionRef.current = node;
        }}
        className="py-20 relative overflow-hidden cursor-none z-10"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Rectángulo de fondo negro borroso - solo en About */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl z-0" style={{ zIndex: -1 }} />
        
        {/* Cursor glow effect */}
        {isHovering && (
          <motion.div
            className="absolute pointer-events-none z-50"
            style={{
              left: mousePosition.x - 20,
              top: mousePosition.y - 20,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-10 h-10 bg-white/20 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute inset-0 w-10 h-10 bg-white/40 rounded-full blur-md animate-pulse"></div>
          </motion.div>
        )}
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-20 pt-8"
      >
        {/* Animated vertical flow line - extends through entire section */}
        <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/40 to-transparent">
          <div className="absolute top-16 left-0 w-full h-32 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" 
               style={{
                 animation: 'flowLineVertical 4s ease-in-out infinite',
                 animationDelay: '0s'
               }}>
          </div>
        </div>
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/30 shadow-xl">
                <img
                  src="/IMG_9216.JPG"
                  alt="Maitena - UX/UI Designer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full tech-badge text-primary text-sm font-medium mb-6 relative z-10"
          >
            <User className="w-4 h-4 mr-2" />
            Sobre mí
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Diseñando el futuro digital
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Mi desafío es transformar ideas en experiencias digitales simples y efectivas. Como diseñadora, busco un enfoque centrado en el usuario, aportando creatividad y empatía.
          </p>

          {/* Skills Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: Code2, text: "UI Design", color: "bg-blue-500 text-white" },
              { icon: Palette, text: "UX Research", color: "bg-purple-500 text-white" },
              { icon: Zap, text: "IA", color: "bg-yellow-500 text-white" },
            ].map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center px-4 py-2 rounded-full ${skill.color} backdrop-blur-sm`}
              >
                <skill.icon className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center">
          {/* Values */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 max-w-2xl relative z-10">
            
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative p-8 rounded-2xl bg-black border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-2 overflow-hidden"
              >
                
                <div className="relative z-10 flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/30 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-white transition-all duration-300">
                      {value.title}
                    </h4>
                    <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Tech grid pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
    </>
  );
};

export default About;

