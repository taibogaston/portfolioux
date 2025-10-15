"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 80; // Punto donde desaparece completamente (reducido de 200 a 80)
      
      if (scrollY <= 0) {
        setScrollIndicatorOpacity(1);
      } else if (scrollY >= maxScroll) {
        setScrollIndicatorOpacity(0);
      } else {
        // Transición gradual de 1 a 0
        const opacity = 1 - (scrollY / maxScroll);
        setScrollIndicatorOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full tech-badge text-primary text-sm font-medium mb-4 relative z-10"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            ¡Hola! Soy Maitena, diseñadora UX/UI
          </motion.span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
        >
          <span className="block">Creo experiencias</span>
          <span className="block gradient-text">digitales únicas</span>
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground mt-4">
            <TypewriterText 
              text="que conectan con las personas" 
              speed={80} 
              eraseSpeed={50}
              delay={1000}
              pauseTime={2000}
              className="text-muted-foreground"
            />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Diseñadora UX/UI enfocada en crear interfaces intuitivas, responsivas y accesibles.
          <br />
          Mi pasión nace en entender a los usuarios, y poder mejorar su experiencia.
        </motion.p>


        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 min-w-[180px] bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 glow"
          >
            Ver mis proyectos
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 min-w-[180px] border border-border text-foreground rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300"
          >
            Contactar
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: scrollIndicatorOpacity, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Desplázate</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

