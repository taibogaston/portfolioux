"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import dynamic from "next/dynamic";

const LightRays = dynamic(() => import("./LightRays"), { ssr: false });

const experiences = [
  {
    role: "Diseñadora UX/UI",
    company: "Autónomo",
    period: "nov 2024 – actualidad · 1 año 4 meses · Córdoba y alrededores, Argentina · En remoto",
    description:
      "Como diseñadora UX/UI cuento con diversos conocimientos aplicados en proyectos freelance.",
    bullets: [
      "Manejo de Figma, diseño responsive y autolayout según tamaños de pantalla.",
      "Componentes reutilizables, variantes de instancia, booleanas, entre otras.",
      "Tokens primitivos y semánticos para diseños escalables; nomenclaturas afines a CSS.",
      "Accesibilidad touch, legibilidad y contraste.",
      "Librerías UI y Design Systems para consistencia y eficiencia.",
      "UX research: benchmarking, desktop research, encuestas, entre otras.",
      "Validaciones estructurales (card sorting, tree testing), evaluaciones heurísticas, A/B testing, entrevistas, feedback inmediato y demás metodologías afines.",
      "Personas y protopersonas, task y user flows, análisis de métricas.",
      "Flujos de usuarios, sitemap, iteración constante y validación entre procesos.",
    ],
  },
  {
    role: "Diseñadora UX/UI",
    company: "PropSail",
    period: "nov 2025 – actualidad · 4 meses · Remoto",
    description:
      "Creación de una web con asistencia de IA enfocada al sector inmobiliario. Centrada en conversión de leads a compradores actuales y conocimiento del producto SaaS, CRM.",
  },
  {
    role: "Diseñadora UX/UI",
    company: "No Country",
    period: "nov 2025 – dic 2025 · 2 meses · En remoto",
    description:
      "Creación de CRM para ventas, métricas y comunicaciones en conjunto con 7 programadores y 1 QA. Diseño de estados y flujo según documentación, trabajo con Jira (historias de usuario, MVP), Figma, librerías y tokens. Prácticas de usabilidad, evaluación heurística y metodología ágil con dailys y sprints.",
    bullets: [
      "Diseñé una web app CRM para ventas, métricas y comunicaciones con equipo de 7 programadores y 1 QA.",
      "Diseño de estados y flujo según documentación.",
      "Jira en equipo para organizar tareas, historias de usuario y MVP.",
      "Figma, utilización de librería y creación de tokens.",
      "Usabilidad, evaluación heurística y metodología ágil (dailys y sprints).",
    ],
  },
  {
    role: "Diseñadora UX/UI",
    company: "MindDev Perú",
    period: "jul 2025 – dic 2025 · 6 meses · Argentina, en remoto · Contrato temporal",
    description:
      "Diseño de experiencia de usuario (UX) y de interfaz de usuario en proyectos remotos.",
  },
  {
    role: "Marketing, Contenido digital y Atención al cliente",
    company: "Consultorio odontológico",
    period: "mar 2022 – ago 2025 · 3 años 6 meses · Córdoba, Argentina · Jornada completa",
    description:
      "Gestión de redes sociales, contenido digital y servicio de atención al cliente.",
  },
];

const Experience = () => {
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

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      {/* Efecto rayos de luz (uno solo, 30fps) */}
      {inView && (
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="left"
            raysColor="#c4a8e0"
            raysSpeed={1}
            lightSpread={0.82}
            rayLength={2.8}
            pulsating
            fadeDistance={1.25}
            saturation={1}
            followMouse={false}
            mouseInfluence={0}
            noiseAmount={0}
            distortion={0.1}
          />
        </div>
      )}
      {/* Overlay suave para legibilidad */}
      <div className="absolute inset-0 bg-background/35 dark:bg-black/35 z-0" />
      {/* Difuminado violeta - solo en modo claro */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl z-0 dark:hidden" />
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
            <Briefcase className="w-4 h-4 mr-2" />
            Experiencia
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Trayectoria profesional
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Roles y proyectos en los que he aportado desde el diseño de experiencia e interfaces.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              variants={itemVariants}
              className="relative pl-6 sm:pl-12 border-l-2 border-primary/30 dark:border-primary/40"
            >
              <div className="absolute left-0 top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 -translate-x-[5px] sm:-translate-x-[7px] rounded-full bg-primary" />
              <div className="pb-8">
                <span className="text-sm font-medium text-primary">{exp.period}</span>
                <h3 className="text-xl font-bold mt-1 text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground font-medium">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {exp.description}
                </p>
                {"bullets" in exp && exp.bullets && exp.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc list-inside">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
