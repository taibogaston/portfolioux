"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Figma, 
  PenTool, 
  Code, 
  Palette, 
  Users, 
  BarChart3, 
  Smartphone, 
  Monitor,
  Globe,
  Zap
} from "lucide-react";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Herramientas de Diseño",
      icon: Palette,
      skills: [
        { name: "Figma", level: 95, icon: Figma },
        { name: "Sketch", level: 90, icon: PenTool },
        { name: "Adobe XD", level: 85, icon: Palette },
        { name: "Principle", level: 80, icon: Zap },
      ],
    },
    {
      title: "Desarrollo Frontend",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 90, icon: Code },
        { name: "JavaScript", level: 85, icon: Code },
        { name: "React", level: 80, icon: Code },
        { name: "TypeScript", level: 75, icon: Code },
      ],
    },
    {
      title: "UX Research",
      icon: Users,
      skills: [
        { name: "User Interviews", level: 90, icon: Users },
        { name: "Usability Testing", level: 85, icon: BarChart3 },
        { name: "Personas", level: 88, icon: Users },
        { name: "Journey Mapping", level: 82, icon: BarChart3 },
      ],
    },
    {
      title: "Plataformas",
      icon: Monitor,
      skills: [
        { name: "Web Design", level: 95, icon: Globe },
        { name: "Mobile Design", level: 90, icon: Smartphone },
        { name: "Desktop Apps", level: 85, icon: Monitor },
        { name: "Responsive", level: 92, icon: Monitor },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
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
            <Code className="w-4 h-4 mr-2" />
            Habilidades
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Tecnologías y herramientas
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Un conjunto completo de habilidades que me permiten crear experiencias
            digitales excepcionales desde la investigación hasta la implementación.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1, 
                      duration: 0.5 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Otras competencias</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Design Systems",
              "Prototyping",
              "Wireframing",
              "User Testing",
              "A/B Testing",
              "Accessibility",
              "Motion Design",
              "Branding",
              "Illustration",
              "Photography"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.2 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
