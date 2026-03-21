"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Palette, Box } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TrueFocus = dynamic(() => import("./TrueFocus"), { ssr: false });

export default function About() {
  const { ref, inView } = useInView({
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
      className="pt-20 pb-12 relative overflow-hidden bg-background"
    >

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 sm:px-[var(--site-gutter-x)] relative z-10"
      >
        {/* Bento: foto + bloque de texto - centrado */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Foto */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[150px] sm:max-w-[190px]">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border dark:border-white/20 bg-card shadow-2xl shadow-primary/5 relative">
                <Image
                  src="/WhatsApp Image 2026-01-19 at 13.26.32.jpeg"
                  alt="Maitena - UX UI & Product Designer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 150px, 190px"
                  priority={false}
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
                className="text-inherit w-full inline-flex flex-wrap sm:flex-nowrap justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-2"
              />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Soy creadora de experiencias dentro de pantallas ❤️
              <br />
              <br />
              Diseño productos digitales conectando negocio y usuario.
              <br />
              Trabajo desde la investigación, los flujos y la interfaz para crear experiencias claras, usables y orientadas a resultados. Transformo ideas en soluciones efectivas.
              <br />
              <br />
              ¡Potenciemos el futuro juntos!
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((s) => {
                const Icon = s.icon;
                return (
                  <span
                    key={s.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card dark:bg-white/10 border border-border dark:border-white/20 text-foreground text-sm font-medium"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {s.label}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
