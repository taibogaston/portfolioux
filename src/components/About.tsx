"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
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
      description: "Mantengo un enfoque proactivo hacia las nuevas tendencias y tecnologías para crear soluciones vanguardistas.",
    },
    {
      icon: Heart,
      title: "Pasión por el detalle",
      description: "Creo que los pequeños detalles marcan la diferencia entre un buen diseño y una experiencia excepcional.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <User className="w-4 h-4 mr-2" />
            Sobre mí
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Diseñando el futuro digital
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Con más de 5 años de experiencia en diseño UX/UI, me especializo en crear
            interfaces intuitivas y experiencias digitales que no solo se ven bien,
            sino que funcionan perfectamente para los usuarios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Mi filosofía de diseño
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Creo que el buen diseño no es solo estético, sino que debe resolver
                problemas reales y mejorar la vida de las personas. Cada proyecto es
                una oportunidad de crear algo que realmente importe.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi enfoque combina investigación profunda, pensamiento estratégico
                y ejecución meticulosa para entregar soluciones que superan las
                expectativas tanto de usuarios como de stakeholders.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "50+", label: "Proyectos completados" },
                { number: "3+", label: "Años de experiencia" },
                { number: "100%", label: "Clientes satisfechos" },
                { number: "24/7", label: "Disponibilidad" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-lg bg-card border border-border"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants} className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

