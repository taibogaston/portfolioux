"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Box } from "lucide-react";
import TrueFocus from "./TrueFocus";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const skills = [
    { icon: Palette, label: "UX Research" },
    { icon: Code2, label: "UI Design" },
    { icon: Box, label: "Product Design" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 relative overflow-hidden bg-background"
      style={{ contentVisibility: "auto" }}
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Bento: foto + bloque de texto - centrado */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Foto */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[150px] sm:max-w-[190px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border dark:border-white/20 bg-card shadow-2xl shadow-primary/5">
                <img
                  src="/WhatsApp%20Image%202026-01-19%20at%2013.26.32.jpeg"
                  alt="Maitena - UX UI & Product Designer"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 inset-0 translate-x-2 translate-y-2 rounded-2xl bg-primary/20 dark:bg-primary/10" />
            </div>
          </motion.div>

          {/* Texto + skills */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 w-full text-center lg:text-left">
              <TrueFocus
                sentence="UX UI · Product Designer"
                separator=" · "
                blurAmount={5}
                animationDuration={0.6}
                pauseBetweenAnimations={1.5}
                className="text-inherit w-full inline-flex flex-nowrap justify-center lg:justify-start gap-x-4 sm:gap-x-6"
              />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Conecto investigación, diseño y estrategia de producto para crear experiencias digitales claras, usables y orientadas a resultados. Trabajo con equipos en metodologías ágiles, design systems y mejora continua.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((s) => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card dark:bg-white/10 border border-border dark:border-white/20 text-foreground text-sm font-medium"
                >
                  <s.icon className="w-4 h-4 text-primary" />
                  {s.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
