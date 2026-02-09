"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
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

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  aboutProject,
  problem,
  objectives,
  research,
  designSystem,
  userType,
  methodology,
  analysis,
  resultado,
  images = [],
  processImages = [],
  presentationUrl,
  prototypeUrl,
  mockupImage,
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedView, setSelectedView] = useState<'desktop' | 'mobile'>('desktop');
  const [currentAfterImageIndex, setCurrentAfterImageIndex] = useState(0);
  const [currentBeforeImageIndex, setCurrentBeforeImageIndex] = useState(0);
  const [currentProcessImageIndex, setCurrentProcessImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToCarousel = () => {
    const carouselElement = document.getElementById('project-carousel');
    if (carouselElement) {
      carouselElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      
      // Resetear índices cuando se abre el modal
      setCurrentImageIndex(0);
      setCurrentAfterImageIndex(0);
      setCurrentBeforeImageIndex(0);
      setCurrentProcessImageIndex(0);
      
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none"
          >
            <div
              className="bg-card dark:bg-[#0a0a0a] border border-border/30 rounded-2xl sm:rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] sm:max-h-[85vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header del Modal - Moderno e integrado */}
              <div className="px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6 lg:pt-8 pb-4 sm:pb-6 relative">
                <div className="flex items-start justify-between gap-2 sm:gap-4">
                  <div className="flex-1 min-w-0 space-y-1 sm:space-y-2">
                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight">
                      {title}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base font-light">{subtitle}</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-2 sm:p-2.5 min-h-[44px] min-w-[44px] hover:bg-white/5 rounded-lg sm:rounded-xl transition-all hover:scale-110 active:scale-95 flex-shrink-0 touch-manipulation flex items-center justify-center"
                    aria-label="Cerrar"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-8 lg:left-10 right-8 lg:right-10 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="overflow-y-auto max-h-[calc(95vh-100px)] sm:max-h-[calc(85vh-140px)] modal-scrollbar">
                <div className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-10">
                  {/* Layout principal: Contenido + Mockup */}
                  <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                      {/* Columna izquierda - Contenido */}
                      <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                      {/* Botones de acción - Arriba */}
                      {(presentationUrl || prototypeUrl || (title === "Start CRM" && images && images.length > 0) || (title === "Starbucks" && images && images.length > 0) || (title === "Propsail" && images && images.length > 0)) && (
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {presentationUrl && (
                            <a
                              href={presentationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                              {title === "IEB - Proyecto técnico" || title === "Starbucks" ? "Ver investigación" : "Ver presentación"}
                            </a>
                          )}
                          {prototypeUrl && (
                            <a
                              href={prototypeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                              {title === "Dogwalk App" ? "Ver Figma" : "Probar prototipo"}
                            </a>
                          )}
                          {title === "Start CRM" && images && images.length > 0 && (
                            <button
                              onClick={scrollToCarousel}
                              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                              Ver demostración
                            </button>
                          )}
                          {title === "Starbucks" && images && images.length > 0 && (
                            <button
                              onClick={scrollToCarousel}
                              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                              Ver demostración
                            </button>
                          )}
                          {title === "Propsail" && images && images.length > 0 && (
                            <button
                              onClick={scrollToCarousel}
                              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                              Ver demostración
                            </button>
                          )}
                        </div>
                      )}

                      {/* Sobre el Proyecto */}
                      {aboutProject && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Contexto</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{aboutProject}</p>
                        </div>
                      )}

                      {/* Problema */}
                      {problem && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Problema</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{problem}</p>
                        </div>
                      )}

                      {/* Tipo de usuario */}
                      {userType && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Tipo de usuario</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{userType}</p>
                        </div>
                      )}

                      {/* Objetivos */}
                      {objectives && objectives.length > 0 && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Objetivos</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                            {objectives.map((item, index) => (
                              <li key={index} className="flex gap-2 sm:gap-3 group">
                                <span className="text-primary font-bold text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0">•</span>
                                <span className="text-sm sm:text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Research */}
                      {research && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Research</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{research}</p>
                        </div>
                      )}

                      {/* Design system, componentes y tokens */}
                      {designSystem && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Design system, componentes y tokens</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{designSystem}</p>
                        </div>
                      )}

                      {/* Metodología */}
                      {methodology && methodology.length > 0 && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Metodología</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                            {methodology.map((item, index) => (
                              <li key={index} className="flex gap-2 sm:gap-3 group">
                                <span className="text-primary font-bold text-base sm:text-lg group-hover:scale-110 transition-transform flex-shrink-0">•</span>
                                <span className="text-sm sm:text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Análisis */}
                      {analysis && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Análisis</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{analysis}</p>
                        </div>
                      )}

                      {/* Resultado */}
                      {resultado && (
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">Resultado</h3>
                          <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">{resultado}</p>
                        </div>
                      )}
                    </div>

                    {/* Columna derecha - Mockup */}
                    {mockupImage && (
                      <div className="lg:col-span-5 lg:sticky lg:top-0 lg:self-start lg:h-[calc(85vh-140px)] flex items-start justify-center">
                        <div className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl h-full overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={mockupImage}
                            alt={title}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            key={mockupImage}
                          />
                        </div>
                      </div>
                    )}
                    </div>
                  </div>

                  {/* Antes y Después para IEB y Starbucks, Layout lado a lado para MindDev, Carrusel para otros proyectos */}
                  {images && images.length > 0 && (
                    <div id="project-carousel" className="mt-8 pt-8 border-t border-border/50">
                      {title === "IEB - Proyecto técnico" || title === "Starbucks" || title === "Desafio Buenbit" ? (
                        // Layout Antes y Después para IEB
                        <div className="max-w-6xl mx-auto">
                          <div className="mb-4 sm:mb-6 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Demostración del proyecto</h3>
                            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                          </div>
                          <div className="bg-card/90 dark:bg-black/90 rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-2">
                              {/* Antes */}
                              <div className="space-y-3 sm:space-y-4">
                                <div className="text-center">
                                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Antes</h4>
                                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                                </div>
                                {title === "Starbucks" && images.length > 1 ? (
                                  // Carrusel para Starbucks en la sección "Antes"
                                  <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50">
                                    <AnimatePresence mode="wait">
                                      <motion.img
                                        key={currentBeforeImageIndex}
                                        src={images[currentBeforeImageIndex] || images[0]}
                                        alt={`${title} - Antes ${currentBeforeImageIndex + 1}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-contain object-center"
                                      />
                                    </AnimatePresence>
                                    {images.length > 1 && (
                                      <>
                                        <button
                                          onClick={() => {
                                            // Para Starbucks, las primeras 3 imágenes son "Antes"
                                            const beforeImagesCount = 3;
                                            setCurrentBeforeImageIndex((prev) => (prev - 1 + beforeImagesCount) % beforeImagesCount);
                                          }}
                                          className="absolute left-2 sm:left-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10"
                                          aria-label="Imagen anterior"
                                        >
                                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                        <button
                                          onClick={() => {
                                            const beforeImagesCount = 3;
                                            setCurrentBeforeImageIndex((prev) => (prev + 1) % beforeImagesCount);
                                          }}
                                          className="absolute right-2 sm:right-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10"
                                          aria-label="Imagen siguiente"
                                        >
                                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                                          {Array.from({ length: 3 }).map((_, index) => (
                                            <button
                                              key={index}
                                              onClick={() => setCurrentBeforeImageIndex(index)}
                                              className={`h-2 rounded-full transition-all duration-300 ${
                                                index === currentBeforeImageIndex
                                                  ? "bg-primary w-10 shadow-lg shadow-primary/50"
                                                  : "bg-white/30 hover:bg-white/50 w-2"
                                              }`}
                                              aria-label={`Ir a imagen ${index + 1}`}
                                            />
                                          ))}
                                        </div>
                                      </>
                                    )}
                                  </div>
                                ) : (
                                  <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50 ${
                                    title === "Desafio Buenbit"
                                      ? "h-[300px] sm:h-[350px] md:h-[400px]" 
                                      : "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
                                  }`}>
                                  {images.length >= 2 && images[0] ? (
                                    <motion.img
                                      src={images[0]}
                                      alt={`${title} - Antes`}
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.4 }}
                                      className="w-full h-full object-contain object-center"
                                    />
                                  ) : (
                                    <div className="text-muted-foreground text-center p-8">
                                      <p className="text-sm">Imagen no disponible</p>
                                    </div>
                                  )}
                                </div>
                                )}
                              </div>

                              {/* Después */}
                              <div className="space-y-3 sm:space-y-4">
                                <div className="text-center">
                                  <h4 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Después</h4>
                                  <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                                </div>
                                {title === "Starbucks" && images.length > 3 ? (
                                  // Carrusel para Starbucks en la sección "Después" (imágenes desde índice 3)
                                  <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50">
                                    <AnimatePresence mode="wait">
                                      <motion.img
                                        key={`${currentAfterImageIndex}-${images.slice(3)[currentAfterImageIndex]}`}
                                        src={`${images.slice(3)[currentAfterImageIndex] || images[images.length - 1]}?v=${Date.now()}`}
                                        alt={`${title} - Después ${currentAfterImageIndex + 1}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-contain object-center"
                                      />
                                    </AnimatePresence>
                                    {images.length > 4 && (
                                      <>
                                        <button
                                          onClick={() => {
                                            const afterImages = images.slice(3);
                                            setCurrentAfterImageIndex((prev) => (prev - 1 + afterImages.length) % afterImages.length);
                                          }}
                                          className="absolute left-2 sm:left-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10"
                                          aria-label="Imagen anterior"
                                        >
                                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                        <button
                                          onClick={() => {
                                            const afterImages = images.slice(3);
                                            setCurrentAfterImageIndex((prev) => (prev + 1) % afterImages.length);
                                          }}
                                          className="absolute right-2 sm:right-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10"
                                          aria-label="Imagen siguiente"
                                        >
                                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
                                          {images.slice(3).map((_, index) => (
                                            <button
                                              key={index}
                                              onClick={() => setCurrentAfterImageIndex(index)}
                                              className={`h-2 rounded-full transition-all duration-300 ${
                                                index === currentAfterImageIndex
                                                  ? "bg-primary w-10 shadow-lg shadow-primary/50"
                                                  : "bg-white/30 hover:bg-white/50 w-2"
                                              }`}
                                              aria-label={`Ir a imagen ${index + 1}`}
                                            />
                                          ))}
                                        </div>
                                      </>
                                    )}
                                  </div>
                                ) : (
                                  <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50 ${
                                    title === "Desafio Buenbit"
                                      ? "h-[300px] sm:h-[350px] md:h-[400px]" 
                                      : "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
                                  }`}>
                                  {images[images.length - 1] && (
                                    <motion.img
                                      src={images[images.length - 1]}
                                      alt={`${title} - Después`}
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.4, delay: 0.1 }}
                                      className="w-full h-full object-contain object-center"
                                    />
                                  )}
                                </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : title === "Blog MindDev Perú" ? (
                        // Selector Desktop/Mobile para MindDev
                        <div className="max-w-6xl mx-auto">
                          <div className="mb-8 text-center">
                            <h3 className="text-2xl font-bold mb-2">Demostración del proyecto</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                          </div>
                          <div className="bg-card/90 dark:bg-black/90 rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/20">
                            {/* Selector de tabs */}
                            <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                              <button
                                onClick={() => setSelectedView('desktop')}
                                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all ${
                                  selectedView === 'desktop'
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                    : 'bg-white/10 text-muted-foreground hover:bg-white/20'
                                }`}
                              >
                                Desktop
                              </button>
                              <button
                                onClick={() => setSelectedView('mobile')}
                                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all ${
                                  selectedView === 'mobile'
                                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                                    : 'bg-white/10 text-muted-foreground hover:bg-white/20'
                                }`}
                              >
                                Mobile
                              </button>
                            </div>
                            
                            {/* Imagen según selección */}
                            <div className="relative w-full h-[1500px] sm:h-[1800px] md:h-[2200px] lg:h-[2600px] xl:h-[3000px] overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50 mx-auto">
                              <AnimatePresence mode="wait">
                                {selectedView === 'desktop' && images[0] && (
                                  <motion.img
                                    key="desktop"
                                    src={images[0]}
                                    alt={`${title} - Desktop`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-contain object-center"
                                  />
                                )}
                                {selectedView === 'mobile' && images[1] && (
                                  <motion.img
                                    key="mobile"
                                    src={images[1]}
                                    alt={`${title} - Mobile`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-contain object-center"
                                  />
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Carrusel para otros proyectos
                        <div className={`mx-auto ${title === "Propsail" ? "max-w-7xl" : "max-w-5xl"}`}>
                          <div className="mb-4 sm:mb-6 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{title === "Start CRM" || title === "Alpay" || title === "Propsail" ? "Demostración del proyecto" : "Capturas del Proyecto"}</h3>
                            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                          </div>
                          <div className="bg-card/90 dark:bg-black/90 rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/20">
                            <div className="relative">
                              {/* Imagen actual */}
                              <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center ${title === "Propsail" ? "h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] xl:h-[1100px]" : "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"}`}>
                                <AnimatePresence mode="wait">
                                  <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt={`${title} ${currentImageIndex + 1}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className={`w-full h-full ${title === "Propsail" ? "object-contain" : "object-contain object-center"}`}
                                  />
                                </AnimatePresence>
                              </div>

                              {/* Botones de navegación */}
                              {images.length > 1 && (
                                <>
                                  <button
                                    onClick={prevImage}
                                    className={`absolute left-2 sm:left-4 -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10 touch-manipulation ${title === "Propsail" ? "top-[350px] sm:top-[400px] md:top-[450px] lg:top-[500px] xl:top-[550px]" : "top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px]"}`}
                                    aria-label="Imagen anterior"
                                  >
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                  </button>

                                  <button
                                    onClick={nextImage}
                                    className={`absolute right-2 sm:right-4 -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10 touch-manipulation ${title === "Propsail" ? "top-[350px] sm:top-[400px] md:top-[450px] lg:top-[500px] xl:top-[550px]" : "top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px]"}`}
                                    aria-label="Imagen siguiente"
                                  >
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                  </button>

                                  {/* Indicadores */}
                                  <div className="flex justify-center gap-2.5 mt-6">
                                    {images.map((_, index) => (
                                      <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                          index === currentImageIndex
                                            ? "bg-primary w-10 shadow-lg shadow-primary/50"
                                            : "bg-white/30 hover:bg-white/50 w-2"
                                        }`}
                                        aria-label={`Ir a imagen ${index + 1}`}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Carrusel de Proceso para Starbucks, Variantes para Buenbit y Demostración para Alpay */}
                  {(title === "Starbucks" || title === "Desafio Buenbit" || title === "Alpay") && processImages && processImages.length > 0 && (
                    <div id="project-process" className="mt-8 pt-8 border-t border-border/50">
                      <div className="max-w-6xl mx-auto">
                        <div className="mb-4 sm:mb-6 text-center">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{title === "Desafio Buenbit" ? "Otras variantes" : title === "Alpay" ? "Demostración del proyecto" : "Proceso"}</h3>
                          <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                        </div>
                        <div className="bg-card/90 dark:bg-black/90 rounded-2xl p-4 sm:p-6 lg:p-8 border border-border/20">
                          <div className="relative">
                            {/* Imagen actual */}
                            <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center ${
                              title === "Desafio Buenbit" || title === "Alpay"
                                ? "h-[300px] sm:h-[350px] md:h-[400px]" 
                                : "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
                            }`}>
                              <AnimatePresence mode="wait">
                                <motion.img
                                  key={currentProcessImageIndex}
                                  src={processImages[currentProcessImageIndex]}
                                  alt={`${title} - Proceso ${currentProcessImageIndex + 1}`}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ duration: 0.4 }}
                                  className="w-full h-full object-contain object-center"
                                />
                              </AnimatePresence>
                            </div>

                            {/* Botones de navegación */}
                            {processImages.length > 1 && (
                              <>
                                <button
                                  onClick={() => {
                                    setCurrentProcessImageIndex((prev) => (prev - 1 + processImages.length) % processImages.length);
                                  }}
                                  className="absolute left-2 sm:left-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10"
                                  aria-label="Imagen anterior"
                                >
                                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>

                                <button
                                  onClick={() => {
                                    setCurrentProcessImageIndex((prev) => (prev + 1) % processImages.length);
                                  }}
                                  className="absolute right-2 sm:right-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10"
                                  aria-label="Imagen siguiente"
                                >
                                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>

                                {/* Indicadores */}
                                <div className="flex justify-center gap-2.5 mt-6">
                                  {processImages.map((_, index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentProcessImageIndex(index)}
                                      className={`h-2 rounded-full transition-all duration-300 ${
                                        index === currentProcessImageIndex
                                          ? "bg-primary w-10 shadow-lg shadow-primary/50"
                                          : "bg-white/30 hover:bg-white/50 w-2"
                                      }`}
                                      aria-label={`Ir a imagen ${index + 1}`}
                                    />
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
