"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDown, Sparkles } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
const LiquidEther = dynamic(() => import("./LiquidEther"), { ssr: false });

function useReducedMotionOrMobile() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px), (prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = () => setReduced(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

type PerformanceTier = "low" | "medium" | "high";

function usePerformanceTier(): PerformanceTier {
  const [tier, setTier] = useState<PerformanceTier>("high");

  useEffect(() => {
    try {
      const nav = navigator as Navigator & {
        hardwareConcurrency?: number;
        deviceMemory?: number;
      };
      const cores = nav.hardwareConcurrency ?? 4;
      const memory = (nav as any).deviceMemory ?? 4;
      const ua = nav.userAgent || "";
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        ua
      );

      if (isMobileUA || cores <= 4 || memory <= 4) {
        setTier("low");
      } else if (cores <= 8 || memory <= 8) {
        setTier("medium");
      } else {
        setTier("high");
      }
    } catch {
      setTier("medium");
    }
  }, []);

  return tier;
}

const Hero = () => {
  const reducedMotionOrMobile = useReducedMotionOrMobile();
  const perfTier = usePerformanceTier();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [heroInView, setHeroInView] = useState(true);
  const visibilityObserverRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHeroInView(entry?.isIntersecting ?? false);
      },
      { threshold: 0.1, rootMargin: "0px" }
    );
    visibilityObserverRef.current = obs;
    const el = sectionRef.current;
    if (el) obs.observe(el);
    return () => {
      obs.disconnect();
      visibilityObserverRef.current = null;
    };
  }, []);

  const setRefs = useCallback(
    (el: HTMLElement | null) => {
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLElement | null>).current = el;
      sectionRef.current = el;
      const obs = visibilityObserverRef.current;
      if (obs && el) obs.observe(el);
    },
    [ref]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  // Ajuste adaptativo del efecto LiquidEther según capacidades del dispositivo
  const etherConfig =
    perfTier === "low"
      ? {
        resolution: reducedMotionOrMobile ? 0.35 : 0.25,
        iterationsPoisson: 16,
        iterationsViscous: 12,
        isViscous: false,
        BFECC: false,
        dt: 0.018,
        autoDemo: true,
      }
      : perfTier === "medium"
        ? {
          resolution: reducedMotionOrMobile ? 0.35 : 0.4,
          iterationsPoisson: 24,
          iterationsViscous: 20,
          isViscous: true,
          BFECC: true,
          dt: 0.016,
          autoDemo: true,
        }
        : {
          resolution: reducedMotionOrMobile ? 0.4 : 0.5,
          iterationsPoisson: 32,
          iterationsViscous: 32,
          isViscous: true,
          BFECC: true,
          dt: 0.014,
          autoDemo: true,
        };

  return (
    <section
      id="home"
      ref={setRefs}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ minHeight: "100vh", height: "100vh" }}
    >
      {/* LiquidEther: se pausa al salir de vista (ej. al bajar a herramientas) y vuelve al subir */}
      <div className="absolute inset-0 z-0 w-full" style={{ minHeight: "100vh" }}>
        <LiquidEther
          className="absolute inset-0 h-full w-full"
          mouseForce={reducedMotionOrMobile ? 15 : 28}
          autoIntensity={reducedMotionOrMobile ? 1.8 : 2.5}
          resolution={etherConfig.resolution}
          iterationsPoisson={etherConfig.iterationsPoisson}
          iterationsViscous={etherConfig.iterationsViscous}
          isViscous={etherConfig.isViscous}
          BFECC={etherConfig.BFECC}
          dt={etherConfig.dt}
          autoDemo={etherConfig.autoDemo}
          disableTouch={reducedMotionOrMobile}
          isPaused={!heroInView}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-8"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants}
          className="mb-6">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.4 }}
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
            que conectan con las personas
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
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 min-w-[180px] bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 active:scale-95 transition-all duration-200 glow"
          >
            Ver mis proyectos
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 min-w-[180px] border border-border text-foreground rounded-full font-semibold text-lg hover:bg-accent active:scale-95 transition-all duration-200"
          >
            Contactar
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-20 flex flex-col items-center text-muted-foreground animate-bounce"
        >
          <span className="text-sm mb-2">Desplázate</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

