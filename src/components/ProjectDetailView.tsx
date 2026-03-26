"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectDetailViewProps {
  title: string;
  subtitle: string;
  /** Si true, no repite el título en la cabecera (p. ej. ya está en ProjectNavCarousel) */
  hideTitle?: boolean;
  proximamente?: boolean;
  aboutProject?: string;
  problem?: string;
  objectives?: string[];
  research?: string;
  designSystem?: string;
  userType?: string;
  methodology?: string[];
  analysis?: string;
  resultado?: string;
  impacto?: string;
  miRol?: string;
  images?: string[];
  processImages?: string[];
  presentationUrl?: string;
  prototypeUrl?: string;
  mockupImage?: string;
}

const ProjectDetailView = ({
  title,
  subtitle,
  hideTitle = false,
  proximamente = false,
  aboutProject,
  problem,
  objectives,
  research,
  designSystem,
  userType,
  methodology,
  analysis,
  resultado,
  impacto,
  miRol,
  images = [],
  processImages = [],
  presentationUrl,
  prototypeUrl,
  mockupImage,
}: ProjectDetailViewProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentAfterImageIndex, setCurrentAfterImageIndex] = useState(0);
  const [currentBeforeImageIndex, setCurrentBeforeImageIndex] = useState(0);
  const [currentProcessImageIndex, setCurrentProcessImageIndex] = useState(0);

  const titlesWithNewCopy = [
    "Propsail",
    "Start CRM",
    "Starbucks",
    "IEB+",
    "MindDev",
  ];
  const showPropuestaDeValor = titlesWithNewCopy.includes(title);
  const showInsight = titlesWithNewCopy.includes(title);
  const showSolucion = titlesWithNewCopy.includes(title);
  const showImpacto = titlesWithNewCopy.includes(title);

  const showProjectActions = Boolean(presentationUrl || prototypeUrl);
  const hasImageDemo = images && images.length > 0;
  const hasProcessDemo =
    (title === "Starbucks" || title === "Buenbit" || title === "Alpay") &&
    processImages &&
    processImages.length > 0;
  const hasAnyDemo = hasImageDemo || hasProcessDemo;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full pb-8 sm:pb-12">
        {!hideTitle && (
          <div className="relative px-0 pb-6 pt-2 sm:pb-8 sm:pt-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <Link
                href="/#projects"
                className="mt-0.5 flex min-h-[44px] min-w-[44px] flex-shrink-0 touch-manipulation items-center justify-center rounded-lg p-2 hover:bg-white/5 sm:rounded-xl sm:p-2.5"
                aria-label="Volver a proyectos"
              >
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <div className="min-w-0 flex-1 space-y-1 sm:space-y-2">
                <h1 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-4xl">{title}</h1>
                <p className="text-sm font-light text-muted-foreground sm:text-base">{subtitle}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
          </div>
        )}
        <div
          className={`w-full px-0 ${
            hideTitle
              ? "pt-2 pb-6 sm:pt-3 sm:pb-8 lg:pb-10"
              : "py-6 sm:py-8 lg:py-10"
          }`}
        >
          {proximamente ? (
                    <div className="py-16 sm:py-24 flex items-center justify-center">
                      <p className="text-xl sm:text-2xl text-muted-foreground">Próximamente..</p>
                    </div>
                  ) : (
                    <>
                      {/* Layout principal: Contenido + Mockup (ancho = grilla del contenedor) */}
                      <div className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
                          {/* Columna izquierda - Contenido */}
                          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                            {/* Sobre el Proyecto / Producto */}
                            {aboutProject && (
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                                  {showPropuestaDeValor ? "Propuesta de valor" : "Contexto"}
                                </h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {aboutProject}
                                </p>
                              </div>
                            )}

                            {/* Problema */}
                            {problem && (
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">Problema</h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {problem}
                                </p>
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
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {research}
                                </p>
                              </div>
                            )}

                            {/* Design system, componentes y tokens */}
                            {designSystem && (
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">Design system, componentes y tokens</h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {designSystem}
                                </p>
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
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                                  {showInsight ? "Insight" : "Análisis"}
                                </h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {analysis}
                                </p>
                              </div>
                            )}

                            {/* Resultado / Solución */}
                            {resultado && (
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                                  {showSolucion ? "Solución" : "Resultado"}
                                </h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {resultado}
                                </p>
                              </div>
                            )}

                            {/* Impacto potencial / Impacto */}
                            {impacto && (
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                                  {showImpacto ? "Impacto" : "Impacto potencial"}
                                </h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {impacto}
                                </p>
                              </div>
                            )}

                            {/* Mi rol */}
                            {miRol && (
                              <div className="space-y-2 sm:space-y-3">
                                <h3 className="text-lg sm:text-xl font-bold text-foreground">Mi rol</h3>
                                <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px] whitespace-pre-line">
                                  {miRol}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* Columna derecha - Mockup */}
                          {mockupImage && (
                            <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[min(85vh,920px)] flex items-start justify-center">
                              <div className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl h-full overflow-hidden relative">
                                <Image
                                  src={mockupImage}
                                  alt={title}
                                  fill
                                  className={`object-contain drop-shadow-2xl ${title === "Chichilo" ? "object-[50%_40%]" : ""}`}
                                  sizes="(max-width: 1024px) 100vw, 40vw"
                                  loading="lazy"
                                  key={mockupImage}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {showProjectActions && (
                        <div
                          className={`w-full ${hasAnyDemo ? "mt-8 pt-8 border-t border-border/50" : "mt-8 pt-2"}`}
                        >
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {presentationUrl && (
                              <a
                                href={presentationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                              >
                                {title === "Binance" || title === "Start CRM" || title === "MindDev"
                                  ? "Ver en Behance"
                                  : title === "Starbucks"
                                    ? "Ver Behance"
                                    : title === "IEB+"
                                      ? "Ver investigación"
                                      : "Ver presentación"}
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
                          </div>
                        </div>
                      )}

                      {/* Antes y Después para IEB y Starbucks, Layout lado a lado para MindDev, Carrusel para otros proyectos */}
                      {images && images.length > 0 && (
                        <div
                          id="project-carousel"
                          className={
                            showProjectActions
                              ? "mt-6 pt-6 border-t border-border/50"
                              : "mt-8 pt-8 border-t border-border/50"
                          }
                        >
                          {title === "IEB+" || title === "Starbucks" || title === "Buenbit" ? (
                            // Layout Antes y Después para IEB
                            <div className="w-full">
                              <div className="mb-4 sm:mb-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">Demostración del proyecto</h3>
                                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                              </div>
                              <div className="w-full">
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
                                          <motion.div
                                            key={currentBeforeImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="relative w-full h-full"
                                          >
                                            <Image
                                              src={images[currentBeforeImageIndex] || images[0]}
                                              alt={`${title} - Antes ${currentBeforeImageIndex + 1}`}
                                              fill
                                              className="object-contain object-center"
                                              sizes="(max-width: 768px) 100vw, 50vw"
                                              loading="lazy"
                                            />
                                          </motion.div>
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
                                                  className={`h-2 rounded-full transition-all duration-300 ${index === currentBeforeImageIndex
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
                                      <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50 ${title === "Buenbit"
                                          ? "h-[300px] sm:h-[350px] md:h-[400px]"
                                          : "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
                                        }`}>
                                        {images.length >= 2 && images[0] ? (
                                          <div className="relative w-full h-full">
                                            <Image
                                              src={images[0]}
                                              alt={`${title} - Antes`}
                                              fill
                                              className="object-contain object-center"
                                              sizes="(max-width: 768px) 100vw, 50vw"
                                              loading="lazy"
                                            />
                                          </div>
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
                                          <motion.div
                                            key={`${currentAfterImageIndex}-${images.slice(3)[currentAfterImageIndex]}`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="relative w-full h-full"
                                          >
                                            <Image
                                              src={images.slice(3)[currentAfterImageIndex] || images[images.length - 1]}
                                              alt={`${title} - Después ${currentAfterImageIndex + 1}`}
                                              fill
                                              className="object-contain object-center"
                                              sizes="(max-width: 768px) 100vw, 50vw"
                                              loading="lazy"
                                            />
                                          </motion.div>
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
                                                  className={`h-2 rounded-full transition-all duration-300 ${index === currentAfterImageIndex
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
                                      <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center bg-muted/50 dark:bg-black/50 ${title === "Buenbit"
                                          ? "h-[300px] sm:h-[350px] md:h-[400px]"
                                          : "min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
                                        }`}>
                                        {images[images.length - 1] && (
                                          <div className="relative w-full h-full">
                                            <Image
                                              src={images[images.length - 1]}
                                              alt={`${title} - Después`}
                                              fill
                                              className="object-contain object-center"
                                              sizes="(max-width: 768px) 100vw, 50vw"
                                              loading="lazy"
                                            />
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : title === "MindDev" ? (
                            // Carrusel para MindDev
                            <div className="w-full">
                              <div className="mb-4 sm:mb-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">Demostración del proyecto</h3>
                                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                              </div>
                              <div className="w-full">
                                <div className="relative">
                                  {/* Imagen actual */}
                                  <div className="relative w-full overflow-hidden rounded-xl flex items-center justify-center h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
                                    <AnimatePresence mode="wait">
                                      <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="relative w-full h-full"
                                      >
                                        <Image
                                          src={images[currentImageIndex]}
                                          alt={`${title} ${currentImageIndex + 1}`}
                                          fill
                                          className="object-contain object-center"
                                          sizes="(max-width: 768px) 100vw, 60vw"
                                          loading="lazy"
                                        />
                                      </motion.div>
                                    </AnimatePresence>
                                  </div>

                                  {/* Botones de navegación */}
                                  {images.length > 1 && (
                                    <>
                                      <button
                                        onClick={prevImage}
                                        className="absolute left-2 sm:left-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10 touch-manipulation"
                                        aria-label="Imagen anterior"
                                      >
                                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                      </button>

                                      <button
                                        onClick={nextImage}
                                        className="absolute right-2 sm:right-4 top-[200px] sm:top-[225px] md:top-[250px] lg:top-[275px] -translate-y-1/2 p-2.5 sm:p-3 bg-background/90 dark:bg-black/90 hover:bg-background dark:hover:bg-black rounded-full text-foreground dark:text-white transition-all hover:scale-110 active:scale-95 z-10 border border-border/50 dark:border-white/10 touch-manipulation"
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
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
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
                          ) : (
                            // Carrusel para otros proyectos
                            <div className="w-full">
                              <div className="mb-4 sm:mb-6 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold mb-2">{title === "Start CRM" || title === "Alpay" || title === "Propsail" ? "Demostración del proyecto" : "Capturas del Proyecto"}</h3>
                                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                              </div>
                              <div className="w-full">
                                <div className="relative">
                                  {/* Imagen actual */}
                                  <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center ${title === "Propsail" ? "h-[700px] sm:h-[800px] md:h-[900px] lg:h-[1000px] xl:h-[1100px]" : "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"}`}>
                                    <AnimatePresence mode="wait">
                                      <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="relative w-full h-full"
                                      >
                                        <Image
                                          src={images[currentImageIndex]}
                                          alt={`${title} ${currentImageIndex + 1}`}
                                          fill
                                          className={`${title === "Propsail" ? "object-contain" : "object-contain object-center"}`}
                                          sizes="(max-width: 768px) 100vw, 60vw"
                                          loading="lazy"
                                        />
                                      </motion.div>
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
                                            className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
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
                      {(title === "Starbucks" || title === "Buenbit" || title === "Alpay") && processImages && processImages.length > 0 && (
                        <div
                          id="project-process"
                          className={
                            hasImageDemo
                              ? "mt-8 pt-8 border-t border-border/50"
                              : showProjectActions
                                ? "mt-6 pt-6 border-t border-border/50"
                                : "mt-8 pt-8 border-t border-border/50"
                          }
                        >
                          <div className="w-full">
                            <div className="mb-4 sm:mb-6 text-center">
                              <h3 className="text-xl sm:text-2xl font-bold mb-2">{title === "Buenbit" ? "Otras variantes" : title === "Alpay" ? "Demostración del proyecto" : "Proceso"}</h3>
                              <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto"></div>
                            </div>
                            <div className="w-full">
                              <div className="relative">
                                {/* Imagen actual */}
                                <div className={`relative w-full overflow-hidden rounded-xl flex items-center justify-center ${title === "Buenbit" || title === "Alpay"
                                    ? "h-[300px] sm:h-[350px] md:h-[400px]"
                                    : "h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
                                  }`}>
                                  <AnimatePresence mode="wait">
                                    <motion.div
                                      key={currentProcessImageIndex}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: 0.15 }}
                                      className="relative w-full h-full"
                                    >
                                      <Image
                                        src={processImages[currentProcessImageIndex]}
                                        alt={`${title} - Proceso ${currentProcessImageIndex + 1}`}
                                        fill
                                        className="object-contain object-center"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                        loading="lazy"
                                      />
                                    </motion.div>
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
                                          className={`h-2 rounded-full transition-all duration-300 ${index === currentProcessImageIndex
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

                      <div className="mt-10 pt-8 border-t border-border/50 flex justify-center sm:mt-12 sm:pt-10">
                        <button
                          type="button"
                          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                          className="group inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:shadow-md active:scale-[0.98]"
                          aria-label="Volver arriba del proyecto"
                        >
                          <ChevronUp
                            className="h-5 w-5 transition-transform group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                          <span>Volver arriba</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
    </div>
  );
};

export default ProjectDetailView;
