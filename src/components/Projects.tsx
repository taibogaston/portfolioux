"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Eye } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

interface ModalData {
  title: string;
  subtitle: string;
  aboutProject?: string;
  problem?: string;
  objectives?: string[];
  research?: string;
  designSystem?: string;
  userType?: string;
  methodology?: string[];
  analysis?: string;
  resultado?: string;
  images?: string[];
  processImages?: string[];
  presentationUrl?: string;
  prototypeUrl?: string;
  mockupImage?: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const projects = [
    {
      id: 10,
      title: "Propsail",
      description: "Landing page en integración con IA, enfoque en sector inmobiliario y especial atención al aumento de conversión.",
      image: "/Frame.jpg",
      category: "Web App",
      technologies: ["Figma", "UX", "UI", "Design System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Start CRM",
      description: "Sistema CRM completo con diseño centrado en la experiencia del usuario y eficiencia operativa",
      image: "/jovenes-colegas-concentrados-sentados-en-la-oficina-de-coworking.jpg",
      category: "Web App",
      technologies: ["Figma", "UX", "UI", "CRM", "Design System"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Blog MindDev Perú",
      description: "Diseño y desarrollo de blog para MindDev Perú, enfocado en contenido técnico y experiencias de usuario",
      image: "/mockup minddev.jpeg",
      category: "Web Design",
      technologies: ["Figma", "UX", "UI", "Web Design"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "IEB - Proyecto técnico",
      description: "Proyecto técnico realizado en 4 días para IEB (personal), enfocado en diseño de interfaces y experiencia de usuario",
      image: "/Image ieb.jpg",
      category: "Web Design",
      technologies: ["Figma", "UX", "UI", "Design System"],
      liveUrl: "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1",
      githubUrl: "#"
    },
    {
      id: 1,
      title: "Worldtrip e-commerce",
      description: "Web e-commerce, con orientación en viajes y paquetes. Modelo responsive",
      image: "/avion.jpg",
      category: "Mobile App",
      technologies: ["Figma", "Web", "Sitemap", "Card sorting", "Tree testing"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Alpay",
      description: "Plataforma de administracion inmobiliria, mejoras y diseño de landing page al estilo solicitado",
      image: "/alpayxs.png",
      category: "Mobile App",
      technologies: ["Figma", "UX", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "Locker App",
      description: "Aplicación móvil para gestión de lockers y reservas.",
      image: "/Frame.jpg",
      category: "Mobile App",
      technologies: ["Figma", "UX", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mercado Libre Research",
      description: "Rediseño de la funcionalidad de filtrados de una de las plataformas de e-commerce más grande de Latinoamérica",
      image: "/mercadolibre.jpeg",
      category: "Web App",
      technologies: ["Figma", "Card sorting", "Tree testing", "UX"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Desafio Buenbit",
      description: "Desafio basado en el re-diseño del Home de la app Buenbit",
      image: "/foto buenbit.png",
      category: "Mobile App",
      technologies: ["Figma", "UX Design", "Mobile UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Starbucks",
      description: "Rediseño de la web Starbucks Argentina. Enfocado en landing page para descarga de su app",
      image: "/starbucks.jpeg",
      category: "Mobile App",
      technologies: ["Figma", "Responsive", "Research", "UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Dogwalk App",
      description: "Primer proyecto de mi Diplomatura en UX/UI. Centrado principalmente en estructuración. No estética",
      image: "/dogandshe.jpeg",
      category: "Web App",
      technologies: ["Figma", "React", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

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

  return (
    <section
      id="projects"
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

        {/* Projects: grid 2 columnas, sin animación */}
        <motion.div
          variants={containerVariants}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setOpenModalId(project.id)}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border dark:border-white/30 hover:border-primary/50 dark:hover:border-white/50 transition-all duration-300 hover:shadow-xl flex flex-col cursor-pointer touch-manipulation active:scale-[0.99]"
              onClick={() => setOpenModalId(project.id)}
            >
              <div className="relative h-52 sm:h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 dark:from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4 sm:p-5 bg-card border-t border-border dark:border-white/20 flex-1 flex flex-col">
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Modales de proyectos */}
      {projects.map((project) => {
        // Datos por defecto para cada proyecto (se pueden editar después)
        const modalData: Record<number, ModalData> = {
          11: {
            title: "Locker App",
            subtitle: "Aplicación móvil para gestión de lockers y reservas.",
            aboutProject: "",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: [],
            analysis: "",
            resultado: "",
            images: [],
            presentationUrl: "",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          10: {
            title: "Propsail",
            subtitle: "Landing page en integración con IA, enfoque en sector inmobiliario y especial atención al aumento de conversión.",
            aboutProject: "PropSail es una plataforma SaaS para ventas inmobiliarias que integra experiencia digital, recorridos virtuales inteligentes y una capa operativa de CRM en un único flujo. El producto acompaña al comprador desde el descubrimiento hasta la entrega de señales de intención al equipo comercial.",
            problem: "La experiencia digital inmobiliaria suele estar fragmentada: el comprador navega sin guía y los equipos comerciales reciben leads sin contexto ni señales claras. Esta desconexión genera fricción, trabajo manual innecesario y pérdida de oportunidades reales de venta.",
            userType: "PropSail está diseñado para tres actores: compradores que necesitan claridad para evaluar proyectos, equipos comerciales que requieren señales accionables para priorizar, y empresas que buscan operar sus ventas digitales de forma más eficiente y trazable.",
            objectives: [
              "Guiar al comprador durante el proceso de evaluación de proyectos",
              "Capturar intención real en el momento correcto",
              "Reducir fricción y tareas manuales en ventas",
              "Conectar experiencia digital y operación comercial en un flujo continuo y escalable"
            ],
            research: "El análisis del mercado evidenció que las soluciones existentes resuelven partes aisladas del problema (tours, chatbots o CRMs), pero no integran experiencia, contexto e intención. Estos insights orientaron el diseño hacia un flujo guiado y accionable.",
            designSystem: "El producto fue diseñado como un sistema modular, utilizando componentes reutilizables y tokens de diseño para asegurar consistencia, escalabilidad y fácil adaptación a distintos clientes y proyectos.",
            methodology: [
              "Análisis del flujo completo de venta inmobiliaria",
              "Definición de arquitectura de producto (experiencia, recorrido y CRM)",
              "Diseño de flujos guiados orientados a intención",
              "Creación de componentes reutilizables y variables de diseño"
            ],
            analysis: "",
            resultado: "El diseño final transforma una experiencia pasiva en un flujo guiado que captura intención real, reduce fricción operativa y mejora la eficiencia comercial, posicionando a PropSail como una solución escalable y orientada a resultados.",
            images: ["/home.jpg", "/Demo.png", "/Contacto.png", "/Screenshot 2026-01-19 101626.png"],
            presentationUrl: "",
            prototypeUrl: "",
            mockupImage: "/Mockup-1.png",
          },
          1: {
            title: "Worldtrip e-commerce",
            subtitle: "Web e-commerce, con orientación en viajes y paquetes. Modelo responsive",
            aboutProject: "Descripción del proyecto...",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: ["Metodología 1", "Metodología 2"],
            analysis: "Análisis del proyecto...",
            resultado: "",
            images: [],
            presentationUrl: "https://www.figma.com/board/Txm6rmVc23s3eiPYq9Ya3U/Worldtrip?node-id=0-1&t=MVhe9WdvsBLzHNp1-1",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          2: {
            title: "Mercado Libre Research",
            subtitle: "Rediseño de la funcionalidad de filtrados",
            aboutProject: "Este proyecto consistió en el rediseño de la funcionalidad de filtrados de MercadoLibre, una de las plataformas de e-commerce más grandes de Latinoamérica. El objetivo fue mejorar la experiencia del usuario al buscar y filtrar productos, haciendo el proceso más intuitivo y eficiente.",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: ["<strong>3 Card Sorting abiertos</strong>, siendo el primero para evaluación de errores estructurales de la interfaz actual, y los demás para la evaluación de cambios realizados dentro de los márgenes de conclusiones investigativas basadas en los usuarios.", "Análisis de dendrograma para identificar agrupaciones naturales de filtros según la mentalidad de los usuarios", "Tree Testing para validar la estructura de navegación propuesta", "Diseño de interfaz enfocado en usabilidad y accesibilidad basado en los hallazgos", "Prototipado y testing iterativo"],
            analysis: "Se utilizó el análisis de dendrograma para identificar las agrupaciones naturales que los usuarios realizaron durante los 3 Card Sorting abiertos. Este análisis permitió visualizar las relaciones entre los diferentes filtros y validar la arquitectura final del sistema de filtros.",
            resultado: "",
            images: [
              "/Screenshot 2025-12-03 135719.png",
              "/Screenshot 2025-12-03 135843.png",
              "/Screenshot 2025-12-03 145907.png",
              "/Screenshot 2025-12-03 150044.png",
              "/Screenshot 2025-12-03 145945.png",
            ],
            presentationUrl: "https://www.figma.com/design/S4f2vtIqY4yGwTWB7T4zO8/Mercado-Libre-Filtros?node-id=0-1&t=UYBX8jcu06mCfZDr-1",
            prototypeUrl: "https://www.figma.com/proto/S4f2vtIqY4yGwTWB7T4zO8/Mercado-Libre-Filtros?page-id=1%3A411&node-id=1-513&viewport=2378%2C-561%2C0.6&t=xnZn07zBAUiI3k94-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A513",
            mockupImage: "/iphone mockup meli.png",
          },
          3: {
            title: "Alpay",
            subtitle: "Plataforma de administracion inmobiliria, mejoras y diseño de landing page al estilo solicitado",
            aboutProject: "Diseño de la landing page para Alpay, una plataforma de administración inmobiliaria.\n\nEl objetivo fue crear una interfaz clara y profesional que comunique de forma directa la propuesta de valor del producto, priorizando la comprensión del servicio desde el primer contacto y una experiencia visual alineada a un estilo moderno y tecnológico.\n\nEl diseño se desarrolló enfocado en la estructura del contenido, la jerarquía visual y la consistencia estética, buscando transmitir confianza y orden en un contexto B2B.",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: [
              "<strong>Definición del objetivo del producto</strong><br/>Identificación del propósito de la landing y del mensaje principal a comunicar.",
              "<strong>Estructuración del contenido</strong><br/>Organización de secciones y jerarquización de la información para facilitar la lectura y el escaneo.",
              "<strong>Diseño UI</strong><br/>Creación de una interfaz visual coherente mediante el uso de tipografía, color, espaciados y componentes alineados a un estilo moderno.",
              "<strong>Criterios de experiencia de usuario (UX)</strong><br/>Aplicación de buenas prácticas de usabilidad para mejorar la claridad, navegación y llamados a la acción."
            ],
            analysis: "El diseño resultante ofrece una landing clara, ordenada y visualmente consistente, que permite entender rápidamente el propósito de la plataforma y sus beneficios principales.\n\nLa propuesta visual refuerza la percepción de profesionalismo y solidez del producto, facilitando una experiencia de navegación simple y intuitiva para potenciales usuarios o clientes.\n\nAdicionalmente, dentro de la propuesta testeando visualmente indiqué errores y diseñé variantes para su home tanto como mejoras en una seccion específica para el feedback visual.",
            resultado: "",
            images: [],
            processImages: ["/landing 2.jpeg", "/landing 1.jpeg", "/landing 3.jpeg", "/landing 4.jpeg", "/alpayganancia.png", "/como funciona.png", "/funcionalidades.png", "/footer alpay.png", "/planes alpay.png"],
            presentationUrl: "https://www.figma.com/board/50SwZpDGtqhW1AWZw2Uvyz/UXISTIR----UX-CLUB-PROYECTO?node-id=218-745&t=KKQN2qyx4qXqiT6p-1",
            prototypeUrl: "",
            mockupImage: "/mockup ALPAYYY.png",
          },
          4: {
            title: "Desafio Buenbit",
            subtitle: "Desafio basado en el re-diseño del Home de la app Buenbit",
            aboutProject: "Rediseño y reestructuración mobile de la app Buenbit, siguiendo su design system y alineando el diseño al contexto funcional financiero",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: [
              "Al ser un rediseño del home, he utilizado tecnicas de ux research para realizar una breve investigación",
              "Space touch con margenes de 8px adicionales para accesibilidad del pulgar",
              "Todos mis diseños, inclusive este, siguen una regla de múltiplos 8px en spacing"
            ],
            analysis: "Se mejoraron contrastes y jerarquia visual de la tipografía, efectuando relevancia al/los sector/es que lo precisaban. Reajusté la consistencia utilizando iconos y buttons con un mismo estilo. El fondo oscuro (dark mode) reduce la fatiga visual y refuerza la percepción de una marca \"premium\" o \"tecnológica\".\n\nEstructuralmente planteé una relevancia de su funcionalidad de acuerdo a mi investigación, el usuario con frecuencia encuentra sus últimos movimientos con facilidad, en este caso, no estaban planteados desde un inicio, lo cual hacia la interfaz bastante confusa.",
            resultado: "",
            images: ["/Home antes.png", "/despuesBbit.png"],
            processImages: ["/Home 0.png", "/Home 1.png", "/Home 2.png", "/Home 3.png"],
            presentationUrl: "https://www.figma.com/proto/xmVa7xLpXXNQEVFAAi7cS2/Creaciones?page-id=34%3A173&node-id=34-20433&viewport=792%2C271%2C0.11&t=ruzeTEjGBjJKGXIi-1&scaling=scale-down&content-scaling=fixed",
            prototypeUrl: "",
            mockupImage: "/mockup buenbit.png",
          },
          5: {
            title: "Starbucks",
            subtitle: "Rediseño de la web Starbucks Argentina. Enfocado en landing page para descarga de su app",
            aboutProject: "El proyecto surge a partir de la necesidad de potenciar la descarga de la app de Starbucks a través de una landing clara, atractiva y alineada con los objetivos del negocio.\n\nEl foco estuvo en simplificar el mensaje, guiar al usuario rápidamente hacia la propuesta de valor de la app y reducir fricciones en el recorrido de navegación.",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: [
              "<strong>Análisis heurístico</strong><br/>Evaluación de la web actual para detectar problemas de usabilidad, jerarquía visual, consistencia y claridad del contenido.",
              "<strong>Desktop research</strong><br/>Investigación de patrones, buenas prácticas y tendencias en landing pages orientadas a descargas de apps.",
              "<strong>Benchmarking</strong><br/>Análisis comparativo con sitios de marcas y aplicaciones similares para identificar oportunidades de mejora y estándares del mercado.",
              "<strong>Proto-persona</strong><br/>Definición de un perfil de usuario objetivo para orientar decisiones de diseño centradas en necesidades reales.",
              "<strong>Encuestas a usuarios</strong><br/>Recolección de insights sobre expectativas, hábitos y motivaciones relacionadas con el uso de la app.",
              "<strong>Wireframes</strong><br/>Realización de wireframes en baja, media y alta fidelidad."
            ],
            analysis: "A partir de la investigación se identificaron oportunidades clave para:\n\nMejorar la propuesta de valor de la app en el primer impacto.\n\nOptimizar la arquitectura de la información y la jerarquía del contenido.\n\nReducir fricciones en la navegación y acortar el camino hacia la descarga.\n\nAlinear el diseño visual con una experiencia más clara, moderna y orientada a conversión.",
            resultado: "",
            images: [
              "/Screenshot 2025-04-15 185713.png",
              "/Screenshot 2025-04-14 184050.png",
              "/Screenshot 2025-04-14 184117.png",
              "/Starbucks.png",
              "/Encuentra.png",
              "/Drive.png",
              "/Descargar.png",
              "/Encuéntranos.png",
              "/Menú.png",
              "/carrousel starbucks.jpeg"
            ],
            processImages: [
              "/Screenshot 2025-12-09 171937.png",
              "/Screenshot 2025-12-09 172045.png",
              "/Screenshot 2025-12-09 172126.png",
              "/Screenshot 2025-12-09 172159.png",
              "/Screenshot 2025-12-09 171609.png",
              "/Screenshot 2025-12-09 172248.png"
            ],
            presentationUrl: "https://docs.google.com/presentation/d/1fW38yWg2vbLmB5iAepUND4t2Y8Tic-kCasi4RrXOac0/edit?usp=sharing",
            prototypeUrl: "",
            mockupImage: project.image,
          },
          6: {
            title: "Dogwalk App",
            subtitle: "Primer proyecto de mi Diplomatura en UX/UI. Centrado principalmente en estructuración. No estética",
            aboutProject: "Dogwalk es una aplicación pensada para conectar dueños de perros con paseadores, facilitando la gestión de paseos de forma simple y clara.\nEl objetivo principal del proyecto fue trabajar la estructura del producto, los flujos de uso y la organización de la información, priorizando la experiencia del usuario por sobre la estética visual.\n\nAl tratarse de un proyecto académico inicial, el foco estuvo puesto en:\n\nComprender el problema y las necesidades básicas del usuario.\n\nDefinir funcionalidades clave.\n\nDiseñar una navegación clara y coherente.\n\nConstruir una base sólida sobre la cual luego podría desarrollarse el diseño visual.",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: [
              "<strong>Definición del problema</strong><br/>Identificación de la necesidad principal: facilitar la contratación y gestión de paseos para dueños de perros de manera segura y organizada.",
              "<strong>Investigación inicial</strong><br/>Análisis del contexto, comportamiento de usuarios potenciales y revisión de aplicaciones similares para detectar patrones y oportunidades de mejora.",
              "<strong>Arquitectura de la información</strong><br/>Organización de secciones, jerarquía de contenidos y definición de flujos principales dentro de la app para garantizar una navegación intuitiva.",
              "<strong>User flows</strong><br/>Diseño de los recorridos clave del usuario (registro, búsqueda de paseador, solicitud de paseo, seguimiento).",
              "<strong>Wireframes de baja fidelidad</strong><br/>Creación de pantallas estructurales enfocadas en el orden del contenido, sin trabajar aún aspectos visuales o de branding.",
              "<strong>Iteración</strong><br/>Ajustes sobre la estructura y los flujos a partir del análisis de uso y la coherencia del recorrido del usuario."
            ],
            analysis: "El proyecto permitió comprender la importancia de una buena estructura antes del diseño visual, asegurando que la app sea funcional, clara y fácil de usar.\n\nA través del trabajo de arquitectura y flujos se logró:\n\nReducir fricción en la navegación.\n\nPriorizar acciones clave del usuario.\n\nSentar las bases para un futuro desarrollo visual y funcional más sólido.",
            resultado: "",
            images: [],
            presentationUrl: "https://docs.google.com/presentation/d/19Gjds5OqX78y9EmX_nG4XqWzI2egTlIu3uzofgDvSTw/edit?usp=sharing",
            prototypeUrl: "https://www.figma.com/design/gw9ESmToqxT9o7tP5RFh3e/Dogwalk?node-id=0-1&t=ztomAlqsYRR7z5og-1",
            mockupImage: "/dogwalk.png",
          },
          7: {
            title: "IEB - Proyecto técnico",
            subtitle: "Proyecto técnico realizado para IEB (personal), enfocado en diseño de interfaces y experiencia de usuario",
            aboutProject: "Este proyecto técnico personal para IEB consistió en el diseño completo de una plataforma digital enfocada en mejorar la experiencia del usuario a través de interfaces intuitivas y un sistema de diseño consistente. Realizado en un período limitado de tiempo de 4 días, el objetivo principal fue desarrollar una solución que combinara funcionalidad, estética y usabilidad, aplicando metodologías de diseño centrado en el usuario y principios de diseño de interfaces modernas.",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: ["Investigación UX", "Evaluación de principios de heurística (Nielsen)", "Benchmarking, POV, User Persona, How Might We (Cómo podríamos), Matriz de necesidades, Sitemap e Investigación de mercado", "Diseño responsive", "Utilización de tokens"],
            analysis: "Durante la etapa de research se identificaron problemas críticos en la landing actual de IEB+: no lograba guiar al usuario hacia la acción principal (descarga de la app o uso del broker), presentaba un recorrido informativo sin fomentar confianza, y carecía de una estructura clara que conectara los intereses del usuario con los objetivos del negocio. La solución propuesta fue una reestructuración estratégica del sitemap orientada a captar potenciales clientes. Puedes ver la investigación completa dentro de la presentación.",
            resultado: "",
            images: ["/antes.jpg", "/despues.jpg"],
            presentationUrl: "https://www.figma.com/design/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?node-id=0-1&t=xhLJ0Sof33eiefkA-1",
            prototypeUrl: "https://www.figma.com/proto/OjA0deYtUo5wZD0TglwJwt/IEB----Proyecto-t%C3%A9cnico?page-id=1%3A3&node-id=60-512&viewport=659%2C668%2C0.09&t=NUn7MGpGF8j75zHB-1&scaling=min-zoom&content-scaling=fixed",
            mockupImage: "/iebfinal.png",
          },
          8: {
            title: "Blog MindDev Perú",
            subtitle: "Diseño y desarrollo de blog para MindDev Perú, enfocado en contenido técnico y experiencias de usuario",
            aboutProject: "En este proyecto trabajé en conjunto con programadores. Objetivo: Diseñar y desarrollar una versión del Blog de MindDev, aplicando buenas prácticas de experiencia de usuario, diseño visual y desarrollo frontend. El resultado debe ser una versión moderna, atractiva, responsive y alineada con la identidad visual de Minddev. Se pidió específicamente que NO SE UTILICEN IMAGENES.",
            problem: "",
            userType: "",
            objectives: [],
            research: "",
            designSystem: "",
            methodology: ["Creación de tokens con nomenclaturas afines a Tailwind CSS", "Creación de componentes reutilizables y alineamientos de design system", "UX research (competencias, benchmarking, heurísticas, etc)", "Comunicación con desarrollo", "Escucha y recibimiento de feedback para mejora continua", "Diseño responsive"],
            analysis: "Este proyecto consiste en el diseño y análisis de un blog enfocado en SEO, con el objetivo de mejorar la legibilidad del contenido, la jerarquía visual y facilitar tanto la experiencia del usuario como el posicionamiento en buscadores.",
            resultado: "",
            images: ["/Desktopminddev.jpg", "/Mobile mindev.jpg"],
            presentationUrl: "https://www.figma.com/proto/ssteCZBadimaFwwYBOFvFy/Blog---Minddev?page-id=174%3A411&node-id=174-412&viewport=401%2C376%2C0.17&t=dFZreXGJpBPVkVyK-1&scaling=min-zoom&content-scaling=fixed",
            prototypeUrl: "",
            mockupImage: "/blog mindevv.png",
          },
          9: {
            title: "Start CRM",
            subtitle: "Sistema CRM completo con diseño centrado en la experiencia del usuario y eficiencia operativa",
            aboutProject: "Start CRM es una plataforma SaaS diseñada para ayudar a equipos a gestionar clientes, conversaciones y tareas en un espacio de trabajo centralizado.\n\nEl proyecto se enfoca en mejorar la usabilidad y la claridad de la información en un entorno complejo y orientado a datos, donde los usuarios necesitan actuar de forma rápida y eficiente.",
            problem: "Los usuarios suelen tener dificultades con las herramientas CRM debido a la sobrecarga de información, jerarquías poco claras y flujos de trabajo ineficientes.\n\nEn este caso, el principal desafío fue diseñar una interfaz que permita a los usuarios comprender rápidamente su estado actual, priorizar tareas y gestionar conversaciones sin generar sobrecarga cognitiva.",
            objectives: [
              "Mejorar la priorización y visibilidad de tareas a lo largo de toda la experiencia del CRM",
              "Reducir la carga cognitiva en los flujos de trabajo diarios, incluyendo conversaciones, contactos y gestión de tareas",
              "Diseñar un sistema de UI escalable que soporte múltiples módulos y futuras funcionalidades",
              "Crear una experiencia CRM clara, consistente e interconectada entre sus distintas secciones"
            ],
            research: "A través del análisis heurístico y el benchmarking, identifiqué problemas de usabilidad recurrentes en plataformas CRM, como ruido visual excesivo, jerarquías de tareas poco claras y patrones de navegación ineficientes.\n\nEstos insights guiaron decisiones de diseño enfocadas en la claridad, la priorización y la revelación progresiva de la información.",
            designSystem: "Se aplicó un enfoque basado en componentes y tokens para garantizar consistencia, escalabilidad y una colaboración más eficiente con desarrollo.\n\nSe utilizaron variables de diseño para gestionar colores, tipografía, espaciados y estados, permitiendo actualizaciones globales más simples y reduciendo inconsistencias visuales en la interfaz.\n\nBotones, cards, elementos de navegación y estados interactivos fueron diseñados como componentes reutilizables para facilitar el crecimiento futuro y el handoff con desarrollo.",
            userType: "El usuario principal es un profesional que trabaja a diario con múltiples conversaciones, tareas y clientes, y necesita comprender rápidamente las prioridades sin fricción.\n\nLa velocidad, la claridad y la previsibilidad son esenciales para apoyar la toma de decisiones diaria.",
            methodology: [
              "Investigación de referencia y benchmarking de CRMs líderes (HubSpot, Pipedrive, Salesforce).",
              "Creación de componentes reutilizables con diversos comportamientos y de tokens para facilitar la implementación a desarrollo.",
              "Definición de flujos clave: contactos, dashboard de métricas, calendario de tareas, administración de equipo (only admin), pipeline de ventas, conversaciones y ajustes.",
              "Diseño de arquitectura de información y jerarquías de contenido.",
              "Creación de wireframes y prototipos UI orientados a tareas reales de usuarios comerciales.",
              "Diseño visual, asegurando consistencia entre vistas (tablas, kanban, modales).",
              "Utilización de inspiración de librería opensource, con componentes personalizados dentro del UI.",
              "Metodología sprint, organización por épicas, HU, etc mediante Jira.",
              "Optimización UX enfocada en acciones frecuentes: crear, asignar, filtrar y priorizar."
            ],
            resultado: "El diseño final ofrece una experiencia CRM clara, estructurada y escalable, que potencia la productividad del usuario y reduce la carga cognitiva en las operaciones diarias.",
            images: [
              "/log-in.png",
              "/dashboard-wsp.png",
              "/dashboard-calendar-my account.png",
              "/contactos.png",
              "/contactos- acceso directo seleccion.png",
              "/contactos- asignar a.png",
              "/Conversaciones - whatsapp.png",
              "/Conversaciones - mails.png",
              "/Nuevo mensaje.png",
              "/Kanban vista completa.png",
              "/Administrar equipo - más.png",
              "/nuevo miembro- error.png",
              "/UI colors.png",
              "/Screenshot 2025-12-09 152951.png",
              "/Screenshot 2025-12-09 153902.png"
            ],
            presentationUrl: "",
            prototypeUrl: "",
            mockupImage: "/mockup start.png",
          },
        };

        const data = modalData[project.id] || {
          title: project.title,
          subtitle: project.description,
          aboutProject: "",
          methodology: [],
          analysis: "",
          resultado: "",
          research: "",
          designSystem: "",
          images: [],
          processImages: [],
          presentationUrl: "",
          prototypeUrl: "",
          mockupImage: project.image,
        };

        return (
          <ProjectModal
            key={project.id}
            isOpen={openModalId === project.id}
            onClose={() => setOpenModalId(null)}
            title={data.title}
            subtitle={data.subtitle}
            aboutProject={data.aboutProject}
            problem={data.problem}
            objectives={data.objectives}
            research={data.research}
            designSystem={data.designSystem}
            userType={data.userType}
            methodology={data.methodology}
            analysis={data.analysis}
            resultado={data.resultado}
            images={data.images}
            processImages={data.processImages}
            presentationUrl={data.presentationUrl}
            prototypeUrl={data.prototypeUrl}
            mockupImage={data.mockupImage}
          />
        );
      })}
    </section>
  );
};

export default Projects;