"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlurText from "./BlurText";

const InfiniteScroller = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05, // Reducido para activar más rápido
  });

  const tools = [
    { 
      name: "Figma",
      icon: () => (
        <svg viewBox="0 0 200 300" className="w-8 h-8 md:w-10 md:h-10">
          <path fill="#0acf83" d="M50 300c-27.6 0-50-22.4-50-50v-50h50c27.6 0 50 22.4 50 50s-22.4 50-50 50z"/>
          <path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
          <path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50c-27.6 0-50-22.4-50-50z"/>
          <path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
          <path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
        </svg>
      ), 
      color: "text-[#F24E1E]" 
    },
    { 
      name: "Cursor", 
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/cursor.png" alt="Cursor" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ), 
      color: "text-[#000000]" 
    },
    { 
      name: "GitHub", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
          <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      color: "text-[#181717]" 
    },
    { 
      name: "Framer", 
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/Framer.png" alt="Framer" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ), 
      color: "text-[#0055FF]" 
    },
    { 
      name: "After Effects", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
          <rect x="2" y="2" width="20" height="20" rx="4" ry="4" fill="#211A54"/>
          <text x="12" y="16" textAnchor="middle" fill="#A699FF" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold">Ae</text>
        </svg>
      ), 
      color: "text-[#A699FF]" 
    },
    { 
      name: "Trello", 
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/trello.png" alt="Trello" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
      ), 
      color: "text-[#0079BF]" 
    },
    { 
      name: "Optimal Workshop", 
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/optimal workshop.png" alt="Optimal Workshop" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ), 
      color: "text-[#000]" 
    },
    { 
      name: "UX Tweak", 
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/ux tweak.png" alt="UX Tweak" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ), 
      color: "text-[#FF6B35]" 
    },
    { 
      name: "Google Trends", 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          <path fill="#fff" d="M8 10h8v4H8v-4z"/>
          <path fill="#4285F4" d="M9 11h2v2H9v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      ), 
      color: "text-[#4285F4]" 
    },
    {
      name: "Jira",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/jira_core.png" alt="Jira" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#0052CC]",
    },
    {
      name: "UX Pilot",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/ux pilot.png" alt="UX Pilot" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#0052CC]",
    },
    {
      name: "ChatGPT",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/chatgpt.png" alt="ChatGPT" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#10a37f]",
    },
    {
      name: "React Bits",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/react bits.png" alt="React Bits" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#61dafb]",
    },
    {
      name: "Design System",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/design system.png" alt="Design System" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#6366f1]",
    },
    {
      name: "Lucide",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/lucide.png" alt="Lucide" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#000]",
    },
    {
      name: "Material Design",
      icon: () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/material design logo.png" alt="Material Design" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
      ),
      color: "text-[#757575]",
    },
  ];

  // ✅ Reducido para mejor rendimiento en mobile
  const duplicatedTools = [...tools, ...tools];

  return (
    <section
      id="tools"
      ref={ref}
      className="py-20 relative overflow-hidden tech-section-bg"
    >
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
          <BlurText
            text="Tecnologías que utilizo"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
            animateBy="words"
            delay={80}
            direction="top"
            stepDuration={0.35}
          />
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siempre estoy aprendiendo nuevas tecnologías para mantenerme actualizada.
          </p>
        </motion.div>

        {/* Infinite Scroller */}
        <div className="relative">
          <div className="overflow-hidden py-4">
            <div className="flex space-x-16 md:space-x-20 animate-infinite-scroll">
              {duplicatedTools.map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.7 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + (index % tools.length) * 0.05, duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 flex flex-col items-center justify-center cursor-pointer relative z-20"
                >
                  <tool.icon />
                  <span className="mt-2 text-xs font-medium text-muted-foreground text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InfiniteScroller;
